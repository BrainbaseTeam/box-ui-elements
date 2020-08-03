import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import FolderEmptyState from '../../../icons/states/FolderEmptyState';
import SearchEmptyState from '../../../icons/states/SearchEmptyState';
import messages from '../messages';

var ContentExplorerEmptyState = function ContentExplorerEmptyState(_ref) {
  var _ref$isSearch = _ref.isSearch,
      isSearch = _ref$isSearch === void 0 ? false : _ref$isSearch;
  return /*#__PURE__*/React.createElement("div", {
    className: "content-explorer-empty-state themed"
  }, isSearch ? /*#__PURE__*/React.createElement(SearchEmptyState, null) : /*#__PURE__*/React.createElement(FolderEmptyState, null), /*#__PURE__*/React.createElement("span", {
    className: "content-explorer-empty-state-text"
  }, isSearch ? /*#__PURE__*/React.createElement(FormattedMessage, messages.emptySearch) : /*#__PURE__*/React.createElement(FormattedMessage, messages.emptyFolder)));
};

ContentExplorerEmptyState.propTypes = {
  isSearch: PropTypes.bool
};
export default ContentExplorerEmptyState;
//# sourceMappingURL=ContentExplorerEmptyState.js.map