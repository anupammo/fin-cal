/*! Nivesguru UI v2: theme toggle, calculator search, language switch, slider fill. No dependencies. */
(function () {
    'use strict';
    var doc = document, root = doc.documentElement;

    /* ---------- Theme ---------- */
    function store(k, v) { try { v === undefined ? localStorage.removeItem(k) : localStorage.setItem(k, v); } catch (e) { } }
    function read(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
    var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
    function applyTheme(t) {
        root.setAttribute('data-bs-theme', t);
        var metas = doc.querySelectorAll('meta[name="theme-color"]');
        for (var i = 0; i < metas.length; i++) if (!metas[i].media) metas[i].content = t === 'dark' ? '#0a0f1e' : '#ffffff';
        var b = doc.getElementById('ngTheme');
        if (b) b.setAttribute('aria-label', t === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }
    if (mq && mq.addEventListener) mq.addEventListener('change', function (e) { if (!read('ng-theme')) applyTheme(e.matches ? 'dark' : 'light'); });

    /* ---------- Calculator index for search ---------- */
    var CALCS = [
        ['Income Tax Calculator FY 2026-27', 'income-tax-calculator', 'Tax', 'itr new old regime slab salary'],
        ['In-Hand Salary Calculator', 'salary-calculator', 'Salary', 'ctc take home net pay'],
        ['GST Calculator', 'gst-calculator', 'Tax', 'gst 2.0 cgst sgst igst'],
        ['HRA Calculator', 'hra-calculator', 'Salary', 'house rent allowance exemption'],
        ['EPF Calculator', 'epf-calculator', 'Retirement', 'pf provident fund'],
        ['Gratuity Calculator', 'gratuity-calculator', 'Salary', 'labour code'],
        ['TDS Calculator', 'tds-calculator', 'Tax', 'tax deducted source'],
        ['Capital Gain Tax Calculator', 'capital-gain-tax-calculator', 'Tax', 'ltcg stcg shares property'],
        ['Service Tax Calculator', 'service-tax-calculator', 'Tax', ''],
        ['VAT Calculator', 'vat-calculator', 'Tax', ''],
        ['SIP Calculator', 'systematic-investment-plan-sip-return-calculator', 'Mutual funds', 'sip return mutual fund'],
        ['Step-Up SIP Calculator', 'step-up-sip-calculator', 'Mutual funds', 'top up sip'],
        ['Lumpsum Calculator', 'lumpsum-calculator-online', 'Mutual funds', 'one time investment'],
        ['SWP Calculator', 'swp-calculator-online', 'Mutual funds', 'withdrawal plan'],
        ['CAGR Calculator', 'cagr-calculator', 'Returns', 'growth rate'],
        ['Compound Interest Calculator', 'compound-interest-calculator', 'Returns', 'interest'],
        ['Simple Interest Calculator', 'simple-interest-calculator', 'Returns', 'interest'],
        ['Inflation Calculator', 'inflation-calculator-india', 'Returns', 'future value'],
        ['EMI Calculator', 'emi-calculator-online', 'Loans', 'home loan car loan personal loan'],
        ['Home Loan EMI Calculator with Prepayment', 'home-loan-emi-calculator', 'Loans', 'housing loan prepay part payment foreclosure'],
        ['Retirement Calculator', 'retirement-calculator', 'Retirement', 'corpus pension fire early retirement'],
        ['XIRR Calculator', 'xirr-calculator', 'Mutual funds', 'sip return irr annualised'],
        ['Post Office RD Calculator', 'post-office-rd-calculator', 'Post office', 'recurring deposit india post'],
        ['PPF Calculator', 'ppf-calculator', 'Government schemes', 'public provident fund'],
        ['Sukanya Samriddhi (SSY) Calculator', 'sukanya-samriddhi-yojana-ssy-calculator', 'Government schemes', 'girl child'],
        ['NPS Calculator', 'national-pension-system-nps-calculator', 'Retirement', 'national pension system'],
        ['APY Calculator', 'apy-calculator', 'Retirement', 'atal pension yojana'],
        ['SCSS Calculator', 'senior-citizens-savings-scheme-scss-calculator', 'Post office', 'senior citizen'],
        ['SCSS Interest Rate Calculator', 'scss-interest-rate-calculator', 'Post office', 'senior citizen'],
        ['Post Office MIS Calculator', 'post-office-monthly-income-scheme-mis-calculator', 'Post office', 'monthly income scheme'],
        ['Post Office TD Calculator', 'post-office-time-deposit-td-calculator', 'Post office', 'time deposit'],
        ['MSSC Calculator', 'mahila-samman-savings-certificate-mssc-calculator', 'Post office', 'mahila samman'],
        ['KVP Calculator', 'kvp-calculator', 'Government schemes', 'kisan vikas patra'],
        ['NSC Calculator', 'national-savings-certificate-nsc-calculator', 'Government schemes', 'national savings certificate'],
        ['SGB Calculator', 'sgb-calculator', 'Government schemes', 'sovereign gold bond'],
        ['PMJJBY Calculator', 'pradhan-mantri-jeevan-jyoti-bima-yojana-pmjjby-calculator', 'Insurance', 'jeevan jyoti bima'],
        ['PMSBY Calculator', 'pradhan-mantri-suraksha-bima-yojana-pmsby-calculator', 'Insurance', 'suraksha bima'],
        ['FD Calculator', 'fixed-deposit-fd-calculator', 'Bank deposits', 'fixed deposit'],
        ['RD Calculator', 'rd-calculator', 'Bank deposits', 'recurring deposit'],
        ['Savings Account Interest Calculator', 'sb-calculator', 'Bank deposits', 'sb savings'],
        ['SBI FD Calculator', 'sbi-fd-calculator', 'Bank deposits', 'state bank'],
        ['SBI RD Calculator', 'sbi-rd-calculator', 'Bank deposits', 'state bank'],
        ['SBI Savings Calculator', 'sbi-sb-calculator', 'Bank deposits', 'state bank'],
        ['PNB FD Calculator', 'pnb-fd-calculator', 'Bank deposits', 'punjab national bank'],
        ['PNB RD Calculator', 'pnb-rd-calculator', 'Bank deposits', 'punjab national bank'],
        ['PNB Savings Calculator', 'pnb-sb-calculator', 'Bank deposits', 'punjab national bank'],
        ['BOB FD Calculator', 'bob-fd-calculator', 'Bank deposits', 'bank of baroda'],
        ['BOB RD Calculator', 'bob-rd-calculator', 'Bank deposits', 'bank of baroda'],
        ['BOB Savings Calculator', 'bob-sb-calculator', 'Bank deposits', 'bank of baroda'],
        ['BOI FD Calculator', 'boi-fd-calculator', 'Bank deposits', 'bank of india'],
        ['BOI RD Calculator', 'boi-rd-calculator', 'Bank deposits', 'bank of india'],
        ['BOI Savings Calculator', 'boi-sb-calculator', 'Bank deposits', 'bank of india'],
        ['UBI FD Calculator', 'ubi-fd-calculator', 'Bank deposits', 'union bank of india'],
        ['UBI RD Calculator', 'ubi-rd-calculator', 'Bank deposits', 'union bank of india'],
        ['UBI Savings Calculator', 'ubi-sb-calculator', 'Bank deposits', 'union bank of india'],
        ['Bank Balance Check', 'bank-balance-check', 'Tools', 'missed call balance enquiry']
    ];

    var ICON_SEARCH = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>';

    function score(item, q) {
        if (!q) return 1;
        var hay = (item[0] + ' ' + item[2] + ' ' + item[3]).toLowerCase(), s = 0, words = q.toLowerCase().split(/\s+/);
        for (var i = 0; i < words.length; i++) {
            var w = words[i]; if (!w) continue;
            var idx = hay.indexOf(w);
            if (idx < 0) return 0;
            s += item[0].toLowerCase().indexOf(w) === 0 ? 10 : (idx < item[0].length ? 5 : 1);
        }
        return s;
    }

    var pal, input, list, active = 0, results = [], lastFocus;
    function buildPalette() {
        pal = doc.createElement('div');
        pal.className = 'ng-cmdk';
        pal.setAttribute('role', 'dialog');
        pal.setAttribute('aria-modal', 'true');
        pal.setAttribute('aria-label', 'Search calculators');
        pal.innerHTML = '<div class="ng-cmdk-box"><div class="ng-cmdk-head">' + ICON_SEARCH +
            '<input type="search" placeholder="Search 50+ calculators… e.g. tax, PPF, EMI" aria-label="Search calculators" autocomplete="off" role="combobox" aria-expanded="true" aria-controls="ngCmdkList">' +
            '<button type="button" class="ng-icon-btn" data-close aria-label="Close search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button></div>' +
            '<ul class="ng-cmdk-list" id="ngCmdkList" role="listbox"></ul>' +
            '<div class="ng-cmdk-foot"><span>↑↓ to move</span><span>Enter to open</span><span>Esc to close</span></div></div>';
        doc.body.appendChild(pal);
        input = pal.querySelector('input');
        list = pal.querySelector('ul');
        input.addEventListener('input', render);
        pal.addEventListener('click', function (e) { if (e.target === pal || e.target.closest('[data-close]')) closePalette(); });
        pal.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') { e.preventDefault(); closePalette(); }
            else if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
            else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
            else if (e.key === 'Enter' && results[active]) { e.preventDefault(); location.href = href(results[active][1]); }
            else if (e.key === 'Tab') { e.preventDefault(); input.focus(); }
        });
    }
    function href(slug) { return '/' + slug; }
    function render() {
        var q = input.value.trim();
        results = CALCS.map(function (c) { return [c, score(c, q)]; })
            .filter(function (x) { return x[1] > 0; })
            .sort(function (a, b) { return b[1] - a[1]; })
            .map(function (x) { return x[0]; }).slice(0, q ? 12 : 10);
        active = 0;
        list.innerHTML = results.length ? results.map(function (c, i) {
            return '<li role="presentation"><a role="option" id="ngOpt' + i + '" href="' + href(c[1]) + '"' + (i === 0 ? ' aria-selected="true"' : '') +
                '><span>' + c[0] + '</span><small>' + c[2] + '</small></a></li>';
        }).join('') : '<li class="ng-cmdk-empty">No calculator found. Try “tax”, “FD” or “pension”.</li>';
        input.setAttribute('aria-activedescendant', results.length ? 'ngOpt0' : '');
    }
    function move(d) {
        if (!results.length) return;
        var opts = list.querySelectorAll('a');
        opts[active].removeAttribute('aria-selected');
        active = (active + d + results.length) % results.length;
        opts[active].setAttribute('aria-selected', 'true');
        opts[active].scrollIntoView({ block: 'nearest' });
        input.setAttribute('aria-activedescendant', 'ngOpt' + active);
    }
    function openPalette(q) {
        if (!pal) buildPalette();
        lastFocus = doc.activeElement;
        input.value = q || '';
        render();
        pal.classList.add('open');
        doc.body.style.overflow = 'hidden';
        input.focus();
        try { input.setSelectionRange(input.value.length, input.value.length); } catch (e) { }
    }
    function closePalette() {
        pal.classList.remove('open');
        doc.body.style.overflow = '';
        if (lastFocus && lastFocus.focus && lastFocus.id !== 'ngHeroSearch') lastFocus.focus();
    }

    /* ---------- Language switch (uses the page's hreflang links) ---------- */
    function buildLang() {
        var holder = doc.getElementById('ngLang');
        if (!holder) return;
        var alts = doc.querySelectorAll('link[rel="alternate"][hreflang]'), map = {}, names = { en: 'English', hi: 'हिंदी', bn: 'বাংলা' };
        for (var i = 0; i < alts.length; i++) {
            var l = alts[i].getAttribute('hreflang').slice(0, 2);
            if (names[l] && !map[l]) map[l] = alts[i].href;
        }
        var langs = Object.keys(map);
        if (langs.length < 2) return;
        var cur = (root.getAttribute('lang') || 'en').slice(0, 2);
        var sel = doc.createElement('select');
        sel.className = 'form-select ng-lang';
        sel.setAttribute('aria-label', 'Language');
        sel.innerHTML = langs.map(function (l) { return '<option value="' + map[l] + '"' + (l === cur ? ' selected' : '') + '>' + names[l] + '</option>'; }).join('');
        sel.addEventListener('change', function () { location.href = sel.value; });
        holder.appendChild(sel);
    }

    /* ---------- Range slider fill ---------- */
    function fill(el) {
        var min = parseFloat(el.min) || 0, max = parseFloat(el.max) || 100, v = parseFloat(el.value) || 0;
        el.style.setProperty('--ng-fill', (max > min ? (v - min) / (max - min) * 100 : 0) + '%');
    }

    /* ---------- Init ---------- */
    function init() {
        applyTheme(root.getAttribute('data-bs-theme') || 'light');
        var tb = doc.getElementById('ngTheme');
        if (tb) tb.addEventListener('click', function () {
            var t = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(t); store('ng-theme', t);
        });
        var sb = doc.querySelectorAll('[data-ng-search]');
        for (var i = 0; i < sb.length; i++) sb[i].addEventListener('click', function (e) { e.preventDefault(); openPalette(''); });
        var hero = doc.getElementById('ngHeroSearch');
        if (hero) {
            // The hero box is a launcher: focusing it opens the full search, so typing never gets lost.
            hero.addEventListener('focus', function () { var v = hero.value; hero.value = ''; hero.blur(); openPalette(v); });
            var hb = doc.getElementById('ngHeroBtn');
            if (hb) hb.addEventListener('click', function () { openPalette(hero.value); });
        }
        doc.addEventListener('keydown', function (e) {
            var t = e.target, typing = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable);
            if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) { e.preventDefault(); openPalette(''); }
            else if (e.key === '/' && !typing) { e.preventDefault(); openPalette(''); }
        });
        buildLang();
        var ranges = doc.querySelectorAll('input[type="range"]');
        for (var j = 0; j < ranges.length; j++) {
            fill(ranges[j]);
            ranges[j].addEventListener('input', function () { fill(this); });
            ranges[j].addEventListener('change', function () { fill(this); });
        }
        // Keep fills right when page scripts change slider values programmatically
        setInterval(function () { for (var k = 0; k < ranges.length; k++) fill(ranges[k]); }, 800);
        // Highlight the current page in the menu
        var path = location.pathname.replace(/\.html$/, '').replace(/\/$/, '');
        var links = doc.querySelectorAll('.ng-nav .dropdown-item');
        for (var m = 0; m < links.length; m++) {
            var p = links[m].pathname.replace(/\.html$/, '').replace(/\/$/, '');
            if (p && p === path) links[m].setAttribute('aria-current', 'page');
        }
    }
    if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', init); else init();
})();
