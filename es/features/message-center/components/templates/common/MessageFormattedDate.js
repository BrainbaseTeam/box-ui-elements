import * as React from 'react';
import { FormattedDate } from 'react-intl';

function MessageFormattedDate(_ref) {
  var date = _ref.date;
  return React.createElement(FormattedDate, {
    day: "numeric",
    month: "short",
    value: date,
    year: "numeric"
  });
}

export default MessageFormattedDate;
//# sourceMappingURL=MessageFormattedDate.js.map