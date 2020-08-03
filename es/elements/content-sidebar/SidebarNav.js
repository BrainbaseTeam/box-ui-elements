/**
 * 
 * @file Preview sidebar nav component
 * @author Box
 */
import * as React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import IconMagicWand from '../../icons/general/IconMagicWand';
import IconMetadataThick from '../../icons/general/IconMetadataThick';
import IconDocInfo from '../../icons/general/IconDocInfo';
import IconChatRound from '../../icons/general/IconChatRound';
import messages from '../common/messages';
import { SIDEBAR_NAV_TARGETS } from '../common/interactionTargets';
import SidebarNavButton from './SidebarNavButton';
import SidebarToggle from './SidebarToggle';
import AdditionalTabs from './additional-tabs';
import SidebarNavTablist from './SidebarNavTablist';
import { SIDEBAR_VIEW_SKILLS, SIDEBAR_VIEW_ACTIVITY, SIDEBAR_VIEW_DETAILS, SIDEBAR_VIEW_METADATA } from '../../constants';
import './SidebarNav.scss';

var SidebarNav = function SidebarNav(_ref) {
  var additionalTabs = _ref.additionalTabs,
      elementId = _ref.elementId,
      fileId = _ref.fileId,
      hasActivity = _ref.hasActivity,
      hasAdditionalTabs = _ref.hasAdditionalTabs,
      hasDetails = _ref.hasDetails,
      hasMetadata = _ref.hasMetadata,
      hasSkills = _ref.hasSkills,
      intl = _ref.intl,
      isOpen = _ref.isOpen,
      onNavigate = _ref.onNavigate;
  return /*#__PURE__*/React.createElement("div", {
    className: "bcs-SidebarNav",
    "aria-label": intl.formatMessage(messages.sidebarNavLabel)
  }, /*#__PURE__*/React.createElement("div", {
    className: "bcs-SidebarNav-tabs"
  }, /*#__PURE__*/React.createElement(SidebarNavTablist, {
    elementId: elementId,
    isOpen: isOpen,
    onNavigate: onNavigate
  }, hasActivity && /*#__PURE__*/React.createElement(SidebarNavButton, {
    "data-resin-target": SIDEBAR_NAV_TARGETS.ACTIVITY,
    sidebarView: SIDEBAR_VIEW_ACTIVITY,
    tooltip: /*#__PURE__*/React.createElement(FormattedMessage, messages.sidebarActivityTitle)
  }, /*#__PURE__*/React.createElement(IconChatRound, null)), hasDetails && /*#__PURE__*/React.createElement(SidebarNavButton, {
    "data-resin-target": SIDEBAR_NAV_TARGETS.DETAILS,
    sidebarView: SIDEBAR_VIEW_DETAILS,
    tooltip: /*#__PURE__*/React.createElement(FormattedMessage, messages.sidebarDetailsTitle)
  }, /*#__PURE__*/React.createElement(IconDocInfo, null)), hasSkills && /*#__PURE__*/React.createElement(SidebarNavButton, {
    "data-resin-target": SIDEBAR_NAV_TARGETS.SKILLS,
    sidebarView: SIDEBAR_VIEW_SKILLS,
    tooltip: /*#__PURE__*/React.createElement(FormattedMessage, messages.sidebarSkillsTitle)
  }, /*#__PURE__*/React.createElement(IconMagicWand, null)), hasMetadata && /*#__PURE__*/React.createElement(SidebarNavButton, {
    "data-resin-target": SIDEBAR_NAV_TARGETS.METADATA,
    sidebarView: SIDEBAR_VIEW_METADATA,
    tooltip: /*#__PURE__*/React.createElement(FormattedMessage, messages.sidebarMetadataTitle)
  }, /*#__PURE__*/React.createElement(IconMetadataThick, null))), hasAdditionalTabs && /*#__PURE__*/React.createElement("div", {
    className: "bcs-SidebarNav-overflow"
  }, /*#__PURE__*/React.createElement(AdditionalTabs, {
    key: fileId,
    tabs: additionalTabs
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bcs-SidebarNav-footer"
  }, /*#__PURE__*/React.createElement(SidebarToggle, {
    isOpen: isOpen
  })));
};

export default injectIntl(SidebarNav);
//# sourceMappingURL=SidebarNav.js.map