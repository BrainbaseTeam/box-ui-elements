function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _positions;

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
import TetherComponent from 'react-tether';
import uniqueId from 'lodash/uniqueId';
import './Flyout.scss';
var BOTTOM_CENTER = 'bottom-center';
var BOTTOM_LEFT = 'bottom-left';
var BOTTOM_RIGHT = 'bottom-right';
var MIDDLE_LEFT = 'middle-left';
var MIDDLE_RIGHT = 'middle-right';
var TOP_CENTER = 'top-center';
var TOP_LEFT = 'top-left';
var TOP_RIGHT = 'top-right';
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
/**
 * Checks if there is a clickable ancestor or self
 * @param {Node} rootNode The base node we should stop at
 * @param {Node} targetNode The target node of the event
 * @returns {boolean}
 */

var hasClickableAncestor = function hasClickableAncestor(rootNode, targetNode) {
  // Check if the element or any of the ancestors are click-able (stopping at the component boundary)
  var currentNode = targetNode;

  while (currentNode && currentNode instanceof Node && currentNode.parentNode && currentNode !== rootNode) {
    var nodeName = currentNode.nodeName.toUpperCase();

    if (nodeName === 'A' || nodeName === 'BUTTON') {
      return true;
    }

    currentNode = currentNode.parentNode;
  }

  return false;
};
/**
 * Checks if the target element is inside an element with the given CSS class.
 * @param {HTMLElement} targetEl The target element
 * @param {string} className A CSS class on the element to check for
 */


var hasClassAncestor = function hasClassAncestor(targetEl, className) {
  var el = targetEl;

  while (el && el instanceof HTMLElement) {
    if (el.classList.contains(className)) {
      return true;
    }

    el = el.parentNode;
  }

  return false;
};

