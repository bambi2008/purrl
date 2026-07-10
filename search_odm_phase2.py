"""Purrl ODM — Phase 2: Deep dive into promising leads + bandana/collar search"""
import cloudscraper
from bs4 import BeautifulSoup
import json
import time, re

scraper = cloudscraper.create_scraper(
    browser={'browser': 'chrome', 'platform': 'windows', 'mobile': False}
)

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

def fetch_page(url, label):
    """Fetch and extract key info from a page"""
    try:
        r = scraper.get(url, timeout=20, headers=HEADERS)
        soup = BeautifulSoup(r.text, 'html.parser')
        # Get page title
        title = soup.title.get_text(strip=True) if soup.title else 'N/A'
        # Get all text, clean it
        text = soup.get_text(separator=' ', strip=True)
        # Truncate to key info
        text_clean = re.sub(r'\s+', ' ', text)[:3000]
        print(f"\n{'='*60}")
        print(f"📄 {label}")
        print(f"   URL: {url[:80]}")
        print(f"   Title: {title[:120]}")
        # Look for company name, contact
        for pattern in ['公司名称', '联系人', '电话', '手机', '邮箱', '地址', 'Contact', 'Phone', 'Email', 'Tel']:
            idx = text_clean.find(pattern)
            if idx >= 0:
                snippet = text_clean[idx:idx+200]
                print(f"   🔎 {snippet[:150]}")
        return {'url': url, 'title': title, 'text_preview': text_clean[:2000]}
    except Exception as e:
        print(f"\n   ❌ {label}: {e}")
        return {'url': url, 'error': str(e)}

# === Deep dive into found leads ===
leads = [
    ("https://detail.1688.com/offer/705894332320.html", "广州君文儿箱包 - 1688 ODM猫包"),
    ("https://www.greenfield-bag.com/specialty-cases-pet-tech-solutions/pet-products/pet-bags/cat-carrier-bag.html", "Green Field - Cat Carrier"),
    ("https://www.alibaba.com/product-detail/OEM-ODM-Luxury-Linen-Fabric-Cat_1601283891735.html", "Alibaba - Luxury Linen Cat Bag"),
    ("https://www.made-in-china.com/products-search/hot-china-products/Cat_Carrier_Bag.html", "Made-in-China - Cat Carrier Bags"),
    ("https://portpets.com", "PortPets - OEM Pet Carrier"),
    ("https://www.ahxxodm.com/products/cwbj.html", "安徽星星轻纺 - 宠物包OEM"),
]

for url, label in leads:
    fetch_page(url, label)
    time.sleep(2)

# === Additional DDG searches for bandana and collar ===
print("\n\n" + "=" * 60)
print("🔍 Phase 2: targeted bandana & collar searches")
print("=" * 60)

extra_queries = [
    ("bandana", "亚麻 宠物 三角巾 围巾 定制 厂家 1688"),
    ("bandana", "linen pet bandana scarf custom wholesale manufacturer China"),
    ("bandana", "宠物口水巾 亚麻 定制 小批量 OEM"),
    ("collar", "有机棉 猫项圈 金属扣 定制 厂家 小批量"),
    ("collar", "棉织带 宠物项圈 定制 OEM 厂家直销"),
    ("collar", "custom organic cotton cat collar brass buckle manufacturer"),
    ("cat_bag", "亚麻 托特包 宠物 外出 定制 厂家 小批量"),
    ("cat_bag", "custom linen tote bag pet carrier low MOQ China"),
]

for product, query in extra_queries:
    try:
        r = scraper.get('https://html.duckduckgo.com/html/', params={'q': query}, timeout=20, headers=HEADERS)
        soup = BeautifulSoup(r.text, 'html.parser')
        hits = []
        for res in soup.select('.result')[:5]:
            title_el = res.select_one('.result__title')
            snippet_el = res.select_one('.result__snippet')
            link_el = res.select_one('.result__url')
            if title_el:
                hits.append({
                    'title': title_el.get_text(strip=True),
                    'snippet': snippet_el.get_text(strip=True)[:150] if snippet_el else '',
                    'link': link_el.get_text(strip=True) if link_el else '',
                })
        if hits:
            print(f"\n[{product}] {query[:60]}")
            for i, h in enumerate(hits, 1):
                print(f"  {i}. {h['title'][:100]}")
                print(f"     {h['snippet'][:100]}")
                print(f"     🔗 {h['link'][:100]}")
    except Exception as e:
        print(f"\n[{product}] ❌ {e}")
    time.sleep(1.5)

print("\n\n✅ Phase 2 complete")
