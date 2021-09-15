var _positions;

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
import uniqueId from 'lodash/uniqueId';
import getProp from 'lodash/get';
import TetherComponent from 'react-tether';
import TetherPosition from '../../common/tether-positions';
import IconClose from '../../icon/fill/X16';
import PlainButton from '../plain-button';
import './Tooltip.scss';
export var TooltipTheme;

(function (TooltipTheme) {
  TooltipTheme["CALLOUT"] = "callout";
  TooltipTheme["DEFAULT"] = "default";
  TooltipTheme["ERROR"] = "error";
})(TooltipTheme || (TooltipTheme = {}));

export var TooltipPosition;

(function (TooltipPosition) {
  TooltipPosition["BOTTOM_CENTER"] = "bottom-center";
  TooltipPosition["BOTTOM_LEFT"] = "bottom-left";
  TooltipPosition["BOTTOM_RIGHT"] = "bottom-right";
  TooltipPosition["MIDDLE_LEFT"] = "middle-left";
  TooltipPosition["MIDDLE_RIGHT"] = "middle-right";
  TooltipPosition["TOP_CENTER"] = "top-center";
  TooltipPosition["TOP_LEFT"] = "top-left";
  TooltipPosition["TOP_RIGHT"] = "top-right";
})(TooltipPosition || (TooltipPosition = {}));

var positions = (_positions = {}, _defineProperty(_positions, TooltipPosition.BOTTOM_CENTER, {
  attachment: TetherPosition.TOP_CENTER,
  targetAttachment: TetherPosition.BOTTOM_CENTER
}), _defineProperty(_positions, TooltipPosition.BOTTOM_LEFT, {
  attachment: TetherPosition.TOP_RIGHT,
  targetAttachment: TetherPosition.BOTTOM_RIGHT
}), _defineProperty(_positions, TooltipPosition.BOTTOM_RIGHT, {
  attachment: TetherPosition.TOP_LEFT,
  targetAttachment: TetherPosition.BOTTOM_LEFT
}), _defineProperty(_positions, TooltipPosition.MIDDLE_LEFT, {
  attachment: TetherPosition.MIDDLE_RIGHT,
  targetAttachment: TetherPosition.MIDDLE_LEFT
}), _defineProperty(_positions, TooltipPosition.MIDDLE_RIGHT, {
  attachment: TetherPosition.MIDDLE_LEFT,
  targetAttachment: TetherPosition.MIDDLE_RIGHT
}), _defineProperty(_positions, TooltipPosition.TOP_CENTER, {
  attachment: TetherPosition.BOTTOM_CENTER,
  targetAttachment: TetherPosition.TOP_CENTER
}), _defineProperty(_positions, TooltipPosition.TOP_LEFT, {
  attachment: TetherPosition.BOTTOM_RIGHT,
  targetAttachment: TetherPosition.TOP_RIGHT
}), _defineProperty(_positions, TooltipPosition.TOP_RIGHT, {
  attachment: TetherPosition.BOTTOM_LEFT,
  targetAttachment: TetherPosition.TOP_LEFT
}), _positions);

