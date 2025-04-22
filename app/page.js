import Head from "next/head";
import Image from "next/image";
// import styles from "./page.module.css";
import DigitalIndia from "./img/digital-india.webp";
import Favicon32x32 from "./img/favicon-32x32.png";
import Anouncement from "./img/nivesguru-anouncement-indian-incom-tax-return-last-date.webp";
import POscss from "./img/post-office-scss.webp";
import POmssc from "./img/post-office-mssc.webp";
import POmis from "./img/post-office-mis.webp";
import POtd from "./img/post-office-td.webp";
import PensionPlan from "./img/pension-plan.webp";
import BimaYojana from "./img/bima-yojana.webp";
import SSY from "./img/ssy.webp";
import GoldBonds from "./img/gold-bonds.webp";
import GovtBond from "./img/govt-bonds.webp";
import Sip from "./img/sip-calculator.webp";
import Inflation from "./img/inflation-calculator.webp";
import CompoundInterest from "./img/compound-interest-calculator.webp";
import BankDeposit from "./img/bank-deposit.webp";
import Deposits from "./img/deposits.webp";
import BOB from "./img/bob-bank-of-baroda-nivesguru.webp";
import BOI from "./img/boi-bank-of-india-nivesguru.webp";
import PNB from "./img/pnb-punjab-national-bank-nivesguru.webp";
import SBI from "./img/sbi-state-bank-of-india-nivesguru.webp";
import UBI from "./img/ubi-union-bank-of-india-nivesguru.webp";
import Calculator from "./img/nivesguru-investment-calculator-1st.svg";
import CalculatorHome from "./img/nivesguru-investment-calculator-home-page-svg.webp";

