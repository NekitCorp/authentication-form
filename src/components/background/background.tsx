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
    const windowSize = useWindowSize();
    const isTouchDevice = useMedia('(hover: none)', true);

    const motionEnable = !prefersReducedMotion && !isTouchDevice;
    const x = mousePosition.x / windowSize.width;
    const y = mousePosition.y / windowSize.height;

    return (
        <div className={styles.container}>
            {elements.map((element, i) => (
                <div
                    key={i}
                    className={clsx(styles.element, element.className)}
                    style={{
                        transform: motionEnable
                            ? `translate(${Math.ceil(x * element.motionSpeed)}px, ${Math.ceil(
                                  y * element.motionSpeed,
                              )}px)`
                            : undefined,
                    }}
                >
                    <Image src={element.src} alt="" fill />
                </div>
            ))}
        </div>
    );
};
