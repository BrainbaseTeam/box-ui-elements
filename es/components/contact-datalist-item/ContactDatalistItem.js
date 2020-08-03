function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import DatalistItem from '../datalist-item';
import './ContactDatalistItem.scss';

var ContactDatalistItem = function ContactDatalistItem(_ref) {
  var name = _ref.name,
      subtitle = _ref.subtitle,
      rest = _objectWithoutProperties(_ref, ["name", "subtitle"]);

  return /*#__PURE__*/React.createElement(DatalistItem, rest, /*#__PURE__*/React.createElement("div", {
    className: "contact-text contact-name"
  }, name), subtitle && /*#__PURE__*/React.createElement("div", {
    className: "contact-text contact-sub-name"
  }, subtitle));
};

export default ContactDatalistItem;
//# sourceMappingURL=ContactDatalistItem.js.map