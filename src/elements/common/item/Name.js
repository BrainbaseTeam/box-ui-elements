// @flow
import React from 'react';
import ItemName from './ItemName';
import ItemDetails from './ItemDetails';
import IconTag from '../../../icons/general/IconTag';
import { VIEW_SEARCH } from '../../../constants';

import './NameCell.scss';

type Props = {
    canPreview: boolean,
    isTouch: boolean,
    item: BoxItem,
    onItemClick: (item: BoxItem | string) => void,
    onItemSelect?: (item: BoxItem, callback: Function) => void,
    rootId: string,
    showDetails: boolean,
    view: View,
};

const Name = ({
    canPreview = false,
    isTouch = false,
    item,
    onItemClick,
    onItemSelect,
    showDetails = true,
    rootId,
    view,
}: Props) => (
    <div className="be-item-name">
        <ItemName canPreview={canPreview} isTouch={isTouch} item={item} onClick={onItemClick} onFocus={onItemSelect} />
        {view === VIEW_SEARCH || showDetails ? (
            <ItemDetails item={item} onItemClick={onItemClick} rootId={rootId} view={view} />
        ) : null}
        <IconTag className="icon-tag" height={13} width={13} viewBox="0 0 13 13" />
    </div>
);
// className="ItemLabels-container"
export default Name;
