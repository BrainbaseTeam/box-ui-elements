function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _positions;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import uniqueId from 'lodash/uniqueId';
import TetherComponent from 'react-tether';
import './RadarAnimation.scss';
var BOTTOM_CENTER = 'bottom-center';
var BOTTOM_LEFT = 'bottom-left';
var BOTTOM_RIGHT = 'bottom-right';
var MIDDLE_CENTER = 'middle-center';
var MIDDLE_LEFT = 'middle-left';
var MIDDLE_RIGHT = 'middle-right';
var TOP_CENTER = 'top-center';
var TOP_LEFT = 'top-left';
var TOP_RIGHT = 'top-right';
var positions = (_positions = {}, _defineProperty(_positions, BOTTOM_CENTER, {
  attachment: 'top center',
  targetAttachment: 'bottom center'
}), _defineProperty(_positions, BOTTOM_LEFT, {
  attachment: 'top left',
  targetAttachment: 'bottom left'
}), _defineProperty(_positions, BOTTOM_RIGHT, {
  attachment: 'top right',
  targetAttachment: 'bottom right'
}), _defineProperty(_positions, MIDDLE_CENTER, {
  attachment: 'middle center',
  targetAttachment: 'middle center'
}), _defineProperty(_positions, MIDDLE_LEFT, {
  attachment: 'middle right',
  targetAttachment: 'middle left'
}), _defineProperty(_positions, MIDDLE_RIGHT, {
  attachment: 'middle left',
  targetAttachment: 'middle right'
}), _defineProperty(_positions, TOP_CENTER, {
  attachment: 'bottom center',
  targetAttachment: 'top center'
}), _defineProperty(_positions, TOP_LEFT, {
  attachment: 'bottom left',
  targetAttachment: 'top left'
}), _defineProperty(_positions, TOP_RIGHT, {
  attachment: 'bottom right',
  targetAttachment: 'top right'
}), _positions);

var RadarAnimation = /*#__PURE__*/function (_React$Component) {
  _inherits(RadarAnimation, _React$Component);

  var _super = _createSuper(RadarAnimation);

  function RadarAnimation() {
    var _this;

    _classCallCheck(this, RadarAnimation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "tetherRef", /*#__PURE__*/React.createRef());

    _defineProperty(_assertThisInitialized(_this), "radarAnimationID", uniqueId('radarAnimation'));

    _defineProperty(_assertThisInitialized(_this), "position", function () {
      var isShown = _this.props.isShown;

      if (_this.tetherRef.current && isShown) {
        _this.tetherRef.current.position();
      }
    });

    return _this;
  }

  _createClass(RadarAnimation, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          constrainToScrollParent = _this$props.constrainToScrollParent,
          constrainToWindow = _this$props.constrainToWindow,
          position = _this$props.position,
          isShown = _this$props.isShown;
      var constraints = [];

      if (constrainToScrollParent) {
        constraints.push({
          to: 'scrollParent',
          attachment: 'together'
        });
      }

      if (constrainToWindow) {
        constraints.push({
          to: 'window',
          attachment: 'together'
        });
      }

      var tetherPosition = positions[position];
      return /*#__PURE__*/React.createElement(TetherComponent, {
        attachment: tetherPosition.attachment,
        classPrefix: "radar-animation",
        constraints: constraints,
        targetAttachment: tetherPosition.targetAttachment,
        ref: this.tetherRef
      }, /*#__PURE__*/React.cloneElement(React.Children.only(children), {
        'aria-describedby': this.radarAnimationID
      }), isShown && /*#__PURE__*/React.createElement("div", {
        className: "radar ".concat(className),
        id: this.radarAnimationID
      }, /*#__PURE__*/React.createElement("div", {
        className: "radar-dot"
      }), /*#__PURE__*/React.createElement("div", {
        className: "radar-circle"
      })));
    }
  }]);

  return RadarAnimation;
}(React.Component);

_defineProperty(RadarAnimation, "defaultProps", {
  constrainToScrollParent: false,
  constrainToWindow: true,
  isShown: true,
  position: MIDDLE_RIGHT
});

export default RadarAnimation;
//# sourceMappingURL=RadarAnimation.js.map