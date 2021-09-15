function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import classNames from 'classnames';
import omit from 'lodash/omit';

var MenuLinkItem = function MenuLinkItem(_ref) {
  var children = _ref.children,
      _ref$isSelected = _ref.isSelected,
      isSelected = _ref$isSelected === void 0 ? false : _ref$isSelected,
      _ref$isSelectItem = _ref.isSelectItem,
      isSelectItem = _ref$isSelectItem === void 0 ? false : _ref$isSelectItem,
      rest = _objectWithoutProperties(_ref, ["children", "isSelected", "isSelectItem"]);

  var linkEl = React.Children.only(children);
  var listItemProps = omit(rest, ['role', 'tabIndex']);
  listItemProps.role = 'none';
  var linkProps = {
    className: classNames('menu-item', linkEl ? linkEl.props.className : '', {
      'is-select-item': isSelectItem,
      'is-selected': isSelected
    }),
    role: isSelectItem ? 'menuitemradio' : 'menuitem',
    tabIndex: -1
  };

  if (isSelectItem) {
    linkProps['aria-checked'] = isSelected;
  }

  return React.createElement("li", listItemProps, React.cloneElement(linkEl, linkProps));
};

export default MenuLinkItem;
//# sourceMappingURL=MenuLinkItem.js.map