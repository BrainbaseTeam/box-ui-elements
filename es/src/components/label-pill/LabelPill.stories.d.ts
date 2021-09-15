import * as React from 'react';
export declare const withText: () => JSX.Element;
export declare const withIcon: () => JSX.Element;
export declare const withBoth: () => JSX.Element;
export declare const severalComponents: () => JSX.Element;
declare const _default: {
    title: string;
    subcomponents: {
        'LabelPill.Pill': React.ForwardRefExoticComponent<import("./LabelPill").LabelPillProps & React.RefAttributes<HTMLSpanElement>>;
        'LabelPill.Text': ({ children, className, ...rest }: import("./LabelPillText").LabelPillTextProps) => JSX.Element;
        'LabePill.Icon': ({ Component, className, ...rest }: import("./LabelPillIcon").LabelPillIconProps) => JSX.Element;
    };
    parameters: {
        notes: string;
    };
};
export default _default;
