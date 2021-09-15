function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file withErrorHandling higher order component
 * @author Box
 */
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import ErrorMask from '../../components/error-mask/ErrorMask';
import InlineError from '../../components/inline-error/InlineError';
import SidebarSection from './SidebarSection';

var withErrorHandling = function withErrorHandling(WrappedComponent) {
  return function (_ref) {
    var maskError = _ref.maskError,
        inlineError = _ref.inlineError,
        errorCode = _ref.errorCode,
        rest = _objectWithoutProperties(_ref, ["maskError", "inlineError", "errorCode"]);

    if (maskError) {
      return React.createElement(SidebarSection, null, React.createElement(ErrorMask, {
        errorHeader: React.createElement(FormattedMessage, maskError.errorHeader),
        errorSubHeader: maskError.errorSubHeader ? React.createElement(FormattedMessage, maskError.errorSubHeader) : undefined
      }));
    }

    if (inlineError) {
      return React.createElement(React.Fragment, null, React.createElement(InlineError, {
        title: React.createElement(FormattedMessage, inlineError.title)
      }, React.createElement(FormattedMessage, inlineError.content)), React.createElement(WrappedComponent, rest));
    }

    return React.createElement(WrappedComponent, rest);
  };
};

export default withErrorHandling;
//# sourceMappingURL=withErrorHandling.js.map