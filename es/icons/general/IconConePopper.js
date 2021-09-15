import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconConePopper = function IconConePopper(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 50 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 120 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-cone-popper ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 120 50",
    width: width
  }, React.createElement("defs", null, React.createElement("path", {
    d: "M0 0h120v50H0z",
    id: "a"
  }), React.createElement("path", {
    d: "M51.419.433l7.415 7.31 8.027-2.797c-1.183 14.282-4.539 24.96-10.066 32.035-8.291 10.612-10.204 11.504-20.881 20.463-7.119 5.973-12.617 14.603-16.494 25.89l-9.356-.843c-.21-18.085 2.976-31.342 9.56-39.769 9.876-12.64 12.579-9.414 20.118-19.064C44.768 17.225 48.66 9.483 51.42.433z",
    id: "d"
  }), React.createElement("filter", {
    filterUnits: "objectBoundingBox",
    height: "220.6%",
    id: "c",
    width: "276%",
    x: "-88%",
    y: "-55.5%"
  }, React.createElement("feOffset", {
    dy: "2",
    in: "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), React.createElement("feGaussianBlur", {
    in: "shadowOffsetOuter1",
    result: "shadowBlurOuter1",
    stdDeviation: "12"
  }), React.createElement("feColorMatrix", {
    in: "shadowBlurOuter1",
    result: "shadowMatrixOuter1",
    values: "0 0 0 0 0.447058824 0 0 0 0 0.517647059 0 0 0 0 0.556862745 0 0 0 0.2 0"
  }), React.createElement("feOffset", {
    dy: "1",
    in: "SourceAlpha",
    result: "shadowOffsetOuter2"
  }), React.createElement("feGaussianBlur", {
    in: "shadowOffsetOuter2",
    result: "shadowBlurOuter2",
    stdDeviation: "6"
  }), React.createElement("feColorMatrix", {
    in: "shadowBlurOuter2",
    result: "shadowMatrixOuter2",
    values: "0 0 0 0 0 0 0 0 0 0.160784314 0 0 0 0 0.278431373 0 0 0 0.1 0"
  }), React.createElement("feOffset", {
    dy: "1",
    in: "SourceAlpha",
    result: "shadowOffsetOuter3"
  }), React.createElement("feGaussianBlur", {
    in: "shadowOffsetOuter3",
    result: "shadowBlurOuter3",
    stdDeviation: ".5"
  }), React.createElement("feColorMatrix", {
    in: "shadowBlurOuter3",
    result: "shadowMatrixOuter3",
    values: "0 0 0 0 0 0 0 0 0 0.380392157 0 0 0 0 0.835294118 0 0 0 0.02 0"
  }), React.createElement("feMerge", null, React.createElement("feMergeNode", {
    in: "shadowMatrixOuter1"
  }), React.createElement("feMergeNode", {
    in: "shadowMatrixOuter2"
  }), React.createElement("feMergeNode", {
    in: "shadowMatrixOuter3"
  })))), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("mask", {
    fill: "#fff",
    id: "b"
  }, React.createElement("use", {
    xlinkHref: "#a"
  })), React.createElement("use", {
    fill: "#FFF",
    fillOpacity: "0",
    xlinkHref: "#a"
  }), React.createElement("g", {
    mask: "url(#b)"
  }, React.createElement("g", {
    transform: "scale(-1 1) rotate(52 4.655 -71.114)"
  }, React.createElement("ellipse", {
    cx: "15",
    cy: "74",
    fill: "#0061D5",
    rx: "15",
    ry: "4"
  }), React.createElement("use", {
    fill: "#000",
    filter: "url(#c)",
    xlinkHref: "#d"
  }), React.createElement("use", {
    fill: "#F85064",
    xlinkHref: "#d"
  }), React.createElement("g", null, React.createElement("path", {
    d: "M.37 74.886C1.88 76.669 7.856 78 15 78c7.143 0 13.12-1.331 14.63-3.114L15 110 .37 74.886z",
    fill: "#FFBF00"
  }), React.createElement("path", {
    d: "M3.897 76.69c1.112.326 2.424.603 3.883.817l7.232 32.501L3.897 76.69z",
    fill: "#FFF",
    opacity: ".2"
  }))))));
};

export default IconConePopper;
//# sourceMappingURL=IconConePopper.js.map