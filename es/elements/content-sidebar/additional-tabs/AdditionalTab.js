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

/**
 * 
 * @file Sidebar Additional Tab component
 * @author Box
 */
import * as React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { bdlGray50 } from '../../../styles/variables';
import PlainButton from '../../../components/plain-button/PlainButton';
import IconEllipsis from '../../../icons/general/IconEllipsis';
import AdditionalTabTooltip from './AdditionalTabTooltip';
import AdditionalTabPlaceholder from './AdditionalTabPlaceholder';
import messages from './messages';
import './AdditionalTab.scss';
var BLOCKED_BY_SHEILD = 'BLOCKED_BY_SHIELD_ACCESS_POLICY';

var AdditionalTab =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(AdditionalTab, _React$PureComponent);

  function AdditionalTab() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AdditionalTab);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AdditionalTab)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isErrored: false
    });

    _defineProperty(_assertThisInitialized(_this), "onImageError", function () {
      _this.props.onImageLoad();

      _this.setState({
        isErrored: true
      });
    });

    return _this;
  }

  _createClass(AdditionalTab, [{
    key: "isDisabled",
    value: function isDisabled() {
      var status = this.props.status;
      return status === BLOCKED_BY_SHEILD;
    }
  }, {
    key: "getDisabledReason",
    value: function getDisabledReason() {
      var reason = '';
      var status = this.props.status;

      switch (status) {
        case BLOCKED_BY_SHEILD:
          reason = React.createElement(FormattedMessage, messages.blockedByShieldAccessPolicy);
          break;

        default: // noop

      }

      return reason;
    }
  }, {
    key: "getTabIcon",
    value: function getTabIcon() {
      var _this$props = this.props,
          id = _this$props.id,
          iconUrl = _this$props.iconUrl,
          onImageLoad = _this$props.onImageLoad,
          title = _this$props.title;
      var isErrored = this.state.isErrored;
      var TabIcon;

      if (isErrored) {
        TabIcon = React.createElement(AdditionalTabPlaceholder, {
          isLoading: false
        });
      } else if (id && id > 0) {
        TabIcon = React.createElement("img", {
          className: "bdl-AdditionalTab-icon",
          src: iconUrl,
          onError: this.onImageError,
          onLoad: onImageLoad,
          alt: title
        });
      } else {
        TabIcon = React.createElement(IconEllipsis, {
          color: bdlGray50
        });
      }

      return TabIcon;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          callbackFn = _this$props2.callback,
          id = _this$props2.id,
          isLoading = _this$props2.isLoading,
          iconUrl = _this$props2.iconUrl,
          ftuxTooltipData = _this$props2.ftuxTooltipData,
          onImageLoad = _this$props2.onImageLoad,
          title = _this$props2.title,
          rest = _objectWithoutProperties(_this$props2, ["callback", "id", "isLoading", "iconUrl", "ftuxTooltipData", "onImageLoad", "title"]);

      var isDisabled = this.isDisabled();
      var className = classNames('bdl-AdditionalTab', {
        'bdl-is-hidden': isLoading,
        'bdl-is-disabled': isDisabled
      });
      var tooltipText = isDisabled ? this.getDisabledReason() : title;
      return React.createElement(AdditionalTabTooltip, {
        defaultTooltipText: tooltipText,
        ftuxTooltipData: ftuxTooltipData,
        isFtuxVisible: !isLoading
      }, React.createElement(PlainButton, {
        className: className,
        "data-testid": "additionaltab",
        type: "button",
        isDisabled: isDisabled,
        onClick: function onClick() {
          return callbackFn({
            id: id,
            callbackData: rest
          });
        }
      }, this.getTabIcon()));
    }
  }]);

  return AdditionalTab;
}(React.PureComponent);

export default AdditionalTab;
//# sourceMappingURL=AdditionalTab.js.map