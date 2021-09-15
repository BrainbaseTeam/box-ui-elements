import { FIELD_TYPE_FLOAT, FIELD_TYPE_INTEGER } from './constants';
var floatRegex = /^[-+]?[0-9]*\.?[0-9]*$/;
var integerRegex = /^[-+]?[0-9]+$/;

var floatValidator = function floatValidator(value) {
  return !!value.match(floatRegex);
};

var integerValidator = function integerValidator(value) {
  return !!value.match(integerRegex);
};

var isValidValue = function isValidValue(type, value) {
  if (type === FIELD_TYPE_FLOAT && typeof value === 'string') {
    return floatValidator(value);
  }

  if (type === FIELD_TYPE_INTEGER && typeof value === 'string') {
    return integerValidator(value);
  }

  return true;
}; // eslint-disable-next-line import/prefer-default-export


export { isValidValue };
//# sourceMappingURL=validateMetadataField.js.map