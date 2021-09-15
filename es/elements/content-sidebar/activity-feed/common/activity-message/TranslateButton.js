/**
 * 
 * @file Translate button component used by Comment Text component
 */
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import PlainButton from '../../../../../components/plain-button';
import messages from './messages';

var TranslateButton = function TranslateButton(_ref) {
  var handleTranslate = _ref.handleTranslate;
  return React.createElement(PlainButton, {
    className: "bcs-ActivityMessage-translate",
    onClick: handleTranslate
  }, React.createElement(FormattedMessage, messages.activityMessageTranslate));
};

export default TranslateButton;
//# sourceMappingURL=TranslateButton.js.map