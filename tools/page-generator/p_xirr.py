from base import field

form = '''        <p class="small text-muted mb-2">Enter each investment as a <b>negative</b> amount and each withdrawal
            or today's value as a <b>positive</b> amount.</p>
        <div class="table-responsive">
            <table class="table table-sm align-middle mb-2" id="flows">
                <thead><tr><th scope="col">Date</th><th scope="col">Amount (₹)</th><th scope="col"><span class="visually-hidden">Remove</span></th></tr></thead>
                <tbody id="rows"></tbody>
            </table>
        </div>
        <div class="d-flex flex-wrap gap-2 mb-4">
            <button type="button" class="btn btn-outline-primary btn-sm rounded-pill px-3" id="addRow">+ Add cash flow</button>
            <button type="button" class="btn btn-outline-secondary btn-sm rounded-pill px-3" id="clearRows">Clear</button>
        </div>
        <details class="mb-2">
            <summary class="fw-semibold mb-2">Fill in a SIP automatically</summary>
''' + field('sipAmt', 'Monthly SIP amount', 10000, 0, 1000000, 500, slider=False) \
    + '''            <div class="mb-3">
                <label class="form-label" for="sipStart">First SIP date</label>
                <input type="date" class="form-control" id="sipStart" value="2023-11-05">
            </div>
''' + field('sipN', 'Number of instalments', 36, 1, 600, 1, prefix='', slider=False) \
    + field('sipVal', 'Current value of the investment', 450000, 0, 100000000, 1000, slider=False) \
    + '''            <button type="button" class="btn btn-primary btn-sm rounded-pill px-3" id="fillSip">Fill cash flows</button>
        </details>
'''

result = '''                                <h2 class="h5 mb-3">Your annualised return</h2>
                                <div class="ng-kpi mb-3"><small>XIRR</small><span class="ng-big" id="xirr">–</span></div>
                                <div class="row g-2 mb-3">
                                    <div class="col-6"><div class="ng-kpi"><small>Total invested</small><b id="inv">–</b></div></div>
                                    <div class="col-6"><div class="ng-kpi"><small>Total received / value</small><b id="out">–</b></div></div>
                                    <div class="col-6"><div class="ng-kpi"><small>Gain</small><b id="gain">–</b></div></div>
                                    <div class="col-6"><div class="ng-kpi"><small>Absolute return</small><b id="abs">–</b></div></div>
                                </div>
                                <p class="small mb-0" id="msg"></p>'''

script = r'''        var tbody = document.getElementById('rows');
        function addRow(d, a) {
            var tr = document.createElement('tr');
            tr.innerHTML = '<td><input type="date" class="form-control form-control-sm" aria-label="Date" value="' + (d || '') + '"></td>' +
                '<td><input type="number" inputmode="decimal" step="any" class="form-control form-control-sm" aria-label="Amount" value="' + (a === undefined ? '' : a) + '"></td>' +
                '<td><button type="button" class="btn btn-sm btn-light" aria-label="Remove this cash flow">✕</button></td>';
            tbody.appendChild(tr);
        }
        function iso(d) { return d.toISOString().slice(0, 10); }
        function flows() {
            var out = [];
            Array.prototype.forEach.call(tbody.rows, function (tr) {
                var ins = tr.querySelectorAll('input'), d = ins[0].value, a = parseFloat(ins[1].value);
                if (d && isFinite(a) && a !== 0) out.push({ t: new Date(d + 'T00:00:00Z').getTime(), a: a });
            });
            return out.sort(function (x, y) { return x.t - y.t; });
        }
        function npv(r, f) {
            var t0 = f[0].t, s = 0;
            for (var k = 0; k < f.length; k++) s += f[k].a / Math.pow(1 + r, (f[k].t - t0) / 864e5 / 365);
            return s;
        }
        function xirr(f) {
            var r = 0.1;
            for (var it = 0; it < 60; it++) {          // Newton's method
                var v = npv(r, f), h = 1e-6, d = (npv(r + h, f) - v) / h;
                if (!isFinite(d) || d === 0) break;
                var nr = r - v / d;
                if (!isFinite(nr) || nr <= -0.9999) break;
                if (Math.abs(nr - r) < 1e-10) return nr;
                r = nr;
            }
            var lo = -0.9999, hi = 10, flo = npv(lo, f), fhi = npv(hi, f);   // fall back to bisection
            if (flo * fhi > 0) return NaN;
            for (var j = 0; j < 300; j++) {
                var mid = (lo + hi) / 2, fm = npv(mid, f);
                if (Math.abs(fm) < 1e-7) return mid;
                if (fm * flo < 0) { hi = mid; } else { lo = mid; flo = fm; }
            }
            return (lo + hi) / 2;
        }
        function calc() {
            var f = flows(), inv = 0, out = 0;
            f.forEach(function (x) { if (x.a < 0) inv -= x.a; else out += x.a; });
            NG.setText('inv', NG.inr(inv)); NG.setText('out', NG.inr(out)); NG.setText('gain', NG.inr(out - inv));
            NG.setText('abs', inv ? ((out / inv - 1) * 100).toFixed(2) + '%' : '–');
            if (!inv || !out) { NG.setText('xirr', '–'); NG.setText('msg', 'Add at least one investment (negative) and one withdrawal or current value (positive).'); return; }
            var r = xirr(f);
            NG.setText('xirr', isFinite(r) ? (r * 100).toFixed(2) + '%' : 'Not found');
            var days = Math.round((f[f.length - 1].t - f[0].t) / 864e5);
            NG.setText('msg', isFinite(r) ? 'Across ' + f.length + ' cash flows over ' + days + ' days. XIRR is the yearly rate that makes all your cash flows balance out.' : 'No single rate fits these cash flows. Check the signs and dates.');
        }
        tbody.addEventListener('input', calc);
        tbody.addEventListener('change', calc);
        tbody.addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) { b.closest('tr').remove(); calc(); } });
        document.getElementById('addRow').addEventListener('click', function () { addRow(iso(new Date()), ''); tbody.rows[tbody.rows.length - 1].querySelector('input[type=number]').focus(); });
        document.getElementById('clearRows').addEventListener('click', function () { tbody.innerHTML = ''; addRow('', ''); calc(); });
        document.getElementById('fillSip').addEventListener('click', function () {
            var amt = NG.val('sipAmt'), n = Math.min(Math.round(NG.val('sipN')), 600), start = document.getElementById('sipStart').value;
            if (!start || !amt || !n) return;
            tbody.innerHTML = '';
            var d = new Date(start + 'T00:00:00Z');
            for (var k = 0; k < n; k++) {
                var dk = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + k, d.getUTCDate()));
                addRow(iso(dk), -amt);
            }
            addRow(iso(new Date()), NG.val('sipVal'));
            calc();
        });
        [['2022-04-12', -100000], ['2023-08-01', -50000], ['2024-12-20', -50000], ['2026-11-12', 265000]].forEach(function (x) { addRow(x[0], x[1]); });
        calc();'''

