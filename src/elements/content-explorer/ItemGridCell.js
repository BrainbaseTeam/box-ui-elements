// @flow
import * as React from 'react';
import Checkbox from '../../components/checkbox';
import ItemGridThumbnail from './ItemGridThumbnail';
import MoreOptions from './MoreOptions';
import Name from '../common/item/Name';
import type { ItemGridProps } from './flowTypes';
import './ItemGridCell.scss';

type Props = {
    item: BoxItem,
    ...$Exact<ItemGridProps>,
};

const ItemGridCell = ({
    canPreview,
    isSmall,
    isTouch,
    item,
    onItemClick,
    onItemSelect,
    onItemPick,
    rootId,
    view,
    ...rest
}: Props) => {
    const { name = '', picked = false } = item;

    return (
        <figure className="bce-ItemGridCell">
            <ItemGridThumbnail item={item} />
            <figcaption className="bce-ItemGridCell-figcaption">
                <Name
                    canPreview={canPreview}
                    isTouch={isTouch}
                    item={item}
                    onItemClick={onItemClick}
                    onItemSelect={onItemSelect}
                    rootId={rootId}
                    showDetails
                    view={view}
                />
                <MoreOptions canPreview={canPreview} isSmall item={item} onItemSelect={onItemSelect} {...rest} />
                <Checkbox
                    hideLabel
                    label={name}
                    name={name}
                    onChange={() => onItemPick(item)}
                    value={name}
                    isChecked={picked}
                />
            </figcaption>
        </figure>
    );
};
export default ItemGridCell;
