import os
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
import glob,re
n=0
for f in glob.glob('*.html')+glob.glob('hi/*.html')+glob.glob('bn/*.html'):
    h=open(f,encoding='utf-8').read()
    m=re.search(r'class="navbar-brand[^"]*"[^>]*>\s*<img[^>]*>',h,re.S)
    if m and ('favicon-32x32.png' in m.group(0) or 'favicon-96x96.png' in m.group(0)):
        h=h.replace(m.group(0),m.group(0).replace('favicon-32x32.png','maskable_icon_x96.png').replace('favicon-96x96.png','maskable_icon_x96.png'),1); open(f,'w',encoding='utf-8').write(h); n+=1
print('logo fixed',n)
