import styles from './background.module.css';

type Element = {
    src: string;
    className: string;
};

export const elements: Element[] = [
    { src: 'background/red-element.svg', className: styles.redElement1 },
    { src: 'background/red-element.svg', className: styles.redElement2 },
    { src: 'background/green-element.svg', className: styles.greenElement1 },
    { src: 'background/green-element.svg', className: styles.greenElement2 },
    { src: 'background/blue-element-1.svg', className: styles.blueElement1 },
    { src: 'background/blue-element-1.svg', className: styles.blueElement2 },
    { src: 'background/blue-element-1.svg', className: styles.blueElement3 },
    { src: 'background/blue-element-2.svg', className: styles.blueElement4 },
    { src: 'background/blue-element-3.svg', className: styles.blueElement5 },
];

export const MOTION_SPEED = 30;
