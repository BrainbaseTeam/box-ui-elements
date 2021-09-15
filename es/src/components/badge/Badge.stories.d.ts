import * as React from 'react';
import { BadgeType } from './types';
export declare const regular: () => JSX.Element;
export declare const info: () => JSX.Element;
export declare const warning: () => JSX.Element;
export declare const highlight: () => JSX.Element;
export declare const error: () => JSX.Element;
export declare const alert: () => JSX.Element;
export declare const success: () => JSX.Element;
export declare const betaBadge: () => JSX.Element;
export declare const trialBadge: () => JSX.Element;
export declare const upgradeBadge: () => JSX.Element;
declare const _default: {
    title: string;
    component: ({ children, className, type, ...rest }: {
        children: React.ReactNode;
        className?: string | undefined;
        type?: BadgeType | undefined;
    }) => JSX.Element;
    parameters: {
        notes: string;
    };
};
export default _default;
