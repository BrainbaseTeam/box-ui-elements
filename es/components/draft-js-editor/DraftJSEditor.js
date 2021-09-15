function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import { Editor } from 'draft-js';
import 'draft-js/dist/Draft.css';
import Tooltip from '../tooltip';
import commonMessages from '../../common/messages';
import './DraftJSEditor.scss';

var OptionalFormattedMessage = function OptionalFormattedMessage() {
  return React.createElement("span", {
    className: "bdl-Label-optional"
  }, "(", React.createElement(FormattedMessage, commonMessages.optional), ")");
};

var DraftJSEditor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DraftJSEditor, _React$Component);

  function DraftJSEditor() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DraftJSEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DraftJSEditor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (editorState) {
      var onChange = _this.props.onChange;
      onChange(editorState);
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (editorState) {
      var onBlur = _this.props.onBlur;
      onBlur(editorState);
    });

    _defineProperty(_assertThisInitialized(_this), "handleReturn", function (event) {
      var _this$props = _this.props,
          onReturn = _this$props.onReturn,
          inputProps = _this$props.inputProps;

      if (onReturn && !inputProps['aria-activedescendant']) {
        // Return 'handled' tells DraftJS Editor to not handle return key event,
        // return 'not-handled' tells DraftJS Editor to continue handle the return key event.
        // We encapsulate this DraftJS Editor specific contract here, and use true/fase
        // to indicate whether to let DraftJS Editor handle return event or not in the upper level.
        return onReturn(event) ? 'handled' : 'not-handled';
      }

      return 'not-handled';
    });

    _defineProperty(_assertThisInitialized(_this), "labelID", uniqueId('label'));

    _defineProperty(_assertThisInitialized(_this), "descriptionID", uniqueId('description'));

    return _this;
  }

  _createClass(DraftJSEditor, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          editorState = _this$props2.editorState,
          error = _this$props2.error,
          hideLabel = _this$props2.hideLabel,
          inputProps = _this$props2.inputProps,
          isDisabled = _this$props2.isDisabled,
          isRequired = _this$props2.isRequired,
          label = _this$props2.label,
          description = _this$props2.description,
          onFocus = _this$props2.onFocus,
          placeholder = _this$props2.placeholder;
      var handleBlur = this.handleBlur,
          handleChange = this.handleChange;
      var classes = classNames({
        'draft-js-editor': true,
        'is-disabled bdl-is-disabled': isDisabled,
        'show-error': !!error
      });
      var a11yProps = {};

      if (inputProps.role) {
        a11yProps = {
          ariaActiveDescendantID: inputProps['aria-activedescendant'],
          ariaAutoComplete: inputProps['aria-autocomplete'],
          ariaExpanded: inputProps['aria-expanded'],
          ariaOwneeID: inputProps['aria-owns'],
          ariaMultiline: true,
          role: 'textbox'
        };
      }

      return React.createElement("div", {
        className: classes
      }, React.createElement("span", {
        className: classNames('bdl-Label', {
          'accessibility-hidden': hideLabel
        }),
        id: this.labelID
      }, label, !isRequired && React.createElement(OptionalFormattedMessage, null)), React.createElement("span", {
        className: "accessibility-hidden screenreader-description",
        id: this.descriptionID
      }, description), React.createElement(Tooltip, {
        isShown: !!error,
        position: "bottom-left",
        text: error ? error.message : '',
        theme: "error"
      }, React.createElement("div", null, React.createElement(Editor, _extends({}, a11yProps, {
        ariaLabelledBy: this.labelID,
        ariaDescribedBy: this.descriptionID,
        editorState: editorState,
        handleReturn: this.handleReturn,
        onBlur: handleBlur,
        onChange: handleChange,
        onFocus: onFocus,
        placeholder: placeholder,
        readOnly: isDisabled,
        stripPastedStyles: true
      })))));
    }
  }]);

  return DraftJSEditor;
}(React.Component);

_defineProperty(DraftJSEditor, "defaultProps", {
  inputProps: {},
  isRequired: false,
  isFocused: false
});

export default DraftJSEditor;
//# sourceMappingURL=DraftJSEditor.js.map