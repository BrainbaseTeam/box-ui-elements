import * as React from 'react';
import classNames from 'classnames';
import './QuickSearchMessage.scss';

var QuickSearchMessage = function QuickSearchMessage(_ref) {
  var children = _ref.children,
      isShown = _ref.isShown;
  var className = classNames('overlay-wrapper', {
    'is-visible': isShown
  }, 'quick-search-message');
  return React.createElement("div", {
    className: className
  }, React.createElement("p", {
    className: "overlay"
  }, children));
};

QuickSearchMessage.defaultProps = {
  isShown: false
};
export default QuickSearchMessage;
//# sourceMappingURL=QuickSearchMessage.js.map