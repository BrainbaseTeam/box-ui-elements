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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import noop from 'lodash/noop';
import classNames from 'classnames';
import X from '../../icon/fill/X16'; // $FlowFixMe this imports from a typescript file

import LabelPill from '../label-pill';
import Avatar from '../avatar';
import './RoundPill.scss';

var RemoveButton = function RemoveButton(_ref) {
  var onClick = _ref.onClick,
      rest = _objectWithoutProperties(_ref, ["onClick"]);

  return React.createElement(X, _extends({}, rest, {
    "aria-hidden": "true",
    onClick: onClick
  }));
};

var RoundPill =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(RoundPill, _React$PureComponent);

  function RoundPill() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RoundPill);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RoundPill)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      avatarUrl: undefined
    });

    _defineProperty(_assertThisInitialized(_this), "isMounted", false);

    _defineProperty(_assertThisInitialized(_this), "getStyles", function () {
      var _this$props = _this.props,
          className = _this$props.className,
          isSelected = _this$props.isSelected,
          isDisabled = _this$props.isDisabled,
          hasWarning = _this$props.hasWarning,
          isValid = _this$props.isValid;
      return classNames('bdl-RoundPill', className, {
        'bdl-RoundPill--selected': isSelected && !isDisabled,
        'bdl-RoundPill--disabled': isDisabled,
        'bdl-RoundPill--warning': hasWarning,
        'bdl-RoundPill--error': !isValid
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickRemove", function () {
      var _this$props2 = _this.props,
          isDisabled = _this$props2.isDisabled,
          onRemove = _this$props2.onRemove;
      return isDisabled ? noop : onRemove();
    });

    _defineProperty(_assertThisInitialized(_this), "getAvatarUrlHandler", function (avatarUrl) {
      if (_this.isMounted) {
        _this.setState({
          avatarUrl: avatarUrl
        });
      }
    });

    return _this;
  }

  _createClass(RoundPill, [{
    key: "getAvatarUrl",

    /**
     * Gets the avatar URL for the user from the getPillImageUrl prop
     *
     * @return {void}
     */
    value: function getAvatarUrl() {
      var _this$props3 = this.props,
          getPillImageUrl = _this$props3.getPillImageUrl,
          id = _this$props3.id;
      Promise.resolve(getPillImageUrl && id ? getPillImageUrl({
        id: id
      }) : undefined).then(this.getAvatarUrlHandler).catch(function () {// noop
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.isMounted = true;
      this.getAvatarUrl();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          id = _this$props4.id,
          isExternal = _this$props4.isExternal,
          showAvatar = _this$props4.showAvatar,
          text = _this$props4.text;
      var avatarUrl = this.state.avatarUrl;
      return React.createElement(LabelPill.Pill, {
        size: "large",
        className: this.getStyles()
      }, showAvatar ? React.createElement(LabelPill.Icon, {
        Component: Avatar,
        className: "bdl-RoundPill-avatar",
        avatarUrl: avatarUrl,
        id: id,
        isExternal: isExternal,
        name: text,
        size: "small",
        shouldShowExternal: true
      }) : null, React.createElement(LabelPill.Text, {
        className: "bdl-RoundPill-text"
      }, text), React.createElement(LabelPill.Icon, {
        className: "bdl-RoundPill-closeBtn",
        Component: RemoveButton,
        onClick: this.handleClickRemove
      }));
    }
  }]);

  return RoundPill;
}(React.PureComponent);

_defineProperty(RoundPill, "defaultProps", {
  isDisabled: false,
  isSelected: false,
  isValid: true,
  hasWarning: false,
  showAvatar: false
});

export default RoundPill;
//# sourceMappingURL=RoundPill.js.map