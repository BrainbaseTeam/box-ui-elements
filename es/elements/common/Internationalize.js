/**
 * 
 * @file Wraps a component in an IntlProvider
 * @author Box
 */
import React, { Children } from 'react';
import { IntlProvider } from 'react-intl';

var Internationalize = function Internationalize(_ref) {
  var language = _ref.language,
      messages = _ref.messages,
      children = _ref.children;
  var shouldInternationalize = !!language && !!messages;

  if (shouldInternationalize) {
    return React.createElement(IntlProvider, {
      locale: language,
      messages: messages
    }, children);
  }

  return Children.only(children);
};

export default Internationalize;
//# sourceMappingURL=Internationalize.js.map