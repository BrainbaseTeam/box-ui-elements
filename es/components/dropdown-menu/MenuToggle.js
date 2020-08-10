import * as React from 'react';
import IconCaretDown from '../../icons/general/IconCaretDown';
import './MenuToggle.scss';

var MenuToggle = function MenuToggle(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("span", {
    className: "menu-toggle"
  }, children, /*#__PURE__*/React.createElement(IconCaretDown, {
    className: "toggle-arrow",
    width: 7
  }));
};

export default MenuToggle;
//# sourceMappingURL=MenuToggle.js.map