import * as React from 'react';
import Tooltip, { TooltipPosition } from '../tooltip';
import IconPuzzlePiece from '../../icons/general/IconPuzzlePiece';
import './FooterIndicator.scss';

var FooterIndicator = function FooterIndicator(_ref) {
  var indicatorText = _ref.indicatorText;
  return React.createElement("div", {
    className: "bdl-FooterIndicator"
  }, React.createElement(Tooltip, {
    position: TooltipPosition.TOP_RIGHT,
    text: indicatorText
  }, React.createElement("div", {
    className: "bdl-FooterIndicator-content"
  }, React.createElement("span", {
    className: "bdl-FooterIndicator-iconWrapper"
  }, React.createElement(IconPuzzlePiece, {
    height: 14,
    width: 14
  })), React.createElement("span", {
    className: "bdl-FooterIndicator-text"
  }, indicatorText))));
};

export default FooterIndicator;
//# sourceMappingURL=FooterIndicator.js.map