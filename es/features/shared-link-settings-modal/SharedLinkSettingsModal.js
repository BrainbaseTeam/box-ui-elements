function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Button from '../../components/button';
import PrimaryButton from '../../components/primary-button';
import { Modal, ModalActions } from '../../components/modal';
import InlineNotice from '../../components/inline-notice';
import Link from '../../components/link/LinkBase';
import commonMessages from '../../common/messages';
import Classification from '../classification';
import VanityNameSection from './VanityNameSection';
import PasswordSection from './PasswordSection';
import ExpirationSection from './ExpirationSection';
import AllowDownloadSection from './AllowDownloadSection';
import messages from './messages';
import { PEOPLE_WITH_LINK, PEOPLE_IN_COMPANY, PEOPLE_IN_ITEM } from '../shared-link-modal/constants';
import './SharedLinkSettingsModal.scss';
/**
 * Return the translation message based on the access level and whether the user can download or not
 * @param {string} accessLevel one of 'peopleWithTheLink', 'peopleInYourCompany', or 'peopleInThisItem'
 * @param {boolean} canDownload prop value for whether the user can currently download
 *
 * @return {object|undefined} message for the proper translation (or undefined if nothing matches)
 */

function getAccessNoticeMessageId(accessLevel, canDownload) {
  var message;

  switch (accessLevel) {
    case PEOPLE_WITH_LINK:
      message = canDownload ? messages.withLinkViewDownload : messages.withLinkView;
      break;

    case PEOPLE_IN_COMPANY:
      message = canDownload ? messages.inCompanyViewDownload : messages.inCompanyView;
      break;

    case PEOPLE_IN_ITEM:
      message = messages.inItem;
      break;

    default:
      break;
  }

  return message;
}

