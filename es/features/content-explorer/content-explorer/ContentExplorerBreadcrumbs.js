import PropTypes from 'prop-types';
import React from 'react';
import { injectIntl } from 'react-intl';
import Button from '../../../components/button';
import PlainButton from '../../../components/plain-button';
import Breadcrumb from '../../../components/breadcrumb';
import IconChevron from '../../../icons/general/IconChevron';
import IconAllFiles from '../../../icons/general/IconAllFiles';
import { FoldersPathPropType } from '../prop-types';
import messages from '../messages';

var ContentExplorerBreadcrumbs = function ContentExplorerBreadcrumbs(_ref) {
  var foldersPath = _ref.foldersPath,
      formatMessage = _ref.intl.formatMessage,
      _ref$isUpButtonDisabl = _ref.isUpButtonDisabled,
      isUpButtonDisabled = _ref$isUpButtonDisabl === void 0 ? false : _ref$isUpButtonDisabl,
      onUpButtonClick = _ref.onUpButtonClick,
      onBreadcrumbClick = _ref.onBreadcrumbClick;
  return React.createElement("div", {
    className: "content-explorer-breadcrumbs-container"
  }, React.createElement(Button, {
    "aria-label": formatMessage(messages.clickToGoBack),
    className: "content-explorer-breadcrumbs-up-button",
    type: "button",
    onClick: onUpButtonClick,
    isDisabled: isUpButtonDisabled
  }, React.createElement(IconChevron, {
    direction: "left",
    size: "6px",
    color: "#333"
  })), React.createElement(Breadcrumb, {
    label: formatMessage(messages.breadcrumb)
  }, foldersPath.map(function (folder, i) {
    return React.createElement(PlainButton, {
      className: "lnk",
      key: folder.id,
      title: folder.name,
      onClick: function onClick(event) {
        return onBreadcrumbClick(i, event);
      }
    }, i === 0 && React.createElement(IconAllFiles, null), React.createElement("span", null, folder.name));
  })));
};

ContentExplorerBreadcrumbs.propTypes = {
  foldersPath: FoldersPathPropType.isRequired,
  intl: PropTypes.any,
  isUpButtonDisabled: PropTypes.bool,
  onUpButtonClick: PropTypes.func,
  onBreadcrumbClick: PropTypes.func
};
export { ContentExplorerBreadcrumbs as ContentExplorerBreadcrumbsBase };
export default injectIntl(ContentExplorerBreadcrumbs);
//# sourceMappingURL=ContentExplorerBreadcrumbs.js.map