
import { useEffect, useState } from "react";

type typeOptions = "restart" | "undo";

export default function AnimatedTypography({ text, delay = 550, type = 'restart' }: { text: string, delay: number, type: typeOptions }) {

    const [animation, setAnimation] = useState('');
    const [direction, setDirection] = useState('forward')

    useEffect(() => {

        const idle = () => {
            return text;
        }

        const undo = () => {
            if (direction === 'backward') {
                if (!animation) {
                    setDirection('forward')
                } else {
                    setAnimation(animation.slice(0, -1))
                };
            } else if (direction === 'forward') {
                if (animation === text) {
                    setDirection('backward');
                } else {
                    setAnimation(animation + text[animation.length]);
                };
            };
        };

        const restart = () => {
            if (animation === text) {
                setAnimation('')
            } else {
                setAnimation(animation + text[animation.length])
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
                default:
                    idle();
                    break;
            }
        }, delay)

        return () => clearInterval(animating)
    }, [animation, direction])

    return animation;

}