function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
import classNames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import findIndex from 'lodash/findIndex';
import { FormattedMessage, injectIntl } from 'react-intl';
import { scrollIntoView } from '../../utils/dom';
import IconCheck from '../../icons/general/IconCheck';
import SelectButton from '../select-button';
import DatalistItem from '../datalist-item';
import PopperComponent from '../popper';
import SelectFieldDropdown from './SelectFieldDropdown';
import { PLACEMENT_BOTTOM_END, PLACEMENT_BOTTOM_START } from '../popper/constants';
import SearchForm from '../search-form/SearchForm';
import CLEAR from './constants';
import { ARROW_DOWN, ARROW_UP, ENTER, ESCAPE, SPACE, TAB } from '../../common/keyboard-events';
import messages from './messages';
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

function defaultOptionRenderer(_ref) {
  var displayText = _ref.displayText;
  return React.createElement("span", {
    className: "bdl-SelectField-optionText",
    title: displayText
  }, displayText);
}

var BaseSelectField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BaseSelectField, _React$Component);

  function BaseSelectField(props) {
    var _this;

    _classCallCheck(this, BaseSelectField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BaseSelectField).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "updateSearchText", function (text) {
      var options = _this.props.options;
      var optionIndex = findIndex(options, function (element) {
        return element.displayText.toLowerCase().includes(text.toLowerCase());
      });

      if (optionIndex >= 0) {
        _this.setActiveItem(optionIndex);
      }

      _this.setState({
        searchText: text
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDocumentClick", function (event) {
      var container = _this.selectFieldContainerRef.current;
      var isInside = container && event.target instanceof Node && container.contains(event.target) || container === event.target;

      if (!isInside) {
        _this.closeDropdown();
      }
    });

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

    _defineProperty(_assertThisInitialized(_this), "handleClearClick", function () {
      _this.handleChange([]);
    });

    _defineProperty(_assertThisInitialized(_this), "handleButtonKeyDown", function (event) {
      var activeItemIndex = _this.state.activeItemIndex; // If user is interacting with the select dropdown, don't close on space/enter (i.e. prevent click event)

      if ((event.key === SPACE || event.key === ENTER) && activeItemIndex !== -1) {
        event.preventDefault();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      var isOpen = _this.state.isOpen;
      var _this$props$blurExcep = _this.props.blurExceptionClassNames,
          blurExceptionClassNames = _this$props$blurExcep === void 0 ? [] : _this$props$blurExcep;
      var exceptionClasses = ['search-input', 'select-button'].concat(_toConsumableArray(blurExceptionClassNames));

      if (isOpen && event && event.relatedTarget && exceptionClasses.every(function (className) {
        return event && !event.relatedTarget.classList.contains(className);
      })) {
        _this.closeDropdown();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      var key = event.key;
      var _this$props = _this.props,
          options = _this$props.options,
          shouldShowClearOption = _this$props.shouldShowClearOption,
          shouldShowSearchInput = _this$props.shouldShowSearchInput;
      var _this$state = _this.state,
          activeItemIndex = _this$state.activeItemIndex,
          isOpen = _this$state.isOpen;
      var itemCount = options.length;

      switch (key) {
        case ARROW_DOWN:
          stopDefaultEvent(event);

          if (isOpen) {
            var nextIndex = activeItemIndex === itemCount - 1 ? -1 : activeItemIndex + 1;

            _this.setActiveItem(nextIndex);
          } else {
            _this.openDropdown();
          }

          break;

        case ARROW_UP:
          stopDefaultEvent(event);

          if (isOpen) {
            var prevIndex = activeItemIndex === -1 ? itemCount - 1 : activeItemIndex - 1;

            _this.setActiveItem(prevIndex);
          } else {
            _this.openDropdown();
          }

          break;

        case ENTER:
        case SPACE:
          if (shouldShowSearchInput) {
            // Allow space key presses in the search string when search field is active
            if (key === SPACE) {
              break;
            } // Enter presses should be ignored when no item is active


            if (key === ENTER && activeItemIndex === -1) {
              stopDefaultEvent(event);
              break;
            }
          }

          if (activeItemIndex !== -1 && isOpen) {
            stopDefaultEvent(event);
            var isClearOption = shouldShowClearOption && activeItemIndex === 0;

            if (isClearOption) {
              _this.handleClearClick();
            } else {
              _this.selectOption(activeItemIndex);
            } // Enter always closes dropdown (even for multiselect)


            if (key === ENTER) {
              _this.closeDropdown();
            }
          }

          break;

        case ESCAPE:
          if (isOpen) {
            stopDefaultEvent(event);

            _this.closeDropdown();
          }

          break;

        case TAB:
          if (isOpen) {
            _this.closeDropdown();
          }

          break;

        default:
          {
            if (!shouldShowSearchInput) {
              stopDefaultEvent(event);
              var lowerCaseKey = key.toLowerCase();
              var optionIndex = findIndex(options, function (option) {
                return option.displayText.toLowerCase().indexOf(lowerCaseKey) === 0;
              });

              if (optionIndex >= 0) {
                _this.setActiveItem(optionIndex);
              }
            }
          }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "openDropdown", function () {
      var shouldShowSearchInput = _this.props.shouldShowSearchInput;

      if (!_this.state.isOpen) {
        _this.setState({
          isOpen: true
        }, function () {
          return shouldShowSearchInput && _this.searchInputRef && _this.searchInputRef.focus();
        });

        document.addEventListener('click', _this.handleDocumentClick);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "closeDropdown", function () {
      if (_this.state.isOpen) {
        _this.setState({
          activeItemID: null,
          activeItemIndex: -1,
          isOpen: false,
          searchText: ''
        });

        document.removeEventListener('click', _this.handleDocumentClick);
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

    _defineProperty(_assertThisInitialized(_this), "getFilteredOptions", function () {
      var options = _this.props.options;
      var searchText = _this.state.searchText;
      return options.filter(function (option) {
        var isSubstring = option.displayText.toLowerCase().includes(searchText.toLowerCase());
        var isClearOption = option.value === CLEAR;
        return searchText ? isSubstring && !isClearOption : true;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectMultiOption", function (index) {
      var _this$props2 = _this.props,
          defaultValue = _this$props2.defaultValue,
          options = _this$props2.options,
          selectedValues = _this$props2.selectedValues;
      var hasDefaultValue = defaultValue != null; // Checks if not undefined or null

      var item = _this.getFilteredOptions()[index]; // If we are already using the default option, just return without firing onChange


      if (hasDefaultValue && defaultValue === item.value) {
        _this.selectSingleOption(index);

        return;
      } // Copy the array so we can freely modify it


      var newSelectedValues = selectedValues.slice(0);
      toggleOption(newSelectedValues, item.value); // Apply constraints if a defaultValue is specified

      if (hasDefaultValue) {
        var defaultOptionIndex = findIndex(options, function (option) {
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
      var _this$props3 = _this.props,
          options = _this$props3.options,
          placeholder = _this$props3.placeholder,
          selectedValues = _this$props3.selectedValues,
          title = _this$props3.title;
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

    _defineProperty(_assertThisInitialized(_this), "renderSearchInput", function () {
      var intl = _this.props.intl;
      var searchText = _this.state.searchText;

      var getSearchInput = function getSearchInput(element) {
        _this.searchInputRef = element;
      };

      return React.createElement(SearchForm, {
        className: "select-field-search-container",
        getSearchInput: getSearchInput,
        onChange: _this.updateSearchText,
        placeholder: intl.formatMessage(messages.searchPlaceholder),
        value: searchText
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderSelectButton", function () {
      var _this$state2 = _this.state,
          activeItemID = _this$state2.activeItemID,
          isOpen = _this$state2.isOpen;
      var _this$props4 = _this.props,
          buttonElProps = _this$props4.buttonProps,
          isDisabled = _this$props4.isDisabled,
          className = _this$props4.className,
          error = _this$props4.error;

      var buttonText = _this.renderButtonText();

      var buttonProps = _objectSpread({}, buttonElProps, {
        'aria-activedescendant': activeItemID,
        'aria-autocomplete': 'list',
        'aria-expanded': isOpen,
        'aria-owns': _this.selectFieldID,
        className: className,
        isDisabled: isDisabled,
        onClick: _this.handleButtonClick,
        onKeyDown: _this.handleButtonKeyDown,
        // @NOTE: Technically, only text inputs should be combo-boxes but ARIA specs do not cover custom select dropdowns
        role: 'listbox',
        title: buttonText
      });

      return (// Need to store the select button reference so we can calculate the button width
        // in order to set it as the min width of the dropdown list
        React.createElement(SelectButton, _extends({}, buttonProps, {
          error: error
        }), buttonText)
      );
    });

    _defineProperty(_assertThisInitialized(_this), "renderSelectOptions", function () {
      var _this$props5 = _this.props,
          optionRenderer = _this$props5.optionRenderer,
          selectedValues = _this$props5.selectedValues,
          separatorIndices = _this$props5.separatorIndices,
          shouldShowClearOption = _this$props5.shouldShowClearOption;
      var activeItemIndex = _this.state.activeItemIndex;

      var filteredOptions = _this.getFilteredOptions();

      if (filteredOptions.length === 0) {
        return React.createElement(DatalistItem, {
          className: "select-option is-disabled"
        }, React.createElement(FormattedMessage, messages.noResults));
      }

      var selectOptions = filteredOptions.map(function (item, index) {
        var value = item.value;
        var isSelected = selectedValues.includes(value);
        var isClearOption = shouldShowClearOption && value === CLEAR;
        var itemProps = {
          className: classNames('select-option', {
            'is-clear-option': isClearOption
          }),
          key: index,

          /* preventDefault on click to prevent wrapping label from re-triggering the select button */
          onClick: function onClick(event) {
            event.preventDefault();

            if (isClearOption) {
              _this.handleClearClick();
            } else {
              _this.selectOption(index);
            }
          },
          onMouseEnter: function onMouseEnter() {
            _this.setActiveItem(index, false);
          },
          setActiveItemID: _this.setActiveItemID
        };

        if (index === activeItemIndex) {
          itemProps.isActive = true;
        }

        itemProps.isSelected = isSelected; // The below actually does have a key, but eslint can't catch that

        /* eslint-disable react/jsx-key */

        return React.createElement(DatalistItem, itemProps, React.createElement("div", {
          className: "select-option-check-icon"
        }, isSelected ? React.createElement(IconCheck, {
          height: 16,
          width: 16
        }) : null), optionRenderer(item));
        /* eslint-enable react/jsx-key */
      });
      separatorIndices.forEach(function (separatorIndex, index) {
        selectOptions.splice(separatorIndex + index, 0, React.createElement("li", {
          key: "separator".concat(separatorIndex),
          role: "separator"
        }));
      });
      return selectOptions;
    });

    _this.selectFieldID = uniqueId('selectfield');
    _this.selectFieldContainerRef = React.createRef();
    _this.state = {
      activeItemID: null,
      activeItemIndex: -1,
      isOpen: false,
      searchText: '',
      shouldScrollIntoView: false
    };
    return _this;
  }

  _createClass(BaseSelectField, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.isOpen) {
        // Clean-up global click handlers
        document.removeEventListener('click', this.handleDocumentClick);
      }
    }
  }, {
    key: "selectSingleOption",
    value: function selectSingleOption(index) {
      var selectedValues = this.props.selectedValues;
      var item = this.getFilteredOptions()[index]; // If item not previously selected, fire change handler

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
          isEscapedWithReference = _this$props6.isEscapedWithReference,
          isRightAligned = _this$props6.isRightAligned,
          isScrollable = _this$props6.isScrollable,
          selectedValues = _this$props6.selectedValues,
          shouldShowSearchInput = _this$props6.shouldShowSearchInput;
      var isOpen = this.state.isOpen; // @TODO: Need invariants on specific conditions.
      // 1) # of options should be non-zero
      // 2) selectedValues, if defined, should all exist in options
      // 3) defaultValue, if defined, should exist in options
      // 4) defaultValue, if defined, should mean selectedValues is never empty
      // 5) defaultValue, if defined, cannot be selected in addition to other options (must be exclusive)

      var dropdownPlacement = isRightAligned ? PLACEMENT_BOTTOM_END : PLACEMENT_BOTTOM_START; // popper.js modifier to allow dropdown to overflow its boundaries and remain attached to its reference

      var dropdownModifiers = isEscapedWithReference ? {
        preventOverflow: {
          escapeWithReference: true
        }
      } : {};
      return (// eslint-disable-next-line jsx-a11y/no-static-element-interactions
        React.createElement("div", {
          className: classNames(className, 'bdl-SelectField', 'select-container'),
          onBlur: this.handleBlur,
          onKeyDown: this.handleKeyDown,
          ref: this.selectFieldContainerRef
        }, React.createElement(PopperComponent, {
          placement: dropdownPlacement,
          isOpen: isOpen,
          modifiers: dropdownModifiers
        }, this.renderSelectButton(), React.createElement(SelectFieldDropdown, {
          isScrollable: isScrollable,
          multiple: multiple,
          selectedValues: selectedValues,
          selectFieldID: this.selectFieldID
        }, shouldShowSearchInput && this.renderSearchInput(), this.renderSelectOptions())))
      );
    }
  }]);

  return BaseSelectField;
}(React.Component);

_defineProperty(BaseSelectField, "defaultProps", {
  buttonProps: {},
  isDisabled: false,
  isRightAligned: false,
  isScrollable: false,
  multiple: false,
  optionRenderer: defaultOptionRenderer,
  options: [],
  selectedValues: [],
  separatorIndices: [],
  shouldShowClearOption: false,
  shouldShowSearchInput: false
});

export { BaseSelectField as BaseSelectFieldBase };
export default injectIntl(BaseSelectField);
//# sourceMappingURL=BaseSelectField.js.map