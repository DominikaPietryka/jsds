import { AppProps } from 'next/app';
import Head from 'next/head';
import '../../styles/globals.css'; // Tailwind CSS

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://starter-kit-demo.herokuapp.com/styles/index.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
