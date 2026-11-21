from base import field, select, check

AGE = [('normal', 'Below 60 years'), ('senior', '60 to 79 years'), ('super', '80 years and above')]

form = (select('age', 'Your age', AGE, 'normal')
        + check('salaried', 'I am salaried / pensioner (standard deduction)', True)
        + field('gross', 'Annual salary / business income', 1500000, 0, 5000000, 10000)
        + field('other', 'Other income (interest, rent, etc.)', 0, 0, 1000000, 5000)
        + field('enps', 'Employer NPS contribution – 80CCD(2) (both regimes)', 0, 0, 500000, 1000, slider=False)
        + '''        <details class="mb-3">
            <summary class="fw-semibold mb-2">Old regime deductions (optional)</summary>
''' + field('d80c', 'Section 80C (PPF, ELSS, EPF, LIC…) – max ₹1.5 lakh', 150000, 0, 150000, 5000)
        + field('d80d', 'Section 80D – health insurance', 25000, 0, 100000, 1000)
        + field('hra', 'HRA exemption', 0, 0, 1000000, 5000, slider=False,
                help='Not sure? Use our <a href="hra-calculator">HRA calculator</a>.')
        + field('home', 'Home loan interest – Sec 24(b), max ₹2 lakh', 0, 0, 200000, 5000)
        + field('nps', 'Own NPS – 80CCD(1B), max ₹50,000', 0, 0, 50000, 1000)
        + field('oth', 'Other deductions (80E, 80G, 80TTA…)', 0, 0, 500000, 1000, slider=False)
        + '''        </details>
''')

result = '''                                <h2 class="h5 mb-3">Your tax for FY 2026-27</h2>
                                <div class="row g-2 mb-3">
                                    <div class="col-6"><div class="ng-kpi" id="boxNew"><small>New regime</small><b id="newTotal">–</b></div></div>
                                    <div class="col-6"><div class="ng-kpi" id="boxOld"><small>Old regime</small><b id="oldTotal">–</b></div></div>
                                </div>
                                <p class="mb-3" id="verdict"></p>
                                <table class="table ng-table mb-3">
                                    <thead><tr><th scope="col"><span class="visually-hidden">Item</span></th><th class="text-end">New</th><th class="text-end">Old</th></tr></thead>
                                    <tbody id="cmp"></tbody>
                                </table>
                                <h3 class="h6 mt-4">Slab-wise tax (<span id="slabFor">new</span> regime)</h3>
                                <table class="table table-sm ng-table">
                                    <thead><tr><th>Income slab</th><th class="text-end">Rate</th><th class="text-end">Tax</th></tr></thead>
                                    <tbody id="slabs"></tbody>
                                </table>'''

script = r'''        function row(label, a, b) {
            return '<tr><td>' + label + '</td><td class="text-end">' + a + '</td><td class="text-end">' + b + '</td></tr>';
        }
        function lakh(v) { return v === Infinity ? 'above' : '₹' + (v / 100000).toLocaleString('en-IN') + 'L'; }
        function calc() {
            var o = {
                gross: NG.val('gross'), other: NG.val('other'), salaried: document.getElementById('salaried').checked,
                ageGroup: document.getElementById('age').value, employerNps: NG.val('enps'),
                ded80C: NG.val('d80c'), ded80D: NG.val('d80d'), hra: NG.val('hra'), homeLoan: NG.val('home'),
                nps1B: NG.val('nps'), otherDed: NG.val('oth')
            };
            var n = NG.computeTax('new', o), d = NG.computeTax('old', o), f = NG.inr;
            NG.setText('newTotal', f(n.total));
            NG.setText('oldTotal', f(d.total));
            var best = n.total <= d.total ? n : d;
            document.getElementById('boxNew').classList.toggle('ng-best', best === n);
            document.getElementById('boxOld').classList.toggle('ng-best', best === d);
            var diff = Math.abs(n.total - d.total);
            NG.setHTML('verdict', diff === 0 ? 'Both regimes give the same tax.' :
                '<b>' + (best === n ? 'New' : 'Old') + ' regime saves you ' + f(diff) + '</b> a year (' + f(diff / 12) + ' a month).');
            NG.setHTML('cmp',
                row('Gross income', f(n.grossIncome), f(d.grossIncome)) +
                row('Standard deduction', f(n.stdDeduction), f(d.stdDeduction)) +
                row('Other deductions', f(n.deductions), f(d.deductions)) +
                row('<b>Taxable income</b>', '<b>' + f(n.taxable) + '</b>', '<b>' + f(d.taxable) + '</b>') +
                row('Tax as per slabs', f(n.slabTax), f(d.slabTax)) +
                row('Rebate 87A / marginal relief', '− ' + f(n.rebate), '− ' + f(d.rebate)) +
                row('Surcharge', f(n.surcharge), f(d.surcharge)) +
                row('Health & education cess (4%)', f(n.cess), f(d.cess)) +
                row('<b>Total tax</b>', '<b>' + f(n.total) + '</b>', '<b>' + f(d.total) + '</b>') +
                row('Monthly tax (TDS)', f(n.total / 12), f(d.total / 12)) +
                row('Effective tax rate', n.effectiveRate.toFixed(2) + '%', d.effectiveRate.toFixed(2) + '%'));
            NG.setText('slabFor', best === n ? 'new' : 'old');
            NG.setHTML('slabs', best.rows.map(function (r) {
                return '<tr><td>' + lakh(r.from) + ' – ' + lakh(r.to) + '</td><td class="text-end">' + (r.rate * 100) + '%</td><td class="text-end">' + f(r.tax) + '</td></tr>';
            }).join(''));
        }
        NG.bind(calc);'''

