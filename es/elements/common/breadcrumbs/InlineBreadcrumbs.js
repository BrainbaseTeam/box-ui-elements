/**
 * 
 * @file Component for the details for the item name
 * @author Box
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';
import Breadcrumbs from './Breadcrumbs';
import { DELIMITER_SLASH } from '../../../constants';
import './InlineBreadcrumbs.scss';

var InlineBreadcrumbs = function InlineBreadcrumbs(_ref) {
  var item = _ref.item,
      onItemClick = _ref.onItemClick,
      rootId = _ref.rootId;
  var path_collection = item.path_collection;

  var _ref2 = path_collection || {},
      _ref2$entries = _ref2.entries,
      breadcrumbs = _ref2$entries === void 0 ? [] : _ref2$entries;

  return React.createElement("span", {
    className: "be-inline-breadcrumbs"
  }, React.createElement(FormattedMessage, messages.in), "\xA0", React.createElement(Breadcrumbs, {
    crumbs: breadcrumbs,
    delimiter: DELIMITER_SLASH,
    onCrumbClick: onItemClick,
    rootId: rootId
  }));
};

export default InlineBreadcrumbs;
//# sourceMappingURL=InlineBreadcrumbs.js.map