var SharedLinkSettingsModal = /*#__PURE__*/function (_Component) {
  _inherits(SharedLinkSettingsModal, _Component);

  var _super = _createSuper(SharedLinkSettingsModal);

  function SharedLinkSettingsModal(props) {
    var _this;

    _classCallCheck(this, SharedLinkSettingsModal);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (event) {
      event.preventDefault();
      var _this$state = _this.state,
          expirationDate = _this$state.expirationDate,
          isDownloadEnabled = _this$state.isDownloadEnabled,
          isExpirationEnabled = _this$state.isExpirationEnabled,
          isPasswordEnabled = _this$state.isPasswordEnabled,
          password = _this$state.password,
          vanityName = _this$state.vanityName;

      _this.props.onSubmit({
        expirationTimestamp: expirationDate ? expirationDate.getTime() : undefined,
        isDownloadEnabled: isDownloadEnabled,
        isExpirationEnabled: isExpirationEnabled,
        isPasswordEnabled: isPasswordEnabled,
        password: password,
        vanityName: vanityName
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onVanityNameChange", function (event) {
      _this.setState({
        vanityName: event.target.value,
        vanityNameError: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onPasswordChange", function (event) {
      _this.setState({
        password: event.target.value,
        passwordError: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onPasswordCheckboxChange", function (event) {
      _this.setState({
        isPasswordEnabled: event.target.checked
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onExpirationDateChange", function (date) {
      _this.setState({
        expirationDate: date,
        expirationError: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onExpirationCheckboxChange", function (event) {
      _this.setState({
        isExpirationEnabled: event.target.checked
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onAllowDownloadChange", function (event) {
      _this.setState({
        isDownloadEnabled: event.target.checked
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onVanityCheckboxChange", function (event) {
      _this.setState({
        isVanityEnabled: event.target.checked,
        vanityName: !event.target.checked ? '' : _this.props.vanityName
      });
    });

    _this.state = {
      expirationDate: props.expirationTimestamp ? new Date(props.expirationTimestamp) : null,
      expirationError: props.expirationError,
      isVanityEnabled: !!props.vanityName,
      isDownloadEnabled: props.isDownloadEnabled,
      isExpirationEnabled: !!props.expirationTimestamp,
      isPasswordEnabled: props.isPasswordEnabled,
      password: '',
      passwordError: props.passwordError,
      vanityName: props.vanityName,
      vanityNameError: props.vanityNameError
    };
    return _this;
  }

  _createClass(SharedLinkSettingsModal, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          expirationError = _this$props.expirationError,
          passwordError = _this$props.passwordError,
          vanityNameError = _this$props.vanityNameError;

      if (prevProps.expirationError !== expirationError || prevProps.passwordError !== passwordError || prevProps.vanityNameError !== vanityNameError) {
        this.setState({
          expirationError: expirationError,
          passwordError: passwordError,
          vanityNameError: vanityNameError
        });
      }
    }
  }, {
    key: "renderVanityNameSection",
    value: function renderVanityNameSection() {
      var _this$props2 = this.props,
          canChangeVanityName = _this$props2.canChangeVanityName,
          hideVanityNameSection = _this$props2.hideVanityNameSection,
          serverURL = _this$props2.serverURL,
          vanityNameInputProps = _this$props2.vanityNameInputProps,
          _this$props2$warnOnPu = _this$props2.warnOnPublic,
          warnOnPublic = _this$props2$warnOnPu === void 0 ? false : _this$props2$warnOnPu;
      var _this$state2 = this.state,
          vanityNameError = _this$state2.vanityNameError,
          isVanityEnabled = _this$state2.isVanityEnabled;

      if (hideVanityNameSection) {
        return null;
      }

      return /*#__PURE__*/React.createElement(VanityNameSection, {
        canChangeVanityName: canChangeVanityName,
        isVanityEnabled: isVanityEnabled,
        error: vanityNameError,
        onChange: this.onVanityNameChange,
        onCheckboxChange: this.onVanityCheckboxChange,
        serverURL: serverURL,
        vanityName: this.state.vanityName,
        vanityNameInputProps: vanityNameInputProps,
        warnOnPublic: warnOnPublic
      });
    }
  }, {
    key: "renderPasswordSection",
    value: function renderPasswordSection() {
      var _this$props3 = this.props,
          canChangePassword = _this$props3.canChangePassword,
          isPasswordAvailable = _this$props3.isPasswordAvailable,
          passwordCheckboxProps = _this$props3.passwordCheckboxProps,
          passwordInputProps = _this$props3.passwordInputProps;
      var _this$state3 = this.state,
          isPasswordEnabled = _this$state3.isPasswordEnabled,
          password = _this$state3.password,
          passwordError = _this$state3.passwordError;
      return /*#__PURE__*/React.createElement(PasswordSection, {
        canChangePassword: canChangePassword,
        error: passwordError,
        isPasswordAvailable: isPasswordAvailable,
        isPasswordEnabled: isPasswordEnabled,
        isPasswordInitiallyEnabled: this.props.isPasswordEnabled,
        onCheckboxChange: this.onPasswordCheckboxChange,
        onPasswordChange: this.onPasswordChange,
        password: password,
        passwordCheckboxProps: passwordCheckboxProps,
        passwordInputProps: passwordInputProps
      });
    }
  }, {
    key: "renderExpirationSection",
    value: function renderExpirationSection() {
      var _this$props4 = this.props,
          canChangeExpiration = _this$props4.canChangeExpiration,
          expirationCheckboxProps = _this$props4.expirationCheckboxProps,
          expirationInputProps = _this$props4.expirationInputProps;
      var _this$state4 = this.state,
          expirationDate = _this$state4.expirationDate,
          isExpirationEnabled = _this$state4.isExpirationEnabled,
          expirationError = _this$state4.expirationError;
      return /*#__PURE__*/React.createElement(ExpirationSection, {
        canChangeExpiration: canChangeExpiration,
        error: expirationError,
        expirationCheckboxProps: expirationCheckboxProps,
        expirationDate: expirationDate,
        expirationInputProps: expirationInputProps,
        isExpirationEnabled: isExpirationEnabled,
        onCheckboxChange: this.onExpirationCheckboxChange,
        onExpirationDateChange: this.onExpirationDateChange
      });
    }
  }, {
    key: "renderAccessLevelNotice",
    value: function renderAccessLevelNotice() {
      var accessLevel = this.props.accessLevel;
      var isDownloadEnabled = this.state.isDownloadEnabled;
      var message = getAccessNoticeMessageId(accessLevel, isDownloadEnabled);
      return message && /*#__PURE__*/React.createElement("p", {
        className: "link-settings-modal-notice"
      }, /*#__PURE__*/React.createElement(FormattedMessage, message), ' ', /*#__PURE__*/React.createElement(Link, {
        href: "https://community.box.com/t5/Using-Shared-Links/Shared-Link-Settings/ta-p/50250",
        target: "_blank"
      }, /*#__PURE__*/React.createElement(FormattedMessage, messages.sharedLinkSettingWarningLinkText)));
    }
  }, {
    key: "renderAllowDownloadSection",
    value: function renderAllowDownloadSection() {
      var _this$props5 = this.props,
          canChangeDownload = _this$props5.canChangeDownload,
          directLink = _this$props5.directLink,
          directLinkInputProps = _this$props5.directLinkInputProps,
          downloadCheckboxProps = _this$props5.downloadCheckboxProps,
          isDirectLinkAvailable = _this$props5.isDirectLinkAvailable,
          isDirectLinkUnavailableDueToDownloadSettings = _this$props5.isDirectLinkUnavailableDueToDownloadSettings,
          isDirectLinkUnavailableDueToAccessPolicy = _this$props5.isDirectLinkUnavailableDueToAccessPolicy,
          isDownloadAvailable = _this$props5.isDownloadAvailable,
          item = _this$props5.item;
      var isDownloadEnabled = this.state.isDownloadEnabled;
      var classification = item.classification;
      return /*#__PURE__*/React.createElement(AllowDownloadSection, {
        canChangeDownload: canChangeDownload,
        classification: classification,
        directLink: directLink,
        directLinkInputProps: directLinkInputProps,
        downloadCheckboxProps: downloadCheckboxProps,
        isDirectLinkAvailable: isDirectLinkAvailable,
        isDirectLinkUnavailableDueToDownloadSettings: isDirectLinkUnavailableDueToDownloadSettings,
        isDirectLinkUnavailableDueToAccessPolicy: isDirectLinkUnavailableDueToAccessPolicy,
        isDownloadAvailable: isDownloadAvailable,
        isDownloadEnabled: isDownloadEnabled,
        onChange: this.onAllowDownloadChange
      });
    }
  }, {
    key: "renderModalTitle",
    value: function renderModalTitle() {
      var item = this.props.item;
      var bannerPolicy = item.bannerPolicy,
          classification = item.classification;
      return /*#__PURE__*/React.createElement("span", {
        className: "bdl-SharedLinkSettingsModal-title"
      }, /*#__PURE__*/React.createElement(FormattedMessage, messages.modalTitle), /*#__PURE__*/React.createElement(Classification, {
        definition: bannerPolicy ? bannerPolicy.body : undefined,
        messageStyle: "tooltip",
        name: classification,
        className: "bdl-SharedLinkSettingsModal-classification"
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          canChangeDownload = _this$props6.canChangeDownload,
          canChangeExpiration = _this$props6.canChangeExpiration,
          canChangePassword = _this$props6.canChangePassword,
          canChangeVanityName = _this$props6.canChangeVanityName,
          cancelButtonProps = _this$props6.cancelButtonProps,
          isOpen = _this$props6.isOpen,
          modalProps = _this$props6.modalProps,
          onRequestClose = _this$props6.onRequestClose,
          saveButtonProps = _this$props6.saveButtonProps,
          submitting = _this$props6.submitting;
      var showInaccessibleSettingsNotice = !(canChangeDownload && canChangeExpiration && canChangePassword && canChangeVanityName);
      var disableSaveBtn = !(canChangeDownload || canChangeExpiration || canChangePassword || canChangeVanityName);
      return /*#__PURE__*/React.createElement(Modal, _extends({
        className: "shared-link-settings-modal",
        isOpen: isOpen,
        onRequestClose: submitting ? undefined : onRequestClose,
        title: this.renderModalTitle()
      }, modalProps), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.onSubmit
      }, showInaccessibleSettingsNotice && /*#__PURE__*/React.createElement(InlineNotice, {
        type: "warning"
      }, /*#__PURE__*/React.createElement(FormattedMessage, messages.inaccessibleSettingsNotice)), this.renderAccessLevelNotice(), this.renderExpirationSection(), this.renderPasswordSection(), this.renderVanityNameSection(), this.renderAllowDownloadSection(), /*#__PURE__*/React.createElement(ModalActions, null, /*#__PURE__*/React.createElement(Button, _extends({
        isDisabled: submitting,
        onClick: onRequestClose,
        type: "button"
      }, cancelButtonProps), /*#__PURE__*/React.createElement(FormattedMessage, commonMessages.cancel)), /*#__PURE__*/React.createElement(PrimaryButton, _extends({
        isDisabled: submitting || disableSaveBtn,
        isLoading: submitting
      }, saveButtonProps), /*#__PURE__*/React.createElement(FormattedMessage, commonMessages.save)))));
    }
  }]);

  return SharedLinkSettingsModal;
}(Component);

_defineProperty(SharedLinkSettingsModal, "propTypes", {
  hideVanityNameSection: PropTypes.bool,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  submitting: PropTypes.bool,
  warnOnPublic: PropTypes.bool,

  /** Function called on form submission. Format is:
   * ({
   *      expirationTimestamp: number (in milliseconds),
   *      isDownloadEnabled: true,
   *      isExpirationEnabled: true,
   *      isPasswordEnabled: true,
   *      password: string,
   *      vanityName: string,
   * }) => void
   */
  onSubmit: PropTypes.func.isRequired,
  // access level props

  /** the access level used for the item being shared */
  accessLevel: PropTypes.string,
  // Custom URL props

  /** Whether or not user has permission to change/set vanity URL for this item */
  canChangeVanityName: PropTypes.bool.isRequired,

  /** Current vanity name for the item */
  vanityName: PropTypes.string.isRequired,

  /** Server URL prefix for vanity URL preview; should be something like http://company.box.com/v/ */
  serverURL: PropTypes.string.isRequired,
  vanityNameError: PropTypes.string,
  // Password props

  /** Whether or not user has permission to enable/disable/change password */
  canChangePassword: PropTypes.bool.isRequired,

  /** Whether or not the password section is visible to user */
  isPasswordAvailable: PropTypes.bool.isRequired,

  /** Whether or not password is currently enabled */
  isPasswordEnabled: PropTypes.bool.isRequired,
  passwordError: PropTypes.string,
  // Expiration props

  /** Whether or not user has permission to enable/disable/change expiration */
  canChangeExpiration: PropTypes.bool.isRequired,

  /** Current expiration timestamp, in milliseconds */
  expirationTimestamp: PropTypes.number,
  expirationError: PropTypes.string,
  // Allow download props

  /** Whether or not the download section is visible to user */
  isDownloadAvailable: PropTypes.bool.isRequired,

  /** Whether or not user has permission to enable/disable download */
  canChangeDownload: PropTypes.bool.isRequired,

  /** Whether or not download is currently enabled */
  isDownloadEnabled: PropTypes.bool.isRequired,
  // Direct link props

  /** URL for direct link */
  directLink: PropTypes.string.isRequired,

  /** Whether or not direct link is available */
  isDirectLinkAvailable: PropTypes.bool.isRequired,

  /** Whether or not direct link is unavailable only due to download setting */
  isDirectLinkUnavailableDueToDownloadSettings: PropTypes.bool.isRequired,

  /** Whether or not direct link is unavailable only due to access policy setting */
  isDirectLinkUnavailableDueToAccessPolicy: PropTypes.bool.isRequired,
  // Classification props
  item: PropTypes.object,
  // Hooks for resin
  cancelButtonProps: PropTypes.object,
  directLinkInputProps: PropTypes.object,
  downloadCheckboxProps: PropTypes.object,
  expirationCheckboxProps: PropTypes.object,
  expirationInputProps: PropTypes.object,
  modalProps: PropTypes.object,
  passwordCheckboxProps: PropTypes.object,
  passwordInputProps: PropTypes.object,
  saveButtonProps: PropTypes.object,
  vanityNameInputProps: PropTypes.object
});

_defineProperty(SharedLinkSettingsModal, "defaultProps", {
  cancelButtonProps: {},
  modalProps: {},
  saveButtonProps: {}
});

export default SharedLinkSettingsModal;
//# sourceMappingURL=SharedLinkSettingsModal.js.map