function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import classnames from 'classnames';
import PlainButton from '../plain-button/PlainButton'; // @ts-ignore flow import

import DropdownMenu, { MenuToggle } from '../dropdown-menu';
import { Menu, SelectMenuItem } from '../menu';
import messages from './messages';
import './CategorySelector.scss';

var CategorySelectorComponent = function CategorySelectorComponent(_ref) {
  var measureRef = _ref.measureRef,
      moreRef = _ref.moreRef,
      className = _ref.className,
      categories = _ref.categories,
      maxLinks = _ref.maxLinks,
      currentCategory = _ref.currentCategory,
      categoryProps = _ref.categoryProps,
      onSelect = _ref.onSelect;
  var linkCategories = categories.slice(0, maxLinks);
  var overflowCategories = categories.slice(maxLinks);
  var selectedOverflow = overflowCategories.find(function (_ref2) {
    var value = _ref2.value;
    return currentCategory === value;
  });

  var renderCategory = function renderCategory(_ref3) {
    var value = _ref3.value,
        displayText = _ref3.displayText;
    return React.createElement("span", _extends({
      key: value,
      className: classnames('bdl-CategorySelector-pill', {
        'is-selected': value === currentCategory
      }),
      "data-category": value,
      "data-resin-target": "selectcategory",
      "data-resin-template_category": displayText,
      "data-testid": "template-category-".concat(value),
      onClick: function onClick() {
        return onSelect(value);
      },
      onKeyPress: function onKeyPress(event) {
        if (event.key === 'Enter' || event.key === ' ') onSelect(value);
      },
      role: "button",
      tabIndex: 0
    }, categoryProps), displayText);
  };

  return React.createElement("div", {
    ref: measureRef,
    className: classnames(className, 'bdl-CategorySelector')
  }, React.createElement("div", {
    className: "bdl-CategorySelector-links"
  }, linkCategories.map(renderCategory)), React.createElement("div", {
    ref: moreRef,
    className: classnames('bdl-CategorySelector-more', {
      hide: maxLinks >= categories.length
    })
  }, React.createElement(DropdownMenu, {
    className: "dropdownWrapper",
    isRightAligned: true
  }, React.createElement(PlainButton, {
    className: classnames('bdl-CategorySelector-more-label', {
      'is-selected': selectedOverflow
    })
  }, React.createElement(MenuToggle, null, selectedOverflow ? selectedOverflow.displayText : React.createElement(FormattedMessage, messages.more))), React.createElement(Menu, null, overflowCategories.map(function (_ref4) {
    var value = _ref4.value,
        displayText = _ref4.displayText;
    return React.createElement(SelectMenuItem, {
      key: value,
      "data-testid": "template-category-more-".concat(value),
      isSelected: value === currentCategory,
      onClick: function onClick() {
        return onSelect(value);
      }
    }, displayText);
  })))));
};

export default CategorySelectorComponent;
//# sourceMappingURL=CategorySelectorComponent.js.map