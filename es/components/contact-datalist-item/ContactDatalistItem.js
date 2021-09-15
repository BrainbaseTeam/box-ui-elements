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
import Avatar from '../avatar';
import DatalistItem from '../datalist-item';
import './ContactDatalistItem.scss';

var ContactDatalistItem =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ContactDatalistItem, _React$PureComponent);

  function ContactDatalistItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ContactDatalistItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ContactDatalistItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      avatarUrl: undefined
    });

    _defineProperty(_assertThisInitialized(_this), "isMounted", false);

    _defineProperty(_assertThisInitialized(_this), "getAvatarUrlHandler", function (avatarUrl) {
      if (_this.isMounted) {
        _this.setState({
          avatarUrl: avatarUrl
        });
      }
    });

    return _this;
  }

  _createClass(ContactDatalistItem, [{
    key: "getAvatarUrl",

    /**
     * Gets the avatar URL for the user from the getContactAvatarUrl prop
     *
     * @return {void}
     */
    value: function getAvatarUrl() {
      var _this$props = this.props,
          getContactAvatarUrl = _this$props.getContactAvatarUrl,
          id = _this$props.id;
      Promise.resolve(getContactAvatarUrl && id ? getContactAvatarUrl({
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
      var _this$props2 = this.props,
          getContactAvatarUrl = _this$props2.getContactAvatarUrl,
          id = _this$props2.id,
          isExternal = _this$props2.isExternal,
          name = _this$props2.name,
          showAvatar = _this$props2.showAvatar,
          subtitle = _this$props2.subtitle,
          rest = _objectWithoutProperties(_this$props2, ["getContactAvatarUrl", "id", "isExternal", "name", "showAvatar", "subtitle"]);

      var avatarUrl = this.state.avatarUrl;
      return React.createElement(DatalistItem, _extends({
        className: "contact-data-list-item"
      }, rest), showAvatar && React.createElement(Avatar, {
        className: "contact-avatar",
        id: id,
        name: name,
        isExternal: isExternal,
        shouldShowExternal: true,
        avatarUrl: avatarUrl
      }), React.createElement("div", {
        className: "contact-name-container"
      }, React.createElement("div", {
        className: "contact-text contact-name"
      }, name), subtitle && React.createElement("div", {
        className: "contact-text contact-sub-name"
      }, subtitle)));
    }
  }]);

  return ContactDatalistItem;
}(React.PureComponent);

export default ContactDatalistItem;
//# sourceMappingURL=ContactDatalistItem.js.map