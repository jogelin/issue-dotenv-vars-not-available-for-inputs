import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to issue-dotenv-vars-not-available-for-inputs!</title>
      </Head>
      <main className="app">
        <Component {...pageProps}/>
      </main>
    </>
  );
};

export default CustomApp;
