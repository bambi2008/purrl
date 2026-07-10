"""Purrl ODM Manufacturer Search — multi-channel"""
import cloudscraper
from bs4 import BeautifulSoup
import json
import time

scraper = cloudscraper.create_scraper(
    browser={'browser': 'chrome', 'platform': 'windows', 'mobile': False}
)

QUERIES = [
    ("cat_bag", "亚麻猫包 定制 ODM 厂家 1688"),
    ("cat_bag", "linen cat carrier bag OEM manufacturer China"),
    ("cat_bag", "麻布宠物外出包 定制 小批量 厂家直销"),
    ("bandana", "亚麻三角巾 宠物 定制 厂家"),
    ("collar", "有机棉宠物项圈 定制 小批量 厂家"),
    ("collar", "organic cotton pet collar custom manufacturer China"),
]

all_results = []

# === DuckDuckGo HTML ===
print("=" * 60)
print("🔍 DuckDuckGo HTML Search")
print("=" * 60)

for product, query in QUERIES:
    try:
        r = scraper.get('https://html.duckduckgo.com/html/', params={'q': query}, timeout=20)
        soup = BeautifulSoup(r.text, 'html.parser')
        hits = []
        for res in soup.select('.result')[:6]:
            title_el = res.select_one('.result__title')
            snippet_el = res.select_one('.result__snippet')
            link_el = res.select_one('.result__url')
            if title_el:
                hits.append({
                    'title': title_el.get_text(strip=True),
                    'snippet': snippet_el.get_text(strip=True) if snippet_el else '',
                    'link': link_el.get_text(strip=True) if link_el else '',
                })
        print(f"\n[{product}] {query}")
        for i, h in enumerate(hits, 1):
            print(f"  {i}. {h['title']}")
            print(f"     {h['snippet'][:120]}")
            print(f"     🔗 {h['link']}")
        all_results.append({'product': product, 'query': query, 'source': 'DuckDuckGo', 'hits': hits})
    except Exception as e:
        print(f"\n[{product}] {query} ❌ {e}")
    time.sleep(1.5)

# === Alibaba ===
print("\n" + "=" * 60)
print("🔍 Alibaba.com Search")
print("=" * 60)

alibaba_queries = [
    ("cat_bag", "linen tote bag cat carrier custom"),
    ("cat_bag", "custom linen pet carrier bag"),
    ("collar", "organic cotton pet collar custom buckle"),
]

for product, query in alibaba_queries:
    try:
        url = f"https://www.alibaba.com/trade/search?SearchText={query}&IndexArea=product_en"
        r = scraper.get(url, timeout=20)
        soup = BeautifulSoup(r.text, 'html.parser')
        # Try to find product cards
        cards = soup.select('[class*="card"]')[:10]
        titles = soup.select('h2, h3, [class*="title"]')[:10]
        links = soup.select('a[href*="product"]')[:10]
        print(f"\n[{product}] {query}")
        for t in titles[:5]:
            txt = t.get_text(strip=True)
            if len(txt) > 10:
                print(f"  📌 {txt[:100]}")
        if not titles:
            # Try different selectors
            for a in links[:5]:
                href = a.get('href', '')
                txt = a.get_text(strip=True)
                if len(txt) > 10:
                    print(f"  📌 {txt[:100]}")
                    print(f"     🔗 {href[:80]}")
        all_results.append({'product': product, 'query': query, 'source': 'Alibaba', 'hits': []})
    except Exception as e:
        print(f"\n[{product}] {query} ❌ {e}")
    time.sleep(2)

# === Made-in-China ===
print("\n" + "=" * 60)
print("🔍 Made-in-China.com Search")
print("=" * 60)

mic_queries = [
    ("cat_bag", "linen+tote+bag+custom"),
    ("cat_bag", "linen+pet+carrier"),
]

for product, query in mic_queries:
    try:
        url = f"https://www.made-in-china.com/search?keyword={query}"
        r = scraper.get(url, timeout=20)
        soup = BeautifulSoup(r.text, 'html.parser')
        titles = soup.select('a[title], h2, h3, .prod-title, [class*="title"]')[:10]
        print(f"\n[{product}] {query}")
        for t in titles[:5]:
            txt = t.get_text(strip=True)
            if len(txt) > 10:
                print(f"  📌 {txt[:120]}")
        all_results.append({'product': product, 'query': query, 'source': 'MadeInChina', 'hits': []})
    except Exception as e:
        print(f"\n[{product}] {query} ❌ {e}")
    time.sleep(2)

# Save results
with open('/d/hermes-workspace/projects/purrl/odm_search_results.json', 'w', encoding='utf-8') as f:
    json.dump(all_results, f, ensure_ascii=False, indent=2)

print("\n\n✅ Results saved to odm_search_results.json")
print(f"Total query rounds: {len(all_results)}")
