/* Nivesguru shared calculator helpers (tax, formatting). Rules valid for FY 2025-26 and FY 2026-27. */
(function (root) {
    'use strict';

    function inr(v) {
        v = Math.round(Number(v) || 0);
        return '₹ ' + v.toLocaleString('en-IN');
    }

    function val(id) {
        var el = document.getElementById(id);
        if (!el) return 0;
        var n = parseFloat(String(el.value).replace(/,/g, ''));
        return isFinite(n) && n > 0 ? n : 0;
    }

    // Tax on income using [upperLimit, rate] slabs. Returns {tax, rows}.
    function slabTax(income, slabs) {
        var tax = 0, lower = 0, rows = [];
        for (var i = 0; i < slabs.length; i++) {
            var upper = slabs[i][0], rate = slabs[i][1];
            if (income > lower) {
                var part = Math.min(income, upper) - lower;
                var t = part * rate;
                rows.push({ from: lower, to: upper, rate: rate, amount: part, tax: t });
                tax += t;
            }
            lower = upper;
        }
        return { tax: tax, rows: rows };
    }

    var NEW_SLABS = [[400000, 0], [800000, 0.05], [1200000, 0.10], [1600000, 0.15],
        [2000000, 0.20], [2400000, 0.25], [Infinity, 0.30]];

    function oldSlabs(ageGroup) {
        var exempt = ageGroup === 'super' ? 500000 : (ageGroup === 'senior' ? 300000 : 250000);
        var s = [[exempt, 0]];
        if (exempt < 500000) s.push([500000, 0.05]);
        s.push([1000000, 0.20], [Infinity, 0.30]);
        return s;
    }

    // Surcharge with marginal relief. baseTaxFn(income) gives tax after rebate, before surcharge.
    function surcharge(income, tax, regime, baseTaxFn) {
        var bands = [[5000000, 0.10], [10000000, 0.15], [20000000, 0.25], [50000000, regime === 'new' ? 0.25 : 0.37]];
        var rate = 0, threshold = 0, prevRate = 0;
        for (var i = 0; i < bands.length; i++) {
            if (income > bands[i][0]) { prevRate = rate; rate = bands[i][1]; threshold = bands[i][0]; }
        }
        if (!rate) return 0;
        var sc = tax * rate;
        // Marginal relief: extra (tax + surcharge) over the threshold cannot exceed the extra income.
        var atThreshold = baseTaxFn(threshold);
        var limit = atThreshold * (1 + prevRate) + (income - threshold);
        if (tax + sc > limit) sc = Math.max(0, limit - tax);
        return sc;
    }

    /*
     * opts: { gross, other, salaried, ageGroup: 'normal'|'senior'|'super',
     *         ded80C, ded80D, hra, homeLoan, nps1B, otherDed, employerNps, profTax }
     */
    function computeTax(regime, o) {
        var gross = (o.gross || 0) + (o.other || 0);
        var stdDed, deductions, slabs;
        if (regime === 'new') {
            stdDed = o.salaried ? Math.min(75000, o.gross || 0) : 0;
            deductions = (o.employerNps || 0);
            slabs = NEW_SLABS;
        } else {
            stdDed = o.salaried ? Math.min(50000, o.gross || 0) : 0;
            deductions = Math.min(o.ded80C || 0, 150000) + (o.ded80D || 0) + (o.hra || 0) +
                Math.min(o.homeLoan || 0, 200000) + Math.min(o.nps1B || 0, 50000) +
                (o.otherDed || 0) + (o.employerNps || 0) + Math.min(o.profTax || 0, 2500);
            slabs = oldSlabs(o.ageGroup);
        }
        var taxable = Math.max(0, gross - stdDed - deductions);

        function afterRebate(inc) {
            var t = slabTax(inc, slabs).tax;
            if (regime === 'new') {
                if (inc <= 1200000) return 0;
                return Math.min(t, inc - 1200000); // marginal relief just above ₹12 lakh
            }
            return inc <= 500000 ? Math.max(0, t - 12500) : t;
        }

        var slab = slabTax(taxable, slabs);
        var tax = afterRebate(taxable);
        var rebate = slab.tax - tax;
        var sc = surcharge(taxable, tax, regime, afterRebate);
        var cess = (tax + sc) * 0.04;
        var total = Math.round(tax + sc + cess);
        return {
            regime: regime, grossIncome: gross, stdDeduction: stdDed, deductions: deductions,
            taxable: taxable, slabTax: slab.tax, rows: slab.rows, rebate: rebate,
            surcharge: sc, cess: cess, total: total,
            effectiveRate: gross > 0 ? total / gross * 100 : 0
        };
    }

    // Keeps number boxes and sliders (data-sync="otherId") in step and recalculates on every change.
    function bind(onChange) {
        var els = document.querySelectorAll('.ng-calc input, .ng-calc select');
        Array.prototype.forEach.call(els, function (el) {
            var handler = function () {
                if (el.dataset.sync) {
                    var other = document.getElementById(el.dataset.sync);
                    if (other) other.value = el.value;
                }
                onChange();
            };
            el.addEventListener('input', handler);
            el.addEventListener('change', handler);
        });
        onChange();
    }

    function setText(id, text) {
        var el = document.getElementById(id);
        if (el) el.textContent = text;
    }

    function setHTML(id, html) {
        var el = document.getElementById(id);
        if (el) el.innerHTML = html;
    }

    root.NG = {
        inr: inr, val: val, slabTax: slabTax, computeTax: computeTax, NEW_SLABS: NEW_SLABS,
        oldSlabs: oldSlabs, bind: bind, setText: setText, setHTML: setHTML
    };
    if (typeof module !== 'undefined') module.exports = root.NG;
})(typeof window !== 'undefined' ? window : globalThis);
