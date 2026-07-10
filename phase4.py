import cloudscraper, json, time, re
from bs4 import BeautifulSoup

scraper = cloudscraper.create_scraper(browser={'browser': 'chrome', 'platform': 'windows', 'mobile': False})
H = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

def fetch(url, label):
    try:
        r = scraper.get(url, timeout=20, headers=H)
        soup = BeautifulSoup(r.text, 'html.parser')
        txt = re.sub(r'\s+', ' ', soup.get_text(separator=' ', strip=True))
        print(f"\n{'='*60}\n📄 {label}\n   URL: {url[:90]}")
        emails = set(re.findall(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}', txt))
        if emails: print(f"   📧 {', '.join(list(emails)[:5])}")
        phones = re.findall(r'(?:电话|手机|Tel|Phone)[：:\s]*([+\d\s\-()（）]{7,20})', txt, re.I)
        if phones: print(f"   📞 {', '.join(phones[:3])}")
        for kw in ['MOQ','Minimum Order','起订量','FOB','OEM','ODM','工厂','Factory','Founded','成立','GOTS','BSCI']:
            idx = txt.lower().find(kw.lower())
            if idx >= 0: print(f"   🔎 [{kw}]: ...{txt[max(0,idx-10):idx+len(kw)+120]}...")
        return True
    except Exception as e:
        print(f"   ❌ {e}")
        return False

print("PHASE 4: Deep dive leads")
fetch("https://portpets.com", "PortPets")
time.sleep(2)
fetch("https://www.greenfield-bag.com/about/", "GreenField-About")
time.sleep(2)
fetch("https://www.greenfield-bag.com/contact/", "GreenField-Contact")
time.sleep(2)
fetch("https://www.ahxxodm.com", "安徽星星轻纺")
time.sleep(2)

print("\n\nPHASE 4B: DDG site-specific searches")
queries = [
    'site:made-in-china.com linen pet carrier bag',
    'site:globalsources.com pet carrier linen tote',
    '"cat carrier" "linen" site:alibaba.com',
]
for q in queries:
    try:
        r = scraper.get('https://html.duckduckgo.com/html/', params={'q': q}, timeout=20, headers=H)
        soup = BeautifulSoup(r.text, 'html.parser')
        for res in soup.select('.result')[:4]:
            t = res.select_one('.result__title')
            l = res.select_one('.result__url')
            if t: print(f"  📌 {t.get_text(strip=True)[:100]}\n     🔗 {l.get_text(strip=True)[:100] if l else ''}")
    except: pass
    time.sleep(3)

print("\n\nPHASE 4C: Etsy reverse lookup")
for q in ['linen cat carrier handmade', 'linen pet bandana', 'organic cotton cat collar']:
    try:
        r = scraper.get('https://html.duckduckgo.com/html/', params={'q': f'site:etsy.com {q}'}, timeout=20, headers=H)
        soup = BeautifulSoup(r.text, 'html.parser')
        for res in soup.select('.result')[:3]:
            t = res.select_one('.result__title')
            if t: print(f"  📌 {t.get_text(strip=True)[:100]}")
    except: pass
    time.sleep(3)

print("\n✅ Done")
