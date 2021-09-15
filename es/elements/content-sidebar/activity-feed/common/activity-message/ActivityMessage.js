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
import noop from 'lodash/noop';
import LoadingIndicator from '../../../../../components/loading-indicator';
import formatTaggedMessage from '../../utils/formatTaggedMessage';
import ShowOriginalButton from './ShowOriginalButton';
import TranslateButton from './TranslateButton';
import './ActivityMessage.scss';

var ActivityMessage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ActivityMessage, _React$Component);

  function ActivityMessage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ActivityMessage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ActivityMessage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isLoading: false,
      isTranslation: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleTranslate", function (event) {
      var _this$props = _this.props,
          id = _this$props.id,
          tagged_message = _this$props.tagged_message,
          _this$props$onTransla = _this$props.onTranslate,
          onTranslate = _this$props$onTransla === void 0 ? noop : _this$props$onTransla,
          translatedTaggedMessage = _this$props.translatedTaggedMessage;

      if (!translatedTaggedMessage) {
        _this.setState({
          isLoading: true
        });

        onTranslate({
          id: id,
          tagged_message: tagged_message
        });
      }

      _this.setState({
        isTranslation: true
      });

      event.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "handleShowOriginal", function (event) {
      _this.setState({
        isTranslation: false
      });

      event.preventDefault();
    });

    return _this;
  }

  _createClass(ActivityMessage, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          translatedTaggedMessage = _this$props2.translatedTaggedMessage,
          translationFailed = _this$props2.translationFailed;
      var prevTaggedMessage = prevProps.translatedTaggedMessage,
          prevTranslationFailed = prevProps.translationFailed;

      if (prevTaggedMessage === translatedTaggedMessage || prevTranslationFailed === translationFailed) {
        return;
      }

      if (translatedTaggedMessage || translationFailed) {
        this.setState({
          isLoading: false
        });
      }
    }
  }, {
    key: "getButton",
    value: function getButton(isTranslation) {
      var button = null;

      if (isTranslation) {
        button = React.createElement(ShowOriginalButton, {
          handleShowOriginal: this.handleShowOriginal
        });
      } else {
        button = React.createElement(TranslateButton, {
          handleTranslate: this.handleTranslate
        });
      }

      return button;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          id = _this$props3.id,
          tagged_message = _this$props3.tagged_message,
          translatedTaggedMessage = _this$props3.translatedTaggedMessage,
          translationEnabled = _this$props3.translationEnabled,
          getUserProfileUrl = _this$props3.getUserProfileUrl;
      var _this$state = this.state,
          isLoading = _this$state.isLoading,
          isTranslation = _this$state.isTranslation;
      var commentToDisplay = translationEnabled && isTranslation && translatedTaggedMessage ? translatedTaggedMessage : tagged_message;
      return isLoading ? React.createElement("div", {
        className: "bcs-ActivityMessageLoading"
      }, React.createElement(LoadingIndicator, {
        size: "small"
      })) : React.createElement("div", {
        className: "bcs-ActivityMessage"
      }, formatTaggedMessage(commentToDisplay, id, false, getUserProfileUrl), translationEnabled ? this.getButton(isTranslation) : null);
    }
  }]);

  return ActivityMessage;
}(React.Component);

_defineProperty(ActivityMessage, "defaultProps", {
  translationEnabled: false
});

export default ActivityMessage;
//# sourceMappingURL=ActivityMessage.js.map