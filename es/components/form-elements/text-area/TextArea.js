function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
import TextAreaCore from '../../text-area';
import * as messages from '../input-messages';
import FormInput from '../form/FormInput';

var TextArea =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TextArea, _React$Component);

  function TextArea(props) {
    var _this;

    _classCallCheck(this, TextArea);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextArea).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onChange", function (_ref) {
      var currentTarget = _ref.currentTarget;
      var value = currentTarget.value;

      if (_this.state.error) {
        _this.setState({
          value: value
        }, _this.checkValidity);
      } else {
        _this.setState({
          value: value
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onValidityStateUpdateHandler", function (error) {
      if (error.valid !== undefined) {
        _this.setErrorFromValidityState(error);
      } else {
        _this.setState({
          error: error
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "checkValidity", function () {
      var _this$props = _this.props,
          isRequired = _this$props.isRequired,
          validation = _this$props.validation;

      var _assertThisInitialize = _assertThisInitialized(_this),
          textarea = _assertThisInitialize.textarea;

      if (!textarea) {
        return;
      }

      if (validation && (isRequired || textarea.value.trim().length)) {
        var error = validation(textarea.value);

        _this.setState({
          error: error,
          value: textarea.value
        });

        if (error) {
          textarea.setCustomValidity(error.code);
        } else {
          textarea.setCustomValidity('');
        }
      } else {
        _this.setErrorFromValidityState(textarea.validity);
      }
    });

    _this.state = {
      error: null,
      value: props.value
    };
    return _this;
  }

  _createClass(TextArea, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref2) {
      var prevValue = _ref2.value;

      // If a new value is passed by prop, set it
      if (prevValue !== this.props.value) {
        this.setState({
          value: this.props.value
        });
      }
    }
  }, {
    key: "setErrorFromValidityState",
    value: function setErrorFromValidityState(validityState) {
      var badInput = validityState.badInput,
          customError = validityState.customError,
          tooLong = validityState.tooLong,
          valid = validityState.valid,
          valueMissing = validityState.valueMissing;
      var _this$props2 = this.props,
          isRequired = _this$props2.isRequired,
          maxLength = _this$props2.maxLength,
          validation = _this$props2.validation;
      var value = this.state.value;
      var error;

      if (valid) {
        error = null;
      } else if (badInput) {
        error = messages.badInput();
      } else if (tooLong && typeof maxLength !== 'undefined') {
        error = messages.tooLong(maxLength);
      } else if (valueMissing) {
        error = messages.valueMissing();
      } else if (customError && (isRequired || value.trim().length) && validation) {
        error = validation(value);
      }

      this.setState({
        error: error
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          autoFocus = _this$props3.autoFocus,
          _this$props3$classNam = _this$props3.className,
          className = _this$props3$classNam === void 0 ? '' : _this$props3$classNam,
          isDisabled = _this$props3.isDisabled,
          isReadOnly = _this$props3.isReadOnly,
          isRequired = _this$props3.isRequired,
          isResizable = _this$props3.isResizable,
          label = _this$props3.label,
          name = _this$props3.name,
          placeholder = _this$props3.placeholder;
      var _this$state = this.state,
          error = _this$state.error,
          value = _this$state.value;
      return React.createElement("div", {
        className: className
      }, React.createElement(FormInput, {
        name: name,
        onValidityStateUpdate: this.onValidityStateUpdateHandler
      }, React.createElement(TextAreaCore, {
        autoFocus: autoFocus,
        disabled: isDisabled,
        error: error ? error.message : null,
        label: label,
        isRequired: isRequired,
        isResizable: isResizable,
        name: name,
        onBlur: this.checkValidity,
        onChange: this.onChange,
        placeholder: placeholder,
        readOnly: isReadOnly,
        textareaRef: function textareaRef(textarea) {
          _this2.textarea = textarea;
        },
        value: value
      })));
    }
  }]);

  return TextArea;
}(React.Component);

_defineProperty(TextArea, "defaultProps", {
  autoFocus: false,
  value: '',
  isReadOnly: false
});

export default TextArea;
//# sourceMappingURL=TextArea.js.map