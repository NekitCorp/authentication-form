import Image from 'next/image';
import styles from './form.module.css';

export const Form: React.FC = () => {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <p className={styles.logo}>Your logo</p>
                <h1 className={styles.header}>Login</h1>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor="email">
                        Email
                    </label>
                    <input
                        className={styles.input}
                        required
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        placeholder="username@gmail.com"
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor="password">
                        Password
                    </label>
                    <input
                        className={styles.input}
                        required
                        minLength={8}
                        type="password"
                        id="password"
                        name="password"
                        aria-describedby="password-minlength"
                        autoComplete="new-password"
                        placeholder="Password"
                    />
                    <button
                        type="button"
                        hidden
                        data-pressed="false"
                        aria-controls="password"
                        data-text-show="Show password"
                        data-text-hide="Hide password"
                    >
                        Show password
                    </button>
                    <span
                        data-text-shown="Your password is shown"
                        data-text-hidden="Your password is hidden"
                        className="visually-hidden password-announce"
                        aria-live="polite"
                    ></span>
                    <div id="password-minlength">Eight or more characters</div>
                </div>
                <a href="#">Forgot Password?</a>
                <button className={styles.signInButton}>Sign in</button>
                <p>or continue with</p>
                <div className={styles.providers}>
                    <button className={styles.providerButton} type="button">
                        <Image src="google.svg" alt="google icon" width={24} height={24} />
                    </button>
                    <button className={styles.providerButton} type="button">
                        <Image src="github.svg" alt="github icon" width={24} height={24} />
                    </button>
                    <button className={styles.providerButton} type="button">
                        <Image src="facebook.svg" alt="facebook icon" width={24} height={24} />
                    </button>
                </div>
                <p>
                    Don’t have an account yet? <a href="#">Register for free</a>
                </p>
            </form>
        </div>
    );
};
