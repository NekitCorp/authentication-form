import clsx from 'clsx';
import Image from 'next/image';
import { useWindowSize } from 'react-use';
import { useMousePosition, usePrefersReducedMotion } from '../../hooks';
import styles from './Background.module.css';
import { elements, MOTION_SPEED } from './data';

type BackgroundProps = {
    className?: string;
};

export const Background: React.FC<BackgroundProps> = () => {
    const mousePosition = useMousePosition();
    const prefersReducedMotion = usePrefersReducedMotion();
    const { width, height } = useWindowSize();

    const x = Math.ceil((mousePosition.x / width) * MOTION_SPEED);
    const y = Math.ceil((mousePosition.y / height) * MOTION_SPEED);

    return (
        <div className={styles.container}>
            {elements.map((element, i) => (
                <div
                    key={i}
                    className={clsx(styles.element, element.className)}
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                    <Image src={element.src} alt="" width={element.width} height={element.height} />
                </div>
            ))}
        </div>
    );
};
