import * as React from 'react';
import classNames from 'classnames';

var Crumb = function Crumb(_ref) {
  var children = _ref.children,
      className = _ref.className,
      isLastCrumb = _ref.isLastCrumb;
  var classes = classNames('breadcrumb-item', className, {
    'breadcrumb-item-last': isLastCrumb
  });
  return React.createElement("li", {
    className: classes
  }, children);
};

export default Crumb;
//# sourceMappingURL=Crumb.js.map