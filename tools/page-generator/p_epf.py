from base import field, check

form = (field('basic', 'Monthly basic + DA', 30000, 5000, 300000, 1000)
        + field('age', 'Your current age', 30, 18, 57, 1, prefix='', suffix='years')
        + field('ret', 'Retirement age', 58, 40, 60, 1, prefix='', suffix='years')
        + field('bal', 'Current EPF balance', 0, 0, 5000000, 10000, slider=False)
        + field('inc', 'Expected yearly salary increase', 5, 0, 15, 0.5, prefix='', suffix='%')
        + field('rate', 'EPF interest rate', 8.25, 6, 10, 0.05, prefix='', suffix='%',
                help='8.25% declared for FY 2025-26.')
        + check('eps', 'Part of EPS pension (8.33% of up to ₹15,000 goes to pension)', True))

result = '''                                <h2 class="h5 mb-3">EPF at retirement</h2>
                                <div class="ng-kpi mb-3"><small>Estimated EPF corpus</small><span class="ng-big" id="corpus">–</span></div>
                                <div class="row g-2 mb-3">
                                    <div class="col-6"><div class="ng-kpi"><small>Your contribution</small><b id="ee">–</b></div></div>
                                    <div class="col-6"><div class="ng-kpi"><small>Employer contribution</small><b id="er">–</b></div></div>
                                    <div class="col-6"><div class="ng-kpi"><small>Interest earned</small><b id="int">–</b></div></div>
                                    <div class="col-6"><div class="ng-kpi"><small>Went to EPS pension</small><b id="epsT">–</b></div></div>
                                </div>
                                <div class="ng-bar mb-1"><span id="b1" style="background:#03a9f4"></span><span id="b2" style="background:#FF9933"></span><span id="b3" style="background:#138808"></span></div>
                                <div class="ng-legend small mb-3"><span style="background:#03a9f4"></span>You &nbsp;<span style="background:#FF9933"></span>Employer &nbsp;<span style="background:#138808"></span>Interest</div>
                                <details><summary class="fw-semibold">Year-by-year balance</summary>
                                    <div class="table-responsive mt-2" style="max-height:320px"><table class="table table-sm ng-table">
                                        <thead><tr><th>Age</th><th class="text-end">Basic/month</th><th class="text-end">Year-end balance</th></tr></thead>
                                        <tbody id="yrs"></tbody></table></div>
                                </details>'''

script = r'''        function calc() {
            var basic = NG.val('basic'), age = Math.floor(NG.val('age')), ret = Math.floor(NG.val('ret'));
            var bal = NG.val('bal'), inc = NG.val('inc') / 100, rate = NG.val('rate') / 100;
            var eps = document.getElementById('eps').checked;
            var tEe = 0, tEr = 0, tInt = 0, tEps = 0, rows = '';
            for (var a = age; a < ret; a++) {
                var interest = 0;
                for (var m = 0; m < 12; m++) {
                    var ee = basic * 0.12;
                    var pension = eps ? Math.min(basic, 15000) * 0.0833 : 0;
                    var er = basic * 0.12 - pension;
                    bal += ee + er;
                    interest += bal * rate / 12;  // interest on the monthly running balance
                    tEe += ee; tEr += er; tEps += pension;
                }
                bal += interest; tInt += interest;  // credited once a year
                rows += '<tr><td>' + (a + 1) + '</td><td class="text-end">' + NG.inr(basic) + '</td><td class="text-end">' + NG.inr(bal) + '</td></tr>';
                basic *= 1 + inc;
            }
            NG.setText('corpus', NG.inr(bal));
            NG.setText('ee', NG.inr(tEe)); NG.setText('er', NG.inr(tEr));
            NG.setText('int', NG.inr(tInt)); NG.setText('epsT', NG.inr(tEps));
            NG.setHTML('yrs', rows);
            var start = bal - tEe - tEr - tInt, tot = Math.max(bal, 1);
            document.getElementById('b1').style.width = (tEe + Math.max(start, 0)) / tot * 100 + '%';
            document.getElementById('b2').style.width = tEr / tot * 100 + '%';
            document.getElementById('b3').style.width = tInt / tot * 100 + '%';
        }
        NG.bind(calc);'''