content = '''                    <h2>How this income tax calculator works</h2>
                    <p>Enter your yearly income and, if you want to compare, the deductions you claim. The calculator
                        works out your tax under <b>both the new and the old tax regime</b> at the same time, applies
                        the standard deduction, the Section 87A rebate (with marginal relief), surcharge and the 4%
                        health &amp; education cess, and highlights the regime that costs you less. Everything runs in
                        your browser — nothing you type is stored or sent anywhere.</p>
                    <p>The slabs are the ones introduced in Union Budget 2025, which continue unchanged for
                        <b>FY 2026-27 (tax year 2026-27, the first year under the Income-tax Act, 2025)</b> and also
                        apply to FY 2025-26 (AY 2026-27), so you can use it both for planning this year and for filing
                        your return.</p>

                    <h2>New tax regime slabs for FY 2026-27</h2>
                    <div class="table-responsive"><table class="table table-bordered">
                        <thead><tr><th>Taxable income</th><th>Tax rate</th></tr></thead>
                        <tbody>
                            <tr><td>Up to ₹4,00,000</td><td>Nil</td></tr>
                            <tr><td>₹4,00,001 – ₹8,00,000</td><td>5%</td></tr>
                            <tr><td>₹8,00,001 – ₹12,00,000</td><td>10%</td></tr>
                            <tr><td>₹12,00,001 – ₹16,00,000</td><td>15%</td></tr>
                            <tr><td>₹16,00,001 – ₹20,00,000</td><td>20%</td></tr>
                            <tr><td>₹20,00,001 – ₹24,00,000</td><td>25%</td></tr>
                            <tr><td>Above ₹24,00,000</td><td>30%</td></tr>
                        </tbody>
                    </table></div>
                    <ul>
                        <li><b>Standard deduction:</b> ₹75,000 for salaried employees and pensioners.</li>
                        <li><b>Rebate (Section 87A):</b> up to ₹60,000, so there is <b>no tax if taxable income is up
                            to ₹12 lakh</b>. For salaried people that means zero tax on a salary up to ₹12.75 lakh.</li>
                        <li><b>Marginal relief:</b> if your taxable income is just above ₹12 lakh, your tax cannot be
                            more than the income above ₹12 lakh. Example: on ₹12.10 lakh the slab tax is ₹61,500, but
                            you pay only ₹10,000 + cess.</li>
                        <li>The new regime is the <b>default</b>. Most deductions (80C, 80D, HRA, home-loan interest on
                            a self-occupied house) are not allowed; employer NPS contribution under 80CCD(2) is.</li>
                    </ul>

                    <h2>Old tax regime slabs</h2>
                    <div class="table-responsive"><table class="table table-bordered">
                        <thead><tr><th>Taxable income</th><th>Below 60</th><th>60 – 79</th><th>80+</th></tr></thead>
                        <tbody>
                            <tr><td>Up to ₹2,50,000</td><td>Nil</td><td>Nil</td><td>Nil</td></tr>
                            <tr><td>₹2,50,001 – ₹3,00,000</td><td>5%</td><td>Nil</td><td>Nil</td></tr>
                            <tr><td>₹3,00,001 – ₹5,00,000</td><td>5%</td><td>5%</td><td>Nil</td></tr>
                            <tr><td>₹5,00,001 – ₹10,00,000</td><td>20%</td><td>20%</td><td>20%</td></tr>
                            <tr><td>Above ₹10,00,000</td><td>30%</td><td>30%</td><td>30%</td></tr>
                        </tbody>
                    </table></div>
                    <p>Under the old regime the standard deduction is ₹50,000 and the 87A rebate is ₹12,500, so
                        there is no tax up to ₹5 lakh of taxable income. In exchange you can claim deductions such as
                        80C (₹1.5 lakh), 80D, HRA, home-loan interest (₹2 lakh), NPS 80CCD(1B) (₹50,000) and more.</p>

                    <h2>Surcharge and cess</h2>
                    <p>A surcharge applies on high incomes: 10% above ₹50 lakh, 15% above ₹1 crore, 25% above
                        ₹2 crore, and in the old regime 37% above ₹5 crore (the new regime caps it at 25%). Marginal
                        relief on surcharge is applied automatically. A 4% health and education cess is then added on
                        tax plus surcharge.</p>

                    <h2>Worked example: ₹15 lakh salary</h2>
                    <p><b>New regime:</b> ₹15,00,000 − ₹75,000 standard deduction = ₹14,25,000 taxable. Tax =
                        ₹20,000 (4–8L) + ₹40,000 (8–12L) + ₹33,750 (12–14.25L at 15%) = ₹93,750, plus 4% cess
                        = <b>₹97,500</b>.</p>
                    <p><b>Old regime</b> with ₹1.5 lakh 80C and ₹25,000 80D: ₹15,00,000 − ₹50,000 − ₹1,75,000 =
                        ₹12,75,000 taxable. Tax = ₹12,500 + ₹1,00,000 + ₹82,500 = ₹1,95,000, plus cess =
                        <b>₹2,02,800</b>. The new regime saves over ₹1 lakh here. The old regime usually wins only
                        when you have large HRA and home-loan deductions.</p>

                    <h2>Old vs new regime: which should you choose?</h2>
                    <ul>
                        <li>Break-even deductions (beyond the standard deduction) for a salaried person below 60:
                            about <b>₹5.4 lakh at ₹15 lakh salary and ₹7.1 lakh at ₹20 lakh</b>. If your deductions
                            are lower than this, the new regime is cheaper. Up to ₹12.75 lakh salary the new regime
                            is always better because the tax is zero.</li>
                        <li>If you pay high rent in a metro and also have a home loan, check both — the calculator
                            shows the exact break-even for your numbers.</li>
                        <li>Salaried employees can switch regime every year when filing the return. Those with business
                            income can switch back to the old regime only once.</li>
                    </ul>

                    <h2>Related calculators</h2>
                    <p>Work out your take-home pay with the <a href="salary-calculator">in-hand salary calculator</a>,
                        your <a href="hra-calculator">HRA exemption</a>, <a href="epf-calculator">EPF corpus</a>,
                        <a href="capital-gain-tax-calculator">capital gains tax</a> and <a href="tds-calculator">TDS</a>.</p>
'''

