function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import commonMessages from '../../common/messages';
import { ModalActions } from '../modal';
import Button from '../button';
import PlainButton from '../plain-button';
import DropdownMenu, { MenuToggle } from '../dropdown-menu';
import { Menu, MenuItem } from '../menu';
import HotkeyFriendlyModal from './HotkeyFriendlyModal'; // eslint-disable-line import/no-cycle

import messages from './messages';
import './HotkeyHelpModal.scss';
var specialCharacters = {
  backspace: "\u232B",
  down: "\u2193",
  left: "\u2190",
  meta: "\u2318",
  right: "\u2192",
  up: "\u2191",
  enter: /*#__PURE__*/React.createElement(FormattedMessage, messages.enterKey),
  spacebar: /*#__PURE__*/React.createElement(FormattedMessage, messages.spacebarKey),
  shift: "\u21E7",
  ctrl: /*#__PURE__*/React.createElement(FormattedMessage, messages.ctrlKey),
  alt: /*#__PURE__*/React.createElement(FormattedMessage, messages.altKey),
  esc: /*#__PURE__*/React.createElement(FormattedMessage, messages.escKey)
};

var HotkeyHelpModal = /*#__PURE__*/function (_Component) {
  _inherits(HotkeyHelpModal, _Component);

  var _super = _createSuper(HotkeyHelpModal);

  function HotkeyHelpModal(props, context) {
    var _this;

    _classCallCheck(this, HotkeyHelpModal);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "prettyPrintHotkey", function (hotkeyConfig) {
      var hotkeys = Array.isArray(hotkeyConfig.key) ? hotkeyConfig.key : [hotkeyConfig.key];
      return hotkeys.map(function (hotkey) {
        return hotkey.split(' ').reduce(function (prettyHotkey, combo, i) {
          // Convert a "raw" combo to a "pretty" combo:
          // e.g. "shift+g" => [ <kbd>Shift</kbd>, '+', <kbd>G</kbd> ]
          var prettyCombo = combo.split('+').map(function (key) {
            // Convert special key characters into their respective icons or translated components:
            // e.g. "shift" => "Shift", "meta" => "⌘"
            if (key in specialCharacters) {
              return specialCharacters[key];
            } // If it's not a special character, just return the uppercased key:
            // e.g. "g" => "G"


            return key.length === 1 ? key.toUpperCase() : key;
          }).map(function (key, j) {
            return /*#__PURE__*/React.createElement("kbd", {
              key: j
            }, key);
          }); // If this hotkey is a sequence of keys, return a translated message to combine them:
          // e.g. "Shift+G Shift+A" => "Shift+G then Shift+A"

          return i === 0 ? prettyCombo : /*#__PURE__*/React.createElement(FormattedMessage, _extends({
            values: {
              key1: /*#__PURE__*/React.createElement("span", null, prettyHotkey),
              key2: /*#__PURE__*/React.createElement("span", null, prettyCombo)
            }
          }, messages.hotkeySequence));
        }, []);
      }).reduce(function (finalHotkey, hotkey, i) {
        return (// For shortcuts with multiple hotkeys, separate each hotkey with a "/" joiner:
          // e.g. "Cmd+S Ctrl+S" => "Cmd+S / Ctrl+S"
          i === 0 ? [hotkey] : [].concat(_toConsumableArray(finalHotkey), [' / ', hotkey])
        );
      }, []).map(function (element, i) {
        return /*#__PURE__*/React.createElement("span", {
          key: i
        }, element);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderHotkey", function (hotkey, i) {
      return /*#__PURE__*/React.createElement("li", {
        key: i,
        className: "hotkey-item"
      }, /*#__PURE__*/React.createElement("div", {
        className: "hotkey-description"
      }, hotkey.description), /*#__PURE__*/React.createElement("div", {
        className: "hotkey-key"
      }, _this.prettyPrintHotkey(hotkey)));
    });

    _this.hotkeys = context.hotkeyLayer.getActiveHotkeys();
    _this.types = context.hotkeyLayer.getActiveTypes();
    _this.state = {
      currentType: _this.types.length ? _this.types[0] : null
    };
    return _this;
  }

  _createClass(HotkeyHelpModal, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref, _ref2) {
      var prevIsOpen = _ref.isOpen;
      var prevType = _ref2.currentType;
      var isOpen = this.props.isOpen;

      if (!isOpen) {
        return;
      } // modal is being opened; refresh hotkeys


      if (!prevIsOpen && isOpen) {
        this.hotkeys = this.context.hotkeyLayer.getActiveHotkeys();
        this.types = this.context.hotkeyLayer.getActiveTypes();
      }

      if (!prevType) {
        this.setState({
          currentType: this.types.length ? this.types[0] : null
        });
      }
    }
    /**
     * Converts a "raw" hotkey to translated JSX version
     */

  }, {
    key: "renderDropdownMenu",
    value: function renderDropdownMenu() {
      var _this2 = this;

      var currentType = this.state.currentType;

      if (!currentType) {
        return null;
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "hotkey-dropdown"
      }, /*#__PURE__*/React.createElement(DropdownMenu, null, /*#__PURE__*/React.createElement(PlainButton, {
        className: "lnk",
        type: "button"
      }, /*#__PURE__*/React.createElement(MenuToggle, null, currentType)), /*#__PURE__*/React.createElement(Menu, null, this.types.map(function (hotkeyType, i) {
        return /*#__PURE__*/React.createElement(MenuItem, {
          key: i,
          onClick: function onClick() {
            return _this2.setState({
              currentType: hotkeyType
            });
          }
        }, hotkeyType);
      }))));
    }
  }, {
    key: "renderHotkeyList",
    value: function renderHotkeyList() {
      var currentType = this.state.currentType;

      if (!currentType) {
        return null;
      }

      var hotkeys = this.hotkeys[currentType];
      return /*#__PURE__*/React.createElement("ul", {
        className: "hotkey-list"
      }, hotkeys.map(this.renderHotkey));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isOpen = _this$props.isOpen,
          onRequestClose = _this$props.onRequestClose;
      var currentType = this.state.currentType;

      if (!currentType) {
        return null;
      }

      return /*#__PURE__*/React.createElement(HotkeyFriendlyModal, {
        className: "hotkey-modal",
        isOpen: isOpen,
        onRequestClose: onRequestClose,
        title: /*#__PURE__*/React.createElement(FormattedMessage, messages.hotkeyModalTitle)
      }, this.renderDropdownMenu(), this.renderHotkeyList(), /*#__PURE__*/React.createElement(ModalActions, null, /*#__PURE__*/React.createElement(Button, {
        onClick: onRequestClose
      }, /*#__PURE__*/React.createElement(FormattedMessage, commonMessages.cancel))));
    }
  }]);

  return HotkeyHelpModal;
}(Component);

_defineProperty(HotkeyHelpModal, "propTypes", {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func.isRequired
});

_defineProperty(HotkeyHelpModal, "contextTypes", {
  hotkeyLayer: PropTypes.object
});

export default HotkeyHelpModal;
//# sourceMappingURL=HotkeyHelpModal.js.map