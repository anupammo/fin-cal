from base import field

form = (field('age', 'Your current age', 30, 18, 60, 1, prefix='', suffix='years')
        + field('ret', 'Retirement age', 60, 35, 75, 1, prefix='', suffix='years')
        + field('life', 'Plan until age', 85, 60, 100, 1, prefix='', suffix='years')
        + field('exp', 'Current monthly household expenses', 50000, 5000, 500000, 1000)
        + field('inf', 'Expected inflation', 6, 2, 10, 0.5, prefix='', suffix='%')
        + field('pre', 'Return on investments before retirement', 11, 4, 16, 0.5, prefix='', suffix='%')
        + field('post', 'Return after retirement (safer mix)', 7, 3, 12, 0.5, prefix='', suffix='%')
        + field('sav', 'Retirement savings you already have', 500000, 0, 50000000, 50000, slider=False,
                help='EPF, PPF, NPS, mutual funds and other money set aside for retirement.')
        + field('step', 'Yearly increase in your SIP', 10, 0, 20, 1, prefix='', suffix='%'))

result = '''                                <h2 class="h5 mb-3">Your retirement plan</h2>
                                <div class="ng-kpi mb-3"><small>Corpus needed at retirement</small><span class="ng-big" id="corpus">–</span></div>
                                <div class="row g-2 mb-3">
                                    <div class="col-6"><div class="ng-kpi"><small>Monthly expenses at retirement</small><b id="expRet">–</b></div></div>
                                    <div class="col-6"><div class="ng-kpi"><small>Your savings will grow to</small><b id="fvs">–</b></div></div>
                                    <div class="col-6"><div class="ng-kpi"><small>Shortfall to build</small><b id="gap">–</b></div></div>
                                    <div class="col-6"><div class="ng-kpi" id="boxSip"><small>Monthly SIP needed (starting now)</small><b id="sip">–</b></div></div>
                                </div>
                                <p class="small mb-0" id="msg"></p>'''

script = r'''        function sipFactor(i, months, step) {   // value of a ₹1 SIP rising by step every year
            var v = 0, s = 1;
            for (var m = 1; m <= months; m++) { v = (v + s) * (1 + i); if (m % 12 === 0) s *= 1 + step; }
            return v;
        }
        function calc() {
            var age = Math.round(NG.val('age')), ret = Math.round(NG.val('ret')), life = Math.round(NG.val('life'));
            var inf = NG.val('inf') / 100, pre = NG.val('pre') / 100, post = NG.val('post') / 100, step = NG.val('step') / 100;
            var n = Math.max(ret - age, 0), yrs = Math.max(life - ret, 1);
            var annual = NG.val('exp') * 12 * Math.pow(1 + inf, n);
            var corpus = 0;
            for (var k = 0; k < yrs; k++) corpus += annual * Math.pow(1 + inf, k) / Math.pow(1 + post, k);
            var fvs = NG.val('sav') * Math.pow(1 + pre, n), gap = Math.max(0, corpus - fvs);
            var sip = n > 0 ? gap / sipFactor(pre / 12, n * 12, step) : 0;
            NG.setText('corpus', NG.inr(corpus));
            NG.setText('expRet', NG.inr(annual / 12));
            NG.setText('fvs', NG.inr(fvs));
            NG.setText('gap', NG.inr(gap));
            NG.setText('sip', gap > 0 ? NG.inr(sip) : '₹ 0');
            document.getElementById('boxSip').classList.toggle('ng-best', gap === 0);
            NG.setHTML('msg', gap === 0 ? 'Your current savings are on track to cover retirement. Keep investing to stay ahead of inflation.' :
                'The corpus covers ' + yrs + ' years of expenses that keep rising with inflation, while the remaining money earns ' + (post * 100).toFixed(1) + '%. ' +
                (step > 0 ? 'The SIP above rises by ' + (step * 100) + '% every year.' : ''));
        }
        NG.bind(calc);'''

