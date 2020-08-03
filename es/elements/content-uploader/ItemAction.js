function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Item action component
 */
import React from 'react';
import { injectIntl } from 'react-intl';
import IconCheck from '../../icons/general/IconCheck';
import IconClose from '../../icons/general/IconClose';
import IconInProgress from './IconInProgress';
import IconRetry from '../../icons/general/IconRetry';
import LoadingIndicator from '../../components/loading-indicator';
import PlainButton from '../../components/plain-button/PlainButton';
import Tooltip from '../../components/tooltip';
import messages from '../common/messages';
import { STATUS_PENDING, STATUS_IN_PROGRESS, STATUS_STAGED, STATUS_COMPLETE, STATUS_ERROR } from '../../constants';
import './ItemAction.scss';
var ICON_CHECK_COLOR = '#26C281';

var ItemAction = function ItemAction(_ref) {
  var status = _ref.status,
      onClick = _ref.onClick,
      intl = _ref.intl,
      isResumableUploadsEnabled = _ref.isResumableUploadsEnabled,
      _ref$isFolder = _ref.isFolder,
      isFolder = _ref$isFolder === void 0 ? false : _ref$isFolder;
  var icon = /*#__PURE__*/React.createElement(IconClose, null);
  var target = null;
  var resin = {};
  var tooltip;

  if (isFolder && status !== STATUS_PENDING) {
    return null;
  }

  switch (status) {
    case STATUS_COMPLETE:
      icon = /*#__PURE__*/React.createElement(IconCheck, {
        color: ICON_CHECK_COLOR
      });

      if (!isResumableUploadsEnabled) {
        tooltip = messages.remove;
      }

      break;

    case STATUS_ERROR:
      icon = /*#__PURE__*/React.createElement(IconRetry, {
        height: 24,
        width: 24
      });
      tooltip = isResumableUploadsEnabled ? messages.resume : messages.retry;
      target = 'uploadretry';
      break;

    case STATUS_IN_PROGRESS:
    case STATUS_STAGED:
      if (isResumableUploadsEnabled) {
        icon = /*#__PURE__*/React.createElement(LoadingIndicator, null);
      } else {
        icon = /*#__PURE__*/React.createElement(IconInProgress, null);
        tooltip = messages.uploadsCancelButtonTooltip;
        target = 'uploadcancel';
      }

      break;

    case STATUS_PENDING:
    default:
      if (isResumableUploadsEnabled) {
        icon = /*#__PURE__*/React.createElement(LoadingIndicator, null);
      } else {
        tooltip = messages.uploadsCancelButtonTooltip;
      }

      break;
  }

  if (target) {
    resin = {
      'data-resin-target': target
    };
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "bcu-item-action"
  }, tooltip ? /*#__PURE__*/React.createElement(Tooltip, {
    position: "top-left",
    text: intl.formatMessage(tooltip)
  }, /*#__PURE__*/React.createElement(PlainButton, _extends({
    onClick: onClick,
    type: "button",
    isDisabled: status === STATUS_STAGED
  }, resin), icon)) : icon);
};

export { ItemAction as ItemActionForTesting };
export default injectIntl(ItemAction);
//# sourceMappingURL=ItemAction.js.map