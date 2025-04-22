import Image from 'next/image'
import NavbarLogo from './img/favicon-32x32.png' 

export default function Navbar({ children }) {
    return (
    <nav className="navbar navbar-expand-lg bg-color">
        {children}
        <div className="container">
            <a className="navbar-brand text-white" href="./" title="Nivesguru">
            <Image src={NavbarLogo} width={32} height={32} className="d-inline-block align-text-center rounded-circle me-2" alt="Nivesguru Logo" title="Nivesguru Logo" />
            <p className="d-inline-block fw-bold mb-0">Nivesguru</p>
            </a>
            <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-grid-fill" viewBox="0 0 16 16">
                        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path>
                    </svg>
                </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto fw-bold mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Investment Calculators
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="senior-citizens-savings-scheme-scss-calculator">SCSS Calculator</a>
                            </li>
                            <li><a className="dropdown-item" href="post-office-monthly-income-scheme-mis-calculator">MIS Calculator</a>
                            </li>
                            <li><a className="dropdown-item" href="mahila-samman-savings-certificate-mssc-calculator">MSSC Calculator</a>
                            </li>
                            <li><a className="dropdown-item" href="post-office-time-deposit-td-calculator">TD
                                    Calculator</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="sgb-calculator">SGB Calculator</a></li>
                            <li><a className="dropdown-item" href="kvp-calculator">KVP
                                    Calculator</a></li>
                            <li><a className="dropdown-item" href="national-savings-certificate-nsc-calculator">NSC
                                    Calculator</a></li>
                            <li><a className="dropdown-item" href="sukanya-samriddhi-yojana-ssy-calculator">SSY
                                    Calculator</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="apy-calculator">APY
                                    Calculator</a></li>
                            <li><a className="dropdown-item" href="national-pension-system-nps-calculator">NPS
                                    Calculator</a></li>
                            <li><a className="dropdown-item" href="ppf-calculator">PPF
                                    Calculator</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="pradhan-mantri-jeevan-jyoti-bima-yojana-pmjjby-calculator">PMJJBY
                                    Calculator</a></li>
                            <li><a className="dropdown-item" href="pradhan-mantri-suraksha-bima-yojana-pmsby-calculator">PMSBY
                                    Calculator</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Finance Calculators
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="income-tax-calculator">Income Tax Calculator</a>
                            </li>
                            <li><a className="dropdown-item" href="gst-calculator">GST Calculator</a></li>
                            <li><a className="dropdown-item" href="simple-interest-calculator">Simple Interest
                                    Calculator</a></li>
                            <li><a className="dropdown-item" href="service-tax-calculator">Service Tax
                                    Calculator</a>
                            </li>
                            <li><a className="dropdown-item" href="capital-gain-tax-calculator">Capital Gain Tax
                                    Calculator</a></li>
                            <li><a className="dropdown-item" href="tds-calculator">TDS Calculator</a></li>
                            <li><a className="dropdown-item" href="vat-calculator">VAT Calculator</a></li>
                            <li><a className="dropdown-item" href="systematic-investment-plan-sip-return-calculator">SIP
                                    Calculator</a></li>
                            <li><a className="dropdown-item" href="inflation-calculator-india">Inflation
                                    Calculator</a></li>
                            <li><a className="dropdown-item" href="emi-calculator-online">EMI Calculator</a></li>
                            <li><a className="dropdown-item" href="swp-calculator-online">SWP Calculator</a></li>
                            <li><a className="dropdown-item" href="compound-interest-calculator">Compound Interest
                                    Calculator</a></li>
                            <li><a className="dropdown-item" href="lumpsum-calculator-online">Lumpsum
                                    Calculator</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Savings Calculators
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="fixed-deposit-fd-calculator">FD Calculator</a>
                            </li>
                            <li><a className="dropdown-item" href="bob-fd-calculator">BOB FD Calculator</a></li>
                            <li><a className="dropdown-item" href="boi-fd-calculator">BOI FD Calculator</a></li>
                            <li><a className="dropdown-item" href="pnb-fd-calculator">PNB FD Calculator</a></li>
                            <li><a className="dropdown-item" href="sbi-fd-calculator">SBI FD Calculator</a></li>
                            <li><a className="dropdown-item" href="ubi-fd-calculator">UBI FD Calculator</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="rd-calculator">RD Calculator</a></li>
                            <li><a className="dropdown-item" href="bob-rd-calculator">BOB RD Calculator</a></li>
                            <li><a className="dropdown-item" href="boi-rd-calculator">BOI RD Calculator</a></li>
                            <li><a className="dropdown-item" href="pnb-rd-calculator">PNB RD Calculator</a></li>
                            <li><a className="dropdown-item" href="sbi-rd-calculator">SBI RD Calculator</a></li>
                            <li><a className="dropdown-item" href="ubi-rd-calculator">UBI RD Calculator</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="sb-calculator">SB Calculator</a></li>
                            <li><a className="dropdown-item" href="bob-sb-calculator">BOB SB Calculator</a></li>
                            <li><a className="dropdown-item" href="boi-sb-calculator">BOI SB Calculator</a></li>
                            <li><a className="dropdown-item" href="pnb-sb-calculator">PNB SB Calculator</a></li>
                            <li><a className="dropdown-item" href="sbi-sb-calculator">SBI SB Calculator</a></li>
                            <li><a className="dropdown-item" href="ubi-sb-calculator">UBI SB Calculator</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            About
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="about-us">About us</a></li>
                            <li><a className="dropdown-item" href="contact-us">Contact us</a></li>
                            <li><a className="dropdown-item" href="faq-page">FAQ</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="d-inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-translate" viewBox="0 0 16 16">
                                    <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z">
                                    </path>
                                    <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31">
                                    </path>
                                </svg>
                            </span>
                        </a>
                        <ul className="dropdown-menu" data-bs-popper="static">
                            <li><a className="dropdown-item" href="./">English</a></li>
                            <li><a className="dropdown-item" href="./hi/">हिंदी</a></li>
                            <li><a className="dropdown-item" href="./bn/">বাংলা</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
  }
  