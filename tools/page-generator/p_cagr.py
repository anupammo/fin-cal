from base import field

form = (field('pv', 'Initial investment value', 100000, 1000, 10000000, 1000)
        + field('fv', 'Final value', 250000, 1000, 50000000, 1000)
        + field('yrs', 'Duration', 5, 0.5, 40, 0.5, prefix='', suffix='years'))

result = '''                                <h2 class="h5 mb-3">Your return</h2>
                                <div class="ng-kpi mb-3"><small>CAGR (compound annual growth rate)</small><span class="ng-big" id="cagr">–</span></div>
                                <div class="row g-2 mb-3">
                                    <div class="col-6"><div class="ng-kpi"><small>Absolute return</small><b id="abs">–</b></div></div>
                                    <div class="col-6"><div class="ng-kpi"><small>Total gain</small><b id="gain">–</b></div></div>
                                </div>
                                <p id="msg" class="small"></p>
                                <table class="table table-sm ng-table">
                                    <thead><tr><th>Year</th><th class="text-end">Value at this CAGR</th></tr></thead>
                                    <tbody id="yearRows"></tbody></table>'''

script = r'''        function calc() {
            var pv = NG.val('pv'), fv = NG.val('fv'), n = NG.val('yrs');
            if (!pv || !n) { NG.setText('cagr', '–'); return; }
            var c = Math.pow(fv / pv, 1 / n) - 1;
            NG.setText('cagr', (c * 100).toFixed(2) + '%');
            NG.setText('abs', ((fv / pv - 1) * 100).toFixed(2) + '%');
            NG.setText('gain', NG.inr(fv - pv));
            var rule = c > 0 ? 'At this rate money doubles in about ' + (Math.log(2) / Math.log(1 + c)).toFixed(1) + ' years.' : '';
            NG.setText('msg', rule);
            var rows = '';
            for (var y = 1; y <= Math.min(Math.ceil(n), 40); y++) {
                rows += '<tr><td>' + y + '</td><td class="text-end">' + NG.inr(pv * Math.pow(1 + c, Math.min(y, n))) + '</td></tr>';
            }
            NG.setHTML('yearRows', rows);
        }
        NG.bind(calc);'''

content = '''                    <h2>What is CAGR?</h2>
                    <p><b>CAGR (compound annual growth rate)</b> is the steady yearly rate at which an investment
                        would have grown from its starting value to its ending value. It smooths out ups and downs, so
                        you can fairly compare a stock, mutual fund, property or business that you held for different
                        periods.</p>
                    <p class="ng-formula">CAGR = (Final value ÷ Initial value)^(1 ÷ years) − 1</p>

                    <h2>Example</h2>
                    <p>₹1,00,000 invested grows to ₹2,50,000 in 5 years. CAGR = (2.5)^(1/5) − 1 = <b>20.11%</b> a year.
                        The absolute return is 150%, but that number ignores time — CAGR tells you it is equivalent to
                        earning about 20% every year.</p>

                    <h2>CAGR vs absolute return vs XIRR</h2>
                    <div class="table-responsive"><table class="table table-bordered">
                        <thead><tr><th>Measure</th><th>Use it for</th></tr></thead>
                        <tbody>
                            <tr><td>Absolute return</td><td>Holding periods under one year</td></tr>
                            <tr><td>CAGR</td><td>A single lump-sum investment held for more than a year</td></tr>
                            <tr><td>XIRR</td><td>Many cash flows at different dates, such as SIPs or partial withdrawals</td></tr>
                        </tbody>
                    </table></div>

                    <h2>Typical long-term CAGR in India (for context)</h2>
                    <ul>
                        <li>Fixed deposits and small savings schemes: about 6.5–8.2% (PPF 7.1%, SCSS 8.2%).</li>
                        <li>Gold: historically around 9–11% over long periods.</li>
                        <li>Large-cap equity indices: historically around 10–13% over 15–20 years.</li>
                    </ul>
                    <p>Past returns do not guarantee future returns.</p>

                    <h2>Related calculators</h2>
                    <p><a href="lumpsum-calculator-online">Lumpsum calculator</a> · <a href="step-up-sip-calculator">Step-up SIP calculator</a> ·
                        <a href="compound-interest-calculator">Compound interest calculator</a> · <a href="inflation-calculator-india">Inflation calculator</a></p>
'''

faqs = [
    ('How do you calculate CAGR?',
     'Divide the final value by the initial value, raise the result to the power of 1 divided by the number of years, and subtract 1. Multiply by 100 for a percentage.'),
    ('What is a good CAGR?',
     'It depends on the asset. Beating inflation (about 4–6% in India) is the minimum; 10–12% over the long term is considered good for equity investments.'),
    ('What is the difference between CAGR and XIRR?',
     'CAGR works for a single investment and a single end value. XIRR handles many investments and withdrawals on different dates, so it is the right measure for SIPs.'),
    ('Can CAGR be negative?',
     'Yes. If the final value is lower than the initial value, CAGR is negative, showing the average yearly loss.'),
]

PAGE = dict(
    slug='cagr-calculator',
    title='CAGR Calculator: Compound Annual Growth Rate Online | Nivesguru',
    description='Free CAGR calculator. Find the compound annual growth rate of any investment from start value, end value and years. Formula, examples, CAGR vs XIRR.',
    app_name='CAGR Calculator',
    h1='CAGR Calculator – Compound Annual Growth Rate',
    crumb='CAGR Calculator',
    tagline='CAGR · absolute return · doubling time · year-by-year values',
    basis='Standard CAGR formula',
    form=form, result=result, script=script, content=content, faqs=faqs,
)
