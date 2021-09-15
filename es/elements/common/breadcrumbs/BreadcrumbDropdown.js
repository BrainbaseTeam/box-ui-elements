/**
 * 
 * @file Drop down part of breadcrumbs
 * @author Box
 */
import React from 'react';
import PlainButton from '../../../components/plain-button/PlainButton';
import DropdownMenu from '../../../components/dropdown-menu/DropdownMenu';
import Menu from '../../../components/menu/Menu';
import MenuItem from '../../../components/menu/MenuItem';
import './BreadcrumbDropdown.scss';

var BreadcrumbDropdown = function BreadcrumbDropdown(_ref) {
  var crumbs = _ref.crumbs,
      onCrumbClick = _ref.onCrumbClick,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  return React.createElement(DropdownMenu, {
    constrainToScrollParent: true
  }, React.createElement(PlainButton, {
    className: "be-breadcrumbs-drop-down ".concat(className),
    type: "button"
  }, "\xB7\xB7\xB7"), React.createElement(Menu, null, crumbs.map(function (_ref2) {
    var id = _ref2.id,
        name = _ref2.name;
    return React.createElement(MenuItem, {
      key: id,
      onClick: function onClick() {
        return onCrumbClick(id);
      }
    }, name);
  })));
};

export default BreadcrumbDropdown;
//# sourceMappingURL=BreadcrumbDropdown.js.map