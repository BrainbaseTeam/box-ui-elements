function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Preview sidebar content component
 * @author Box
 */
import * as React from 'react';
import classNames from 'classnames';
import './SidebarContent.scss';

var SidebarContent = function SidebarContent(_ref) {
  var actions = _ref.actions,
      children = _ref.children,
      className = _ref.className,
      title = _ref.title,
      elementId = _ref.elementId,
      sidebarView = _ref.sidebarView,
      rest = _objectWithoutProperties(_ref, ["actions", "children", "className", "title", "elementId", "sidebarView"]);

  var label = "".concat(elementId).concat(elementId === '' ? '' : '_').concat(sidebarView);
  var id = "".concat(label, "-content");
  return React.createElement("div", _extends({
    "aria-labelledby": label,
    className: classNames('bcs-content', className),
    "data-testid": "bcs-content",
    id: id,
    role: "tabpanel"
  }, rest), React.createElement("div", {
    className: "bcs-content-header"
  }, React.createElement("h3", {
    className: "bcs-title"
  }, title), actions), React.createElement("div", {
    className: "bcs-scroll-content-wrapper"
  }, React.createElement("div", {
    className: "bcs-scroll-content"
  }, children)));
};

SidebarContent.defaultProps = {
  elementId: '',
  sidebarView: ''
};
export default SidebarContent;
//# sourceMappingURL=SidebarContent.js.map