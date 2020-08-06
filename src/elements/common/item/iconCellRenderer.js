/**
 * @flow
 * @file Function to render the icon table cell
 * @author Box
 */

import React from 'react';
import FileIcon from '../../../icons/file-icon/FileIcon';
import FolderIcon from '../../../icons/folder-icon/FolderIcon';
import BookmarkIcon from '../../../icons/bookmark-icon/BookmarkIcon';
import { TYPE_FOLDER, TYPE_FILE, TYPE_WEBLINK } from '../../../constants';

import './IconCell.scss';

export function getIcon(dimension: number, rowData: BoxItem) {
    const { type, extension, has_collaborations, is_externally_owned }: BoxItem = rowData;
    const thumbnail_url = rowData?.metadata?.enterprise_261189234?.customThumbnail?.url;

    switch (type) {
        case TYPE_FOLDER:
            return <FolderIcon dimension={dimension} isCollab={has_collaborations} isExternal={is_externally_owned} thumbnailUrl={thumbnail_url} />;
        case TYPE_FILE:
            return <FileIcon dimension={dimension} extension={extension} />;
        case TYPE_WEBLINK:
            return <BookmarkIcon height={dimension} width={dimension} />;
        default:
            throw new Error('Unsupported item type!');
    }
}

export default (dimension: number = 32): Function => ({ rowData }: { rowData: BoxItem }) => (
    <div className="be-item-icon">{getIcon(dimension, rowData)}</div>
);
