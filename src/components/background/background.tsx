import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { useMedia, useWindowSize } from 'react-use';
import { useMousePosition, usePrefersReducedMotion } from '../../hooks';
import styles from './background.module.css';
import { elements, MOTION_SPEED } from './data';

export const Background: React.FC = () => {
    const mousePosition = useMousePosition();
    const prefersReducedMotion = usePrefersReducedMotion();
    const { width, height } = useWindowSize();
    const isTouchDevice = useMedia('(hover: none)');

    const x = React.useMemo(
        () => (prefersReducedMotion || isTouchDevice ? 0 : Math.ceil((mousePosition.x / width) * MOTION_SPEED)),
        [isTouchDevice, mousePosition.x, prefersReducedMotion, width],
    );
    const y = React.useMemo(
        () => (prefersReducedMotion || isTouchDevice ? 0 : Math.ceil((mousePosition.y / height) * MOTION_SPEED)),
        [prefersReducedMotion, isTouchDevice, mousePosition.y, height],
    );

    return (
        <div className={styles.container}>
            {elements.map((element, i) => (
                <div
                    key={i}
                    className={clsx(styles.element, element.className)}
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                    <Image src={element.src} alt="" fill />
                </div>
            ))}
        </div>
    );
};
