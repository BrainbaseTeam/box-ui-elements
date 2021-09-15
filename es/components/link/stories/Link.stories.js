function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { BrowserRouter as Router, Link as RouterLink } from 'react-router-dom';
import Link from '../Link';
import notes from './Link.stories.md';
export var basic = function basic() {
  return React.createElement(Link, {
    href: "https://www.box.com/platform"
  }, "A link");
};
export var withCustomComponent = function withCustomComponent() {
  // You can pass a custom component to be used instead of the default "a" tag, like a React Router link:
  // import { BrowserRouter as Router, Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
  var CustomRouterLink = function CustomRouterLink(_ref) {
    var href = _ref.href,
        children = _ref.children,
        rest = _objectWithoutProperties(_ref, ["href", "children"]);

    return React.createElement(RouterLink, _extends({
      to: href
    }, rest), children);
  };

  return React.createElement(Router, null, React.createElement(Link, {
    component: CustomRouterLink,
    href: "/"
  }, "A link"));
};
export default {
  title: 'Components|Links/Link',
  component: Link,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=Link.stories.js.map