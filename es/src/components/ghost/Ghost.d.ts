import './Ghost.scss';
declare type Dimension = string | number;
declare type Props = {
    /** style.borderRadius */
    borderRadius?: Dimension;
    /** classnames in addition to .bdl-Ghost */
    className?: string;
    /** style.height */
    height?: Dimension;
    /** Set to false to remove animated background effect */
    isAnimated?: boolean;
    /** inline styles merged with height/width/radius options */
    style?: {};
    /** style.width */
    width?: Dimension;
};
declare const Ghost: ({ isAnimated, className, height, width, borderRadius, style, ...rest }: Props) => JSX.Element;
export default Ghost;
