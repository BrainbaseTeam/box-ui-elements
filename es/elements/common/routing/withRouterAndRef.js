function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { Route } from 'react-router-dom'; // Basically a workaround for the fact that react-router's withRouter cannot forward ref's through
// functional components. Use this instead to gain the benefits of withRouter but also ref forwarding

export default function withRouterAndRef(Wrapped) {
  var WithRouterAndRef = React.forwardRef(function (props, ref) {
    return React.createElement(Route, null, function (routeProps) {
      return React.createElement(Wrapped, _extends({
        ref: ref
      }, routeProps, props));
    });
  });
  var name = Wrapped.displayName || Wrapped.name || 'Component';
  WithRouterAndRef.displayName = "withRouterAndRef(".concat(name, ")");
  return WithRouterAndRef;
}
//# sourceMappingURL=withRouterAndRef.js.map