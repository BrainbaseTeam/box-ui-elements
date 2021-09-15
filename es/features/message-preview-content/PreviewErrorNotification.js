import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import Picture16 from '../../icon/fill/Picture16';
import messages from './messages';
import './styles/PreviewErrorNotification.scss';

function PreviewErrorNotification() {
  return React.createElement("div", {
    className: "PreviewErrorNotification"
  }, React.createElement(Picture16, {
    className: "PreviewErrorNotification-image"
  }), React.createElement("div", {
    className: "PreviewErrorNotification-message"
  }, React.createElement(FormattedMessage, messages.messagePreviewError)));
}

export default PreviewErrorNotification;
//# sourceMappingURL=PreviewErrorNotification.js.map