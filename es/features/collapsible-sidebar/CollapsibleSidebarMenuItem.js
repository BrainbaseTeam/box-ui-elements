function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import Tooltip from '../../components/tooltip';
import { useIsContentOverflowed } from '../../utils/dom';
import CollapsibleSidebarContext from './CollapsibleSidebarContext';
var StyledMenuItem = styled.div.withConfig({
  displayName: "CollapsibleSidebarMenuItem__StyledMenuItem",
  componentId: "sc-1fmdq8m-0"
})(["position:relative;&:hover a{background-color:", ";}&:hover a.is-currentPage{background-color:", ";}body.is-move-dragging & a:hover{background-color:", ";.bdl-CollapsibleSidebar-menuItemIcon{opacity:0.7;}}.bdl-CollapsibleSidebar-menuItemActionContainer{position:absolute;top:12px;right:8px;padding:0;opacity:0;&:hover,&:focus-within{opacity:1;}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.primary.backgroundHover;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.primary.backgroundActive;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.primary.background;
});
var StyledIconWrapper = styled.span.withConfig({
  displayName: "CollapsibleSidebarMenuItem__StyledIconWrapper",
  componentId: "sc-1fmdq8m-1"
})(["line-height:0;opacity:0.7;& path,& .fill-color{fill:", ";}a:active &,a:hover &,a:focus &,a.is-currentPage &{opacity:1;}"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.primary.foreground;
});
var StyledMenuItemLabel = styled.span.withConfig({
  displayName: "CollapsibleSidebarMenuItem__StyledMenuItemLabel",
  componentId: "sc-1fmdq8m-2"
})(["flex-grow:1;overflow:hidden;color:", ";text-overflow:ellipsis;opacity:0.85;&.overflow-action{margin-right:12px;}a:active &,a:hover &,a:focus &,a.is-currentPage &{opacity:1;}"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.primary.foreground;
}); // {...rest} props will go here, such as `as` prop to adjust the component name.
// In most cases the consumer will want the tag to use a `Link` instead of `a`.

var StyledLink = styled.a.withConfig({
  displayName: "CollapsibleSidebarMenuItem__StyledLink",
  componentId: "sc-1fmdq8m-3"
})(["display:flex;align-items:center;height:", "px;padding:0 ", "px;overflow-x:hidden;color:", ";font-weight:bold;white-space:nowrap;border:1px solid transparent;border-radius:", "px;transition:background-color 0.15s cubic-bezier(0.215,0.61,0.355,1);&:hover,&:active,&:focus,&.is-currentPage{.bdl-CollapsibleSidebar-menuItemIcon,.bdl-CollapsibleSidebar-menuItemLabel{opacity:1;}}&:focus{border-color:", ";outline:none;}&:focus:active{border-color:transparent;}&.is-currentPage{background-color:", ";}&.is-currentPage:active{border-color:", ";}.bdl-CollapsibleSidebar-menuItemIcon + .bdl-CollapsibleSidebar-menuItemLabel{margin-left:16px;}&.show-overflowAction + .bdl-CollapsibleSidebar-menuItemActionContainer,&:focus + .bdl-CollapsibleSidebar-menuItemActionContainer,&:hover + .bdl-CollapsibleSidebar-menuItemActionContainer{opacity:1;}"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.base.gridUnitPx * 10;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.base.gridUnitPx * 3;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.primary.foreground;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.base.gridUnitPx * 2;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.primary.foreground;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.primary.backgroundActive;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.primary.foreground;
});

function CollapsibleSidebarMenuItem(props) {
  var className = props.className,
      content = props.content,
      icon = props.icon,
      linkClassName = props.linkClassName,
      overflowAction = props.overflowAction,
      showOverflowAction = props.showOverflowAction,
      text = props.text,
      _props$shouldHideTool = props.shouldHideTooltip,
      shouldHideTooltip = _props$shouldHideTool === void 0 ? false : _props$shouldHideTool,
      rest = _objectWithoutProperties(props, ["className", "content", "icon", "linkClassName", "overflowAction", "showOverflowAction", "text", "shouldHideTooltip"]);

  var textRef = React.useRef(null);
  var isTextOverflowed = useIsContentOverflowed(textRef);

  var _React$useContext = React.useContext(CollapsibleSidebarContext),
      isScrolling = _React$useContext.isScrolling;

  var isShowOverflowActionOnHover = showOverflowAction === 'hover';
  var menuItemClassName = classNames('bdl-CollapsibleSidebar-menuItem', className);
  var menuItemLinkClassName = classNames('bdl-CollapsibleSidebar-menuItemLink', linkClassName, {
    'show-overflowAction': !isShowOverflowActionOnHover
  });
  var menuItemLabelClassName = classNames('bdl-CollapsibleSidebar-menuItemLabel', {
    'overflow-action': overflowAction
  });

  var renderMenuItem = function renderMenuItem() {
    return React.createElement(StyledMenuItem, {
      className: menuItemClassName
    }, React.createElement(StyledLink, _extends({
      className: menuItemLinkClassName
    }, rest), icon && React.createElement(StyledIconWrapper, {
      className: "bdl-CollapsibleSidebar-menuItemIcon"
    }, icon), text && React.createElement(StyledMenuItemLabel, {
      ref: textRef,
      className: menuItemLabelClassName
    }, text), content), overflowAction && React.createElement("span", {
      className: "bdl-CollapsibleSidebar-menuItemActionContainer"
    }, overflowAction));
  };

  if (isScrolling) {
    return renderMenuItem();
  }

  return React.createElement(Tooltip, {
    className: classNames('bdl-CollapsibleSidebar-menuItemToolTip'),
    isDisabled: !isTextOverflowed,
    isShown: isScrolling || shouldHideTooltip ? false : undefined,
    isTabbable: false,
    position: "middle-right",
    text: text
  }, renderMenuItem());
}

export default CollapsibleSidebarMenuItem;
//# sourceMappingURL=CollapsibleSidebarMenuItem.js.map