from base import field, select, check

form = (field('ctc', 'Annual CTC (cost to company)', 1200000, 100000, 10000000, 50000)
        + field('basic', 'Basic + DA as % of CTC', 50, 20, 70, 1, prefix='', suffix='%',
                help='The new Labour Codes require wages (basic + DA) to be at least 50% of pay.')
        + check('pfIn', 'Employer PF is part of my CTC', True)
        + select('pfOn', 'PF is calculated on', [('cap', '₹15,000 wage ceiling (₹1,800/month)'), ('full', 'Full basic + DA')], 'full')
        + check('gratIn', 'Gratuity (4.81% of basic) is part of my CTC', True)
        + field('pt', 'Professional tax per month', 200, 0, 300, 50, slider=False,
                help='₹200 in most states (₹2,500 a year); zero in states such as Delhi, Haryana, UP, Rajasthan.')
        + field('othDed', 'Other monthly deductions (insurance, canteen, etc.)', 0, 0, 20000, 100, slider=False)
        + select('regime', 'Tax regime', [('new', 'New regime (default)'), ('old', 'Old regime')], 'new')
        + field('old80', 'Old regime: extra deductions besides your PF (80C, 80D, HRA, etc.)', 0, 0, 1000000, 5000, slider=False))

result = '''                                <h2 class="h5 mb-3">Your take-home salary</h2>
                                <div class="ng-kpi mb-3"><small>In-hand salary per month</small><span class="ng-big" id="monthly">–</span></div>
                                <div class="row g-2 mb-3">
                                    <div class="col-6"><div class="ng-kpi"><small>In-hand per year</small><b id="yearly">–</b></div></div>
                                    <div class="col-6"><div class="ng-kpi"><small>Income tax per year</small><b id="taxY">–</b></div></div>
                                </div>
                                <div class="ng-bar mb-1"><span id="bIn" style="background:#138808"></span><span id="bTax" style="background:#f50057"></span><span id="bPf" style="background:#FF9933"></span><span id="bOth" style="background:#6c757d"></span></div>
                                <div class="ng-legend small mb-3"><span style="background:#138808"></span>In-hand &nbsp;<span style="background:#f50057"></span>Tax &nbsp;<span style="background:#FF9933"></span>PF + gratuity &nbsp;<span style="background:#6c757d"></span>Other</div>
                                <table class="table ng-table">
                                    <thead><tr><th>Component</th><th class="text-end">Monthly</th><th class="text-end">Yearly</th></tr></thead>
                                    <tbody id="brk"></tbody>
                                </table>'''

script = r'''        function r(label, y, bold) {
            var f = NG.inr, a = f(y / 12), b = f(y);
            if (bold) { label = '<b>' + label + '</b>'; a = '<b>' + a + '</b>'; b = '<b>' + b + '</b>'; }
            return '<tr><td>' + label + '</td><td class="text-end">' + a + '</td><td class="text-end">' + b + '</td></tr>';
        }
        function calc() {
            var ctc = NG.val('ctc'), basic = ctc * Math.min(NG.val('basic'), 100) / 100;
            var pfWage = document.getElementById('pfOn').value === 'cap' ? Math.min(basic / 12, 15000) * 12 : basic;
            var erPf = document.getElementById('pfIn').checked ? pfWage * 0.12 : 0;
            var grat = document.getElementById('gratIn').checked ? basic * 0.0481 : 0;
            var gross = Math.max(0, ctc - erPf - grat);
            var eePf = Math.min(pfWage * 0.12, gross);
            var pt = Math.min(NG.val('pt') * 12, 2500), oth = NG.val('othDed') * 12;
            var regime = document.getElementById('regime').value;
            var t = NG.computeTax(regime, { gross: gross, salaried: true, profTax: pt, ded80C: eePf + NG.val('old80') });
            var inHand = Math.max(0, gross - eePf - pt - oth - t.total);
            NG.setText('monthly', NG.inr(inHand / 12));
            NG.setText('yearly', NG.inr(inHand));
            NG.setText('taxY', NG.inr(t.total));
            var tot = ctc || 1;
            document.getElementById('bIn').style.width = inHand / tot * 100 + '%';
            document.getElementById('bTax').style.width = t.total / tot * 100 + '%';
            document.getElementById('bPf').style.width = (erPf + eePf + grat) / tot * 100 + '%';
            document.getElementById('bOth').style.width = (pt + oth) / tot * 100 + '%';
            NG.setHTML('brk',
                r('CTC', ctc, true) +
                r('Basic + DA', basic) +
                r('Employer PF (12%)', erPf) +
                r('Gratuity provision', grat) +
                r('Gross salary', gross, true) +
                r('Employee PF (12%)', eePf) +
                r('Professional tax', pt) +
                r('Other deductions', oth) +
                r('Income tax (' + regime + ' regime, incl. cess)', t.total) +
                r('In-hand salary', inHand, true));
        }
        NG.bind(calc);'''

