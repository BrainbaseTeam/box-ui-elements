import * as React from 'react';
import { SVGProps } from '../../components/accessible-svg/AccessibleSVG';
declare const itemIconTable: {
    audio: (props: SVGProps) => JSX.Element;
    bookmark: (props: SVGProps) => JSX.Element;
    boxnote: (props: SVGProps) => JSX.Element;
    code: (props: SVGProps) => JSX.Element;
    default: (props: SVGProps) => JSX.Element;
    document: (props: SVGProps) => JSX.Element;
    dwg: (props: SVGProps) => JSX.Element;
    'excel-spreadsheet': (props: SVGProps) => JSX.Element;
    'folder-collab': (props: SVGProps) => JSX.Element;
    'folder-external': (props: SVGProps) => JSX.Element;
    'folder-plain': (props: SVGProps) => JSX.Element;
    'google-docs': (props: SVGProps) => JSX.Element;
    'google-sheets': (props: SVGProps) => JSX.Element;
    'google-slides': (props: SVGProps) => JSX.Element;
    illustrator: (props: SVGProps) => JSX.Element;
    image: (props: SVGProps) => JSX.Element;
    indesign: (props: SVGProps) => JSX.Element;
    keynote: (props: SVGProps) => JSX.Element;
    numbers: (props: SVGProps) => JSX.Element;
    pages: (props: SVGProps) => JSX.Element;
    pdf: (props: SVGProps) => JSX.Element;
    photoshop: (props: SVGProps) => JSX.Element;
    'powerpoint-presentation': (props: SVGProps) => JSX.Element;
    presentation: (props: SVGProps) => JSX.Element;
    spreadsheet: (props: SVGProps) => JSX.Element;
    text: (props: SVGProps) => JSX.Element;
    threed: (props: SVGProps) => JSX.Element;
    vector: (props: SVGProps) => JSX.Element;
    video: (props: SVGProps) => JSX.Element;
    'word-document': (props: SVGProps) => JSX.Element;
    zip: (props: SVGProps) => JSX.Element;
};
export interface ItemIconProps {
    /** Additional class name */
    className?: string;
    /** Dimension of the icon. Defaults to 32x32 */
    dimension?: number;
    /** Type of item icon, defaults to the default icon if icon type is not recognized */
    iconType: keyof typeof itemIconTable | string;
    /** A text-only string describing the icon if it's not purely decorative for accessibility */
    title?: string | React.ReactNode;
}
declare const ItemIcon: ({ className, dimension, iconType, title }: ItemIconProps) => JSX.Element;
export default ItemIcon;
