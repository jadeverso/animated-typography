import { useState, useEffect } from 'react';

function AnimatedTypography({ text, delay = 550, type = 'restart' }) {
    const [animation, setAnimation] = useState('');
    const [direction, setDirection] = useState('forward');
    useEffect(() => {
        const undo = () => {
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
                case "undo":
                    undo();
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

export { AnimatedTypography as default };
