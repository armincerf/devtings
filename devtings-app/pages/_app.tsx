import "tailwindcss/tailwind.css";
import "../styles.scss";
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
    <>
   <NextSeo
      title="DEVTINGS.com"
      description="Scientific and comprehensive benchmarks for developer tools."
    />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
