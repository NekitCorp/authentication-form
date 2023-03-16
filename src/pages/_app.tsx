import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';

// Font files can be colocated inside of `pages`
const gilroyFont = localFont({ src: './Gilroy-Light.otf' });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={gilroyFont.className}>
            <Component {...pageProps} />
        </main>
    );
}
