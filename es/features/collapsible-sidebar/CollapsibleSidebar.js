function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Sidebar component that supports rendering different elements based on expand/collapse state
 * @author Box
 *
 * A sidebar component that supports collapsed/expanded state and responsive sizing.
 */
import * as React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import tabbable from 'tabbable';
import { KEYS } from '../../constants';
import './CollapsibleSidebar.scss';
var StyledNav = styled.nav.withConfig({
  displayName: "CollapsibleSidebar__StyledNav",
  componentId: "sc-4t6rz4-0"
})(["background-color:", ";border-right:1px solid ", ";color:", ";.crawler > div{background-color:", ";}"], function (props) {
  return props.theme.primary.background;
}, function (props) {
  return props.theme.primary.border;
}, function (props) {
  return props.theme.primary.foreground;
}, function (props) {
  return props.theme.primary.foreground;
});

var CollapsibleSidebar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CollapsibleSidebar, _React$Component);

  function CollapsibleSidebar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CollapsibleSidebar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CollapsibleSidebar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "navRef", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "focusEl", function (direction) {
      if (_this.navRef.current) {
        var tabbableEls = tabbable(_this.navRef.current);
        var currentElIndex = tabbableEls.findIndex(function (el) {
          return el === document.activeElement;
        });
        var index;

        if (direction === 'down') {
          index = currentElIndex === tabbableEls.length - 1 ? 0 : currentElIndex + 1;
        } else {
          index = currentElIndex === 0 ? tabbableEls.length - 1 : currentElIndex - 1;
        }

        tabbableEls[index].focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      if (_this.navRef.current && _this.navRef.current.contains(document.activeElement)) {
        switch (event.key) {
          case KEYS.arrowDown:
            event.stopPropagation();
            event.preventDefault();

            _this.focusEl('down');

            break;

          case KEYS.arrowUp:
            event.stopPropagation();
            event.preventDefault();

            _this.focusEl('up');

            break;

          default:
            break;
        }
      }
    });

    return _this;
  }

  _createClass(CollapsibleSidebar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          expanded = _this$props.expanded,
          htmlAttributes = _this$props.htmlAttributes;
      var classes = classNames({
        'is-expanded': expanded
      }, 'bdl-CollapsibleSidebar', className);
      return React.createElement("div", _extends({
        className: "bdl-CollapsibleSidebar-wrapper"
      }, htmlAttributes), React.createElement(StyledNav, {
        ref: this.navRef,
        className: classes,
        onKeyDown: this.handleKeyDown
      }, children));
    }
  }]);

  return CollapsibleSidebar;
}(React.Component);

_defineProperty(CollapsibleSidebar, "defaultProps", {
  expanded: false
});

export default CollapsibleSidebar;
//# sourceMappingURL=CollapsibleSidebar.js.map