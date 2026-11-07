# Nivesguru Design System v2

One look and feel for every page (English, हिंदी, বাংলা), built on Bootstrap 5.3 with a thin brand layer on top.

## Files

| File | What it does |
|------|--------------|
| `assets/vendor/bootstrap.min.css`, `bootstrap.bundle.min.js` | Bootstrap 5.3.3, self-hosted (no third-party CDN, no SRI risk) |
| `assets/fonts/inter-var.woff2` | Inter variable font, weights 400–800, subset incl. ₹ (31 KB). Licence: `Inter-OFL.txt` |
| `assets/css/theme.css` | Design tokens, light/dark themes, all components, overrides for older page styles |
| `assets/js/theme.js` | Theme toggle, calculator search (`/` or Ctrl+K), language switch, slider fill, current-page highlight |
| `calc-core.js` | Shared calculator maths and helpers (tax engine, ₹ formatting, input binding) |
| `serviceWorker.js` | Offline support: pages network-first, static files cached |
| `tools/apply-theme.py` | Adds the design system to any page that does not have it yet. Safe to re-run |

## Adding a new page

1. Copy an existing calculator page such as `salary-calculator.html` (it already has the full structure).
2. Change the title, meta tags, canonical, JSON-LD, form, result and article content.
3. Add it to `sitemap.xml`, the menu (`Finance Calculators` dropdown) and the search list in `assets/js/theme.js` (`CALCS`).
4. If you started from an old page, run `python3 tools/apply-theme.py` — it adds the theme files, sticky navbar, search, dark mode, skip link and lazy images.
5. When you change `theme.css` or `theme.js` in a way returning visitors must get at once, bump `?v=2` in `tools/apply-theme.py`, re-run it on all pages, and bump `VERSION` in `serviceWorker.js`.

## Tokens (CSS custom properties on `:root`)

| Token | Light | Dark | Use |
|-------|-------|------|-----|
| `--ng-bg` | `#f5f7fb` | `#0a0f1e` | Page background |
| `--ng-surface` | `#ffffff` | `#111830` | Cards, menus, inputs |
| `--ng-surface-2` | `#f0f3f9` | `#172040` | Subtle panels, table heads, KPI boxes |
| `--ng-border` | `#e2e7f0` | `#253055` | Hairlines |
| `--ng-text` | `#172033` | `#dfe4f0` | Body text |
| `--ng-muted` | `#5a6478` | `#9aa4bd` | Secondary text |
| `--ng-heading` | `#0b1b4a` | `#f2f5ff` | Headings (brand navy) |
| `--ng-primary` | `#2848d6` | `#7d97ff` | Links, buttons, focus, sliders |
| `--ng-saffron` / `--ng-green` | `#ff8c1a` / `#138a3e` | — / `#4cc47a` | Brand accents (tricolour line, formulas, "lower tax") |
| `--ng-radius-sm / --ng-radius / --ng-radius-lg` | 10 / 14 / 20 px | | Inputs / panels / cards |
| `--ng-shadow-sm / --ng-shadow / --ng-shadow-lg` | soft layered shadows | deeper in dark | Elevation |

All Bootstrap variables (`--bs-body-bg`, `--bs-primary`, `--bs-border-color`, …) are mapped to these tokens, so ordinary Bootstrap classes follow the theme automatically.

## Typography
- Inter, variable weight. Headings 700–800 with slight negative letter-spacing; body 16px / 1.6–1.75 line height.
- Numbers use tabular figures in tables and results so columns line up.
- Hindi and Bengali fall back to the system Noto fonts.

## Components
- **Navbar** (`.ng-nav`): sticky, translucent with blur, thin tricolour line on top. Two-column dropdowns on desktop, full-width panel on mobile. Right side: language picker (from the page's `hreflang` links), search button, theme toggle.
- **Search palette** (`.ng-cmdk`): opens with the search button, `/` or Ctrl/⌘+K; arrow keys + Enter; Esc closes.
- **Calculator layout**: two cards (inputs left, results right) inside the header, then the article.
- **Inputs**: 44px minimum touch height, number box + slider pairs (`field()` pattern), filled slider track.
- **Results**: `.ng-big` headline number, `.ng-kpi` stat boxes, `.ng-best` highlight, `.ng-bar` stacked bar with `.ng-legend`, `.ng-table`.
- **Article**: `.ng-content` (max 860px), `.ng-formula` for formulas, FAQ as `h3` + `p` with FAQPage JSON-LD.
- **Homepage**: `.ng-hero` with gradient headline, hero search, `.ng-chip` shortcuts and `.ng-stats`.
- **Footer**: deep navy in both themes, round social icons with screen-reader labels.

## Accessibility & quality checklist (all pages pass)
- Skip-to-content link, visible focus rings, `aria-live` results, labelled controls, keyboard-usable search.
- Contrast ≥ 3:1 for all visible text in both themes (automated sweep over all 152 pages); Lighthouse accessibility 98–100.
- `prefers-reduced-motion` respected; print stylesheet hides navigation, ads and share buttons.
- Dark mode follows the device setting until the visitor picks one; the choice is remembered. Theme is set before first paint (no flash).
