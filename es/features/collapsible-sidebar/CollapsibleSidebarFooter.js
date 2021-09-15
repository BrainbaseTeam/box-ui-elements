import * as React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
var StyledFooter = styled.div.withConfig({
  displayName: "CollapsibleSidebarFooter__StyledFooter",
  componentId: "cp762h-0"
})(["& .bdl-CollapsibleSidebar-menuItemLink{background-color:", ";}& .bdl-CollapsibleSidebar-menuItem:hover .bdl-CollapsibleSidebar-menuItemLink,& .bdl-CollapsibleSidebar-menuItem:hover:not(.is-currentPage) .bdl-CollapsibleSidebar-menuItemLink{background-color:", ";color:", ";}.is-currentPage & .bdl-CollapsibleSidebar-menuItemLink,& .bdl-CollapsibleSidebar-menuItemLink:active{background-color:", ";color:", ";}"], function (props) {
  return props.theme.primary.backgroundHover;
}, function (props) {
  return props.theme.primary.backgroundActive;
}, function (props) {
  return props.theme.primary.foreground;
}, function (props) {
  return props.theme.primary.backgroundActive;
}, function (props) {
  return props.theme.primary.foreground;
});

function CollapsibleSidebarFooter(props) {
  var className = props.className,
      children = props.children;
  var classes = classNames('bdl-CollapsibleSidebar-footer', className);
  return React.createElement(StyledFooter, {
    className: classes
  }, children);
}

export default CollapsibleSidebarFooter;
//# sourceMappingURL=CollapsibleSidebarFooter.js.map