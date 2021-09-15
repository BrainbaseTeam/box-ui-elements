/**
 * 
 * @file integration portal container
 * @author Box
 */
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import ErrorMask from '../../components/error-mask/ErrorMask';
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';
import messages from '../common/messages';
import IntegrationPortal from './IntegrationPortal';

var IntegrationPortalContainer = function IntegrationPortalContainer(_ref) {
  var hasError = _ref.hasError,
      integrationWindow = _ref.integrationWindow;
  return React.createElement(IntegrationPortal, {
    integrationWindow: integrationWindow
  }, React.createElement("div", {
    className: "be bcow bcow-portal-container"
  }, hasError ? React.createElement(ErrorMask, {
    errorHeader: React.createElement(FormattedMessage, messages.executeIntegrationOpenWithErrorHeader),
    errorSubHeader: React.createElement(FormattedMessage, messages.executeIntegrationOpenWithErrorSubHeader)
  }) : React.createElement(LoadingIndicator, {
    className: "bcow-portal-loading-indicator",
    size: "large"
  })));
};

export default IntegrationPortalContainer;
//# sourceMappingURL=IntegrationPortalContainer.js.map