function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import * as React from 'react';
import { injectIntl } from 'react-intl';
import { MenuLinkItem } from '../menu';
import EllipsisCrumb from './EllipsisCrumb';
import Crumb from './Crumb';
import messages from './messages';
import './Breadcrumb.scss';

var constructChildren = function constructChildren(children, threshold) {
  var dotDotDotItems = children.slice(1, children.length + 1 - threshold);
  var menuCrumbsItems = React.createElement(EllipsisCrumb, null, dotDotDotItems.reverse().map(function (crumb, index) {
    return React.createElement(MenuLinkItem, {
      key: index
    }, crumb);
  }));
  return [].concat(_toConsumableArray(children.slice(0, 1)), [menuCrumbsItems], _toConsumableArray(children.slice(1 - threshold)));
};

var renderBreadcrumbs = function renderBreadcrumbs(children, threshold) {
  var newChildren = children;
  var length = children.length;
  var hasEllipsis = false;

  if (length > threshold) {
    newChildren = constructChildren(children, threshold);
    length = newChildren.length;
    hasEllipsis = true;
  }

  return React.Children.map(newChildren, function (item, i) {
    var isLastCrumb = length === 0 || i === length - 1;
    return React.createElement(Crumb, {
      className: hasEllipsis && i === 1 ? 'no-shrink' : undefined,
      isLastCrumb: isLastCrumb
    }, item);
  });
};

var Breadcrumb = function Breadcrumb(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      intl = _ref.intl,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === void 0 ? 4 : _ref$threshold,
      children = _ref.children;
  return React.createElement("nav", {
    "aria-label": intl.formatMessage(messages.breadcrumbLabel),
    className: "breadcrumbs ".concat(className)
  }, React.createElement("ol", null, renderBreadcrumbs(React.Children.toArray(children), threshold)));
};

export { Breadcrumb as BreadcrumbCore };
export default injectIntl(Breadcrumb);
//# sourceMappingURL=Breadcrumb.js.map