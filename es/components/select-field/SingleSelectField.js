function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
import omit from 'lodash/omit';
import { injectIntl } from 'react-intl';
import BaseSelectField from './BaseSelectField';
import CLEAR from './constants';
import messages from './messages';

var SingleSelectField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SingleSelectField, _React$Component);

  function SingleSelectField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SingleSelectField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SingleSelectField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (selectedOptions) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          fieldType = _this$props.fieldType; // There should only ever be 1 selected item

      if (onChange && selectedOptions.length === 1) {
        onChange(selectedOptions[0], fieldType);
      } else if (selectedOptions.length === 0) {
        onChange({
          value: null
        });
      }
    });

    return _this;
  }

  _createClass(SingleSelectField, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          intl = _this$props2.intl,
          isDisabled = _this$props2.isDisabled,
          selectedValue = _this$props2.selectedValue,
          placeholder = _this$props2.placeholder,
          shouldShowClearOption = _this$props2.shouldShowClearOption,
          options = _this$props2.options,
          rest = _objectWithoutProperties(_this$props2, ["intl", "isDisabled", "selectedValue", "placeholder", "shouldShowClearOption", "options"]); // @TODO: Invariant testing
      // 1) selectedValue is required to be contained in the options
      // 2) # of options should be non-zero
      // Make sure to omit passed props that could be interpreted incorrectly by the base component


      var selectFieldProps = omit(rest, ['defaultValue', 'multiple', 'onChange']); // If selectedValue is passed in, map it to the multi selected equivalent

      var isFieldSelected = selectedValue !== null;
      selectFieldProps.selectedValues = !isFieldSelected ? [] : [selectedValue];
      var optionsWithClearOption = shouldShowClearOption ? [{
        value: CLEAR,
        displayText: intl.formatMessage(messages.clearAll)
      }].concat(_toConsumableArray(options)) : options;
      return React.createElement(BaseSelectField, _extends({
        className: !isFieldSelected && placeholder ? 'placeholder' : '',
        isDisabled: isDisabled,
        onChange: this.handleChange,
        placeholder: placeholder,
        options: optionsWithClearOption,
        shouldShowClearOption: shouldShowClearOption
      }, selectFieldProps));
    }
  }]);

  return SingleSelectField;
}(React.Component);

export { SingleSelectField as SingleSelectFieldBase };
export default injectIntl(SingleSelectField);
//# sourceMappingURL=SingleSelectField.js.map