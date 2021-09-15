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
import { FormattedMessage, injectIntl } from 'react-intl';
import Button from '../../components/button/Button';
import TextInput from '../../components/text-input/TextInput';
import Tooltip from '../../components/tooltip/Tooltip';
import commonMessages from '../../common/messages';
import IconInfo from '../../icons/general/IconInfo';
import messages from './messages';
import './CustomInstanceNewField.scss';

var CustomInstanceNewField =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(CustomInstanceNewField, _React$PureComponent);

  function CustomInstanceNewField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CustomInstanceNewField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CustomInstanceNewField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      key: '',
      value: '',
      error: ''
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyChange", function (event) {
      _this.onChange(event, 'key');
    });

    _defineProperty(_assertThisInitialized(_this), "onValueChange", function (event) {
      _this.onChange(event, 'value');
    });

    _defineProperty(_assertThisInitialized(_this), "onAdd", function () {
      var _this$state = _this.state,
          key = _this$state.key,
          value = _this$state.value;
      var _this$props = _this.props,
          onAdd = _this$props.onAdd,
          properties = _this$props.properties;

      if (Object.prototype.hasOwnProperty.call(properties, key)) {
        _this.setState({
          error: React.createElement(FormattedMessage, messages.customErrorDuplicateKey)
        });
      } else if (key.startsWith('$')) {
        _this.setState({
          error: React.createElement(FormattedMessage, messages.customErrorInternalKey)
        });
      } else if (key) {
        onAdd(key, value);
      } else {
        _this.setState({
          error: React.createElement(FormattedMessage, messages.customErrorRequired)
        });
      }
    });

    return _this;
  }

  _createClass(CustomInstanceNewField, [{
    key: "onChange",

    /**
     * Common change handler
     *
     * @param {Event} event - keyboard event
     * @param {string} attr - key or value
     * @return {void}
     */
    value: function onChange(event, attr) {
      var currentTarget = event.currentTarget;
      this.setState(_defineProperty({
        error: ''
      }, attr, currentTarget.value));
    }
    /**
     * Change handler for the key
     *
     * @param {Event} event - keyboard event
     * @return {void}
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          intl = _this$props2.intl,
          isCancellable = _this$props2.isCancellable,
          onCancel = _this$props2.onCancel;
      var _this$state2 = this.state,
          key = _this$state2.key,
          value = _this$state2.value,
          error = _this$state2.error;
      return React.createElement("div", {
        className: "custom-new-field"
      }, React.createElement("div", {
        className: "custom-new-field-header"
      }, React.createElement(FormattedMessage, _extends({
        tagName: "h5"
      }, messages.customNewField)), React.createElement(Tooltip, {
        text: React.createElement(FormattedMessage, messages.customNewFieldMessage)
      }, React.createElement("div", {
        tabIndex: "-1"
      }, React.createElement(IconInfo, {
        color: "#777",
        height: 18,
        width: 18
      })))), React.createElement(TextInput, {
        error: error,
        isRequired: true,
        label: React.createElement(FormattedMessage, messages.customKey),
        onChange: this.onKeyChange,
        placeholder: intl.formatMessage(messages.customKeyPlaceholder),
        type: "text",
        value: key
      }), React.createElement(TextInput, {
        hideOptionalLabel: true,
        label: React.createElement(FormattedMessage, messages.customValue),
        onChange: this.onValueChange,
        placeholder: intl.formatMessage(messages.customValuePlaceholder),
        type: "text",
        value: value
      }), React.createElement("div", {
        className: "custom-new-field-actions"
      }, isCancellable && React.createElement(Button, {
        "data-resin-target": "metadata-customfieldcancel",
        onClick: onCancel,
        type: "button"
      }, React.createElement(FormattedMessage, commonMessages.cancel)), React.createElement(Button, {
        "data-resin-target": "metadata-customfieldadd",
        onClick: this.onAdd,
        type: "button"
      }, React.createElement(FormattedMessage, messages.customAdd))));
    }
  }]);

  return CustomInstanceNewField;
}(React.PureComponent);

export { CustomInstanceNewField as CustomInstanceNewFieldBase };
export default injectIntl(CustomInstanceNewField);
//# sourceMappingURL=CustomInstanceNewField.js.map