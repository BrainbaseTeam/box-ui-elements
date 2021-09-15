/**
 * 
 * @file CollapsibleSidebar item component that will render stylized collapsedElement or expanded depending on the expanded prop.
 * @author Box
 *
 * CollapsibleSidebar item component that will render stylized collapsedElement or expanded depending on the expanded prop.
 */
import * as React from 'react';
import Tooltip from '../../components/tooltip';
import LeftSidebarLinkCallout from '../left-sidebar/LeftSidebarLinkCallout';

function CollapsibleSidebarItem(props) {
  var callout = props.callout,
      collapsedElement = props.collapsedElement,
      expanded = props.expanded,
      expandedElement = props.expandedElement,
      _props$shouldHideTool = props.shouldHideTooltip,
      shouldHideTooltip = _props$shouldHideTool === void 0 ? false : _props$shouldHideTool,
      tooltipMessage = props.tooltipMessage;

  if (callout) {
    var calloutChildren = expanded ? expandedElement : collapsedElement;
    return React.createElement(LeftSidebarLinkCallout, {
      attachmentPosition: "bottom left",
      callout: callout,
      targetAttachmentPosition: "bottom right"
    }, calloutChildren);
  }

  var wrappedCollapsedElement = React.createElement(Tooltip, {
    isTabbable: false,
    position: "middle-right",
    text: tooltipMessage,
    isDisabled: !tooltipMessage,
    isShown: shouldHideTooltip ? false : undefined
  }, collapsedElement);
  return expanded ? expandedElement : wrappedCollapsedElement;
}

export default CollapsibleSidebarItem;
//# sourceMappingURL=CollapsibleSidebarItem.js.map