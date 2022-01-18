import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import '../styles/about.scss';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Header/scss/Header.scss';
import '../components/Footer/scss/Footer.scss';
import '../components/Category/scss/Category.scss';
import '../pages/nextjs/part1/scss/part1.scss';
import '../pages/nextjs/demo/scss/demo.scss';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
