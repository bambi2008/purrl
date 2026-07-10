import cloudscraper, json, time, re
from bs4 import BeautifulSoup

scraper = cloudscraper.create_scraper(browser={'browser': 'chrome', 'platform': 'windows', 'mobile': False})
H = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

print("=" * 60)
print("PHASE 6A: Alibaba luxury linen cat bag product page")
print("=" * 60)
try:
    r = scraper.get("https://www.alibaba.com/product-detail/OEM-ODM-Luxury-Linen-Fabric-Cat_1601283891735.html", timeout=20, headers=H)
    txt = re.sub(r'\s+', ' ', BeautifulSoup(r.text, 'html.parser').get_text(separator=' ', strip=True))
    print(f"Page length: {len(txt)} chars")
    
    # Key info
    for kw in ['supplier','company','MOQ','Minimum','Price','price','FOB','Material','material',
                'linen','Linen','cotton','Cotton','size','Size','lead time','sample']:
        idx = txt.lower().find(kw.lower())
        if idx >= 0:
            print(f"  [{kw}]: {txt[max(0,idx-10):idx+len(kw)+150][:200]}")
    
    # Emails
    emails = list(set(re.findall(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}', txt)))
    if emails: print(f"  📧 {', '.join(emails[:5])}")
except Exception as e:
    print(f"  ❌ {e}")

time.sleep(2)

print("\n" + "=" * 60)
print("PHASE 6B: Try DDG one more time for accessories (with 5s delay)")
print("=" * 60)

accessory_queries = [
    "宠物三角巾 围巾 定制 小批量 厂家 1688 淘宝",
    "猫围巾 口水巾 亚麻 定制 OEM",
    "cat bandana linen custom wholesale China manufacturer",
    "有机棉 织带 猫项圈 定制 金属扣 厂家",
    "cotton webbing cat collar custom brass buckle manufacturer China",
    "宠物配饰 围巾项圈 定制工厂 广州 浙江",
    "\"pet bandana\" \"custom\" \"manufacturer\" China",
    "宠物服饰 小批量定制 OEM ODM 亚麻 棉麻",
]

for q in accessory_queries:
    try:
        r = scraper.get('https://html.duckduckgo.com/html/', params={'q': q}, timeout=20, headers=H)
        soup = BeautifulSoup(r.text, 'html.parser')
        hits = [(res.select_one('.result__title'), res.select_one('.result__url')) 
                for res in soup.select('.result')[:5]]
        hits = [(t.get_text(strip=True), l.get_text(strip=True)) for t, l in hits if t]
        if hits:
            print(f"\n🔎 {q[:65]}")
            for t, l in hits[:3]:
                print(f"  📌 {t[:100]}")
                if l: print(f"     🔗 {l[:100]}")
    except:
        pass
    time.sleep(5)  # extra long delay

print("\n" + "=" * 60)
print("PHASE 6C: Google textise/cached versions")
print("=" * 60)

# Try textise dot iitty for Alibaba
try:
    r = scraper.get("https://r.jina.ai/http://www.alibaba.com/product-detail/OEM-ODM-Luxury-Linen-Fabric-Cat_1601283891735.html", 
                     timeout=20, headers=H)
    print(f"Jina AI reader: {len(r.text)} chars")
    print(r.text[:1500])
except Exception as e:
    print(f"  Jina ❌ {e}")

# Try to view Google cache
try:
    r = scraper.get("https://webcache.googleusercontent.com/search?q=cache:alibaba.com/product-detail/OEM-ODM-Luxury-Linen-Fabric-Cat_1601283891735", 
                     timeout=15, headers=H)
    print(f"\nGoogle Cache: {len(r.text)} chars")
except Exception as e:
    print(f"  Cache ❌ {e}")

print("\n✅ Phase 6 done")
