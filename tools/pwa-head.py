"""Add PWA/iOS head tags and service-worker registration to every page. Safe to re-run."""
import glob, os, re, sys

ROOT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
os.chdir(ROOT)
SKIP = {'google843786092a7f748f.html', 'hdu16dvs7z7j2wf1um4dj8md16j4v0.html'}
MARK = '<!-- ng-pwa -->'
META = ('\n    ' + MARK +
        '\n    <meta name="mobile-web-app-capable" content="yes">'
        '\n    <meta name="apple-mobile-web-app-capable" content="yes">'
        '\n    <meta name="apple-mobile-web-app-title" content="NivesGuru">'
        '\n    <meta name="apple-mobile-web-app-status-bar-style" content="default">'
        '\n    <meta name="application-name" content="NivesGuru">')

stats = dict(meta=0, icon=0, manifest=0, sw=0)
for f in sorted(glob.glob('*.html') + glob.glob('hi/*.html') + glob.glob('bn/*.html')):
    if os.path.basename(f) in SKIP:
        continue
    h = open(f, encoding='utf-8', newline='').read()
    o = h
    if MARK not in h:
        anchor = re.search(r'<link rel="preload" href="/assets/fonts/inter-var\.woff2"[^>]*>', h) or \
                 re.search(r'<meta name="viewport"[^>]*>', h)
        h = h[:anchor.end()] + META + h[anchor.end():]
        stats['meta'] += 1
        if 'rel="apple-touch-icon"' not in h:
            h = h.replace(MARK, MARK + '\n    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">', 1)
            stats['icon'] += 1
        if 'rel="manifest"' not in h:
            h = h.replace(MARK, MARK + '\n    <link rel="manifest" href="/manifest.json">', 1)
            stats['manifest'] += 1
    if not re.search(r'src="[./]*app\.js"', h):
        h = h.replace('</body>', '    <script src="/app.js" defer></script>\n</body>', 1)
        stats['sw'] += 1
    if h != o:
        open(f, 'w', encoding='utf-8', newline='').write(h)
print(stats)
