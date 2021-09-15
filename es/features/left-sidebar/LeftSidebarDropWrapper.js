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
import classNames from 'classnames';
import './styles/LeftSidebarDropWrapper.scss';

var LeftSidebarDropWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LeftSidebarDropWrapper, _React$Component);

  function LeftSidebarDropWrapper() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LeftSidebarDropWrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LeftSidebarDropWrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      dropZoneHover: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleDropZoneHover", function () {
      return _this.setState({
        dropZoneHover: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDropZoneHoverLeave", function () {
      return _this.setState({
        dropZoneHover: false
      });
    });

    return _this;
  }

  _createClass(LeftSidebarDropWrapper, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          showDropZoneOnHover = _this$props.showDropZoneOnHover,
          isDragging = _this$props.isDragging; // Reset drop zone hover state if dragging has stopped without firing a mouseleave event.

      if (showDropZoneOnHover && !isDragging && prevProps.isDragging) {
        this.setState({
          dropZoneHover: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          _this$props2$classNam = _this$props2.className,
          className = _this$props2$classNam === void 0 ? '' : _this$props2$classNam,
          _this$props2$isDraggi = _this$props2.isDragging,
          isDragging = _this$props2$isDraggi === void 0 ? false : _this$props2$isDraggi,
          _this$props2$showDrop = _this$props2.showDropZoneOnHover,
          showDropZoneOnHover = _this$props2$showDrop === void 0 ? false : _this$props2$showDrop,
          _this$props2$message = _this$props2.message,
          message = _this$props2$message === void 0 ? '' : _this$props2$message,
          dropTargetRef = _this$props2.dropTargetRef,
          rest = _objectWithoutProperties(_this$props2, ["children", "className", "isDragging", "showDropZoneOnHover", "message", "dropTargetRef"]);

      var dropZoneHover = this.state.dropZoneHover;
      var shouldShowVeil = isDragging && (showDropZoneOnHover ? dropZoneHover : true);
      var hoverEventHandlers = isDragging && showDropZoneOnHover ? {
        onMouseEnter: this.handleDropZoneHover,
        onMouseLeave: this.handleDropZoneHoverLeave
      } : {};
      var classes = classNames('left-sidebar-drop-wrapper', className);
      return React.createElement("div", _extends({
        ref: dropTargetRef,
        className: classes
      }, hoverEventHandlers, rest), shouldShowVeil ? React.createElement("div", {
        className: "left-sidebar-drop-veil"
      }, React.createElement("span", {
        className: "left-sidebar-drop-wrapper-text"
      }, message)) : null, children);
    }
  }]);

  return LeftSidebarDropWrapper;
}(React.Component);

export default LeftSidebarDropWrapper;
//# sourceMappingURL=LeftSidebarDropWrapper.js.map