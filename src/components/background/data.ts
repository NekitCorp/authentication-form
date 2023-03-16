import styles from './background.module.css';

type Element = {
    src: string;
    className: string;
    motionSpeed: number;
};

export const elements: Element[] = [
    { src: 'background/red-element.svg', className: styles.redElement1, motionSpeed: 80 },
    { src: 'background/red-element.svg', className: styles.redElement2, motionSpeed: 30 },
    { src: 'background/green-element.svg', className: styles.greenElement1, motionSpeed: 100 },
    { src: 'background/green-element.svg', className: styles.greenElement2, motionSpeed: 40 },
    { src: 'background/blue-element-1.svg', className: styles.blueElement1, motionSpeed: 10 },
    { src: 'background/blue-element-1.svg', className: styles.blueElement2, motionSpeed: 20 },
    { src: 'background/blue-element-1.svg', className: styles.blueElement3, motionSpeed: 50 },
    { src: 'background/blue-element-2.svg', className: styles.blueElement4, motionSpeed: 15 },
    { src: 'background/blue-element-3.svg', className: styles.blueElement5, motionSpeed: 20 },
];

export const MOTION_SPEED = 30;
