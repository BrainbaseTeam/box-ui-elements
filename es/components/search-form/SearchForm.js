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

import * as React from 'react';
import { defineMessages, injectIntl } from 'react-intl';
import classNames from 'classnames';
import omit from 'lodash/omit';
import ClearBadge16 from '../../icon/fill/ClearBadge16';
import Search16 from '../../icon/fill/Search16';
import makeLoadable from '../loading-indicator/makeLoadable';
import './SearchForm.scss';
var messages = defineMessages({
  clearButtonTitle: {
    "id": "boxui.searchForm.clearButtonTitle",
    "defaultMessage": "Clear"
  },
  searchButtonTitle: {
    "id": "boxui.searchForm.searchButtonTitle",
    "defaultMessage": "Search"
  },
  searchLabel: {
    "id": "boxui.searchForm.searchLabel",
    "defaultMessage": "Search query"
  }
});

var SearchForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SearchForm, _React$Component);

  function SearchForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SearchForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SearchForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isEmpty: true
    });

    _defineProperty(_assertThisInitialized(_this), "onClearHandler", function (event) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          shouldPreventClearEventPropagation = _this$props.shouldPreventClearEventPropagation;

      if (shouldPreventClearEventPropagation) {
        event.stopPropagation();
      }

      if (_this.searchInput) {
        _this.searchInput.value = '';
      }

      _this.setState({
        isEmpty: true
      });

      if (onChange) {
        onChange('');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeHandler", function (_ref) {
      var target = _ref.target;
      var value = target.value;
      var onChange = _this.props.onChange;

      _this.setState({
        isEmpty: !value || !value.trim().length
      });

      if (onChange) {
        onChange(value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmitHandler", function (event) {
      var value = event.target.elements[0].value;
      var onSubmit = _this.props.onSubmit;

      if (onSubmit) {
        onSubmit(value, event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setInputRef", function (element) {
      _this.searchInput = element;

      if (_this.props.getSearchInput) {
        _this.props.getSearchInput(_this.searchInput);
      }
    });

    return _this;
  }

  _createClass(SearchForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          action = _this$props2.action,
          className = _this$props2.className,
          intl = _this$props2.intl,
          isLoading = _this$props2.isLoading,
          method = _this$props2.method,
          name = _this$props2.name,
          queryParams = _this$props2.queryParams,
          onSubmit = _this$props2.onSubmit,
          useClearButton = _this$props2.useClearButton,
          rest = _objectWithoutProperties(_this$props2, ["action", "className", "intl", "isLoading", "method", "name", "queryParams", "onSubmit", "useClearButton"]);

      var isEmpty = this.state.isEmpty;
      var inputProps = omit(rest, ['getSearchInput', 'onChange', 'onSubmit', 'required', 'shouldPreventClearEventPropagation']);
      var formatMessage = intl.formatMessage;
      var classes = classNames(className, 'search-input-container');
      var formClassNames = classNames('search-form', {
        'is-empty': isEmpty,
        'use-clear-button': useClearButton
      });
      var hiddenInputs = Object.keys(queryParams).map(function (param, index) {
        return React.createElement("input", {
          key: index,
          name: param,
          type: "hidden",
          value: queryParams[param]
        });
      });

      var SearchActions = function SearchActions() {
        return React.createElement("div", {
          className: "action-buttons"
        }, onSubmit ? React.createElement("button", {
          type: "button",
          className: "action-button search-button",
          title: formatMessage(messages.searchButtonTitle)
        }, React.createElement(Search16, null)) : React.createElement("div", {
          className: "action-button search-button"
        }, React.createElement(Search16, null)), React.createElement("button", {
          className: "action-button clear-button",
          onClick: _this2.onClearHandler,
          title: formatMessage(messages.clearButtonTitle),
          type: "button"
        }, React.createElement(ClearBadge16, null)));
      };

      var LoadableSearchActions = makeLoadable(SearchActions); // @NOTE Prevent errors from React about controlled inputs

      var onChangeStub = function onChangeStub() {};

      return React.createElement("div", {
        className: classes
      }, React.createElement("form", {
        action: action,
        className: formClassNames,
        method: method,
        onChange: this.onChangeHandler,
        onSubmit: this.onSubmitHandler,
        role: "search"
      }, React.createElement("input", _extends({
        ref: this.setInputRef,
        "aria-label": formatMessage(messages.searchLabel),
        autoComplete: "off",
        className: "search-input",
        name: name,
        onChange: onChangeStub,
        type: "search"
      }, inputProps)), React.createElement(LoadableSearchActions, {
        isLoading: isLoading,
        loadingIndicatorProps: {
          className: 'search-form-loading-indicator'
        }
      }), hiddenInputs));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props) {
      var value = props.value;

      if (value && !!value.trim()) {
        return {
          isEmpty: true
        };
      }

      return null;
    }
  }]);

  return SearchForm;
}(React.Component);

_defineProperty(SearchForm, "defaultProps", {
  action: undefined,
  method: 'get',
  name: 'search',
  queryParams: {},
  useClearButton: false
});

export default injectIntl(SearchForm);
//# sourceMappingURL=SearchForm.js.map