import * as React from 'react';
import { LinkBaseProps } from './LinkBase';
export interface LinkPrimaryButtonProps extends LinkBaseProps {
    children: React.ReactChild;
    className?: string;
}
declare const LinkPrimaryButton: ({ className, ...rest }: LinkPrimaryButtonProps) => JSX.Element;
export default LinkPrimaryButton;
