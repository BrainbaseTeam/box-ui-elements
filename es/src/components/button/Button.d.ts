import * as React from 'react';
export declare enum ButtonType {
    BUTTON = "button",
    RESET = "reset",
    SUBMIT = "submit"
}
export interface ButtonProps {
    /** Child components for the button, generally localized text */
    children?: React.ReactNode;
    /** Custom class for the button */
    className: string;
    /** whether the button is disabled or not */
    isDisabled?: boolean;
    /** whether the button is loading or not */
    isLoading: boolean;
    /** whether the button is selected or not */
    isSelected?: boolean;
    /** onClick handler for the button */
    onClick?: Function;
    /** to set buttons inner ref */
    setRef?: Function;
    /** whether to show a radar */
    showRadar: boolean;
    /** type for the button */
    type: ButtonType;
}
declare class Button extends React.Component<ButtonProps> {
    btnElement: HTMLButtonElement | null;
    static defaultProps: {
        className: string;
        isLoading: boolean;
        showRadar: boolean;
        type: ButtonType;
    };
    handleClick: (event: React.SyntheticEvent<HTMLButtonElement, Event>) => void;
    render(): JSX.Element;
}
export default Button;
