var _positions;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import TetherComponent from 'react-tether';
import IconClose from '../../icons/general/IconClose';
import PlainButton from '../plain-button';
import './Tooltip.scss';
var BOTTOM_CENTER = 'bottom-center';
var BOTTOM_LEFT = 'bottom-left';
var BOTTOM_RIGHT = 'bottom-right';
var MIDDLE_LEFT = 'middle-left';
var MIDDLE_RIGHT = 'middle-right';
var TOP_CENTER = 'top-center';
var TOP_LEFT = 'top-left';
var TOP_RIGHT = 'top-right';
var CALLOUT_THEME = 'callout';
var DEFAULT_THEME = 'default';
var ERROR_THEME = 'error';
var positions = (_positions = {}, _defineProperty(_positions, BOTTOM_CENTER, {
  attachment: 'top center',
  targetAttachment: 'bottom center'
}), _defineProperty(_positions, BOTTOM_LEFT, {
  attachment: 'top right',
  targetAttachment: 'bottom right'
}), _defineProperty(_positions, BOTTOM_RIGHT, {
  attachment: 'top left',
  targetAttachment: 'bottom left'
}), _defineProperty(_positions, MIDDLE_LEFT, {
  attachment: 'middle right',
  targetAttachment: 'middle left'
}), _defineProperty(_positions, MIDDLE_RIGHT, {
  attachment: 'middle left',
  targetAttachment: 'middle right'
}), _defineProperty(_positions, TOP_CENTER, {
  attachment: 'bottom center',
  targetAttachment: 'top center'
}), _defineProperty(_positions, TOP_LEFT, {
  attachment: 'bottom right',
  targetAttachment: 'top right'
}), _defineProperty(_positions, TOP_RIGHT, {
  attachment: 'bottom left',
  targetAttachment: 'top left'
}), _positions);

var Tooltip = /*#__PURE__*/function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  var _super = _createSuper(Tooltip);

  function Tooltip(props) {
    var _this;

    _classCallCheck(this, Tooltip);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "tooltipID", uniqueId('tooltip'));

    _defineProperty(_assertThisInitialized(_this), "tetherRef", /*#__PURE__*/React.createRef());

    _defineProperty(_assertThisInitialized(_this), "position", function () {
      if (_this.tetherRef.current && _this.isShown()) {
        _this.tetherRef.current.position();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "closeTooltip", function () {
      var onDismiss = _this.props.onDismiss;

      _this.setState({
        wasClosedByUser: true
      });

      if (onDismiss) {
        onDismiss();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "fireChildEvent", function (type, event) {
      // $FlowFixMe
      var handler = _this.props.children.props[type];

      if (handler) {
        handler(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseEnter", function (event) {
      _this.setState({
        isShown: true
      });

      _this.fireChildEvent('onMouseEnter', event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseLeave", function (event) {
      _this.setState({
        isShown: false
      });

      _this.fireChildEvent('onMouseLeave', event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
      _this.setState({
        isShown: true
      });

      _this.fireChildEvent('onFocus', event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      _this.setState({
        isShown: false
      });

      _this.fireChildEvent('onBlur', event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      if (event.key === 'Escape') {
        _this.setState({
          isShown: false
        });
      }

      _this.fireChildEvent('onKeyDown', event);
    });

    _defineProperty(_assertThisInitialized(_this), "isControlled", function () {
      var isShownProp = _this.props.isShown;
      return typeof isShownProp !== 'undefined';
    });

    _defineProperty(_assertThisInitialized(_this), "isShown", function () {
      var isShownProp = _this.props.isShown;

      var isControlled = _this.isControlled();

      var isShown = isControlled ? isShownProp : _this.state.isShown;
      var showTooltip = isShown && !_this.state.wasClosedByUser;
      return showTooltip;
    });

    _this.state = {
      isShown: !!props.isShown,
      wasClosedByUser: false
    };
    return _this;
  }

  _createClass(Tooltip, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          bodyElement = _this$props.bodyElement,
          children = _this$props.children,
          className = _this$props.className,
          constrainToScrollParent = _this$props.constrainToScrollParent,
          constrainToWindow = _this$props.constrainToWindow,
          isDisabled = _this$props.isDisabled,
          _this$props$isTabbabl = _this$props.isTabbable,
          isTabbable = _this$props$isTabbabl === void 0 ? true : _this$props$isTabbabl,
          position = _this$props.position,
          showCloseButton = _this$props.showCloseButton,
          text = _this$props.text,
          theme = _this$props.theme; // If the tooltip is disabled just render the children

      if (isDisabled) {
        return React.Children.only(children);
      }

      var isControlled = this.isControlled();
      var showTooltip = this.isShown();
      var withCloseButton = showCloseButton && isControlled;
      var tetherPosition = positions[position];
      var constraints = [];
      var componentProps = {};

      if (constrainToScrollParent) {
        constraints.push({
          to: 'scrollParent',
          attachment: 'together'
        });
      }

      if (constrainToWindow) {
        constraints.push({
          to: 'window',
          attachment: 'together'
        });
      }

      if (showTooltip) {
        componentProps['aria-describedby'] = this.tooltipID;
      }

      if (!isControlled) {
        componentProps.onBlur = this.handleBlur;
        componentProps.onFocus = this.handleFocus;
        componentProps.onKeyDown = this.handleKeyDown;
        componentProps.onMouseEnter = this.handleMouseEnter;
        componentProps.onMouseLeave = this.handleMouseLeave;

        if (isTabbable) {
          componentProps.tabIndex = '0';
        }
      }

      var bodyEl = bodyElement instanceof HTMLElement ? bodyElement : document.body;
      var classes = classNames('tooltip', className, {
        'is-callout': theme === CALLOUT_THEME,
        'is-error': theme === ERROR_THEME,
        'with-close-button': withCloseButton
      });
      return /*#__PURE__*/React.createElement(TetherComponent, {
        attachment: tetherPosition.attachment,
        bodyElement: bodyEl,
        classPrefix: "tooltip",
        constraints: constraints,
        enabled: showTooltip,
        targetAttachment: tetherPosition.targetAttachment,
        ref: this.tetherRef
      }, /*#__PURE__*/React.cloneElement(React.Children.only(children), componentProps), showTooltip && /*#__PURE__*/React.createElement("div", {
        className: classes,
        id: this.tooltipID,
        role: "tooltip"
      }, text, withCloseButton && /*#__PURE__*/React.createElement(PlainButton, {
        className: "tooltip-close-button",
        onClick: this.closeTooltip
      }, /*#__PURE__*/React.createElement(IconClose, null))));
    }
  }]);

  return Tooltip;
}(React.Component);

_defineProperty(Tooltip, "defaultProps", {
  constrainToScrollParent: false,
  constrainToWindow: true,
  isDisabled: false,
  position: TOP_CENTER,
  theme: DEFAULT_THEME
});

export default Tooltip;
//# sourceMappingURL=Tooltip.js.map