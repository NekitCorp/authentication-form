import styles from './background.module.css';

type Element = {
    src: string;
    className: string;
    motionSpeed: number;
};

export const elements: Element[] = [
    { src: 'icons/background/red-element.svg', className: styles.redElement1, motionSpeed: 80 },
    { src: 'icons/background/red-element.svg', className: styles.redElement2, motionSpeed: 30 },
    { src: 'icons/background/green-element.svg', className: styles.greenElement1, motionSpeed: 100 },
    { src: 'icons/background/green-element.svg', className: styles.greenElement2, motionSpeed: 40 },
    { src: 'icons/background/blue-element-1.svg', className: styles.blueElement1, motionSpeed: 10 },
    { src: 'icons/background/blue-element-1.svg', className: styles.blueElement2, motionSpeed: 20 },
    { src: 'icons/background/blue-element-1.svg', className: styles.blueElement3, motionSpeed: 50 },
    { src: 'icons/background/blue-element-2.svg', className: styles.blueElement4, motionSpeed: 15 },
    { src: 'icons/background/blue-element-3.svg', className: styles.blueElement5, motionSpeed: 20 },
];