faqs = [
    ('Is income up to ₹12 lakh tax free in FY 2026-27?',
     'Yes, under the new regime. The Section 87A rebate of up to ₹60,000 makes the tax zero when taxable income is up to ₹12 lakh. Salaried people also get a ₹75,000 standard deduction, so a salary of up to ₹12.75 lakh pays no tax. The rebate does not cover special-rate income such as capital gains.'),
    ('How much tax do I pay on a ₹15 lakh salary?',
     'Under the new regime about ₹97,500 including cess (taxable income ₹14.25 lakh after the ₹75,000 standard deduction). Under the old regime it depends on your deductions; with only 80C and 80D it is about ₹2.03 lakh.'),
    ('Which is better, the old or the new tax regime?',
     'For most people earning up to ₹25 lakh with modest deductions, the new regime is cheaper. The old regime can win if you claim large HRA, home-loan interest and 80C/80D deductions together. Use the calculator above to compare your exact numbers.'),
    ('What is marginal relief under the new regime?',
     'If your taxable income is slightly above ₹12 lakh, the tax you pay cannot exceed the amount by which your income exceeds ₹12 lakh. For example, on ₹12.10 lakh you pay ₹10,000 plus cess instead of ₹61,500.'),
    ('Is the standard deduction available in both regimes?',
     'Yes. Salaried employees and pensioners get ₹75,000 in the new regime and ₹50,000 in the old regime.'),
    ('Did Budget 2026 change the income tax slabs?',
     'No. The slabs, the ₹75,000 standard deduction and the ₹12 lakh rebate limit introduced in Budget 2025 continue for FY 2026-27. The new Income-tax Act, 2025 renumbers sections but keeps these amounts.'),
]

PAGE = dict(
    slug='income-tax-calculator',
    title='Income Tax Calculator FY 2026-27: New vs Old Regime | Nivesguru',
    description='Free income tax calculator for FY 2026-27 & FY 2025-26. Compare new vs old regime with ₹75,000 standard deduction, ₹12 lakh rebate, surcharge and cess.',
    app_name='Income Tax Calculator FY 2026-27',
    h1='Income Tax Calculator FY 2026-27 (New vs Old Regime)',
    crumb='Income Tax Calculator',
    tagline='Budget 2025 slabs · ₹12 lakh rebate · standard deduction · surcharge & cess · regime comparison',
    published='2024-03-27T10:00:00+05:30',
    basis='Slabs per Finance Act 2025, unchanged for FY 2026-27',
    form=form, result=result, script=script, content=content, faqs=faqs,
)
