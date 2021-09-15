import React from 'react';
import './PreviewLoadingRing.scss';
export declare type Props = React.PropsWithChildren<{
    className?: string;
    color?: string;
    theme?: 'light' | 'dark';
}>;
export default function PreviewLoadingRing({ children, className, color, theme }: Props): React.ReactElement;
