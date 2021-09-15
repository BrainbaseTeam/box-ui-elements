import { Component } from 'react';
import { ReorderListItem } from '../../src/components/draggable-list/draggable-list-utils/reorder';
import '../styles/DraggableListExamples.scss';
interface Props {
    isDraggableViaHandle?: boolean;
}
interface State {
    items: Array<ReorderListItem>;
    listId: string;
}
declare class DraggableListExamples extends Component<Props, State> {
    state: {
        items: never[];
        listId: string;
    };
    componentDidMount(): void;
    getItems: (count: number) => ReorderListItem[];
    onDragEnd: (sourceIndex: number, destinationIndex: number) => void;
    render(): JSX.Element;
}
export default DraggableListExamples;