content = '''                    <h2>What is EPF?</h2>
                    <p>The <b>Employees' Provident Fund (EPF)</b>, run by EPFO, is a compulsory retirement savings
                        scheme for salaried employees in organisations with 20 or more workers. Every month you
                        contribute 12% of your basic pay plus dearness allowance (DA), and your employer contributes
                        another 12%. The balance earns a government-declared interest rate — <b>8.25% for
                        FY 2025-26</b> — and is tax-free on withdrawal after five years of continuous service.</p>

                    <h2>How the employer's 12% is split</h2>
                    <div class="table-responsive"><table class="table table-bordered">
                        <thead><tr><th>Contribution</th><th>Rate</th><th>Goes to</th></tr></thead>
                        <tbody>
                            <tr><td>Employee</td><td>12% of basic + DA</td><td>EPF account</td></tr>
                            <tr><td>Employer – pension</td><td>8.33% of basic, up to ₹15,000 (max ₹1,250/month)</td><td>EPS (pension scheme)</td></tr>
                            <tr><td>Employer – balance</td><td>12% minus the EPS share (3.67% if basic ≤ ₹15,000)</td><td>EPF account</td></tr>
                        </tbody>
                    </table></div>
                    <p>The EPS part does not earn interest in your account; it funds a monthly pension after age 58.
                        That is why the calculator shows it separately and does not add it to your corpus.</p>

                    <h2>How EPF interest is calculated</h2>
                    <p>EPFO calculates interest every month on the running balance, at one-twelfth of the annual rate,
                        and credits the total once a year at the end of the financial year. This calculator follows
                        the same method and also raises your basic salary each year by the increase you enter.</p>
                    <p class="ng-formula">Monthly interest = Running balance × (8.25% ÷ 12)</p>

                    <h2>Example</h2>
                    <p>A 30-year-old with a basic salary of ₹30,000, a 5% yearly raise and no existing balance will
                        build a corpus of roughly <b>₹1.3 crore by age 58</b> at 8.25% — about two-thirds of it from
                        interest. Starting early matters more than the amount.</p>

                    <h2>Tax rules for EPF</h2>
                    <ul>
                        <li>Your contribution qualifies for Section 80C in the old regime.</li>
                        <li>Interest on your own contributions above ₹2.5 lakh a year (₹5 lakh if the employer does
                            not contribute) is taxable.</li>
                        <li>Employer contributions to EPF, NPS and superannuation above ₹7.5 lakh a year are taxable.</li>
                        <li>Withdrawals after 5 years of continuous service are tax-free.</li>
                    </ul>

                    <h2>Related calculators</h2>
                    <p><a href="salary-calculator">In-hand salary calculator</a> · <a href="ppf-calculator">PPF calculator</a> ·
                        <a href="national-pension-system-nps-calculator">NPS calculator</a> · <a href="gratuity-calculator">Gratuity calculator</a></p>
'''

faqs = [
    ('What is the EPF interest rate for 2025-26?',
     'The EPFO declared 8.25% for FY 2025-26, the same as the previous year. The government ratified it in June 2026.'),
    ('How much of my employer contribution goes to EPF?',
     'Out of the employer\'s 12%, 8.33% of basic pay (capped at ₹15,000, so at most ₹1,250 a month) goes to the Employee Pension Scheme. The rest goes to your EPF account.'),
    ('Is EPF withdrawal taxable?',
     'No, if you have completed 5 years of continuous service. Earlier withdrawals can attract TDS and tax, except in cases such as termination due to ill health or business closure.'),
    ('Can I contribute more than 12% to EPF?',
     'Yes, through Voluntary Provident Fund (VPF). It earns the same interest rate, but your employer does not have to match it, and interest on total yearly contributions above ₹2.5 lakh is taxable.'),
]

PAGE = dict(
    slug='epf-calculator',
    title='EPF Calculator 2026: PF Maturity at 8.25% Interest | Nivesguru',
    description='Free EPF calculator: estimate your provident fund corpus at retirement with 8.25% interest, salary hikes, employer share and EPS split. Year-wise balance.',
    app_name='EPF Calculator',
    h1='EPF Calculator – Provident Fund Corpus at Retirement',
    crumb='EPF Calculator',
    tagline='8.25% interest (FY 2025-26) · employer & EPS split · yearly salary increase',
    basis='EPF rate 8.25% for FY 2025-26',
    form=form, result=result, script=script, content=content, faqs=faqs,
)
