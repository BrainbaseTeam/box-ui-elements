import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import IconAddMetadataEmptyState from '../../icons/general/IconAddMetadataEmptyState';
import messages from './messages';
import './EmptyContent.scss';

var EmptyContent = function EmptyContent(_ref) {
  var canAdd = _ref.canAdd;
  return React.createElement("div", {
    className: "metadata-instance-editor-no-instances"
  }, React.createElement(IconAddMetadataEmptyState, null), React.createElement("p", {
    className: "metadata-instance-editor-no-instances--call-out"
  }, React.createElement(FormattedMessage, messages.noMetadata)), canAdd && React.createElement("p", {
    className: "metadata-instance-editor-no-instances--how-add-template"
  }, React.createElement(FormattedMessage, messages.noMetadataAddTemplate)));
};

export default EmptyContent;
//# sourceMappingURL=EmptyContent.js.map