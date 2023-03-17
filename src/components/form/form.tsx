import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './form.module.css';

interface FormElements extends HTMLFormControlsCollection {
    email: HTMLInputElement;
    password: HTMLInputElement;
}
interface UsernameFormElement extends HTMLFormElement {
    readonly elements: FormElements;
}

export const Form: React.FC = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = React.useState(false);
    const [error, setError] = React.useState('');

    const handleSubmit = async (event: React.FormEvent<UsernameFormElement>) => {
        event.preventDefault();

        const data = {
            email: event.currentTarget.elements.email.value,
            password: event.currentTarget.elements.password.value,
        };

        try {
            const response = await fetch('/api/form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const json = await response.json();

            if (response.ok) {
                router.push('/success');
            } else {
                setError(json.error);
            }
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Unknown error');
        }
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <p className={styles.logo}>Your logo</p>
                <h1 className={styles.header}>Login</h1>
                <div className={clsx(styles.inputContainer, styles.emailInputContainer)}>
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
                <div className={clsx(styles.inputContainer, styles.passwordInputContainer)}>
                    <label className={styles.label} htmlFor="password">
                        Password
                    </label>
                    <div className={styles.passwordInputWrapper}>
                        <input
                            className={styles.input}
                            required
                            minLength={8}
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            aria-describedby="password-minlength"
                            autoComplete="new-password"
                            placeholder="Password"
                        />
                        <button
                            className={styles.showPasswordButton}
                            onClick={() => setShowPassword((prev) => !prev)}
                            type="button"
                            data-pressed="false"
                            aria-controls="password"
                            data-text-show="Show password"
                            data-text-hide="Hide password"
                        >
                            {showPassword ? (
                                <Image src="eye-off.svg" alt="eye off icon" width={16} height={16} />
                            ) : (
                                <Image src="eye.svg" alt="eye icon" width={16} height={16} />
                            )}
                        </button>
                    </div>
                    {/* <span
                        data-text-shown="Your password is shown"
                        data-text-hidden="Your password is hidden"
                        className="visually-hidden password-announce"
                        aria-live="polite"
                    ></span>
                    <div id="password-minlength">Eight or more characters</div> */}
                </div>
                <a href="#" className={styles.forgotPasswordLink}>
                    Forgot Password?
                </a>
                <button className={styles.signInButton}>Sign in</button>
                <p className={clsx(styles.text, styles.continueWithText)}>or continue with</p>
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
                <p className={styles.text}>
                    Don’t have an account yet?{' '}
                    <a href="#">
                        <strong>Register for free</strong>
                    </a>
                </p>
            </form>
        </div>
    );
};
