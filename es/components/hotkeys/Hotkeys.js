function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { Children, Component } from 'react';
import PropTypes from 'prop-types';
import { HotkeyPropType } from './HotkeyRecord';

var Hotkeys =
/*#__PURE__*/
function (_Component) {
  _inherits(Hotkeys, _Component);

  function Hotkeys() {
    _classCallCheck(this, Hotkeys);

    return _possibleConstructorReturn(this, _getPrototypeOf(Hotkeys).apply(this, arguments));
  }

  _createClass(Hotkeys, [{
    key: "componentDidMount",

    /* eslint-disable no-underscore-dangle */
    value: function componentDidMount() {
      var configs = this.props.configs;

      if (!this.context.hotkeyLayer) {
        throw new Error('You must instantiate a HotkeyLayer before using Hotkeys');
      }

      this._addHotkeys(configs);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var newConfigs = this.props.configs;
      var prevConfigs = prevProps.configs;
      var additions = newConfigs.filter(function (config) {
        return prevConfigs.indexOf(config) === -1;
      });
      var removals = prevConfigs.filter(function (config) {
        return newConfigs.indexOf(config) === -1;
      });

      this._removeHotkeys(removals);

      this._addHotkeys(additions);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var configs = this.props.configs;

      this._removeHotkeys(configs);
    }
  }, {
    key: "_addHotkeys",
    value: function _addHotkeys(hotkeyConfigs) {
      var _this = this;

      hotkeyConfigs.forEach(function (hotkeyConfig) {
        return _this.context.hotkeyLayer.registerHotkey(hotkeyConfig);
      });
    }
  }, {
    key: "_removeHotkeys",
    value: function _removeHotkeys(hotkeyConfigs) {
      var _this2 = this;

      hotkeyConfigs.forEach(function (hotkeyConfig) {
        return _this2.context.hotkeyLayer.deregisterHotkey(hotkeyConfig);
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.children) {
        return null;
      }

      return Children.only(this.props.children);
    }
  }]);

  return Hotkeys;
}(Component);

_defineProperty(Hotkeys, "propTypes", {
  children: PropTypes.node,

  /** Array of hotkey configs, either in the specified shape, or instances of HotkeyRecord */
  configs: PropTypes.arrayOf(HotkeyPropType).isRequired
});

_defineProperty(Hotkeys, "contextTypes", {
  hotkeyLayer: PropTypes.object
});

export default Hotkeys;
//# sourceMappingURL=Hotkeys.js.map