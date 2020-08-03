/**
 * 
 * @file File Key Values Skill Data component
 * @author Box
 */
import React from 'react';
import './Keyvalues.scss';

var Keyvalues = function Keyvalues(_ref) {
  var entries = _ref.card.entries;
  return /*#__PURE__*/React.createElement("div", {
    className: "be-keyvalues"
  }, Array.isArray(entries) && entries.map(function (_ref2, index) {
    var label = _ref2.label,
        text = _ref2.text;
    return !!label && !!text &&
    /*#__PURE__*/

    /* eslint-disable react/no-array-index-key */
    React.createElement("dl", {
      key: index,
      className: "be-keyvalue"
    }, /*#__PURE__*/React.createElement("dt", null, label), /*#__PURE__*/React.createElement("dd", null, text));
  }
  /* eslint-enable react/no-array-index-key */
  ));
};

export default Keyvalues;
//# sourceMappingURL=Keyvalues.js.map