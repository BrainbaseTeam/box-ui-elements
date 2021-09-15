function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
import tabbable from 'tabbable';
import omit from 'lodash/omit';
import FocusTrap from '../focus-trap';
import LoadingIndicator from '../loading-indicator';
import Portal from '../portal';
import ModalDialog from './ModalDialog';
import './Modal.scss';

var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Modal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      var _this$props = _this.props,
          isOpen = _this$props.isOpen,
          onRequestClose = _this$props.onRequestClose;

      if (isOpen && onRequestClose && event.key === 'Escape') {
        event.stopPropagation();
        onRequestClose(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onBackdropClick", function (event) {
      var _this$props2 = _this.props,
          onRequestClose = _this$props2.onRequestClose,
          onBackdropClick = _this$props2.onBackdropClick;

      if (onBackdropClick) {
        onBackdropClick(event);
      } else if (onRequestClose) {
        onRequestClose(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onModalOpen", function () {
      setTimeout(function () {
        var focusElementSelector = _this.props.focusElementSelector;
        var focusElementSelectorTrimmed = focusElementSelector && focusElementSelector.trim();

        if (focusElementSelectorTrimmed) {
          _this.focusElement(focusElementSelectorTrimmed);
        } else {
          _this.focusFirstUsefulElement();
        }
      }, 0);
    });

    _defineProperty(_assertThisInitialized(_this), "focusFirstUsefulElement", function () {
      if (!_this.dialog) {
        return;
      }

      var tabbableEls = tabbable(_this.dialog);

      if (tabbableEls.length > 1) {
        tabbableEls[1].focus();
      } else if (tabbableEls.length > 0) {
        tabbableEls[0].focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "focusElement", function (elementSelector) {
      if (!_this.dialog) {
        return;
      }

      var el = _this.dialog.querySelector(elementSelector);

      if (el) {
        el.focus();
      } else {
        throw new Error("Could not find element matching selector ".concat(elementSelector, " to focus on."));
      }
    });

    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var isOpen = this.props.isOpen;

      if (isOpen) {
        this.onModalOpen();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props3 = this.props,
          isLoading = _this$props3.isLoading,
          isOpen = _this$props3.isOpen; // Set focus if modal is transitioning from closed -> open and/or loading -> not loading

      if ((!prevProps.isOpen || prevProps.isLoading) && isOpen && !isLoading) {
        this.onModalOpen();
      }
    }
    /**
     * Call props.onRequestClose when escape is pressed
     * @param {SyntheticKeyboardEvent} event
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          className = _this$props4.className,
          isLoading = _this$props4.isLoading,
          isOpen = _this$props4.isOpen,
          onRequestClose = _this$props4.onRequestClose,
          shouldNotUsePortal = _this$props4.shouldNotUsePortal,
          style = _this$props4.style,
          rest = _objectWithoutProperties(_this$props4, ["className", "isLoading", "isOpen", "onRequestClose", "shouldNotUsePortal", "style"]);

      if (!isOpen) {
        return null;
      }

      var bodyOverrideStyle = "\n            body {\n                overflow:hidden;\n            }\n        "; // used `omit` here to prevent certain key/value pairs from going into the spread on `ModalDialog`

      var modalProps = omit(rest, ['onBackdropClick', 'focusElementSelector']);
      var WrapperComponent = shouldNotUsePortal ? 'div' : Portal; // Render a style tag to prevent body from scrolling as long as the Modal is open

      return React.createElement(WrapperComponent, {
        className: classNames('modal', className),
        onKeyDown: this.onKeyDown,
        tabIndex: "-1"
      }, React.createElement("div", {
        className: "modal-backdrop",
        onClick: this.onBackdropClick,
        style: style.backdrop
      }), React.createElement(FocusTrap, {
        className: "modal-dialog-container"
      }, isLoading ? React.createElement(LoadingIndicator, {
        size: "large"
      }) : React.createElement(ModalDialog, _extends({
        modalRef: function modalRef(modalEl) {
          // This callback gets passed through as a regular prop since
          // ModalDialog is wrapped in a HOC
          _this2.dialog = modalEl;
        },
        onRequestClose: onRequestClose,
        style: style.dialog
      }, modalProps))), React.createElement("style", {
        type: "text/css"
      }, bodyOverrideStyle));
    }
  }]);

  return Modal;
}(React.Component);

_defineProperty(Modal, "defaultProps", {
  style: {
    backdrop: {},
    dialog: {}
  }
});

export default Modal;
//# sourceMappingURL=Modal.js.map