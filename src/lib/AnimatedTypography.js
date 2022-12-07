import { useEffect, useState } from "react";

export default function AnimatedTypography({ text, delay = 550, type = 'restart' }) {

    const [animation, setAnimation] = useState('');
    const [direction, setDirection] = useState('forward')

    useEffect(() => {

        const restart = () => {
            if (animation === text) {
                setAnimation('')
            } else {
                setAnimation(animation + text[animation.length])
            }
        };

        const animating = setInterval(() => {
            switch (type) {
                case "restart":
                    restart()
                    break;
                default:
                    break;
            }
        }, delay)

        return () => clearInterval(animating)
    }, [animation])

    return (
        <>
            {animation}
        </>
    )

}