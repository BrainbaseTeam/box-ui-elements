import * as React from 'react';
import Tooltip from '../tooltip';
import IconPuzzlePiece from '../../icons/general/IconPuzzlePiece';
import './FooterIndicator.scss';

var FooterIndicator = function FooterIndicator(_ref) {
  var indicatorText = _ref.indicatorText;
  return /*#__PURE__*/React.createElement("div", {
    className: "bdl-FooterIndicator"
  }, /*#__PURE__*/React.createElement(Tooltip, {
    position: "top-right",
    text: indicatorText
  }, /*#__PURE__*/React.createElement("div", {
    className: "bdl-FooterIndicator-content"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bdl-FooterIndicator-iconWrapper"
  }, /*#__PURE__*/React.createElement(IconPuzzlePiece, {
    height: 14,
    width: 14
  })), /*#__PURE__*/React.createElement("span", {
    className: "bdl-FooterIndicator-text"
  }, indicatorText))));
};

export default FooterIndicator;
//# sourceMappingURL=FooterIndicator.js.map