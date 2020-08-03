function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import BaseSelectField from './BaseSelectField';

var MultiSelectField = function MultiSelectField(_ref) {
  var rest = _extends({}, _ref);

  return /*#__PURE__*/React.createElement(BaseSelectField, _extends({}, rest, {
    multiple: true
  }));
};

export default MultiSelectField;
//# sourceMappingURL=MultiSelectField.js.map