content = '''                    <h2>How to calculate in-hand salary from CTC</h2>
                    <p>Your <b>CTC (cost to company)</b> is everything your employer spends on you in a year. Your
                        <b>in-hand (take-home) salary</b> is what actually reaches your bank account. The difference is
                        made up of the employer's PF contribution, gratuity provision, your own PF contribution,
                        professional tax and income tax. This calculator walks through each step:</p>
                    <ol>
                        <li><b>Gross salary</b> = CTC − employer PF − gratuity (and any other employer-paid benefits).</li>
                        <li><b>Employee PF</b> = 12% of basic + DA (or 12% of ₹15,000 if your company caps it).</li>
                        <li><b>Professional tax</b> = up to ₹2,500 a year, depending on your state.</li>
                        <li><b>Income tax</b> on gross salary minus the standard deduction, as per your regime.</li>
                        <li><b>In-hand salary</b> = gross − employee PF − professional tax − income tax − other deductions.</li>
                    </ol>

                    <h2>Example: ₹12 lakh CTC</h2>
                    <p>With basic at 50% of CTC (₹6 lakh), PF on full basic and gratuity in CTC: employer PF ₹72,000
                        and gratuity ₹28,860 → gross salary ₹10,99,140. Employee PF ₹72,000 and professional tax
                        ₹2,400 are deducted. Under the new regime taxable income is ₹10,24,140, which is below ₹12 lakh,
                        so <b>income tax is zero</b>. In-hand ≈ <b>₹10.25 lakh a year, about ₹85,000 a month</b>.</p>

                    <h2>How the new Labour Codes affect take-home pay</h2>
                    <p>The four Labour Codes in force from 21 November 2025 define "wages" (basic + DA + retaining
                        allowance) as at least 50% of total pay. Many companies have raised basic pay to meet this.
                        A higher basic means higher PF and gratuity, so <b>take-home pay may fall slightly while
                        retirement savings rise</b>. Use the "Basic + DA %" field to see the effect for your CTC.</p>

                    <h2>Tips to increase take-home salary</h2>
                    <ul>
                        <li>Compare regimes — most people earning up to about ₹15 lakh save more in the new regime.</li>
                        <li>Ask HR to restrict PF to the ₹15,000 wage ceiling if you prefer more cash now (if your
                            company allows it).</li>
                        <li>Use employer NPS (80CCD(2)) — it is deductible even in the new regime.</li>
                        <li>In the old regime, claim HRA, 80C and 80D properly with proofs so less TDS is deducted.</li>
                    </ul>

                    <h2>Related calculators</h2>
                    <p><a href="income-tax-calculator">Income tax calculator</a> · <a href="epf-calculator">EPF calculator</a> ·
                        <a href="hra-calculator">HRA calculator</a> · <a href="gratuity-calculator">Gratuity calculator</a></p>
'''

faqs = [
    ('What is the in-hand salary for ₹12 lakh CTC?',
     'About ₹85,000 a month under the new regime if basic is 50% of CTC, PF is on full basic and gratuity is part of CTC. Income tax is zero because taxable income stays below ₹12 lakh after the ₹75,000 standard deduction.'),
    ('What is the difference between CTC, gross and net salary?',
     'CTC is the total cost to the employer. Gross salary is CTC minus employer PF, gratuity and other employer-side costs. Net or in-hand salary is gross salary minus employee PF, professional tax, income tax and other deductions.'),
    ('Is employer PF part of CTC?',
     'In most private companies, yes. The employer contribution of 12% of basic is included in CTC, so it reduces your gross salary. Some companies pay it over and above CTC; switch off the option in the calculator in that case.'),
    ('How much PF is deducted from salary?',
     '12% of basic pay plus dearness allowance. If your employer caps PF at the statutory wage ceiling of ₹15,000, the deduction is ₹1,800 a month.'),
]

PAGE = dict(
    slug='salary-calculator',
    title='In-Hand Salary Calculator 2026: CTC to Take-Home Pay | Nivesguru',
    description='Calculate monthly in-hand salary from CTC for FY 2026-27. Includes PF, gratuity, professional tax and income tax (new & old regime) with the 50% wage rule.',
    app_name='In-Hand Salary Calculator',
    h1='In-Hand Salary Calculator (CTC to Take-Home)',
    crumb='Salary Calculator',
    tagline='CTC → gross → take-home · PF · gratuity · professional tax · income tax',
    form=form, result=result, script=script, content=content, faqs=faqs,
)
