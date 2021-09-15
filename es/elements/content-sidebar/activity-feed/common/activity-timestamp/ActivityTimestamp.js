function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import ActivityDatestamp from '../activity-datestamp';
import Tooltip from '../../../../../components/tooltip';
import messages from './messages';
import './ActivityTimestamp.scss';

var ActivityTimestamp = function ActivityTimestamp(_ref) {
  var date = _ref.date;
  return React.createElement(Tooltip, {
    text: React.createElement(FormattedMessage, _extends({}, messages.fullDateTime, {
      values: {
        time: date
      }
    }))
  }, React.createElement("small", {
    className: "bcs-ActivityTimestamp"
  }, React.createElement(ActivityDatestamp, {
    date: date
  })));
};

export default ActivityTimestamp;
//# sourceMappingURL=ActivityTimestamp.js.map