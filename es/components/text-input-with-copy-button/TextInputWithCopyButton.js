function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
import { FormattedMessage } from 'react-intl';
import messages from '../../common/messages';
import TextInput from '../text-input';
import Button from '../button';
import './TextInputWithCopyButton.scss';
var DEFAULT_SUCCESS_STATE_DURATION = 3000;
var defaultCopyText = React.createElement(FormattedMessage, messages.copy);
var defaultCopiedText = React.createElement(FormattedMessage, messages.copied);

var TextInputWithCopyButton =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(TextInputWithCopyButton, _React$PureComponent);

  function TextInputWithCopyButton(props) {
    var _this;

    _classCallCheck(this, TextInputWithCopyButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextInputWithCopyButton).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "copySelectedText", function () {
      return document.execCommand('copy');
    });

    _defineProperty(_assertThisInitialized(_this), "restoreCopyButton", function () {
      _this.setState({
        copySuccess: false,
        buttonText: _this.props.buttonDefaultText
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCopyButtonClick", function () {
      _this.performAutofocus();

      _this.copySelectedText();

      _this.animateCopyButton();
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
      if (_this.copyInputRef) {
        _this.performAutofocus();
      }

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleCopyEvent", function (event) {
      _this.animateCopyButton();

      var onCopySuccess = _this.props.onCopySuccess;

      if (onCopySuccess) {
        onCopySuccess(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "performAutofocus", function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
          copyInputRef = _assertThisInitialize.copyInputRef;

      if (copyInputRef) {
        copyInputRef.select();
        copyInputRef.scrollLeft = 0;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderCopyButton", function () {
      return _this.isCopyCommandSupported ? React.createElement(Button, _extends({
        isDisabled: _this.props.disabled,
        onClick: _this.handleCopyButtonClick,
        type: "button"
      }, _this.props.buttonProps), _this.state.buttonText) : null;
    });

    _this.isCopyCommandSupported = document.queryCommandSupported('copy');
    _this.state = {
      copySuccess: false,
      buttonText: props.buttonDefaultText,
      hasFocused: false
    };
    return _this;
  }

  _createClass(TextInputWithCopyButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          autofocus = _this$props.autofocus,
          value = _this$props.value;

      if (autofocus && value) {
        this.performAutofocus();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props2 = this.props,
          autofocus = _this$props2.autofocus,
          value = _this$props2.value,
          triggerCopyOnLoad = _this$props2.triggerCopyOnLoad;
      var _this$state = this.state,
          copySuccess = _this$state.copySuccess,
          hasFocused = _this$state.hasFocused; // if we've set focus before, and should auto focus on update, make sure to
      // focus after component update

      if (autofocus && value) {
        this.performAutofocus();
      }

      if (triggerCopyOnLoad && !copySuccess && !hasFocused) {
        this.animateCopyButton();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearCopySuccessTimeout();
    }
  }, {
    key: "animateCopyButton",
    value: function animateCopyButton() {
      var _this2 = this;

      var _this$props3 = this.props,
          successStateDuration = _this$props3.successStateDuration,
          buttonSuccessText = _this$props3.buttonSuccessText;
      this.clearCopySuccessTimeout();
      this.setState({
        copySuccess: true,
        buttonText: buttonSuccessText,
        hasFocused: true
      }, function () {
        _this2.copySuccessTimeout = setTimeout(function () {
          _this2.restoreCopyButton();
        }, successStateDuration);
      });
    }
  }, {
    key: "clearCopySuccessTimeout",
    value: function clearCopySuccessTimeout() {
      if (!this.copySuccessTimeout) {
        return;
      }

      clearTimeout(this.copySuccessTimeout);
      this.copySuccessTimeout = null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props4 = this.props,
          className = _this$props4.className,
          rest = _objectWithoutProperties(_this$props4, ["className"]);

      var copySuccess = this.state.copySuccess;
      var isCopyCommandSupported = this.isCopyCommandSupported;
      var inputProps = omit(rest, ['autofocus', 'buttonDefaultText', 'buttonSuccessText', 'buttonProps', 'onCopySuccess', 'successStateDuration', 'triggerCopyOnLoad']);

      if (isCopyCommandSupported) {
        inputProps.inputRef = function (ref) {
          _this3.copyInputRef = ref;
        };
      }

      var wrapperClasses = classNames(className, {
        'copy-success': copySuccess,
        'text-input-with-copy-button-container': isCopyCommandSupported
      });
      var copyEvent = isCopyCommandSupported ? {
        onCopy: this.handleCopyEvent
      } : {};
      return React.createElement("div", _extends({
        className: wrapperClasses
      }, copyEvent), React.createElement(TextInput, _extends({}, inputProps, {
        onFocus: this.handleFocus
      })), this.renderCopyButton());
    }
  }]);

  return TextInputWithCopyButton;
}(React.PureComponent);

_defineProperty(TextInputWithCopyButton, "defaultProps", {
  buttonDefaultText: defaultCopyText,
  buttonProps: {},
  buttonSuccessText: defaultCopiedText,
  className: '',
  hideOptionalLabel: true,
  readOnly: true,
  successStateDuration: DEFAULT_SUCCESS_STATE_DURATION,
  type: 'text'
});

export default TextInputWithCopyButton;
//# sourceMappingURL=TextInputWithCopyButton.js.map