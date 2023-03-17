import styles from '@/styles/success-page.module.css';
import type { NextPage } from 'next';
import Head from 'next/head';

const Success: NextPage = () => {
    return (
        <>
            <Head>
                <title>Success authorization page</title>
            </Head>

            <div className={styles.icon}>🎉</div>
        </>
    );
};

export default Success;
