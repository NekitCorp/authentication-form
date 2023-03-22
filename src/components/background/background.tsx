import { getAssetPath } from '@/utils';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import styles from './background.module.css';
import { elements } from './data';

export const Background: React.FC = () => {
    React.useEffect(() => {
        const root = document.documentElement;

        const updateMousePosition = (ev: MouseEvent) => {
            root.style.setProperty('--mouse-x', ev.clientX / window.innerWidth + 'px');
            root.style.setProperty('--mouse-y', ev.clientY / window.innerHeight + 'px');
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <div className={styles.container}>
            {elements.map((element, i) => (
                <div
                    key={i}
                    className={clsx(styles.element, element.className)}
                    style={{ '--motion-speed': element.motionSpeed } as React.CSSProperties}
                >
                    <Image src={getAssetPath(element.src)} alt="" fill priority />
                </div>
            ))}
        </div>
    );
};
