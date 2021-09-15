/**
 * 
 * @file Preview sidebar nav component
 * @author Box
 */
import * as React from 'react';
import { injectIntl } from 'react-intl';
import AdditionalTabs from './additional-tabs';
import IconChatRound from '../../icons/general/IconChatRound';
import IconDocInfo from '../../icons/general/IconDocInfo';
import IconMagicWand from '../../icons/general/IconMagicWand';
import IconMetadataThick from '../../icons/general/IconMetadataThick';
import SidebarNavButton from './SidebarNavButton';
import SidebarNavSign from './SidebarNavSign';
import SidebarNavTablist from './SidebarNavTablist';
import SidebarToggle from './SidebarToggle';
import messages from '../common/messages';
import { SIDEBAR_NAV_TARGETS } from '../common/interactionTargets';
import { SIDEBAR_VIEW_SKILLS, SIDEBAR_VIEW_ACTIVITY, SIDEBAR_VIEW_DETAILS, SIDEBAR_VIEW_METADATA } from '../../constants';
import { useFeatureConfig } from '../common/feature-checking';
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

  var _useFeatureConfig = useFeatureConfig('boxSign'),
      hasBoxSign = _useFeatureConfig.enabled,
      onBoxSignClick = _useFeatureConfig.onClick,
      boxSignStatus = _useFeatureConfig.status,
      boxSignTargetingApi = _useFeatureConfig.targetingApi;

  return React.createElement("div", {
    className: "bcs-SidebarNav",
    "aria-label": intl.formatMessage(messages.sidebarNavLabel)
  }, React.createElement("div", {
    className: "bcs-SidebarNav-tabs"
  }, React.createElement(SidebarNavTablist, {
    elementId: elementId,
    isOpen: isOpen,
    onNavigate: onNavigate
  }, hasActivity && React.createElement(SidebarNavButton, {
    "data-resin-target": SIDEBAR_NAV_TARGETS.ACTIVITY,
    "data-testid": "sidebaractivity",
    sidebarView: SIDEBAR_VIEW_ACTIVITY,
    tooltip: intl.formatMessage(messages.sidebarActivityTitle)
  }, React.createElement(IconChatRound, null)), hasDetails && React.createElement(SidebarNavButton, {
    "data-resin-target": SIDEBAR_NAV_TARGETS.DETAILS,
    "data-testid": "sidebardetails",
    sidebarView: SIDEBAR_VIEW_DETAILS,
    tooltip: intl.formatMessage(messages.sidebarDetailsTitle)
  }, React.createElement(IconDocInfo, null)), hasSkills && React.createElement(SidebarNavButton, {
    "data-resin-target": SIDEBAR_NAV_TARGETS.SKILLS,
    "data-testid": "sidebarskills",
    sidebarView: SIDEBAR_VIEW_SKILLS,
    tooltip: intl.formatMessage(messages.sidebarSkillsTitle)
  }, React.createElement(IconMagicWand, null)), hasMetadata && React.createElement(SidebarNavButton, {
    "data-resin-target": SIDEBAR_NAV_TARGETS.METADATA,
    "data-testid": "sidebarmetadata",
    sidebarView: SIDEBAR_VIEW_METADATA,
    tooltip: intl.formatMessage(messages.sidebarMetadataTitle)
  }, React.createElement(IconMetadataThick, null))), hasBoxSign && onBoxSignClick && React.createElement("div", {
    className: "bcs-SidebarNav-secondary"
  }, React.createElement(SidebarNavSign, {
    "data-resin-target": SIDEBAR_NAV_TARGETS.SIGN,
    onClick: function onClick() {
      return onBoxSignClick({
        fileId: fileId
      });
    },
    status: boxSignStatus,
    targetingApi: boxSignTargetingApi
  })), hasAdditionalTabs && React.createElement("div", {
    className: "bcs-SidebarNav-overflow"
  }, React.createElement(AdditionalTabs, {
    key: fileId,
    tabs: additionalTabs
  }))), React.createElement("div", {
    className: "bcs-SidebarNav-footer"
  }, React.createElement(SidebarToggle, {
    isOpen: isOpen
  })));
};

export default injectIntl(SidebarNav);
//# sourceMappingURL=SidebarNav.js.map