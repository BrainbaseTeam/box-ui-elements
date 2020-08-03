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
      return /*#__PURE__*/React.createElement(SidebarSection, null, /*#__PURE__*/React.createElement(ErrorMask, {
        errorHeader: /*#__PURE__*/React.createElement(FormattedMessage, maskError.errorHeader),
        errorSubHeader: maskError.errorSubHeader ? /*#__PURE__*/React.createElement(FormattedMessage, maskError.errorSubHeader) : undefined
      }));
    }

    if (inlineError) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InlineError, {
        title: /*#__PURE__*/React.createElement(FormattedMessage, inlineError.title)
      }, /*#__PURE__*/React.createElement(FormattedMessage, inlineError.content)), /*#__PURE__*/React.createElement(WrappedComponent, rest));
    }

    return /*#__PURE__*/React.createElement(WrappedComponent, rest);
  };
};

export default withErrorHandling;
//# sourceMappingURL=withErrorHandling.js.map