var _RETENTION_MAP;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Versions Item Retention component
 * @author Box
 */
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { ReadableTime } from '../../../components/time';
import { VERSION_RETENTION_DELETE_ACTION, VERSION_RETENTION_REMOVE_ACTION, VERSION_RETENTION_INDEFINITE } from '../../../constants';
import messages from './messages';
var RETENTION_MAP = (_RETENTION_MAP = {}, _defineProperty(_RETENTION_MAP, VERSION_RETENTION_DELETE_ACTION, messages.versionRetentionDelete), _defineProperty(_RETENTION_MAP, VERSION_RETENTION_REMOVE_ACTION, messages.versionRetentionRemove), _RETENTION_MAP);

var VersionsItemRetention = function VersionsItemRetention(_ref) {
  var retention = _ref.retention;

  var _ref2 = retention || {},
      dispositionAt = _ref2.disposition_at,
      retentionPolicy = _ref2.winning_retention_policy;

  var _ref3 = retentionPolicy || {},
      dispositionAction = _ref3.disposition_action,
      retentionLength = _ref3.retention_length;

  var dispositionAtTime = dispositionAt && new Date(dispositionAt).getTime();

  if (!dispositionAction) {
    return null;
  }

  return retentionLength === VERSION_RETENTION_INDEFINITE || !dispositionAtTime ? React.createElement(FormattedMessage, messages.versionRetentionIndefinite) : React.createElement(FormattedMessage, _extends({}, RETENTION_MAP[dispositionAction], {
    values: {
      time: React.createElement(ReadableTime, {
        timestamp: dispositionAtTime,
        showWeekday: true
      })
    }
  }));
};

export default VersionsItemRetention;
//# sourceMappingURL=VersionsItemRetention.js.map