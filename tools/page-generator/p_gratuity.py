from base import field, select

form = (field('sal', 'Last drawn monthly basic + DA', 50000, 5000, 300000, 1000)
        + field('yrs', 'Years of service', 10, 0, 40, 1, prefix='', suffix='years')
        + field('mos', 'Extra months of service', 0, 0, 11, 1, prefix='', suffix='months')
        + select('cov', 'Is your employer covered under the Gratuity Act / Social Security Code?',
                 [('yes', 'Yes (10 or more employees – most companies)'), ('no', 'No')], 'yes'))

result = '''                                <h2 class="h5 mb-3">Your gratuity</h2>
                                <div class="ng-kpi mb-3"><small>Gratuity payable</small><span class="ng-big" id="g">–</span></div>
                                <table class="table ng-table"><tbody id="det"></tbody></table>
                                <p class="small mb-0" id="note"></p>'''

script = r'''        function calc() {
            var sal = NG.val('sal'), y = Math.floor(NG.val('yrs')), mo = Math.floor(NG.val('mos'));
            var cov = document.getElementById('cov').value === 'yes';
            var years = cov ? y + (mo >= 6 ? 1 : 0) : y;
            var raw = cov ? sal * 15 * years / 26 : sal * 15 * years / 30;
            var g = Math.min(raw, 2000000);
            NG.setText('g', NG.inr(g));
            NG.setHTML('det',
                '<tr><td>Formula</td><td class="text-end">' + (cov ? '15 × salary × years ÷ 26' : '15 × salary × years ÷ 30') + '</td></tr>' +
                '<tr><td>Years counted</td><td class="text-end">' + years + '</td></tr>' +
                '<tr><td>Calculated amount</td><td class="text-end">' + NG.inr(raw) + '</td></tr>' +
                '<tr><td>Tax-free limit (private sector)</td><td class="text-end">₹ 20,00,000</td></tr>');
            var note = y + mo / 12 < 5 ? '⚠ Permanent employees normally need 5 years of continuous service (fixed-term employees: 1 year; not required on death or disability).' :
                (raw > 2000000 ? 'Capped at the ₹20 lakh ceiling.' : 'Fully tax-free up to ₹20 lakh for private-sector employees.');
            NG.setText('note', note);
        }
        NG.bind(calc);'''

content = '''                    <h2>Gratuity formula</h2>
                    <p>Gratuity is a lump sum your employer pays when you leave after long service — on resignation,
                        retirement, death or disability. For employers covered by the law (10 or more employees) the
                        formula is:</p>
                    <p class="ng-formula">Gratuity = 15 × last drawn (basic + DA) × years of service ÷ 26</p>
                    <p>"15" stands for 15 days' wages per year and "26" for working days in a month. Service of
                        <b>more than six months</b> in the final year is rounded up to a full year. For employers not
                        covered, the divisor is 30 and only completed years count.</p>

                    <h2>Example</h2>
                    <p>Last basic + DA ₹50,000, service 10 years 7 months → 11 years counted. Gratuity = 15 × 50,000
                        × 11 ÷ 26 = <b>₹3,17,308</b>.</p>

                    <h2>Eligibility</h2>
                    <ul>
                        <li><b>Permanent employees:</b> 5 years of continuous service (courts have accepted 4 years and
                            240 days in many cases).</li>
                        <li><b>Fixed-term employees:</b> under the Code on Social Security, 2020 (in force from
                            21 November 2025), gratuity is payable pro rata after <b>one year</b>.</li>
                        <li><b>Death or disablement:</b> no minimum service needed.</li>
                    </ul>

                    <h2>Labour Codes: why your gratuity may rise</h2>
                    <p>The Labour Codes say "wages" must be at least 50% of total pay. If your basic + DA was a small
                        part of your salary, employers must now count a larger amount as wages — which directly
                        increases gratuity. Enter your revised basic + DA to see the effect.</p>

                    <h2>Tax on gratuity</h2>
                    <ul>
                        <li>Central and state government employees: fully tax-free.</li>
                        <li>Private-sector employees: tax-free up to <b>₹20 lakh</b> in a lifetime; anything above is
                            taxed as salary.</li>
                    </ul>

                    <h2>Related calculators</h2>
                    <p><a href="epf-calculator">EPF calculator</a> · <a href="salary-calculator">In-hand salary calculator</a> ·
                        <a href="national-pension-system-nps-calculator">NPS calculator</a></p>
'''

faqs = [
    ('How is gratuity calculated?',
     'For covered employers: 15 × last drawn basic + DA × years of service ÷ 26. Service above six months in the last year counts as a full year.'),
    ('Who gets gratuity after one year?',
     'Fixed-term employees, under the Code on Social Security, 2020, which came into force on 21 November 2025. Permanent employees still need five years of continuous service, except on death or disability.'),
    ('Is gratuity taxable?',
     'For government employees it is fully exempt. For private-sector employees it is exempt up to ₹20 lakh; any excess is taxed as salary.'),
    ('What is the maximum gratuity amount?',
     'The ceiling for private-sector employees is ₹20 lakh. Employers may pay more voluntarily, but the excess is taxable.'),
]

PAGE = dict(
    slug='gratuity-calculator',
    title='Gratuity Calculator 2026: Formula & Labour Code Rules | Nivesguru',
    description='Calculate gratuity with the 15/26 formula. Covers new Labour Code rules (1-year gratuity for fixed-term staff, 50% wage rule) and the ₹20 lakh tax-free limit.',
    app_name='Gratuity Calculator',
    h1='Gratuity Calculator – How Much Gratuity Will You Get?',
    crumb='Gratuity Calculator',
    tagline='15/26 formula · 6-month rounding · Labour Code changes · ₹20 lakh tax-free limit',
    basis='Payment of Gratuity Act / Code on Social Security, 2020',
    form=form, result=result, script=script, content=content, faqs=faqs,
)
