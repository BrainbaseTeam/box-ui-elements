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
var ICON_CLASS = 'icon-annotation-highlight';

var IconHighlightAnnotation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IconHighlightAnnotation, _React$Component);

  function IconHighlightAnnotation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IconHighlightAnnotation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IconHighlightAnnotation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "idPrefix", "".concat(uniqueId(ICON_CLASS), "-"));

    return _this;
  }

  _createClass(IconHighlightAnnotation, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          height = _this$props.height,
          title = _this$props.title,
          width = _this$props.width;
      return React.createElement(AccessibleSVG, {
        className: "".concat(ICON_CLASS, " ").concat(className),
        focusable: false,
        height: height,
        title: title,
        viewBox: "0 0 24 24",
        width: width
      }, React.createElement("g", {
        fillRule: "evenodd"
      }, React.createElement("path", {
        d: "M1 23h11.875v-3H1v3zm9.19-9.854l4.103 4.102.694.694.707-.68 7-6.742.306-.295V.07l-1.673 1.524L10.224 11.7l-.775.705.74.74z"
      }), React.createElement("path", {
        d: "M11.023 12.17L6.33 16.58C5.28 17.62 5.9 19 7.32 19h3.95c.82 0 1.826-.413 2.406-.995l1.544-1.383.768-.69-.713-.745-2.844-2.976-.683-.717-.723.68v-.003zm-.038 1.42l2.844 2.977.053-1.435-1.584 1.42c-.244.243-.74.446-1.03.446l-2.454-.008 3.577-3.36-1.408-.04z"
      })));
    }
  }]);

  return IconHighlightAnnotation;
}(React.Component);

_defineProperty(IconHighlightAnnotation, "defaultProps", {
  className: '',
  height: 24,
  width: 24
});

export default IconHighlightAnnotation;
//# sourceMappingURL=IconHighlightAnnotation.js.map