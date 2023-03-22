import { getAssetPath } from '@/utils';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import styles from './provider-button.module.css';

type ProviderButtonProps = {
    className?: string;
    disabled: boolean;
    name: 'google' | 'facebook' | 'github';
};

export const ProviderButton: React.FC<ProviderButtonProps> = ({ name, disabled, className }) => {
    return (
        <button className={clsx(className, styles.button)} disabled={disabled} type="button">
            <Image src={getAssetPath(`/icons/${name}.svg`)} alt={`${name} icon`} width={24} height={24} priority />
        </button>
    );
};
