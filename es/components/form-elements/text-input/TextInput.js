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
import TextInputCore from '../../text-input';
import * as messages from '../input-messages';
import FormInput from '../form/FormInput';

var TextInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TextInput, _React$Component);

  function TextInput(props) {
    var _this;

    _classCallCheck(this, TextInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextInput).call(this, props));

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
          input = _assertThisInitialize.input;

      if (!input) {
        return;
      }

      if (validation && (isRequired || input.value.trim().length)) {
        var error = validation(input.value);

        _this.setState({
          error: error,
          value: input.value
        });

        if (error) {
          input.setCustomValidity(error.code);
        } else {
          input.setCustomValidity('');
        }
      } else {
        _this.setErrorFromValidityState(input.validity);
      }
    });

    _this.state = {
      error: null,
      value: props.value
    };
    return _this;
  }

  _createClass(TextInput, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // If a new value is passed by prop, set it
      if (prevProps.value !== this.props.value) {
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
          patternMismatch = validityState.patternMismatch,
          tooLong = validityState.tooLong,
          tooShort = validityState.tooShort,
          typeMismatch = validityState.typeMismatch,
          valid = validityState.valid,
          valueMissing = validityState.valueMissing;
      var _this$props2 = this.props,
          isRequired = _this$props2.isRequired,
          minLength = _this$props2.minLength,
          maxLength = _this$props2.maxLength,
          type = _this$props2.type,
          validation = _this$props2.validation;
      var value = this.state.value;
      var error;

      if (valid) {
        error = null;
      } else if (badInput) {
        error = messages.badInput();
      } else if (patternMismatch) {
        error = messages.patternMismatch();
      } else if (tooShort && typeof minLength !== 'undefined') {
        error = messages.tooShort(minLength);
      } else if (tooLong && typeof maxLength !== 'undefined') {
        error = messages.tooLong(maxLength);
      } else if (typeMismatch && type === 'email') {
        error = messages.typeMismatchEmail();
      } else if (typeMismatch && type === 'url') {
        error = messages.typeMismatchUrl();
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
          isRequired = _this$props3.isRequired,
          label = _this$props3.label,
          maxLength = _this$props3.maxLength,
          minLength = _this$props3.minLength,
          name = _this$props3.name,
          onFocus = _this$props3.onFocus,
          pattern = _this$props3.pattern,
          placeholder = _this$props3.placeholder,
          type = _this$props3.type,
          isReadOnly = _this$props3.isReadOnly,
          isLoading = _this$props3.isLoading,
          labelTooltip = _this$props3.labelTooltip,
          hideLabel = _this$props3.hideLabel;
      var _this$state = this.state,
          error = _this$state.error,
          value = _this$state.value;
      return React.createElement("div", {
        className: className
      }, React.createElement(FormInput, {
        name: name,
        onValidityStateUpdate: this.onValidityStateUpdateHandler
      }, React.createElement(TextInputCore, {
        disabled: isDisabled,
        label: label,
        isRequired: isRequired,
        error: error ? error.message : null,
        autoFocus: autoFocus,
        maxLength: maxLength,
        minLength: minLength,
        name: name,
        onBlur: this.checkValidity,
        onFocus: onFocus,
        onChange: this.onChange,
        pattern: pattern,
        placeholder: placeholder,
        inputRef: function inputRef(input) {
          _this2.input = input;
        },
        type: type,
        value: value,
        readOnly: isReadOnly,
        isLoading: isLoading,
        labelTooltip: labelTooltip,
        hideLabel: hideLabel
      })));
    }
  }]);

  return TextInput;
}(React.Component);

_defineProperty(TextInput, "defaultProps", {
  autoFocus: false,
  value: '',
  type: 'text',
  isReadOnly: false,
  isLoading: false
});

export default TextInput;
//# sourceMappingURL=TextInput.js.map