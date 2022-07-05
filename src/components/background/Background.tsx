import Image from 'next/image';
import { useWindowSize } from 'react-use';
import { useMousePosition, usePrefersReducedMotion } from '../../hooks';
import { getAssetPath } from '../../utils';
import styles from './Background.module.css';

type BackgroundProps = {
    className?: string;
};

export const Background: React.FC<BackgroundProps> = () => {
    const mousePosition = useMousePosition();
    const prefersReducedMotion = usePrefersReducedMotion();
    const { width, height } = useWindowSize();

    const x = Math.ceil((mousePosition.x / width) * 10);
    const y = Math.ceil((mousePosition.y / height) * 10);

    return (
        <div className={styles.container}>
            <div
                className={styles.element}
                style={{
                    left: '-13%',
                    top: '62%',
                    filter: 'opacity(50%)',
                    transform: `translate(${x}px, ${y}px)`,
                }}
            >
                <Image src={getAssetPath('/background/red-element.png')} alt="" width={668} height={622} />
            </div>
            <div className={styles.element} style={{ left: '49%', top: '10%', transform: `translate(${x}px, ${y}px)` }}>
                <Image src={getAssetPath('/background/red-element.png')} alt="" width={668} height={622} />
            </div>

            <div className={styles.element} style={{ left: '20%', top: '44%', transform: `translate(${x}px, ${y}px)` }}>
                <Image src={getAssetPath('/background/green-element.png')} alt="" width={155} height={84} />
            </div>
            <div
                className={styles.element}
                style={{ left: '23%', top: '28%', zIndex: 2, transform: `translate(${x}px, ${y}px)` }}
            >
                <Image src={getAssetPath('/background/green-element.png')} alt="" width={244} height={132} />
            </div>

            <div
                className={styles.element}
                style={{
                    left: '66%',
                    top: '68%',
                    zIndex: 2,
                    transform: `translate(${x}px, ${y}px)`,
                }}
            >
                <Image src={getAssetPath('/background/blue-element.png')} alt="" width={176} height={56} />
            </div>
            <div className={styles.element} style={{ left: '70%', top: '75%', transform: `translate(${x}px, ${y}px)` }}>
                <Image src={getAssetPath('/background/blue-element.png')} alt="" width={176} height={56} />
            </div>
            <div
                className={styles.element}
                style={{ top: '85%', right: '-20%', filter: 'opacity(50%)', transform: `translate(${x}px, ${y}px)` }}
            >
                <Image src={getAssetPath('/background/blue-element.png')} alt="" width={724} height={233} />
            </div>
            <div className={styles.element} style={{ top: '58%', left: '23%', transform: `translate(${x}px, ${y}px)` }}>
                <Image src={getAssetPath('/background/blue-element-2.png')} alt="" width={393} height={370} />
            </div>
            <div
                className={styles.element}
                style={{
                    top: '-15%',
                    left: '25%',
                    filter: 'opacity(50%)',
                    transform: `translate(${x}px, ${y}px)`,
                }}
            >
                <Image src={getAssetPath('/background/blue-element-3.png')} alt="" width={270} height={270} />
            </div>
        </div>
    );
};
