from base import field

form = (field('amt', 'Loan amount', 5000000, 100000, 20000000, 100000)
        + field('rate', 'Interest rate (yearly)', 8.5, 5, 15, 0.05, prefix='', suffix='%')
        + field('yrs', 'Loan tenure', 20, 1, 30, 1, prefix='', suffix='years')
        + '''        <h3 class="h6 mt-4 mb-2">Prepayment (optional)</h3>
''' + field('extra', 'Extra payment every month', 0, 0, 100000, 1000)
        + field('lump', 'One-time prepayment', 0, 0, 5000000, 50000)
        + field('lumpYr', 'Make the one-time prepayment in year', 3, 1, 30, 1, prefix='', suffix='', slider=False))

result = '''                                <h2 class="h5 mb-3">Your home loan</h2>
                                <div class="ng-kpi mb-3"><small>Monthly EMI</small><span class="ng-big" id="emi">–</span></div>
                                <div class="row g-2 mb-3">
                                    <div class="col-6"><div class="ng-kpi"><small>Total interest</small><b id="int">–</b></div></div>
                                    <div class="col-6"><div class="ng-kpi"><small>Total amount paid</small><b id="tot">–</b></div></div>
                                    <div class="col-6"><div class="ng-kpi" id="boxSave"><small>Interest saved by prepaying</small><b id="saved">–</b></div></div>
                                    <div class="col-6"><div class="ng-kpi"><small>Loan closes in</small><b id="tenure">–</b></div></div>
                                </div>
                                <div class="ng-bar mb-1"><span id="b1" style="background:#03a9f4"></span><span id="b2" style="background:#f50057"></span></div>
                                <div class="ng-legend small mb-3"><span style="background:#03a9f4"></span>Principal &nbsp;<span style="background:#f50057"></span>Interest</div>
                                <details><summary class="fw-semibold">Year-by-year repayment schedule</summary>
                                    <div class="table-responsive mt-2" style="max-height:340px"><table class="table table-sm ng-table">
                                        <thead><tr><th>Year</th><th class="text-end">Principal</th><th class="text-end">Interest</th><th class="text-end">Prepaid</th><th class="text-end">Balance</th></tr></thead>
                                        <tbody id="yearRows"></tbody></table></div>
                                </details>'''

script = r'''        function emiOf(p, i, n) { return i ? p * i * Math.pow(1 + i, n) / (Math.pow(1 + i, n) - 1) : p / n; }
        function months(m) { var y = Math.floor(m / 12), r = m % 12; return y + ' yr' + (r ? ' ' + r + ' mo' : ''); }
        function calc() {
            var p = NG.val('amt'), i = NG.val('rate') / 1200, n = Math.round(NG.val('yrs') * 12);
            if (!p || !n) return;
            var extra = NG.val('extra'), lump = NG.val('lump'), lumpAt = Math.round(NG.val('lumpYr')) * 12;
            var emi = emiOf(p, i, n), baseInt = emi * n - p;
            var b = p, m = 0, tInt = 0, rows = '', yP = 0, yI = 0, yX = 0;
            while (b > 0.5 && m < n) {
                m++;
                var interest = b * i, princ = Math.min(emi - interest, b);
                b -= princ; tInt += interest; yP += princ; yI += interest;
                var pre = Math.min(extra, b); b -= pre; yX += pre;
                if (m === lumpAt && lump > 0) { var l = Math.min(lump, b); b -= l; yX += l; }
                if (m % 12 === 0 || b <= 0.5 || m === n) {
                    rows += '<tr><td>' + Math.ceil(m / 12) + '</td><td class="text-end">' + NG.inr(yP) + '</td><td class="text-end">' + NG.inr(yI) +
                        '</td><td class="text-end">' + NG.inr(yX) + '</td><td class="text-end">' + NG.inr(Math.max(b, 0)) + '</td></tr>';
                    yP = yI = yX = 0;
                }
            }
            NG.setText('emi', NG.inr(emi));
            NG.setText('int', NG.inr(tInt));
            NG.setText('tot', NG.inr(p + tInt));
            NG.setText('saved', NG.inr(Math.max(0, baseInt - tInt)));
            NG.setText('tenure', months(m) + (m < n ? ' (−' + months(n - m) + ')' : ''));
            document.getElementById('boxSave').classList.toggle('ng-best', baseInt - tInt > 1);
            NG.setHTML('yearRows', rows);
            var t = p + tInt;
            document.getElementById('b1').style.width = p / t * 100 + '%';
            document.getElementById('b2').style.width = tInt / t * 100 + '%';
        }
        NG.bind(calc);'''

