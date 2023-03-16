import styles from './background.module.css';

type Element = {
    src: string;
    width: number;
    height: number;
    className: string;
};

export const elements: Element[] = [
    { src: 'background/red-element.svg', width: 668, height: 622, className: styles.redElement1 },
    { src: 'background/red-element.svg', width: 668, height: 622, className: styles.redElement2 },
    { src: 'background/green-element.svg', width: 155, height: 84, className: styles.greenElement1 },
    { src: 'background/green-element.svg', width: 244, height: 132, className: styles.greenElement2 },
    { src: 'background/blue-element-1.svg', width: 176, height: 56, className: styles.blueElement1 },
    { src: 'background/blue-element-1.svg', width: 176, height: 56, className: styles.blueElement2 },
    { src: 'background/blue-element-1.svg', width: 724, height: 233, className: styles.blueElement3 },
    { src: 'background/blue-element-2.svg', width: 393, height: 370, className: styles.blueElement4 },
    { src: 'background/blue-element-3.svg', width: 270, height: 270, className: styles.blueElement5 },
];

export const MOTION_SPEED = 30;
