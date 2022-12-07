import { useState, useEffect } from 'react';

function AnimatedTypography({ text, delay = 550, type = 'restart' }) {
    const [animation, setAnimation] = useState('');
    useState('forward');
    useEffect(() => {
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
                case "restart":
                    restart();
                    break;
            }
        }, delay);
        return () => clearInterval(animating);
    }, [animation]);
    return animation;
}

export { AnimatedTypography as default };
//# sourceMappingURL=index.js.map
