import Link from "next/link";
import { headers } from "next/headers";

export default async function NotFound() {
  const headersList = await headers();
  const domain = headersList.get("host");
  return (
    <section className="beach-section">
      <div className="sun"></div>
      <div className="waves"></div>
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-12 my-5 py-5">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <Link className="nav-link text-dark" href="./">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" href="/about-us">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" href="/contact-us">
                    Contact
                  </Link>
                </li>
              </ul>
              <hr className="d-block mx-auto w-25" />
              <h1 className="text-center">404 | Page Not Found</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
