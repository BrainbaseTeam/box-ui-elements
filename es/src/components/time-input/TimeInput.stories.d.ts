import * as React from 'react';
export declare const required: () => JSX.Element;
export declare const optional: () => JSX.Element;
declare const _default: {
    title: string;
    component: React.ForwardRefExoticComponent<Pick<import("./TimeInput").TimeInputProps, "className" | "label" | "onError" | "onBlur" | "onChange" | "hideLabel" | "errorTooltipPosition" | "isRequired" | "initialDate" | "innerRef"> & {
        forwardedRef?: ((instance: any) => void) | React.RefObject<any> | null | undefined;
    } & React.RefAttributes<any>> & {
        WrappedComponent: React.ComponentType<import("./TimeInput").TimeInputProps>;
    };
};
export default _default;
