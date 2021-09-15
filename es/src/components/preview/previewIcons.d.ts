import { SVGProps } from '../accessible-svg/AccessibleSVG';
declare type Icon = (props: SVGProps) => JSX.Element;
export declare const getColor: (extension?: string | undefined) => string;
export declare const getIcon: (extension?: string | undefined) => Icon;
export {};
