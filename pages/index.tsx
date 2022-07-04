import type { NextPage } from 'next';
import Head from 'next/head';
import { HomePage } from '../src/components/home-page/HomePage';
import { getAssetPath } from '../src/utils';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Authentication Form</title>
                <meta
                    name="description"
                    content="Convenient and beautiful form of authentication via mail and password without ready-made component libraries."
                />
                <link rel="icon" href={getAssetPath('/favicon.ico')} />
            </Head>

            <HomePage />
        </>
    );
};

export default Home;
