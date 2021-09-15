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
import noop from 'lodash/noop';
import { KEYS } from '../../constants';
import './DropdownMenu.scss';

var DropdownMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownMenu, _React$Component);

  function DropdownMenu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "menuID", uniqueId('menu'));

    _defineProperty(_assertThisInitialized(_this), "menuButtonID", uniqueId('menubutton'));

    _defineProperty(_assertThisInitialized(_this), "state", {
      initialFocusIndex: null,
      isOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "openMenuAndSetFocusIndex", function (initialFocusIndex) {
      _this.setState({
        initialFocusIndex: initialFocusIndex,
        isOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeMenu", function (event) {
      var _this$props$onMenuClo = _this.props.onMenuClose,
          onMenuClose = _this$props$onMenuClo === void 0 ? noop : _this$props$onMenuClo;

      _this.setState({
        isOpen: false
      }, function () {
        return onMenuClose(event);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "focusButton", function () {
      // @NOTE: This breaks encapsulation a bit, but the only other way is passing ref functions to unknown children components
      var menuButtonEl = document.getElementById(_this.menuButtonID);

      if (menuButtonEl) {
        menuButtonEl.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleButtonClick", function (event) {
      var isOpen = _this.state.isOpen;
      event.stopPropagation();
      event.preventDefault();

      if (isOpen) {
        _this.closeMenu(event);
      } else {
        _this.openMenuAndSetFocusIndex(null);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleButtonKeyDown", function (event) {
      var isOpen = _this.state.isOpen;

      switch (event.key) {
        case KEYS.space:
        case KEYS.enter:
        case KEYS.arrowDown:
          event.stopPropagation();
          event.preventDefault();

          _this.openMenuAndSetFocusIndex(0);

          break;

        case KEYS.arrowUp:
          event.stopPropagation();
          event.preventDefault();

          _this.openMenuAndSetFocusIndex(-1);

          break;

        case KEYS.escape:
          if (isOpen) {
            event.stopPropagation();
          }

          event.preventDefault();

          _this.closeMenu(event);

          break;

        default:
          break;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMenuClose", function (isKeyboardEvent, event) {
      _this.closeMenu(event);

      _this.focusButton();
    });

    _defineProperty(_assertThisInitialized(_this), "handleDocumentClick", function (event) {
      var menuEl = document.getElementById(_this.menuID);
      var menuButtonEl = document.getElementById(_this.menuButtonID); // Some DOM magic to get global click handlers to close menu when not interacting with menu or associated button

      if (menuEl && menuButtonEl && event.target instanceof Node && !menuEl.contains(event.target) && !menuButtonEl.contains(event.target)) {
        _this.closeMenu(event);
      }
    });

    return _this;
  }

  _createClass(DropdownMenu, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var useBubble = this.props.useBubble;

      if (!prevState.isOpen && this.state.isOpen) {
        // When menu is being opened
        document.addEventListener('click', this.handleDocumentClick, !useBubble);
        document.addEventListener('contextmenu', this.handleDocumentClick, !useBubble);
        var onMenuOpen = this.props.onMenuOpen;

        if (onMenuOpen) {
          onMenuOpen();
        }
      } else if (prevState.isOpen && !this.state.isOpen) {
        // When menu is being closed
        document.removeEventListener('contextmenu', this.handleDocumentClick, !useBubble);
        document.removeEventListener('click', this.handleDocumentClick, !useBubble);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var useBubble = this.props.useBubble;

      if (this.state.isOpen) {
        // Clean-up global click handlers
        document.removeEventListener('contextmenu', this.handleDocumentClick, !useBubble);
        document.removeEventListener('click', this.handleDocumentClick, !useBubble);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          bodyElement = _this$props.bodyElement,
          children = _this$props.children,
          isRightAligned = _this$props.isRightAligned,
          constrainToScrollParent = _this$props.constrainToScrollParent,
          constrainToWindow = _this$props.constrainToWindow,
          className = _this$props.className;
      var _this$state = this.state,
          isOpen = _this$state.isOpen,
          initialFocusIndex = _this$state.initialFocusIndex;
      var elements = React.Children.toArray(children);

      if (elements.length !== 2) {
        throw new Error('DropdownMenu must have exactly two children: A button component and a <Menu>');
      }

      var menuButton = elements[0];
      var menu = elements[1];
      var menuButtonProps = {
        id: this.menuButtonID,
        key: this.menuButtonID,
        onClick: this.handleButtonClick,
        // NOTE: Overrides button's handler
        onKeyDown: this.handleButtonKeyDown,
        // NOTE: Overrides button's handler
        'aria-expanded': isOpen ? 'true' : 'false'
      };

      if (menuButton.props['aria-haspopup'] === undefined) {
        menuButtonProps['aria-haspopup'] = 'true';
      } // Add this only when its open, otherwise the menuID element isn't rendered


      if (isOpen) {
        menuButtonProps['aria-controls'] = this.menuID;
      }

      var menuProps = {
        id: this.menuID,
        key: this.menuID,
        initialFocusIndex: initialFocusIndex,
        onClose: this.handleMenuClose,
        'aria-labelledby': this.menuButtonID
      };
      var attachment = 'top left';
      var targetAttachment = 'bottom left';

      if (isRightAligned) {
        attachment = 'top right';
        targetAttachment = 'bottom right';
      }

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

      var bodyEl = bodyElement instanceof HTMLElement ? bodyElement : document.body;
      return React.createElement(TetherComponent, {
        attachment: attachment,
        bodyElement: bodyEl,
        className: className,
        classPrefix: "dropdown-menu",
        constraints: constraints,
        enabled: isOpen,
        targetAttachment: targetAttachment
      }, React.cloneElement(menuButton, menuButtonProps), isOpen ? React.cloneElement(menu, menuProps) : null);
    }
  }]);

  return DropdownMenu;
}(React.Component);

_defineProperty(DropdownMenu, "defaultProps", {
  constrainToScrollParent: false,
  constrainToWindow: false,
  isRightAligned: false
});

export default DropdownMenu;
//# sourceMappingURL=DropdownMenu.js.map