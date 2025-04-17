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
  
export default function About() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link rel="canonical" href={metadata.canonical} />
            </Head>
            <h1 className="lead text-center fs-1 py-5">Welcome to <span className="text-danger">About </span>page</h1>
        </>
    );
}