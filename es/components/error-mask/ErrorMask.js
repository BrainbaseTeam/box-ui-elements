import * as React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import IconSadCloud from '../../icons/general/IconSadCloud';
import './ErrorMask.scss';
var messages = defineMessages({
  errorMaskIconSadCloudText: {
    "id": "boxui.errorMask.iconSadCloudText",
    "defaultMessage": "Sad Box Cloud"
  }
});

var ErrorMask = function ErrorMask(_ref) {
  var errorHeader = _ref.errorHeader,
      errorSubHeader = _ref.errorSubHeader;
  return React.createElement("div", {
    className: "error-mask"
  }, React.createElement(IconSadCloud, {
    className: "error-mask-sad-cloud",
    height: 50,
    title: React.createElement(FormattedMessage, messages.errorMaskIconSadCloudText)
  }), React.createElement("h4", null, errorHeader), React.createElement("h5", null, errorSubHeader));
};

export default ErrorMask;
//# sourceMappingURL=ErrorMask.js.map