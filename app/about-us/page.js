import Head from "next/head";

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
            <section class="mt-5" id="welcome">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-12">
                            <div class="">
                                <h2 class="text-start">Welcome to<br /> <span
                                        class="display-3 text-primary fw-bold">Nivesguru</span>
                                </h2>
                                <p class="lead fs-6 text-start">A website dedicated to providing expert financial advice and
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
                        <div class="col-md-2 col-12">
                        </div>
                        <div class="col-md-4 col-12 float-end">
                            <img src="nivesguru-investment-calculator-about-us.svg" width="400" height="400"
                                alt="Nives Guru About Us svg" />
                        </div>
                    </div>
                </div>
            </section>
            <section class="mt-5" id="mission-vission">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="h2 mb-5 text-center">Mission | Vission of Nivesguru</h2>
                            <p class="lead fs-6 mb-5">We are committed to transform India with empowred family with empowered
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
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="card shadow-sm border-0 mb-3">
                                <div class="text-center text-primary ico-flip mt-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor"
                                        class="bi bi-calculator" viewBox="0 0 16 16">
                                        <path
                                            d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                                        <path
                                            d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z" />
                                    </svg>
                                </div>
                                <div class="card-body">
                                    <p class="h5 mb-3">Free <br /><span class="text-primary h2">Calculators</span></p>
                                    <p class="lead fs-6">Free calculator for India, illustrating investment and return
                                        in a very simple way. Encouraging, Educating and updating all people those are not so
                                        much intrested for new investment plans and schemes are very lucrative along with good
                                        returns.</p>
                                    <a href="#section3" class="stretched-link">Find out all</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="card bg-dark shadow-sm border-0 mb-3">
                                <div class="text-center text-white ico-flip mt-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor"
                                        class="bi bi-people-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                    </svg>
                                </div>
                                <div class="card-body">
                                    <p class="text-white h5 mb-3">Our <br /><span class="text-warning h2">Skilled Team</span>
                                    </p>
                                    <p class="text-white lead fs-6">Team Nivesguru, having vast experience to handle
                                        international clients
                                        and projects. Always provided the best result and earned 5 start ratings and reviews
                                        from United States, European Union, Asia, Africa and also from Gulf Countries.</p>
                                    <a href="#section2" class="stretched-link text-warning">Team members</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="card shadow-sm border-0 mb-3">
                                <div class="text-center text-primary ico-flip mt-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor"
                                        class="bi bi-headset" viewBox="0 0 16 16">
                                        <path
                                            d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
                                    </svg>
                                </div>
                                <div class="card-body">
                                    <p class="h5 mb-3">Best <br /><span class="text-primary h2">Support 24x7</span></p>
                                    <p class="card-title text-center h2">Support</p>
                                    <p class="card-text lead fs-6">We've professional and decated support team available 24x7
                                        for your quiaries. We're serving PAN India and International clients over the Globe. Our
                                        expert panel always looking forward to hear from you about your precious project.</p>
                                    <a href="contact-us" class="stretched-link">Connect now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="mt-5" id="we-provide">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-12">
                            <img src="nivesguru-investment-calculator-about-us-2nd.svg" class="my-5" width="400" height="400"
                                loading="lazy" alt="About us - Nivesguru | Investment Calculator"
                                title="About us - Nivesguru | Investment Calculator" />
                        </div>
                        <div class="col-md-6 col-12">
                            <div class="">
                                <h2 class="text-end">What are<br /> <span class="display-3 text-primary fw-bold">we Provide
                                        ?</span>
                                </h2>
                                <p class="lead text-end fs-6">Team Nivesguru have an extended team of skilled professionals and
                                    provide services like Web / Graphics Design, Website / SAAS based application development,
                                    Search Engine Optimisation (SEO), Digital Marketing / Social Media Marketing (SMM) and are
                                    also able to provide offshore outsourcing if required. Our web development services are
                                    tailored to meet the needs of businesses looking to establish or enhance their online
                                    presence. Our team of experienced developers works with the latest technologies and best
                                    practices to create high-performance, responsive, and user-friendly websites that attract
                                    and engage visitors. Search Engine Optimization (SEO) is critical to the success of any
                                    online business. Our SEO services are designed to help businesses improve their online
                                    visibility and search engine rankings, resulting in increased website traffic and revenue.
                                    Our digital marketing services are designed to help businesses reach their target audience
                                    and achieve their marketing goals through a variety of online channels.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="mt-5" id="calculators">
                <div class="container">
                    <div class="row">
                        <div class="col-12 mb-3">
                            <h2 class="text-center mb-3">Nivesguru Calculators</h2>
                            <p class="lead fs-6">Our free, optimised and user friendly simulation web tool as a investment
                                calculator can bring awareness to investment and its benifits. With it, you can easily estimate
                                your potential returns andable to take the decisions about how to invest your money. It will
                                show your investment amount along with it's matured value after the investment period through
                                the numbers, charts and graphs. Check here some categories of investment done through Bank, Post
                                Office, Insurance, Pension plans and Government Bonds, Digital Gold investment and other.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-4 col-12">
                            <ul class="list-group list-group-flush lead fw-bold fs-6 my-3">
                                <li class="list-group-item border-0">
                                    <a href="fixed-deposit-fd-calculator"><span class="fs-5">🪙</span> FD
                                        Calculator</a>
                                </li>
                            </ul>
                            <ul class="list-group list-group-flush lead fw-bold fs-6 my-3">
                                <li class="list-group-item border-0">
                                    <a href="sb-calculator"><span class="fs-5">🪙</span> SB
                                        Calculator</a>
                                </li>
                            </ul>
                            <ul class="list-group list-group-flush lead fw-bold fs-6 my-3">
                                <li class="list-group-item border-0">
                                    <a href="rd-calculator"><span class="fs-5">🪙</span> RD
                                        Calculator</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-4 col-12">
                            <ul class="list-group list-group-flush lead fw-bold fs-6 my-3">
                                <li class="list-group-item border-0">
                                    <a href="sukanya-samriddhi-yojana-ssy-calculator"><span class="fs-5">🪙</span> SSY
                                        Calculator</a>
                                </li>
                            </ul>
                            <ul class="list-group list-group-flush lead fw-bold fs-6 my-3">
                                <li class="list-group-item border-0">
                                    <a href="ppf-calculator"><span class="fs-5">🪙</span> PPF
                                        Calculator</a>
                                </li>
                            </ul>
                            <ul class="list-group list-group-flush lead fw-bold fs-6 my-3">
                                <li class="list-group-item border-0">
                                    <a href="national-pension-system-nps-calculator"><span class="fs-5">🪙</span> NPS
                                        Calculator</a>
                                </li>
                            </ul>

                        </div>
                        <div class="col-lg-3 col-md-4 col-12">
                            <ul class="list-group list-group-flush lead fw-bold fs-6 my-3">
                                <li class="list-group-item border-0">
                                    <a href="apy-calculator"><span class="fs-5">🪙</span> APY Calculator</a>
                                </li>
                            </ul>
                            <ul class="list-group list-group-flush lead fw-bold fs-6 my-3">
                                <li class="list-group-item border-0">
                                    <a href="pradhan-mantri-jeevan-jyoti-bima-yojana-pmjjby-calculator"><span
                                            class="fs-5">🪙</span> PMJJBY
                                        Calculator</a>
                                </li>
                            </ul>
                            <ul class="list-group list-group-flush lead fw-bold fs-6 my-3">
                                <li class="list-group-item border-0">
                                    <a href="pradhan-mantri-suraksha-bima-yojana-pmsby-calculator"><span class="fs-5">🪙</span>
                                        PMSBY
                                        Calculator</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-4 col-12">
                            <ul class="list-group list-group-flush lead fw-bold fs-6 my-3">
                                <li class="list-group-item border-0">
                                    <a href="kvp-calculator"><span class="fs-5">🪙</span> KVP
                                        Calculator</a>
                                </li>
                            </ul>
                            <ul class="list-group list-group-flush lead fw-bold fs-6 my-3">
                                <li class="list-group-item border-0">
                                    <a href="national-savings-certificate-nsc-calculator"><span class="fs-5">🪙</span> NSC
                                        Calculator</a>
                                </li>
                            </ul>
                            <ul class="list-group list-group-flush lead fw-bold fs-6 my-3">
                                <li class="list-group-item border-0">
                                    <a href="sgb-calculator"><span class="fs-5">🪙</span> SGB
                                        Calculator</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="mt-5" id="team">
                <div class="container my-5">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="text-center mb-3">Team Nivesguru</h2>
                            <p class="lead fs-6">Our team of experienced developers works with the latest technologies and best
                                practices to create high-performance, responsive, and user-friendly websites / Web Application
                                or SAAS based online tool that's need for managing your business / organisation, for growth to
                                outreach or for any custom requirements. that attract and
                                engage visitors. Our web development services are tailored to meet the needs of businesses
                                looking to establish or enhance their online presence. Also have dedicated HR Team to provide
                                you the best resource for your requirements if you want help, we're glad to support for the
                                process of Recruitment, Outsourcing, Offshore engagement. Experienced stack of professionals are
                                waiting to respond on your needs for Digital Marketing, Search Engine Optimisation.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-4 col-12">
                            <div class="card border-0">
                                <img src="hritick.webp" width="200" height="200"
                                    class="img-fluid rounded-circle d-block mx-auto mt-4"
                                    alt="hritick-b-web-developer-nivesguru" />
                                <div class="card-body">
                                    <p class="text-center">
                                        <a href="https://bhritick.github.io/site" target="_blank"
                                            class="text-center text-dark h4">Hritick B</a>
                                    </p>
                                    <p class="card-text text-center mb-2">Co-Founder | Developer</p>
                                    <ul class="nav nav-fill mt-3">
                                        <li class="nav-item float-start">
                                            <a class="nav-link text-dark fs-3 px-2"
                                                href="https://www.facebook.com/Nivesguru-118950734466440/" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                </svg>
                                                <small class="mt-1">Facebook</small>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link text-dark fs-3 px-2"
                                                href="https://www.linkedin.com/company/nivesguru/" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                                    <path
                                                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                                </svg>
                                                <small class="mt-1">Linkedin</small>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-12">
                            <div class="card border-0">
                                <img src="nivesguru-team-sylvia-b.webp" width="205" height="205"
                                    class="img-fluid rounded-circle d-block mx-auto mt-4"
                                    alt="hritick-b-web-developer-nivesguru" />
                                <div class="card-body">
                                    <p class="text-center">
                                        <a href="https://anupammo.github.io/rahulc" target="_blank"
                                            class="text-center text-dark h4">Silvia B</a>
                                    </p>
                                    <p class="card-text text-center mb-2">Digital / Social Media</p>
                                    <ul class="nav nav-fill mt-3">
                                        <li class="nav-item float-start">
                                            <a class="nav-link text-dark fs-3 px-2"
                                                href="https://www.facebook.com/Nivesguru-118950734466440/" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                </svg>
                                                <small class="mt-1">Facebook</small>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link text-dark fs-3 px-2"
                                                href="https://www.linkedin.com/company/nivesguru/" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                                    <path
                                                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                                </svg>
                                                <small class="mt-1">Linkedin</small>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-12">
                            <div class="card border-0">
                                <img src="nivesguru-team-mrinal-d.jpg" width="200" height="200"
                                    class="img-fluid rounded-circle d-block mx-auto mt-4"
                                    alt="hritick-b-web-developer-nivesguru" />
                                <div class="card-body">
                                    <p class="text-center">
                                        <a href="https://anupammo.github.io/rahulc" target="_blank"
                                            class="text-center text-dark h4">Mrinal D</a>
                                    </p>
                                    <p class="card-text text-center mb-2">Lead Developer | Co-ordinator</p>
                                    <ul class="nav nav-fill mt-3">
                                        <li class="nav-item float-start">
                                            <a class="nav-link text-dark fs-3 px-2"
                                                href="https://www.facebook.com/profile.php?id=100008351852388" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                </svg>
                                                <small class="mt-1">Facebook</small>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link text-dark fs-3 px-2"
                                                href="https://www.linkedin.com/in/mrinal-das-794b85192/" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                                    <path
                                                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                                </svg>
                                                <small class="mt-1">Linkedin</small>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-12">
                            <div class="card border-0">
                                <img src="rahul.jpeg" width="205" height="205"
                                    class="img-fluid rounded-circle d-block mx-auto mt-4"
                                    alt="hritick-b-web-developer-nivesguru" />
                                <div class="card-body">
                                    <p class="text-center">
                                        <a href="https://anupammo.github.io/rahulc" target="_blank"
                                            class="text-center text-dark h4">Rahul C</a>
                                    </p>
                                    <p class="card-text text-center mb-2">Co-Founder | UI/UX | Media</p>
                                    <ul class="nav nav-fill mt-3">
                                        <li class="nav-item float-start">
                                            <a class="nav-link text-dark fs-3 px-2"
                                                href="https://www.facebook.com/Nivesguru-118950734466440/" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                </svg>
                                                <small class="mt-1">Facebook</small>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link text-dark fs-3 px-2"
                                                href="https://www.linkedin.com/company/nivesguru/" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                                    <path
                                                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                                </svg>
                                                <small class="mt-1">Linkedin</small>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="card border-0">
                                <img src="shubhankar-das.webp" width="200" height="200"
                                    class="img-fluid rounded-circle d-block mx-auto mt-4"
                                    alt="hritick-b-web-developer-nivesguru" />
                                <div class="card-body">
                                    <p class="text-center">
                                        <a href="#" target="_blank" class="text-center text-dark h4">Shubhankar
                                            D</a>
                                    </p>
                                    <p class="card-text text-center mb-2">Consultant | Brand Advocate | PM</p>
                                    <ul class="nav nav-fill mt-3">
                                        <li class="nav-item float-start">
                                            <a class="nav-link text-dark fs-3 px-2"
                                                href="https://www.facebook.com/subhankar.das.79656" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                </svg>
                                                <small class="mt-1">Facebook</small>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link text-dark fs-3 px-2" href="https://nbpstechsolutions.in/"
                                                target="_blank" nofollow>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    fill="currentColor" class="bi bi-globe2" viewBox="0 0 16 16">
                                                    <path
                                                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                                                </svg>
                                                <small class="mt-1">website</small>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="card border-0">
                                <img src="nivesguru-team-priyankar-g.webp" width="200" height="200"
                                    class="img-fluid rounded-circle d-block mx-auto mt-4"
                                    alt="hritick-b-web-developer-nivesguru" />
                                <div class="card-body">
                                    <p class="text-center">
                                        <a href="https://anupammo.github.io/rahulc" target="_blank"
                                            class="text-center text-dark h4">Priyankar G</a>
                                    </p>
                                    <p class="card-text text-center mb-2">Accounts | HRM | Finance | Tax</p>
                                    <ul class="nav nav-fill mt-3">
                                        <li class="nav-item float-start">
                                            <a class="nav-link text-dark fs-3 px-2"
                                                href="https://www.facebook.com/Nivesguru-118950734466440/" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                </svg>
                                                <small class="mt-1">Facebook</small>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link text-dark fs-3 px-2"
                                                href="https://www.linkedin.com/company/nivesguru/" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                                    <path
                                                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                                </svg>
                                                <small class="mt-1">Linkedin</small>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="card text-white border-0">
                                <img src="anupam.webp" width="200" height="200"
                                    class="img-fluid rounded-circle d-block mx-auto mt-4"
                                    alt="anupam-mondal-developer-founder-nivesguru" />
                                <div class="card-body">
                                    <p class="text-center">
                                        <a href="https://anupammondal.in" target="_blank"
                                            class="text-center text-dark h4">Anupam M</a>
                                    </p>
                                    <p class="card-text text-center text-dark mb-2">Founder | PM | Developer</p>
                                    <ul class="nav nav-fill mt-3">
                                        <li class="nav-item float-start">
                                            <a class="nav-link text-dark fs-3 px-2"
                                                href="https://www.facebook.com/anupammondal.in" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                </svg>
                                                <small class="mt-1">Facebook</small>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link text-dark fs-3 px-2" href="https://anupammondal.in/"
                                                target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    fill="currentColor" class="bi bi-globe2" viewBox="0 0 16 16">
                                                    <path
                                                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                                                </svg>
                                                <small class="mt-1">Website</small>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link text-dark fs-3 px-2"
                                                href="https://www.linkedin.com/company/anupammondal" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                                    <path
                                                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                                </svg>
                                                <small class="mt-1">Linkedin</small>
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