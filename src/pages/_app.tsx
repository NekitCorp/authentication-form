import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import Head from 'next/head';

// Font files can be colocated inside of `pages`
const gilroyFont = localFont({ src: './Gilroy-Light.otf' });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="favicon.ico" />
            </Head>
            <main className={gilroyFont.className}>
                <Component {...pageProps} />
            </main>
        </>
    );
}
