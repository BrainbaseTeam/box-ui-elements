/**
 * 
 * @file Component for the details for the item name
 * @author Box
 */
import React from 'react';
import { InlineBreadcrumbs } from '../breadcrumbs';
import { VIEW_SEARCH, VIEW_SELECTED } from '../../../constants';
import ItemSubDetails from './ItemSubDetails';
import './ItemDetails.scss';

var ItemDetails = function ItemDetails(_ref) {
  var view = _ref.view,
      rootId = _ref.rootId,
      item = _ref.item,
      onItemClick = _ref.onItemClick;
  return /*#__PURE__*/React.createElement("div", {
    className: "be-item-details"
  }, view === VIEW_SELECTED || view === VIEW_SEARCH ? /*#__PURE__*/React.createElement(InlineBreadcrumbs, {
    item: item,
    onItemClick: onItemClick,
    rootId: rootId
  }) : /*#__PURE__*/React.createElement(ItemSubDetails, {
    item: item,
    view: view
  }));
};

export default ItemDetails;
//# sourceMappingURL=ItemDetails.js.map