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

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import serialize from 'form-serialize';

function getFormValidityState(form) {
  // Turn the form.elements HTMLCollection into Array before reducing
  return [].slice.call(form.elements).reduce(function (validityObj, inputEl) {
    // Only serialize inputs that have a name defined
    if (inputEl.name && !inputEl.validity.valid) {
      var validityState = inputEl.validity;

      if (inputEl.validity.customError) {
        // If the input is displaying a custom error,
        // we expose the errorCode stored in the validationMessage
        validityState.customErrorCode = inputEl.validationMessage;
      }

      validityObj[inputEl.name] = {
        validityState: validityState
      };
      return validityObj;
    }

    return validityObj;
  }, {});
}

var Form =
/*#__PURE__*/
function (_Component) {
  _inherits(Form, _Component);

  function Form(props) {
    var _this;

    _classCallCheck(this, Form);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Form).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onChange", function (_ref) {
      var currentTarget = _ref.currentTarget;

      if (_this.props.onChange) {
        var formData = serialize(currentTarget, {
          hash: true,
          empty: true
        });

        _this.props.onChange(formData);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (event) {
      var form = event.target;
      event.preventDefault();
      var isValid = form.checkValidity();
      var _this$props = _this.props,
          onInvalidSubmit = _this$props.onInvalidSubmit,
          onValidSubmit = _this$props.onValidSubmit;
      var registeredInputs = _this.state.registeredInputs;

      if (isValid) {
        var formData = serialize(form, {
          hash: true,
          empty: true
        });
        onValidSubmit(formData);
      } else {
        var formValidityState = getFormValidityState(form); // Push form validity state to inputs so errors are shown on submit

        Object.keys(formValidityState).forEach(function (key) {
          return registeredInputs[key] && registeredInputs[key](formValidityState[key].validityState);
        });

        if (onInvalidSubmit) {
          onInvalidSubmit(formValidityState);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "registerInput", function (name, setValidityStateHandler) {
      var registeredInputs = _this.state.registeredInputs;

      if (registeredInputs[name]) {
        throw new Error("Input '".concat(name, "' is already registered."));
      }

      var nextState = _this.state;
      nextState.registeredInputs[name] = setValidityStateHandler;

      _this.setState(nextState);
    });

    _defineProperty(_assertThisInitialized(_this), "unregisterInput", function (name) {
      var nextState = _this.state;
      delete nextState.registeredInputs[name];

      _this.setState(nextState);
    });

    _this.state = {
      registeredInputs: {}
    };
    return _this;
  }

  _createClass(Form, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        form: {
          registerInput: this.registerInput.bind(this),
          unregisterInput: this.unregisterInput.bind(this)
        }
      };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref2) {
      var prevFormValidityState = _ref2.formValidityState;
      var formValidityState = this.props.formValidityState;
      var registeredInputs = this.state.registeredInputs;

      if (formValidityState !== prevFormValidityState) {
        Object.keys(formValidityState).forEach(function (key) {
          if (registeredInputs[key]) {
            registeredInputs[key](formValidityState[key]);
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return React.createElement("form", {
        noValidate: true,
        onChange: this.onChange,
        onSubmit: this.onSubmit
      }, children);
    }
  }]);

  return Form;
}(Component);

_defineProperty(Form, "propTypes", {
  children: PropTypes.node,

  /** Called when an input in the form changes */
  onChange: PropTypes.func,

  /** Called when a valid submit is made */
  onValidSubmit: PropTypes.func.isRequired,

  /** Called when an invalid submit is made */
  onInvalidSubmit: PropTypes.func,

  /** An object mapping input names to error messages */
  formValidityState: PropTypes.object // eslint-disable-line react/no-unused-prop-types

});

_defineProperty(Form, "childContextTypes", {
  form: PropTypes.shape({
    registerInput: PropTypes.func.isRequired,
    unregisterInput: PropTypes.func.isRequired
  }).isRequired
});

export default Form;
//# sourceMappingURL=Form.js.map