import Head from "next/head";

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

export default function Contact() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link rel="canonical" href={metadata.canonical} />
            </Head>
            <h1 className="lead text-center fs-1 py-5">Welcome to <span className="text-danger">Contact </span>page</h1>
        </>
    );
}