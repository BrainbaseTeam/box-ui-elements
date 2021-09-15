import * as React from 'react';
import Tooltip from '../tooltip';
import Button from '../button';
import './GuideTooltip.scss';
declare type TooltipProps = Omit<JSX.LibraryManagedAttributes<typeof Tooltip, Tooltip['props']>, 'text' | 'theme'>;
declare type Props = TooltipProps & {
    body: React.ReactNode;
    title?: React.ReactNode;
    /** 32px x 32px */
    icon?: React.ReactNode;
    /** displays guide progress e.g. 1 of 4 */
    steps?: [number, number];
    primaryButtonProps?: JSX.LibraryManagedAttributes<typeof Button, Button['props']>;
    secondaryButtonProps?: JSX.LibraryManagedAttributes<typeof Button, Button['props']>;
};
declare function GuideTooltip({ body, children, className, icon, isShown, primaryButtonProps, steps, secondaryButtonProps, showCloseButton, title, ...rest }: Props): JSX.Element;
export default GuideTooltip;
