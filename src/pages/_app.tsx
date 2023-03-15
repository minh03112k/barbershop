import '@/styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app';
import '../styles/custom-bootstrap.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
