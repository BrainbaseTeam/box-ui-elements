function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import * as React from 'react';
import { injectIntl } from 'react-intl';
import { MenuLinkItem } from '../menu';
import EllipsisCrumb from './EllipsisCrumb';
import Crumb from './Crumb';
import messages from './messages';
import './Breadcrumb.scss';

var constructChildren = function constructChildren(children, threshold) {
  var dotDotDotItems = children.slice(1, children.length + 1 - threshold);
  var menuCrumbsItems = /*#__PURE__*/React.createElement(EllipsisCrumb, null, dotDotDotItems.reverse().map(function (crumb, index) {
    return /*#__PURE__*/React.createElement(MenuLinkItem, {
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
    return /*#__PURE__*/React.createElement(Crumb, {
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
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": intl.formatMessage(messages.breadcrumbLabel),
    className: "breadcrumbs ".concat(className)
  }, /*#__PURE__*/React.createElement("ol", null, renderBreadcrumbs(React.Children.toArray(children), threshold)));
};

export { Breadcrumb as BreadcrumbCore };
export default injectIntl(Breadcrumb);
//# sourceMappingURL=Breadcrumb.js.map