function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from 'prop-types';
import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import Checkbox from '../../../components/checkbox/Checkbox';
import messages from '../messages';

var ContentExplorerSelectAll = function ContentExplorerSelectAll(_ref) {
  var intl = _ref.intl,
      _ref$numTotalItems = _ref.numTotalItems,
      numTotalItems = _ref$numTotalItems === void 0 ? 0 : _ref$numTotalItems,
      isSelectAllChecked = _ref.isSelectAllChecked,
      handleSelectAllClick = _ref.handleSelectAllClick;
  return React.createElement("div", {
    className: "content-explorer-select-all-container"
  }, React.createElement("label", {
    className: "content-explorer-select-all-items-counter"
  }, numTotalItems === 1 ? React.createElement(FormattedMessage, _extends({}, messages.result, {
    values: {
      itemsCount: intl.formatNumber(numTotalItems)
    }
  })) : React.createElement(FormattedMessage, _extends({}, messages.results, {
    values: {
      itemsCount: intl.formatNumber(numTotalItems)
    }
  }))), React.createElement("label", {
    className: "content-explorer-select-all-checkbox-label"
  }, React.createElement(FormattedMessage, messages.selectAll)), React.createElement(Checkbox, {
    hideLabel: true,
    className: "content-explorer-select-all-checkbox",
    onChange: handleSelectAllClick,
    isChecked: isSelectAllChecked
  }));
};

ContentExplorerSelectAll.propTypes = {
  intl: PropTypes.any,
  numTotalItems: PropTypes.number,
  isSelectAllChecked: PropTypes.bool,
  handleSelectAllClick: PropTypes.func
};
export { ContentExplorerSelectAll as ContentExplorerSelectAllBase };
export default injectIntl(ContentExplorerSelectAll);
//# sourceMappingURL=ContentExplorerSelectAll.js.map