content = '''                    <h2>Home loan EMI formula</h2>
                    <p>Your EMI (equated monthly instalment) stays the same every month. In the early years most of
                        it goes towards interest; towards the end most of it repays principal. The formula is:</p>
                    <p class="ng-formula">EMI = P × r × (1 + r)<sup>n</sup> ÷ ((1 + r)<sup>n</sup> − 1)<br>
                        P = loan amount, r = yearly rate ÷ 12 ÷ 100, n = number of months</p>
                    <p>Example: ₹50 lakh for 20 years at 8.5% gives an EMI of about <b>₹43,391</b>. Over 20 years you
                        pay about <b>₹54.1 lakh in interest</b> — more than the loan itself.</p>

                    <h2>How prepayment saves interest</h2>
                    <p>Any amount you pay over the EMI goes straight to the outstanding principal. Interest for every
                        following month is then charged on a smaller balance, so the loan closes earlier while your
                        EMI stays the same. On the ₹50 lakh example:</p>
                    <ul>
                        <li>An extra <b>₹5,000 a month</b> cuts the tenure by about 4½ years and saves roughly
                            ₹13.9 lakh of interest.</li>
                        <li>A one-time <b>₹5 lakh</b> prepayment in year 3 saves about ₹13.2 lakh and closes the loan
                            about 3½ years early.</li>
                    </ul>
                    <p>Prepaying early in the loan saves the most, because that is when the balance (and so the
                        interest) is highest.</p>

                    <h2>Reduce EMI or reduce tenure?</h2>
                    <p>After a prepayment, banks usually let you either keep the EMI and shorten the tenure, or keep
                        the tenure and lower the EMI. Keeping the EMI and <b>reducing the tenure saves far more
                        interest</b>; this calculator shows that option. Choose lower EMI only if you need the monthly
                        cash flow.</p>

                    <h2>Prepayment charges</h2>
                    <p>RBI rules do not allow banks and housing finance companies to charge prepayment or foreclosure
                        penalties on <b>floating-rate</b> home loans taken by individuals. Fixed-rate loans may carry a
                        charge — check your loan agreement.</p>

                    <h2>Tax benefits on a home loan (old regime)</h2>
                    <ul>
                        <li>Interest on a self-occupied house: deduction up to <b>₹2 lakh</b> a year under Section 24(b).</li>
                        <li>Principal repayment: part of the <b>₹1.5 lakh</b> Section 80C limit.</li>
                        <li>The new tax regime does not allow these deductions for a self-occupied house. Compare both
                            with the <a href="income-tax-calculator">income tax calculator</a>.</li>
                    </ul>

                    <h2>Related calculators</h2>
                    <p><a href="emi-calculator-online">EMI calculator</a> · <a href="income-tax-calculator">Income tax calculator</a> ·
                        <a href="salary-calculator">In-hand salary calculator</a> · <a href="step-up-sip-calculator">Step-up SIP calculator</a></p>
'''

faqs = [
    ('What is the EMI for a ₹50 lakh home loan for 20 years?',
     'At 8.5% a year the EMI is about ₹43,391. At 8% it is about ₹41,822 and at 9% about ₹44,986.'),
    ('Is it better to prepay a home loan or invest?',
     'Prepaying gives a guaranteed return equal to your loan rate (for example 8.5%), tax-free. Investing can earn more over the long term but with risk. Many people do both: keep an emergency fund, invest regularly, and prepay with bonuses.'),
    ('Do banks charge a penalty for prepaying a home loan?',
     'Not on floating-rate home loans taken by individuals — RBI rules bar prepayment and foreclosure charges on them. Fixed-rate loans may have a charge.'),
    ('Should I reduce my EMI or my tenure after prepayment?',
     'Reducing the tenure while keeping the EMI the same saves much more interest. Reduce the EMI only if you need more monthly cash.'),
]

PAGE = dict(
    slug='home-loan-emi-calculator',
    title='Home Loan EMI Calculator with Prepayment 2026 | Nivesguru',
    description='Calculate your home loan EMI, total interest and repayment schedule. See how monthly or one-time prepayments cut your tenure and save lakhs in interest.',
    app_name='Home Loan EMI Calculator with Prepayment',
    h1='Home Loan EMI Calculator with Prepayment',
    crumb='Home Loan EMI Calculator',
    tagline='EMI · total interest · monthly & one-time prepayment · year-wise schedule',
    basis='Reducing-balance EMI method used by Indian banks',
    form=form, result=result, script=script, content=content, faqs=faqs,
)
