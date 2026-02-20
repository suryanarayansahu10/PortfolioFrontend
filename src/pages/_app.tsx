import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { SEO_CONFIG } from "@/lib/seo";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const seo = SEO_CONFIG[router.pathname] || SEO_CONFIG["/"];

  return (
    <>
      <Head>
        <title>{seo.title}</title>

        <meta name="description" content={seo.description} />
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href={`https://nexchunk.com${router.pathname}`} />

        {/* OpenGraph */}
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta
          property="og:url"
          content={`https://nexchunk.com${router.pathname}`}
        />
        <meta property="og:type" content="website" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NexChunk",
              url: "https://nexchunk.com",
              logo: "https://nexchunk.com/logo-email.png",
              description:
                "Engineering consultancy focused on data reconciliation, automation systems, and scalable web applications.",
            }),
          }}
        />
      </Head>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-TX902WN8VC`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-TX902WN8VC');
  `}
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