export const metadata = {
  title: "Nivesguru: Free Calculator Investment make easy for India",
  description:
    "Welcome to our website. Explore our products, services, and more.",
  alternates: {
    canonical: "https://anupammondal.in/",
  },
  openGraph: {
    title: "Nivesguru: Free Calculator Investment make easy for India",
    description:
      "Discover the best products and services at Your Website Name.",
    url: "https://anupammondal.in/",
    siteName: "Nivesguru: Free Calculator Investment make easy for India",
    images: [
      {
        url: "https://anupammondal.in/images/home-og.jpg",
        width: 1200,
        height: 630,
        alt: "Home Page ImageNivesguru: Free Calculator Investment make easy for India",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.canonical} />
      </Head>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="card border-0 my-4">
                <div className="card-body">
                  <div className="py-5">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li
                          className="breadcrumb-item active"
                          aria-current="homepage"
                        >
                          Home
                        </li>
                      </ol>
                    </nav>
                    <h1 className="lead fw-bold fs-3">
                      Investment Calculator - Plan Financial Future | Nivesguru
                    </h1>
                    <hr className="w-50 my-4" />
                    <p className="lead fs-6">
                      Nivesguru is a online calculation tool for investments
                      absolutely free of cost. A initiative for Indian to
                      motivate on investments for their finance related queries
                      with real time output along with a tool set of
                      calculators. You can calculate your investment and its
                      maturity amount through our calculators like Savings /
                      Fixed / Recurring Deposits. Government bonds like Kisan
                      Vikas Patra, National Security Certificates. Pension and
                      family plan like PPF, NPS, APY, PMJJBY, PMSBY, SSY for
                      investments. Nivesguru is a online calculation tool for
                      investments absolutely free of cost. A initiative for
                      Indian to motivate on investments for their finance
                      related queries with real time output along with a tool
                      set of calculators.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="card border-0 my-5">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <Image
                        className="d-block mx-auto my-3"
                        width="120"
                        height="68"
                        src={DigitalIndia}
                        alt="Digital India"
                        title="Digital India"
                      />
                    </div>
                    <div className="col">
                      <a
                        className="d-block nav-link rounded my-2"
                        href="https://wheelguru.in"
                        title="Top Bike, Scooter Mileage, Price, Specification | Wheelguru"
                      >
                        <p className="rounded-pill mx-auto mb-0 px-4 py-2">
                          <span>
                            <Image
                              src={Favicon32x32}
                              width="32"
                              height="32"
                              alt="Top Bike, Scooter Mileage, Price, Specification | Wheelguru"
                            />
                          </span>
                          Wheelguru | plz checkout our new product for Bike
                          lovers
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <Image
                        className="d-block mx-auto"
                        width="150"
                        height="265"
                        src={Anouncement}
                        alt="Nivesguru Anouncement Indian Incom Tax Return Last Date"
                        title="Nivesguru Anouncement Indian Incom Tax Return Last Date"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id="post-office">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="my-4 py-4">Post Office schemes</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-12">
              <p className="lead fs-6 pb-4">
                The post office has long been a reliable institution for
                financial transactions and investments. Post office schemes
                offer secure and accessible ways for individuals to grow their
                savings. In this article, we will take an in-depth look at
                various post office schemes, the recent changes in interest
                rates, and the exclusive benefits for senior citizens. Whether
                you are a seasoned investor or a retiree seeking safe investment
                options, this article will provide valuable insights to make
                informed decisions.
              </p>
            </div>
            <div className="col-md-4 col-12">
              <div className="card shadow mb-4 p-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src={POscss}
                      className="img-fluid d-block mx-auto"
                      alt="Senior Citizens Savings Scheme / SCSS Calculator"
                      title="Senior Citizens Savings Scheme / SCSS Calculator"
                      width="105"
                      height="105"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title h5">SCSS Calculator</h3>
                      <a
                        href="senior-citizens-savings-scheme-scss-calculator"
                        className="stretched-link shadow-none lead fs-6"
                        title="Senior Citizens Savings Scheme / SCSS Calculator"
                      >
                        Senior Citizens Savings Scheme
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="card shadow mb-4 p-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src={POmssc}
                      className="img-fluid d-block mx-auto"
                      alt="Mahila Samman Savings Certificate / MSSC"
                      title="Mahila Samman Savings Certificate / MSSC"
                      width="105"
                      height="105"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title h5">MSSC Calculator</h3>
                      <a
                        href="mahila-samman-savings-certificate-mssc-calculator"
                        title="Mahila Samman Savings Certificate / MSSC Calculator"
                        className="stretched-link shadow-none lead fs-6"
                      >
                        Mahila Samman Savings Certificate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card shadow mb-4 p-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src={POmis}
                      className="img-fluid d-block mx-auto"
                      alt="Post Office Monthly Income Scheme / MIS"
                      title="Post Office Monthly Income Scheme / MIS"
                      width="105"
                      height="105"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title h5">MIS Calculator</h3>
                      <a
                        href="post-office-monthly-income-scheme-mis-calculator"
                        className="stretched-link shadow-none lead fs-6"
                        title="Post Office Monthly Income Scheme / MIS Calculator"
                      >
                        Post Office Monthly Income Scheme
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card shadow mb-4 p-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src={POtd}
                      className="img-fluid d-block mx-auto"
                      alt="Post Office Time Deposit / TD"
                      title="Post Office Time Deposit / TD"
                      width="105"
                      height="105"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title h5">TD Calculator</h3>
                      <a
                        href="post-office-time-deposit-td-calculator"
                        className="stretched-link shadow-none lead fs-6"
                        title="Post Office Time Deposit / TD Calculator"
                      >
                        Post Office Time Deposit Scheme
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pension-bima">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center my-4 py-4">Pension / Bima Yojana</h2>
              <p className="lead fs-6 pb-4">
                Pensions plans are the basic steps to secure your future. If
                you've started investment and seeking for different options to
                invest and not started any pension plans then you can checkout
                those available options like{" "}
                <strong>National Pension Scheme</strong>
                (NPS), <strong>Public Provident Fund</strong> (PPF),{" "}
                <strong>Atal Pension Yojana</strong> (APY),
                <strong>Pradhan Mantri Jeevan Jyoti Bima Yojana</strong>{" "}
                (PMJJBY), <strong>Pradhan Mantri Suraksha Bima Yojana</strong>{" "}
                (PMSBY) or Secure your Girls future with{" "}
                <strong>Sukanya Samriddhi Yojana</strong> (SSY). Here're some
                best Insurance Plan / Bima Yojana from the Indian Government to
                ensure its citizens get covered from accidental loss / death
                benefits. Also some other pension schemes are available to
                secure your retirement. Those are the best options where you'll
                get benefited with minimal premium and maximum return or benefit
                as coverage. You can check the calculators for investment and
                its return absolutely free of cost.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="card shadow mb-4 p-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src={PensionPlan}
                      className="img-fluid d-block mx-auto"
                      alt="Atal Pension Yojana / APY Calculator"
                      title="Atal Pension Yojana / APY Calculator"
                      width="105"
                      height="105"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title h5 my-2">APY Calculator</h3>
                      <a
                        href="apy-calculator"
                        className="stretched-link shadow-none lead fs-6"
                      >
                        Atal Pension Yojana
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card shadow mb-4 p-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src={PensionPlan}
                      className="img-fluid d-block mx-auto"
                      alt="National Pension System / NPS Calculator"
                      title="National Pension System / NPS Calculator"
                      width="105"
                      height="105"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title h5 my-2">NPS Calculator</h3>
                      <a
                        href="national-pension-system-nps-calculator"
                        className="stretched-link shadow-none lead fs-6"
                      >
                        National Pension System
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card shadow mb-4 p-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src={PensionPlan}
                      className="img-fluid d-block mx-auto"
                      alt="Public Provident Fund Deposit / PPF Calculator"
                      title="Public Provident Fund Deposit / PPF Calculator"
                      width="105"
                      height="105"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title h5 my-2">PPF Calculator</h3>
                      <a
                        href="ppf-calculator"
                        className="stretched-link shadow-none lead fs-6"
                      >
                        Public Provident Fund
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card shadow mb-4 p-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src={BimaYojana}
                      className="img-fluid d-block mx-auto"
                      alt="Pradhan Mantri Jeevan Jyoti Bima / PMJJBY Calculator"
                      title="Pradhan Mantri Jeevan Jyoti Bima / PMJJBY Calculator"
                      width="105"
                      height="105"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title h5">PMJJBY Calculator</h3>
                      <a
                        href="pradhan-mantri-jeevan-jyoti-bima-yojana-pmjjby-calculator"
                        className="stretched-link shadow-none lead fs-6"
                      >
                        Pradhan Mantri Jeevan Jyoti Bima
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card shadow mb-4 p-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src={BimaYojana}
                      className="img-fluid d-block mx-auto"
                      alt="Pradhan Mantri Suraksha Bima Yojana / PMSBY Calculator"
                      title="Pradhan Mantri Suraksha Bima Yojana / PMSBY Calculator"
                      width="105"
                      height="105"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title h5">PMSBY Calculator</h3>
                      <a
                        href="pradhan-mantri-suraksha-bima-yojana-pmsby-calculator"
                        className="stretched-link shadow-none lead fs-6"
                      >
                        Pradhan Mantri Suraksha Bima Yojana
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card shadow mb-4 p-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src={SSY}
                      className="img-fluid d-block mx-auto img-fluid"
                      alt="Sukanya Samriddhi Yojana Deposit / SSY Calculator"
                      title="Sukanya Samriddhi Yojana Deposit / SSY Calculator"
                      width="105"
                      height="105"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title h5">SSY Calculator</h3>
                      <a
                        href="sukanya-samriddhi-yojana-ssy-calculator"
                        className="stretched-link shadow-none lead fs-6"
                      >
                        Sukanya Samriddhi Yojana
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="bonds">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center my-4 py-4">Government Bonds</h2>
              <p className="lead fs-6 pb-4">
                Another alternative investment for Indian citizens / investors
                to keep the money secure and risk free. Also get some good
                interest that can beat inflation for their invested money.{" "}
                <strong>Kisan Vikas Patra</strong> (KVP),{" "}
                <strong>National Savings Certificate</strong> (NSC) or{" "}
                <strong>Sovereign Gold Bond</strong> (SGB) like Government bonds
                / certificates are the opportunities provided by the Government
                of India. There are some locking periods for those options and
                some of them have the early access to partial / full withdrawal
                facilities available with minimum penalties. Where you can
                survive the emergency situations or can borrow a loan from
                financial institutes by mortgaging them. You can borrow the loan
                amount up to 50-90% of your Bonds value.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="card border border-warning shadow mb-4 p-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src={GoldBonds}
                      className="img-fluid d-block mx-auto"
                      alt="Sovereign Gold Bond / SGB Calculator"
                      title="Sovereign Gold Bond / SGB Calculator"
                      width="105"
                      height="105"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title h5">SGB Calculator</h3>
                      <a
                        href="sgb-calculator"
                        className="stretched-link shadow-none lead fs-6"
                      >
                        Sovereign Gold Bond
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card shadow mb-4 p-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src={GovtBond}
                      className="img-fluid d-block mx-auto"
                      alt="National Savings Certificate / NSC Calculator"
                      title="National Savings Certificate / NSC Calculator"
                      width="105"
                      height="105"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title h5 mb-0">NSC Calculator</h3>
                      <a
                        href="national-savings-certificate-nsc-calculator"
                        className="stretched-link shadow-none lead fs-6"
                      >
                        National Savings Certificate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card shadow mb-4 p-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src={GovtBond}
                      className="img-fluid d-block mx-auto"
                      alt="Kisan Vikas Patra / KVP Calculator"
                      title="Kisan Vikas Patra / KVP Calculator"
                      width="105"
                      height="105"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title h5 my-2">KVP Calculator</h3>
                      <a
                        href="kvp-calculator"
                        className="stretched-link shadow-none lead fs-6"
                      >
                        Kisan Vikas Patra
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="calculators">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center my-4 py-4">
                Financial | Tax Calculator
              </h2>
              <p className="lead fs-6 pb-4">
                Thanks to free online tools like the Financial Calculator, Free
                Online Calculator, SIP Calculator, SCSS Calculator, and Compound
                Interest Calculator, you can make informed financial decisions
                effortlessly. <strong>Financial Calculator</strong>: A versatile
                tool for various financial calculations.Plan your investments,
                estimate loan payments, and secure your financial future.{" "}
                <strong>Free Online Calculator</strong>: Convenient and
                accessible, it simplifies complex calculations. Calculate
                mortgage payments, savings growth, and tax liabilities online.{" "}
                <strong>SIP Calculator</strong>: Take control of your Systematic
                Investment Plan. Visualize investment growth, adjust variables,
                and align with your financial goals.{" "}
                <strong>SCSS Calculator</strong>: Ideal for senior citizens.
                Maximize returns with the Senior Citizens Savings Scheme. Easily
                calculate returns for a secure retirement.
                <strong>Compound Interest Calculator</strong>: Harness the power
                of compounding. See your money grow when reinvested. Achieve
                financial goals with this essential tool. Incorporating these
                calculators into your financial planning is a smart move. Make
                informed choices, secure your future, and watch your financial
                dreams become reality. Explore these tools today and take a step
                towards financial success.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="card shadow mb-4 p-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src={Sip}
                      className="img-fluid d-block mx-auto"
                      alt="Systematic Investments Plan Return Calculator"
                      title="Systematic Investments Plan Return
                                    Calculator"
                      width="105"
                      height="105"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title h5 my-1">SIP Calculator</h3>
                      <a
                        href="systematic-investment-plan-sip-return-calculator"
                        className="stretched-link shadow-none lead fs-6"
                      >
                        Systematic Investments Plan Return Calculator
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card shadow mb-4 p-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src={Sip}
                      className="img-fluid d-block mx-auto"
                      alt="SWP Calculator Online"
                      title="SWP Calculator Online"
                      width="105"
                      height="105"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title h5 my-1">SWP Calculator</h3>
                      <a
                        className="stretched-link shadow-none lead fs-6"
                        href="swp-calculator-online"
                      >
                        Systematic Withdrawal Plan / SWP Calculator
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card shadow mb-4 p-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src={Inflation}
                      className="img-fluid d-block mx-auto"
                      alt="Inflation Calculator for India by Nivesguru"
                      title="Inflation Calculator for India by Nivesguru"
                      width="105"
                      height="105"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title h5 mb-2">
                        Inflation Calculator
                      </h3>
                      <a
                        href="inflation-calculator-india"
                        className="stretched-link shadow-none lead fs-6"
                      >
                        Inflation Calculator for India
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card shadow mb-4 p-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src={Inflation}
                      className="img-fluid d-block mx-auto"
                      alt="Lumpsum Calculator Online for India"
                      title="Lumpsum Calculator Online for India"
                      width="105"
                      height="105"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body pe-0">
                      <h3 className="card-title h5 mb-2">Lumpsum Calculator</h3>
                      <a
                        href="lumpsum-calculator-online"
                        className="stretched-link shadow-none lead fs-6"
                      >
                        Lumpsum Calculator Online for India
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card shadow mb-4 p-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src={CompoundInterest}
                      className="img-fluid d-block mx-auto"
                      alt="Compound Interest Calculator Investment Calculator"
                      title="Compound Interest Calculator Financial Calculator"
                      width="105"
                      height="105"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title h5">Interest Calculator</h3>
                      <a
                        href="compound-interest-calculator"
                        className="stretched-link shadow-none lead fs-6"
                      >
                        Compound Interest Calculator
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card shadow mb-4 p-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src={CompoundInterest}
                      className="img-fluid d-block mx-auto"
                      alt="Simple Interest Calculator in Rupees"
                      title="Simple Interest Calculator in Rupees"
                      width="105"
                      height="105"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title h5">Interest Calculator</h3>
                      <a
                        href="simple-interest-calculator"
                        className="stretched-link shadow-none lead fs-6"
                      >
                        Simple Interest Calculator
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card shadow mb-4 p-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src={Inflation}
                      className="img-fluid d-block mx-auto"
                      alt="Inflation Calculator for India by Nivesguru"
                      title="Inflation Calculator for India by Nivesguru"
                      width="105"
                      height="105"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title h5 mb-2">EMI Calculator</h3>
                      <a
                        href="emi-calculator-online"
                        className="stretched-link shadow-none lead fs-6"
                      >
                        Monthly Installment EMI Calculator online
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="bank-deposit">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center my-4 py-4">Bank Deposits</h2>
              <p className="lead fs-6 pb-4">
                Bank Deposits are the best investment known for Indians and
                trust level is very high here. India's most citizens / investors
                are linked with the Indian economy with bank's savings account,
                recurring deposit and fixed deposit schemes. The interest is
                higher in recurring deposits (RD) or fixed deposits (FD) instead
                of savings accounts for investors / account holders. But savings
                schemes have the opportunity of liquidity where without any
                locking periods or penalty for early withdrawals. A person can
                withdraw money from his / her account. Also now have the
                opportunity of Pradhan Mantri <strong>Jan-Dhan Yojana</strong>{" "}
                to open a zero balance bank account with ease and take benefit
                of such opportunities. In this era of
                <strong>Digital India</strong> introduced by our respected{" "}
                <strong>Prime Minister of India</strong>. Bank sectors are very
                flexible with door step service and online activities like{" "}
                <strong>UPI payments</strong> are now the most popular framework
                over the Globe. Nivesguru is trying to inform or remind you
                about some important updates and activities to secure the
                financial future with some free tools / calculators as an
                illustrative way to understand those who are not aware or skip
                those things during daily work-life balance.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="card shadow p-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src={BankDeposit}
                      width="105"
                      height="105"
                      loading="lazy"
                      className="img-fluid d-block mx-auto"
                      alt="Fixed Deposit | FD Calculator - Nivesguru"
                      title="Fixed Deposit | FD Calculator - Nivesguru"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title h5 my-2">FD Calculator</h3>
                      <a
                        href="fixed-deposit-fd-calculator"
                        className="stretched-link shadow-none lead fs-6"
                      >
                        for fixed deposits
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow my-4">
                <div className="card-body px-0">
                  <ul className="nav justify-content-center">
                    <li className="nav-item">
                      <a className="nav-link px-2" href="bob-fd-calculator">
                        <Image
                          src={BOB}
                          width="32"
                          height="32"
                          className="d-inline mx-2 rounded-circle"
                          alt="BOB | Bank of Baroda FD Calculator"
                          title="BOB | Bank of Baroda FD Calculator"
                          loading="lazy"
                        />
                        <small className="d-block text-center">BOB FD</small>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-2" href="boi-fd-calculator">
                        <Image
                          src={BOI}
                          width="32"
                          height="32"
                          className="d-inline mx-2 rounded-circle"
                          alt="BOI | Bank of India FD Calculator"
                          title="BOI | Bank of India FD Calculator"
                          loading="lazy"
                        />
                        <small className="d-block text-center">BOI FD</small>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-2" href="pnb-fd-calculator">
                        <Image
                          src={PNB}
                          width="32"
                          height="32"
                          className="d-inline mx-2 rounded-circle"
                          alt="PNB | Punjab National Bank FD Calculator"
                          title="PNB | Punjab National Bank FD Calculator"
                          loading="lazy"
                        />
                        <small className="d-block text-center">PNB FD</small>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-2" href="sbi-fd-calculator">
                        <Image
                          src={SBI}
                          width="32"
                          height="32"
                          className="d-inline"
                          alt="SBI | Satate Bank of India FD Calculator"
                          title="SBI | Satate Bank of India FD Calculator"
                          loading="lazy"
                        />
                        <small className="d-block text-center">SBI FD</small>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-2" href="ubi-fd-calculator">
                        <Image
                          src={UBI}
                          width="32"
                          height="32"
                          className="d-inline mx-2 rounded-circle"
                          alt="UBI | Union Bank of India FD Calculator"
                          title="UBI | Union Bank of India FD Calculator"
                          loading="lazy"
                        />
                        <small className="d-block text-center">UBI FD</small>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card shadow p-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src={Deposits}
                      className="img-fluid d-block mx-auto"
                      width="105"
                      height="105"
                      loading="lazy"
                      alt="Savings Deposit | SD Calculator - Nivesguru"
                      title="Savings Deposit | SD Calculator - Nivesguru"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title h5 my-2">SB Calculator</h3>
                      <a
                        href="sb-calculator"
                        className="stretched-link shadow-none lead fs-6"
                      >
                        for Savings account
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow my-4">
                <div className="card-body px-0">
                  <ul className="nav justify-content-center">
                    <li className="nav-item">
                      <a className="nav-link px-2" href="bob-sb-calculator">
                        <Image
                          src={BOB}
                          width="32"
                          height="32"
                          loading="lazy"
                          className="d-inline mx-2 rounded-circle"
                          alt="BOB | Bank of Baroda SB Calculator | Nivesguru"
                          title="BOB | Bank of Baroda SB Calculator | Nivesguru"
                        />
                        <small className="d-block text-center">BOB SB</small>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-2" href="boi-sb-calculator">
                        <Image
                          src={BOI}
                          width="32"
                          height="32"
                          className="d-inline mx-2 rounded-circle"
                          alt="BOI | Bank of India SB Calculator | Nivesguru"
                          title="BOI | Bank of India SB Calculator | Nivesguru"
                          loading="lazy"
                        />
                        <small className="d-block text-center">BOI SB</small>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-2" href="pnb-sb-calculator">
                        <Image
                          src={PNB}
                          width="32"
                          height="32"
                          className="d-inline mx-2 rounded-circle"
                          alt="PNB | Punjab National Bank SB Calculator | Nivesguru"
                          title="PNB | Punjab National Bank SB Calculator | Nivesguru"
                          loading="lazy"
                        />
                        <small className="d-block text-center">PNB SB</small>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-2" href="sbi-sb-calculator">
                        <Image
                          src={SBI}
                          width="32"
                          height="32"
                          className="d-inline"
                          alt="SBI | State Bank of India SB Calculator | Nivesguru"
                          title="SBI | State Bank of India SB Calculator | Nivesguru"
                          loading="lazy"
                        />
                        <small className="d-block text-center">SBI SB</small>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-2" href="ubi-sb-calculator">
                        <Image
                          src={UBI}
                          width="32"
                          height="32"
                          className="d-inline mx-2 rounded-circle"
                          alt="UBI | Union Bank of India SB Calculator | Nivesguru"
                          title="UBI | Union Bank of India SB Calculator | Nivesguru"
                          loading="lazy"
                        />
                        <small className="d-block text-center">UBI SB</small>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card shadow p-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src={BankDeposit}
                      className="img-fluid d-block mx-auto"
                      width="105"
                      height="105"
                      loading="lazy"
                      alt="Recurring Deposit / RD Calculator - Nivesguru"
                      title="Recurring Deposit / RD Calculator - Nivesguru"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title h5 my-2">RD Calculator</h3>
                      <a
                        href="rd-calculator"
                        className="stretched-link shadow-none lead fs-6"
                      >
                        for recurring deposits
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow my-4">
                <div className="card-body px-0">
                  <ul className="nav justify-content-center">
                    <li className="nav-item">
                      <a className="nav-link px-2" href="bob-rd-calculator">
                        <Image
                          src={BOB}
                          width="32"
                          height="32"
                          className="d-inline mx-2 rounded-circle"
                          alt="BOB | Bank of Baroda RD Calculator | Nivesguru"
                          title="BOB | Bank of Baroda RD Calculator | Nivesguru"
                          loading="lazy"
                        />
                        <small className="d-block text-center">BOB RD</small>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-2" href="boi-rd-calculator">
                        <Image
                          src={BOI}
                          width="32"
                          height="32"
                          className="d-inline mx-2 rounded-circle"
                          alt="BOI | Bank of India RD Calculator | Nivesguru"
                          title="BOI | Bank of India RD Calculator | Nivesguru"
                          loading="lazy"
                        />
                        <small className="d-block text-center">BOI RD</small>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-2" href="pnb-rd-calculator">
                        <Image
                          src={PNB}
                          width="32"
                          height="32"
                          className="d-inline mx-2 rounded-circle"
                          alt="PNB | Punjab national Bank RD Calculator | Nivesguru"
                          title="PNB | Punjab national Bank RD Calculator | Nivesguru"
                          loading="lazy"
                        />
                        <small className="d-block text-center">PNB RD</small>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-2" href="sbi-rd-calculator">
                        <Image
                          src={SBI}
                          width="32"
                          height="32"
                          className="d-inline"
                          alt="SBI | State Bank of India RD Calculator | Nivesguru"
                          title="SBI | State Bank of India RD Calculator | Nivesguru"
                          loading="lazy"
                        />
                        <small className="d-block text-center">SBI RD</small>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-2" href="ubi-rd-calculator">
                        <Image
                          src={UBI}
                          width="32"
                          height="32"
                          className="d-inline mx-2 rounded-circle"
                          alt="UBI | Union Bank of India RD Calculator | Nivesguru"
                          title="UBI | Union Bank of India RD Calculator | Nivesguru"
                          loading="lazy"
                        />
                        <small className="d-block text-center">UBI RD</small>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="right-dark-strip-bg my-5 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12">
              <Image
                src={Calculator}
                width="300"
                height="300"
                loading="lazy"
                alt="nivesguru investment calculator home page"
                title="nivesguru investment calculator home page"
              />
            </div>
            <div className="col-md-2 col-12"></div>
            <div className="col-md-6 col-12">
              <div className="bg-white rounded p-3">
                <h2 className="text-end">
                  Use investment
                  <br />
                  <span className="display-3 text-primary fw-bold">
                    calculator
                  </span>
                </h2>
                <p className="lead fs-6 text-end">
                  Use our investment calculator to easily calculate your
                  potential returns and make informed investment decisions. Plan
                  your financial future with our investment returns calculator
                  that helps you estimate your gains based on your investment
                  goals and risk profile. Our investment calculator allows you
                  to calculate your potential gains based on different
                  investment scenarios, helping you make informed decisions
                  about where to invest your money. Our free investment
                  calculator is a powerful tool that helps you plan your
                  investments wisely and achieve your financial goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="">
                <h2 className="text-start">
                  Simplify your
                  <br />
                  <span className="display-3 text-primary fw-bold">
                    investment
                  </span>
                </h2>
                <p className="lead fs-6 text-start">
                  planning with our investment calculator, which makes it easy
                  to estimate your returns and create a diversified portfolio
                  that meets your needs. Our investment calculator helps you
                  plan for the future by estimating the potential returns on
                  your investments. With just a few simple inputs, you can
                  calculate your gains and make informed decisions about your
                  financial future. Looking for a way to plan your investments
                  more wisely?
                </p>
              </div>
            </div>
            <div className="col-md-2 col-12"></div>
            <div className="col-md-4 col-12">
              <Image
                src={CalculatorHome}
                width="300"
                height="300"
                loading="lazy"
                alt="Nivesguru free investment calculator for India"
                title="Nivesguru free investment calculator for India"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="why">
        <div className="wave1">
          <div className="container py-3">
            <div className="row">
              <div className="col-12">
                <div className="card border-0">
                  <div className="card-body">
                    <div className="">
                      <h2>Why Nivesguru?</h2>
                      <p className="lead fs-6">
                        {" "}
                        Our investment calculator can help. With it, you can
                        easily estimate your potential returns and make informed
                        decisions about how to invest your money. Want to know
                        how much your investments could be worth in the future?
                        Our investment calculator makes it easy to estimate your
                        returns and plan for the future. Our investment
                        calculator takes the guesswork out of planning your
                        financial future. With it, you can easily estimate your
                        returns and make informed decisions about how to invest
                        your money. Whether you're a seasoned investor or just
                        getting started, our investment calculator can help you
                        plan your investments more wisely. With accurate
                        estimates of potential returns, you can make informed
                        decisions about your financial future. Make informed
                        investment decisions with our easy-to-use investment
                        calculator. Simply input your initial investment,
                        expected return, and time horizon to get an estimate of
                        your potential earnings. Our calculator helps you plan
                        for the future, compare different investment options,
                        and optimise your portfolio. Start maximising your
                        returns today with our investment calculator.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
