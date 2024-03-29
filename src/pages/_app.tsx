import { useViewportUnit } from '@/hooks';
import '@/mocks';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import Head from 'next/head';

const gilroyFont = localFont({
    src: [
        {
            path: '../styles/fonts/Gilroy-Light.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../styles/fonts/Gilroy-ExtraBold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
});

export default function App({ Component, pageProps }: AppProps) {
    useViewportUnit();

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
