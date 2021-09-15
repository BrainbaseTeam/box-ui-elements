import * as React from 'react';
import classNames from 'classnames';

var NavList = function NavList(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$collapsed = _ref.collapsed,
      collapsed = _ref$collapsed === void 0 ? false : _ref$collapsed,
      heading = _ref.heading,
      placeholder = _ref.placeholder,
      _ref$ulProps = _ref.ulProps,
      ulProps = _ref$ulProps === void 0 ? {} : _ref$ulProps;
  var classes = classNames("nav-list", className, {
    'is-collapsed': collapsed
  });
  return React.createElement("nav", {
    className: classes
  }, heading ? React.createElement("h2", null, heading) : null, placeholder, React.createElement("ul", ulProps, React.Children.map(children, function (link) {
    return link ? React.createElement("li", null, link) : null;
  })));
};

export default NavList;
//# sourceMappingURL=NavList.js.map