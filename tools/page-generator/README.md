# Calculator page generator

Builds the calculator pages (income tax, GST, salary, EPF, HRA, gratuity, step-up SIP, CAGR,
home loan, retirement, XIRR, Post Office RD) from one Python file per page (`p_*.py`).

```bash
cd tools/page-generator
NG_DATE=2026-11-12 python3 build.py p_xirr        # writes ../../xirr-calculator.html
python3 inject_links.py && python3 inject_links_2.py   # menu + related links
python3 ../apply-theme.py && python3 fix_logo.py       # design system + logo
```

- `base.py` holds the shared page shell (head, schema, nav, footer). It reuses the nav/footer of the
  original GST page from git commit `0c320d5`.
- Each `p_*.py` defines `PAGE` with: slug, title, description, h1, form, result, script, content, faqs.
- Give result elements ids that do not end in `R` next to a field id: sliders get the id `<field>R`.
- After building, check every number quoted in the article text against the calculator's output.
