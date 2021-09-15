function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import classNames from 'classnames';
import { Flyout, Overlay } from '../../components/flyout';
import ScrollWrapper from '../../components/scroll-wrapper';
import './styles/HeaderFlyout.scss';

var HeaderFlyout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HeaderFlyout, _React$Component);

  function HeaderFlyout() {
    _classCallCheck(this, HeaderFlyout);

    return _possibleConstructorReturn(this, _getPrototypeOf(HeaderFlyout).apply(this, arguments));
  }

  _createClass(HeaderFlyout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          header = _this$props.header,
          footer = _this$props.footer,
          flyoutButton = _this$props.flyoutButton,
          children = _this$props.children,
          scrollRefFn = _this$props.scrollRefFn,
          className = _this$props.className,
          rest = _objectWithoutProperties(_this$props, ["header", "footer", "flyoutButton", "children", "scrollRefFn", "className"]);

      return React.createElement(Flyout, _extends({
        closeOnClick: false,
        offset: HeaderFlyout.panelOffset,
        className: classNames('header-flyout', className),
        constrainToWindow: true
      }, rest), flyoutButton, React.createElement(Overlay, {
        className: "header-flyout-overlay"
      }, React.createElement("div", {
        className: "header-flyout-list-container"
      }, header && React.createElement("div", {
        className: "flyout-list-container-title"
      }, React.createElement("h4", {
        className: "flyout-list-title"
      }, header)), React.createElement("div", {
        className: classNames('flyout-list-container-body', {
          'with-header': !!header,
          'with-footer': !!footer
        })
      }, children != null && React.createElement(ScrollWrapper, {
        scrollRefFn: scrollRefFn,
        shadowSize: "contain"
      }, children)), footer && React.createElement("div", {
        className: "flyout-list-container-footer"
      }, footer))));
    }
  }]);

  return HeaderFlyout;
}(React.Component);

_defineProperty(HeaderFlyout, "panelOffset", '-4px 0px');

_defineProperty(HeaderFlyout, "defaultProps", {
  position: 'bottom-left'
});

export default HeaderFlyout;
//# sourceMappingURL=HeaderFlyout.js.map