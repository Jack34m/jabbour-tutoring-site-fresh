// pages/_app.tsx
import "../styles/globals.css";
import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      {/* Google Analytics */}
      {/* Load gtag.js dynamically */}
      <Script
        id="google-gtag"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-3XJ4TKEYW6"
      />

      {/* Initialize gtag with your Measurement ID */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3XJ4TKEYW6');
        `}
      </Script>
    </>
  );
}