from base import field, select

RATES = [('5', '5% – essentials, most food & daily-use items'), ('18', '18% – standard rate (most goods & services)'),
         ('40', '40% – luxury & sin goods'), ('3', '3% – gold, silver, jewellery'),
         ('0.25', '0.25% – rough diamonds'), ('0', '0% – exempt / nil-rated'), ('custom', 'Custom rate…')]

form = (field('amt', 'Amount', 10000, 0, 1000000, 500)
        + select('mode', 'Amount is', [('add', 'Before GST (add GST)'), ('remove', 'Including GST (remove GST)')], 'add')
        + select('rate', 'GST rate (GST 2.0, from 22 Sep 2025)', RATES, '18')
        + '''        <div class="mb-3 d-none" id="customBox">
            <label class="form-label" for="crate">Custom GST rate</label>
            <div class="input-group"><input type="number" inputmode="decimal" class="form-control" id="crate" min="0" step="any" value="12"><span class="input-group-text">%</span></div>
        </div>
''' + select('supply', 'Type of supply', [('intra', 'Within the same state (CGST + SGST)'), ('inter', 'Between states (IGST)')], 'intra'))

result = '''                                <h2 class="h5 mb-3">GST breakup</h2>
                                <div class="row g-2 mb-3">
                                    <div class="col-6"><div class="ng-kpi"><small>Net amount (before GST)</small><b id="net">–</b></div></div>
                                    <div class="col-6"><div class="ng-kpi"><small>GST amount</small><b id="gst">–</b></div></div>
                                </div>
                                <div class="ng-kpi mb-3"><small>Total amount (including GST)</small><span class="ng-big" id="total">–</span></div>
                                <table class="table ng-table"><tbody id="split"></tbody></table>
                                <div class="ng-bar mb-1"><span id="barNet" style="background:#03a9f4"></span><span id="barGst" style="background:#f50057"></span></div>
                                <div class="ng-legend small"><span style="background:#03a9f4"></span>Net amount &nbsp; <span style="background:#f50057"></span>GST</div>'''

script = r'''        function calc() {
            var amt = NG.val('amt'), mode = document.getElementById('mode').value;
            var sel = document.getElementById('rate').value;
            document.getElementById('customBox').classList.toggle('d-none', sel !== 'custom');
            var rate = sel === 'custom' ? NG.val('crate') : parseFloat(sel);
            var net, gst;
            if (mode === 'add') { net = amt; gst = amt * rate / 100; }
            else { net = amt * 100 / (100 + rate); gst = amt - net; }
            var total = net + gst, f = function (v) { return '₹ ' + v.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); };
            NG.setText('net', f(net)); NG.setText('gst', f(gst)); NG.setText('total', f(total));
            var inter = document.getElementById('supply').value === 'inter';
            NG.setHTML('split', inter
                ? '<tr><td>IGST @ ' + rate + '%</td><td class="text-end">' + f(gst) + '</td></tr>'
                : '<tr><td>CGST @ ' + rate / 2 + '%</td><td class="text-end">' + f(gst / 2) + '</td></tr>' +
                  '<tr><td>SGST / UTGST @ ' + rate / 2 + '%</td><td class="text-end">' + f(gst / 2) + '</td></tr>');
            var p = total > 0 ? net / total * 100 : 100;
            document.getElementById('barNet').style.width = p + '%';
            document.getElementById('barGst').style.width = (100 - p) + '%';
        }
        NG.bind(calc);'''

