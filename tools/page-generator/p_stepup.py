from base import field

form = (field('sip', 'Starting monthly SIP', 10000, 500, 200000, 500)
        + field('step', 'Yearly step-up', 10, 0, 50, 1, prefix='', suffix='%')
        + field('ret', 'Expected return (yearly)', 12, 1, 30, 0.5, prefix='', suffix='%')
        + field('yrs', 'Investment period', 15, 1, 40, 1, prefix='', suffix='years'))

result = '''                                <h2 class="h5 mb-3">Step-up SIP result</h2>
                                <div class="ng-kpi mb-3"><small>Maturity value</small><span class="ng-big" id="fv">–</span></div>
                                <div class="row g-2 mb-3">
                                    <div class="col-6"><div class="ng-kpi"><small>Total invested</small><b id="inv">–</b></div></div>
                                    <div class="col-6"><div class="ng-kpi"><small>Estimated gains</small><b id="gain">–</b></div></div>
                                </div>
                                <div class="ng-bar mb-1"><span id="b1" style="background:#03a9f4"></span><span id="b2" style="background:#138808"></span></div>
                                <div class="ng-legend small mb-3"><span style="background:#03a9f4"></span>Invested &nbsp;<span style="background:#138808"></span>Gains</div>
                                <p id="cmp" class="mb-3"></p>
                                <details><summary class="fw-semibold">Year-by-year growth</summary>
                                    <div class="table-responsive mt-2" style="max-height:320px"><table class="table table-sm ng-table">
                                        <thead><tr><th>Year</th><th class="text-end">SIP/month</th><th class="text-end">Invested</th><th class="text-end">Value</th></tr></thead>
                                        <tbody id="yearRows"></tbody></table></div>
                                </details>'''

script = r'''        function grow(sip, step, i, years, rows) {
            var val = 0, inv = 0, html = '';
            for (var y = 1; y <= years; y++) {
                for (var m = 0; m < 12; m++) { val = (val + sip) * (1 + i); inv += sip; }
                if (rows) html += '<tr><td>' + y + '</td><td class="text-end">' + NG.inr(sip) + '</td><td class="text-end">' + NG.inr(inv) + '</td><td class="text-end">' + NG.inr(val) + '</td></tr>';
                sip *= 1 + step;
            }
            return { val: val, inv: inv, html: html };
        }
        function calc() {
            var sip = NG.val('sip'), step = NG.val('step') / 100, i = NG.val('ret') / 1200, yrs = Math.round(NG.val('yrs'));
            var s = grow(sip, step, i, yrs, true), flat = grow(sip, 0, i, yrs, false);
            NG.setText('fv', NG.inr(s.val)); NG.setText('inv', NG.inr(s.inv)); NG.setText('gain', NG.inr(s.val - s.inv));
            NG.setHTML('yearRows', s.html);
            var t = Math.max(s.val, 1);
            document.getElementById('b1').style.width = s.inv / t * 100 + '%';
            document.getElementById('b2').style.width = (s.val - s.inv) / t * 100 + '%';
            NG.setHTML('cmp', 'A regular SIP of ' + NG.inr(sip) + ' without step-up would grow to <b>' + NG.inr(flat.val) +
                '</b>. Stepping up adds <b>' + NG.inr(s.val - flat.val) + '</b>.');
        }
        NG.bind(calc);'''

content = '''                    <h2>What is a step-up SIP?</h2>
                    <p>A <b>step-up SIP</b> (also called a top-up SIP) raises your monthly SIP amount by a fixed
                        percentage every year — usually in line with your salary hike. Most mutual fund houses let you
                        set this up once, and the higher instalments then start automatically. Because the extra money
                        is invested early and compounds for years, a modest 10% step-up can raise the final
                        corpus by 70% or more compared with a flat SIP.</p>

                    <h2>How this calculator works</h2>
                    <p>Each month's instalment is invested at the start of the month and grows at the monthly rate
                        (yearly return ÷ 12). After every 12 instalments the SIP amount is increased by your step-up
                        percentage.</p>
                    <p class="ng-formula">Value after each month = (previous value + SIP) × (1 + r/12)<br>SIP for next year = SIP × (1 + step-up %)</p>

                    <h2>Example: ₹10,000 SIP with 10% step-up</h2>
                    <p>At 12% a year for 15 years, a flat ₹10,000 SIP grows to about <b>₹50 lakh</b> on an investment
                        of ₹18 lakh. Increasing the SIP by 10% every year raises the total invested to about ₹38 lakh
                        and the corpus to about <b>₹87 lakh</b> — roughly 70% more.</p>

                    <h2>Tips</h2>
                    <ul>
                        <li>Match the step-up to your expected salary increase (5–15%).</li>
                        <li>Use realistic returns: around 10–12% for diversified equity funds over long periods, 6–8%
                            for debt funds. Returns are not guaranteed.</li>
                        <li>Review once a year and rebalance between equity and debt as goals get closer.</li>
                    </ul>

                    <h2>Related calculators</h2>
                    <p><a href="systematic-investment-plan-sip-return-calculator">SIP calculator</a> ·
                        <a href="lumpsum-calculator-online">Lumpsum calculator</a> · <a href="cagr-calculator">CAGR calculator</a> ·
                        <a href="swp-calculator-online">SWP calculator</a></p>
'''

faqs = [
    ('What is a good step-up percentage for SIP?',
     'Most investors choose 5–15%, roughly in line with their yearly salary increase. 10% is a common choice.'),
    ('Is a step-up SIP better than a regular SIP?',
     'It builds a much larger corpus because you invest more over time. A ₹10,000 SIP with a 10% yearly step-up can produce about 70% more than a flat ₹10,000 SIP over 15 years at the same return.'),
    ('Can I stop or change the step-up later?',
     'Yes. Most fund houses let you modify or cancel the top-up instruction at any time without penalty.'),
    ('Are SIP returns guaranteed?',
     'No. Mutual fund returns depend on market performance. The calculator uses a constant return only to illustrate growth.'),
]

PAGE = dict(
    slug='step-up-sip-calculator',
    title='Step-Up SIP Calculator: Top-Up SIP Returns | Nivesguru',
    description='Free step-up SIP calculator. See how increasing your SIP by 5–15% every year grows your mutual fund corpus versus a regular SIP. Year-wise table and examples.',
    app_name='Step-Up SIP Calculator',
    h1='Step-Up SIP Calculator (Top-Up SIP)',
    crumb='Step-Up SIP Calculator',
    tagline='Yearly SIP increase · comparison with flat SIP · year-by-year growth',
    basis='Illustrative; mutual fund returns are market-linked',
    form=form, result=result, script=script, content=content, faqs=faqs,
)
