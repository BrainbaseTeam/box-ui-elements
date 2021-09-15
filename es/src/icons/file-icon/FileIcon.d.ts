import * as React from 'react';
interface FileIconProps {
    /** Dimension of the icon. */
    dimension?: number;
    /** Extension of file to display icon for. Defaults to generic icon */
    extension?: string;
    /** A text-only string describing the icon if it's not purely decorative for accessibility */
    title?: string | React.ReactElement<string>;
}
declare const FileIcon: ({ dimension, extension, title }: FileIconProps) => JSX.Element;
export default FileIcon;
