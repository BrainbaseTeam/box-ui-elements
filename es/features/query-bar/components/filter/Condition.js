import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import isFinite from 'lodash/isFinite';
import isInteger from 'lodash/isInteger';
import classNames from 'classnames';
import IconClose from '../../../../icons/general/IconClose';
import Tooltip from '../../../../components/tooltip';
import IconAlertDefault from '../../../../icons/general/IconAlertDefault';
import SingleSelectField from '../../../../components/select-field/SingleSelectField';
import ValueField from './ValueField';
import messages from '../../messages';
import { AND, COLUMN, COLUMN_OPERATORS, DATE, ENUM, FLOAT, MULTI_SELECT, NUMBER, OPERATOR, OR, STRING } from '../../constants';
import '../../styles/Condition.scss';
var deleteButtonIconHeight = 18;
var deleteButtonIconWidth = 18;

var Condition = function Condition(_ref) {
  var hasUserSubmitted = _ref.hasUserSubmitted,
      columns = _ref.columns,
      condition = _ref.condition,
      deleteCondition = _ref.deleteCondition,
      onColumnChange = _ref.onColumnChange,
      onOperatorChange = _ref.onOperatorChange,
      onValueChange = _ref.onValueChange,
      index = _ref.index,
      selectedConnector = _ref.selectedConnector,
      onConnectorChange = _ref.onConnectorChange;

  var onDeleteButtonClick = function onDeleteButtonClick() {
    deleteCondition(index);
  };

  var handleColumnChange = function handleColumnChange(option) {
    var columnId = option.value;
    onColumnChange(condition, columnId);
  };

  var handleOperatorChange = function handleOperatorChange(option) {
    var id = condition.id;
    var value = option.value;
    onOperatorChange(id, value);
  };

  var handleValueChange = function handleValueChange(values) {
    var id = condition.id;
    onValueChange(id, values);
  };

  var getColumnOperators = function getColumnOperators() {
    var columnId = condition.columnId;
    var column = columns && columns.find(function (c) {
      return c.id === columnId;
    });
    var type = column && column.type;

    if (!type) {
      return [];
    }

    return COLUMN_OPERATORS[type];
  };

  var getColumnOptions = function getColumnOptions() {
    var columnId = condition.columnId;
    var column = columns && columns.find(function (c) {
      return c.id === columnId;
    });

    if (column && column.options) {
      return column.options.map(function (option) {
        var key = option.key;
        return {
          displayText: key,
          value: key
        };
      });
    }

    return [];
  };

  var validateValue = function validateValue(values, type) {
    switch (type) {
      case NUMBER:
        return isInteger(Number(values[0]));

      case FLOAT:
        return isFinite(Number(values[0]));

      default:
        break;
    }

    return true;
  };

  var getErrorMessage = function getErrorMessage() {
    var values = condition.values,
        columnId = condition.columnId;
    var column = columns && columns.find(function (c) {
      return c.id === columnId;
    });
    var type = column && column.type;
    var isValueEmpty = values.length === 0;
    var isValueValid = false;

    if (!isValueEmpty && type) {
      isValueValid = validateValue(values, type);
    }
    /**
     * isValueValid handles the error case when the user tries to enter an invalid input in either a
     * number type field or a float type field
     *
     * (!hasUserSubmitted && !isValueSet) handles the error case when a user presses on the Apply button
     * but the input field is empty
     */


    if (isValueValid || !hasUserSubmitted && isValueEmpty) {
      return null;
    }

    var messageText;

    switch (type) {
      case STRING:
        messageText = messages.tooltipEnterValueError;
        break;

      case NUMBER:
        messageText = !isValueValid ? messages.tooltipInvalidNumberError : messages.tooltipEnterValueError;
        break;

      case FLOAT:
        messageText = !isValueValid ? messages.tooltipInvalidFloatError : messages.tooltipEnterValueError;
        break;

      case DATE:
        messageText = messages.tooltipSelectDateError;
        break;

      case ENUM:
        messageText = messages.tooltipSelectValueError;
        break;

      case MULTI_SELECT:
        messageText = messages.tooltipSelectValueError;
        break;

      default:
        break;
    }

    return messageText && React.createElement(FormattedMessage, messageText);
  };

  var renderDeleteButton = function renderDeleteButton() {
    return React.createElement("div", {
      className: "condition-delete-button"
    }, React.createElement("button", {
      className: "delete-button",
      onClick: onDeleteButtonClick,
      type: "button"
    }, React.createElement(IconClose, {
      width: deleteButtonIconWidth,
      height: deleteButtonIconHeight,
      color: "#999EA4"
    })));
  };

  var renderConnectorField = function renderConnectorField() {
    var connectorOptions = [AND, OR].map(function (connector) {
      return {
        displayText: connector,
        value: connector
      };
    });
    return React.createElement("div", {
      className: "condition-connector"
    }, index === 0 ? React.createElement("p", {
      className: "condition-connector-text"
    }, React.createElement(FormattedMessage, messages.connectorWhereText)) : React.createElement(SingleSelectField, {
      isDisabled: false,
      onChange: onConnectorChange,
      options: connectorOptions,
      selectedValue: selectedConnector
    }));
  };

  var renderColumnField = function renderColumnField() {
    var columnId = condition.columnId;
    var columnOptions = columns && columns.map(function (column) {
      var displayName = column.displayName,
          id = column.id,
          type = column.type;
      return {
        displayText: displayName,
        type: type,
        value: id
      };
    });
    return React.createElement("div", {
      className: "condition-column-dropdown-container"
    }, React.createElement("div", {
      className: "filter-dropdown-single-select-field-container"
    }, React.createElement(SingleSelectField, {
      fieldType: COLUMN,
      isDisabled: false,
      onChange: handleColumnChange,
      options: columnOptions || [],
      selectedValue: columnId
    })));
  };

  var renderOperatorField = function renderOperatorField() {
    var operator = condition.operator;
    var columnOperators = getColumnOperators();
    var operatorOptions = columnOperators.map(function (_operator) {
      var displayText = _operator.displayText,
          key = _operator.key;
      return {
        displayText: displayText,
        value: key
      };
    });
    return React.createElement("div", {
      className: "condition-operator-dropdown-container"
    }, React.createElement("div", {
      className: "filter-dropdown-single-select-field-container"
    }, React.createElement(SingleSelectField, {
      fieldType: OPERATOR,
      isDisabled: false,
      onChange: handleOperatorChange,
      options: operatorOptions,
      selectedValue: operator
    })));
  };

  var renderValueField = function renderValueField() {
    var column = columns && columns.find(function (c) {
      return c.id === condition.columnId;
    });

    if (!column) {
      throw new Error('Expected Column');
    }

    var valueOptions = getColumnOptions();
    var error = getErrorMessage();
    var classnames = classNames('condition-value-dropdown-container', {
      'show-error': error
    });
    return React.createElement("div", {
      className: classnames
    }, React.createElement(ValueField, {
      onChange: handleValueChange,
      selectedValues: condition.values,
      valueOptions: valueOptions,
      valueType: column.type
    }));
  };

  var renderErrorIcon = function renderErrorIcon() {
    var error = getErrorMessage();
    return error && React.createElement("div", {
      className: "condition-error-icon-status"
    }, React.createElement(Tooltip, {
      text: error || '',
      position: "middle-right",
      theme: "error"
    }, React.createElement("span", null, React.createElement(IconAlertDefault, null))));
  };

  return React.createElement("div", {
    className: "condition-container"
  }, renderDeleteButton(), renderConnectorField(), renderColumnField(), renderOperatorField(), renderValueField(), renderErrorIcon());
};

export default Condition;
//# sourceMappingURL=Condition.js.map