type typeOptions = "restart" | "undo";
declare function AnimatedTypography({ text, delay, type }: {
    text: string;
    delay: number;
    type: typeOptions;
}): string;

export { AnimatedTypography as default };