content = '''                    <h2>How much do you need to retire in India?</h2>
                    <p>Your retirement corpus must pay for <b>every year from retirement to the end of your plan</b>,
                        while prices keep rising. This calculator works it out in four steps:</p>
                    <ol>
                        <li><b>Future expenses:</b> today's monthly expenses grow with inflation until you retire.
                            ₹50,000 a month today becomes about <b>₹2.87 lakh a month</b> in 30 years at 6% inflation.</li>
                        <li><b>Corpus:</b> the amount that, invested at your post-retirement return, can pay those
                            expenses (rising with inflation every year) until your plan-until age.</li>
                        <li><b>What you already have:</b> your current retirement savings, grown at your
                            pre-retirement return.</li>
                        <li><b>Monthly SIP:</b> the investment needed from today to fill the gap, optionally stepping
                            up every year with your salary.</li>
                    </ol>

                    <h2>Example</h2>
                    <p>Age 30, retiring at 60, planning to 85, expenses ₹50,000 a month, 6% inflation, 11% return
                        before and 7% after retirement, ₹5 lakh already saved. The corpus needed is about
                        <b>₹7.7 crore</b>. Existing savings grow to about ₹1.1 crore, so the shortfall is about
                        ₹6.6 crore — roughly an <b>₹8,800 monthly SIP rising 10% a year</b>, or about ₹23,200 a month
                        with no step-up.</p>

                    <h2>Which investments help</h2>
                    <ul>
                        <li><a href="epf-calculator">EPF</a> and VPF — automatic, 8.25% for FY 2025-26, tax-free on maturity.</li>
                        <li><a href="national-pension-system-nps-calculator">NPS</a> — extra ₹50,000 deduction under 80CCD(1B) in the old regime; employer NPS deductible in both regimes.</li>
                        <li><a href="ppf-calculator">PPF</a> — 7.1%, tax-free, 15-year lock-in.</li>
                        <li>Equity mutual funds via <a href="step-up-sip-calculator">step-up SIP</a> — the main growth engine for goals 10+ years away.</li>
                        <li>After retirement: <a href="senior-citizens-savings-scheme-scss-calculator">SCSS</a> (8.2%), <a href="post-office-monthly-income-scheme-mis-calculator">POMIS</a> and an <a href="swp-calculator-online">SWP</a> from a balanced fund for regular income.</li>
                    </ul>

                    <h2>Tips</h2>
                    <ul>
                        <li>Plan to at least age 85–90; people are living longer.</li>
                        <li>Keep health insurance separate — medical costs usually rise faster than general inflation.</li>
                        <li>Review the plan every year and increase your SIP when your income rises.</li>
                    </ul>
'''

faqs = [
    ('How much money do I need to retire in India?',
     'It depends on your expenses, age and inflation. As a rough guide, a family spending ₹50,000 a month today and retiring in 30 years needs about ₹7.7 crore, assuming 6% inflation and 7% returns after retirement.'),
    ('What is the 25x rule for retirement?',
     'It says you need about 25 times your first year\'s expenses at retirement. The right multiple depends on how long retirement lasts and how much your money earns above inflation: the example on this page (25 years, 7% return, 6% inflation) needs about 22 times. Retiring earlier or earning less after retirement pushes it above 25 times.'),
    ('What return should I assume?',
     'For long-term planning, around 10–12% for an equity-heavy portfolio before retirement and 6–8% for a safer mix after retirement are common assumptions. Returns are not guaranteed.'),
    ('Is EPF enough for retirement?',
     'For most people, no. EPF is a strong base, but salary growth and inflation usually mean you also need NPS, PPF or mutual fund investments.'),
]

PAGE = dict(
    slug='retirement-calculator',
    title='Retirement Calculator India 2026: Corpus & Monthly SIP | Nivesguru',
    description='Free retirement planning calculator for India. Find the corpus you need, adjusted for inflation, and the monthly SIP (with yearly step-up) to get there.',
    app_name='Retirement Planning Calculator',
    h1='Retirement Calculator – How Much Do You Need to Retire?',
    crumb='Retirement Calculator',
    tagline='Inflation-adjusted corpus · existing savings · monthly SIP with step-up',
    basis='Illustrative; returns are not guaranteed',
    form=form, result=result, script=script, content=content, faqs=faqs,
)
