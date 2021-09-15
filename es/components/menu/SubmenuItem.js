function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
import omit from 'lodash/omit';
import debounce from 'lodash/debounce';
import './SubmenuItem.scss';
import Arrow16 from '../../icon/fill/Arrow16';
var SUBMENU_LEFT_ALIGNED_CLASS = 'is-left-aligned';
var SUBMENU_BOTTOM_ALIGNED_CLASS = 'is-bottom-aligned';

/**
 * A menu-item component which triggers open a submenu
 *
 * @NOTE: Nested submenus are NOT currently supported, switching
 * focus with arrow keys in the subsubmenu is not working properly.
 */
var SubmenuItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SubmenuItem, _React$Component);

  function SubmenuItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SubmenuItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SubmenuItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isSubmenuOpen: false,
      submenuFocusIndex: null
    });

    _defineProperty(_assertThisInitialized(_this), "getMenuAlignmentClasses", function () {
      var _ref;

      if (!_this.submenuTriggerEl || !_this.submenuEl) {
        return {};
      }

      var _this$props = _this.props,
          rightBoundaryElement = _this$props.rightBoundaryElement,
          bottomBoundaryElement = _this$props.bottomBoundaryElement;

      var submenuElBounding = _this.submenuEl.getBoundingClientRect();

      var submenuTriggerElBounding = _this.submenuTriggerEl.getBoundingClientRect();

      var rightBoundaryElementBounding = rightBoundaryElement ? rightBoundaryElement.getBoundingClientRect() : {
        right: window.innerWidth
      };
      var bottomBoundaryElementBounding = bottomBoundaryElement ? bottomBoundaryElement.getBoundingClientRect() : {
        bottom: window.innerHeight
      };
      var isLeftAligned = submenuTriggerElBounding.right + submenuElBounding.width > rightBoundaryElementBounding.right;
      var isBottomAligned = submenuTriggerElBounding.top + submenuElBounding.height > bottomBoundaryElementBounding.bottom;
      return _ref = {}, _defineProperty(_ref, SUBMENU_LEFT_ALIGNED_CLASS, isLeftAligned), _defineProperty(_ref, SUBMENU_BOTTOM_ALIGNED_CLASS, isBottomAligned), _ref;
    });

    _defineProperty(_assertThisInitialized(_this), "handleMenuItemClick", function (event) {
      var _this$props2 = _this.props,
          isDisabled = _this$props2.isDisabled,
          onClick = _this$props2.onClick; // If aria-disabled is passed as a prop, we should ignore clicks on this menu item

      if (isDisabled) {
        event.stopPropagation();
        event.preventDefault();
        return;
      }

      if (onClick) {
        onClick(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      switch (event.key) {
        case ' ':
        case 'Enter':
        case 'ArrowRight':
          event.stopPropagation();
          event.preventDefault();

          _this.openSubmenuAndFocus();

          break;

        default:
          break;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "closeSubmenu", debounce(function () {
      _this.setState({
        isSubmenuOpen: false
      });
    }, 50));

    _defineProperty(_assertThisInitialized(_this), "closeSubmenuAndFocusTrigger", function (isKeyboardEvent) {
      _this.closeSubmenu();

      if (_this.submenuTriggerEl && isKeyboardEvent) {
        _this.submenuTriggerEl.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "openSubmenu", function () {
      _this.closeSubmenu.cancel();

      var onOpen = _this.props.onOpen;

      if (onOpen) {
        onOpen();
      }

      _this.setState({
        isSubmenuOpen: true,
        submenuFocusIndex: null
      });
    });

    _defineProperty(_assertThisInitialized(_this), "openSubmenuAndFocus", function () {
      var onOpen = _this.props.onOpen;

      if (onOpen) {
        onOpen();
      }

      _this.setState({
        isSubmenuOpen: true,
        submenuFocusIndex: 0
      });
    });

    return _this;
  }

  _createClass(SubmenuItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          children = _this$props3.children,
          className = _this$props3.className,
          isDisabled = _this$props3.isDisabled,
          rest = _objectWithoutProperties(_this$props3, ["children", "className", "isDisabled"]);

      var _this$state = this.state,
          isSubmenuOpen = _this$state.isSubmenuOpen,
          submenuFocusIndex = _this$state.submenuFocusIndex;
      var elements = React.Children.toArray(children);
      var submenuTriggerContent = elements[0];
      var submenu = elements[1];

      if (elements.length !== 2 || !submenuTriggerContent || !submenu) {
        throw new Error('SubmenuItem must have exactly two children, a trigger component and a <Menu>');
      }

      var chevron = React.createElement(Arrow16, {
        className: "menu-item-arrow",
        width: 12,
        height: 12
      });

      var menuItemProps = _objectSpread({}, omit(rest, ['bottomBoundaryElement', 'onClick', 'onOpen', 'rightBoundaryElement', 'role', 'tabIndex']), {
        'aria-disabled': isDisabled ? 'true' : undefined,
        'aria-expanded': isSubmenuOpen ? 'true' : 'false',
        'aria-haspopup': 'true',
        className: classNames('menu-item', 'submenu-target', className),
        onClick: this.handleMenuItemClick,
        onMouseLeave: this.closeSubmenu,
        onMouseEnter: this.openSubmenu,
        onKeyDown: this.handleKeyDown,
        ref: function ref(_ref2) {
          _this2.submenuTriggerEl = _ref2;
        },
        role: 'menuitem',
        tabIndex: -1
      });

      var submenuProps = {
        className: classNames(submenu.props.className, 'submenu', this.getMenuAlignmentClasses()),
        initialFocusIndex: submenuFocusIndex,
        // Hide the menu instead of unmounting it. Otherwise onMouseLeave won't work.
        isHidden: !isSubmenuOpen,
        isSubmenu: true,
        onClose: this.closeSubmenuAndFocusTrigger,
        setRef: function setRef(ref) {
          _this2.submenuEl = ref;
        }
      };
      return React.createElement("li", menuItemProps, submenuTriggerContent, chevron, React.cloneElement(submenu, submenuProps));
    }
  }]);

  return SubmenuItem;
}(React.Component);

export default SubmenuItem;
//# sourceMappingURL=SubmenuItem.js.map