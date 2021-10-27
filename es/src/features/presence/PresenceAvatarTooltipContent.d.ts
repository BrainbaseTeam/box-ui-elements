import React from 'react';
import { WrappedComponentProps } from 'react-intl';
import './PresenceAvatarTooltipContent.scss';
export declare type Props = {
    name: string;
    interactedAt: number;
    interactionType: string;
    isActive?: boolean;
} & WrappedComponentProps;
declare function PresenceAvatarTooltipContent({ name, interactedAt, interactionType, intl, isActive }: Props): JSX.Element;
export { PresenceAvatarTooltipContent as PresenceAvatarTooltipContentComponent };
declare const _default: React.ForwardRefExoticComponent<Pick<Props, "name" | "interactedAt" | "interactionType" | "isActive"> & {
    forwardedRef?: ((instance: any) => void) | React.RefObject<any> | null | undefined;
} & React.RefAttributes<any>> & {
    WrappedComponent: React.ComponentType<Props>;
};
export default _default;