content = '''                    <h2>GST calculator for GST 2.0 rates</h2>
                    <p>This GST calculator adds GST to a price or removes GST from a GST-inclusive price, and shows the
                        CGST + SGST split for sales within a state or IGST for inter-state sales. It uses the new
                        <b>GST 2.0 rate structure</b> that came into force on <b>22 September 2025</b>, when the GST
                        Council replaced the old 5 / 12 / 18 / 28% slabs with two main rates — <b>5% and 18%</b> — plus
                        a special <b>40%</b> rate for luxury and sin goods.</p>

                    <h2>GST rates in India (2026)</h2>
                    <div class="table-responsive"><table class="table table-bordered">
                        <thead><tr><th>Rate</th><th>What it covers (examples)</th></tr></thead>
                        <tbody>
                            <tr><td>0% (exempt)</td><td>Fresh milk, paneer, fresh vegetables, unbranded atta, individual health &amp; life insurance premiums, education services</td></tr>
                            <tr><td>5%</td><td>Packaged food items such as butter, ghee and namkeen, soaps, shampoo, toothpaste, many medicines, bicycles, most items earlier at 12%</td></tr>
                            <tr><td>18%</td><td>Most goods and services: small cars, two-wheelers up to 350cc, ACs, TVs, cement, telecom, banking and most professional services</td></tr>
                            <tr><td>40%</td><td>Pan masala, tobacco products, aerated sugary drinks, large cars and SUVs, motorcycles above 350cc, yachts and private aircraft</td></tr>
                            <tr><td>3%</td><td>Gold, silver and jewellery</td></tr>
                            <tr><td>0.25%</td><td>Rough precious stones and diamonds</td></tr>
                        </tbody>
                    </table></div>
                    <p>Rates depend on the exact HSN/SAC code of a product or service. Check the CBIC rate notification
                        for your item before invoicing.</p>

                    <h2>How to calculate GST</h2>
                    <h3>Adding GST to a price</h3>
                    <p class="ng-formula">GST amount = Net price × GST rate ÷ 100<br>Total price = Net price + GST amount</p>
                    <p>Example: a ₹10,000 service at 18% → GST = ₹1,800 → invoice total ₹11,800 (CGST ₹900 + SGST ₹900
                        within the state, or IGST ₹1,800 for another state).</p>
                    <h3>Removing GST from an inclusive price (reverse GST)</h3>
                    <p class="ng-formula">Net price = Total price × 100 ÷ (100 + GST rate)<br>GST amount = Total price − Net price</p>
                    <p>Example: an item sold for ₹1,050 including 5% GST → net price ₹1,000 and GST ₹50. A common
                        mistake is to take 5% of ₹1,050 (₹52.50) — that overstates the tax.</p>

                    <h2>CGST, SGST and IGST explained</h2>
                    <ul>
                        <li><b>Intra-state sale</b> (seller and buyer in the same state): GST is split equally into
                            Central GST (CGST) and State GST (SGST) — or UTGST in a Union Territory.</li>
                        <li><b>Inter-state sale</b> and imports: the full rate is charged as Integrated GST (IGST).</li>
                        <li>The total tax is the same in both cases; only the government that receives it changes.</li>
                    </ul>

                    <h2>What changed with GST 2.0?</h2>
                    <ul>
                        <li>The 12% slab was removed — most items moved down to 5%.</li>
                        <li>The 28% slab was removed — most items moved to 18%; luxury and sin goods moved to 40%.</li>
                        <li>Compensation cess was folded into the new 40% rate for most goods.</li>
                        <li>Individual life and health insurance premiums became GST-free.</li>
                    </ul>

                    <h2>Related calculators</h2>
                    <p>See also the <a href="income-tax-calculator">income tax calculator</a>,
                        <a href="tds-calculator">TDS calculator</a> and <a href="capital-gain-tax-calculator">capital
                        gains tax calculator</a>.</p>
'''

faqs = [
    ('What are the GST rates in India now?',
     'Since 22 September 2025 (GST 2.0) the main rates are 5% and 18%, with a special 40% rate for luxury and sin goods. Gold and silver are taxed at 3% and rough diamonds at 0.25%. Many essentials are exempt.'),
    ('How do I remove GST from a total amount?',
     'Divide the total by (1 + rate/100). For example, ₹1,180 including 18% GST: 1,180 ÷ 1.18 = ₹1,000 net price, so GST is ₹180.'),
    ('Is there still a 12% or 28% GST slab?',
     'No. Under GST 2.0 the 12% and 28% slabs were removed. Most 12% items moved to 5% and most 28% items moved to 18%, while some luxury and sin goods moved to 40%.'),
    ('What is the difference between CGST, SGST and IGST?',
     'For a sale within one state the GST is split half-and-half into CGST and SGST. For a sale between states, the full amount is charged as IGST. The total tax is the same.'),
    ('Is GST charged on health insurance?',
     'Individual health insurance and life insurance premiums are exempt from GST from 22 September 2025.'),
]

PAGE = dict(
    slug='gst-calculator',
    title='GST Calculator 2026: New GST 2.0 Rates (5%, 18%, 40%) | Nivesguru',
    description='Free GST calculator with new GST 2.0 rates (5%, 18%, 40%, 3%). Add or remove GST, get CGST, SGST & IGST split instantly. Formula, examples and rate list.',
    app_name='GST Calculator (GST 2.0)',
    h1='GST Calculator – Add or Remove GST (New 2026 Rates)',
    crumb='GST Calculator',
    tagline='GST 2.0 rates · inclusive & exclusive · CGST / SGST / IGST split',
    image='https://nivesguru.in/res/meta/gst-calculator.png',
    published='2024-03-27T10:00:00+05:30',
    basis='Rates per GST Council decision effective 22 Sep 2025',
    form=form, result=result, script=script, content=content, faqs=faqs,
)
