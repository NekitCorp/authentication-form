import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import styles from './form.module.css';

export const Form: React.FC = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <div className={styles.container}>
            <form className={styles.form}>
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
