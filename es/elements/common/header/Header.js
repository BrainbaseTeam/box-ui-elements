/**
 * 
 * @file Header bar
 * @author Box
 */
import React from 'react';
import { injectIntl } from 'react-intl';
import Logo from './Logo';
import messages from '../messages';
import { VIEW_FOLDER, VIEW_SEARCH } from '../../../constants';
import './Header.scss';

// eslint-disable-next-line react/prop-types
var Header = function Header(_ref) {
  var view = _ref.view,
      isSmall = _ref.isSmall,
      searchQuery = _ref.searchQuery,
      onSearch = _ref.onSearch,
      logoUrl = _ref.logoUrl,
      intl = _ref.intl;

  var search = function search(_ref2) {
    var currentTarget = _ref2.currentTarget;
    return onSearch(currentTarget.value);
  };

  var isFolder = view === VIEW_FOLDER;
  var isSearch = view === VIEW_SEARCH;
  return /*#__PURE__*/React.createElement("div", {
    className: "be-header"
  }, /*#__PURE__*/React.createElement(Logo, {
    isSmall: isSmall,
    url: logoUrl
  }), /*#__PURE__*/React.createElement("div", {
    className: "be-search"
  }, /*#__PURE__*/React.createElement("input", {
    disabled: !isFolder && !isSearch,
    onChange: search,
    placeholder: intl.formatMessage(messages.searchPlaceholder),
    type: "search",
    value: searchQuery
  })));
};

export default injectIntl(Header);
//# sourceMappingURL=Header.js.map