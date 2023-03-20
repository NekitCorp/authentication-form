import clsx from 'clsx';
import React from 'react';
import { EmailInput, PasswordInput } from './components/inputs';
import { ProviderButton } from './components/provider-button';
import { ServerError } from './components/server-error';
import { SignInButton } from './components/sign-in-button';
import styles from './form.module.css';
import { useForm } from './hooks/use-form';

export const Form: React.FC = () => {
    const { clearError, error, handleSubmit } = useForm();

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                {/* Form header */}
                <p className={styles.logo}>Your logo</p>
                <h1 className={styles.header}>Login</h1>

                {/* Inputs */}
                <EmailInput className={styles.emailInputContainer} onChange={clearError} />
                <PasswordInput className={styles.passwordInputContainer} onChange={clearError} />

                {/* Forgot Password link */}
                <a href="#" className={styles.forgotPasswordLink}>
                    Forgot Password?
                </a>

                {/* Server side validation error */}
                <ServerError className={clsx(styles.text, styles.error)} error={error} />

                {/* Submit button */}
                <SignInButton className={styles.signInButton} shakeClassName={styles.signInButtonShake} />

                {/* Third party providers */}
                <p className={clsx(styles.text, styles.continueWithText)}>or continue with</p>
                <div className={styles.providers}>
                    <ProviderButton className={styles.providerButton} name="google" />
                    <ProviderButton className={styles.providerButton} name="github" />
                    <ProviderButton className={styles.providerButton} name="facebook" />
                </div>

                {/* Register link */}
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
