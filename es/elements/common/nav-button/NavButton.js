function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Nav Button component intended to mimic React Router's NavLink component for non-anchor elements
 * @author Box
 */
import * as React from 'react';
import classNames from 'classnames';
import { Route } from 'react-router-dom';
import PlainButton from '../../../components/plain-button';
import { isLeftClick } from '../../../utils/dom';
var NavButton = React.forwardRef(function (props, ref) {
  var _props$activeClassNam = props.activeClassName,
      activeClassName = _props$activeClassNam === void 0 ? 'bdl-is-active' : _props$activeClassNam,
      children = props.children,
      _props$className = props.className,
      className = _props$className === void 0 ? 'bdl-NavButton' : _props$className,
      _props$component = props.component,
      Component = _props$component === void 0 ? PlainButton : _props$component,
      exact = props.exact,
      isActive = props.isActive,
      _onClick = props.onClick,
      replace = props.replace,
      strict = props.strict,
      to = props.to,
      rest = _objectWithoutProperties(props, ["activeClassName", "children", "className", "component", "exact", "isActive", "onClick", "replace", "strict", "to"]);

  var path = _typeof(to) === 'object' ? to.pathname : to;
  return React.createElement(Route, {
    exact: exact,
    path: path,
    strict: strict
  }, function (_ref) {
    var history = _ref.history,
        location = _ref.location,
        match = _ref.match;
    var isActiveValue = !!(isActive ? isActive(match, location) : match);
    return React.createElement(Component, _extends({
      className: classNames(className, _defineProperty({}, activeClassName, isActiveValue)),
      onClick: function onClick(event) {
        if (_onClick) {
          _onClick(event);
        }

        if (!event.defaultPrevented && isLeftClick(event)) {
          var method = replace ? history.replace : history.push;
          method(to);
        }
      },
      ref: ref
    }, rest), children);
  });
});
export default NavButton;
//# sourceMappingURL=NavButton.js.map