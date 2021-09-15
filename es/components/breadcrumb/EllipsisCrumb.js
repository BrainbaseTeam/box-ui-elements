import * as React from 'react';
import DropdownMenu from '../dropdown-menu';
import { Menu } from '../menu';
import PlainButton from '../plain-button';

var EllipsisCrumb = function EllipsisCrumb(_ref) {
  var children = _ref.children;
  return React.createElement(DropdownMenu, null, React.createElement(PlainButton, {
    className: "breadcrumb-toggler"
  }, "\u22EF"), React.createElement(Menu, null, children));
};

export default EllipsisCrumb;
//# sourceMappingURL=EllipsisCrumb.js.map