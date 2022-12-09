'use strict';

var react = require('react');

function AnimatedTypography({ text, delay = 550, type = 'restart' }) {
    const [animation, setAnimation] = react.useState('');
    const [direction, setDirection] = react.useState('forward');
    react.useEffect(() => {
        const revert = () => {
            if (direction === 'backward') {
                if (!animation) {
                    setDirection('forward');
                }
                else {
                    setAnimation(animation.slice(0, -1));
                }
            }
            else if (direction === 'forward') {
                if (animation === text) {
                    setDirection('backward');
                }
                else {
                    setAnimation(animation + text[animation.length]);
                }
            }
        };
        const restart = () => {
            if (animation === text) {
                setAnimation('');
            }
            else {
                setAnimation(animation + text[animation.length]);
            }
        };
        const animating = setInterval(() => {
            switch (type) {
                case "revert":
                    revert();
                    break;
                case "restart":
                    restart();
                    break;
            }
        }, delay);
        return () => clearInterval(animating);
    }, [animation, direction]);
    return animation;
}

module.exports = AnimatedTypography;
