import * as React from 'react';
import { SVGProps } from '../../components/accessible-svg/AccessibleSVG';
export interface AccessibleSVGIconProps extends SVGProps {
    'aria-labelledby'?: string;
    focusable?: boolean | 'false' | 'true' | 'auto' | undefined;
    opacity?: number;
}
declare class AccessibleSVG extends React.Component<AccessibleSVGIconProps> {
    id: string;
    render(): JSX.Element;
}
export default AccessibleSVG;
