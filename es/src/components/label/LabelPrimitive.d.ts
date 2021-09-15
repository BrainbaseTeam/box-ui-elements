import * as React from 'react';
export interface LabelPrimitiveProps {
    /** Child for the label */
    children: React.ReactElement;
    /** Custom class for the label */
    className?: string;
    /** Text content of the label */
    labelContent: React.ReactNode;
}
declare const LabelPrimitive: ({ children, className, labelContent, ...rest }: LabelPrimitiveProps) => JSX.Element;
export default LabelPrimitive;
