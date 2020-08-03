/**
 * 
 * @file Sidebar Toggle component
 * @author Box
 */
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import SidebarToggleButton from '../../components/sidebar-toggle-button/SidebarToggleButton';
import { SIDEBAR_NAV_TARGETS } from '../common/interactionTargets';

var SidebarToggle = function SidebarToggle(_ref) {
  var history = _ref.history,
      isOpen = _ref.isOpen;
  return /*#__PURE__*/React.createElement(SidebarToggleButton, {
    "data-resin-target": SIDEBAR_NAV_TARGETS.TOGGLE,
    isOpen: isOpen,
    onClick: function onClick(event) {
      event.preventDefault();
      history.replace({
        state: {
          open: !isOpen
        }
      });
    }
  });
};

export { SidebarToggle as SidebarToggleComponent };
export default withRouter(SidebarToggle);
//# sourceMappingURL=SidebarToggle.js.map