import React from 'react';
import noop from 'lodash/noop';
import SuggestedPill from './SuggestedPill';
import './SuggestedPillsRow.scss';

var SuggestedPillsRow = function SuggestedPillsRow(_ref) {
  var _ref$onSuggestedPillA = _ref.onSuggestedPillAdd,
      onSuggestedPillAdd = _ref$onSuggestedPillA === void 0 ? noop : _ref$onSuggestedPillA,
      _ref$selectedPillsVal = _ref.selectedPillsValues,
      selectedPillsValues = _ref$selectedPillsVal === void 0 ? [] : _ref$selectedPillsVal,
      _ref$suggestedPillsDa = _ref.suggestedPillsData,
      suggestedPillsData = _ref$suggestedPillsDa === void 0 ? [] : _ref$suggestedPillsDa,
      _ref$suggestedPillsFi = _ref.suggestedPillsFilter,
      suggestedPillsFilter = _ref$suggestedPillsFi === void 0 ? 'id' : _ref$suggestedPillsFi,
      title = _ref.title;
  // Prevents pills from being rendered that are in the form by checking for value (id or custom value)
  var filteredSuggestedPillData = suggestedPillsData.filter(function (item) {
    return !selectedPillsValues.includes(item[suggestedPillsFilter]);
  });

  if (filteredSuggestedPillData.length === 0) {
    return null;
  }

  return React.createElement("div", {
    className: "pill-selector-suggested"
  }, React.createElement("span", null, title), filteredSuggestedPillData.map(function (item) {
    return React.createElement(SuggestedPill, {
      key: item.id,
      email: item.email,
      id: item.id,
      name: item.name,
      onAdd: onSuggestedPillAdd
    });
  }));
};

export default SuggestedPillsRow;
//# sourceMappingURL=SuggestedPillsRow.js.map