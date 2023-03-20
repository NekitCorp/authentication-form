import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import styles from './provider-button.module.css';

type ProviderButtonProps = {
    className?: string;
    name: 'google' | 'facebook' | 'github';
};

export const ProviderButton: React.FC<ProviderButtonProps> = ({ name, className }) => {
    return (
        <button className={clsx(className, styles.button)} type="button">
            <Image src={`icons/${name}.svg`} alt={`${name} icon`} width={24} height={24} />
        </button>
    );
};
