import Head from "next/head";
// import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "Nivesguru: Free Calculator Investment make easy for India",
  description: "Welcome to our website. Explore our products, services, and more.",
  alternates: {
    canonical: "https://anupammondal.in/",
  },
  openGraph: {
    title: "Nivesguru: Free Calculator Investment make easy for India",
    description: "Discover the best products and services at Your Website Name.",
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
      <div className={styles.page}>
        <h1 className="lead text-center fs-1 py-5">Welcome to <span className="text-danger">Homepage</span></h1>
      </div>
    </>
  );
}
