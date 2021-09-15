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
import classNames from 'classnames';
import omit from 'lodash/omit';
import RadarAnimation from '../radar';

var MenuItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MenuItem, _React$Component);

  function MenuItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MenuItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MenuItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onClickHandler", function (event) {
      var _this$props = _this.props,
          isDisabled = _this$props.isDisabled,
          onClick = _this$props.onClick; // If aria-disabled is passed as a prop, we should ignore clicks on this menu item

      if (isDisabled) {
        event.stopPropagation();
        event.preventDefault();
        return;
      }

      if (onClick) {
        onClick(event);
      }
    });

    return _this;
  }

  _createClass(MenuItem, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          isDisabled = _this$props2.isDisabled,
          isSelectItem = _this$props2.isSelectItem,
          isSelected = _this$props2.isSelected,
          showRadar = _this$props2.showRadar,
          rest = _objectWithoutProperties(_this$props2, ["children", "className", "isDisabled", "isSelectItem", "isSelected", "showRadar"]);

      var menuItemProps = omit(rest, ['role', 'tabIndex', 'onClick']);
      menuItemProps.className = classNames('menu-item', className, {
        'is-select-item': isSelectItem,
        'is-selected': isSelected
      });
      menuItemProps.role = isSelectItem ? 'menuitemradio' : 'menuitem';
      menuItemProps.tabIndex = -1;
      menuItemProps.onClick = this.onClickHandler;

      if (isSelectItem) {
        menuItemProps['aria-checked'] = isSelected;
      }

      if (isDisabled) {
        menuItemProps['aria-disabled'] = 'true';
      }

      var menuItem = React.createElement("li", menuItemProps, children);

      if (showRadar) {
        menuItem = React.createElement(RadarAnimation, null, menuItem);
      }

      return menuItem;
    }
  }]);

  return MenuItem;
}(React.Component);

export default MenuItem;
//# sourceMappingURL=MenuItem.js.map