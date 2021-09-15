function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';
import { bdlGridUnit } from '../../styles/variables';
import Logo from '../../icon/logo/BoxLogo';
import PlainButton from '../../components/plain-button/PlainButton';
import LinkBase from '../../components/link/LinkBase';
import IconHamburger from '../../icons/general/IconHamburger';
import CollapsibleSidebarItem from './CollapsibleSidebarItem';
import messages from './messages';
var StyledLogo = styled(Logo).withConfig({
  displayName: "CollapsibleSidebarLogo__StyledLogo",
  componentId: "sc-6amevi-0"
})(["padding:", ";border:1px solid transparent;border-radius:8px;& path,& .fill-color{fill:", ";}a:focus &{border-color:", ";outline:none;}"], bdlGridUnit, function (props) {
  var _props$theme, _props$theme$primary;

  return (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : (_props$theme$primary = _props$theme.primary) === null || _props$theme$primary === void 0 ? void 0 : _props$theme$primary.foreground;
}, function (props) {
  var _props$theme2, _props$theme2$primary;

  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : (_props$theme2$primary = _props$theme2.primary) === null || _props$theme2$primary === void 0 ? void 0 : _props$theme2$primary.foreground;
});
var StyledIconHamburger = styled(IconHamburger).withConfig({
  displayName: "CollapsibleSidebarLogo__StyledIconHamburger",
  componentId: "sc-6amevi-1"
})(["position:relative;top:1px;& .fill-color{fill:", ";}"], function (props) {
  return props.theme.primary.foreground;
});
var StyledToggleButton = styled(PlainButton).withConfig({
  displayName: "CollapsibleSidebarLogo__StyledToggleButton",
  componentId: "sc-6amevi-2"
})(["&,&:focus,&:active,&:hover{padding:8px 12px;line-height:1;border-color:transparent;border-style:solid;border-width:1px;border-radius:8px;}&:focus{border-color:", ";outline:none;}"], function (props) {
  var _props$theme3, _props$theme3$primary;

  return props === null || props === void 0 ? void 0 : (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : (_props$theme3$primary = _props$theme3.primary) === null || _props$theme3$primary === void 0 ? void 0 : _props$theme3$primary.foreground;
});

function CollapsibleSidebarLogo(props) {
  var badge = props.badge,
      buttonProps = props.buttonProps,
      className = props.className,
      expanded = props.expanded,
      linkProps = props.linkProps,
      onToggle = props.onToggle,
      intl = props.intl;
  var classes = classNames('bdl-CollapsibleSidebar-logo', className);
  var toggleButton = React.createElement(StyledToggleButton, _extends({
    className: "bdl-CollapsibleSidebar-toggleButton",
    onClick: onToggle,
    "aria-label": intl.formatMessage(expanded ? messages.collapseButtonLabel : messages.expandButtonLabel),
    type: "button"
  }, buttonProps), React.createElement(StyledIconHamburger, {
    height: 20,
    width: 20
  }));
  return React.createElement("div", {
    className: classes
  }, React.createElement(CollapsibleSidebarItem, {
    collapsedElement: toggleButton,
    expanded: expanded,
    expandedElement: React.createElement(React.Fragment, null, toggleButton, React.createElement(LinkBase, _extends({
      className: "bdl-CollapsibleSidebar-logoLink"
    }, linkProps), React.createElement(React.Fragment, null, React.createElement(StyledLogo, {
      className: "bdl-CollapsibleSidebar-logoIcon",
      height: 32 + 2 * 1
      /* border */
      + 2 * 4
      /* padding */
      ,
      width: 61 + 2 * 1
      /* border */
      + 2 * 4
      /* padding */

    }), badge)))
  }));
}

export default injectIntl(CollapsibleSidebarLogo);
//# sourceMappingURL=CollapsibleSidebarLogo.js.map