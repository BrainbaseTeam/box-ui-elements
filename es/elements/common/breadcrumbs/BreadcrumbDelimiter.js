/**
 * 
 * @file Clickable breadcrumb component
 * @author Box
 */
import React from 'react';
import IconChevron from '../../../icons/general/IconChevron';
import { DELIMITER_CARET, COLOR_999 } from '../../../constants';

var BreadcrumbDelimiter = function BreadcrumbDelimiter(_ref) {
  var delimiter = _ref.delimiter;
  return delimiter === DELIMITER_CARET ? React.createElement(IconChevron, {
    className: "be-breadcrumb-seperator",
    color: COLOR_999,
    direction: "right",
    size: "7px"
  }) : React.createElement("span", null, "/");
};

export default BreadcrumbDelimiter;
//# sourceMappingURL=BreadcrumbDelimiter.js.map