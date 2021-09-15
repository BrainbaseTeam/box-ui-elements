import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconAlertDefault = function IconAlertDefault(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#F7931D' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 26 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 26 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-alert-default ".concat(className),
    title: title,
    height: height,
    width: width,
    viewBox: "0 0 26 26"
  }, React.createElement("defs", null, React.createElement("circle", {
    id: "b",
    cx: "8",
    cy: "8",
    r: "8"
  }), React.createElement("filter", {
    x: "-46.9%",
    y: "-46.9%",
    width: "193.8%",
    height: "193.8%",
    filterUnits: "objectBoundingBox",
    id: "a"
  }, React.createElement("feMorphology", {
    radius: ".5",
    operator: "dilate",
    in: "SourceAlpha",
    result: "shadowSpreadOuter1"
  }), React.createElement("feOffset", {
    in: "shadowSpreadOuter1",
    result: "shadowOffsetOuter1"
  }), React.createElement("feGaussianBlur", {
    stdDeviation: "2",
    in: "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), React.createElement("feColorMatrix", {
    values: "0 0 0 0 0.733285502 0 0 0 0 0.733285502 0 0 0 0 0.733285502 0 0 0 0.5 0",
    in: "shadowBlurOuter1"
  }))), React.createElement("g", {
    transform: "translate(5 5)",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("use", {
    fill: "#000",
    filter: "url(#a)",
    xlinkHref: "#b"
  }), React.createElement("use", {
    fill: color,
    xlinkHref: "#b"
  }), React.createElement("path", {
    d: "M8.047 4.706v4.111",
    stroke: "#FFF",
    strokeWidth: "1.412",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), React.createElement("circle", {
    fill: "#FFF",
    cx: "8.047",
    cy: "11.294",
    r: "1"
  })));
};

export default IconAlertDefault;
//# sourceMappingURL=IconAlertDefault.js.map