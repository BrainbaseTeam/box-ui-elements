function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Datefield from '../common/date';
import messages from '../common/messages';
import { FIELD_INTERACTED_AT } from '../../constants';

var Date = function Date(_ref) {
  var dataKey = _ref.dataKey,
      item = _ref.item;
  var _item$modified_at = item.modified_at,
      modified_at = _item$modified_at === void 0 ? '' : _item$modified_at,
      _item$interacted_at = item.interacted_at,
      interacted_at = _item$interacted_at === void 0 ? '' : _item$interacted_at,
      modified_by = item.modified_by;
  var modifiedBy = modified_by ? modified_by.name || '' : '';
  var isRecents = dataKey === FIELD_INTERACTED_AT;
  var date = isRecents ? interacted_at || modified_at : modified_at;
  var DateValue = React.createElement(Datefield, {
    capitalize: true,
    date: date,
    omitCommas: true
  });

  if (isRecents || !modifiedBy) {
    return DateValue;
  }

  return React.createElement(FormattedMessage, _extends({}, messages.nameDate, {
    values: {
      date: DateValue,
      name: modifiedBy
    }
  }));
};

export default Date;
//# sourceMappingURL=Date.js.map