"""Apply the Nivesguru v2 design system to every HTML page. Safe to run repeatedly."""
import re, glob, os, sys

ROOT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
os.chdir(ROOT)
VER = '2'
SKIP = {'google843786092a7f748f.html', 'hdu16dvs7z7j2wf1um4dj8md16j4v0.html'}

THEME_INIT = ('<script>(function(){var t;try{t=localStorage.getItem("ng-theme")}catch(e){}'
              'if(t!=="light"&&t!=="dark"){t=window.matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}'
              'document.documentElement.setAttribute("data-bs-theme",t)})();</script>')
HEAD_TOP = ('\n    <!-- ng-theme:head -->\n    <meta name="color-scheme" content="light dark">\n    ' + THEME_INIT +
            '\n    <link rel="preload" href="/assets/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>')
BS_CSS = '<link rel="stylesheet" href="/assets/vendor/bootstrap.min.css">'
THEME_CSS = f'    <link rel="stylesheet" href="/assets/css/theme.css?v={VER}">\n'
BS_JS = '<script src="/assets/vendor/bootstrap.bundle.min.js" defer></script>'
THEME_JS = f'    <script src="/assets/js/theme.js?v={VER}" defer></script>\n'
SKIPLINK = '\n    <a class="visually-hidden-focusable ng-skip" href="#main">Skip to content</a>'

SVG_SEARCH = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>'
SVG_SUN = '<svg class="i-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>'
SVG_MOON = '<svg class="i-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>'
ACTIONS = ('\n                    <div class="ng-actions d-flex align-items-center order-lg-last ms-auto ms-lg-2">'
           '\n                        <span id="ngLang" class="d-none d-sm-inline-flex"></span>'
           f'\n                        <button type="button" class="ng-icon-btn ng-search-btn" data-ng-search aria-label="Search calculators">{SVG_SEARCH}<span class="d-none d-xl-inline">Search</span><kbd class="d-none d-xl-inline">/</kbd></button>'
           f'\n                        <button type="button" class="ng-icon-btn ng-theme-btn" id="ngTheme" aria-label="Toggle dark theme">{SVG_SUN}{SVG_MOON}</button>'
           '\n                    </div>')


def transform(h, fname):
    if '<!-- ng-theme:head -->' in h:
        return h, False
    # 1. Bootstrap CSS → self-hosted 5.3.3
    def css(m):
        tag = m.group(0)
        return BS_CSS if ('bootstrap' in tag and '.css' in tag and 'icons' not in tag) else tag
    h = re.sub(r'<link\b[^>]*>', css, h, flags=re.S)
    if BS_CSS not in h:
        h = h.replace('</head>', '    ' + BS_CSS + '\n</head>', 1)
    # 2. Head additions
    h = re.sub(r'(<meta name="viewport"[^>]*>)', r'\1' + HEAD_TOP, h, count=1)
    if '<!-- ng-theme:head -->' not in h:
        h = h.replace('<head>', '<head>' + HEAD_TOP, 1)
    h = h.replace('</head>', THEME_CSS + '</head>', 1)
    # 3. Bootstrap JS → self-hosted, deferred
    h = re.sub(r'<script\s+src="[^"]*bootstrap[^"]*\.bundle\.min\.js"[^>]*>\s*</script>', BS_JS, h, flags=re.S)
    # 4. Remove external Ashoka Chakra background image (extra request, now hidden anyway)
    h = re.sub(r"\s*background-image:\s*url\('https://upload\.wikimedia\.org[^']*'\);", '', h)
    # 5. Navbar: move out of <header>, make it the sticky ng-nav, add actions
    m = re.search(r'<nav class="navbar[^"]*"', h)
    if m:
        start = m.start()
        end = h.index('</nav>', start) + len('</nav>')
        nav = h[start:end]
        nav = re.sub(r'<nav class="navbar([^"]*)"', lambda x: '<nav class="navbar ng-nav' + re.sub(r'\b(bg-dark|navbar-dark|fixed-top)\b', '', x.group(1)).replace('  ', ' ').rstrip() + '" aria-label="Main"', nav, count=1)
        nav = re.sub(r'class="([^"]*)"', lambda x: 'class="' + re.sub(r'\s*\btext-white\b', '', x.group(1)).strip() + '"', nav)
        bm = re.search(r'class="navbar-brand[^"]*"', nav)
        if bm:
            a_end = nav.index('</a>', bm.end()) + len('</a>')
            nav = nav[:a_end] + ACTIONS + nav[a_end:]
        hs = h.find('<header')
        he = h.find('</header>')
        h = h[:start] + h[end:]
        if hs != -1 and hs < start < he:
            hs = h.find('<header')
            h = h[:hs] + nav + '\n    <span id="main"></span>\n    ' + h[hs:]
        else:
            h = h[:start] + nav + '\n    <span id="main"></span>' + h[start:]
    # 6. Skip link, homepage body class
    def body(mb):
        tag = mb.group(0)
        if fname == 'index.html':
            tag = tag.replace('<body', '<body class="ng-home"', 1) if 'class=' not in tag else tag
        return tag + SKIPLINK
    h = re.sub(r'<body\b[^>]*>', body, h, count=1)
    # 7. Lazy-load images below the header
    he = h.find('</header>')
    if he != -1:
        tail = re.sub(r'<img\b(?![^>]*\bloading=)', '<img loading="lazy" decoding="async"', h[he:])
        h = h[:he] + tail
    # 8. theme.js
    h = h.replace('</body>', THEME_JS + '</body>', 1)
    return h, True


files = sorted(glob.glob('*.html') + glob.glob('hi/*.html') + glob.glob('bn/*.html'))
changed = 0
for f in files:
    if os.path.basename(f) in SKIP:
        continue
    src = open(f, encoding='utf-8').read()
    out, did = transform(src, f)
    if did:
        open(f, 'w', encoding='utf-8').write(out)
        changed += 1
print('themed', changed, 'of', len(files))
