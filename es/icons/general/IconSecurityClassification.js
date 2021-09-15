import * as React from 'react';
import classNames from 'classnames';
import AccessibleSVG from '../accessible-svg';
import { bdlGray } from '../../styles/variables';

// TODO - Move this icon to the Asset repo. P Paul 5/2020
var IconSecurityClassification = function IconSecurityClassification(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 12 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? bdlGray : _ref$color,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 12 : _ref$width;
  var classes = classNames('bdl-IconSecurityClassification', className);
  return React.createElement(AccessibleSVG, {
    className: classes,
    height: height,
    title: title,
    viewBox: "0 0 12 12",
    width: width
  }, React.createElement("path", {
    d: "M6 0l4.875 2.438v2.856c0 2.645-2.309 5.792-4.79 6.366L6 11.68l-.084-.02c-2.482-.574-4.791-3.721-4.791-6.366V2.438L6 0zm0 .839L1.875 2.9v2.393c0 2.276 2.026 5.068 4.125 5.614 2.1-.546 4.125-3.338 4.125-5.614V2.901L6 .839zm2.25 2.58c.207 0 .375.168.375.375v3c0 .207-.168.375-.375.375s-.375-.168-.375-.375v-3c0-.207.168-.375.375-.375z",
    fill: color,
    fillRule: "evenodd"
  }));
};

export default IconSecurityClassification;
//# sourceMappingURL=IconSecurityClassification.js.map