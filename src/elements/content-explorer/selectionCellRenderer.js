/**
 * @flow strict
 * @file Function to render the checkbox or radio table cell
 * @author Box
 */

import React from 'react';
import Checkbox from '../../components/checkbox';
import { PERMISSION_CAN_DOWNLOAD } from '../../constants';

export default (
    onItemPick: (rowData: BoxItem) => {},
): (({ rowData: BoxItem }) => {}) => ({ rowData }: { rowData: BoxItem }) => {
    const { name = '', picked = false, permissions } = rowData;
    const allowDownload = permissions[PERMISSION_CAN_DOWNLOAD];

    return (
        <div>
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
    );
};
