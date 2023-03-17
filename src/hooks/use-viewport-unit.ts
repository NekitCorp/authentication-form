import React from 'react';

/**
 * https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
 */
export function useViewportUnit() {
    React.useEffect(() => {
        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        let vh = window.innerHeight * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        const updateWindowSize = () => {
            // We execute the same script as before
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        // We listen to the resize event
        window.addEventListener('resize', updateWindowSize);

        return () => {
            window.removeEventListener('mousemove', updateWindowSize);
        };
    }, []);
}
