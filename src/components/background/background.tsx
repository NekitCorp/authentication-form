import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { useMedia, useWindowSize } from 'react-use';
import { useMousePosition, usePrefersReducedMotion } from '../../hooks';
import styles from './background.module.css';
import { elements } from './data';

export const Background: React.FC = () => {
    const mousePosition = useMousePosition();
    const prefersReducedMotion = usePrefersReducedMotion();
    const { width, height } = useWindowSize();
    const isTouchDevice = useMedia('(hover: none)', true);

    const x = mousePosition.x / width;
    const y = mousePosition.y / height;

    return (
        <div className={styles.container}>
            {elements.map((element, i) => (
                <div
                    key={i}
                    className={clsx(styles.element, element.className)}
                    style={{
                        transform:
                            prefersReducedMotion || isTouchDevice
                                ? undefined
                                : `translate(${Math.ceil(x * element.motionSpeed)}px, ${Math.ceil(
                                      y * element.motionSpeed,
                                  )}px)`,
                    }}
                >
                    <Image src={element.src} alt="" fill />
                </div>
            ))}
        </div>
    );
};
