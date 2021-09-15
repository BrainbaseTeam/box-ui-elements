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
import classNames from 'classnames';
import TetherComponent from 'react-tether';
import PlainButton from '../../components/plain-button';
import IconClose from '../../icons/general/IconClose';
import TETHER_POSITIONS from '../../common/tether-positions';
import './styles/LeftSidebarLinkCallout.scss';

var LeftSidebarLinkCallout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LeftSidebarLinkCallout, _React$Component);

  function LeftSidebarLinkCallout(props) {
    var _this;

    _classCallCheck(this, LeftSidebarLinkCallout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LeftSidebarLinkCallout).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "hideCallout", function () {
      var onClose = _this.props.callout.onClose;

      if (onClose) {
        onClose();
      }

      _this.setState({
        isShown: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isControlled", function () {
      var isShownProp = _this.props.isShown;
      return typeof isShownProp !== 'undefined';
    });

    _defineProperty(_assertThisInitialized(_this), "isShown", function () {
      var isShownProp = _this.props.isShown;

      var isControlled = _this.isControlled();

      var showTooltip = isControlled ? isShownProp : _this.state.isShown;
      return showTooltip;
    });

    _this.state = {
      isShown: true
    };
    return _this;
  }

  _createClass(LeftSidebarLinkCallout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$attachmen = _this$props.attachmentPosition,
          attachmentPosition = _this$props$attachmen === void 0 ? TETHER_POSITIONS.MIDDLE_LEFT : _this$props$attachmen,
          children = _this$props.children,
          content = _this$props.callout.content,
          navLinkClassName = _this$props.navLinkClassName,
          _this$props$targetAtt = _this$props.targetAttachmentPosition,
          targetAttachmentPosition = _this$props$targetAtt === void 0 ? TETHER_POSITIONS.MIDDLE_RIGHT : _this$props$targetAtt;
      var showTooltip = this.isShown();
      return React.createElement(TetherComponent, {
        attachment: attachmentPosition,
        classPrefix: "nav-link-callout",
        enabled: showTooltip,
        targetAttachment: targetAttachmentPosition
      }, React.Children.only(children), showTooltip && React.createElement("div", {
        className: classNames('nav-link-callout', navLinkClassName)
      }, React.createElement(PlainButton, {
        className: "nav-link-callout-close-button",
        onClick: this.hideCallout
      }, React.createElement(IconClose, {
        color: "#fff",
        height: 16,
        width: 16
      })), content));
    }
  }]);

  return LeftSidebarLinkCallout;
}(React.Component);

export default LeftSidebarLinkCallout;
//# sourceMappingURL=LeftSidebarLinkCallout.js.map