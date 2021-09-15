/**
 * 
 * @file Sidebar Additional Tab FTUX tooltip
 * @author Box
 */
import * as React from 'react';
import Tooltip from '../../common/Tooltip';
import TargetedClickThroughGuideTooltip from '../../../features/targeting/TargetedClickThroughGuideTooltip';
import './AdditionalTabTooltip.scss';

var AdditionalTabTooltip = function AdditionalTabTooltip(_ref) {
  var children = _ref.children,
      defaultTooltipText = _ref.defaultTooltipText,
      isFtuxVisible = _ref.isFtuxVisible,
      ftuxTooltipData = _ref.ftuxTooltipData;

  if (!isFtuxVisible || !ftuxTooltipData || !ftuxTooltipData.targetingApi().canShow) {
    return React.createElement(Tooltip, {
      position: "middle-left",
      text: defaultTooltipText
    }, children);
  }

  var targetingApi = ftuxTooltipData.targetingApi,
      text = ftuxTooltipData.text;
  return React.createElement(TargetedClickThroughGuideTooltip, {
    className: "bdl-AdditionalTabTooltip",
    body: text,
    position: "middle-right",
    shouldTarget: true,
    useTargetingApi: targetingApi
  }, children);
};

export default AdditionalTabTooltip;
//# sourceMappingURL=AdditionalTabTooltip.js.map