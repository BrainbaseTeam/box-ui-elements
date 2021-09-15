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
import { FormattedMessage } from 'react-intl';
import { DEFAULT_MAX_APP_COUNT, SECURITY_CONTROLS_FORMAT } from '../constants';
import { getShortSecurityControlsMessage, getFullSecurityControlsMessages } from './utils';
import messages from './messages';
import PlainButton from '../../../components/plain-button';
import Label from '../../../components/label/Label';
import SecurityControlsItem from './SecurityControlsItem';
import SecurityControlsModal from './SecurityControlsModal';
import './SecurityControls.scss';
var FULL = SECURITY_CONTROLS_FORMAT.FULL,
    SHORT = SECURITY_CONTROLS_FORMAT.SHORT,
    SHORT_WITH_BTN = SECURITY_CONTROLS_FORMAT.SHORT_WITH_BTN;

var SecurityControls =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SecurityControls, _React$Component);

  function SecurityControls() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SecurityControls);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SecurityControls)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isSecurityControlsModalOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "openModal", function () {
      return _this.setState({
        isSecurityControlsModalOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeModal", function () {
      return _this.setState({
        isSecurityControlsModalOpen: false
      });
    });

    return _this;
  }

  _createClass(SecurityControls, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classificationColor = _this$props.classificationColor,
          classificationName = _this$props.classificationName,
          controls = _this$props.controls,
          controlsFormat = _this$props.controlsFormat,
          definition = _this$props.definition,
          itemName = _this$props.itemName,
          maxAppCount = _this$props.maxAppCount,
          shouldRenderLabel = _this$props.shouldRenderLabel;
      var items = [];
      var modalItems;

      if (controlsFormat === FULL) {
        items = getFullSecurityControlsMessages(controls, maxAppCount);
      } else {
        var shortMessage = getShortSecurityControlsMessage(controls);
        items = shortMessage ? [shortMessage] : [];

        if (items.length && controlsFormat === SHORT_WITH_BTN) {
          modalItems = getFullSecurityControlsMessages(controls, maxAppCount);
        }
      }

      if (!items.length) {
        return null;
      }

      var isSecurityControlsModalOpen = this.state.isSecurityControlsModalOpen;
      var shouldShowSecurityControlsModal = controlsFormat === SHORT_WITH_BTN && !!itemName && !!classificationName && !!definition;
      var itemsList = React.createElement("ul", {
        className: "bdl-SecurityControls"
      }, items.map(function (_ref) {
        var message = _ref.message,
            tooltipMessage = _ref.tooltipMessage;
        return React.createElement(SecurityControlsItem, {
          key: message.id,
          message: message,
          tooltipMessage: tooltipMessage
        });
      }));

      if (shouldRenderLabel) {
        itemsList = React.createElement(Label, {
          text: React.createElement(FormattedMessage, messages.securityControlsLabel)
        }, itemsList);
      }

      return React.createElement(React.Fragment, null, itemsList, shouldShowSecurityControlsModal && React.createElement(React.Fragment, null, React.createElement(PlainButton, {
        className: "lnk",
        onClick: this.openModal,
        type: "button"
      }, React.createElement(FormattedMessage, messages.viewAll)), React.createElement(SecurityControlsModal, {
        classificationColor: classificationColor,
        classificationName: classificationName,
        closeModal: this.closeModal,
        definition: definition,
        itemName: itemName,
        isSecurityControlsModalOpen: isSecurityControlsModalOpen,
        modalItems: modalItems
      })));
    }
  }]);

  return SecurityControls;
}(React.Component);

_defineProperty(SecurityControls, "defaultProps", {
  classificationName: '',
  definition: '',
  itemName: '',
  controls: {},
  controlsFormat: SHORT,
  maxAppCount: DEFAULT_MAX_APP_COUNT,
  shouldRenderLabel: false
});

export default SecurityControls;
//# sourceMappingURL=SecurityControls.js.map