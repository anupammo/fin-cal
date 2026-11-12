import sys, importlib
from base import page
mods = sys.argv[1:]
for m in mods:
    p = importlib.import_module(m).PAGE
    page(p); print('built', p['slug'])
