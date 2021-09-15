import * as React from 'react';
import TetherComponent from 'react-tether';
import './RadarAnimation.scss';
export declare enum RadarAnimationPosition {
    BOTTOM_CENTER = "bottom-center",
    BOTTOM_LEFT = "bottom-left",
    BOTTOM_RIGHT = "bottom-right",
    MIDDLE_CENTER = "middle-center",
    MIDDLE_LEFT = "middle-left",
    MIDDLE_RIGHT = "middle-right",
    TOP_CENTER = "top-center",
    TOP_LEFT = "top-left",
    TOP_RIGHT = "top-right"
}
export interface RadarAnimationProps {
    /** A React element to put the radar on */
    children: React.ReactChild;
    /** A CSS class for the radar */
    className?: string;
    /** Whether to constrain the radar to the element's scroll parent. Defaults to `false` */
    constrainToScrollParent: boolean;
    /** Whether to constrain the radar to window. Defaults to `true` */
    constrainToWindow: boolean;
    /** Forces the radar to be shown or hidden - defaults to true */
    isShown: boolean;
    /** A string of the form 'vert-offset horiz-offset' which controls positioning */
    offset?: string;
    /** Where to position the radar relative to the wrapped component */
    position: RadarAnimationPosition;
}
declare class RadarAnimation extends React.Component<RadarAnimationProps> {
    tetherRef: React.RefObject<TetherComponent>;
    radarAnimationID: string;
    static defaultProps: {
        constrainToScrollParent: boolean;
        constrainToWindow: boolean;
        isShown: boolean;
        position: RadarAnimationPosition;
    };
    position: () => void;
    render(): JSX.Element;
}
export default RadarAnimation;
