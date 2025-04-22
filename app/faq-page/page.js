import Head from "next/head";
import Image from "next/image";
import HeaderImage from "./img/faq_frequently_ask_question_nivesguru_calculator.svg";

export const metadata = {
  title: "About Page",
  description: "This is the about us page.",
  alternates: {
    canonical: "https://yourwebsite.com/about",
  },
  openGraph: {
    title: "About Us",
    description: "Learn more about us on this page.",
    url: "https://yourwebsite.com/about",
    siteName: "Your Website Name",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 600,
        alt: "About Us Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function FaqPage() {
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
              <div className="card shadow border-0 mt-5">
                <div className="card-body">
                  <div className="p-5">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="./">Home</a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="faq-page"
                        >
                          FAQ
                        </li>
                      </ol>
                    </nav>
                    <h1 className="h3">
                      Frequently Asked Questions / FAQ page Nivesguru Calculator
                    </h1>
                    <hr className="w-50" />
                    <p className="lead fs-6">
                      Welcome to the Nivesguru FAQ page! Here, you'll find
                      answers to some of the most frequently asked questions
                      about our website, including what we do, what type of
                      content we offer, how to contact us, and more. Our goal is
                      to provide you with the information you need to make
                      informed investment decisions in the Indian financial
                      market. Our content is written by experienced financial
                      analysts and market experts, so you can trust that the
                      information on our site is accurate and reliable. Whether
                      you're a seasoned investor or just getting started, our
                      FAQ page can help you find the answers you're looking for.
                      So, take a look around, and if you have any additional
                      questions, don't hesitate to contact us using the form on
                      our website.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="card border-0 mt-5">
                <div className="card-body my-5">
                  <Image
                    src={HeaderImage}
                    className="img-fluid d-block mx-auto my-5"
                    alt="FAQ Frequently Ask Question Nivesguru Calculator"
                    title="FAQ Frequently Ask Question Nivesguru Calculator"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="h5 my-3">
                How many transactions are allowed in SB account?
              </p>
              <p className="lead fs-6">
                The typical range of 3 to 5 transactions per month is the
                maximum allowed without incurring any fees (financial and
                non-financial). Every time the cash deposit limit in your
                savings account surpasses INR 50,000, you must supply your PAN
                card information.
              </p>
              <p className="h5 my-3">What are the rules for RD?</p>
              <p className="lead fs-6">
                RD allows you to earn fixed interests on the amount invested at
                frequent intervals until the investment matures or a
                predetermined term ends. The total amount (i.e., the capital
                invested and the interest accumulated) is disbursed to the
                investor after the maturity period completes.
              </p>
              <p className="h5 my-3">What are the new rules of SSY?</p>
              <p className="lead fs-6">
                The SSY account shall be mandatorily operated by the girl child
                after she attains the age of 18 years. The minimum deposit
                amount for an SSY account is Rs.250 (this amount was previously
                Rs.1,000), thereafter in multiples of Rs.50, and the maximum is
                Rs.1,50,000 in every financial year, up to 15 years.
              </p>
              <p className="h5 my-3">
                What are the rules regarding PPF account?
              </p>
              <p className="lead fs-6">
                As a rule, one can fully withdraw the PPF account balance only
                upon maturity, i.e. after the completion of 15 years. Upon
                completion of 15 years, the entire amount standing to the credit
                of an account holder in the PPF account along with the accrued
                interest can be withdrawn freely and the account can be closed.
              </p>
              <p className="h5 my-3">Can I exit from NPS before 60 years?</p>
              <p className="lead fs-6">
                You can voluntarily exit from NPS before attaining the age of 60
                years or superannuation. Annuitization - Minimum of 80% of
                accumulated pension wealth will be utilized for monthly annuity
                or pension.
              </p>
              <p className="h5 my-3">Who is not eligible for APY?</p>
              <p className="lead fs-6">
                The Finance Ministry amended the Atal Pension Yojana (APY)
                scheme to provide that income-tax payers cannot join the scheme.
                However, the 5th October 2022 deadline for joining the scheme
                was provided. People with a total income of more than Rs. 2.5
                lakhs are required to file and pay taxes.
              </p>
              <p className="h5 my-3">
                How much interest is exempted for TDS of FD?
              </p>
              <p className="lead fs-6">
                The cons of investing in an FD are discussed below. The returns
                in an FD are guaranteed but the FD rates are low as compared to
                other market-linked investments. If you withdraw the FD before
                its maturity date, you will have to pay a penalty charge.
              </p>
              <p className="h5 my-3">What is the disadvantage of FD?</p>
              <p className="lead fs-6">
                The cons of investing in an FD are discussed below. The returns
                in an FD are guaranteed but the FD rates are low as compared to
                other market-linked investments. If you withdraw the FD before
                its maturity date, you will have to pay a penalty charge.
              </p>
              <p className="h5 my-3">
                What happens if we break FD before time?
              </p>
              <p className="lead fs-6">
                For example, the interest rate for a 4-year FD maybe 7.60%,
                whereas a 1-year FD would offer you 7.15% If you wish to
                prematurely withdraw your FD, you will be charged interest as
                per the rate on the day of opening your account for the actual
                period your account was open.
              </p>
              <p className="h5 my-3">What are the rules for FD?</p>
              <p className="lead fs-6">
                If the interest on your FD is less than the interest being
                received on the savings account, then you will keep getting the
                interest with FD. If the interest earned on FD is more than the
                interest earned on the savings account, then you will get the
                interest on the savings account after maturity.
              </p>
              <p className="h5 my-3">What are the rules for NSC post office?</p>
              <p className="lead fs-6">
                An individual must not be a non-resident Indian citizen. No age
                limit for an individual to invest in NSC. An investor can
                purchase NSC from an Indian Post Office for a maturity period of
                5 years. The minimum investments must be Rs 100 and no maximum
                limit on the investment amount.
              </p>
              <p className="h5 my-3">Can I withdraw NSC before maturity?</p>
              <p className="lead fs-6">
                No, NSC can no be closed before 5 years of time mark. Unless
                there is some exceptional cases such as a valid law court order
                or death of the account holder. If the NSC prematurely withdrawn
                within a year then no interest will be payable other than the
                investment amount.
              </p>
              <p className="h5 my-3">
                How much interest on NSC after maturity?
              </p>
              <p className="lead fs-6">
                The term is already fixed at five years. This is because the NSC
                matures in 5 years. The interest is fixed at 7%. This is the
                current interest rate announced by the Ministry of Finance as of
                January 1st, 2023.
              </p>
              <p className="h5 my-3"> Can I exit from NPS before 60 years?</p>
              <p className="lead fs-6">
                You can voluntarily exit from NPS before attaining the age of 60
                years or superannuation. Annuitization - Minimum of 80% of
                accumulated pension wealth will be utilized for monthly annuity
                or pension.
              </p>
              <p className="h5 my-3">What is the locking period for NPS?</p>
              <p className="lead fs-6">
                What is the lock-in period for NPS? The investments you make in
                NPS are locked in until the age of 60. And when you reach the
                age of 60, you can withdraw a maximum of 60% of your corpus. The
                remaining 40% must be used to purchase an annuity.
              </p>
              <p className="h5 my-3"> What happens to NPS if I stop working?</p>
              <p className="lead fs-6">
                If contribution is discontinued and the subscriber wishes to
                exit from NPS before attaining the age of 60, he/she can
                withdraw upto 20% of the sum accumulated till that point of
                time. The subscriber has to buy annuity with the rest of the
                money from PFRDA empanelled Annuity Service Providers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
