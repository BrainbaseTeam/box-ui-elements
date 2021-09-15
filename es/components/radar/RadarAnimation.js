var _positions;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
import TetherComponent from 'react-tether';
import './RadarAnimation.scss';
export var RadarAnimationPosition;

(function (RadarAnimationPosition) {
  RadarAnimationPosition["BOTTOM_CENTER"] = "bottom-center";
  RadarAnimationPosition["BOTTOM_LEFT"] = "bottom-left";
  RadarAnimationPosition["BOTTOM_RIGHT"] = "bottom-right";
  RadarAnimationPosition["MIDDLE_CENTER"] = "middle-center";
  RadarAnimationPosition["MIDDLE_LEFT"] = "middle-left";
  RadarAnimationPosition["MIDDLE_RIGHT"] = "middle-right";
  RadarAnimationPosition["TOP_CENTER"] = "top-center";
  RadarAnimationPosition["TOP_LEFT"] = "top-left";
  RadarAnimationPosition["TOP_RIGHT"] = "top-right";
})(RadarAnimationPosition || (RadarAnimationPosition = {}));

var positions = (_positions = {}, _defineProperty(_positions, RadarAnimationPosition.BOTTOM_CENTER, {
  attachment: 'top center',
  targetAttachment: 'bottom center'
}), _defineProperty(_positions, RadarAnimationPosition.BOTTOM_LEFT, {
  attachment: 'top left',
  targetAttachment: 'bottom left'
}), _defineProperty(_positions, RadarAnimationPosition.BOTTOM_RIGHT, {
  attachment: 'top right',
  targetAttachment: 'bottom right'
}), _defineProperty(_positions, RadarAnimationPosition.MIDDLE_CENTER, {
  attachment: 'middle center',
  targetAttachment: 'middle center'
}), _defineProperty(_positions, RadarAnimationPosition.MIDDLE_LEFT, {
  attachment: 'middle right',
  targetAttachment: 'middle left'
}), _defineProperty(_positions, RadarAnimationPosition.MIDDLE_RIGHT, {
  attachment: 'middle left',
  targetAttachment: 'middle right'
}), _defineProperty(_positions, RadarAnimationPosition.TOP_CENTER, {
  attachment: 'bottom center',
  targetAttachment: 'top center'
}), _defineProperty(_positions, RadarAnimationPosition.TOP_LEFT, {
  attachment: 'bottom left',
  targetAttachment: 'top left'
}), _defineProperty(_positions, RadarAnimationPosition.TOP_RIGHT, {
  attachment: 'bottom right',
  targetAttachment: 'top right'
}), _positions);

var RadarAnimation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RadarAnimation, _React$Component);

  function RadarAnimation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RadarAnimation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RadarAnimation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "tetherRef", React.createRef());

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
          isShown = _this$props.isShown,
          offset = _this$props.offset,
          rest = _objectWithoutProperties(_this$props, ["children", "className", "constrainToScrollParent", "constrainToWindow", "position", "isShown", "offset"]);

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

      var _positions$position = positions[position],
          attachment = _positions$position.attachment,
          targetAttachment = _positions$position.targetAttachment;
      var child = React.Children.only(children);
      var referenceElement = React.cloneElement(child, {
        'aria-describedby': this.radarAnimationID
      }); // Typescript defs seem busted for older versions of react-tether

      var tetherProps = {
        attachment: attachment,
        classPrefix: 'radar-animation',
        constraints: constraints,
        targetAttachment: targetAttachment
      };

      if (offset) {
        tetherProps.offset = offset;
      }

      return React.createElement(TetherComponent, _extends({
        ref: this.tetherRef
      }, tetherProps), referenceElement, isShown && React.createElement("div", _extends({
        className: "radar ".concat(className),
        id: this.radarAnimationID
      }, rest), React.createElement("div", {
        className: "radar-dot"
      }), React.createElement("div", {
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
  position: RadarAnimationPosition.MIDDLE_RIGHT
});

export default RadarAnimation;
//# sourceMappingURL=RadarAnimation.js.map