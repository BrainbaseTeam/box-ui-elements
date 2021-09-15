import React from 'react';
import PlainButton from '../plain-button';
import Tooltip from '../tooltip';
import { KEYS } from '../../constants';
import './SuggestedPillsRow.scss';

var SuggestedPill = function SuggestedPill(_ref) {
  var email = _ref.email,
      id = _ref.id,
      name = _ref.name,
      onAdd = _ref.onAdd;

  var addSuggestedPill = function addSuggestedPill(event) {
    event.preventDefault(); // TODO: refactor this so inline conversions aren't required at every usage

    onAdd({
      email: email,
      id: id,
      name: name,
      text: name,
      type: 'user',
      value: email
    });
  };

  var handleKeyPress = function handleKeyPress(event) {
    if (event.key === KEYS.enter) {
      addSuggestedPill(event);
    }
  };

  return React.createElement(Tooltip, {
    position: "bottom-center",
    text: email
  }, React.createElement(PlainButton, {
    className: "suggested-pill-invisible-button",
    onClick: addSuggestedPill,
    onKeyDown: handleKeyPress,
    type: "button"
  }, React.createElement("span", {
    className: "bdl-Pill-text pill-text suggested-pill"
  }, name)));
};

export default SuggestedPill;
//# sourceMappingURL=SuggestedPill.js.map