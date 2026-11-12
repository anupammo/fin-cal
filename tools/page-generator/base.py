import os
import json, re, subprocess, html as H

REPO = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
import os, datetime
TODAY = os.environ.get('NG_DATE', '2026-11-06')
TODAY_TEXT = datetime.date.fromisoformat(TODAY).strftime('%-d %B %Y')
SITE = 'https://nivesguru.in/'

# Template pieces come from the original GST page in git so the look stays identical.
TPL = subprocess.run(['git', '-C', REPO, 'show', '0c320d5:gst-calculator.html'],
                     capture_output=True, text=True, check=True).stdout

TOP = TPL[:TPL.index('<!-- JSON-LD markup -->')]
STYLE = TPL[TPL.index('<meta name="msapplication-TileColor"'):TPL.index('</head>')]
STYLE = re.sub(r'\s*<link rel="canonical"[^>]*>', '', STYLE)
NAV = TPL[TPL.index('<body>'):TPL.index('<div class="container py-5">')]
LINKS_FOOTER = TPL[TPL.index('<section class="internal-links'):TPL.index('</footer>') + len('</footer>')]
BOOTSTRAP_JS = '''    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossorigin="anonymous"></script>
'''

EXTRA_CSS = ''  # component styles now live in /assets/css/theme.css


def esc(s):
    return H.escape(s, quote=True)


def ld(obj):
    return '    <script type="application/ld+json">\n' + json.dumps(obj, ensure_ascii=False, indent=2) + '\n    </script>\n'


def field(id, label, value, mn, mx, step, prefix='₹', suffix='', slider=True, help=''):
    """Number box + optional slider kept in sync."""
    pre = f'<span class="input-group-text">{prefix}</span>' if prefix else ''
    suf = f'<span class="input-group-text">{suffix}</span>' if suffix else ''
    rng = (f'\n            <input type="range" class="form-range" id="{id}R" data-sync="{id}" '
           f'min="{mn}" max="{mx}" step="{step}" value="{value}" aria-label="{esc(label)} slider">') if slider else ''
    hp = f'\n            <div class="form-text">{help}</div>' if help else ''
    sync = f' data-sync="{id}R"' if slider else ''
    return f'''        <div class="mb-3">
            <label class="form-label" for="{id}">{label}</label>
            <div class="input-group">{pre}<input type="number" inputmode="decimal" class="form-control" id="{id}"{sync}
                min="0" step="any" value="{value}">{suf}</div>{rng}{hp}
        </div>
'''


def select(id, label, options, selected=None):
    opts = ''.join(f'<option value="{v}"{" selected" if v == selected else ""}>{t}</option>' for v, t in options)
    return f'''        <div class="mb-3">
            <label class="form-label" for="{id}">{label}</label>
            <select class="form-select" id="{id}">{opts}</select>
        </div>
'''


def check(id, label, checked=True):
    return f'''        <div class="form-check form-switch mb-3">
            <input class="form-check-input" type="checkbox" role="switch" id="{id}"{" checked" if checked else ""}>
            <label class="form-check-label" for="{id}">{label}</label>
        </div>
'''


def faq_html(faqs):
    items = []
    for i, (q, a) in enumerate(faqs):
        items.append(f'''                    <h3>{esc(q)}</h3>
                    <p>{a}</p>''')
    return '\n'.join(items)


def strip_tags(s):
    return re.sub(r'<[^>]+>', '', s)


