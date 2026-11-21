import os
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
import glob
NEW=[('home-loan-emi-calculator','Home Loan EMI Calculator'),('retirement-calculator','Retirement Calculator'),
     ('xirr-calculator','XIRR Calculator'),('post-office-rd-calculator','Post Office RD Calculator')]
anchor='<li><a class="dropdown-item" href="cagr-calculator">CAGR Calculator</a></li>'
pa='<li class="nav-item"><a class="nav-link" href="cagr-calculator">CAGR Calculator</a></li>'
n=0
for f in glob.glob('*.html'):
    h=open(f,encoding='utf-8').read(); o=h
    if anchor in h and 'href="home-loan-emi-calculator">Home Loan' not in h:
        h=h.replace(anchor,anchor+''.join(f'\n                                    <li><a class="dropdown-item" href="{s}">{t}</a></li>' for s,t in NEW),1)
    if pa in h and 'nav-link" href="home-loan-emi-calculator"' not in h:
        h=h.replace(pa,pa+''.join(f'\n                                <li class="nav-item"><a class="nav-link" href="{s}">{t}</a></li>' for s,t in NEW),1)
    if h!=o: open(f,'w',encoding='utf-8').write(h); n+=1
print('inject2 updated',n)
