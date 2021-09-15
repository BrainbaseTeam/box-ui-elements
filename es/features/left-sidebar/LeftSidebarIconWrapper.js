import * as React from 'react';
import classNames from 'classnames';
import './styles/LeftSidebarIconWrapper.scss';

var LeftSidebarIconWrapper = function LeftSidebarIconWrapper(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  return React.createElement("span", {
    className: classNames('left-sidebar-icon-wrapper', className)
  }, children);
};

export default LeftSidebarIconWrapper;
//# sourceMappingURL=LeftSidebarIconWrapper.js.map