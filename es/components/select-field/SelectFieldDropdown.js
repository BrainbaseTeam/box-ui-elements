function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import * as React from 'react';
import classNames from 'classnames';
export var OVERLAY_SCROLLABLE_CLASS = 'bdl-SelectField-overlay--scrollable';

var SelectFieldDropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectFieldDropdown, _React$Component);

  function SelectFieldDropdown() {
    _classCallCheck(this, SelectFieldDropdown);

    return _possibleConstructorReturn(this, _getPrototypeOf(SelectFieldDropdown).apply(this, arguments));
  }

  _createClass(SelectFieldDropdown, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var prevSelectedValues = _ref.selectedValues;
      var _this$props = this.props,
          multiple = _this$props.multiple,
          scheduleUpdate = _this$props.scheduleUpdate,
          selectedValues = _this$props.selectedValues;

      if (multiple && scheduleUpdate && prevSelectedValues !== selectedValues) {
        scheduleUpdate();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          innerRef = _this$props2.innerRef,
          style = _this$props2.style,
          placement = _this$props2.placement,
          isScrollable = _this$props2.isScrollable,
          multiple = _this$props2.multiple,
          selectFieldID = _this$props2.selectFieldID;
      var listboxProps = {};

      if (multiple) {
        listboxProps['aria-multiselectable'] = true;
      }

      return React.createElement("ul", _extends({
        ref: innerRef,
        style: style,
        "data-placement": placement,
        className: classNames('bdl-SelectFieldDropdown', 'overlay', _defineProperty({}, OVERLAY_SCROLLABLE_CLASS, isScrollable)),
        id: selectFieldID,
        role: "listbox" // preventDefault on mousedown so blur doesn't happen before click
        ,
        onMouseDown: function onMouseDown(event) {
          return event.preventDefault();
        }
      }, listboxProps), children);
    }
  }]);

  return SelectFieldDropdown;
}(React.Component);

export default React.forwardRef(function (props, ref) {
  return React.createElement(SelectFieldDropdown, _extends({}, props, {
    innerRef: ref
  }));
});
//# sourceMappingURL=SelectFieldDropdown.js.map