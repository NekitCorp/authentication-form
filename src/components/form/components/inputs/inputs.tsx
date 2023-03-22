import { getAssetPath } from '@/utils';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import styles from './inputs.module.css';

type InputProps = {
    className?: string;
    disabled: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export const EmailInput: React.FC<InputProps> = ({ className, disabled, onChange }) => {
    return (
        <div className={clsx(styles.inputContainer, className)}>
            <label className={styles.label} htmlFor="email">
                Email
            </label>
            <input
                className={styles.input}
                disabled={disabled}
                required
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="username@gmail.com"
                onChange={onChange}
            />
        </div>
    );
};

export const PasswordInput: React.FC<InputProps> = ({ className, disabled, onChange }) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <div className={clsx(styles.inputContainer, className)}>
            <label className={styles.label} htmlFor="password">
                Password
            </label>
            <div className={styles.passwordInputWrapper}>
                <input
                    className={styles.input}
                    disabled={disabled}
                    required
                    minLength={8}
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    aria-describedby="password-minlength"
                    autoComplete="new-password"
                    placeholder="Password"
                    onChange={onChange}
                />
                <button
                    className={styles.showPasswordButton}
                    disabled={disabled}
                    onClick={() => setShowPassword((prev) => !prev)}
                    type="button"
                    aria-controls="password"
                    aria-label={
                        showPassword
                            ? 'Show password as plain text. Warning: this will display your password on the screen.'
                            : 'Hide password.'
                    }
                >
                    {showPassword ? (
                        <Image
                            src={getAssetPath('/icons/eye-off.svg')}
                            alt="Hide password icon"
                            width={16}
                            height={16}
                        />
                    ) : (
                        <Image
                            src={getAssetPath('/icons/eye.svg')}
                            alt="Show password icon"
                            width={16}
                            height={16}
                            priority
                        />
                    )}
                </button>
                <span className="visually-hidden" aria-live="polite">
                    {showPassword ? 'Your password is shown' : 'Your password is hidden'}
                </span>
            </div>
        </div>
    );
};
