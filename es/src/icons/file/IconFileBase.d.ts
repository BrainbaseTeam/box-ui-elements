import * as React from 'react';
import { Icon } from '../iconTypes';
declare type Props = Icon & {
    baseClassName: string;
    children: React.ReactChild | Array<React.ReactChild>;
};
declare const IconFileBase: ({ children, className, baseClassName, height, title, width }: Props) => JSX.Element;
export default IconFileBase;
