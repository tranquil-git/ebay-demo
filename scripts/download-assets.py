"""Download the demo's product photography once; the site uses local files."""
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
import urllib.request

ASSETS = {
    'sneakers': '1542291026-7eec264c27ff',
    'headphones': '1546435770-a3e426bf472b',
    'camera': '1516035069371-29a1b244cc32',
    'watch': '1524805444758-089113d48a6d',
    'handbag': '1548036328-c9fa89d128fa',
    'chair': '1598300042247-d088f8ab3a91',
    'vinyl': '1539375665275-f9de415ef9ac',
    'car': '1503376780353-7e6692767b70',
    'console': '1606813907291-d86efa9b94db',
    'lamp': '1507473885765-e6ed057f782c',
    'sunglasses': '1511499767150-a48a237f0083',
    'laptop': '1496181133206-80ce9b88a853',
    'speaker': '1608043152269-423dbba4e7e1',
    'coffee': '1517668808822-9ebb02f2a0e6',
    'jacket': '1551028719-00167b16eac5',
    'books': '1507842217343-583bb7270b66',
}
ROOT = Path(__file__).resolve().parent.parent / 'assets' / 'images'
ROOT.mkdir(parents=True, exist_ok=True)

def download(item):
    name, photo = item
    dest = ROOT / (name + '.jpg')
    if dest.exists():
        return name + ': cached'
    url = f'https://images.unsplash.com/photo-{photo}?w=900&q=85&fit=crop'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=40) as response:
        data = response.read()
        if not response.headers.get('Content-Type', '').startswith('image/'):
            raise ValueError('Not an image: ' + name)
    dest.write_bytes(data)
    return f'{name}: {len(data)} bytes'

if __name__ == '__main__':
    with ThreadPoolExecutor(max_workers=6) as pool:
        for result in pool.map(download, ASSETS.items()):
            print(result)
