import * as React from 'react';
import classNames from 'classnames';
import AccessibleSVG from '../accessible-svg';
import { bdlGray } from '../../styles/variables';

var IconSecurityClassification = function IconSecurityClassification(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 32 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? bdlGray : _ref$color,
      title = _ref.title,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === void 0 ? 2 : _ref$strokeWidth,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 32 : _ref$width;
  var classes = classNames('bdl-IconSecurityClassification', className);
  return /*#__PURE__*/React.createElement(AccessibleSVG, {
    className: classes,
    height: height,
    title: title,
    viewBox: "0 0 32 32",
    width: width
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17,2 L5,8 L5,15 C5,21.4214876 10.6933333,29.5421488 17,31 C23.3066667,29.5421488 29,21.4214876 29,15 L29,8 L17,2 Z",
    stroke: color,
    strokeWidth: strokeWidth,
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23,11 L23,19",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  }));
};

export default IconSecurityClassification;
//# sourceMappingURL=IconSecurityClassification.js.map