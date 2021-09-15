import * as React from 'react';
export interface DraggableListItemProps {
    children: React.ReactElement;
    id: string;
    index: number;
    isDraggableViaHandle?: boolean;
}
declare const DraggableListItem: ({ children, id, index, isDraggableViaHandle }: DraggableListItemProps) => JSX.Element;
export default DraggableListItem;
