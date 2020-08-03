function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
import classNames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import Tooltip from '../tooltip';
import { KEYS } from '../../constants';
import Pill from './Pill';
import SuggestedPillsRow from './SuggestedPillsRow';

function stopDefaultEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

var PillSelector = /*#__PURE__*/function (_React$Component) {
  _inherits(PillSelector, _React$Component);

  var _super = _createSuper(PillSelector);

  function PillSelector() {
    var _this;

    _classCallCheck(this, PillSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isFocused: false,
      selectedIndex: -1
    });

    _defineProperty(_assertThisInitialized(_this), "getNumSelected", function () {
      var selectedOptions = _this.props.selectedOptions;
      return typeof selectedOptions.size === 'number' ? selectedOptions.size : selectedOptions.length;
    });

    _defineProperty(_assertThisInitialized(_this), "getPillsByKey", function (key) {
      var selectedOptions = _this.props.selectedOptions;
      return selectedOptions.map(function (option) {
        return option[key];
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      _this.inputEl.focus();
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function () {
      _this.setState({
        isFocused: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
      _this.setState({
        isFocused: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      var inputValue = _this.inputEl.value;

      var numPills = _this.getNumSelected();

      var selectedIndex = _this.state.selectedIndex;

      switch (event.key) {
        case KEYS.backspace:
          {
            var index = -1;

            if (selectedIndex >= 0) {
              // remove selected pill
              index = selectedIndex;

              _this.resetSelectedIndex();

              _this.inputEl.focus();
            } else if (inputValue === '') {
              // remove last pill
              index = numPills - 1;
            }

            if (index >= 0) {
              var _this$props = _this.props,
                  onRemove = _this$props.onRemove,
                  selectedOptions = _this$props.selectedOptions;
              var selectedOption = // $FlowFixMe
              typeof selectedOptions.get === 'function' ? selectedOptions.get(index) : selectedOptions[index];
              onRemove(selectedOption, index);
              stopDefaultEvent(event);
            }

            break;
          }

        case KEYS.arrowLeft:
          if (selectedIndex >= 0) {
            // select previous pill
            _this.setState({
              selectedIndex: Math.max(selectedIndex - 1, 0)
            });

            stopDefaultEvent(event);
          } else if (inputValue === '' && numPills > 0) {
            // select last pill
            _this.hiddenEl.focus();

            _this.setState({
              selectedIndex: numPills - 1
            });

            stopDefaultEvent(event);
          }

          break;

        case KEYS.arrowRight:
          {
            if (selectedIndex >= 0) {
              var _index = selectedIndex + 1;

              if (_index >= numPills) {
                // deselect last pill
                _this.resetSelectedIndex();

                _this.inputEl.focus();
              } else {
                // select next pill
                _this.setState({
                  selectedIndex: _index
                });
              }

              stopDefaultEvent(event);
            }

            break;
          }
        // no default
      }
    });

    _defineProperty(_assertThisInitialized(_this), "errorMessageID", uniqueId('errorMessage'));

    _defineProperty(_assertThisInitialized(_this), "hiddenRef", function (hiddenEl) {
      if (hiddenEl) {
        _this.hiddenEl = hiddenEl;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "resetSelectedIndex", function () {
      if (_this.state.selectedIndex !== -1) {
        _this.setState({
          selectedIndex: -1
        });
      }
    });

    return _this;
  }

  _createClass(PillSelector, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          isFocused = _this$state.isFocused,
          selectedIndex = _this$state.selectedIndex;

      var _this$props2 = this.props,
          allowInvalidPills = _this$props2.allowInvalidPills,
          className = _this$props2.className,
          disabled = _this$props2.disabled,
          error = _this$props2.error,
          inputProps = _this$props2.inputProps,
          onInput = _this$props2.onInput,
          onRemove = _this$props2.onRemove,
          onSuggestedPillAdd = _this$props2.onSuggestedPillAdd,
          placeholder = _this$props2.placeholder,
          selectedOptions = _this$props2.selectedOptions,
          suggestedPillsData = _this$props2.suggestedPillsData,
          suggestedPillsFilter = _this$props2.suggestedPillsFilter,
          suggestedPillsTitle = _this$props2.suggestedPillsTitle,
          validator = _this$props2.validator,
          rest = _objectWithoutProperties(_this$props2, ["allowInvalidPills", "className", "disabled", "error", "inputProps", "onInput", "onRemove", "onSuggestedPillAdd", "placeholder", "selectedOptions", "suggestedPillsData", "suggestedPillsFilter", "suggestedPillsTitle", "validator"]);

      var suggestedPillsEnabled = suggestedPillsData && suggestedPillsData.length > 0;
      var hasError = !!error;
      var classes = classNames('pill-selector-input-wrapper', {
        'is-disabled': disabled,
        'is-focused': isFocused,
        'show-error': hasError,
        'pill-selector-suggestions-enabled': suggestedPillsEnabled
      });
      var ariaAttrs = {
        'aria-invalid': hasError,
        'aria-errormessage': this.errorMessageID
      };
      return /*#__PURE__*/React.createElement(Tooltip, {
        isShown: hasError,
        text: error || '',
        position: "middle-right",
        theme: "error"
      }, /*#__PURE__*/React.createElement("span", {
        className: classes,
        onBlur: this.handleBlur,
        onClick: this.handleClick,
        onFocus: this.handleFocus,
        onKeyDown: this.handleKeyDown
      }, selectedOptions.map(function (option, index) {
        return /*#__PURE__*/React.createElement(Pill, {
          isValid: allowInvalidPills ? validator(option) : true,
          isDisabled: disabled,
          isSelected: index === selectedIndex,
          key: option.value,
          onRemove: onRemove.bind(_this2, option, index) // $FlowFixMe option.text is for backwards compatibility
          ,
          text: option.displayText || option.text
        });
      }), /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true",
        className: "accessibility-hidden",
        onBlur: this.resetSelectedIndex,
        ref: this.hiddenRef,
        tabIndex: -1
      }), /*#__PURE__*/React.createElement("textarea", _extends({}, ariaAttrs, rest, inputProps, {
        autoComplete: "off",
        className: classNames('pill-selector-input', className),
        disabled: disabled,
        onInput: onInput,
        placeholder: this.getNumSelected() === 0 ? placeholder : '',
        ref: function ref(input) {
          _this2.inputEl = input;
        }
      })), /*#__PURE__*/React.createElement(SuggestedPillsRow, {
        onSuggestedPillAdd: onSuggestedPillAdd,
        selectedPillsValues: this.getPillsByKey('value'),
        suggestedPillsFilter: suggestedPillsFilter,
        suggestedPillsData: suggestedPillsData,
        title: suggestedPillsTitle
      }), /*#__PURE__*/React.createElement("span", {
        id: this.errorMessageID,
        className: "accessibility-hidden",
        role: "alert"
      }, error)));
    }
  }]);

  return PillSelector;
}(React.Component);

_defineProperty(PillSelector, "defaultProps", {
  allowInvalidPills: false,
  disabled: false,
  error: '',
  inputProps: {},
  placeholder: '',
  selectedOptions: [],
  validator: function validator() {
    return true;
  }
});

export default PillSelector;
//# sourceMappingURL=PillSelector.js.map