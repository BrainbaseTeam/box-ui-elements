import PropTypes from 'prop-types';
import React from 'react';
import PlainButton from '../../../components/plain-button';
import IconChevron from '../../../icons/general/IconChevron';
import ItemTypes from '../item-types';
import { ItemTypePropType } from '../prop-types';
var ITEM_LIST_NAME_CLASS = 'item-list-name';

var ItemListName = function ItemListName(_ref) {
  var type = _ref.type,
      name = _ref.name,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      _ref$isSelected = _ref.isSelected,
      isSelected = _ref$isSelected === void 0 ? false : _ref$isSelected,
      onClick = _ref.onClick,
      linkRenderer = _ref.linkRenderer;
  var isFolder = type === ItemTypes.FOLDER;
  var linkProps = {
    className: "lnk ".concat(ITEM_LIST_NAME_CLASS),
    onClick: onClick,
    children: [React.createElement("span", {
      key: "name"
    }, name), React.createElement(IconChevron, {
      key: "icon",
      color: isSelected ? '#447991' : '#333',
      direction: "right",
      size: "4px",
      thickness: "1px"
    })]
  };

  var renderLink = function renderLink() {
    return linkRenderer ? linkRenderer(linkProps) : React.createElement(PlainButton, linkProps);
  };

  return React.createElement("div", {
    className: "item-list-name-container"
  }, isFolder ? renderLink() : React.createElement("span", {
    className: ITEM_LIST_NAME_CLASS
  }, name), !!label && React.createElement("span", {
    className: "item-list-name-label"
  }, label));
};

ItemListName.propTypes = {
  type: ItemTypePropType,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  linkRenderer: PropTypes.func
};
export default ItemListName;
//# sourceMappingURL=ItemListName.js.map