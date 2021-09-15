/**
 * 
 * @file a placeholder component which will be displayed while a code splitted sidebar chunk is being loaded asyncronously
 * @author Box
 */
import * as React from 'react';
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';
import SidebarContent from './SidebarContent';
import SidebarSection from './SidebarSection';
import './SidebarLoading.scss';

var SidebarLoading = function SidebarLoading(_ref) {
  var title = _ref.title;
  return React.createElement(SidebarContent, {
    title: title
  }, React.createElement(SidebarSection, {
    isOpen: true
  }, React.createElement(LoadingIndicator, {
    className: "bcs-sidebar-loading"
  })));
};

export default SidebarLoading;
//# sourceMappingURL=SidebarLoading.js.map