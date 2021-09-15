import * as React from 'react';
export interface StandardLabelProps {
    /** Child for the label */
    children: React.ReactElement;
    /** Text content of the label */
    labelContent: React.ReactNode;
    /** Optional tooltip text for the label */
    tooltip?: React.ReactNode;
}
declare const StandardLabel: ({ children, labelContent, tooltip }: StandardLabelProps) => JSX.Element;
export default StandardLabel;
