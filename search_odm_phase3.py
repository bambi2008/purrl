"""Purrl ODM — Phase 3: broader searches + deep dive"""
import cloudscraper
from bs4 import BeautifulSoup
import json, time, re

scraper = cloudscraper.create_scraper(
    browser={'browser': 'chrome', 'platform': 'windows', 'mobile': False}
)
HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

def ddg_search(query, n=6):
    """DuckDuckGo HTML search"""
    try:
        r = scraper.get('https://html.duckduckgo.com/html/', params={'q': query}, timeout=20, headers=HEADERS)
        soup = BeautifulSoup(r.text, 'html.parser')
        hits = []
        for res in soup.select('.result')[:n]:
            t = res.select_one('.result__title')
            s = res.select_one('.result__snippet')
            l = res.select_one('.result__url')
            if t:
                hits.append((t.get_text(strip=True), s.get_text(strip=True)[:200] if s else '', l.get_text(strip=True) if l else ''))
        return hits
    except Exception as e:
        return [('ERROR', str(e), '')]

# === Round 3: Broader keyword strategies ===
print("=" * 60)
print("🔍 Phase 3A: Broad Chinese B2B searches")
print("=" * 60)

searches = [
    ("bandana", "宠物围巾 定制 厂家 1688 小批量"),
    ("bandana", "宠物三角巾 口水巾 定制 批发 厂家"),
    ("bandana", "猫围巾 亚麻棉麻 定制 出口"),
    ("collar", "猫项圈 棉麻 定制 小批量 厂家 1688"),
    ("collar", "宠物项圈 织带 金属扣 定制 OEM"),
    ("collar", "猫项圈 出口 环保材料 定制 厂家"),
    ("bag", "宠物外出包 亚麻 定制 小批量 一件代发"),
    ("bag", "麻布 托特包 宠物 手提 定制 厂家直销"),
    ("bag", "亚麻猫包 竹提手 定制 OEM ODM"),
    ("all", "宠物用品 亚麻 棉麻 定制 厂家 小批量 MOQ"),
    ("all", "宠物服饰配饰 定制 厂家 OEM ODM 小起订"),
]

for product, query in searches:
    hits = ddg_search(query)
    if hits and hits[0][0] != 'ERROR':
        print(f"\n[{product}] {query[:60]}")
        for i, (t, s, l) in enumerate(hits[:4], 1):
            print(f"  {i}. {t[:100]}")
            if s: print(f"     {s[:120]}")
            if l: print(f"     🔗 {l[:100]}")
    time.sleep(1.2)

# === Phase 3B: Google via cloudscraper for English queries ===
print("\n\n" + "=" * 60)
print("🔍 Phase 3B: Google search (English queries)")
print("=" * 60)

google_queries = [
    "custom linen tote bag pet carrier manufacturer China low MOQ",
    "organic cotton cat collar custom brass hardware manufacturer",
    "linen pet bandana custom wholesale China factory",
    "pet accessories OEM ODM China natural materials linen cotton",
    "\"pet carrier\" \"linen\" \"OEM\" China manufacturer",
    "small batch custom cat bag China supplier MOQ 100",
]

for query in google_queries:
    try:
        r = scraper.get('https://www.google.com/search', params={'q': query, 'hl': 'en'}, timeout=15, headers=HEADERS)
        soup = BeautifulSoup(r.text, 'html.parser')
        hits = []
        for g in soup.select('h3')[:6]:
            txt = g.get_text(strip=True)
            if txt:
                # Try to find parent link
                parent = g.find_parent('a')
                link = parent.get('href', '') if parent else ''
                hits.append((txt, link[:100]))
        if hits:
            print(f"\n🔎 {query[:70]}")
            for i, (t, l) in enumerate(hits[:4], 1):
                print(f"  {i}. {t[:100]}")
                if l: print(f"     🔗 {l[:80]}")
    except Exception as e:
        print(f"\n  ❌ {e}")
    time.sleep(2)

# === Phase 3C: Try direct 1688 search page ===
print("\n\n" + "=" * 60)
print("🔍 Phase 3C: Direct 1688 search")
print("=" * 60)

queries_1688 = [
    "亚麻猫包定制",
    "宠物围巾定制亚麻",
    "猫项圈定制有机棉",
]

for q in queries_1688:
    try:
        url = f"https://s.1688.com/selloffer/offer_search.htm?keywords={q}&n=y"
        r = scraper.get(url, timeout=15, headers=HEADERS)
        # Search for offer titles in HTML
        soup = BeautifulSoup(r.text, 'html.parser')
        titles = soup.select('.offer-title, .title, h3, [class*="title"]')[:8]
        if titles:
            print(f"\n🔎 1688: {q}")
            for t in titles[:5]:
                txt = t.get_text(strip=True)
                if len(txt) > 8:
                    print(f"  📌 {txt[:120]}")
        else:
            # Check if blocked
            if 'login' in r.text.lower() or '验证' in r.text:
                print(f"\n🔎 1688: {q} — blocked (login/captcha)")
            else:
                # Try regex extraction
                matches = re.findall(r'<a[^>]*title="([^"]*猫[^"]*)"', r.text)
                if matches:
                    print(f"\n🔎 1688: {q}")
                    for m in matches[:5]:
                        print(f"  📌 {m[:120]}")
                else:
                    print(f"\n🔎 1688: {q} — no results extracted")
    except Exception as e:
        print(f"\n  ❌ {e}")
    time.sleep(2)

print("\n\n✅ Phase 3 complete")
