import { Background } from '../background';
import { Form } from '../form';
import styles from './home-page.module.css';

export const HomePage: React.FC = () => {
    return (
        <div className={styles.container}>
            <Background className={styles.background} />
            <Form />
        </div>
    );
};
