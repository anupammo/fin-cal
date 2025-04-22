import Head from "next/head";
import Image from "next/image";
import HeaderImage from "./img/contact_us_investment_calculator_nivesguru.svg";
import ConatctImgOne from "./img/nivesguru-investment-calculator-home-page-svg.webp";
import ConatctImgTwo from "./img/nivesguru-investment-calculator-about-us.svg";

export const metadata = {
    title: "Contact Us",
    description: "Reach out to us with your questions, feedback, or support requests.",
    alternates: {
      canonical: "https://yourwebsite.com/contact",
    },
    openGraph: {
      title: "Contact Us - Your Website Name",
      description: "Reach out to us with your questions, feedback, or support requests.",
      url: "https://yourwebsite.com/contact",
      siteName: "Your Website Name",
      images: [
        {
          url: "https://yourwebsite.com/images/contact-og.jpg",
          width: 1200,
          height: 630,
          alt: "Contact Us",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };  

export default function ContactUs() {
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
                    <div className="col-12">
                        <div className="card border-0 my-4">
                            <div className="card-body">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="./">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="contact-us">Contact us</li>
                                    </ol>
                                </nav>
                                <h1 className="lead fw-bold fs-3 mb-0">Contact Us | Investment Calculator - Plan Financial Future</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="card border-0">
                            <div className="card-body">
                                <div className="">
                                    <p className="lead fs-6 my-5 py-4">At Nivesguru, we value our customers and are committed to
                                        providing exceptional service. If you have any questions, concerns, or feedback,
                                        we would love to hear from you. Our team of experts is available to assist
                                        you and provide you with the information you need. Whether you are looking to
                                        learn more about our services, need assistance with your account, or have a
                                        general inquiry, you can contact us through our website or
                                        by email. We will do our best to respond promptly and address your needs. Thank
                                        you for choosing Nivesguru. We look forward to hearing from you soon.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="card border-0">
                            <div className="card-body my-3">
                                <Image src={HeaderImage} className="img-fluid d-block mx-auto my-3" alt="Contact Us Investment Calculator Nivesguru" title="Contact Us Investment Calculator Nivesguru"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section className="my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <Image className="rounded mx-auto d-block" src={ConatctImgOne}
                            width="300" height="300" loading="lazy" alt="Contact us Nivesguru calculator" />
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="">
                            <h2 className="text-end">Simplify your<br /> <span
                                    className="display-3 text-brand fw-bold">investment</span>
                            </h2>
                            <p className="lead fs-6 text-end">planning with our investment calculator, which makes it easy to
                                estimate your returns and create a diversified portfolio that meets your needs. Our
                                investment calculator helps you plan for the future by estimating the potential
                                returns on your investments. With just a few simple inputs, you can calculate your gains and
                                make informed decisions about your financial future. Looking for a way to plan your
                                investments more wisely?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="">
                            <h2 className="text-start">Welcome to<br /> <span
                                    className="display-3 text-brand fw-bold">Nivesguru</span>
                            </h2>
                            <p className="lead fs-6 text-start">A website dedicated to providing expert financial advice and
                                resources for individuals and businesses alike. Our team of experienced financial
                                professionals is committed to helping you achieve your financial goals through a
                                personalized and holistic approach. At Nivesguru, we understand that each person's financial
                                situation is
                                unique. That's why we offer a range of services, including financial planning, investment
                                management, tax planning, and retirement
                                planning, among others. Our team works closely with each client to develop a customized
                                financial plan that takes into account their unique goals, risk tolerance, and financial
                                situation.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-2 col-12">
                    </div>
                    <div className="col-md-4 col-12 float-end">
                        <Image src={ConatctImgTwo} width="400" height="400" alt="Nivesguru About Us svg" />
                    </div>
                </div>
            </div>
        </section>
        <section className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="h2 mb-5 text-center">Mission | Vission of Nivesguru</h2>
                        <p className="lead fs-6 mb-5">We are committed to transform India with empowred family with empowered
                            economy as a mission and a vision of Har Ghar Khushali as Mission. We need support to reach
                            every person
                            who have a smart phone with internet connection. We're upgrading our web app to progressive web
                            app (PWA) so our user can access the tool without internet also and will soon launch our mobile
                            app for better user experience. Have a plan to reach more than half of our population within
                            next few years. Also our Vision for Atmanirbhar Bharat Abhiyaan or Self-reliant India. Team
                            Nivesguru also have the capability to help entrepreneurs, startup those are contributing India
                            to get the new heights. We're really happy to help or able to provide extended support for
                            website design, web development, Search Engine optimisation[SEO], Digital Marketing, SAAS based
                            Application, Website Management, Optimisation, Security and also Consultation if required. Here
                            are some of our services where our team have extended skill and serving over the globe for last
                            7 years. Please let us know so we can reach you and sort out things for ASAP. </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="card shadow-sm border-0 mb-3">
                            <div className="text-center text-brand ico-flip mt-4">
                                <p className="text-center display-1">
                                    <i className="bi bi-calculator"></i>
                                </p>
                            </div>
                            <div className="card-body">
                                <p className="h5 mb-3">Free <br /><span className="text-brand h2">Calculators</span></p>
                                <p className="lead fs-6">Free calculator for India, illustrating investment and return
                                    in a very simple way. Encouraging, Educating and updating all people those are not so
                                    much intrested for new investment plans and schemes are very lucrative along with good
                                    returns.</p>
                                <a href="#section3" className="stretched-link">Find out all</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="card bg-color shadow-sm border-0 mb-3">
                            <div className="text-center text-white ico-flip mt-4">
                                <p className="text-center display-1">
                                    <i className="bi bi-people-fill"></i>
                                </p>
                            </div>
                            <div className="card-body">
                                <p className="text-white h5 mb-3">Our <br /><span className="text-warning h2">Skilled Team</span></p>
                                <p className="text-white lead fs-6">Team Nivesguru, having vast experience to handle
                                    international clients
                                    and projects. Always provided the best result and earned 5 start ratings and reviews
                                    from United States, European Union, Asia, Africa and also from Gulf Countries.</p>
                                <a href="about-us#section2" className="stretched-link text-warning">Team members</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="card shadow-sm border-0 mb-3">
                            <div className="text-center text-brand ico-flip mt-4">
                                <p className="text-center display-1">
                                    <i className="bi bi-headset"></i>
                                </p>
                            </div>
                            <div className="card-body">
                                <p className="h5 mb-3">Best <br /><span className="text-brand h2">Support 24x7</span></p>
                                <p className="card-text lead fs-6">We've professional and decated support team available 24x7
                                    for your quiaries. We're serving PAN India and International clients over the Globe. Our
                                    expert panel always looking forward to hear from you about your precious project.</p>
                                <a href="contact-us" className="stretched-link">Connect now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-nivesguru mt-5">
            <div className="wave1">
                <div className="container py-5">
                    <div className="row ">
                        <div className="col-md-8 col-12">
                            <form className="card border border-0 shadow rounded-0 mb-3 px-5 py-4 ">
                                <div className="row">
                                    <div className="col-12 ">
                                        <h2 className="h3 my-4">Contact Us</h2>
                                    </div>
                                    <p className="lead fs-6">At Nivesguru, we are committed to providing our clients with
                                        exceptional digital marketing services. If you have any questions or inquiries about
                                        our
                                        services, feel free to contact us using the form below. Our team of experts
                                        is ready to help you with your online marketing needs, whether you're looking to
                                        improve
                                        your website's ranking on search engines, increase your social media presence, or
                                        create
                                        engaging content that drives conversions.
                                        You can also reach us via email at <a
                                            href="mailto:nivesguru@gmail.com">nivesguru@gmail.com</a> or by phone at <a
                                            href="tel:+919474460058">(947) 446-0058</a>, <a href="tel:+919382399893">(938)
                                            239-9893</a>. We strive to respond to all inquiries within 24 hours, so you can
                                        expect a prompt and personalized response from us. Thank you for considering
                                        Nivesguru
                                        for your digital marketing needs. We look forward
                                        to hearing from you!</p>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4 col-12">
                            <form className="card border border-0 shadow rounded-0 mb-3 px-5 py-4 bg-color">
                                <div className="row">
                                    <div className="col-12 ">
                                        <h2 className="fs-1 display-4 text-white">Info</h2>
                                        <hr />
                                    </div>
                                    <div className="col-12 ">
                                        <h2 className="fs-5 display-4 my-3 text-white">📬 nivesguru@gmail.com</h2>
                                    </div>
                                    <div className="col-12 ">
                                        <h2 className="fs-4 display-4 my-3 text-white">📞 9382399893</h2>
                                    </div>
                                    <div className="col-12 ">
                                        <h2 className="fs-4 display-4 my-3 text-white">📍 Kolkata </h2>
                                    </div>
                                    <div className="col-12 ">
                                        <h2 className="fs-4 display-4 my-3 text-white">🕒 24*7</h2>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="mt-5" id="section3">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-3">
                        <h2 className="text-center mb-3">Nivesguru Calculators</h2>
                        <p className="lead fs-6">Our free, optimised and user friendly simulation web tool as a investment
                            calculator can bring awareness to investment and its benifits. With it, you can easily estimate
                            your potential returns andable to take the decisions about how to invest your money. It will
                            show your investment amount along with it's matured value after the investment period through
                            the numbers, charts and graphs. Check here some categories of investment done through Bank, Post
                            Office, Insurance, Pension plans and Government Bonds, Digital Gold investment and other.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-12">
                        <ul className="list-group list-group-flush lead fw-bold fs-6 my-3">
                            <li className="list-group-item border-0">
                                <a href="fixed-deposit-fd-calculator"><span className="fs-5">🪙</span> FD
                                    Calculator</a>
                            </li>
                        </ul>
                        <ul className="list-group list-group-flush lead fw-bold fs-6 my-3">
                            <li className="list-group-item border-0">
                                <a href="sb-calculator"><span className="fs-5">🪙</span> SB
                                    Calculator</a>
                            </li>
                        </ul>
                        <ul className="list-group list-group-flush lead fw-bold fs-6 my-3">
                            <li className="list-group-item border-0">
                                <a href="rd-calculator"><span className="fs-5">🪙</span> RD
                                    Calculator</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12">
                        <ul className="list-group list-group-flush lead fw-bold fs-6 my-3">
                            <li className="list-group-item border-0">
                                <a href="sukanya-samriddhi-yojana-ssy-calculator"><span className="fs-5">🪙</span> SSY
                                    Calculator</a>
                            </li>
                        </ul>
                        <ul className="list-group list-group-flush lead fw-bold fs-6 my-3">
                            <li className="list-group-item border-0">
                                <a href="ppf-calculator"><span className="fs-5">🪙</span> PPF
                                    Calculator</a>
                            </li>
                        </ul>
                        <ul className="list-group list-group-flush lead fw-bold fs-6 my-3">
                            <li className="list-group-item border-0">
                                <a href="national-pension-system-nps-calculator"><span className="fs-5">🪙</span> NPS
                                    Calculator</a>
                            </li>
                        </ul>

                    </div>
                    <div className="col-lg-3 col-md-4 col-12">
                        <ul className="list-group list-group-flush lead fw-bold fs-6 my-3">
                            <li className="list-group-item border-0">
                                <a href="apy-calculator"><span className="fs-5">🪙</span> APY
                                    Calculator</a>
                            </li>
                        </ul>
                        <ul className="list-group list-group-flush lead fw-bold fs-6 my-3">
                            <li className="list-group-item border-0">
                                <a href="pradhan-mantri-jeevan-jyoti-bima-yojana-pmjjby-calculator"><span
                                        className="fs-5">🪙</span> PMJJBY
                                    Calculator</a>
                            </li>
                        </ul>
                        <ul className="list-group list-group-flush lead fw-bold fs-6 my-3">
                            <li className="list-group-item border-0">
                                <a href="pradhan-mantri-suraksha-bima-yojana-pmsby-calculator"><span className="fs-5">🪙</span>
                                    PMSBY
                                    Calculator</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12">
                        <ul className="list-group list-group-flush lead fw-bold fs-6 my-3">
                            <li className="list-group-item border-0">
                                <a href="kvp-calculator"><span className="fs-5">🪙</span> KVP
                                    Calculator</a>
                            </li>
                        </ul>
                        <ul className="list-group list-group-flush lead fw-bold fs-6 my-3">
                            <li className="list-group-item border-0">
                                <a href="national-savings-certificate-nsc-calculator"><span className="fs-5">🪙</span> NSC
                                    Calculator</a>
                            </li>
                        </ul>
                        <ul className="list-group list-group-flush lead fw-bold fs-6 my-3">
                            <li className="list-group-item border-0">
                                <a href="sgb-calculator"><span className="fs-5">🪙</span> SGB
                                    Calculator</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Find us on <br /> <span className="display-3 text-brand fw-bold">Google Map</span></h2>
                        <p className="lead fs-6">Check out the ratings and reviews on Google who have providing Nivesguru
                            as the free financial calculator tool for Indian investors to plan the future and secure their
                            assets from inflation.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 px-0">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.68943268116!2d88.51291011495721!3d22.440712185250774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a020d742e64f2f9%3A0x1bdd170f2df2e34e!2sAnupam%20Mondal!5e0!3m2!1sen!2sin!4v1681072166114!5m2!1sen!2sin"
                            height="450" style={{width: "100%", border: "0"}} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" title="Find us on Google Map"></iframe>
                    </div>
                </div>
            </div>
        </section>
        <section className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <h3 className="h3 my-4">Reach us 📍 </h3>
                            <p className="h5 mb-3">Want to visit Nivesguru :</p>
                            <address className="lead fs-6">
                                🗺️ Protapnagar, Metiari, <br />
                                West Bengal, 743330<br />
                                🇮🇳 India
                                <hr className="w-25" />
                                🌎 Know more about
                                <a href="https://nivesguru.in/about-us"><strong>Nivesguru</strong></a>.<br />
                                📬 Also can email
                                <a href="mailto:nivesguru@gmail.com"><strong>Team Nivesguru</strong></a>.<br />
                                📞 Call for support <a href="tel:+919474460058">(947) 446-0058</a><br />
                                📞 Call for support <a href="tel:+919382399893">(938) 239-9893</a><br />
                            </address>
                    </div>
                    <div className="col-md-6 col-12">
                        <h3 className="text-end h3 my-4">🕒 Opening hours</h3>
                            <table className="table table-borderless text-end">
                                <tbody className="lead fw-bold fs-6">
                                    <tr className="text-danger">
                                        <td>Sunday</td>
                                        <td>Closed</td>
                                    </tr>
                                    <tr>
                                        <td>Monday</td>
                                        <td>12pm - 8pm</td>
                                    </tr>
                                    <tr>
                                        <td>Tuesday</td>
                                        <td>12pm - 8pm</td>
                                    </tr>
                                    <tr>
                                        <td>Wednesday</td>
                                        <td>12pm - 8pm</td>
                                    </tr>
                                    <tr>
                                        <td>Thursday</td>
                                        <td>12pm - 8pm</td>
                                    </tr>
                                    <tr>
                                        <td>Friday</td>
                                        <td>12pm - 8pm</td>
                                    </tr>
                                    <tr className="text-danger">
                                        <td>Saturday</td>
                                        <td>Closed</td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}