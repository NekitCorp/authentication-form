import clsx from 'clsx';
import React from 'react';
import styles from './sign-in-button.module.css';

type SignInButtonProps = {
    className?: string;
    disabled: boolean;
    shakeClassName: string;
};

export const SignInButton: React.FC<SignInButtonProps> = ({ className, disabled, shakeClassName }) => {
    const [submitButtonCanShake, setSubmitButtonCanShake] = React.useState(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setSubmitButtonCanShake(true);
        e.currentTarget.addEventListener('animationend', () => setSubmitButtonCanShake(false), { once: true });
    };

    return (
        <button
            type="submit"
            disabled={disabled}
            className={clsx(className, styles.button, { [shakeClassName]: submitButtonCanShake })}
            onClick={handleClick}
        >
            Sign in
        </button>
    );
};