var Tooltip =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip(props) {
    var _this;

    _classCallCheck(this, Tooltip);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "tooltipID", uniqueId('tooltip'));

    _defineProperty(_assertThisInitialized(_this), "tetherRef", React.createRef());

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
      var children = _this.props.children;
      var handler = children.props[type];

      if (handler) {
        handler(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTooltipEvent", function (event) {
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
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

    _defineProperty(_assertThisInitialized(_this), "isControlled", function () {
      var isShownProp = _this.props.isShown;
      return typeof isShownProp !== 'undefined';
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      if (event.key === 'Escape') {
        _this.setState({
          isShown: false
        });
      }

      _this.fireChildEvent('onKeyDown', event);
    });

    _defineProperty(_assertThisInitialized(_this), "isShown", function () {
      var isShownProp = _this.props.isShown;

      var isControlled = _this.isControlled();

      var isShown = isControlled ? isShownProp : _this.state.isShown;
      var showTooltip = isShown && !_this.state.wasClosedByUser && _this.state.hasRendered;
      return showTooltip;
    });

    _this.state = {
      isShown: !!props.isShown,
      hasRendered: false,
      wasClosedByUser: false
    };
    return _this;
  }

  _createClass(Tooltip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        hasRendered: true
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Reset wasClosedByUser state when isShown transitions from false to true
      if (this.isControlled()) {
        if (!prevProps.isShown && this.props.isShown) {
          this.setState({
            wasClosedByUser: false
          });
        }
      }
    }
  }, {
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
          offset = _this$props.offset,
          _this$props$position = _this$props.position,
          position = _this$props$position === void 0 ? TooltipPosition.TOP_CENTER : _this$props$position,
          showCloseButton = _this$props.showCloseButton,
          stopBubble = _this$props.stopBubble,
          tetherElementClassName = _this$props.tetherElementClassName,
          text = _this$props.text,
          theme = _this$props.theme;
      var childAriaLabel = getProp(children, 'props.aria-label');
      var isLabelMatchingTooltipText = !!childAriaLabel && childAriaLabel === text; // If the tooltip is disabled just render the children

      if (isDisabled) {
        return React.Children.only(children);
      }

      var isControlled = this.isControlled();
      var showTooltip = this.isShown();
      var withCloseButton = showCloseButton && isControlled;
      var tetherPosition = typeof position === 'string' ? positions[position] : position;
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
        if (!isLabelMatchingTooltipText || childAriaLabel === undefined) {
          componentProps['aria-describedby'] = this.tooltipID;
        }

        if (theme === TooltipTheme.ERROR) {
          componentProps['aria-errormessage'] = this.tooltipID;
        }
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
      var classes = classNames('tooltip', 'bdl-Tooltip', className, {
        'is-callout': theme === TooltipTheme.CALLOUT,
        'is-error': theme === TooltipTheme.ERROR,
        'with-close-button': withCloseButton
      });
      var tetherProps = {
        attachment: tetherPosition.attachment,
        bodyElement: bodyEl,
        classPrefix: 'tooltip',
        constraints: constraints,
        enabled: showTooltip,
        targetAttachment: tetherPosition.targetAttachment
      };

      if (tetherElementClassName) {
        tetherProps.className = tetherElementClassName;
      }

      if (offset) {
        tetherProps.offset = offset;
      }

      var tooltipInner = React.createElement(React.Fragment, null, text, withCloseButton && React.createElement(PlainButton, {
        className: "tooltip-close-button",
        onClick: this.closeTooltip
      }, React.createElement(IconClose, {
        className: "bdl-Tooltip-iconClose",
        width: 14,
        height: 14
      })));
      var tooltip = stopBubble ? React.createElement("div", {
        className: classes,
        id: this.tooltipID,
        role: "presentation",
        onClick: this.handleTooltipEvent,
        onContextMenu: this.handleTooltipEvent,
        onKeyPress: this.handleTooltipEvent
      }, React.createElement("div", {
        role: theme === TooltipTheme.ERROR ? undefined : 'tooltip',
        "aria-live": "polite",
        "aria-hidden": isLabelMatchingTooltipText,
        "data-testid": "bdl-Tooltip"
      }, tooltipInner)) : React.createElement("div", {
        className: classes,
        "data-testid": "bdl-Tooltip",
        id: this.tooltipID,
        "aria-live": "polite",
        "aria-hidden": isLabelMatchingTooltipText,
        role: theme === TooltipTheme.ERROR ? undefined : 'tooltip'
      }, tooltipInner);
      return React.createElement(TetherComponent, _extends({
        ref: this.tetherRef
      }, tetherProps), React.cloneElement(React.Children.only(children), componentProps), showTooltip && tooltip);
    }
  }]);

  return Tooltip;
}(React.Component);

_defineProperty(Tooltip, "defaultProps", {
  constrainToScrollParent: false,
  constrainToWindow: true,
  isDisabled: false,
  position: TooltipPosition.TOP_CENTER,
  theme: TooltipTheme.DEFAULT
});

export default Tooltip;
//# sourceMappingURL=Tooltip.js.map