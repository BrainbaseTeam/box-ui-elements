function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
import omit from 'lodash/omit';
import classNames from 'classnames';
import './Menu.scss';
/**
 * The selectors are used to identify the menu item that is selected. We need to eventually
 * rewrite this logic as there seem to be strong coupling between the selector and MenuItem
 * that we want to decouple. The span is here to allow Menu to recognize MenuItem even if it is
 * wrapped by a span coming from a tooltip.
 */

var MENU_ITEM_SELECTOR = '.menu-item:not([aria-disabled])';
var TOP_LEVEL_MENU_ITEM_SELECTOR = "ul:not(.submenu) > ".concat(MENU_ITEM_SELECTOR, ", ul:not(.submenu) > li > ").concat(MENU_ITEM_SELECTOR, ", ul:not(.submenu) > span > ").concat(MENU_ITEM_SELECTOR);
var SUBMENU_ITEM_SELECTOR = "ul.submenu > ".concat(MENU_ITEM_SELECTOR, ", ul.submenu > li > ").concat(MENU_ITEM_SELECTOR, ", ul.submenu > span > ").concat(MENU_ITEM_SELECTOR);

function stopPropagationAndPreventDefault(event) {
  event.stopPropagation();
  event.preventDefault();
}

var Menu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu(_props) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Menu).call(this, _props));

    _defineProperty(_assertThisInitialized(_this), "setInitialFocusIndex", function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props;
      var initialFocusIndex = props.initialFocusIndex,
          isHidden = props.isHidden;

      if (isHidden || initialFocusIndex === undefined) {
        return;
      } // If an initialFocusIndex was specified, attempt to use it to focus


      if (typeof initialFocusIndex === 'number') {
        // We do this after a timeout so that the menu is properly mounted before we attempt to focus it
        setTimeout(function () {
          _this.setFocus(initialFocusIndex);
        }, 0);
      } else if (initialFocusIndex === null) {
        // If no initial focus index is set, focus on the menu itself so that keyboard shortcut still works after a mouse click.
        setTimeout(function () {
          if (_this.menuEl) {
            _this.menuEl.focus();
          }
        }, 0);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setMenuItemEls", function () {
      var _this$props = _this.props,
          isSubmenu = _this$props.isSubmenu,
          menuItemSelector = _this$props.menuItemSelector;
      var selector = menuItemSelector || (isSubmenu ? SUBMENU_ITEM_SELECTOR : TOP_LEVEL_MENU_ITEM_SELECTOR); // Keep track of all the valid menu items that were rendered (querySelector since we don't want to pass ref functions to every single child)

      _this.menuItemEls = _this.menuEl ? [].slice.call(_this.menuEl.querySelectorAll(selector)) : [];
    });

    _defineProperty(_assertThisInitialized(_this), "getMenuItemElFromEventTarget", function (target) {
      var menuItemEl = null;
      var menuIndex = -1;

      for (var i = 0; i < _this.menuItemEls.length; i += 1) {
        if (_this.menuItemEls[i].contains(target)) {
          menuItemEl = _this.menuItemEls[i];
          menuIndex = i;
          break;
        }
      }

      return {
        menuItemEl: menuItemEl,
        menuIndex: menuIndex
      };
    });

    _defineProperty(_assertThisInitialized(_this), "setFocus", function (index) {
      if (!_this.menuItemEls.length) {
        return;
      }

      var numMenuItems = _this.menuItemEls.length;

      if (index >= numMenuItems) {
        _this.focusIndex = 0;
      } else if (index < 0) {
        _this.focusIndex = numMenuItems - 1;
      } else {
        _this.focusIndex = index;
      }

      _this.menuItemEls[_this.focusIndex].focus();
    });

    _defineProperty(_assertThisInitialized(_this), "focusFirstItem", function () {
      _this.setFocus(0);
    });

    _defineProperty(_assertThisInitialized(_this), "focusLastItem", function () {
      _this.setFocus(-1);
    });

    _defineProperty(_assertThisInitialized(_this), "focusNextItem", function () {
      _this.setFocus(_this.focusIndex + 1);
    });

    _defineProperty(_assertThisInitialized(_this), "focusPreviousItem", function () {
      _this.setFocus(_this.focusIndex - 1);
    });

    _defineProperty(_assertThisInitialized(_this), "fireOnCloseHandler", function (isKeyboardEvent, event) {
      var onClose = _this.props.onClose;

      if (onClose) {
        // We need to pass the event type so we know which item to focus.
        onClose(isKeyboardEvent, event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      var _ref = event.target instanceof Node ? _this.getMenuItemElFromEventTarget(event.target) : {},
          menuItemEl = _ref.menuItemEl;

      if (!menuItemEl) {
        return;
      }

      _this.fireOnCloseHandler(false, event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      var _this$props2 = _this.props,
          isSubmenu = _this$props2.isSubmenu,
          initialFocusIndex = _this$props2.initialFocusIndex;

      switch (event.key) {
        case 'ArrowDown':
          stopPropagationAndPreventDefault(event); // If it's first keyboard event, focus on first item.

          if (initialFocusIndex === null && !_this.keyboardPressed) {
            _this.focusFirstItem();
          } else {
            _this.focusNextItem();
          }

          break;

        case 'ArrowUp':
          stopPropagationAndPreventDefault(event);

          _this.focusPreviousItem();

          break;

        case 'ArrowLeft':
          // Close submenu when arrow-left is clicked
          if (!isSubmenu) {
            return;
          }

          stopPropagationAndPreventDefault(event);

          _this.fireOnCloseHandler(true, event);

          break;

        case 'Home':
        case 'PageUp':
          stopPropagationAndPreventDefault(event);

          _this.focusFirstItem();

          break;

        case 'End':
        case 'PageDown':
          stopPropagationAndPreventDefault(event);

          _this.focusLastItem();

          break;

        case 'Escape':
          stopPropagationAndPreventDefault(event);

          _this.fireOnCloseHandler(true, event);

          break;

        case 'Tab':
          // DO NOT PREVENT DEFAULT OR STOP PROPAGATION - This should move focus natively
          _this.fireOnCloseHandler(true, event);

          break;

        case ' ':
        case 'Enter':
          stopPropagationAndPreventDefault(event);

          if (event.target instanceof HTMLElement) {
            event.target.click();
          }

          break;

        default:
          break;
      }

      _this.keyboardPressed = true;
    });

    _this.focusIndex = 0;
    _this.menuEl = null;
    _this.menuItemEls = [];
    return _this;
  }

  _createClass(Menu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setMenuItemEls();
      this.setInitialFocusIndex();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref2) {
      var prevIsHidden = _ref2.isHidden,
          prevChildren = _ref2.children;
      var _this$props3 = this.props,
          children = _this$props3.children,
          isHidden = _this$props3.isHidden,
          isSubmenu = _this$props3.isSubmenu;

      if (isSubmenu && prevIsHidden && !isHidden) {
        // If updating submenu, use the current props instead of previous props.
        this.setMenuItemEls();
        this.setInitialFocusIndex(this.props);
      } // update focus index and menu item elements when the number of children changes


      if (React.Children.toArray(prevChildren).length !== React.Children.toArray(children).length) {
        var focusedMenuItemEl = this.menuItemEls[this.focusIndex];
        this.setMenuItemEls();

        var _this$getMenuItemElFr = this.getMenuItemElFromEventTarget(focusedMenuItemEl),
            menuIndex = _this$getMenuItemElFr.menuIndex;

        this.setFocus(menuIndex);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          children = _this$props4.children,
          className = _this$props4.className,
          isHidden = _this$props4.isHidden,
          setRef = _this$props4.setRef,
          shouldOutlineFocus = _this$props4.shouldOutlineFocus,
          rest = _objectWithoutProperties(_this$props4, ["children", "className", "isHidden", "setRef", "shouldOutlineFocus"]);

      var menuProps = omit(rest, ['onClose', 'initialFocusIndex', 'isSubmenu', 'menuItemSelector']);
      menuProps.className = classNames('aria-menu', className, {
        'is-hidden': isHidden,
        'should-outline-focus': shouldOutlineFocus
      });

      menuProps.ref = function (ref) {
        _this2.menuEl = ref;

        if (setRef) {
          setRef(ref);
        }
      };

      if (menuProps.role === undefined) {
        menuProps.role = 'menu';
      }

      menuProps.tabIndex = -1;
      menuProps.onClick = this.handleClick;
      menuProps.onKeyDown = this.handleKeyDown;
      return React.createElement("ul", menuProps, children);
    }
  }]);

  return Menu;
}(React.Component);

_defineProperty(Menu, "defaultProps", {
  className: '',
  isSubmenu: false,
  isHidden: false
});

export default Menu;
//# sourceMappingURL=Menu.js.map