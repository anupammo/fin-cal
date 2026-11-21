import os
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
import re, glob
NEW = [('salary-calculator', 'In-Hand Salary Calculator'), ('epf-calculator', 'EPF Calculator'),
       ('hra-calculator', 'HRA Calculator'), ('gratuity-calculator', 'Gratuity Calculator'),
       ('step-up-sip-calculator', 'Step-Up SIP Calculator'), ('cagr-calculator', 'CAGR Calculator')]
POPULAR = [('income-tax-calculator', 'Income Tax Calculator 2026-27')] + NEW[:4] + [('gst-calculator', 'GST Calculator (GST 2.0)')] + NEW[4:]
menu = '\n                                    <li><hr class="dropdown-divider"></li>' + ''.join(
    f'\n                                    <li><a class="dropdown-item" href="{s}">{t}</a></li>' for s, t in NEW)
block = '''
            <div class="row">
                <div class="col-12">
                    <div class="card border-0 bg-light my-2">
                        <div class="card-body">
                            <h2 class="fs-6 ps-3 mt-2">Popular salary &amp; tax calculators</h2>
                            <hr class="mx-3 w-25" />
                            <ul class="nav">''' + ''.join(
    f'\n                                <li class="nav-item"><a class="nav-link" href="{s}">{t}</a></li>' for s, t in POPULAR) + '''
                            </ul>
                        </div>
                    </div>
                </div>
            </div>'''
stats = {'menu': 0, 'block': 0, 'nomenu': [], 'noblock': []}
for f in sorted(glob.glob('*.html')):
    h = open(f, encoding='utf-8').read(); o = h
    m = re.search(r'(Finance Calculators\s*</a>\s*<ul class="dropdown-menu">)(.*?)(\s*</ul>)', h, re.S)
    if m and 'href="salary-calculator"' not in m.group(2):
        h = h[:m.end(2)] + menu + h[m.end(2):]; stats['menu'] += 1
    elif not m: stats['nomenu'].append(f)
    m = re.search(r'<section class="internal-links[^"]*">\s*<div class="container">', h)
    if m and 'Popular salary &amp; tax calculators' not in h:
        h = h[:m.end()] + block + h[m.end():]; stats['block'] += 1
    elif not m: stats['noblock'].append(f)
    if h != o: open(f, 'w', encoding='utf-8').write(h)
print(stats)
skip = {'404.html', 'offline.html', 'google843786092a7f748f.html', 'hdu16dvs7z7j2wf1um4dj8md16j4v0.html'}
added = 0
for f in stats['noblock']:
    if f in skip: continue
    h = open(f, encoding='utf-8').read()
    if 'Popular salary &amp; tax calculators' in h: continue
    i = h.find('<footer')
    if i < 0: print('no footer', f); continue
    sec = '<section class="internal-links py-4">\n        <div class="container">' + block + '\n        </div>\n    </section>\n    '
    h = h[:i] + sec + h[i:]
    open(f, 'w', encoding='utf-8').write(h); added += 1
print('added sections', added)
