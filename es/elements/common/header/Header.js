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
  var _ref$isHeaderLogoVisi = _ref.isHeaderLogoVisible,
      isHeaderLogoVisible = _ref$isHeaderLogoVisi === void 0 ? true : _ref$isHeaderLogoVisi,
      view = _ref.view,
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
  return React.createElement("div", {
    className: "be-header"
  }, isHeaderLogoVisible && React.createElement(Logo, {
    isSmall: isSmall,
    url: logoUrl
  }), React.createElement("div", {
    className: "be-search"
  }, React.createElement("input", {
    "aria-label": "search",
    disabled: !isFolder && !isSearch,
    onChange: search,
    placeholder: intl.formatMessage(messages.searchPlaceholder),
    type: "search",
    value: searchQuery
  })));
};

export default injectIntl(Header);
//# sourceMappingURL=Header.js.map