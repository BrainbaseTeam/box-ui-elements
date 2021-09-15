function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HotkeyRecord, { HotkeyPropType } from './HotkeyRecord';
import HotkeyService from './HotkeyService';
import Hotkeys from './Hotkeys';
import HotkeyHelpModal from './HotkeyHelpModal'; // eslint-disable-line import/no-cycle

import './HotkeyLayer.scss';

var HotkeyLayer =
/*#__PURE__*/
function (_Component) {
  _inherits(HotkeyLayer, _Component);

  function HotkeyLayer(props) {
    var _this;

    _classCallCheck(this, HotkeyLayer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HotkeyLayer).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isHelpModalOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "openHelpModal", function () {
      _this.setState({
        isHelpModalOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeHelpModal", function () {
      _this.setState({
        isHelpModalOpen: false
      });
    });

    _this.hotkeyService = new HotkeyService();
    return _this;
  }

  _createClass(HotkeyLayer, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        hotkeyLayer: this.hotkeyService
      };
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.hotkeyService.destroyLayer();
    }
  }, {
    key: "getHotkeyConfigs",
    value: function getHotkeyConfigs() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$configs = _this$props.configs,
          configs = _this$props$configs === void 0 ? [] : _this$props$configs,
          helpModalShortcut = _this$props.helpModalShortcut,
          enableHelpModal = _this$props.enableHelpModal;

      if (!enableHelpModal) {
        return configs;
      }

      return [new HotkeyRecord({
        key: helpModalShortcut,
        handler: function handler() {
          return _this2.openHelpModal();
        }
      })].concat(_toConsumableArray(configs));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          _this$props2$classNam = _this$props2.className,
          className = _this$props2$classNam === void 0 ? '' : _this$props2$classNam,
          enableHelpModal = _this$props2.enableHelpModal;
      return React.createElement(Hotkeys, {
        configs: this.getHotkeyConfigs()
      }, enableHelpModal ? React.createElement("span", {
        className: "hotkey-layer ".concat(className)
      }, React.createElement(HotkeyHelpModal, {
        isOpen: this.state.isHelpModalOpen,
        onRequestClose: this.closeHelpModal
      }), children) : children);
    }
  }]);

  return HotkeyLayer;
}(Component);

_defineProperty(HotkeyLayer, "propTypes", {
  children: PropTypes.node,
  className: PropTypes.string,

  /** Array of hotkey configs, either in the specified shape, or instances of HotkeyRecord */
  configs: PropTypes.arrayOf(HotkeyPropType),

  /** Shortcut to trigger the help modal, if it's enabled */
  helpModalShortcut: PropTypes.string,
  enableHelpModal: PropTypes.bool
});

_defineProperty(HotkeyLayer, "defaultProps", {
  helpModalShortcut: '?',
  enableHelpModal: false
});

_defineProperty(HotkeyLayer, "contextTypes", {
  hotkeyLayer: PropTypes.object
});

_defineProperty(HotkeyLayer, "childContextTypes", {
  hotkeyLayer: PropTypes.object
});

export default HotkeyLayer;
//# sourceMappingURL=HotkeyLayer.js.map