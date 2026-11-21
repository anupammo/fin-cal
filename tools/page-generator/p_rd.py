from base import field

form = (field('dep', 'Monthly deposit', 5000, 100, 100000, 100,
              help='Minimum ₹100 a month, in multiples of ₹10. No upper limit.')
        + field('rate', 'Interest rate', 6.7, 4, 10, 0.1, prefix='', suffix='%',
                help='6.7% for October–December 2026, compounded quarterly.')
        + field('yrs', 'Tenure', 5, 1, 10, 1, prefix='', suffix='years',
                help='The account runs 5 years; it can be extended once for another 5.'))

result = '''                                <h2 class="h5 mb-3">Post Office RD maturity</h2>
                                <div class="ng-kpi mb-3"><small>Maturity amount</small><span class="ng-big" id="mat">–</span></div>
                                <div class="row g-2 mb-3">
                                    <div class="col-6"><div class="ng-kpi"><small>Total deposited</small><b id="inv">–</b></div></div>
                                    <div class="col-6"><div class="ng-kpi"><small>Interest earned</small><b id="int">–</b></div></div>
                                </div>
                                <div class="ng-bar mb-1"><span id="b1" style="background:#03a9f4"></span><span id="b2" style="background:#138808"></span></div>
                                <div class="ng-legend small mb-3"><span style="background:#03a9f4"></span>Deposits &nbsp;<span style="background:#138808"></span>Interest</div>
                                <table class="table table-sm ng-table">
                                    <thead><tr><th>After year</th><th class="text-end">Deposited</th><th class="text-end">Value</th></tr></thead>
                                    <tbody id="yearRows"></tbody></table>'''

script = r'''        // Each instalment compounds quarterly for the months it stays invested (India Post method).
        function value(p, r, paid, end) {
            var v = 0;
            for (var k = 1; k <= paid; k++) v += p * Math.pow(1 + r / 400, 4 * (end - k + 1) / 12);
            return v;
        }
        function calc() {
            var p = NG.val('dep'), r = NG.val('rate'), n = Math.round(NG.val('yrs')) * 12;
            var mat = value(p, r, n, n), inv = p * n, rows = '';
            for (var y = 1; y <= n / 12; y++) rows += '<tr><td>' + y + '</td><td class="text-end">' + NG.inr(p * y * 12) + '</td><td class="text-end">' + NG.inr(value(p, r, y * 12, y * 12)) + '</td></tr>';
            NG.setText('mat', NG.inr(mat)); NG.setText('inv', NG.inr(inv)); NG.setText('int', NG.inr(mat - inv));
            NG.setHTML('yearRows', rows);
            document.getElementById('b1').style.width = inv / mat * 100 + '%';
            document.getElementById('b2').style.width = (mat - inv) / mat * 100 + '%';
        }
        NG.bind(calc);'''

content = '''                    <h2>Post Office Recurring Deposit (RD) at a glance</h2>
                    <div class="table-responsive"><table class="table table-bordered">
                        <tbody>
                            <tr><th>Interest rate</th><td>6.7% a year (October–December 2026), compounded quarterly</td></tr>
                            <tr><th>Tenure</th><td>5 years (60 monthly deposits); can be extended once for 5 more years</td></tr>
                            <tr><th>Minimum deposit</th><td>₹100 a month, then multiples of ₹10; no maximum</td></tr>
                            <tr><th>Safety</th><td>Backed by the Government of India</td></tr>
                            <tr><th>Loan</th><td>Up to 50% of the balance after 12 deposits</td></tr>
                            <tr><th>Premature closure</th><td>Allowed after 3 years; savings account interest applies</td></tr>
                            <tr><th>Tax</th><td>Interest is taxable at your slab rate; deposits get no 80C benefit</td></tr>
                        </tbody>
                    </table></div>

                    <h2>How Post Office RD maturity is calculated</h2>
                    <p>Each monthly instalment earns interest compounded every quarter for the time it stays in the
                        account. The first instalment stays 60 months, the last only one month. The maturity value is
                        the sum of all of them:</p>
                    <p class="ng-formula">Maturity = Σ P × (1 + r/400)<sup>4 × m/12</sup>  for m = 60, 59, … 1</p>
                    <p>Examples at 6.7% for 5 years:</p>
                    <ul>
                        <li>₹1,000 a month → about <b>₹71,366</b> (₹60,000 deposited)</li>
                        <li>₹5,000 a month → about <b>₹3,56,829</b> (₹3,00,000 deposited)</li>
                        <li>₹10,000 a month → about <b>₹7,13,658</b> (₹6,00,000 deposited)</li>
                    </ul>
                    <p>The rate is fixed for the whole 5 years at the rate on the day you open the account, even if
                        the government changes small-savings rates later.</p>

                    <h2>Rules to remember</h2>
                    <ul>
                        <li>Deposit by the 15th (accounts opened 1st–15th) or the end of the month (opened 16th onwards).</li>
                        <li>Late deposits attract a small default fee, and several missed deposits in a row can make
                            the account discontinued — ask your post office for the current rules before you miss one.</li>
                        <li>You can also pay deposits in advance.</li>
                    </ul>

                    <h2>Related calculators</h2>
                    <p><a href="rd-calculator">Bank RD calculator</a> · <a href="post-office-time-deposit-td-calculator">Post Office TD</a> ·
                        <a href="post-office-monthly-income-scheme-mis-calculator">Post Office MIS</a> · <a href="ppf-calculator">PPF calculator</a></p>
'''

faqs = [
    ('What is the Post Office RD interest rate now?',
     '6.7% a year, compounded quarterly, for accounts opened between 1 October and 31 December 2026. The rate is fixed for the full 5-year term.'),
    ('How much will I get for ₹5,000 a month in Post Office RD?',
     'About ₹3,56,829 after 5 years at 6.7%, on total deposits of ₹3,00,000 — around ₹56,829 of interest.'),
    ('Is Post Office RD interest taxable?',
     'Yes. The interest is added to your income and taxed at your slab rate, and RD deposits do not qualify for Section 80C.'),
    ('Can I close a Post Office RD early?',
     'Yes, after 3 years. You then get interest at the post office savings account rate instead of the RD rate.'),
]

PAGE = dict(
    slug='post-office-rd-calculator',
    title='Post Office RD Calculator 2026 (6.7%): Maturity Amount | Nivesguru',
    description='Post Office RD calculator at 6.7% for Oct–Dec 2026. Find maturity value and interest for any monthly deposit, with India Post’s quarterly compounding method.',
    app_name='Post Office RD Calculator',
    h1='Post Office RD Calculator (Recurring Deposit)',
    crumb='Post Office RD Calculator',
    tagline='6.7% compounded quarterly · 5-year term · year-by-year value',
    basis='Rate notified for October–December 2026',
    form=form, result=result, script=script, content=content, faqs=faqs,
)
