import { useViewportUnit } from '@/hooks';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import Head from 'next/head';

// Font files can be colocated inside of `pages`
const gilroyFont = localFont({
    src: [
        {
            path: './Gilroy-Light.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './Gilroy-ExtraBold.otf',
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
