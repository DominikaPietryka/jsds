import { AppProps } from 'next/app';
import '../../styles/globals.css';
import { ToastProvider } from '../hooks/useToast';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  );
}

export default MyApp;
