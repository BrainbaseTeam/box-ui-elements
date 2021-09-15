function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import MenuLinkItem from './MenuLinkItem';

var SelectMenuLinkItem = function SelectMenuLinkItem(props) {
  return React.createElement(MenuLinkItem, _extends({
    isSelectItem: true
  }, props));
};

export default SelectMenuLinkItem;
//# sourceMappingURL=SelectMenuLinkItem.js.map