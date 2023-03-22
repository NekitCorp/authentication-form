import { Background } from '@/components/background';
import { Form } from '@/components/form';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Authentication Form</title>
                <meta
                    name="description"
                    content="Convenient and beautiful form of authentication via mail and password without ready-made component libraries."
                />
            </Head>

            <Background />
            <Form />
        </>
    );
};

export default Home;
