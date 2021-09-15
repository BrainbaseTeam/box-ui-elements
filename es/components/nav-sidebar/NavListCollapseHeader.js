function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import IconCaretDown from '../../icons/general/IconCaretDown';
import PlainButton from '../plain-button';

var NavListCollapseHeader = function NavListCollapseHeader(_ref) {
  var children = _ref.children,
      onToggleCollapse = _ref.onToggleCollapse,
      _ref$containerProps = _ref.containerProps,
      containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps;
  return React.createElement("div", _extends({
    className: "nav-list-collapse-header"
  }, containerProps), children, React.createElement(PlainButton, {
    className: "nav-list-collapse",
    onClick: onToggleCollapse,
    type: "button"
  }, React.createElement(IconCaretDown, {
    width: 8
  })));
};

export default NavListCollapseHeader;
//# sourceMappingURL=NavListCollapseHeader.js.map