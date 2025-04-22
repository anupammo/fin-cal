import Head from "next/head";
import Image from "next/image";
import HeaderImage from "./img/nivesguru-investment-calculator-about-us-1st.svg";
import AboutTwo from "./img/nivesguru-investment-calculator-about-us.svg";
import AboutThree from "./img/nivesguru-investment-calculator-about-us-2nd.svg";
import Hritick from "./img/hritick.webp";
import Sylvia from "./img/nivesguru-team-sylvia-b.webp";
import Mrinal from "./img/nivesguru-team-mrinal-d.jpg";
import Rahul from "./img/rahul.jpeg";
import Shubhankar from "./img/shubhankar-das.webp";
import Priyankar from "./img/nivesguru-team-priyankar-g.webp";
import Anupam from "./img/anupam.webp";

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

export default function AboutUs() {
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
                                        <li className="breadcrumb-item"><a href="./">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="about-us">About us</li>
                                    </ol>
                                </nav>
                                <h1 className="h2">About Us | Investment Calculator - Plan Financial
                                    Future
                                </h1>
                                <p className="lead fs-6"><strong>Indian Government</strong> started <strong>Digital
                                        India</strong> initiative and on the <strong>75th Anniversary of Indian
                                        Independence</strong>, Team Nivesguru celebrating <strong>Azadi Ka Amrit
                                        Mahotsav</strong> through this free investment calculator. Nivesguru is
                                    dedicated for India to updates about investment and secure a good retirement
                                    period for every Indians. We are providing <strong>free investmrnt
                                        calculator</strong> and information about various types of investments which
                                    returns best benifit with less investments. Nivesguru will try to reach every
                                    Indian who want to secure their future but don't have sufficient information how
                                    to insure their life to protect from accident and get benifitted by us. We're
                                    also promoting all type of financial plan / aid are available by the Government
                                    of India. Like <strong>Bima Yojana</strong>, Yojana for Girls, <strong>Pension
                                        Plan</strong>, <strong>Government Bonds</strong> and many other.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="">
                        <div className="float-end">
                            <Image className="img-fluid shadow-none my-5 py-5" width="400" height="400" loading="lazy" 
                            src={HeaderImage} alt="About Nivesguru free Investment Calculator" title="About Nivesguru free Investment Calculator"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </header>
      <section className="mt-5" id="welcome">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="">
                <h2 className="text-start">
                  Welcome to
                  <br />
                  <span className="display-3 text-primary fw-bold">
                    Nivesguru
                  </span>
                </h2>
                <p className="lead fs-6 text-start">
                  A website dedicated to providing expert financial advice and
                  resources for individuals and businesses alike. Our team of
                  experienced financial professionals is committed to helping
                  you achieve your financial goals through a personalized and
                  holistic approach. At Nivesguru, we understand that each
                  person's financial situation is unique. That's why we offer a
                  range of services, including financial planning, investment
                  management, tax planning, and retirement planning, among
                  others. Our team works closely with each client to develop a
                  customized financial plan that takes into account their unique
                  goals, risk tolerance, and financial situation.
                </p>
              </div>
            </div>
            <div className="col-md-2 col-12"></div>
            <div className="col-md-4 col-12 float-end">
              <Image src={AboutTwo} width="400" height="400" alt="Nives Guru About Us svg" />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5" id="mission-vission">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="h2 mb-5 text-center">Mission | Vission of Nivesguru</h2>
              <p className="lead fs-6 mb-5">
                We are committed to transform India with empowred family with
                empowered economy as a mission and a vision of Har Ghar Khushali
                as Mission. We need support to reach every person who have a
                smart phone with internet connection. We're upgrading our web
                app to progressive web app (PWA) so our user can access the tool
                without internet also and will soon launch our mobile app for
                better user experience. Have a plan to reach more than half of
                our population within next few years. Also our Vision for
                Atmanirbhar Bharat Abhiyaan or Self-reliant India. Team
                Nivesguru also have the capability to help entrepreneurs,
                startup those are contributing India to get the new heights.
                We're really happy to help or able to provide extended support
                for website design, web development, Search Engine
                optimisation[SEO], Digital Marketing, SAAS based Application,
                Website Management, Optimisation, Security and also Consultation
                if required. Here are some of our services where our team have
                extended skill and serving over the globe for last 7 years.
                Please let us know so we can reach you and sort out things for
                ASAP.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="card shadow-sm border-0 mb-3">
                <div className="text-center text-primary ico-flip mt-4">                
                    <p className="text-center display-1"><i className="bi bi-calculator"></i></p>
                </div>
                <div className="card-body">
                  <p className="h5 mb-3">
                    Free <br />
                    <span className="text-primary h2">Calculators</span>
                  </p>
                  <p className="lead fs-6">
                    Free calculator for India, illustrating investment and
                    return in a very simple way. Encouraging, Educating and
                    updating all people those are not so much intrested for new
                    investment plans and schemes are very lucrative along with
                    good returns.
                  </p>
                  <a href="#section3" className="stretched-link">
                    Find out all
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="card bg-dark shadow-sm border-0 mb-3">
                <div className="text-center text-white ico-flip mt-4">
                    <p className="text-center display-1"><i className="bi bi-people-fill"></i></p> 
                </div>
                <div className="card-body">
                  <p className="text-white h5 mb-3">
                    Our <br />
                    <span className="text-warning h2">Skilled Team</span>
                  </p>
                  <p className="text-white lead fs-6">
                    Team Nivesguru, having vast experience to handle
                    international clients and projects. Always provided the best
                    result and earned 5 start ratings and reviews from United
                    States, European Union, Asia, Africa and also from Gulf
                    Countries.
                  </p>
                  <a href="#section2" className="stretched-link text-warning">
                    Team members
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="card shadow-sm border-0 mb-3">
                <div className="text-center text-primary ico-flip mt-4">
                    <p className="text-center display-1"><i className="bi bi-headset"></i></p>
                </div>
                <div className="card-body">
                  <p className="h5 mb-3">
                    Best <br />
                    <span className="text-primary h2">Support 24x7</span>
                  </p>
                  <p className="card-title text-center h2">Support</p>
                  <p className="card-text lead fs-6">
                    We've professional and decated support team available 24x7
                    for your quiaries. We're serving PAN India and International
                    clients over the Globe. Our expert panel always looking
                    forward to hear from you about your precious project.
                  </p>
                  <a href="contact-us" className="stretched-link">
                    Connect now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5" id="we-provide">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <Image src={AboutThree} className="my-5" width="400" height="400"
                alt="About us - Nivesguru | Investment Calculator"
                title="About us - Nivesguru | Investment Calculator" loading="lazy" />
            </div>
            <div className="col-md-6 col-12">
              <div className="">
                <h2 className="text-end">
                  What are
                  <br />{" "}
                  <span className="display-3 text-primary fw-bold">
                    we Provide ?
                  </span>
                </h2>
                <p className="lead text-end fs-6">
                  Team Nivesguru have an extended team of skilled professionals
                  and provide services like Web / Graphics Design, Website /
                  SAAS based application development, Search Engine Optimisation
                  (SEO), Digital Marketing / Social Media Marketing (SMM) and
                  are also able to provide offshore outsourcing if required. Our
                  web development services are tailored to meet the needs of
                  businesses looking to establish or enhance their online
                  presence. Our team of experienced developers works with the
                  latest technologies and best practices to create
                  high-performance, responsive, and user-friendly websites that
                  attract and engage visitors. Search Engine Optimization (SEO)
                  is critical to the success of any online business. Our SEO
                  services are designed to help businesses improve their online
                  visibility and search engine rankings, resulting in increased
                  website traffic and revenue. Our digital marketing services
                  are designed to help businesses reach their target audience
                  and achieve their marketing goals through a variety of online
                  channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5" id="calculators">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-3">
              <h2 className="text-center mb-3">Nivesguru Calculators</h2>
              <p className="lead fs-6">
                Our free, optimised and user friendly simulation web tool as a
                investment calculator can bring awareness to investment and its
                benifits. With it, you can easily estimate your potential
                returns andable to take the decisions about how to invest your
                money. It will show your investment amount along with it's
                matured value after the investment period through the numbers,
                charts and graphs. Check here some categories of investment done
                through Bank, Post Office, Insurance, Pension plans and
                Government Bonds, Digital Gold investment and other.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-12">
              <ul className="list-group list-group-flush lead fw-bold fs-6 my-3">
                <li className="list-group-item border-0">
                  <a href="fixed-deposit-fd-calculator">
                    <span className="fs-5">🪙</span> FD Calculator
                  </a>
                </li>
              </ul>
              <ul className="list-group list-group-flush lead fw-bold fs-6 my-3">
                <li className="list-group-item border-0">
                  <a href="sb-calculator">
                    <span className="fs-5">🪙</span> SB Calculator
                  </a>
                </li>
              </ul>
              <ul className="list-group list-group-flush lead fw-bold fs-6 my-3">
                <li className="list-group-item border-0">
                  <a href="rd-calculator">
                    <span className="fs-5">🪙</span> RD Calculator
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-12">
              <ul className="list-group list-group-flush lead fw-bold fs-6 my-3">
                <li className="list-group-item border-0">
                  <a href="sukanya-samriddhi-yojana-ssy-calculator">
                    <span className="fs-5">🪙</span> SSY Calculator
                  </a>
                </li>
              </ul>
              <ul className="list-group list-group-flush lead fw-bold fs-6 my-3">
                <li className="list-group-item border-0">
                  <a href="ppf-calculator">
                    <span className="fs-5">🪙</span> PPF Calculator
                  </a>
                </li>
              </ul>
              <ul className="list-group list-group-flush lead fw-bold fs-6 my-3">
                <li className="list-group-item border-0">
                  <a href="national-pension-system-nps-calculator">
                    <span className="fs-5">🪙</span> NPS Calculator
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-12">
              <ul className="list-group list-group-flush lead fw-bold fs-6 my-3">
                <li className="list-group-item border-0">
                  <a href="apy-calculator">
                    <span className="fs-5">🪙</span> APY Calculator
                  </a>
                </li>
              </ul>
              <ul className="list-group list-group-flush lead fw-bold fs-6 my-3">
                <li className="list-group-item border-0">
                  <a href="pradhan-mantri-jeevan-jyoti-bima-yojana-pmjjby-calculator">
                    <span className="fs-5">🪙</span> PMJJBY Calculator
                  </a>
                </li>
              </ul>
              <ul className="list-group list-group-flush lead fw-bold fs-6 my-3">
                <li className="list-group-item border-0">
                  <a href="pradhan-mantri-suraksha-bima-yojana-pmsby-calculator">
                    <span className="fs-5">🪙</span>
                    PMSBY Calculator
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-12">
              <ul className="list-group list-group-flush lead fw-bold fs-6 my-3">
                <li className="list-group-item border-0">
                  <a href="kvp-calculator">
                    <span className="fs-5">🪙</span> KVP Calculator
                  </a>
                </li>
              </ul>
              <ul className="list-group list-group-flush lead fw-bold fs-6 my-3">
                <li className="list-group-item border-0">
                  <a href="national-savings-certificate-nsc-calculator">
                    <span className="fs-5">🪙</span> NSC Calculator
                  </a>
                </li>
              </ul>
              <ul className="list-group list-group-flush lead fw-bold fs-6 my-3">
                <li className="list-group-item border-0">
                  <a href="sgb-calculator">
                    <span className="fs-5">🪙</span> SGB Calculator
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5" id="team">
        <div className="container my-5">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center mb-3">Team Nivesguru</h2>
              <p className="lead fs-6">
                Our team of experienced developers works with the latest
                technologies and best practices to create high-performance,
                responsive, and user-friendly websites / Web Application or SAAS
                based online tool that's need for managing your business /
                organisation, for growth to outreach or for any custom
                requirements. that attract and engage visitors. Our web
                development services are tailored to meet the needs of
                businesses looking to establish or enhance their online
                presence. Also have dedicated HR Team to provide you the best
                resource for your requirements if you want help, we're glad to
                support for the process of Recruitment, Outsourcing, Offshore
                engagement. Experienced stack of professionals are waiting to
                respond on your needs for Digital Marketing, Search Engine
                Optimisation.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-12">
              <div className="card border-0">
                <Image src={Hritick} width="200" height="200"
                  className="img-fluid rounded-circle d-block mx-auto mt-4"
                  alt="hritick-b-web-developer-nivesguru" />
                <div className="card-body">
                  <p className="text-center">
                    <a href="https://bhritick.github.io/site"
                      target="_blank" className="text-center nav-link fs-4">Hritick B</a>
                  </p>
                  <p className="card-text text-center mb-2">Co-Founder | Developer</p>
                  <ul className="nav nav-fill mt-3">
                    <li className="nav-item float-start">
                      <a className="nav-link text-dark px-2"
                        href="https://www.facebook.com/Nivesguru-118950734466440/" target="_blank">
                        <p className="text-center fs-3 mb-0"><i className="bi bi-facebook"></i></p>
                        <small>Facebook</small>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark px-2"
                        href="https://www.linkedin.com/company/nivesguru/" target="_blank">
                        <p className="text-center fs-3 mb-0"><i className="bi bi-linkedin"></i></p>
                        <small className="mt-1">Linkedin</small>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12">
              <div className="card border-0">
                <Image src={Sylvia} width="205" height="205"
                  className="img-fluid rounded-circle d-block mx-auto mt-4"
                  alt="hritick-b-web-developer-nivesguru" />
                <div className="card-body">
                  <p className="text-center">
                    <a href="https://anupammo.github.io/rahulc"
                      target="_blank" className="text-center nav-link fs-4">Silvia B</a>
                  </p>
                  <p className="card-text text-center mb-2">Digital / Social Media</p>
                  <ul className="nav nav-fill mt-3">
                    <li className="nav-item float-start">
                      <a className="nav-link text-dark px-2"
                        href="https://www.facebook.com/Nivesguru-118950734466440/" target="_blank">                        
                        <p className="text-center fs-3 mb-0"><i className="bi bi-facebook"></i></p>
                        <small className="mt-1">Facebook</small>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark px-2"
                        href="https://www.linkedin.com/company/nivesguru/" target="_blank">                        
                        <p className="text-center fs-3 mb-0"><i className="bi bi-linkedin"></i></p>
                        <small className="mt-1">Linkedin</small>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12">
              <div className="card border-0">
                <Image src={Mrinal} width="200" height="200"
                  className="img-fluid rounded-circle d-block mx-auto mt-4"
                  alt="hritick-b-web-developer-nivesguru" />
                <div className="card-body">
                  <p className="text-center">
                    <a href="https://anupammo.github.io/rahulc"
                      target="_blank" className="text-center nav-link fs-4">Mrinal D</a>
                  </p>
                  <p className="card-text text-center mb-2">Lead Developer | Co-ordinator</p>
                  <ul className="nav nav-fill mt-3">
                    <li className="nav-item float-start">
                      <a className="nav-link text-dark px-2"
                        href="https://www.facebook.com/profile.php?id=100008351852388" target="_blank">                        
                        <p className="text-center fs-3 mb-0"><i className="bi bi-facebook"></i></p>
                        <small className="mt-1">Facebook</small>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark px-2"
                        href="https://www.linkedin.com/in/mrinal-das-794b85192/" target="_blank">                        
                        <p className="text-center fs-3 mb-0"><i className="bi bi-linkedin"></i></p>
                        <small className="mt-1">Linkedin</small>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12">
              <div className="card border-0">
                <Image src={Rahul} width="205" height="205"
                  className="img-fluid rounded-circle d-block mx-auto mt-4"
                  alt="hritick-b-web-developer-nivesguru" />
                <div className="card-body">
                  <p className="text-center">
                    <a href="https://anupammo.github.io/rahulc"
                      target="_blank" className="text-center nav-link fs-4">Rahul C</a>
                  </p>
                  <p className="card-text text-center mb-2">Co-Founder | UI/UX | Media</p>
                  <ul className="nav nav-fill mt-3">
                    <li className="nav-item float-start">
                      <a className="nav-link text-dark px-2"
                        href="https://www.facebook.com/Nivesguru-118950734466440/" target="_blank">                        
                        <p className="text-center fs-3 mb-0"><i className="bi bi-facebook"></i></p>
                        <small className="mt-1">Facebook</small>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark px-2"
                        href="https://www.linkedin.com/company/nivesguru/" target="_blank">                        
                        <p className="text-center fs-3 mb-0"><i className="bi bi-linkedin"></i></p>
                        <small className="mt-1">Linkedin</small>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="card border-0">
                <Image src={Shubhankar} width="200" height="200"
                  className="img-fluid rounded-circle d-block mx-auto mt-4"
                  alt="hritick-b-web-developer-nivesguru" />
                <div className="card-body">
                  <p className="text-center">
                    <a href="#" target="_blank" className="text-center nav-link fs-4">Shubhankar D</a>
                  </p>
                  <p className="card-text text-center mb-2">Consultant | Brand Advocate | PM</p>
                  <ul className="nav nav-fill mt-3">
                    <li className="nav-item float-start">
                      <a className="nav-link text-dark px-2"
                        href="https://www.facebook.com/subhankar.das.79656" target="_blank">                        
                        <p className="text-center fs-3 mb-0"><i className="bi bi-facebook"></i></p>
                        <small className="mt-1">Facebook</small>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark px-2"
                        href="https://nbpstechsolutions.in/" target="_blank" nofollow="true">                        
                        <p className="text-center fs-3 mb-0"><i className="bi bi-linkedin"></i></p>
                        <small className="mt-1">website</small>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="card border-0">
                <Image src={Priyankar} width="200" height="200"
                  className="img-fluid rounded-circle d-block mx-auto mt-4"
                  alt="hritick-b-web-developer-nivesguru" />
                <div className="card-body">
                  <p className="text-center">
                    <a href="https://anupammo.github.io/rahulc"
                      target="_blank" className="text-center nav-link fs-4">Priyankar G</a>
                  </p>
                  <p className="card-text text-center mb-2">Accounts | HRM | Finance | Tax</p>
                  <ul className="nav nav-fill mt-3">
                    <li className="nav-item float-start">
                      <a className="nav-link text-dark px-2"
                        href="https://www.facebook.com/Nivesguru-118950734466440/" target="_blank">                        
                        <p className="text-center fs-3 mb-0"><i className="bi bi-facebook"></i></p>
                        <small className="mt-1">Facebook</small>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark px-2"
                        href="https://www.linkedin.com/company/nivesguru/" target="_blank">                        
                        <p className="text-center fs-3 mb-0"><i className="bi bi-linkedin"></i></p>
                        <small className="mt-1">Linkedin</small>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="card border-0">
                <Image src={Anupam} width="200" height="200"
                  className="img-fluid rounded-circle d-block mx-auto mt-4"
                  alt="anupam-mondal-developer-founder-nivesguru" />
                <div className="card-body">
                  <p className="text-center">
                    <a href="https://anupammondal.in"
                      target="_blank" className="text-center nav-link fs-4">Anupam M</a>
                  </p>
                  <p className="card-text text-center text-dark mb-2">Founder | PM | Developer</p>
                  <ul className="nav nav-fill mt-3">
                    <li className="nav-item float-start">
                      <a className="nav-link text-dark px-2"
                        href="https://www.facebook.com/anupammondal.in" target="_blank">                        
                        <p className="text-center fs-3 mb-0"><i className="bi bi-facebook"></i></p>
                        <small className="mt-1">Facebook</small>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark px-2"
                        href="https://anupammondal.in/" target="_blank">                        
                        <p className="text-center fs-3 mb-0"><i className="bi bi-globe2"></i></p>
                        <small className="mt-1">Website</small>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark px-2"
                        href="https://www.linkedin.com/company/anupammondal" target="_blank">                        
                        <p className="text-center fs-3 mb-0"><i className="bi bi-linkedin"></i></p>
                        <small className="mt-1">Linkedin</small>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
