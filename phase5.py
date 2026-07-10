import cloudscraper, json, time, re
from bs4 import BeautifulSoup

scraper = cloudscraper.create_scraper(browser={'browser': 'chrome', 'platform': 'windows', 'mobile': False})
H = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

def fetch(url, label):
    try:
        r = scraper.get(url, timeout=20, headers=H)
        soup = BeautifulSoup(r.text, 'html.parser')
        txt = re.sub(r'\s+', ' ', soup.get_text(separator=' ', strip=True))
        print(f"\n{'='*60}\n📄 {label}\n   URL: {url[:100]}")
        
        # Emails
        emails = list(set(re.findall(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}', txt)))
        if emails: print(f"   📧 {', '.join(emails[:8])}")
        
        # Phones
        phones_raw = re.findall(r'[+\d][\d\s\-()（）]{6,20}', txt)
        phones_filtered = [p.strip() for p in phones_raw if len(re.sub(r'\D','',p)) >= 7]
        if phones_filtered: print(f"   📞 {', '.join(list(set(phones_filtered))[:5])}")
        
        # Key sentences
        for kw in ['MOQ','Minimum','起订','FOB','lead time','交期','sample','样品','capacity','产能',
                    'material','材质','fabric','面料','linen','亚麻','cotton','棉','custom','定制']:
            idx = txt.lower().find(kw.lower())
            if idx >= 0:
                snippet = txt[max(0,idx-15):idx+len(kw)+150]
                print(f"   🔎 [{kw}]: ...{snippet[:180]}...")
        
        # All links for navigation
        links = []
        for a in soup.select('a[href]')[:30]:
            h = a.get('href','')
            t = a.get_text(strip=True)
            if t and len(t) > 1:
                links.append((t[:30], h[:80]))
        if links:
            print(f"   🔗 Nav: {' | '.join([t for t,_ in links[:12]])}")
        
        return txt
    except Exception as e:
        print(f"   ❌ {e}")
        return ""

# 1. PortPets deeper
print("=== PORT PETS DEEP DIVE ===")
for page in ['/contact/', '/about/', '/products/', '/pet-carrier-handbag/']:
    fetch(f"https://portpets.com{page}", f"PortPets{page}")
    time.sleep(2)

# 2. Green Field product pages
print("\n\n=== GREEN FIELD DEEP DIVE ===")
fetch("https://www.greenfield-bag.com/specialty-cases-pet-tech-solutions/pet-products/pet-bags/", "GF-PetBags")
time.sleep(2)

# 3. 安徽星星 contact
print("\n\n=== 安徽星星 DEEP DIVE ===")
fetch("https://www.ahxxodm.com/contact.html", "星星-Contact")
time.sleep(2)
fetch("https://www.ahxxodm.com/about.html", "星星-About")
time.sleep(2)

# 4. Try DDG again with longer delay - more creative queries
print("\n\n=== DDG: More creative searches ===")
ddg_queries = [
    '宠物包 箱包厂 OEM ODM 亚麻 棉麻 联系方式',
    '"pet carrier" "manufacturer" China contact email WhatsApp',
    '广州 箱包 宠物 OEM 工厂 亚麻',
    '宠物用品 厂家 目录 ODM 亚麻 小批量',
    '箱包厂 BSCI 认证 宠物 猫包 定制',
]
for q in ddg_queries:
    try:
        r = scraper.get('https://html.duckduckgo.com/html/', params={'q': q}, timeout=20, headers=H)
        soup = BeautifulSoup(r.text, 'html.parser')
        hits = []
        for res in soup.select('.result')[:5]:
            t = res.select_one('.result__title')
            l = res.select_one('.result__url')
            if t:
                hits.append((t.get_text(strip=True), l.get_text(strip=True) if l else ''))
        if hits:
            print(f"\n🔎 {q[:60]}")
            for t, l in hits[:3]:
                print(f"  📌 {t[:100]}\n     🔗 {l[:100]}")
        else:
            print(f"\n🔎 {q[:60]} — no results")
    except Exception as e:
        print(f"  ❌ {e}")
    time.sleep(4)

print("\n✅ Phase 5 done")
