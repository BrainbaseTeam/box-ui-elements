import React from 'react';
import ItemName from './ItemName';
import ItemDetails from './ItemDetails';
import { VIEW_SEARCH } from '../../../constants';
import './NameCell.scss';

var Name = function Name(_ref) {
  var _ref$canPreview = _ref.canPreview,
      canPreview = _ref$canPreview === void 0 ? false : _ref$canPreview,
      _ref$isTouch = _ref.isTouch,
      isTouch = _ref$isTouch === void 0 ? false : _ref$isTouch,
      item = _ref.item,
      onItemClick = _ref.onItemClick,
      onItemSelect = _ref.onItemSelect,
      _ref$showDetails = _ref.showDetails,
      showDetails = _ref$showDetails === void 0 ? true : _ref$showDetails,
      rootId = _ref.rootId,
      view = _ref.view;
  return React.createElement("div", {
    className: "be-item-name"
  }, React.createElement(ItemName, {
    canPreview: canPreview,
    isTouch: isTouch,
    item: item,
    onClick: onItemClick,
    onFocus: onItemSelect
  }), view === VIEW_SEARCH || showDetails ? React.createElement(ItemDetails, {
    item: item,
    onItemClick: onItemClick,
    rootId: rootId,
    view: view
  }) : null);
};

export default Name;
//# sourceMappingURL=Name.js.map