function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import * as React from 'react';
import CategorySelector from './CategorySelector';
import notes from './CategorySelector.stories.md';
var categories = [{
  value: 'all',
  displayText: 'All'
}, {
  value: 'legal',
  displayText: 'Legal'
}, {
  value: 'marketing',
  displayText: 'Marketing'
}, {
  value: 'hr',
  displayText: 'HR'
}, {
  value: 'bizops',
  displayText: 'Business Operations'
}, {
  value: 'sales',
  displayText: 'Sales'
}, {
  value: 'finance',
  displayText: 'Finance'
}];

var CategorySelectorContainer = function CategorySelectorContainer() {
  var _React$useState = React.useState('all'),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      category = _React$useState2[0],
      setCategory = _React$useState2[1];

  return React.createElement(CategorySelector, {
    categories: categories,
    currentCategory: category,
    onSelect: function onSelect(value) {
      setCategory(value);
    }
  });
};

export var basic = function basic() {
  return React.createElement(CategorySelectorContainer, null);
};
export var withDropdown = function withDropdown() {
  return React.createElement("div", {
    style: {
      width: 400
    }
  }, React.createElement(CategorySelectorContainer, null));
};
export default {
  title: 'Components|CategorySelector',
  component: CategorySelector,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=CategorySelector.stories.js.map