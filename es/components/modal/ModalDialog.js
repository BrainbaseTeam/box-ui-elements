function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
import { defineMessages, injectIntl } from 'react-intl';
import IconClose from '../../icons/general/IconClose';
var ALERT_TYPE = 'alert';
var DIALOG_TYPE = 'dialog';
var messages = defineMessages({
  closeModalText: {
    "id": "boxui.modalDialog.closeModalText",
    "defaultMessage": "Close Modal"
  }
});

var ModalDialog =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ModalDialog, _React$Component);

  function ModalDialog() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ModalDialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ModalDialog)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onCloseButtonClick", function (event) {
      var onRequestClose = _this.props.onRequestClose;

      if (onRequestClose) {
        onRequestClose(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "modalID", uniqueId('modal'));

    return _this;
  }

  _createClass(ModalDialog, [{
    key: "renderCloseButton",

    /**
     * Renders a button if onRequestClose is passed in
     * @return {ReactElement|null} - Returns the button, or null if the button shouldn't be rendered
     */
    value: function renderCloseButton() {
      var _this$props = this.props,
          closeButtonProps = _this$props.closeButtonProps,
          onRequestClose = _this$props.onRequestClose,
          intl = _this$props.intl;
      var formatMessage = intl.formatMessage;

      if (!onRequestClose) {
        return null;
      }

      return (// eslint-disable-next-line react/button-has-type
        React.createElement("button", _extends({}, closeButtonProps, {
          "aria-label": formatMessage(messages.closeModalText),
          className: "modal-close-button",
          onClick: this.onCloseButtonClick
        }), React.createElement(IconClose, {
          color: "#909090",
          height: 18,
          width: 18
        }))
      );
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          type = _this$props2.type;

      if (type !== ALERT_TYPE) {
        return React.createElement("div", {
          className: "modal-content"
        }, children);
      }

      var elements = React.Children.toArray(children);

      if (elements.length !== 2) {
        throw new Error('Alert modal must have exactly two children: A message and <ModalActions>');
      }

      return React.createElement("div", {
        className: "modal-content"
      }, React.createElement("p", {
        id: "".concat(this.modalID, "-desc")
      }, elements[0]), elements[1]);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          className = _this$props3.className,
          modalRef = _this$props3.modalRef,
          title = _this$props3.title,
          type = _this$props3.type,
          rest = _objectWithoutProperties(_this$props3, ["className", "modalRef", "title", "type"]);

      var isAlertType = type === ALERT_TYPE;
      var divProps = omit(rest, ['children', 'closeButtonProps', 'onRequestClose', 'intl']);
      divProps.role = isAlertType ? 'alertdialog' : 'dialog';
      divProps['aria-labelledby'] = "".concat(this.modalID, "-label");

      if (isAlertType) {
        divProps['aria-describedby'] = "".concat(this.modalID, "-desc");
      }

      return React.createElement("div", _extends({
        ref: modalRef,
        className: classNames('modal-dialog', className)
      }, divProps), React.createElement("div", {
        className: "modal-header"
      }, React.createElement("h2", {
        className: "modal-title",
        id: "".concat(this.modalID, "-label")
      }, title)), this.renderCloseButton(), this.renderContent());
    }
  }]);

  return ModalDialog;
}(React.Component);

_defineProperty(ModalDialog, "defaultProps", {
  type: DIALOG_TYPE,
  closeButtonProps: {}
});

export { ModalDialog as ModalDialogBase };
export default injectIntl(ModalDialog);
//# sourceMappingURL=ModalDialog.js.map