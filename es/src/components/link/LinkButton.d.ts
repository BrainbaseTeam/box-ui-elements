import * as React from 'react';
import { LinkBaseProps } from './LinkBase';
export interface LinkButtonProps extends LinkBaseProps {
    children: React.ReactChild;
    className?: string;
}
declare const LinkButton: ({ className, ...rest }: LinkButtonProps) => JSX.Element;
export default LinkButton;
