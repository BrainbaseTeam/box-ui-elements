/**
 * @flow
 * @file Function to render the date table cell
 * @author Box
 */

import React from 'react';
import Checkbox from '../../components/checkbox';
import MoreOptions from './MoreOptions';
import type { BoxItem } from '../../common/types/core';
import { PERMISSION_CAN_DOWNLOAD } from '../../constants';

export default (
    canPreview: boolean,
    canShare: boolean,
    canDownload: boolean,
    canDelete: boolean,
    canRename: boolean,
    onItemSelect: Function,
    onItemDelete: Function,
    onItemDownload: Function,
    onItemPick: Function,
    onItemRename: Function,
    onItemShare: Function,
    onItemPreview: Function,
    onItemCustomShare: Function,
    onItemMoveTo: Function,
    onItemCopy: Function,
    onItemSetThumbnail: Function,
    onItemRemoveThumbnail: Function,
    isSmall: boolean,
) => ({ rowData }: { rowData: BoxItem }) => {
    const { name = '', picked = false, permissions } = rowData;
    const allowDownload = permissions[PERMISSION_CAN_DOWNLOAD];

    return (
    <div className="bce-item-coloumn-moreoptions-wrapper">
        <MoreOptions
            canPreview={canPreview}
            canShare={canShare}
            canDownload={canDownload}
            canDelete={canDelete}
            canRename={canRename}
            onItemSelect={onItemSelect}
            onItemDelete={onItemDelete}
            onItemDownload={onItemDownload}
            onItemRename={onItemRename}
            onItemShare={onItemShare}
            onItemPreview={onItemPreview}
            onItemCustomShare={onItemCustomShare}
            onItemMoveTo={onItemMoveTo}
            onItemCopy={onItemCopy}
            onItemSetThumbnail={onItemSetThumbnail}
            onItemRemoveThumbnail={onItemRemoveThumbnail}
            isSmall={isSmall}
            item={rowData}
        />
        { allowDownload && (
            <Checkbox
                hideLabel
                label={name}
                name={name}
                onChange={() => onItemPick(rowData)}
                value={name}
                isChecked={picked}
            />
        )}
    </div>
)};
