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
var ICON_CLASS = 'icon-iwork-pages';

var IconIWorkPages =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IconIWorkPages, _React$Component);

  function IconIWorkPages() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IconIWorkPages);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IconIWorkPages)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "idPrefix", "".concat(uniqueId(ICON_CLASS), "-"));

    return _this;
  }

  _createClass(IconIWorkPages, [{
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
        viewBox: "0 0 30 30",
        width: width
      }, React.createElement("defs", null, React.createElement("linearGradient", {
        gradientTransform: "matrix(1.33 0 0 1.33 1369.1 2112.94)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "a"),
        x1: "-1015.61",
        x2: "-1015.59",
        y1: "-1562.33",
        y2: "-1584.47"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#ff8500"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#ffb900"
      }))), React.createElement("path", {
        d: "M6.88 0h16.24A6.87 6.87 0 0 1 30 6.88v16.24A6.87 6.87 0 0 1 23.12 30H6.88A6.87 6.87 0 0 1 0 23.12V6.88A6.87 6.87 0 0 1 6.88 0z",
        fill: "url(#".concat(this.idPrefix, "a)")
      }), React.createElement("path", {
        d: "M7.8 22.7c.49-.32.91-.61.93-.63s0-.09-.38-.46a3.31 3.31 0 0 0-.47-.43A20.63 20.63 0 0 0 6.62 23a.2.2 0 0 0 .22.27 11 11 0 0 0 1-.61zm1.67-1.1a18 18 0 0 0 2.35-1.89c1.63-1.45 5.32-5 5.32-5.06s-1.82-1.88-1.88-1.88-3 3-4.44 4.63C9.84 18.48 9.36 19 9 19.48a12.15 12.15 0 0 0-1 1.44 7.33 7.33 0 0 0 1 1 3.47 3.47 0 0 0 .47-.32zm9.65-6.6a.26.26 0 0 0 .1-.23.93.93 0 0 0 0-.23.57.57 0 0 1 .17-.52A19.61 19.61 0 0 1 21 12.27c1.69-1.74 2.7-2.82 3.16-3.38a1.13 1.13 0 0 0 .35-.79c0-.2 0-.22-.17-.54-.06-.12 0-.24.08-.41a1.25 1.25 0 0 0 .05-1.65A1.15 1.15 0 0 0 23 5.41a19.43 19.43 0 0 0-1.77 1.53c-1.9 1.76-5.71 5.51-5.71 5.63s1.82 1.87 1.87 1.87.81-.76 1.74-1.69c1.74-1.75 2.55-2.59 3.55-3.67.87-.93.87-.93.95-.94s.08 0 .09.07 0 .15-.27.45c-.49.58-1.34 1.49-3.23 3.43-.63.64-1.21 1.26-1.3 1.37a2.45 2.45 0 0 0-.41.83c-.09.41.13.8.46.8a.29.29 0 0 0 .15-.09zM6.54 23.59a.41.41 0 0 0 0 .81h23.35v-.19L30 24V23.59H6.54z",
        fill: "#fff"
      }));
    }
  }]);

  return IconIWorkPages;
}(React.Component);

_defineProperty(IconIWorkPages, "defaultProps", {
  className: '',
  height: 30,
  width: 30
});

export default IconIWorkPages;
//# sourceMappingURL=IconIWorkPages.js.map