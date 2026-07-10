import cloudscraper, re
from bs4 import BeautifulSoup

scraper = cloudscraper.create_scraper(browser={'browser': 'chrome', 'platform': 'windows', 'mobile': False})
H = {'User-Agent': 'Mozilla/5.0'}

# Google Cache of the Alibaba luxury linen cat bag
r = scraper.get("https://webcache.googleusercontent.com/search?q=cache:alibaba.com/product-detail/OEM-ODM-Luxury-Linen-Fabric-Cat_1601283891735", timeout=20, headers=H)
soup = BeautifulSoup(r.text, 'html.parser')
txt = re.sub(r'\s+', ' ', soup.get_text(separator=' ', strip=True))

print(f"Total text length: {len(txt)} chars")
print("=" * 60)

# Extract supplier info
for kw in ['supplier','Supplier','company','Company','MOQ','Minimum Order','Price','US $',
            'Material','material','Linen','linen','Fabric','fabric','Size','size',
            'Lead Time','lead time','Sample','sample','Port','port','FOB',
            'Contact','contact','Email','Phone','WhatsApp','WeChat']:
    indices = [m.start() for m in re.finditer(re.escape(kw), txt, re.I)]
    for idx in indices[:3]:
        snippet = txt[max(0,idx-20):idx+len(kw)+200]
        print(f"\n[{kw}]: ...{snippet[:220]}...")

# Try to find structured product info
print("\n\n" + "=" * 60)
print("STRUCTURED DATA SEARCH")
print("=" * 60)

# Look for product attributes, specifications
for pattern in ['Product Details', 'Specifications', 'Quick Details', 'Supply Ability',
                 'Packaging', 'attribute', 'property']:
    idx = txt.lower().find(pattern.lower())
    if idx >= 0:
        print(f"\n[{pattern}]:")
        print(txt[idx:idx+500])

# Save full text for reference
with open('/d/hermes-workspace/projects/purrl/alibaba_cache.txt', 'w', encoding='utf-8') as f:
    f.write(txt[:10000])

print("\n\n✅ Cache extracted, first 10K chars saved")
