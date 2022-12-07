'use strict';

var react = require('react');

function AnimatedTypography({ text, delay = 550, type = 'restart' }) {
    const [animation, setAnimation] = react.useState('');
    react.useState('forward');
    react.useEffect(() => {
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

module.exports = AnimatedTypography;
//# sourceMappingURL=index.js.map
