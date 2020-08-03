function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
import { List } from 'immutable';
import noop from 'lodash/noop';
import parseCSV from '../../utils/parseCSV';
import Label from '../label';
import SelectorDropdown from '../selector-dropdown';
import PillSelector from './PillSelector';
import './PillSelectorDropdown.scss';

var PillSelectorDropdown = /*#__PURE__*/function (_React$Component) {
  _inherits(PillSelectorDropdown, _React$Component);

  var _super = _createSuper(PillSelectorDropdown);

  function PillSelectorDropdown() {
    var _this;

    _classCallCheck(this, PillSelectorDropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      inputValue: '',
      isInCompositionMode: false
    });

    _defineProperty(_assertThisInitialized(_this), "parsePills", function (inputValue) {
      var _this$props = _this.props,
          allowInvalidPills = _this$props.allowInvalidPills,
          parseItems = _this$props.parseItems,
          validator = _this$props.validator;
      var pills = parseItems ? parseItems(inputValue) : parseCSV(inputValue);

      if (!pills) {
        return [];
      }

      if (!allowInvalidPills) {
        pills = pills.filter(function (pill) {
          return validator(pill);
        });
      }

      var normalizedPills = pills.map(function (pill) {
        return typeof pill === 'string' ? {
          displayText: pill,
          text: pill,
          // deprecated, left for backwards compatibility
          value: pill
        } : pill;
      });
      return normalizedPills;
    });

    _defineProperty(_assertThisInitialized(_this), "addPillsFromInput", function (inputValue) {
      var _this$props2 = _this.props,
          allowCustomPills = _this$props2.allowCustomPills,
          onPillCreate = _this$props2.onPillCreate,
          onSelect = _this$props2.onSelect,
          selectedOptions = _this$props2.selectedOptions,
          shouldClearUnmatchedInput = _this$props2.shouldClearUnmatchedInput,
          validateForError = _this$props2.validateForError; // Do nothing if custom pills are not allowed

      if (!allowCustomPills) {
        return;
      } // Parse pills from input


      var pills = _this.parsePills(inputValue); // "Select" the pills


      if (pills.length > 0) {
        onSelect(pills);
        onPillCreate(pills);

        _this.resetInputValue();
      } else {
        if (validateForError && (inputValue !== '' || selectedOptions.length === 0)) {
          /**
           * If no pills were added, but an inputValue exists or
           * there are no pills selected, check for errors
           */
          validateForError(inputValue);
        }

        if (shouldClearUnmatchedInput) {
          _this.resetInputValue();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      var onBlur = _this.props.onBlur;
      var inputValue = _this.state.inputValue;

      _this.addPillsFromInput(inputValue);

      onBlur(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleInput", function (event) {
      var target = event.target;
      var value = target.value;

      _this.setState({
        inputValue: value
      });

      _this.props.onInput(value, event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleEnter", function (event) {
      var _this$state = _this.state,
          isInCompositionMode = _this$state.isInCompositionMode,
          inputValue = _this$state.inputValue;

      if (!isInCompositionMode) {
        event.preventDefault();

        _this.addPillsFromInput(inputValue);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handlePaste", function (event) {
      event.preventDefault();
      var inputValue = event.clipboardData.getData('text');

      _this.setState({
        inputValue: inputValue
      });

      _this.props.onInput(inputValue, event);

      _this.addPillsFromInput(inputValue);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelect", function (index, event) {
      var _this$props3 = _this.props,
          onPillCreate = _this$props3.onPillCreate,
          onSelect = _this$props3.onSelect,
          selectorOptions = _this$props3.selectorOptions;
      var selectedOption = // $FlowFixMe
      typeof selectorOptions.get === 'function' ? selectorOptions.get(index) : selectorOptions[index];
      onSelect([selectedOption], event);
      onPillCreate([selectedOption]);

      _this.handleInput({
        target: {
          value: ''
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCompositionStart", function () {
      _this.setState({
        isInCompositionMode: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCompositionEnd", function () {
      _this.setState({
        isInCompositionMode: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "resetInputValue", function () {
      var onInput = _this.props.onInput;

      _this.setState({
        inputValue: ''
      });

      onInput('');
    });

    return _this;
  }

  _createClass(PillSelectorDropdown, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          allowInvalidPills = _this$props4.allowInvalidPills,
          children = _this$props4.children,
          className = _this$props4.className,
          disabled = _this$props4.disabled,
          dividerIndex = _this$props4.dividerIndex,
          dropdownScrollBoundarySelector = _this$props4.dropdownScrollBoundarySelector,
          error = _this$props4.error,
          inputProps = _this$props4.inputProps,
          label = _this$props4.label,
          onRemove = _this$props4.onRemove,
          onSuggestedPillAdd = _this$props4.onSuggestedPillAdd,
          overlayTitle = _this$props4.overlayTitle,
          placeholder = _this$props4.placeholder,
          selectedOptions = _this$props4.selectedOptions,
          suggestedPillsData = _this$props4.suggestedPillsData,
          suggestedPillsFilter = _this$props4.suggestedPillsFilter,
          suggestedPillsTitle = _this$props4.suggestedPillsTitle,
          shouldSetActiveItemOnOpen = _this$props4.shouldSetActiveItemOnOpen,
          validator = _this$props4.validator;
      return /*#__PURE__*/React.createElement(Label, {
        text: label
      }, /*#__PURE__*/React.createElement(SelectorDropdown, {
        className: classNames('pill-selector-wrapper', className),
        dividerIndex: dividerIndex,
        onEnter: this.handleEnter,
        onSelect: this.handleSelect,
        overlayTitle: overlayTitle,
        scrollBoundarySelector: dropdownScrollBoundarySelector,
        shouldSetActiveItemOnOpen: shouldSetActiveItemOnOpen,
        selector: /*#__PURE__*/React.createElement(PillSelector, _extends({
          onChange: noop // fix console error
          ,
          onCompositionEnd: this.handleCompositionEnd,
          onCompositionStart: this.handleCompositionStart
        }, inputProps, {
          allowInvalidPills: allowInvalidPills,
          disabled: disabled,
          error: error,
          onBlur: this.handleBlur,
          onInput: this.handleInput,
          onPaste: this.handlePaste,
          onRemove: onRemove,
          onSuggestedPillAdd: onSuggestedPillAdd,
          placeholder: placeholder,
          selectedOptions: selectedOptions,
          suggestedPillsData: suggestedPillsData,
          suggestedPillsFilter: suggestedPillsFilter,
          suggestedPillsTitle: suggestedPillsTitle,
          validator: validator,
          value: this.state.inputValue
        }))
      }, children));
    }
  }]);

  return PillSelectorDropdown;
}(React.Component);

_defineProperty(PillSelectorDropdown, "defaultProps", {
  allowCustomPills: false,
  allowInvalidPills: false,
  disabled: false,
  error: '',
  inputProps: {},
  label: '',
  onBlur: noop,
  onPillCreate: noop,
  placeholder: '',
  selectedOptions: [],
  selectorOptions: [],
  shouldClearUnmatchedInput: false,
  shouldSetActiveItemOnOpen: false,
  validator: function validator() {
    return true;
  }
});

export default PillSelectorDropdown;
//# sourceMappingURL=PillSelectorDropdown.js.map