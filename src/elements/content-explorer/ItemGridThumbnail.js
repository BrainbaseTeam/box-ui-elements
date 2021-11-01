// @flow
import * as React from 'react';
import { getIcon } from '../common/item/iconCellRenderer';
import type { BoxItem } from '../../common/types/core';
import './ItemGridThumbnail.scss';

type Props = {
    item: BoxItem,
};

const ItemGridThumbnail = ({ item }: Props) => {
    const customThumbnailUrl = item.metadata?.enterprise_261189234?.customThumbnail?.url;

    return (
        <div className="bce-ItemGridThumbnail">
            {customThumbnailUrl ? (
                <div
                    className="bce-ItemGridThumbnail-item"
                    style={{
                        width: '100%',
                        height: '100%',
                        background: `url("${customThumbnailUrl}") center center / cover no-repeat`,
                    }}
                />
            ) : (
                <div className="bce-ItemGridThumbnail-item">{getIcon(128, item)}</div>
            )}
        </div>
    );
};
export default ItemGridThumbnail;
