/**
 * @flow strict
 * @file Function to render the checkbox or radio table cell
 * @author Box
 */

import React from 'react';
import Checkbox from '../../components/checkbox';

export default (
    onItemPick: (rowData: BoxItem) => {},
): (({ rowData: BoxItem }) => {}) => ({ rowData }: { rowData: BoxItem }) => {
    const { name = '', picked = false } = rowData;

    return (
        <Checkbox
            hideLabel
            label={name}
            name={name}
            onChange={() => onItemPick(rowData)}
            value={name}
            isChecked={picked}
        />
    );
};
