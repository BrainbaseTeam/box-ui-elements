function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
// @ts-ignore flow import
import ReadableTime from '../../../../../components/time/ReadableTime';
export var MILLISECONDS_PER_YEAR = 365 * 24 * 60 * 60 * 1000; // 365 days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
// TODO: duplicated ReadableTime props until it migrates to typescript

var ActivityDatestamp = function ActivityDatestamp(_ref) {
  var date = _ref.date,
      rest = _objectWithoutProperties(_ref, ["date"]);

  var now = new Date().getTime();
  var dateInMs = new Date(date).getTime(); // Only show time if activity time is within the last year

  var showTime = now - dateInMs < MILLISECONDS_PER_YEAR;
  return React.createElement(ReadableTime, _extends({
    timestamp: dateInMs,
    alwaysShowTime: showTime,
    relativeThreshold: 0
  }, rest));
};

export default ActivityDatestamp;
//# sourceMappingURL=ActivityDatestamp.js.map