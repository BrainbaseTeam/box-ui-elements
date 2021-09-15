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
import TetherComponent from 'react-tether';
import uniqueId from 'lodash/uniqueId';
import './ContextMenu.scss';

var ContextMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContextMenu, _React$Component);

  function ContextMenu(props) {
    var _this;

    _classCallCheck(this, ContextMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContextMenu).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: false,
      targetOffset: ''
    });

    _defineProperty(_assertThisInitialized(_this), "closeMenu", function () {
      var onMenuClose = _this.props.onMenuClose;

      _this.setState({
        isOpen: false
      });

      if (onMenuClose) {
        onMenuClose();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "focusTarget", function () {
      // breaks encapsulation but the only alternative is passing a ref to an unknown child component
      var menuTargetEl = document.getElementById(_this.menuTargetID);

      if (menuTargetEl) {
        menuTargetEl.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMenuClose", function () {
      _this.closeMenu();

      _this.focusTarget();
    });

    _defineProperty(_assertThisInitialized(_this), "handleDocumentClick", function (event) {
      var menuEl = document.getElementById(_this.menuID);

      if (menuEl && event.target instanceof Node && menuEl.contains(event.target)) {
        return;
      }

      _this.closeMenu();
    });

    _defineProperty(_assertThisInitialized(_this), "handleContextMenu", function (event) {
      if (_this.props.isDisabled) {
        return;
      }

      var menuTargetEl = document.getElementById(_this.menuTargetID);
      var targetRect = menuTargetEl ? menuTargetEl.getBoundingClientRect() : {
        left: 0,
        top: 0
      };
      var verticalOffset = event.clientY - targetRect.top;
      var horizontalOffset = event.clientX - targetRect.left;

      _this.setState({
        isOpen: true,
        targetOffset: "".concat(verticalOffset, "px ").concat(horizontalOffset, "px")
      });

      var onMenuOpen = _this.props.onMenuOpen;

      if (onMenuOpen) {
        onMenuOpen();
      }

      event.preventDefault();
    });

    _this.menuID = uniqueId('contextmenu');
    _this.menuTargetID = uniqueId('contextmenutarget');
    return _this;
  }

  _createClass(ContextMenu, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var isOpen = this.state.isOpen;
      var prevIsOpen = prevState.isOpen;
      var prevIsDisabled = prevProps.isDisabled;
      var isDisabled = this.props.isDisabled;

      if (!prevIsOpen && isOpen) {
        // When menu is being opened
        document.addEventListener('click', this.handleDocumentClick, true);
        document.addEventListener('contextmenu', this.handleDocumentClick, true);
      } else if (prevIsOpen && !isOpen) {
        // When menu is being closed
        document.removeEventListener('contextmenu', this.handleDocumentClick, true);
        document.removeEventListener('click', this.handleDocumentClick, true);
      } // if the menu becomes disabled while it is open, we should close it


      if (!isDisabled && prevIsDisabled && isOpen) {
        this.handleMenuClose();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.isOpen) {
        // Clean-up global click handlers
        document.removeEventListener('contextmenu', this.handleDocumentClick, true);
        document.removeEventListener('click', this.handleDocumentClick, true);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          constraints = _this$props.constraints;
      var _this$state = this.state,
          isOpen = _this$state.isOpen,
          targetOffset = _this$state.targetOffset;
      var elements = React.Children.toArray(children);

      if (elements.length !== 2) {
        throw new Error('ContextMenu must have exactly two children: a target component and a <Menu>');
      }

      var menuTarget = elements[0];
      var menu = elements[1];
      var menuTargetProps = {
        id: this.menuTargetID,
        key: this.menuTargetID,
        onContextMenu: this.handleContextMenu
      };
      var menuProps = {
        id: this.menuID,
        key: this.menuID,
        initialFocusIndex: null,
        onClose: this.handleMenuClose
      }; // TypeScript defs don't work for older versions of react-tether

      var tetherProps = {
        attachment: 'top left',
        classPrefix: 'context-menu',
        constraints: constraints,
        targetAttachment: 'top left',
        targetOffset: targetOffset
      };
      return React.createElement(TetherComponent, tetherProps, React.isValidElement(menuTarget) ? React.cloneElement(menuTarget, menuTargetProps) : null, isOpen && React.isValidElement(menu) ? React.cloneElement(menu, menuProps) : null);
    }
  }]);

  return ContextMenu;
}(React.Component);

_defineProperty(ContextMenu, "defaultProps", {
  constraints: []
});

export default ContextMenu;
//# sourceMappingURL=ContextMenu.js.map