def page(p):
    url = SITE + p['slug']
    img = p.get('image', SITE + 'res/meta/' + p['slug'] + '.png')
    schema = ''
    schema += ld({
        "@context": "https://schema.org", "@type": "WebApplication",
        "name": p['app_name'], "url": url, "applicationCategory": "FinanceApplication",
        "operatingSystem": "Any", "inLanguage": "en-IN", "description": p['description'],
        "offers": {"@type": "Offer", "price": "0", "priceCurrency": "INR"},
        "publisher": {"@type": "Organization", "name": "Nivesguru", "url": SITE}})
    schema += ld({
        "@context": "https://schema.org", "@type": "Article", "headline": p['h1'], "url": url,
        "image": [img], "datePublished": p.get('published', TODAY + 'T10:00:00+05:30'),
        "dateModified": TODAY + 'T10:00:00+05:30',
        "author": {"@type": "Person", "name": "Anupam Mondal", "url": "https://anupammondal.in"},
        "publisher": {"@type": "Organization", "name": "Nivesguru",
                      "logo": {"@type": "ImageObject", "url": SITE + "android-icon-192x192.png"}}})
    schema += ld({
        "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": SITE},
            {"@type": "ListItem", "position": 2, "name": p['crumb'], "item": url}]})
    schema += ld({
        "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
            {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": strip_tags(a)}}
            for q, a in p['faqs']]})

    t, d = esc(p['title']), esc(p['description'])
    head = f'''{TOP}<!-- JSON-LD markup -->
{schema}    <!-- Primary Meta Tags -->
    <title>{t}</title>
    <meta name="title" content="{t}">
    <meta name="description" content="{d}">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Nivesguru">
    <meta property="og:locale" content="en_IN">
    <meta property="og:url" content="{url}">
    <meta property="og:title" content="{t}">
    <meta property="og:description" content="{d}">
    <meta property="og:image" content="{img}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@Nivesguru">
    <meta name="twitter:title" content="{t}">
    <meta name="twitter:description" content="{d}">
    <meta name="twitter:image" content="{img}">
    <meta property="article:modified_time" content="{TODAY}T10:00:00+05:30">
    {STYLE.strip()}
    <link rel="canonical" href="{url}">
{EXTRA_CSS}</head>
'''
    share_text = esc(f"{p['app_name']} – free & accurate: {url}")
    from urllib.parse import quote
    wa = 'https://wa.me/?text=' + quote(f"{p['app_name']} – free & accurate: {url}")
    body = f'''{NAV}<div class="container py-5">
                <div class="row g-3">
                    <div class="col-lg-6 col-12">
                        <div class="card shadow h-100 border-0">
                            <div class="card-body p-4 p-md-5">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="./">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">{esc(p['crumb'])}</li>
                                    </ol>
                                </nav>
                                <h1 class="lead fs-3 mb-2">{esc(p['h1'])}</h1>
                                <p class="text-muted small mb-4">{p['tagline']}</p>
                                <form class="ng-calc" onsubmit="return false">
{p['form']}                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-12">
                        <div class="card shadow h-100 border-0">
                            <div class="card-body p-4 p-md-5" aria-live="polite">
{p['result']}
                                <div class="ng-share mt-4 pt-3 border-top">
                                    <a class="btn btn-success btn-sm rounded-pill px-3" href="{wa}" target="_blank" rel="noopener">Share on WhatsApp</a>
                                    <button type="button" class="btn btn-outline-secondary btn-sm rounded-pill px-3" onclick="window.print()">Print / Save PDF</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="card shadow border-0 my-3">
                            <div class="card-body px-4 px-md-5 small">
                                <time datetime="{TODAY}">Updated {TODAY_TEXT}</time> · Author: <a
                                    href="https://anupammondal.in" title="Posts by Anupam Mondal" rel="author">Anupam Mondal</a>
                                · {p.get('basis', 'Rules as applicable for FY 2026-27')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <section class="ng-content">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-10">
{p['content']}
                    <h2 id="faq">Frequently asked questions</h2>
{faq_html(p['faqs'])}
                    <p class="small text-muted mt-5">Disclaimer: Results are estimates for planning. Tax and scheme rules
                        change; confirm with official sources or a qualified advisor before acting.</p>
                </div>
            </div>
        </div>
    </section>
    {LINKS_FOOTER}
{BOOTSTRAP_JS}    <script src="calc-core.js"></script>
    <script>
{p['script']}
    </script>
    <script src="app.js"></script>
</body>
</html>
'''
    out = head + body
    with open(f"{REPO}/{p['slug']}.html", 'w', encoding='utf-8') as f:
        f.write(out)
    return out
