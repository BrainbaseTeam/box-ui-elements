/**
 * 
 * @file Preview sidebar additional tabs loading component
 * @author Box
 */
import * as React from 'react';
import AdditionalTabPlaceholder from './AdditionalTabPlaceholder';
import MoreTabPlaceholder from './MoreTabPlaceholder';
import './AdditionalTabsLoading.scss'; // Loading layout for the sidebar's additional tabs

var LOADING_TABS = [AdditionalTabPlaceholder, AdditionalTabPlaceholder, AdditionalTabPlaceholder, AdditionalTabPlaceholder, AdditionalTabPlaceholder, MoreTabPlaceholder];

var AdditionalTabsLoading = function AdditionalTabsLoading() {
  return LOADING_TABS.map(function (LoadingComponent, idx) {
    return React.createElement(LoadingComponent, {
      isLoading: true,
      key: idx
    });
  });
};

export default AdditionalTabsLoading;
//# sourceMappingURL=AdditionalTabsLoading.js.map