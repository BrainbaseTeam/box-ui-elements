import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import ErrorMask from '../../../components/error-mask/ErrorMask';
import messages from '../messages';
import './DefaultError.scss';

var DefaultError = function DefaultError() {
  return React.createElement("section", {
    className: "be-default-error"
  }, React.createElement(ErrorMask, {
    errorHeader: React.createElement(FormattedMessage, messages.defaultErrorMaskHeaderMessage),
    errorSubHeader: React.createElement(FormattedMessage, messages.defaultErrorMaskSubHeaderMessage)
  }));
};

export default DefaultError;
//# sourceMappingURL=DefaultError.js.map