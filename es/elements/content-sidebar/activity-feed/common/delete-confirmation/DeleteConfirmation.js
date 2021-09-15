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

/**
 * 
 * @file Comment component
 */
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import Button from '../../../../../components/button';
import commonMessages from '../../../../common/messages';
import PrimaryButton from '../../../../../components/primary-button';
import { KEYS } from '../../../../../constants';
import { Overlay } from '../../../../../components/flyout';
import { ACTIVITY_TARGETS } from '../../../../common/interactionTargets';
import './DeleteConfirmation.scss';

var DeleteConfirmation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DeleteConfirmation, _React$Component);

  function DeleteConfirmation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DeleteConfirmation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DeleteConfirmation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      var nativeEvent = event.nativeEvent;
      var _this$props = _this.props,
          isOpen = _this$props.isOpen,
          onDeleteCancel = _this$props.onDeleteCancel;
      nativeEvent.stopImmediatePropagation();

      switch (event.key) {
        case KEYS.escape:
          event.stopPropagation();
          event.preventDefault();

          if (isOpen) {
            onDeleteCancel();
          }

          break;

        default:
          break;
      }
    });

    return _this;
  }

  _createClass(DeleteConfirmation, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          isOpen = _this$props2.isOpen,
          message = _this$props2.message,
          onDeleteCancel = _this$props2.onDeleteCancel,
          onDeleteConfirm = _this$props2.onDeleteConfirm,
          rest = _objectWithoutProperties(_this$props2, ["isOpen", "message", "onDeleteCancel", "onDeleteConfirm"]);

      return React.createElement(Overlay, _extends({
        className: "be-modal bcs-DeleteConfirmation",
        onKeyDown: this.onKeyDown,
        role: "dialog",
        shouldDefaultFocus: true,
        shouldOutlineFocus: false
      }, rest), React.createElement("div", {
        className: "bcs-DeleteConfirmation-promptMessage"
      }, React.createElement(FormattedMessage, message)), React.createElement("div", null, React.createElement(Button, {
        className: "bcs-DeleteConfirmation-cancel",
        onClick: onDeleteCancel,
        type: "button",
        "data-resin-target": ACTIVITY_TARGETS.INLINE_DELETE_CANCEL
      }, React.createElement(FormattedMessage, commonMessages.cancel)), React.createElement(PrimaryButton, {
        className: "bcs-DeleteConfirmation-delete",
        onClick: onDeleteConfirm,
        type: "button",
        "data-resin-target": ACTIVITY_TARGETS.INLINE_DELETE_CONFIRM
      }, React.createElement(FormattedMessage, commonMessages.delete))));
    }
  }]);

  return DeleteConfirmation;
}(React.Component);

export default DeleteConfirmation;
//# sourceMappingURL=DeleteConfirmation.js.map