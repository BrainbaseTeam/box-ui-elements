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
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import cloneDeep from 'lodash/cloneDeep';
import IconMetadataFilter from '../../../../icons/metadata-view/IconMetadataFilter';
import Condition from './Condition';
import Button from '../../../../components/button/Button';
import PrimaryButton from '../../../../components/primary-button/PrimaryButton';
import MenuToggle from '../../../../components/dropdown-menu/MenuToggle';
import { Flyout, Overlay } from '../../../../components/flyout';
import { AND, OR, COLUMN_OPERATORS } from '../../constants';
import messages from '../../messages';

var FilterButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FilterButton, _React$Component);

  function FilterButton(props) {
    var _this;

    _classCallCheck(this, FilterButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FilterButton).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onClose", function () {
      _this.setState({
        isMenuOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onOpen", function () {
      _this.setState({
        isMenuOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleButton", function () {
      _this.setState({
        isMenuOpen: !_this.state.isMenuOpen
      });
    });

    _defineProperty(_assertThisInitialized(_this), "createCondition", function () {
      var conditionID = uniqueId();
      var columns = _this.props.columns;

      if (columns && columns.length > 0) {
        var firstColumn = columns[0];
        var operator = COLUMN_OPERATORS[firstColumn.type][0].key;
        return {
          columnId: firstColumn.id,
          id: conditionID,
          operator: operator,
          values: []
        };
      }

      throw new Error('Columns Required');
    });

    _defineProperty(_assertThisInitialized(_this), "addFilter", function () {
      var newCondition = _this.createCondition();

      _this.setState({
        transientConditions: [].concat(_toConsumableArray(_this.state.transientConditions), [newCondition]),
        hasUserSubmitted: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "applyFilters", function () {
      var onFilterChange = _this.props.onFilterChange;
      var transientConditions = _this.state.transientConditions;

      var areAllValid = _this.areAllValid();

      if (areAllValid) {
        if (onFilterChange) {
          onFilterChange(transientConditions);
        }

        _this.setState({
          isMenuOpen: false,
          transientConditions: [],
          hasUserSubmitted: false
        });
      } else {
        _this.setState({
          hasUserSubmitted: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateConditionState", function (conditionId, updateCondition) {
      var transientConditions = _this.state.transientConditions;
      var newConditionIndex = 0;
      var conditionToUpdate = transientConditions.find(function (currentCondition, index) {
        newConditionIndex = index;
        return currentCondition.id === conditionId;
      });

      var newCondition = _objectSpread({}, conditionToUpdate);

      newCondition = updateCondition(newCondition);
      var newConditions = cloneDeep(transientConditions);
      newConditions[newConditionIndex] = newCondition;

      _this.setState({
        transientConditions: newConditions
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleColumnChange", function (condition, columnId) {
      var columns = _this.props.columns;
      var transientConditions = _this.state.transientConditions;
      var newConditionIndex = 0;
      var conditionToUpdate = transientConditions.find(function (currentCondition, index) {
        newConditionIndex = index;
        return currentCondition.id === condition.id;
      });
      var column = columns && columns.find(function (c) {
        return c.id === columnId;
      });

      if (!column) {
        throw new Error('Invalid Column.id');
      }

      var type = column && column.type;
      var operator = COLUMN_OPERATORS[type][0].key;

      var newCondition = _objectSpread({}, conditionToUpdate, {
        columnId: columnId,
        operator: operator,
        values: []
      });

      var newConditions = cloneDeep(transientConditions);
      newConditions[newConditionIndex] = newCondition;

      _this.setState({
        transientConditions: newConditions
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOperatorChange", function (conditionId, value) {
      _this.updateConditionState(conditionId, function (condition) {
        condition.operator = value;
        return condition;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleValueChange", function (conditionId, values) {
      _this.updateConditionState(conditionId, function (condition) {
        condition.values = values;
        return condition;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleConnectorChange", function (option) {
      var convert = function convert(str) {
        switch (str) {
          case AND:
            return AND;

          case OR:
            return OR;

          default:
            throw new Error('Invalid connector');
        }
      };

      _this.setState({
        selectedConnector: convert(option.value)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "deleteCondition", function (index) {
      var transientConditions = _this.state.transientConditions;
      var conditionsAfterDeletion = transientConditions.filter(function (condition, conditionIndex) {
        return conditionIndex !== index;
      });

      _this.setState({
        transientConditions: conditionsAfterDeletion
      });
    });

    _defineProperty(_assertThisInitialized(_this), "areAllValid", function () {
      var transientConditions = _this.state.transientConditions;
      var areAllValid = true;
      transientConditions.forEach(function (condition) {
        if (condition.values.length === 0) {
          areAllValid = false;
        }
      });
      return areAllValid;
    });

    _defineProperty(_assertThisInitialized(_this), "shouldClose", function (event) {
      // The current approach assumes that the Apply button contains at most one child element.
      var areAllValid = _this.areAllValid();

      if (event && event.target && areAllValid) {
        if (event.target.classList.contains('apply-filters-button') || event.target.parentNode.classList.contains('apply-filters-button')) {
          return true;
        }
      }

      return false;
    });

    _this.state = {
      hasUserSubmitted: false,
      isMenuOpen: false,
      selectedConnector: AND,
      transientConditions: cloneDeep(_this.props.conditions)
    };
    return _this;
  }

  _createClass(FilterButton, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props = this.props,
          columns = _this$props.columns,
          conditions = _this$props.conditions;
      var _this$state = this.state,
          isMenuOpen = _this$state.isMenuOpen,
          transientConditions = _this$state.transientConditions;
      var prevIsMenuOpen = prevState.isMenuOpen;
      var wasFlyoutOpened = isMenuOpen && !prevIsMenuOpen;

      if (wasFlyoutOpened) {
        var hasUnsavedConditions = transientConditions.length > 0;
        var shouldSetInitialCondition = conditions.length === 0;

        if (!hasUnsavedConditions) {
          if (shouldSetInitialCondition) {
            var newConditions = columns && columns.length === 0 ? [] : [this.createCondition()];
            this.setState({
              transientConditions: newConditions
            });
          } else {
            this.setState({
              transientConditions: cloneDeep(this.props.conditions)
            });
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          columns = _this$props2.columns,
          conditions = _this$props2.conditions;
      var _this$state2 = this.state,
          transientConditions = _this$state2.transientConditions,
          hasUserSubmitted = _this$state2.hasUserSubmitted,
          isMenuOpen = _this$state2.isMenuOpen,
          selectedConnector = _this$state2.selectedConnector;
      var numberOfConditions = conditions.length;
      var areAllValid = this.areAllValid();
      var buttonClasses = classNames('query-bar-button', numberOfConditions !== 0 && areAllValid ? 'is-active' : '');
      var isFilterDisabled = !columns || columns.length === 0;
      return React.createElement(Flyout, {
        className: "query-bar-filter-dropdown-flyout",
        closeOnClick: true,
        closeOnClickOutside: true,
        closeOnClickPredicate: this.shouldClose,
        onClose: this.onClose,
        onOpen: this.onOpen,
        overlayIsVisible: isMenuOpen,
        portaledClasses: ['pika-single']
        /* Element in DatePicker package  */
        ,
        position: "bottom-right",
        shouldDefaultFocus: true
      }, React.createElement(Button, {
        className: buttonClasses,
        isDisabled: isFilterDisabled,
        onClick: this.toggleButton,
        type: "button"
      }, React.createElement(MenuToggle, null, React.createElement(IconMetadataFilter, {
        className: "button-icon"
      }), React.createElement("span", {
        className: "button-label"
      }, numberOfConditions === 0 ? React.createElement(FormattedMessage, messages.filtersButtonText) : React.createElement(FormattedMessage, _extends({}, messages.multipleFiltersButtonText, {
        values: {
          number: numberOfConditions
        }
      }))))), React.createElement(Overlay, null, isMenuOpen ? React.createElement("div", {
        className: "filter-button-dropdown"
      }, React.createElement("div", {
        className: "filter-button-dropdown-header"
      }, transientConditions.length === 0 ? React.createElement(FormattedMessage, messages.noFiltersAppliedText) : null, transientConditions.map(function (condition, index) {
        return React.createElement(Condition, {
          key: "metadata-view-filter-item-".concat(condition.id),
          hasUserSubmitted: hasUserSubmitted,
          columns: columns,
          condition: condition,
          deleteCondition: _this2.deleteCondition,
          index: index,
          onColumnChange: _this2.handleColumnChange,
          onConnectorChange: _this2.handleConnectorChange,
          onOperatorChange: _this2.handleOperatorChange,
          onValueChange: _this2.handleValueChange,
          selectedConnector: selectedConnector
        });
      })), React.createElement("div", {
        className: "filter-button-dropdown-footer"
      }, React.createElement(Button, {
        type: "button",
        onClick: this.addFilter
      }, React.createElement(FormattedMessage, messages.addFilterButtonText)), React.createElement(PrimaryButton, {
        className: "apply-filters-button",
        onClick: this.applyFilters,
        type: "button"
      }, React.createElement(FormattedMessage, messages.applyFiltersButtonText)))) : React.createElement("div", null)));
    }
  }]);

  return FilterButton;
}(React.Component);

export default FilterButton;
//# sourceMappingURL=FilterButton.js.map