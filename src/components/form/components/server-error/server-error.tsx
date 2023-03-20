import clsx from 'clsx';
import React from 'react';
import styles from './server-error.module.css';

type ServerErrorProps = {
    className?: string;
    error: string | null;
};

export const ServerError: React.FC<ServerErrorProps> = ({ className, error }) => {
    const [savedError, setSavedError] = React.useState(error);
    const [fadeState, setFadeState] = React.useState<'fadeIn' | 'fadeOut' | null>(null);
    const ref = React.useRef<HTMLParagraphElement>(null);

    React.useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener(
                'animationend',
                () => {
                    setFadeState(null);

                    if (!error) {
                        setSavedError(null);
                    }
                },
                { once: true },
            );

            setFadeState(error ? 'fadeIn' : 'fadeOut');

            if (error) {
                setSavedError(error);
            }
        }
    }, [error]);

    return (
        <p ref={ref} role="alert" className={clsx(className, fadeState && styles[fadeState])}>
            {savedError}
        </p>
    );
};