var Flyout = /*#__PURE__*/function (_React$Component) {
  _inherits(Flyout, _React$Component);

  var _super = _createSuper(Flyout);

  function Flyout(props) {
    var _this;

    _classCallCheck(this, Flyout);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleOverlayClick", function (event) {
      var overlayNode = document.getElementById(_this.overlayID);
      var _this$props = _this.props,
          closeOnClick = _this$props.closeOnClick,
          closeOnClickPredicate = _this$props.closeOnClickPredicate;

      if (!closeOnClick || !hasClickableAncestor(overlayNode, event.target)) {
        return;
      }

      if (closeOnClickPredicate && !closeOnClickPredicate(event)) {
        return;
      }

      _this.handleOverlayClose();
    });

    _defineProperty(_assertThisInitialized(_this), "handleButtonClick", function (event) {
      var isVisible = _this.state.isVisible;

      if (isVisible) {
        _this.closeOverlay();
      } else {
        _this.openOverlay();
      } // If button was clicked, the detail field should hold number of clicks.
      // If number is zero, the event was synthesized.
      // https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail


      var isButtonClicked = event.detail > 0;

      _this.setState({
        isButtonClicked: isButtonClicked
      });

      event.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "handleButtonHover", function () {
      var _this$props2 = _this.props,
          openOnHover = _this$props2.openOnHover,
          openOnHoverDelayTimeout = _this$props2.openOnHoverDelayTimeout;

      if (openOnHover) {
        clearTimeout(_this.hoverDelay);
        _this.hoverDelay = setTimeout(function () {
          _this.openOverlay();
        }, openOnHoverDelayTimeout);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleButtonHoverLeave", function () {
      var _this$props3 = _this.props,
          openOnHover = _this$props3.openOnHover,
          openOnHoverDelayTimeout = _this$props3.openOnHoverDelayTimeout;

      if (openOnHover) {
        clearTimeout(_this.hoverDelay);
        _this.hoverDelay = setTimeout(function () {
          _this.closeOverlay();
        }, openOnHoverDelayTimeout);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "openOverlay", function () {
      _this.setState({
        isVisible: true
      });

      var onOpen = _this.props.onOpen;

      if (onOpen) {
        onOpen();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "closeOverlay", function () {
      _this.setState({
        isVisible: false
      });

      var onClose = _this.props.onClose;

      if (onClose) {
        onClose();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "focusButton", function () {
      var buttonEl = document.getElementById(_this.overlayButtonID);

      if (buttonEl) {
        buttonEl.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOverlayClose", function () {
      _this.focusButton();

      _this.closeOverlay();
    });

    _defineProperty(_assertThisInitialized(_this), "handleDocumentClickOrWindowBlur", function (event) {
      var _this$props4 = _this.props,
          portaledClasses = _this$props4.portaledClasses,
          closeOnClickOutside = _this$props4.closeOnClickOutside,
          closeOnWindowBlur = _this$props4.closeOnWindowBlur;
      var isVisible = _this.state.isVisible;

      if (!isVisible || !(closeOnClickOutside || closeOnWindowBlur)) {
        return;
      }

      var overlayNode = document.getElementById(_this.overlayID);
      var buttonNode = document.getElementById(_this.overlayButtonID);
      var isInsideToggleButton = buttonNode && event.target instanceof Node && buttonNode.contains(event.target) || buttonNode === event.target;
      var isInsideOverlay = overlayNode && event.target instanceof Node && overlayNode.contains(event.target) || overlayNode === event.target;
      var isInside = isInsideToggleButton || isInsideOverlay;

      if (isInside || portaledClasses.some(function (className) {
        return hasClassAncestor(event.target, className);
      })) {
        return;
      } // Only close overlay when the click is outside of the flyout or window loses focus


      _this.closeOverlay();
    });

    _this.overlayID = uniqueId('overlay');
    _this.overlayButtonID = uniqueId('flyoutbutton');
    _this.state = {
      isVisible: props.isVisibleByDefault,
      isButtonClicked: false
    };
    return _this;
  }

  _createClass(Flyout, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (!prevState.isVisible && this.state.isVisible) {
        var _this$props5 = this.props,
            closeOnClickOutside = _this$props5.closeOnClickOutside,
            closeOnWindowBlur = _this$props5.closeOnWindowBlur; // When overlay is being opened

        if (closeOnClickOutside) {
          document.addEventListener('click', this.handleDocumentClickOrWindowBlur, true);
          document.addEventListener('contextmenu', this.handleDocumentClickOrWindowBlur, true);
        }

        if (closeOnWindowBlur) {
          window.addEventListener('blur', this.handleDocumentClickOrWindowBlur, true);
        }
      } else if (prevState.isVisible && !this.state.isVisible) {
        // When overlay is being closed
        document.removeEventListener('contextmenu', this.handleDocumentClickOrWindowBlur, true);
        document.removeEventListener('click', this.handleDocumentClickOrWindowBlur, true);
        window.removeEventListener('blur', this.handleDocumentClickOrWindowBlur, true);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.isVisible) {
        // Clean-up global click handlers
        document.removeEventListener('contextmenu', this.handleDocumentClickOrWindowBlur, true);
        document.removeEventListener('click', this.handleDocumentClickOrWindowBlur, true);
        window.removeEventListener('blur', this.handleDocumentClickOrWindowBlur, true);
      }

      if (this.props.openOnHover && this.hoverDelay) {
        clearTimeout(this.hoverDelay);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          children = _this$props6.children,
          _this$props6$classNam = _this$props6.className,
          className = _this$props6$classNam === void 0 ? '' : _this$props6$classNam,
          constrainToScrollParent = _this$props6.constrainToScrollParent,
          constrainToWindow = _this$props6.constrainToWindow,
          offset = _this$props6.offset,
          openOnHover = _this$props6.openOnHover,
          position = _this$props6.position,
          shouldDefaultFocus = _this$props6.shouldDefaultFocus;
      var _this$state = this.state,
          isButtonClicked = _this$state.isButtonClicked,
          isVisible = _this$state.isVisible;
      var elements = React.Children.toArray(children);
      var tetherPosition = positions[position];

      if (elements.length !== 2) {
        throw new Error('Flyout must have exactly two children: A button component and a <Overlay>');
      }

      var overlayButton = elements[0];
      var overlayContent = elements[1];
      var overlayButtonProps = {
        id: this.overlayButtonID,
        key: this.overlayButtonID,
        role: 'button',
        onClick: this.handleButtonClick,
        onMouseEnter: this.handleButtonHover,
        onMouseLeave: this.handleButtonHoverLeave,
        'aria-haspopup': 'true',
        'aria-expanded': isVisible ? 'true' : 'false'
      };

      if (isVisible) {
        overlayButtonProps['aria-controls'] = this.overlayID;
      }

      var overlayProps = {
        id: this.overlayID,
        key: this.overlayID,
        role: 'dialog',
        onClick: this.handleOverlayClick,
        onClose: this.handleOverlayClose,
        onMouseEnter: this.handleButtonHover,
        onMouseLeave: this.handleButtonHoverLeave,
        shouldDefaultFocus: shouldDefaultFocus || !isButtonClicked && !openOnHover,
        'aria-labelledby': this.overlayButtonID
      };
      var constraints = [];

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

      var tetherProps = {
        classPrefix: 'flyout-overlay',
        attachment: tetherPosition.attachment,
        targetAttachment: tetherPosition.targetAttachment,
        enabled: isVisible,
        classes: {
          element: "flyout-overlay ".concat(className)
        },
        constraints: constraints
      };

      if (offset) {
        tetherProps.offset = offset;
      } else {
        switch (position) {
          case BOTTOM_CENTER:
          case BOTTOM_LEFT:
          case BOTTOM_RIGHT:
            tetherProps.offset = '-10px 0';
            break;

          case TOP_CENTER:
          case TOP_LEFT:
          case TOP_RIGHT:
            tetherProps.offset = '10px 0';
            break;

          case MIDDLE_LEFT:
            tetherProps.offset = '0 10px';
            break;

          case MIDDLE_RIGHT:
            tetherProps.offset = '0 -10px';
            break;

          default: // no default

        }
      }

      return /*#__PURE__*/React.createElement(TetherComponent, tetherProps, /*#__PURE__*/React.cloneElement(overlayButton, overlayButtonProps), isVisible ? /*#__PURE__*/React.cloneElement(overlayContent, overlayProps) : null);
    }
  }]);

  return Flyout;
}(React.Component);

_defineProperty(Flyout, "defaultProps", {
  className: '',
  closeOnClick: true,
  closeOnClickOutside: true,
  closeOnWindowBlur: false,
  constrainToScrollParent: true,
  constrainToWindow: false,
  isVisibleByDefault: false,
  openOnHover: false,
  openOnHoverDelayTimeout: 300,
  portaledClasses: [],
  position: BOTTOM_RIGHT
});

export default Flyout;
//# sourceMappingURL=Flyout.js.map