import * as React from 'react';
export interface HiddenLabelProps {
    /** Child for the label */
    children: React.ReactElement;
    /** Text content of the label */
    labelContent: React.ReactNode;
}
declare const HiddenLabel: ({ children, labelContent }: HiddenLabelProps) => JSX.Element;
export default HiddenLabel;