content = '''                    <h2>What is XIRR?</h2>
                    <p><b>XIRR (extended internal rate of return)</b> is the yearly return of an investment where money
                        goes in and comes out on <b>different dates</b> — a SIP, a few lump sums, partial withdrawals
                        or dividends. It is the single annual rate that makes the value of all your cash flows add up to
                        zero. Mutual fund statements and apps report your SIP returns as XIRR.</p>

                    <h2>How to use this calculator</h2>
                    <ol>
                        <li>Enter every investment with its date as a <b>negative</b> amount.</li>
                        <li>Enter every withdrawal (redemption, dividend) as a <b>positive</b> amount.</li>
                        <li>Add today's value of what you still hold as a positive amount dated today.</li>
                    </ol>
                    <p>For a regular SIP, open “Fill in a SIP automatically”, enter the amount, first date, number of
                        instalments and current value, and the calculator creates all the rows for you.</p>

                    <h2>Example</h2>
                    <p>₹1,00,000 invested in April 2022, ₹50,000 in August 2023 and ₹50,000 in December 2024, worth
                        ₹2,65,000 in November 2026. The absolute return is 32.5%, but that gain was earned over
                        four and a half years with money added at different times, so the XIRR is about <b>8.0% a
                        year</b> — a much more honest picture.</p>

                    <h2>XIRR vs CAGR vs absolute return</h2>
                    <div class="table-responsive"><table class="table table-bordered">
                        <thead><tr><th>Measure</th><th>Best for</th></tr></thead>
                        <tbody>
                            <tr><td>Absolute return</td><td>Total gain as a percentage, ignoring time</td></tr>
                            <tr><td><a href="cagr-calculator">CAGR</a></td><td>One investment, one start and end value</td></tr>
                            <tr><td>XIRR</td><td>Many investments or withdrawals on different dates (SIPs, top-ups, SWPs)</td></tr>
                        </tbody>
                    </table></div>

                    <h2>Related calculators</h2>
                    <p><a href="systematic-investment-plan-sip-return-calculator">SIP calculator</a> · <a href="step-up-sip-calculator">Step-up SIP</a> ·
                        <a href="cagr-calculator">CAGR calculator</a> · <a href="lumpsum-calculator-online">Lumpsum calculator</a></p>
'''

faqs = [
    ('What is a good XIRR for a mutual fund SIP?',
     'Over 5 years or more, an XIRR of 10–14% is considered good for an equity fund in India. Over short periods XIRR swings a lot with the market, so judge it over the long term.'),
    ('Why is my XIRR higher than my absolute return?',
     'Absolute return ignores time. If much of your money was invested recently, the same gain was earned in a shorter time, so the yearly rate (XIRR) can be higher than it looks.'),
    ('How is XIRR different from CAGR?',
     'CAGR assumes one investment and one final value. XIRR handles many investments and withdrawals on different dates, so it is the right measure for SIPs.'),
    ('Is XIRR the same as Excel\'s XIRR function?',
     'Yes. This calculator uses the same method: it finds the rate at which the present value of all dated cash flows, using a 365-day year, equals zero.'),
]

PAGE = dict(
    slug='xirr-calculator',
    title='XIRR Calculator: SIP & Mutual Fund Returns Online | Nivesguru',
    description='Free XIRR calculator for SIPs, lump sums and withdrawals on different dates. Auto-fill SIP cash flows and get your true annualised mutual fund return.',
    app_name='XIRR Calculator',
    h1='XIRR Calculator – True Return on SIPs & Mutual Funds',
    crumb='XIRR Calculator',
    tagline='Dated cash flows · SIP auto-fill · same method as Excel XIRR',
    basis='Same method as the spreadsheet XIRR function',
    form=form, result=result, script=script, content=content, faqs=faqs,
)
