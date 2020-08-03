export var AND = 'AND';
export var OR = 'OR';
export var EMPTY_CONNECTOR = 'EMPTY_CONNECTOR';
export var COLUMN = 'column';
export var COLUMN_ID = 'columnId';
export var OPERATOR = 'operator';
export var OPERATOR_DISPLAY_TEXT = 'operatorDisplayText';
export var OPERATOR_KEY = 'operatorKey';
export var VALUE = 'value';
export var VALUES = 'values';
export var VALUE_DISPLAY_TEXT = 'valueDisplayText';
export var VALUE_KEY = 'valueKey';
export var WHERE = 'WHERE';
export var STRING = 'string';
export var NUMBER = 'number';
export var FLOAT = 'float';
export var ENUM = 'enum';
export var MULTI_SELECT = 'multiSelect';
export var DATE = 'date';
export var EQUALS = '=';
export var NOT_EQUALS = '<>';
export var GREATER_THAN = '>';
export var LESS_THAN = '<';
export var SORT_ORDER_ASCENDING = 'ASC';
export var SORT_ORDER_DESCENDING = 'DESC';
export var OPERATORS = {
  EQUALS: {
    displayText: 'is',
    key: EQUALS
  },
  NOT_EQUALS: {
    displayText: 'is not',
    key: NOT_EQUALS
  },
  GREATER_THAN: {
    displayText: 'is greater than',
    key: GREATER_THAN
  },
  LESS_THAN: {
    displayText: 'is less than',
    key: LESS_THAN
  }
};
export var ALL_OPERATORS = [OPERATORS.EQUALS, OPERATORS.NOT_EQUALS, OPERATORS.GREATER_THAN, OPERATORS.LESS_THAN];
export var COLUMN_OPERATORS = {
  string: ALL_OPERATORS,
  number: ALL_OPERATORS,
  float: ALL_OPERATORS,
  enum: ALL_OPERATORS,
  date: ALL_OPERATORS,
  multiSelect: ALL_OPERATORS
};
//# sourceMappingURL=constants.js.map