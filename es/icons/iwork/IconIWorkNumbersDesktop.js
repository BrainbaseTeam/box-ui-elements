function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import uniqueId from 'lodash/uniqueId';
import AccessibleSVG from '../accessible-svg';
var ICON_CLASS = 'icon-iwork-numbers-desktop';

var IconIWorkNumbersDesktop =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IconIWorkNumbersDesktop, _React$Component);

  function IconIWorkNumbersDesktop() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IconIWorkNumbersDesktop);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IconIWorkNumbersDesktop)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "idPrefix", "".concat(uniqueId(ICON_CLASS), "-"));

    return _this;
  }

  _createClass(IconIWorkNumbersDesktop, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          height = _this$props.height,
          title = _this$props.title,
          width = _this$props.width;
      return React.createElement(AccessibleSVG, {
        className: "".concat(ICON_CLASS, " ").concat(className),
        height: height,
        title: title,
        viewBox: "0 0 85.2 80",
        width: width
      }, React.createElement("defs", null, React.createElement("linearGradient", {
        gradientTransform: "translate(-3.7 125.99)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "a"),
        x1: "3.7",
        x2: "88.9",
        y1: "-64.17",
        y2: "-64.17"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#8c8c8c"
      }), React.createElement("stop", {
        offset: ".02",
        stopColor: "#939493"
      })), React.createElement("linearGradient", {
        gradientTransform: "translate(-3.7 125.99)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "b"),
        x1: "46.3",
        x2: "46.3",
        y1: "-48.22",
        y2: "-81.41"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#e0e0e0"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#fff"
      })), React.createElement("linearGradient", {
        gradientTransform: "translate(-3.7 125.99)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "c"),
        x1: "74.66",
        x2: "74.66",
        y1: "-110.68",
        y2: "-55.91"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#4dc4fc"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#0f67f7"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(-1 0 0 1 175.62 125.99)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "d"),
        x1: "97.76",
        x2: "97.76",
        y1: "-56.2",
        y2: "-108.93"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#0b55d3"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#409fcd"
      })), React.createElement("linearGradient", {
        gradientTransform: "translate(0 132)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "e"),
        x1: "70.89",
        x2: "70.89",
        y1: "-114.21",
        y2: "-118.45"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#76cffd"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#4dc4fc"
      })), React.createElement("linearGradient", {
        gradientTransform: "translate(-3.7 125.99)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "f"),
        x1: "41.45",
        x2: "41.45",
        y1: "-100.9",
        y2: "-55.9"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#fba51e"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#e64e04"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(-1 0 0 1 175.62 125.99)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "g"),
        x1: "130.97",
        x2: "130.97",
        y1: "-56.18",
        y2: "-99.15"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#c83600"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#bc6a15"
      })), React.createElement("linearGradient", {
        gradientTransform: "translate(0 132)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "h"),
        x1: "37.73",
        x2: "37.73",
        y1: "-104.44",
        y2: "-109.04"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#fcbf56"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#fcbd4a"
      })), React.createElement("linearGradient", {
        gradientTransform: "translate(-3.7 125.99)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "i"),
        x1: "24.85",
        x2: "24.85",
        y1: "-84.31",
        y2: "-55.91"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#e93f54"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#d20b2f"
      })), React.createElement("linearGradient", {
        gradientTransform: "translate(-3.7 125.99)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "j"),
        x1: "31.75",
        x2: "31.75",
        y1: "-56.2",
        y2: "-82.57"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#bb0e2b"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#ba2c3d"
      })), React.createElement("linearGradient", {
        gradientTransform: "translate(0 132)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "k"),
        x1: "21.12",
        x2: "21.12",
        y1: "-87.84",
        y2: "-93.2"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#f87e7a"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#f3636b"
      })), React.createElement("linearGradient", {
        gradientTransform: "translate(-3.7 125.99)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "l"),
        x1: "58.04",
        x2: "58.04",
        y1: "-123.99",
        y2: "-55.94"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#54e56c"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#2ab203"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(-1 0 0 1 175.62 125.99)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "m"),
        x1: "114.37",
        x2: "114.37",
        y1: "-56.26",
        y2: "-123.23"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#2d9e20"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#43b656"
      })), React.createElement("linearGradient", {
        gradientTransform: "translate(0 132)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "n"),
        x1: "54.31",
        x2: "54.31",
        y1: "-128.5",
        y2: "-131.97"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#98e97d"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#74f482"
      }))), React.createElement("path", {
        d: "M1.88 80A1.88 1.88 0 0 1 0 78.18v-1.51l1.73-31.19a2 2 0 0 1 2-1.84h77.53a2 2 0 0 1 2 1.89l1.94 31.11v1.51A1.87 1.87 0 0 1 83.32 80z",
        fill: "url(#".concat(this.idPrefix, "a)")
      }), React.createElement("path", {
        d: "M83.05 77.77H2.15A1.14 1.14 0 0 1 1 76.64l1.71-30.93a1.14 1.14 0 0 1 1.13-1.13h77.31a1.14 1.14 0 0 1 1.13 1.13l1.9 30.93a1.14 1.14 0 0 1-1.13 1.13z",
        fill: "url(#".concat(this.idPrefix, "b)")
      }), React.createElement("path", {
        d: "M78.52 15.31v52.38a2.39 2.39 0 0 1-2.39 2.39H65.77a2.39 2.39 0 0 1-2.38-2.39V15.31z",
        fill: "url(#".concat(this.idPrefix, "c)")
      }), React.createElement("path", {
        d: "M77.21 18.22h.11a1.16 1.16 0 0 0 1.2-1.12v50.59a2.39 2.39 0 0 1-1.27 2.1z",
        fill: "url(#".concat(this.idPrefix, "d)")
      }), React.createElement("path", {
        d: "M64.66 18.22h-.14a1.16 1.16 0 0 1-1.16-1.16v50.63a2.38 2.38 0 0 0 1.27 2.1z"
      }), React.createElement("path", {
        d: "M77.32 17.78h-12.8a1.16 1.16 0 0 1-1.16-1.16v.43a1.16 1.16 0 0 0 1.16 1.16h12.8a1.16 1.16 0 0 0 1.2-1.12v-.44a1.15 1.15 0 0 1-1.13 1.17h-.07z",
        fill: "#8ddfff"
      }), React.createElement("path", {
        d: "M64.87 13.61h12.07a1.51 1.51 0 0 1 1.51 1.5v1.51a1.16 1.16 0 0 1-1.16 1.16H64.52a1.15 1.15 0 0 1-1.19-1.11v-1.56a1.51 1.51 0 0 1 1.52-1.5z",
        fill: "url(#".concat(this.idPrefix, "e)")
      }), React.createElement("path", {
        d: "M45.29 25.09v43a2.37 2.37 0 0 1-2.39 2H32.58a2.37 2.37 0 0 1-2.38-2v-43z",
        fill: "url(#".concat(this.idPrefix, "f)")
      }), React.createElement("path", {
        d: "M44 28h.11a1.16 1.16 0 0 0 1.16-1.16v40.87a2.39 2.39 0 0 1-1.27 2.1z",
        fill: "url(#".concat(this.idPrefix, "g)")
      }), React.createElement("path", {
        d: "M31.52 28h-.11a1.16 1.16 0 0 1-1.16-1.16v40.87a2.38 2.38 0 0 0 1.27 2.1z"
      }), React.createElement("path", {
        d: "M44.13 27.56H31.36a1.16 1.16 0 0 1-1.16-1.16v.42A1.16 1.16 0 0 0 31.34 28h12.79a1.16 1.16 0 0 0 1.16-1.16v-.44a1.16 1.16 0 0 1-1.16 1.16z",
        fill: "#fccb88"
      }), React.createElement("path", {
        d: "M31.68 23h12.07a1.51 1.51 0 0 1 1.51 1.51v1.89a1.16 1.16 0 0 1-1.16 1.16H31.36a1.16 1.16 0 0 1-1.16-1.16v-1.93A1.51 1.51 0 0 1 31.71 23z",
        fill: "url(#".concat(this.idPrefix, "h)")
      }), React.createElement("path", {
        d: "M28.69 41.68v26.37a2.37 2.37 0 0 1-2.38 2H16a2.36 2.36 0 0 1-2.38-2V41.68z",
        fill: "url(#".concat(this.idPrefix, "i)")
      }), React.createElement("path", {
        d: "M27.42 44.58h.1a1.16 1.16 0 0 0 1.16-1.16v24.27a2.38 2.38 0 0 1-1.27 2.1z",
        fill: "url(#".concat(this.idPrefix, "j)")
      }), React.createElement("path", {
        d: "M14.87 44.58h-.1a1.16 1.16 0 0 1-1.16-1.16v24.27a2.39 2.39 0 0 0 1.26 2.1z"
      }), React.createElement("path", {
        d: "M27.52 44.16H14.77A1.16 1.16 0 0 1 13.61 43v.43a1.16 1.16 0 0 0 1.16 1.16h12.75a1.16 1.16 0 0 0 1.16-1.16V43a1.16 1.16 0 0 1-1.16 1.16z",
        fill: "#f7a6a6"
      }), React.createElement("path", {
        d: "M15.08 38.8h12.07a1.51 1.51 0 0 1 1.51 1.51V43a1.16 1.16 0 0 1-1.14 1.16H14.77A1.16 1.16 0 0 1 13.58 43v-2.69a1.52 1.52 0 0 1 1.5-1.51z",
        fill: "url(#".concat(this.idPrefix, "k)")
      }), React.createElement("path", {
        d: "M61.88 2v64.88c0 2.08-1.07 3.17-2.38 3.17H49.18c-1.31 0-2.38-1.08-2.38-3.17V2z",
        fill: "url(#".concat(this.idPrefix, "l)")
      }), React.createElement("path", {
        d: "M60.62 3.92h.1a1.16 1.16 0 0 0 1.16-1.16v64.87a2.39 2.39 0 0 1-1.26 2.1z",
        fill: "url(#".concat(this.idPrefix, "m)")
      }), React.createElement("path", {
        d: "M48.06 3.92H48a1.16 1.16 0 0 1-1.2-1.16v64.87a2.39 2.39 0 0 0 1.26 2.1z"
      }), React.createElement("path", {
        d: "M60.72 3.48H48a1.16 1.16 0 0 1-1.2-1.16v.42A1.16 1.16 0 0 0 48 3.9h12.72a1.16 1.16 0 0 0 1.16-1.16v-.42a1.16 1.16 0 0 1-1.16 1.16z",
        fill: "#a3f4ac"
      }), React.createElement("path", {
        d: "M48.27 0h12.07a1.5 1.5 0 0 1 1.51 1.49v.8a1.16 1.16 0 0 1-1.16 1.16H48a1.16 1.16 0 0 1-1.19-1.13v-.81A1.5 1.5 0 0 1 48.26 0z",
        fill: "url(#".concat(this.idPrefix, "n)")
      }), React.createElement("path", {
        d: "M6.79 47.87h.9L8 47.7a.35.35 0 0 0 .17-.15h.63v1.86H8v-1.32H6.79zm2.64 7.48H6.17a.52.52 0 0 1 .31-.45 2.7 2.7 0 0 1 .76-.33l.48-.14.47-.15a1.62 1.62 0 0 0 .35-.17.28.28 0 0 0 .13-.21.24.24 0 0 0 0-.12.34.34 0 0 0-.12-.12 1 1 0 0 0-.24-.09H7.9a1.15 1.15 0 0 0-.37 0 .8.8 0 0 0-.25.11.51.51 0 0 0-.13.16.67.67 0 0 0 0 .2h-.89a.51.51 0 0 1 .1-.32.93.93 0 0 1 .32-.24 2.35 2.35 0 0 1 .51-.17 4.21 4.21 0 0 1 .71 0 4.45 4.45 0 0 1 .73 0 1.77 1.77 0 0 1 .46.15.86.86 0 0 1 .26.2.38.38 0 0 1 0 .21.32.32 0 0 1-.09.23 1.08 1.08 0 0 1-.24.18l-.35.15-.39.14-.28.13-.37.11-.31.12a.36.36 0 0 0-.18.12h2.3zM7 59.88h.73a.76.76 0 0 0 .27-.15.18.18 0 0 0 .09-.15c0-.1 0-.16-.21-.22a1.58 1.58 0 0 0-.53-.07H7l-.24.09a.51.51 0 0 0-.16.13.43.43 0 0 0 0 .16h-.87a.44.44 0 0 1 .14-.28 1 1 0 0 1 .31-.21 2.13 2.13 0 0 1 .49-.18 3.42 3.42 0 0 1 .64 0h.55l.48.11a1.23 1.23 0 0 1 .35.16.31.31 0 0 1 .13.24.32.32 0 0 1-.16.28 1.21 1.21 0 0 1-.52.16 1.6 1.6 0 0 1 .64.17.39.39 0 0 1 .22.33.33.33 0 0 1-.13.26 1.24 1.24 0 0 1-.36.19 2.57 2.57 0 0 1-.55.12 4.49 4.49 0 0 1-1.37 0 2.12 2.12 0 0 1-.51-.13.9.9 0 0 1-.32-.23.45.45 0 0 1-.12-.33h.88c0 .12 0 .23.22.3a1.53 1.53 0 0 0 .67.12 1.84 1.84 0 0 0 .62 0 .26.26 0 0 0 .26-.26.19.19 0 0 0-.14-.11 1 1 0 0 0-.28-.11H7zm2 6.51h-.6v.49h-.77v-.49h-2v-.33l2-1.17h.74v1.28H9zm-2.79-.21h1.48v-.89zm-.47 4.65h2.43v.3H6.29l-.24.51a1.58 1.58 0 0 1 .43-.1H7a3.32 3.32 0 0 1 .63 0 1.93 1.93 0 0 1 .47.13.67.67 0 0 1 .28.22.39.39 0 0 1 0 .52.78.78 0 0 1-.29.25 2.16 2.16 0 0 1-.51.16 3.14 3.14 0 0 1-.75 0h-.68a2.31 2.31 0 0 1-.52-.12 1.07 1.07 0 0 1-.36-.2.39.39 0 0 1-.15-.27h.77a.37.37 0 0 0 .27.26 1.64 1.64 0 0 0 .62.09h.41a1 1 0 0 0 .25-.15.36.36 0 0 0 .16-.14.54.54 0 0 0 0-.18.43.43 0 0 0 0-.16.46.46 0 0 0-.17-.14l-.29-.09h-.86a.51.51 0 0 0-.31.15h-.79z",
        fill: "#868786"
      }));
    }
  }]);

  return IconIWorkNumbersDesktop;
}(React.Component);

_defineProperty(IconIWorkNumbersDesktop, "defaultProps", {
  className: '',
  height: 30,
  width: 30
});

export default IconIWorkNumbersDesktop;
//# sourceMappingURL=IconIWorkNumbersDesktop.js.map