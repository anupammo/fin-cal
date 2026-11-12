from base import field, select

CITIES = [('m4', 'Delhi, Mumbai, Kolkata or Chennai'),
          ('m8', 'Bengaluru, Hyderabad, Pune or Ahmedabad'),
          ('other', 'Any other city')]

form = (select('fy', 'Financial year', [('2627', 'FY 2026-27 (new 8-city rule)'), ('2526', 'FY 2025-26 (ITR due July 2026)')], '2627')
        + field('basic', 'Monthly basic salary + DA', 50000, 5000, 300000, 1000)
        + field('hra', 'Monthly HRA received', 20000, 0, 150000, 500)
        + field('rent', 'Monthly rent paid', 20000, 0, 200000, 500)
        + select('city', 'City you live in', CITIES, 'm4')
        + field('months', 'Months of rent in the year', 12, 1, 12, 1, prefix='', suffix='months'))

result = '''                                <h2 class="h5 mb-3">Your HRA exemption</h2>
                                <div class="row g-2 mb-3">
                                    <div class="col-6"><div class="ng-kpi"><small>Exempt HRA (yearly)</small><b id="ex" class="text-success">–</b></div></div>
                                    <div class="col-6"><div class="ng-kpi"><small>Taxable HRA (yearly)</small><b id="tx">–</b></div></div>
                                </div>
                                <p class="small">Exemption is the <b>lowest</b> of these three amounts:</p>
                                <table class="table ng-table"><tbody id="rules"></tbody></table>
                                <p class="small text-muted mb-0" id="note"></p>'''

script = r'''        function calc() {
            var m = Math.min(Math.max(Math.round(NG.val('months')), 1), 12);
            var basic = NG.val('basic') * m, hra = NG.val('hra') * m, rent = NG.val('rent') * m;
            var city = document.getElementById('city').value, fy = document.getElementById('fy').value;
            var metro = city === 'm4' || (city === 'm8' && fy === '2627');
            var pct = metro ? 50 : 40;
            var a = hra, b = Math.max(0, rent - basic * 0.10), c = basic * pct / 100;
            var ex = Math.min(a, b, c);
            NG.setText('ex', NG.inr(ex)); NG.setText('tx', NG.inr(hra - ex));
            function tr(t, v) { return '<tr' + (v === ex ? ' class="table-success"' : '') + '><td>' + t + '</td><td class="text-end">' + NG.inr(v) + '</td></tr>'; }
            NG.setHTML('rules', tr('1. Actual HRA received', a) + tr('2. Rent paid − 10% of basic + DA', b) + tr('3. ' + pct + '% of basic + DA (' + (metro ? 'metro' : 'non-metro') + ')', c));
            NG.setText('note', (city === 'm8' && fy === '2526') ? 'For FY 2025-26 these four cities still use the 40% limit. They move to 50% from FY 2026-27.' :
                'HRA exemption is available only in the old tax regime.');
        }
        NG.bind(calc);'''

content = '''                    <h2>How HRA exemption is calculated</h2>
                    <p>House Rent Allowance (HRA) is part of many salary packages. If you live in a rented house and
                        choose the <b>old tax regime</b>, part or all of your HRA is exempt from income tax. The
                        exempt amount is the <b>lowest</b> of:</p>
                    <ol>
                        <li>Actual HRA received from your employer;</li>
                        <li>Rent paid minus 10% of basic salary + DA;</li>
                        <li>50% of basic + DA if you live in a metro city, or 40% elsewhere.</li>
                    </ol>
                    <p>Whatever is left over is added to your taxable salary.</p>

                    <h2>New metro city list from FY 2026-27</h2>
                    <p>The Income-tax Rules, 2026, notified in March 2026 under the new Income-tax Act, 2025, extend
                        the 50% limit to four more cities. From <b>FY 2026-27</b> the 50% rule applies to:</p>
                    <div class="table-responsive"><table class="table table-bordered">
                        <thead><tr><th>Up to FY 2025-26 (50%)</th><th>Added from FY 2026-27 (50%)</th></tr></thead>
                        <tbody><tr><td>Delhi, Mumbai, Kolkata, Chennai</td><td>Bengaluru, Hyderabad, Pune, Ahmedabad</td></tr></tbody>
                    </table></div>
                    <p>If you live in one of the four new cities, choose FY 2025-26 in the calculator when filing the
                        return due in July 2026 (still 40%), and FY 2026-27 for this year's tax planning (50%).</p>

                    <h2>Example</h2>
                    <p>Basic ₹50,000/month, HRA ₹20,000/month, rent ₹20,000/month in Mumbai. Yearly: actual HRA
                        ₹2,40,000; rent − 10% of basic = ₹2,40,000 − ₹60,000 = ₹1,80,000; 50% of basic = ₹3,00,000.
                        The lowest is <b>₹1,80,000 exempt</b>, and ₹60,000 of HRA is taxable.</p>

                    <h2>Documents and rules to remember</h2>
                    <ul>
                        <li>Give rent receipts to your employer. If yearly rent is above ₹1 lakh, the landlord's PAN
                            is required.</li>
                        <li>You can pay rent to your parents (with a proper agreement and bank transfers) and claim
                            HRA; they must show the rent as income. Rent paid to a spouse is generally not accepted.</li>
                        <li>No HRA exemption if you live in your own house.</li>
                        <li>If you do not receive HRA at all, you may claim Section 80GG (up to ₹60,000 a year) in the
                            old regime.</li>
                    </ul>

                    <h2>Related calculators</h2>
                    <p><a href="income-tax-calculator">Income tax calculator (old vs new)</a> ·
                        <a href="salary-calculator">In-hand salary calculator</a> · <a href="epf-calculator">EPF calculator</a></p>
'''

faqs = [
    ('Which cities get 50% HRA exemption?',
     'From FY 2026-27: Delhi, Mumbai, Kolkata, Chennai, Bengaluru, Hyderabad, Pune and Ahmedabad. Up to FY 2025-26 only Delhi, Mumbai, Kolkata and Chennai qualified; all other cities use 40%.'),
    ('Can I claim HRA in the new tax regime?',
     'No. HRA exemption is available only if you opt for the old tax regime.'),
    ('Is the landlord\'s PAN mandatory for HRA?',
     'Yes, if the rent you pay is more than ₹1 lakh in a year, you must give your landlord\'s PAN to your employer.'),
    ('Can I claim HRA if I pay rent to my parents?',
     'Yes, if you actually pay rent, ideally by bank transfer with a rent agreement, and your parents declare it as income. You cannot claim HRA for a house you own.'),
]

PAGE = dict(
    slug='hra-calculator',
    title='HRA Calculator FY 2026-27 (New 8 Metro Cities) | Nivesguru',
    description='Calculate HRA exemption for FY 2026-27 and FY 2025-26. Includes the new 50% rule for Bengaluru, Hyderabad, Pune and Ahmedabad. Formula, example and FAQs.',
    app_name='HRA Exemption Calculator',
    h1='HRA Calculator – House Rent Allowance Exemption',
    crumb='HRA Calculator',
    tagline='Old regime · new 8-city metro rule from FY 2026-27 · FY 2025-26 option for ITR',
    basis='Income-tax Rules, 2026 (8 metro cities from FY 2026-27)',
    form=form, result=result, script=script, content=content, faqs=faqs,
)
