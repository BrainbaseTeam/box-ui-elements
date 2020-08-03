function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
import { scrollIntoView } from '../../utils/dom';
import IconCheck from '../../icons/general/IconCheck';
import SelectButton from '../select-button';
import DatalistItem from '../datalist-item';
import { OVERLAY_WRAPPER_CLASS } from '../../constants';
import './SelectField.scss';

function stopDefaultEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

function toggleOption(options, value) {
  var index = options.indexOf(value);

  if (index === -1) {
    options.push(value);
  } else {
    options.splice(index, 1);
  }
}

export var OVERLAY_SCROLLABLE_CLASS = 'bdl-SelectField-overlay--scrollable';

var BaseSelectField = /*#__PURE__*/function (_React$Component) {
  _inherits(BaseSelectField, _React$Component);

  var _super = _createSuper(BaseSelectField);

  function BaseSelectField(props) {
    var _this;

    _classCallCheck(this, BaseSelectField);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "setActiveItem", function (index) {
      var shouldScrollIntoView = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      _this.setState({
        activeItemIndex: index,
        shouldScrollIntoView: shouldScrollIntoView
      });

      if (index === -1) {
        _this.setActiveItemID(null);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setActiveItemID", function (id) {
      var shouldScrollIntoView = _this.state.shouldScrollIntoView;
      var itemEl = id ? document.getElementById(id) : null;

      _this.setState({
        activeItemID: id,
        shouldScrollIntoView: false
      }, function () {
        if (shouldScrollIntoView) {
          scrollIntoView(itemEl, {
            block: 'nearest'
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (selectedItems) {
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(selectedItems);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOptionSelect", function (selectedItem) {
      var onOptionSelect = _this.props.onOptionSelect;

      if (onOptionSelect) {
        onOptionSelect(selectedItem);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleButtonClick", function () {
      if (_this.state.isOpen) {
        _this.closeDropdown();
      } else {
        _this.openDropdown();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleButtonKeyDown", function (event) {
      var activeItemIndex = _this.state.activeItemIndex; // If user is interacting with the select dropdown, don't close on space/enter (i.e. prevent click event)

      if ((event.key === ' ' || event.key === 'Enter') && activeItemIndex !== -1) {
        event.preventDefault();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
      var isOpen = _this.state.isOpen;

      if (isOpen) {
        _this.closeDropdown();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      var options = _this.props.options;
      var _this$state = _this.state,
          activeItemIndex = _this$state.activeItemIndex,
          isOpen = _this$state.isOpen;
      var itemCount = options.length;

      switch (event.key) {
        case 'ArrowDown':
          stopDefaultEvent(event);

          if (isOpen) {
            var nextIndex = activeItemIndex === itemCount - 1 ? -1 : activeItemIndex + 1;

            _this.setActiveItem(nextIndex);
          } else {
            _this.openDropdown();
          }

          break;

        case 'ArrowUp':
          stopDefaultEvent(event);

          if (isOpen) {
            var prevIndex = activeItemIndex === -1 ? itemCount - 1 : activeItemIndex - 1;

            _this.setActiveItem(prevIndex);
          } else {
            _this.openDropdown();
          }

          break;

        case 'Enter':
        case ' ':
          if (activeItemIndex !== -1 && isOpen) {
            stopDefaultEvent(event);

            _this.selectOption(activeItemIndex); // Enter always closes dropdown (even for multiselect)


            if (event.key === 'Enter') {
              _this.closeDropdown();
            }
          }

          break;

        case 'Escape':
          if (isOpen) {
            stopDefaultEvent(event);

            _this.closeDropdown();
          }

          break;
        // no default
      }
    });

    _defineProperty(_assertThisInitialized(_this), "openDropdown", function () {
      if (!_this.state.isOpen) {
        _this.setState({
          isOpen: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "closeDropdown", function () {
      if (_this.state.isOpen) {
        _this.setState({
          activeItemID: null,
          activeItemIndex: -1,
          isOpen: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "selectOption", function (index) {
      var multiple = _this.props.multiple;

      if (multiple) {
        _this.selectMultiOption(index);
      } else {
        _this.selectSingleOption(index);

        _this.closeDropdown(); // Close dropdown for single select fields

      }
    });

    _defineProperty(_assertThisInitialized(_this), "selectMultiOption", function (index) {
      var _this$props = _this.props,
          defaultValue = _this$props.defaultValue,
          options = _this$props.options,
          selectedValues = _this$props.selectedValues;
      var hasDefaultValue = defaultValue != null; // Checks if not undefined or null

      var item = options[index]; // If we are already using the default option, just return without firing onChange

      if (hasDefaultValue && defaultValue === item.value) {
        _this.selectSingleOption(index);

        return;
      } // Copy the array so we can freely modify it


      var newSelectedValues = selectedValues.slice(0);
      toggleOption(newSelectedValues, item.value); // Apply constraints if a defaultValue is specified

      if (hasDefaultValue) {
        var defaultOptionIndex = options.findIndex(function (option) {
          return option.value === defaultValue;
        });

        if (defaultOptionIndex !== -1) {
          if (newSelectedValues.length === 0) {
            // If nothing is selected, we should select the default option
            _this.selectSingleOption(defaultOptionIndex);

            return;
          }

          if (newSelectedValues.length > 1 && newSelectedValues.includes(defaultValue)) {
            // Remove the default option from the selected values when more than one thing is selected
            newSelectedValues.splice(defaultOptionIndex, 1);
          }
        }
      } // Fire onchange event with selected items


      _this.handleChange(options.filter(function (option) {
        return newSelectedValues.includes(option.value);
      }));

      _this.handleOptionSelect(item);
    });

    _defineProperty(_assertThisInitialized(_this), "renderButtonText", function () {
      var _this$props2 = _this.props,
          options = _this$props2.options,
          placeholder = _this$props2.placeholder,
          selectedValues = _this$props2.selectedValues,
          title = _this$props2.title;
      var selectedItemCount = selectedValues.length; // When there are no options selected, render placeholder

      if (selectedItemCount === 0 && placeholder) {
        return placeholder;
      } // User-specified title when options are selected


      if (title) {
        return title;
      } // Auto-generate button title based on selected options


      var selectedOptions = options.filter(function (option) {
        return selectedValues.includes(option.value);
      });
      return selectedOptions.map(function (option) {
        return option.displayText;
      }).join(', ');
    });

    _defineProperty(_assertThisInitialized(_this), "renderSelectButton", function () {
      var _this$state2 = _this.state,
          activeItemID = _this$state2.activeItemID,
          isOpen = _this$state2.isOpen;
      var _this$props3 = _this.props,
          buttonElProps = _this$props3.buttonProps,
          isDisabled = _this$props3.isDisabled,
          className = _this$props3.className,
          error = _this$props3.error;

      var buttonText = _this.renderButtonText();

      var buttonProps = _objectSpread(_objectSpread({}, buttonElProps), {}, {
        'aria-activedescendant': activeItemID,
        'aria-autocomplete': 'list',
        'aria-expanded': isOpen,
        'aria-owns': _this.selectFieldID,
        className: className,
        isDisabled: isDisabled,
        onClick: _this.handleButtonClick,
        onKeyDown: _this.handleButtonKeyDown,
        // @NOTE: Technically, only text inputs should be combo-boxes but ARIA specs do not cover custom select dropdowns
        role: 'combobox',
        title: buttonText
      });

      return /*#__PURE__*/React.createElement(SelectButton, _extends({}, buttonProps, {
        error: error
      }), buttonText);
    });

    _defineProperty(_assertThisInitialized(_this), "renderSelectOptions", function () {
      var _this$props4 = _this.props,
          optionRenderer = _this$props4.optionRenderer,
          options = _this$props4.options,
          selectedValues = _this$props4.selectedValues,
          separatorIndices = _this$props4.separatorIndices;
      var activeItemIndex = _this.state.activeItemIndex;
      var selectOptions = options.map(function (item, index) {
        var displayText = item.displayText,
            value = item.value;
        var isSelected = selectedValues.includes(value);
        var itemProps = {
          className: 'select-option',
          key: index,

          /* preventDefault on click to prevent wrapping label from re-triggering the select button */
          onClick: function onClick(event) {
            event.preventDefault();

            _this.selectOption(index);
          },
          onMouseEnter: function onMouseEnter() {
            _this.setActiveItem(index, false);
          },
          setActiveItemID: _this.setActiveItemID
        };

        if (index === activeItemIndex) {
          itemProps.isActive = true;
        } // The below actually does have a key, but eslint can't catch that

        /* eslint-disable react/jsx-key */


        return /*#__PURE__*/React.createElement(DatalistItem, itemProps, /*#__PURE__*/React.createElement("div", {
          className: "select-option-check-icon"
        }, isSelected ? /*#__PURE__*/React.createElement(IconCheck, {
          height: 16,
          width: 16
        }) : null), optionRenderer ? optionRenderer(item) : displayText);
        /* eslint-enable react/jsx-key */
      });
      separatorIndices.forEach(function (separatorIndex, index) {
        selectOptions.splice(separatorIndex + index, 0, /*#__PURE__*/React.createElement("li", {
          key: "separator".concat(separatorIndex),
          role: "separator"
        }));
      });
      return selectOptions;
    });

    _this.selectFieldID = uniqueId('selectfield');
    _this.state = {
      activeItemID: null,
      activeItemIndex: -1,
      isOpen: false,
      shouldScrollIntoView: false
    };
    return _this;
  }

  _createClass(BaseSelectField, [{
    key: "selectSingleOption",
    value: function selectSingleOption(index) {
      var _this$props5 = this.props,
          options = _this$props5.options,
          selectedValues = _this$props5.selectedValues;
      var item = options[index]; // If item not previously selected, fire change handler

      if (!selectedValues.includes(item.value)) {
        this.handleChange([item]);
      }

      this.handleOptionSelect(item);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          className = _this$props6.className,
          multiple = _this$props6.multiple,
          isScrollable = _this$props6.isScrollable;
      var isOpen = this.state.isOpen; // @TODO: Need invariants on specific conditions.
      // 1) # of options should be non-zero
      // 2) selectedValues, if defined, should all exist in options
      // 3) defaultValue, if defined, should exist in options
      // 4) defaultValue, if defined, should mean selectedValues is never empty
      // 5) defaultValue, if defined, cannot be selected in addition to other options (must be exclusive)

      var listboxProps = {};

      if (multiple) {
        listboxProps['aria-multiselectable'] = true;
      }

      return (
        /*#__PURE__*/
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        React.createElement("div", {
          className: classNames(className, 'select-container'),
          onBlur: this.handleBlur,
          onKeyDown: this.handleKeyDown
        }, /*#__PURE__*/React.createElement("div", {
          className: "select-field"
        }, this.renderSelectButton(), /*#__PURE__*/React.createElement("div", {
          className: classNames(OVERLAY_WRAPPER_CLASS, {
            'is-visible': isOpen
          })
        }, /*#__PURE__*/React.createElement("ul", _extends({
          className: classNames('overlay', _defineProperty({}, OVERLAY_SCROLLABLE_CLASS, isScrollable)),
          id: this.selectFieldID,
          role: "listbox" // preventDefault on mousedown so blur doesn't happen before click
          ,
          onMouseDown: function onMouseDown(event) {
            return event.preventDefault();
          }
        }, listboxProps), this.renderSelectOptions()))))
      );
    }
  }]);

  return BaseSelectField;
}(React.Component);

_defineProperty(BaseSelectField, "defaultProps", {
  buttonProps: {},
  isDisabled: false,
  isScrollable: false,
  multiple: false,
  options: [],
  selectedValues: [],
  separatorIndices: []
});

export default BaseSelectField;
//# sourceMappingURL=BaseSelectField.js.map