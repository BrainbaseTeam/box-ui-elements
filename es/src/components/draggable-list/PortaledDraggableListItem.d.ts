import * as React from 'react';
export interface PortaledDraggableListItemProps {
    children: React.ReactElement;
    className?: string;
    id: string;
    index: number;
    isDraggableViaHandle?: boolean;
}
declare const PortaledDraggableListItem: ({ children, className, id, index, isDraggableViaHandle, }: PortaledDraggableListItemProps) => JSX.Element;
export default PortaledDraggableListItem;
