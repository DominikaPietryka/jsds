import { AppProps } from 'next/app';
import '../../styles/globals.css'; // Local stylesheet import is fine

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
