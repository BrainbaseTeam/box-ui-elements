/**
 * 
 * @file Function to render the date table cell
 * @author Box
 */
import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import { isToday, isYesterday } from '../../../utils/datetime';
import messages from '../messages';
import './DateField.scss';
var DEFAULT_DATE_FORMAT = {
  weekday: 'short',
  month: 'short',
  year: 'numeric',
  day: 'numeric'
};

var DateField = function DateField(_ref) {
  var date = _ref.date,
      _ref$dateFormat = _ref.dateFormat,
      dateFormat = _ref$dateFormat === void 0 ? DEFAULT_DATE_FORMAT : _ref$dateFormat,
      _ref$omitCommas = _ref.omitCommas,
      omitCommas = _ref$omitCommas === void 0 ? false : _ref$omitCommas,
      intl = _ref.intl,
      _ref$relative = _ref.relative,
      relative = _ref$relative === void 0 ? true : _ref$relative,
      _ref$capitalize = _ref.capitalize,
      capitalize = _ref$capitalize === void 0 ? false : _ref$capitalize;
  var d = new Date(date);
  var isTodaysDate = isToday(d);
  var isYesterdaysDate = isYesterday(d);

  if (relative && (isTodaysDate || isYesterdaysDate)) {
    var Message = React.createElement(FormattedMessage, messages.today);

    if (isYesterdaysDate) {
      Message = React.createElement(FormattedMessage, messages.yesterday);
    }

    if (capitalize) {
      return React.createElement("span", {
        className: "be-date-capitalize"
      }, Message);
    }

    return Message;
  }

  var formattedDate = intl.formatDate(d, dateFormat);
  formattedDate = omitCommas ? formattedDate.replace(/,/g, '') : formattedDate;
  return formattedDate;
};

export default injectIntl(DateField);
//# sourceMappingURL=DateField.js.map