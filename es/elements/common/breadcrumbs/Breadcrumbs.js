/**
 * 
 * @file Component that creates breadcumbs for both the header and name details
 * @author Box
 */
import React from 'react';
import Breadcrumb from './Breadcrumb';
import BreadcrumbDropdown from './BreadcrumbDropdown';
import BreadcrumbDelimiter from './BreadcrumbDelimiter';
import { DELIMITER_SLASH, DELIMITER_CARET } from '../../../constants';
import './Breadcrumbs.scss';

/**
 * Filters out ancestors to root from the crumbs.
 * This is useful when the root is not All Files.
 *
 * @private
 * @param {string} rootId the root folder id
 * @param {Array} crumbs list of crumbs
 * @return {Array} crumbs
 */
function filterCrumbs(rootId, crumbs) {
  var rootIndex = crumbs.findIndex(function (crumb) {
    return crumb.id === rootId;
  });
  return rootIndex === -1 ? crumbs : crumbs.slice(rootIndex);
}
/**
 * Creates an individual breadcrumb
 *
 * @private
 * @param {Object} crumb single crumb data
 * @param {boolean} isLast is this the last crumb
 * @return {Element}
 */


function getBreadcrumb(crumbs, isLast, onCrumbClick, delimiter) {
  if (Array.isArray(crumbs)) {
    var condensed = delimiter !== DELIMITER_CARET;
    return /*#__PURE__*/React.createElement("span", {
      className: "be-breadcrumb-more"
    }, /*#__PURE__*/React.createElement(BreadcrumbDropdown, {
      className: condensed ? 'be-breadcrumbs-condensed' : '',
      crumbs: crumbs,
      onCrumbClick: onCrumbClick
    }), /*#__PURE__*/React.createElement(BreadcrumbDelimiter, {
      delimiter: condensed ? DELIMITER_SLASH : DELIMITER_CARET
    }));
  }

  var id = crumbs.id,
      name = crumbs.name;
  return /*#__PURE__*/React.createElement(Breadcrumb, {
    delimiter: delimiter,
    isLast: isLast,
    name: name,
    onClick: function onClick() {
      return onCrumbClick(id);
    }
  });
}

var Breadcrumbs = function Breadcrumbs(_ref) {
  var rootId = _ref.rootId,
      crumbs = _ref.crumbs,
      onCrumbClick = _ref.onCrumbClick,
      delimiter = _ref.delimiter,
      _ref$isSmall = _ref.isSmall,
      isSmall = _ref$isSmall === void 0 ? false : _ref$isSmall;

  if (!rootId || crumbs.length === 0) {
    return /*#__PURE__*/React.createElement("span", null);
  } // The crumbs given may have ancestors higher than the root. We need to filter them out.


  var filteredCrumbs = filterCrumbs(rootId, crumbs);
  var length = filteredCrumbs.length; // Always show the last/leaf breadcrumb.

  var crumb = filteredCrumbs[length - 1];
  var onClick = crumb.id ? function () {
    return onCrumbClick(crumb.id);
  } : undefined;
  var lastBreadcrumb = /*#__PURE__*/React.createElement(Breadcrumb, {
    isLast: true,
    name: crumb.name,
    onClick: onClick
  }); // Always show the second last/parent breadcrumb when there are at least 2 crumbs.

  var secondLastBreadcrumb = length > 1 ? getBreadcrumb(filteredCrumbs[length - 2], false, onCrumbClick, delimiter) : null; // Only show the more dropdown when there were at least 4 crumbs.

  var moreBreadcrumbs = length > 3 ? getBreadcrumb(filteredCrumbs.slice(1, length - 2), false, onCrumbClick, delimiter) : null; // Only show the root breadcrumb when there are at least 3 crumbs.

  var firstBreadcrumb = length > 2 ? getBreadcrumb(filteredCrumbs[0], false, onCrumbClick, delimiter) : null;
  return /*#__PURE__*/React.createElement("div", {
    className: "be-breadcrumbs"
  }, isSmall ? null : firstBreadcrumb, isSmall ? null : moreBreadcrumbs, secondLastBreadcrumb, lastBreadcrumb);
};

export default Breadcrumbs;
//# sourceMappingURL=Breadcrumbs.js.map