import { Background } from '../background/Background';
import { Form } from '../form/Form';
import styles from './HomePage.module.css';

export const HomePage: React.FC = () => {
    return (
        <main className={styles.container}>
            <Background className={styles.background} />
            <Form />
        </main>
    );
};
