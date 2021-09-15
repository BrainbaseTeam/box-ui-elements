function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { injectIntl } from 'react-intl';
import BoxSign28 from '../../icon/logo/BoxSign28';
import PlainButton from '../../components/plain-button'; // @ts-ignore Module is written in Flow

import TargetedClickThroughGuideTooltip from '../../features/targeting/TargetedClickThroughGuideTooltip';
import Tooltip, { TooltipPosition } from '../../components/tooltip'; // @ts-ignore Module is written in Flow

import messages from './messages';
import './SidebarNavSign.scss';
export var PlaceholderTooltip = function PlaceholderTooltip(_ref) {
  var children = _ref.children;
  return children;
};
export function SidebarNavSign(_ref2) {
  var intl = _ref2.intl,
      status = _ref2.status,
      targetingApi = _ref2.targetingApi,
      rest = _objectWithoutProperties(_ref2, ["intl", "status", "targetingApi"]);

  var isTargeted = targetingApi && targetingApi.canShow;
  var FtuxTooltip = isTargeted ? TargetedClickThroughGuideTooltip : PlaceholderTooltip;
  var label = intl.formatMessage(status === 'active' ? messages.boxSignSignature : messages.boxSignRequest);
  return React.createElement(FtuxTooltip, {
    body: intl.formatMessage(messages.boxSignFtuxBody),
    position: TooltipPosition.MIDDLE_LEFT,
    shouldTarget: isTargeted,
    title: intl.formatMessage(messages.boxSignFtuxTitle),
    useTargetingApi: function useTargetingApi() {
      return targetingApi;
    }
  }, React.createElement(Tooltip, {
    isDisabled: isTargeted,
    position: TooltipPosition.MIDDLE_LEFT,
    text: label
  }, React.createElement(PlainButton, _extends({
    "aria-label": label,
    className: "bcs-SidebarNavSign"
  }, rest), React.createElement(BoxSign28, {
    className: "bcs-SidebarNavSign-icon"
  }))));
}
export default injectIntl(SidebarNavSign);
//# sourceMappingURL=SidebarNavSign.js.map