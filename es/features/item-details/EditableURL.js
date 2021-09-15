var _errorMap;

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
import { FormattedMessage, injectIntl } from 'react-intl';
import TextInput from '../../components/text-input/TextInput';
import commonMessages from '../../common/messages';
import messages from './messages';
var VALUE_MISSING = 'valueMissing';
var TYPE_MISMATCH = 'typeMismatch';
var errorMap = (_errorMap = {}, _defineProperty(_errorMap, VALUE_MISSING, React.createElement(FormattedMessage, commonMessages.requiredFieldError)), _defineProperty(_errorMap, TYPE_MISMATCH, React.createElement(FormattedMessage, commonMessages.invalidURLError)), _errorMap);

var EditableURL =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EditableURL, _React$Component);

  function EditableURL() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EditableURL);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EditableURL)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      error: '',
      value: _this.props.value
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
      if (!_this.inputEl) {
        return;
      }

      var _this$inputEl$validit = _this.inputEl.validity,
          valid = _this$inputEl$validit.valid,
          valueMissing = _this$inputEl$validit.valueMissing;

      if (!valid) {
        _this.setState({
          error: valueMissing ? VALUE_MISSING : TYPE_MISMATCH
        });

        return;
      }

      _this.props.onValidURLChange(_this.state.value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.setState({
        value: event.currentTarget.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function () {
      _this.setState({
        error: ''
      });
    });

    return _this;
  }

  _createClass(EditableURL, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var prevValue = _ref.value;
      var value = this.props.value;

      if (prevValue !== value) {
        this.setState({
          value: value
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var formatMessage = this.props.intl.formatMessage;
      var _this$state = this.state,
          error = _this$state.error,
          value = _this$state.value;
      return React.createElement(TextInput, {
        className: "url-input",
        error: error ? errorMap[error] : undefined,
        hideLabel: true,
        inputRef: function inputRef(ref) {
          _this2.inputEl = ref;
        },
        isRequired: true,
        label: formatMessage(messages.url),
        onBlur: this.handleBlur,
        onChange: this.handleChange,
        onFocus: this.handleFocus,
        placeholder: formatMessage(messages.urlPlaceholder),
        type: "url",
        value: value
      });
    }
  }]);

  return EditableURL;
}(React.Component);

export { EditableURL as EditableURLBase, VALUE_MISSING, TYPE_MISMATCH };
export default injectIntl(EditableURL);
//# sourceMappingURL=EditableURL.js.map