function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
import getProp from 'lodash/get';
import noop from 'lodash/noop';
import PillSelectorDropdown from './PillSelectorDropdown';
import defaultDropdownRenderer from './defaultDropdownRenderer';
import defaultDropdownFilter from './filters/defaultDropdownFilter';
import defaultInputParser from './defaultInputParser';

var PillSelectorDropdownField =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(PillSelectorDropdownField, _React$PureComponent);

  function PillSelectorDropdownField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PillSelectorDropdownField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PillSelectorDropdownField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      inputText: ''
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      var field = _this.props.field;
      var name = field.name,
          onBlur = field.onBlur; // Sets touched in formik for the pill selector field.
      // Event may or may not be available at this time.

      onBlur(event || _this.createFakeEventTarget(name));
    });

    _defineProperty(_assertThisInitialized(_this), "handleInput", function (text, event) {
      var onInput = _this.props.onInput;

      _this.setState({
        inputText: text
      });

      onInput(text, event);

      if (text === '') {
        _this.handleBlur(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelect", function (options) {
      var field = _this.props.field;
      var name = field.name,
          onChange = field.onChange,
          _field$value = field.value,
          value = _field$value === void 0 ? [] : _field$value;
      var filteredOptions = options.filter(function (option) {
        return _this.isValidOption(option);
      });
      onChange(_this.createFakeEventTarget(name, [].concat(_toConsumableArray(value), _toConsumableArray(filteredOptions))));
    });

    _defineProperty(_assertThisInitialized(_this), "handleRemove", function (option, index) {
      var field = _this.props.field;
      var name = field.name,
          onChange = field.onChange,
          _field$value2 = field.value,
          value = _field$value2 === void 0 ? [] : _field$value2;
      var options = value.slice();
      options.splice(index, 1);
      onChange(_this.createFakeEventTarget(name, options));
    });

    _defineProperty(_assertThisInitialized(_this), "handleParseItems", function (inputValue) {
      var _this$props = _this.props,
          field = _this$props.field,
          inputParser = _this$props.inputParser,
          options = _this$props.options;
      var _field$value3 = field.value,
          selectedOptions = _field$value3 === void 0 ? [] : _field$value3;
      return inputParser(inputValue, options, selectedOptions);
    });

    return _this;
  }

  _createClass(PillSelectorDropdownField, [{
    key: "isValidOption",
    value: function isValidOption(_ref) {
      var displayText = _ref.displayText;
      return !!displayText.trim();
    }
  }, {
    key: "createFakeEventTarget",
    value: function createFakeEventTarget(name, value) {
      // Returns a dummy EventTarget like object that formik understands how to read
      return {
        target: {
          name: name,
          value: value
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var inputText = this.state.inputText;
      var _this$props2 = this.props,
          className = _this$props2.className,
          dropdownFilter = _this$props2.dropdownFilter,
          dropdownRenderer = _this$props2.dropdownRenderer,
          dropdownScrollBoundarySelector = _this$props2.dropdownScrollBoundarySelector,
          field = _this$props2.field,
          form = _this$props2.form,
          isCustomInputAllowed = _this$props2.isCustomInputAllowed,
          isDisabled = _this$props2.isDisabled,
          label = _this$props2.label,
          options = _this$props2.options,
          placeholder = _this$props2.placeholder,
          shouldClearUnmatchedInput = _this$props2.shouldClearUnmatchedInput,
          validator = _this$props2.validator;
      var name = field.name,
          _field$value4 = field.value,
          value = _field$value4 === void 0 ? [] : _field$value4;
      var errors = form.errors,
          touched = form.touched;
      var isTouched = getProp(touched, name);
      var error = isTouched ? getProp(errors, name) : null;
      var filteredOptions = dropdownFilter(options, value, inputText);
      var inputProps = {
        name: name
      }; // so that events generated have event.target.name

      return React.createElement(PillSelectorDropdown, {
        allowCustomPills: isCustomInputAllowed,
        allowInvalidPills: true,
        className: className,
        disabled: isDisabled,
        dropdownScrollBoundarySelector: dropdownScrollBoundarySelector,
        inputProps: inputProps,
        label: label,
        error: error,
        onBlur: this.handleBlur,
        onInput: this.handleInput,
        onRemove: this.handleRemove,
        onSelect: this.handleSelect,
        parseItems: this.handleParseItems,
        placeholder: placeholder,
        selectedOptions: value,
        selectorOptions: filteredOptions,
        shouldClearUnmatchedInput: shouldClearUnmatchedInput,
        shouldSetActiveItemOnOpen: true,
        validator: validator
      }, dropdownRenderer(filteredOptions));
    }
  }]);

  return PillSelectorDropdownField;
}(React.PureComponent);

_defineProperty(PillSelectorDropdownField, "defaultProps", {
  dropdownFilter: defaultDropdownFilter,
  dropdownRenderer: defaultDropdownRenderer,
  inputParser: defaultInputParser,
  isCustomInputAllowed: true,
  isDisabled: false,
  onInput: noop,
  options: [],
  shouldClearUnmatchedInput: false
});

export default PillSelectorDropdownField;
//# sourceMappingURL=PillSelectorDropdownField.js.map