function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import Checkbox from '../../components/checkbox';
import ItemGridThumbnail from './ItemGridThumbnail';
import MoreOptions from './MoreOptions';
import Name from '../common/item/Name';
import './ItemGridCell.scss';

var ItemGridCell = function ItemGridCell(_ref) {
  var canPreview = _ref.canPreview,
      isSmall = _ref.isSmall,
      isTouch = _ref.isTouch,
      item = _ref.item,
      onItemClick = _ref.onItemClick,
      onItemSelect = _ref.onItemSelect,
      onItemPick = _ref.onItemPick,
      rootId = _ref.rootId,
      view = _ref.view,
      rest = _objectWithoutProperties(_ref, ["canPreview", "isSmall", "isTouch", "item", "onItemClick", "onItemSelect", "onItemPick", "rootId", "view"]);

  var _item$name = item.name,
      name = _item$name === void 0 ? '' : _item$name,
      _item$picked = item.picked,
      picked = _item$picked === void 0 ? false : _item$picked;
  return /*#__PURE__*/React.createElement("figure", {
    className: "bce-ItemGridCell"
  }, /*#__PURE__*/React.createElement(ItemGridThumbnail, {
    item: item
  }), /*#__PURE__*/React.createElement("figcaption", {
    className: "bce-ItemGridCell-figcaption"
  }, /*#__PURE__*/React.createElement(Name, {
    canPreview: canPreview,
    isTouch: isTouch,
    item: item,
    onItemClick: onItemClick,
    onItemSelect: onItemSelect,
    rootId: rootId,
    showDetails: true,
    view: view
  }), /*#__PURE__*/React.createElement(MoreOptions, _extends({
    canPreview: canPreview,
    isSmall: true,
    item: item,
    onItemSelect: onItemSelect
  }, rest)), /*#__PURE__*/React.createElement(Checkbox, {
    hideLabel: true,
    label: name,
    name: name,
    onChange: function onChange() {
      return onItemPick(item);
    },
    value: name,
    isChecked: picked
  })));
};

export default ItemGridCell;
//# sourceMappingURL=ItemGridCell.js.map