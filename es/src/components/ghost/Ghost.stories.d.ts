export declare const regular: () => JSX.Element;
export declare const withoutAnimation: () => JSX.Element;
export declare const circle: () => JSX.Element;
export declare const rectangle: () => JSX.Element;
export declare const pill: () => JSX.Element;
export declare const complicatedLayout: () => JSX.Element;
declare const _default: {
    title: string;
    component: ({ isAnimated, className, height, width, borderRadius, style, ...rest }: {
        borderRadius?: string | number | undefined;
        className?: string | undefined;
        height?: string | number | undefined;
        isAnimated?: boolean | undefined;
        style?: {} | undefined;
        width?: string | number | undefined;
    }) => JSX.Element;
    parameters: {
        notes: string;
    };
};
export default _default;
