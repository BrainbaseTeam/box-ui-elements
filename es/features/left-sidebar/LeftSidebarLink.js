function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import * as React from 'react';
import classNames from 'classnames';
import LinkBase from '../../components/link/LinkBase';
import Tooltip from '../../components/tooltip';
import LeftSidebarLinkCallout from './LeftSidebarLinkCallout';
import RemoveButton from './RemoveButton';
import './styles/LeftSidebarLink.scss';

var LeftSidebarLink =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LeftSidebarLink, _React$Component);

  function LeftSidebarLink(props) {
    var _this;

    _classCallCheck(this, LeftSidebarLink);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LeftSidebarLink).call(this, props));
    _this.state = {
      isTextOverflowed: false
    };
    return _this;
  }

  _createClass(LeftSidebarLink, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.leftSidebarLinkText) {
        return;
      }

      var _this$leftSidebarLink = this.leftSidebarLinkText,
          offsetWidth = _this$leftSidebarLink.offsetWidth,
          scrollWidth = _this$leftSidebarLink.scrollWidth;

      if (offsetWidth < scrollWidth) {
        // eslint-disable-next-line react/no-did-mount-set-state
        this.setState({
          isTextOverflowed: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          callout = _this$props.callout,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          _this$props$customThe = _this$props.customTheme,
          customTheme = _this$props$customThe === void 0 ? {} : _this$props$customThe,
          _this$props$htmlAttri = _this$props.htmlAttributes,
          htmlAttributes = _this$props$htmlAttri === void 0 ? {} : _this$props$htmlAttri,
          icon = _this$props.icon,
          _this$props$isScrolli = _this$props.isScrolling,
          isScrolling = _this$props$isScrolli === void 0 ? false : _this$props$isScrolli,
          message = _this$props.message,
          newItemBadge = _this$props.newItemBadge,
          onClickRemove = _this$props.onClickRemove,
          _this$props$removeBut = _this$props.removeButtonHtmlAttributes,
          removeButtonHtmlAttributes = _this$props$removeBut === void 0 ? {} : _this$props$removeBut,
          RouterLink = _this$props.routerLink,
          _this$props$routerPro = _this$props.routerProps,
          routerProps = _this$props$routerPro === void 0 ? {} : _this$props$routerPro,
          _this$props$selected = _this$props.selected,
          selected = _this$props$selected === void 0 ? false : _this$props$selected,
          _this$props$showToolt = _this$props.showTooltip,
          showTooltip = _this$props$showToolt === void 0 ? true : _this$props$showToolt;
      var secondaryColor = customTheme.secondaryColor;
      var LinkComponent = RouterLink || LinkBase;
      var routerLinkProps = RouterLink ? routerProps : {};
      var linkComponent = React.createElement(LinkComponent, _extends({
        className: className
      }, htmlAttributes, routerLinkProps, {
        style: selected && customTheme ? {
          boxShadow: secondaryColor ? "inset 2px 0 0 ".concat(secondaryColor) : undefined
        } : {}
      }), icon, React.createElement("span", {
        ref: function ref(leftSidebarLinkText) {
          _this2.leftSidebarLinkText = leftSidebarLinkText;
        },
        className: "left-sidebar-link-text"
      }, message), newItemBadge);
      var component = linkComponent;

      if (callout) {
        component = React.createElement(LeftSidebarLinkCallout, {
          callout: callout
        }, linkComponent);
      } else if (showTooltip) {
        component = React.createElement(Tooltip, {
          className: classNames('nav-link-tooltip', {
            'is-visible': this.state.isTextOverflowed && !isScrolling
          }),
          isTabbable: false,
          position: "middle-right",
          text: message
        }, linkComponent);
      }

      return onClickRemove ? React.createElement("div", {
        className: "left-sidebar-removeable-link-container"
      }, component, React.createElement(RemoveButton, {
        onClickRemove: onClickRemove,
        removeButtonHtmlAttributes: removeButtonHtmlAttributes
      })) : component;
    }
  }]);

  return LeftSidebarLink;
}(React.Component);

export default LeftSidebarLink;
//# sourceMappingURL=LeftSidebarLink.js.map