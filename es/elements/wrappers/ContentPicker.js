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
 * @file Base class for the Content Picker ES6 wrapper
 * @author Box
 */
import React from 'react';
import { render as _render } from 'react-dom';
import ES6Wrapper from './ES6Wrapper';
import ContentPickerPopup from '../content-picker/ContentPickerPopup';
import ContentPickerReactComponent from '../content-picker/ContentPicker';
import { TYPE_FOLDER, TYPE_FILE, TYPE_WEBLINK, CLIENT_NAME_CONTENT_PICKER } from '../../constants';

var ContentPicker =
/*#__PURE__*/
function (_ES6Wrapper) {
  _inherits(ContentPicker, _ES6Wrapper);

  function ContentPicker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ContentPicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ContentPicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onChoose", function (data) {
      _this.emit('choose', data);
    });

    _defineProperty(_assertThisInitialized(_this), "onCancel", function () {
      _this.emit('cancel');
    });

    return _this;
  }

  _createClass(ContentPicker, [{
    key: "getType",

    /**
     * Returns the type of content picker
     *
     * @return {void}
     */
    value: function getType() {
      var _ref = this.options || {},
          type = _ref.type;

      return type || "".concat(TYPE_FOLDER, ",").concat(TYPE_FILE, ",").concat(TYPE_WEBLINK);
    }
    /**
     * Returns the name for content picker
     *
     * @return {void}
     */

  }, {
    key: "getClientName",
    value: function getClientName() {
      return CLIENT_NAME_CONTENT_PICKER;
    }
    /** @inheritdoc */

  }, {
    key: "render",
    value: function render() {
      var _this$options = this.options,
          modal = _this$options.modal,
          rest = _objectWithoutProperties(_this$options, ["modal"]);

      var PickerComponent = modal ? ContentPickerPopup : ContentPickerReactComponent;

      _render(React.createElement(PickerComponent, _extends({
        clientName: this.getClientName(),
        componentRef: this.setComponent,
        language: this.language,
        messages: this.messages,
        modal: modal,
        onCancel: this.onCancel,
        onChoose: this.onChoose,
        rootFolderId: this.id,
        token: this.token,
        type: this.getType()
      }, rest)), this.container);
    }
  }]);

  return ContentPicker;
}(ES6Wrapper);

export default ContentPicker;
//# sourceMappingURL=ContentPicker.js.map