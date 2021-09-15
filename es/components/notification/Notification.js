var _DURATION_TIMES, _ICON_RENDERER;

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
import { defineMessages, injectIntl } from 'react-intl';
import classNames from 'classnames';
import IconAlertCircle from '../../icons/general/IconAlertCircle';
import IconBell from '../../icons/general/IconBell';
import IconClose from '../../icons/general/IconClose';
import IconInfoThin from '../../icons/general/IconInfoThin';
import IconSync from '../../icons/general/IconSync';
import './Notification.scss'; // @NOTE: We can't import these constants from ./constant.js because `react-docgen`
// can't handle imported variables appear in propTypes
// see https://github.com/reactjs/react-docgen/issues/33

var DURATION_SHORT = 'short';
var DURATION_LONG = 'long';
var OVERFLOW_WRAP = 'wrap';
var TYPE_DEFAULT = 'default';
var TYPE_INFO = 'info';
var TYPE_WARN = 'warn';
var TYPE_ERROR = 'error';
var DURATION_TIMES = (_DURATION_TIMES = {}, _defineProperty(_DURATION_TIMES, DURATION_SHORT, 5000), _defineProperty(_DURATION_TIMES, DURATION_LONG, 10000), _DURATION_TIMES);
var ICON_RENDERER = (_ICON_RENDERER = {}, _defineProperty(_ICON_RENDERER, TYPE_DEFAULT, function () {
  return React.createElement(IconBell, null);
}), _defineProperty(_ICON_RENDERER, TYPE_ERROR, function () {
  return React.createElement(IconAlertCircle, null);
}), _defineProperty(_ICON_RENDERER, TYPE_INFO, function () {
  return React.createElement(IconSync, null);
}), _defineProperty(_ICON_RENDERER, TYPE_WARN, function () {
  return React.createElement(IconInfoThin, null);
}), _ICON_RENDERER);
var messages = defineMessages({
  clearNotificationButtonText: {
    "id": "boxui.notification.clearNotification",
    "defaultMessage": "Clear Notification"
  }
});

var Notification =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Notification, _React$Component);

  function Notification() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Notification);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Notification)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onClose", function (event) {
      var onClose = _this.props.onClose;

      if (_this.timeout) {
        clearTimeout(_this.timeout);
      }

      if (onClose) {
        onClose(event);
      }
    });

    return _this;
  }

  _createClass(Notification, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          duration = _this$props.duration,
          onClose = _this$props.onClose;
      this.timeout = duration && onClose ? setTimeout(onClose, DURATION_TIMES[duration]) : null;
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      var children = this.props.children;
      return typeof children === 'string' ? React.createElement("span", null, children) : children;
    }
  }, {
    key: "render",
    value: function render() {
      var contents = this.getChildren();
      var _this$props2 = this.props,
          intl = _this$props2.intl,
          type = _this$props2.type,
          overflow = _this$props2.overflow;
      var formatMessage = intl.formatMessage;
      var classes = classNames('notification', type, overflow);
      return React.createElement("div", {
        className: classes
      }, React.cloneElement(ICON_RENDERER[type](), {
        color: '#fff',
        height: 20,
        width: 20
      }), contents, React.createElement("button", {
        "aria-label": formatMessage(messages.clearNotificationButtonText),
        className: "close-btn",
        onClick: this.onClose,
        type: "button"
      }, React.createElement(IconClose, {
        color: "#FFF",
        height: 18,
        width: 18
      })));
    }
  }]);

  return Notification;
}(React.Component);

_defineProperty(Notification, "defaultProps", {
  overflow: OVERFLOW_WRAP,
  type: TYPE_DEFAULT
});

export default injectIntl(Notification);
//# sourceMappingURL=Notification.js.map