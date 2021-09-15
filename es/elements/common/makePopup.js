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
 * @file HOC to make popup-able Box UI Elements
 * @author Box
 */
import React, { PureComponent } from 'react';
import Modal from 'react-modal';
import noop from 'lodash/noop';
import omit from 'lodash/omit';
import { CLIENT_NAME_CONTENT_PICKER, CLIENT_NAME_CONTENT_UPLOADER } from '../../constants';

var makePopup = function makePopup(kit) {
  return function (Wrapped) {
    var _temp;

    return _temp =
    /*#__PURE__*/
    function (_PureComponent) {
      _inherits(Wrapper, _PureComponent);

      /**
       * [constructor]
       *
       * @param {*} props
       * @return {Wrapper}
       */
      function Wrapper(props) {
        var _this;

        _classCallCheck(this, Wrapper);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(Wrapper).call(this, props));

        _defineProperty(_assertThisInitialized(_this), "onClick", function (data) {
          var _this$props$onClick = _this.props.onClick,
              onClick = _this$props$onClick === void 0 ? noop : _this$props$onClick;

          _this.close(onClick, data);
        });

        _defineProperty(_assertThisInitialized(_this), "onClose", function (data) {
          var _this$props$onClose = _this.props.onClose,
              onClose = _this$props$onClose === void 0 ? noop : _this$props$onClose;

          _this.close(onClose, data);
        });

        _defineProperty(_assertThisInitialized(_this), "onCancel", function (data) {
          var _this$props$onCancel = _this.props.onCancel,
              onCancel = _this$props$onCancel === void 0 ? noop : _this$props$onCancel;

          _this.close(onCancel, data);
        });

        _defineProperty(_assertThisInitialized(_this), "onChoose", function (data) {
          var _this$props$onChoose = _this.props.onChoose,
              onChoose = _this$props$onChoose === void 0 ? noop : _this$props$onChoose;

          _this.close(onChoose, data);
        });

        _defineProperty(_assertThisInitialized(_this), "onButtonClick", function () {
          _this.setState({
            isOpen: true
          });
        });

        _this.state = {
          isOpen: false
        };
        return _this;
      }
      /**
       * Hides the modal and call the callback
       *
       * @param {Function} callback - function to call
       * @return {void}
       */


      _createClass(Wrapper, [{
        key: "close",
        value: function close(callback, data) {
          this.setState({
            isOpen: false
          }, function () {
            return callback(data);
          });
        }
        /**
         * Callback for clicking
         *
         * @param {*} data - any callback data
         * @return {void}
         */

      }, {
        key: "render",

        /**
         * Renders the component
         *
         * @return {void}
         */
        value: function render() {
          var isOpen = this.state.isOpen;

          var _this$props = this.props,
              modal = _this$props.modal,
              rest = _objectWithoutProperties(_this$props, ["modal"]);

          var wrappedProps = omit(rest, ['onCancel', 'onChoose', 'onClose', 'modal']);
          var _modal$buttonLabel = modal.buttonLabel,
              buttonLabel = _modal$buttonLabel === void 0 ? 'Missing modal.buttonLabel in options' : _modal$buttonLabel,
              _modal$buttonClassNam = modal.buttonClassName,
              buttonClassName = _modal$buttonClassNam === void 0 ? 'btn btn-primary' : _modal$buttonClassNam,
              _modal$modalClassName = modal.modalClassName,
              modalClassName = _modal$modalClassName === void 0 ? 'be-modal-wrapper-content' : _modal$modalClassName,
              _modal$overlayClassNa = modal.overlayClassName,
              overlayClassName = _modal$overlayClassNa === void 0 ? 'be-modal-wrapper-overlay' : _modal$overlayClassNa;

          switch (kit) {
            case CLIENT_NAME_CONTENT_PICKER:
              wrappedProps.onCancel = this.onCancel;
              wrappedProps.onChoose = this.onChoose;
              break;

            case CLIENT_NAME_CONTENT_UPLOADER:
              wrappedProps.onClose = this.onClose;
              break;

            default:
              throw new Error('Unknown kit type');
          }

          return React.createElement("div", null, React.createElement("button", {
            className: buttonClassName,
            onClick: this.onButtonClick,
            type: "button"
          }, buttonLabel), React.createElement(Modal, {
            className: modalClassName,
            contentLabel: kit,
            isOpen: isOpen,
            overlayClassName: overlayClassName
          }, React.createElement(Wrapped, wrappedProps)));
        }
      }]);

      return Wrapper;
    }(PureComponent), _temp;
  };
};

export default makePopup;
//# sourceMappingURL=makePopup.js.map