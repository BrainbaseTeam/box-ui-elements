function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import classNames from 'classnames';
import omit from 'lodash/omit';
import AnimateHeight from 'react-animate-height'; // @ts-ignore flow import

import { RESIN_TAG_TARGET } from '../../common/variables';
import IconCaretDown from '../../icons/general/IconCaretDown';
import PlainButton from '../plain-button';
import { ButtonType } from '../button';
import { bdlGray50 } from '../../styles/variables';
import './Collapsible.scss';

var Collapsible =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Collapsible, _React$PureComponent);

  function Collapsible(props) {
    var _this;

    _classCallCheck(this, Collapsible);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Collapsible).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggleVisibility", function () {
      var _this$props = _this.props,
          onOpen = _this$props.onOpen,
          onClose = _this$props.onClose;

      _this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      }, function () {
        var isOpen = _this.state.isOpen;

        if (isOpen && onOpen) {
          onOpen(_assertThisInitialized(_this));
        } else if (!isOpen && onClose) {
          onClose(_assertThisInitialized(_this));
        }
      });
    });

    _this.state = {
      isOpen: props.isOpen
    };
    return _this;
  }

  _createClass(Collapsible, [{
    key: "render",
    value: function render() {
      var isOpen = this.state.isOpen;
      var _this$props2 = this.props,
          animationDuration = _this$props2.animationDuration,
          _this$props2$buttonPr = _this$props2.buttonProps,
          buttonProps = _this$props2$buttonPr === void 0 ? {} : _this$props2$buttonPr,
          children = _this$props2.children,
          className = _this$props2.className,
          isBordered = _this$props2.isBordered,
          hasStickyHeader = _this$props2.hasStickyHeader,
          headerActionItems = _this$props2.headerActionItems,
          title = _this$props2.title;
      var sectionClassName = classNames('collapsible-card', {
        'is-open': isOpen
      }, {
        'is-bordered': isBordered
      }, className);
      var resinTagTarget = RESIN_TAG_TARGET;
      var modifiedButtonProps = omit(buttonProps, [resinTagTarget]);
      var interactionTarget = buttonProps[resinTagTarget];
      var buttonClassName = hasStickyHeader ? 'collapsible-card-header has-sticky-header' : 'collapsible-card-header';

      if (interactionTarget) {
        modifiedButtonProps[resinTagTarget] = "".concat(interactionTarget).concat(isOpen ? 'collapse' : 'expand');
      }

      return React.createElement("div", {
        className: sectionClassName
      }, React.createElement("div", {
        className: buttonClassName
      }, React.createElement(PlainButton, _extends({}, modifiedButtonProps, {
        className: "collapsible-card-title",
        onClick: this.toggleVisibility,
        type: ButtonType.BUTTON
      }), title, React.createElement(IconCaretDown, {
        className: "collapsible-card-header-caret",
        color: bdlGray50,
        width: 8
      })), !!headerActionItems && React.createElement("span", {
        className: "bdl-Collapsible-actionItems"
      }, headerActionItems)), React.createElement(AnimateHeight, {
        duration: animationDuration,
        height: isOpen ? 'auto' : 0
      }, React.createElement("div", {
        className: "collapsible-card-content"
      }, children)));
    }
  }]);

  return Collapsible;
}(React.PureComponent);

_defineProperty(Collapsible, "defaultProps", {
  buttonProps: {},
  className: '',
  isOpen: true,
  animationDuration: 100
});

export default Collapsible;
//# sourceMappingURL=Collapsible.js.map