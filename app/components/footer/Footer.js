import Image from 'next/image';
import styles from './FooterStyle.module.css';
import FooterLogo from './img/maskable_icon_x192.png';

export default function Footer({ children }) {
    return (
      <div>
        {children}
        <footer className="bg-brand">
            <div className={`${styles.bgduo} container-fluid`}>
                <div className="row">
                    <div className="col-12">
                        <ul className="nav justify-content-center my-3">
                            <li className="nav-item">
                                <a className="nav-link bg-white rounded shadow border-0 mx-1 p-2" href="https://www.facebook.com/Nivesguru-118950734466440/" target="_blank">
                                    <span className='d-block text-center fs-3'>
                                        <i className="bi bi-facebook"></i>
                                    </span>
                                    <small>facebook</small>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-danger bg-white rounded shadow border-0 mx-1 px-2" href="https://instagram.com/niveshguru_official?igshid=ZDdkNTZiNTM=" target="_blank">
                                    <span className='d-block text-center fs-3'><
                                        i className="bi bi-instagram"></i>
                                    </span>
                                    <small>Instagram</small>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-danger bg-white rounded shadow border-0 mx-1 px-2" href="https://www.youtube.com/@nivesguru-india" target="_blank">
                                    <span className='d-block text-center fs-3'>
                                        <i className="bi bi-youtube"></i>
                                    </span>
                                    <small>YouTube</small>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark bg-white rounded shadow border-0 mx-1 px-2" href="https://twitter.com/Nivesguru" target="_blank">
                                    <span className='d-block text-center fs-3'>
                                        <i className="bi bi-twitter-x"></i>
                                    </span>
                                    <small>Twitter-X</small>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link bg-white rounded shadow border-0 mx-1 px-2" href="https://www.linkedin.com/company/nivesguru/" target="_blank">
                                    <span className='d-block text-center fs-3'>
                                        <i className="bi bi-linkedin"></i>
                                    </span>
                                    <small>Linkedin</small>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                        <ul className="nav flex-column text-center mt-4">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="./">Homepage</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="about-us">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="contact-us">Contact us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="faq-page">FAQ page</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="privacy-policy">Privacy policy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="terms-and-conditions">Terms &amp; condition</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <ul className="nav flex-column text-center mt-4">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="fixed-deposit-fd-calculator">FD Calculator</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="sb-calculator">SB Calculator</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="rd-calculator">RD Calculator</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="sukanya-samriddhi-yojana-ssy-calculator">SSY
                                    Calculator</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="ppf-calculator">PPF
                                    Calculator</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="national-pension-system-nps-calculator">NPS
                                    Calculator</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <ul className="nav flex-column text-center mt-4">

                            <li className="nav-item">
                                <a className="nav-link text-white" href="apy-calculator">APY Calculator</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="pradhan-mantri-jeevan-jyoti-bima-yojana-pmjjby-calculator">PMJJBY Calculator</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="pradhan-mantri-suraksha-bima-yojana-pmsby-calculator">PMSBY Calculator</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="kvp-calculator">KVP Calculator</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="national-savings-certificate-nsc-calculator">NSC
                                    Calculator</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="sgb-calculator">SGB Calculator</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mt-3">
                        <Image src={FooterLogo} width={130} height={130} className="rounded-circle mx-auto mt-3 d-block" loading="lazy" alt="Investment make easy with Nivesguru" title="Investment make easy with Nivesguru" />
                    {/* <Image src="" width={130} height={130} className="rounded-circle mx-auto mt-3 d-block" loading="lazy" alt="Investment make easy with Nivesguru" title="Investment make easy with Nivesguru" /> */}
                    {/* <img src="../../../maskable_icon_x192.png" width="130" height="130" className="rounded-circle mx-auto mt-3 d-block" loading="lazy" alt="Investment make easy with Nivesguru" title="Investment make easy with Nivesguru" /> */}
                    <p className="h5 text-white text-center mt-3">Investment make<br />easy with Nivesguru</p>
                    <p className="text-center text-white"><a className="text-white" href="sitemap">HTML Sitemap</a> | <a className="text-white" href="sitemap.xml">XML Sitemap</a></p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="col-12 text-light text-center">
                    <p className='mb-0 pb-3'>🇮🇳 Nivesguru © 2024 | Co-Sponserd -&nbsp;
                        <a className="text-warning" href="https://wheelguru.in" target="_blank">Wheelguru</a>
                        <br />
                        Designed &amp; Developed by : Team &nbsp;
                        <a className="text-warning" href="https://anupammondal.in" target="_blank">Anupam Mondal</a>
                    </p>
                </div>
            </div>
        </footer>
      </div>
    );
  }
  