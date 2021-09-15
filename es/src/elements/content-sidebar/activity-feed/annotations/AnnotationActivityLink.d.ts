import * as React from 'react';
import { MessageDescriptor, WrappedComponentProps } from 'react-intl';
import './AnnotationActivityLink.scss';
declare type MessageDescriptorWithValues = {
    values?: Record<string, number>;
} & MessageDescriptor;
export interface AnnotationActivityLinkProps extends WrappedComponentProps {
    className?: string;
    id: string;
    isDisabled: boolean;
    message: MessageDescriptorWithValues;
    onClick: (id: string) => void;
}
declare const AnnotationActivityLink: ({ className, id, intl, isDisabled, message, onClick, ...rest }: AnnotationActivityLinkProps) => JSX.Element;
export { AnnotationActivityLink as AnnotationActivityLinkBase };
declare const _default: React.ForwardRefExoticComponent<Pick<AnnotationActivityLinkProps, "className" | "id" | "isDisabled" | "onClick" | "message"> & {
    forwardedRef?: ((instance: any) => void) | React.RefObject<any> | null | undefined;
} & React.RefAttributes<any>> & {
    WrappedComponent: React.ComponentType<AnnotationActivityLinkProps>;
};
export default _default;
