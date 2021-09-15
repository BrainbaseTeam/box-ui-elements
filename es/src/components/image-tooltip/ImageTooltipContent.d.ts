import * as React from 'react';
import './ImageTooltipContent.scss';
declare type OnImageLoad = () => void;
export declare type ImageTooltipContentProps = {
    /** A React component representing the image used in the visual tooltip */
    children: React.ReactElement;
    /** A string to be used in the tooltip's paragraph content */
    content: string;
    /** A callback triggered onLoad for the image element */
    onImageLoad: OnImageLoad;
    /** A string to be used in the tooltip's title heading */
    title: string;
};
declare const ImageTooltipContent: ({ children, content, onImageLoad, title }: ImageTooltipContentProps) => JSX.Element;
export default ImageTooltipContent;
