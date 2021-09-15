import * as React from 'react';
import './ButtonGroup.scss';
export interface ButtonGroupProps {
    /** A group of buttons */
    children: React.ReactNode;
    /** Class name for ButtonGroup */
    className?: string;
    /** Boolean describing whether the button is disabled or not */
    isDisabled?: boolean;
}
declare const ButtonGroup: ({ children, className, isDisabled }: ButtonGroupProps) => JSX.Element;
export default ButtonGroup;
