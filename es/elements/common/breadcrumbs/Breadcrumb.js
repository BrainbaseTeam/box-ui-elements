/**
 * 
 * @file Clickable breadcrumb component
 * @author Box
 */
import React from 'react';
import PlainButton from '../../../components/plain-button/PlainButton';
import BreadcrumbDelimiter from './BreadcrumbDelimiter';
import './Breadcrumb.scss';

var Breadcrumb = function Breadcrumb(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? '' : _ref$name,
      onClick = _ref.onClick,
      isLast = _ref.isLast,
      delimiter = _ref.delimiter;
  var title = onClick ? React.createElement(PlainButton, {
    onClick: onClick,
    type: "button",
    className: "bdl-Breadcrumb-title"
  }, name) : React.createElement("div", {
    className: "bdl-Breadcrumb-title"
  }, name);
  return React.createElement("span", {
    className: "be-breadcrumb"
  }, title, isLast ? null : React.createElement(BreadcrumbDelimiter, {
    delimiter: delimiter
  }));
};

export default Breadcrumb;
//# sourceMappingURL=Breadcrumb.js.map