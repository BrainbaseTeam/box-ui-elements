function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import camelCase from 'lodash/camelCase';
import IconComplete from '../../../../icons/general/IconVerified';
import IconReject from '../../../../icons/general/IconRejected';
import Avatar from '../Avatar';
import { TASK_NEW_APPROVED, TASK_NEW_REJECTED, TASK_NEW_COMPLETED, TASK_NEW_NOT_STARTED } from '../../../../constants';
import messages from './messages';
import './AvatarGroupAvatar.scss';

var StatusIcon = function StatusIcon(_ref) {
  var status = _ref.status,
      rest = _objectWithoutProperties(_ref, ["status"]);

  switch (status) {
    case TASK_NEW_APPROVED:
    case TASK_NEW_COMPLETED:
      return React.createElement(IconComplete, rest);

    case TASK_NEW_REJECTED:
      return React.createElement(IconReject, rest);

    case TASK_NEW_NOT_STARTED:
    default:
      return null;
  }
};

var AvatarGroupAvatar = React.memo(function (_ref2) {
  var user = _ref2.user,
      status = _ref2.status,
      getAvatarUrl = _ref2.getAvatarUrl,
      className = _ref2.className,
      rest = _objectWithoutProperties(_ref2, ["user", "status", "getAvatarUrl", "className"]);

  return React.createElement("div", _extends({
    className: classNames('bcs-AvatarGroupAvatar', className),
    "data-testid": "avatar-group-avatar-container"
  }, rest), React.createElement(Avatar, {
    className: "bcs-AvatarGroupAvatar-avatar",
    user: user,
    getAvatarUrl: getAvatarUrl
  }), React.createElement(StatusIcon, {
    status: status,
    className: "bcs-AvatarGroupAvatar-statusIcon ".concat(camelCase(status)),
    height: 12,
    width: 12,
    title: React.createElement(FormattedMessage, messages.taskAssignmentCompleted)
  }));
});
export default AvatarGroupAvatar;
//# sourceMappingURL=AvatarGroupAvatar.js.map