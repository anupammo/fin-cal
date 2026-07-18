<div align="center">

<img src="https://nivesguru.in/android-icon-192x192.png" alt="NivesGuru logo" width="96">

# NivesGuru — Investment & Financial Calculators for India

**Free, fast, no-signup calculators for Indian savings schemes, deposits, loans, and taxes — in English, हिन्दी, and বাংলা.**

🌏 **Live:** [https://nivesguru.in](https://nivesguru.in)

![Pages](https://img.shields.io/badge/pages-148-blue)
![Languages](https://img.shields.io/badge/languages-EN%20·%20HI%20·%20BN-orange)
![PWA](https://img.shields.io/badge/PWA-installable-5A0FC8)
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](./LICENCE)
![Status](https://img.shields.io/badge/status-2026%20revamp%20in%20progress-brightgreen)

</div>

---

## 📌 About

NivesGuru is a free calculation toolset built to help Indians plan investments and understand government savings schemes — with real-time results, official rates, and zero cost or signup. Every calculator works offline (PWA) and is available in English, Hindi (`/hi`), and Bengali (`/bn`).

> 🚧 **2026 Revamp underway** — the site once served **8,500+ organic visitors in a single day**, and we're rebuilding to reclaim and exceed that record. See the [Revamp Plan](./docs/REVAMP-PLAN-2026.md), [Roadmap](./docs/ROADMAP.md), and [Checklist](./docs/CHECKLIST.md).

## 🧮 Calculators

### 🏛️ Post Office & Government Schemes
| Calculator | Link |
|---|---|
| Public Provident Fund (PPF) | [/ppf-calculator](https://nivesguru.in/ppf-calculator) |
| Sukanya Samriddhi Yojana (SSY) | [/sukanya-samriddhi-yojana-ssy-calculator](https://nivesguru.in/sukanya-samriddhi-yojana-ssy-calculator) |
| Senior Citizens' Savings Scheme (SCSS) | [/senior-citizens-savings-scheme-scss-calculator](https://nivesguru.in/senior-citizens-savings-scheme-scss-calculator) |
| Monthly Income Scheme (MIS) | [/post-office-monthly-income-scheme-mis-calculator](https://nivesguru.in/post-office-monthly-income-scheme-mis-calculator) |
| Mahila Samman Savings Certificate (MSSC) | [/mahila-samman-savings-certificate-mssc-calculator](https://nivesguru.in/mahila-samman-savings-certificate-mssc-calculator) |
| Time Deposit (TD) | [/post-office-time-deposit-td-calculator](https://nivesguru.in/post-office-time-deposit-td-calculator) |
| Kisan Vikas Patra (KVP) | [/kvp-calculator](https://nivesguru.in/kvp-calculator) |
| National Savings Certificate (NSC) | [/national-savings-certificate-nsc-calculator](https://nivesguru.in/national-savings-certificate-nsc-calculator) |
| Sovereign Gold Bond (SGB) | [/sgb-calculator](https://nivesguru.in/sgb-calculator) |

### 🏦 Bank Deposits — SBI · PNB · BOB · BOI · UBI
Fixed Deposit, Recurring Deposit, and Savings calculators per bank, e.g. [SBI FD](https://nivesguru.in/sbi-fd-calculator), [PNB RD](https://nivesguru.in/pnb-rd-calculator), [BOB SB](https://nivesguru.in/bob-sb-calculator) — plus generic [FD](https://nivesguru.in/fixed-deposit-fd-calculator), [RD](https://nivesguru.in/rd-calculator), and [SB](https://nivesguru.in/sb-calculator) tools.

### 👨‍👩‍👧 Pension & Insurance
[APY](https://nivesguru.in/apy-calculator) · [NPS](https://nivesguru.in/national-pension-system-nps-calculator) · [PMJJBY](https://nivesguru.in/pradhan-mantri-jeevan-jyoti-bima-yojana-pmjjby-calculator) · [PMSBY](https://nivesguru.in/pradhan-mantri-suraksha-bima-yojana-pmsby-calculator)

### 💰 Tax & Finance
[Income Tax](https://nivesguru.in/income-tax-calculator) · [GST](https://nivesguru.in/gst-calculator) · [Capital Gains](https://nivesguru.in/capital-gain-tax-calculator) · [TDS](https://nivesguru.in/tds-calculator) · [VAT](https://nivesguru.in/vat-calculator) · [Service Tax](https://nivesguru.in/service-tax-calculator)

### 📈 Investment & Loans
[SIP](https://nivesguru.in/systematic-investment-plan-sip-return-calculator) · [SWP](https://nivesguru.in/swp-calculator-online) · [Lumpsum](https://nivesguru.in/lumpsum-calculator-online) · [EMI](https://nivesguru.in/emi-calculator-online) · [Compound Interest](https://nivesguru.in/compound-interest-calculator) · [Simple Interest](https://nivesguru.in/simple-interest-calculator) · [Inflation](https://nivesguru.in/inflation-calculator-india)

### 🌐 Languages
Every calculator: **English** (root) · **हिन्दी** [`/hi/`](https://nivesguru.in/hi/) · **বাংলা** [`/bn/`](https://nivesguru.in/bn/) — with hreflang alternates.

## 🗂️ Project Structure

```
fin-cal/
├── index.html                  # Homepage
├── *.html                      # English calculator & info pages
├── hi/                         # Hindi versions
├── bn/                         # Bengali versions
├── fincal.css, bootstrap.min.css
├── app.js                      # Shared behaviors (calc logic per page)
├── sw.js                       # Service worker (PWA / offline)
├── manifest.json               # PWA manifest
├── sitemap.xml, robots.txt, feed.rss
├── res/, svg/                  # Images & icons
└── docs/                       # 📋 2026 revamp plan, roadmap, checklist
```

## 🚀 Run Locally

Pure static site — no build step (yet; an SSG migration is Phase 1 of the [roadmap](./docs/ROADMAP.md)).

```bash
git clone https://github.com/anupammo/fin-cal.git
cd fin-cal
# any static server works:
npx serve .          # or: python -m http.server 8080
# or drop into XAMPP htdocs and open http://localhost/fin-cal/
```

## 🛠️ Tech Stack

HTML5 · CSS3 / Bootstrap 5 · Vanilla JavaScript · PWA (service worker + manifest) · JSON-LD structured data · hreflang i18n · GitHub Pages hosting

**Tooling:** Google Search Console · GA4 · Lighthouse / PageSpeed Insights · Rich Results Test · Keyword Planner

## 📋 2026 Revamp Documentation

| Doc | What's inside |
|---|---|
| [REVAMP-PLAN-2026.md](./docs/REVAMP-PLAN-2026.md) | Full audit, 5-pillar strategy (E-E-A-T, freshness, rebuild, content, distribution), KPIs, risks |
| [ROADMAP.md](./docs/ROADMAP.md) | 6 phases, Jul 2026 → Mar 2027, with exit criteria and a Gantt view |
| [CHECKLIST.md](./docs/CHECKLIST.md) | Task-level checkboxes per phase — the working tracker |

## 🤝 Contributing

Issues and PRs welcome — especially rate corrections (cite the official source), Hindi/Bengali translation improvements, and new calculator ideas. Branch from `main`, keep URLs stable, and validate structured data before submitting.

## 👥 Authors

[@anupammo](https://www.github.com/anupammo) · [@bhritick](https://www.github.com/bhritick) · [@dmrinalwd](https://www.github.com/dmrinalwd)

## 📄 License

[GPL v3](./LICENCE)

## 📸 Screenshots

<img src="https://nivesguru.in/nivesguru-1.png" alt="NivesGuru homepage" width="320"> <img src="https://nivesguru.in/res/meta/national-savings-certificate-calculator.png" alt="NSC calculator" width="300"> <img src="https://nivesguru.in/res/meta/apy-calculator-nivesguru.png" alt="APY calculator" width="320">

---

<div align="center"><sub>NivesGuru is an educational tool, not investment advice. Rates are sourced from official RBI / India Post / bank publications and refreshed on a fixed schedule — see the <a href="./docs/REVAMP-PLAN-2026.md">Data Policy plans</a>.</sub></div>
