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
import omit from 'lodash/omit';
import uniqueId from 'lodash/uniqueId';
import './DatalistItem.scss';

var DatalistItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DatalistItem, _React$Component);

  function DatalistItem(props) {
    var _this;

    _classCallCheck(this, DatalistItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DatalistItem).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "setActiveItemID", function () {
      var setActiveItemID = _this.props.setActiveItemID;

      if (setActiveItemID) {
        setActiveItemID(_this.id);
      }
    });

    _this.id = uniqueId('datalistitem');
    return _this;
  }

  _createClass(DatalistItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isActive) {
        this.setActiveItemID();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.isActive && !prevProps.isActive) {
        this.setActiveItemID();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          isActive = _this$props.isActive,
          isSelected = _this$props.isSelected,
          rest = _objectWithoutProperties(_this$props, ["children", "className", "isActive", "isSelected"]);

      var classes = classNames('datalist-item', {
        'is-active': isActive
      }, className);
      var itemProps = omit(rest, ['closeDropdown', 'setActiveItemID']); // required aria props are added dynamically

      /* eslint-disable jsx-a11y/role-has-required-aria-props */

      return React.createElement("li", _extends({}, itemProps, {
        className: classes,
        id: this.id,
        role: "option",
        "aria-selected": isSelected
      }), children);
      /* eslint-enable jsx-a11y/role-has-required-aria-props */
    }
  }]);

  return DatalistItem;
}(React.Component);

export default DatalistItem;
//# sourceMappingURL=DatalistItem.js.map