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
import { injectIntl } from 'react-intl';
import TextareaAutosize from 'react-textarea-autosize';
import messages from './messages';

var EditableDescription =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(EditableDescription, _React$PureComponent);

  function EditableDescription(props) {
    var _this;

    _classCallCheck(this, EditableDescription);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EditableDescription).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
      var value = _this.state.value;

      _this.props.onDescriptionChange(value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var value = event.currentTarget.value;

      _this.setState({
        value: value
      });
    });

    _this.state = {
      value: props.value || ''
    };
    return _this;
  }

  _createClass(EditableDescription, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var prevValue = _ref.value;
      var value = this.props.value;

      if (prevValue !== value) {
        this.setState({
          value: value
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          intl = _this$props.intl,
          textAreaProps = _this$props.textAreaProps;
      var value = this.state.value;
      return React.createElement(TextareaAutosize, _extends({}, textAreaProps, {
        className: "description-textarea",
        maxLength: "255",
        maxRows: 6,
        onBlur: this.handleBlur,
        onChange: this.handleChange,
        placeholder: intl.formatMessage(messages.descriptionPlaceholder),
        value: value
      }));
    }
  }]);

  return EditableDescription;
}(React.PureComponent);

_defineProperty(EditableDescription, "defaultProps", {
  textAreaProps: {},
  value: ''
});

export { EditableDescription as EditableDescriptionBase };
export default injectIntl(EditableDescription);
//# sourceMappingURL=EditableDescription.js.map