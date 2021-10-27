/// <reference types="react" />
import { SVGProps } from '../accessible-svg/AccessibleSVG';
declare type Config = {
    color: string;
    icon: Icon;
};
declare type Icon = (props: SVGProps) => JSX.Element;
export declare const getColor: (extension?: string | undefined) => Config['color'];
export declare const getIcon: (extension?: string | undefined) => Config['icon'];
export {};
