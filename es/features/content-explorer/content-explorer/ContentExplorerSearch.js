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

import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { injectIntl } from 'react-intl';
import SearchForm from '../../../components/search-form';
import messages from '../messages';

var ContentExplorerSearch =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ContentExplorerSearch, _PureComponent);

  function ContentExplorerSearch() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ContentExplorerSearch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ContentExplorerSearch)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (value) {
      var _this$props = _this.props,
          onClearButtonClick = _this$props.onClearButtonClick,
          onInput = _this$props.onInput;

      if (onInput) {
        onInput(value);
      }

      if (onClearButtonClick && !value) {
        onClearButtonClick();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (value, event) {
      var onSubmit = _this.props.onSubmit;
      event.preventDefault();

      if (onSubmit) {
        onSubmit();
      }
    });

    return _this;
  }

  _createClass(ContentExplorerSearch, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          intl = _this$props2.intl,
          inputValue = _this$props2.inputValue,
          searchInputProps = _this$props2.searchInputProps;
      return React.createElement(SearchForm, _extends({
        className: "content-explorer-search-container",
        onChange: this.handleChange,
        onSubmit: this.handleSubmit,
        placeholder: intl.formatMessage(messages.searchPlaceholder),
        useClearButton: true,
        value: inputValue
      }, searchInputProps));
    }
  }]);

  return ContentExplorerSearch;
}(PureComponent);

_defineProperty(ContentExplorerSearch, "propTypes", {
  intl: PropTypes.any,
  inputValue: PropTypes.string,
  onSubmit: PropTypes.func,
  onInput: PropTypes.func,
  onClearButtonClick: PropTypes.func,
  searchInputProps: PropTypes.object
});

_defineProperty(ContentExplorerSearch, "defaultProps", {
  inputValue: '',
  searchInputProps: {}
});

export { ContentExplorerSearch as ContentExplorerSearchBase };
export default injectIntl(ContentExplorerSearch);
//# sourceMappingURL=ContentExplorerSearch.js.map