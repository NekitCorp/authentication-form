import clsx from 'clsx';
import React from 'react';
import styles from './sign-in-button.module.css';

type SignInButtonProps = {
    className?: string;
    shakeClassName: string;
};

export const SignInButton: React.FC<SignInButtonProps> = ({ className, shakeClassName }) => {
    const [submitButtonCanShake, setSubmitButtonCanShake] = React.useState(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setSubmitButtonCanShake(true);
        e.currentTarget.addEventListener('animationend', () => setSubmitButtonCanShake(false), { once: true });
    };

    return (
        <button
            type="submit"
            className={clsx(className, styles.button, { [shakeClassName]: submitButtonCanShake })}
            onClick={handleClick}
        >
            Sign in
        </button>
    );
};
