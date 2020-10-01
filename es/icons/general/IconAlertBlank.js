import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconAlertBlank = function IconAlertBlank(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 26 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 26 : _ref$width;
  return /*#__PURE__*/React.createElement(AccessibleSVG, {
    className: "icon-alert-blank ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 26 26",
    width: width
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    id: "b",
    r: "8"
  }), /*#__PURE__*/React.createElement("filter", {
    filterUnits: "objectBoundingBox",
    height: "193.8%",
    id: "a",
    width: "193.8%",
    x: "-46.9%",
    y: "-46.9%"
  }, /*#__PURE__*/React.createElement("feMorphology", {
    in: "SourceAlpha",
    operator: "dilate",
    radius: ".5",
    result: "shadowSpreadOuter1"
  }), /*#__PURE__*/React.createElement("feOffset", {
    in: "shadowSpreadOuter1",
    result: "shadowOffsetOuter1"
  }), /*#__PURE__*/React.createElement("feGaussianBlur", {
    in: "shadowOffsetOuter1",
    result: "shadowBlurOuter1",
    stdDeviation: "2"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    in: "shadowBlurOuter1",
    values: "0 0 0 0 0.733285502 0 0 0 0 0.733285502 0 0 0 0 0.733285502 0 0 0 0.5 0"
  }))), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(5 5)"
  }, /*#__PURE__*/React.createElement("use", {
    fill: "#000",
    filter: "url(#a)",
    xlinkHref: "#b"
  }), /*#__PURE__*/React.createElement("use", {
    fill: "#F7931D",
    xlinkHref: "#b"
  })));
};

export default IconAlertBlank;
//# sourceMappingURL=IconAlertBlank.js.map