'no babel-plugin-flow-react-proptypes'; // turn off this plugin because it breaks the IntlShape flow type

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

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import PlainButton from '../../components/plain-button';
import Button from '../../components/button';
import TextInputWithCopyButton from '../../components/text-input-with-copy-button';
import Toggle from '../../components/toggle/Toggle';
import Tooltip from '../../components/tooltip';
import { convertToMs } from '../../utils/datetime';
import IconMail from '../../icons/general/IconMail';
import IconClock from '../../icons/general/IconClock';
import IconGlobe from '../../icons/general/IconGlobe';
import { bdlWatermelonRed } from '../../styles/variables';
import { isBoxNote } from '../../utils/file';
import convertToBoxItem from './utils/item';
import SharedLinkAccessMenu from './SharedLinkAccessMenu';
import SharedLinkPermissionMenu from './SharedLinkPermissionMenu';
import messages from './messages';
import { PEOPLE_IN_ITEM, ANYONE_WITH_LINK, CAN_VIEW_DOWNLOAD, CAN_VIEW_ONLY } from './constants';

var SharedLinkSection = /*#__PURE__*/function (_React$Component) {
  _inherits(SharedLinkSection, _React$Component);

  var _super = _createSuper(SharedLinkSection);

  function SharedLinkSection() {
    var _this;

    _classCallCheck(this, SharedLinkSection);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "canAddSharedLink", function (isSharedLinkEnabled, canAddLink) {
      return !isSharedLinkEnabled && canAddLink;
    });

    _defineProperty(_assertThisInitialized(_this), "canRemoveSharedLink", function (isSharedLinkEnabled, canRemoveLink) {
      return isSharedLinkEnabled && canRemoveLink;
    });

    return _this;
  }

  _createClass(SharedLinkSection, [{
    key: "renderSharedLink",
    value: function renderSharedLink() {
      var _this$props = this.props,
          autofocusSharedLink = _this$props.autofocusSharedLink,
          changeSharedLinkAccessLevel = _this$props.changeSharedLinkAccessLevel,
          changeSharedLinkPermissionLevel = _this$props.changeSharedLinkPermissionLevel,
          item = _this$props.item,
          itemType = _this$props.itemType,
          _onDismissTooltip = _this$props.onDismissTooltip,
          onEmailSharedLinkClick = _this$props.onEmailSharedLinkClick,
          sharedLink = _this$props.sharedLink,
          submitting = _this$props.submitting,
          trackingProps = _this$props.trackingProps,
          triggerCopyOnLoad = _this$props.triggerCopyOnLoad,
          tooltips = _this$props.tooltips;
      var accessLevel = sharedLink.accessLevel,
          accessLevelsDisabledReason = sharedLink.accessLevelsDisabledReason,
          allowedAccessLevels = sharedLink.allowedAccessLevels,
          canChangeAccessLevel = sharedLink.canChangeAccessLevel,
          enterpriseName = sharedLink.enterpriseName,
          isEditAllowed = sharedLink.isEditAllowed,
          isDownloadSettingAvailable = sharedLink.isDownloadSettingAvailable,
          permissionLevel = sharedLink.permissionLevel,
          url = sharedLink.url;
      var copyButtonProps = trackingProps.copyButtonProps,
          onChangeSharedLinkAccessLevel = trackingProps.onChangeSharedLinkAccessLevel,
          onChangeSharedLinkPermissionLevel = trackingProps.onChangeSharedLinkPermissionLevel,
          onSharedLinkAccessMenuOpen = trackingProps.onSharedLinkAccessMenuOpen,
          onSharedLinkCopy = trackingProps.onSharedLinkCopy,
          sendSharedLinkButtonProps = trackingProps.sendSharedLinkButtonProps,
          sharedLinkAccessMenuButtonProps = trackingProps.sharedLinkAccessMenuButtonProps,
          sharedLinkPermissionsMenuButtonProps = trackingProps.sharedLinkPermissionsMenuButtonProps;
      var isEditableBoxNote = isBoxNote(convertToBoxItem(item)) && isEditAllowed;
      var allowedPermissionLevels = [CAN_VIEW_DOWNLOAD, CAN_VIEW_ONLY];

      if (!canChangeAccessLevel) {
        // remove all but current level
        allowedPermissionLevels = allowedPermissionLevels.filter(function (level) {
          return level === permissionLevel;
        });
      } // if we cannot set the download value, we remove this option from the dropdown


      if (!isDownloadSettingAvailable) {
        allowedPermissionLevels = allowedPermissionLevels.filter(function (level) {
          return level !== CAN_VIEW_DOWNLOAD;
        });
      }

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "shared-link-field-row"
      }, /*#__PURE__*/React.createElement(Tooltip, {
        className: "usm-ftux-tooltip",
        isShown: !!tooltips['shared-link-copy-button'],
        onDismiss: function onDismiss() {
          return _onDismissTooltip('shared-link-copy-button');
        },
        position: "middle-right",
        showCloseButton: true,
        text: tooltips['shared-link-copy-button'],
        theme: "callout"
      }, /*#__PURE__*/React.createElement(TextInputWithCopyButton, {
        autofocus: autofocusSharedLink,
        buttonProps: copyButtonProps,
        className: "shared-link-field-container",
        disabled: submitting,
        label: "",
        onCopySuccess: onSharedLinkCopy,
        triggerCopyOnLoad: triggerCopyOnLoad,
        type: "url",
        value: url
      })), /*#__PURE__*/React.createElement(Tooltip, {
        position: "top-left",
        text: /*#__PURE__*/React.createElement(FormattedMessage, messages.sendSharedLink)
      }, /*#__PURE__*/React.createElement(Button, _extends({
        className: "email-shared-link-btn",
        isDisabled: submitting,
        onClick: onEmailSharedLinkClick,
        type: "button"
      }, sendSharedLinkButtonProps), /*#__PURE__*/React.createElement(IconMail, null)))), /*#__PURE__*/React.createElement("div", {
        className: "shared-link-access-row"
      }, /*#__PURE__*/React.createElement(SharedLinkAccessMenu, {
        accessLevel: accessLevel,
        accessLevelsDisabledReason: accessLevelsDisabledReason,
        allowedAccessLevels: allowedAccessLevels,
        changeAccessLevel: changeSharedLinkAccessLevel,
        enterpriseName: enterpriseName,
        itemType: itemType,
        onDismissTooltip: function onDismissTooltip() {
          return _onDismissTooltip('shared-link-access-menu');
        },
        tooltipContent: tooltips['shared-link-access-menu'] || null,
        submitting: submitting,
        trackingProps: {
          onChangeSharedLinkAccessLevel: onChangeSharedLinkAccessLevel,
          onSharedLinkAccessMenuOpen: onSharedLinkAccessMenuOpen,
          sharedLinkAccessMenuButtonProps: sharedLinkAccessMenuButtonProps
        }
      }), !isEditableBoxNote && accessLevel !== PEOPLE_IN_ITEM && /*#__PURE__*/React.createElement(SharedLinkPermissionMenu, {
        allowedPermissionLevels: allowedPermissionLevels,
        canChangePermissionLevel: canChangeAccessLevel,
        changePermissionLevel: changeSharedLinkPermissionLevel,
        permissionLevel: permissionLevel,
        submitting: submitting,
        trackingProps: {
          onChangeSharedLinkPermissionLevel: onChangeSharedLinkPermissionLevel,
          sharedLinkPermissionsMenuButtonProps: sharedLinkPermissionsMenuButtonProps
        }
      }), isEditableBoxNote && /*#__PURE__*/React.createElement(Tooltip, {
        text: /*#__PURE__*/React.createElement(FormattedMessage, messages.sharedLinkPermissionsEditTooltip)
      }, /*#__PURE__*/React.createElement(PlainButton, {
        isDisabled: true,
        className: "can-edit-btn"
      }, /*#__PURE__*/React.createElement(FormattedMessage, messages.sharedLinkPermissionsEdit)))), accessLevel === ANYONE_WITH_LINK && /*#__PURE__*/React.createElement("div", {
        className: "security-indicator-note"
      }, /*#__PURE__*/React.createElement("span", {
        className: "security-indicator-icon-globe"
      }, /*#__PURE__*/React.createElement(IconGlobe, {
        height: 12,
        width: 12
      })), /*#__PURE__*/React.createElement(FormattedMessage, messages.sharedLinkPubliclyAvailable)));
    }
  }, {
    key: "renderSharedLinkSettingsLink",
    value: function renderSharedLinkSettingsLink() {
      var _this$props2 = this.props,
          intl = _this$props2.intl,
          onDismissTooltip = _this$props2.onDismissTooltip,
          onSettingsClick = _this$props2.onSettingsClick,
          showSharedLinkSettingsCallout = _this$props2.showSharedLinkSettingsCallout,
          trackingProps = _this$props2.trackingProps,
          tooltips = _this$props2.tooltips;
      var sharedLinkSettingsButtonProps = trackingProps.sharedLinkSettingsButtonProps;
      return /*#__PURE__*/React.createElement("div", {
        className: "shared-link-settings-btn-container"
      }, /*#__PURE__*/React.createElement(Tooltip, {
        className: "usm-ftux-tooltip",
        isShown: !!tooltips['shared-link-settings'] || showSharedLinkSettingsCallout,
        onDismiss: function onDismiss() {
          return onDismissTooltip('shared-link-settings');
        },
        position: "middle-right",
        showCloseButton: true,
        text: tooltips['shared-link-settings'] || /*#__PURE__*/React.createElement(FormattedMessage, messages.sharedLinkSettingsCalloutText),
        theme: "callout"
      }, /*#__PURE__*/React.createElement(PlainButton, _extends({}, sharedLinkSettingsButtonProps, {
        "aria-label": intl.formatMessage(messages.settingsButtonLabel),
        className: "shared-link-settings-btn",
        onClick: onSettingsClick,
        type: "button"
      }), /*#__PURE__*/React.createElement(FormattedMessage, messages.sharedLinkSettings))));
    }
  }, {
    key: "renderToggle",
    value: function renderToggle() {
      var _this$props3 = this.props,
          item = _this$props3.item,
          onDismissTooltip = _this$props3.onDismissTooltip,
          onToggleSharedLink = _this$props3.onToggleSharedLink,
          sharedLink = _this$props3.sharedLink,
          submitting = _this$props3.submitting,
          tooltips = _this$props3.tooltips;
      var canChangeAccessLevel = sharedLink.canChangeAccessLevel,
          expirationTimestamp = sharedLink.expirationTimestamp;
      var isSharedLinkEnabled = !!sharedLink.url;
      var linkText;

      if (isSharedLinkEnabled) {
        linkText = /*#__PURE__*/React.createElement(FormattedMessage, messages.linkShareOn);

        if (expirationTimestamp && expirationTimestamp !== 0) {
          linkText = /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(FormattedMessage, messages.linkShareOn), /*#__PURE__*/React.createElement(Tooltip, {
            position: "top-center",
            text: /*#__PURE__*/React.createElement(FormattedMessage, _extends({}, messages.sharedLinkExpirationTooltip, {
              values: {
                expiration: convertToMs(expirationTimestamp)
              }
            }))
          }, /*#__PURE__*/React.createElement("span", {
            className: "shared-link-expiration-badge"
          }, /*#__PURE__*/React.createElement(IconClock, {
            color: bdlWatermelonRed
          }))));
        }
      } else {
        linkText = /*#__PURE__*/React.createElement(FormattedMessage, messages.linkShareOff);
      }

      var isToggleEnabled = (this.canAddSharedLink(isSharedLinkEnabled, item.grantedPermissions.itemShare) || this.canRemoveSharedLink(isSharedLinkEnabled, canChangeAccessLevel)) && !submitting;
      var toggleComponent = /*#__PURE__*/React.createElement("div", {
        className: "share-toggle-container"
      }, /*#__PURE__*/React.createElement(Toggle, {
        isDisabled: !isToggleEnabled,
        isOn: isSharedLinkEnabled,
        label: linkText,
        name: "toggle",
        onChange: onToggleSharedLink
      }));

      if (!submitting) {
        if (this.canAddSharedLink(isSharedLinkEnabled, item.grantedPermissions.itemShare)) {
          var sharedLinkToggleTooltip = tooltips['shared-link-toggle'];

          if (sharedLinkToggleTooltip) {
            return /*#__PURE__*/React.createElement(Tooltip, {
              className: "usm-ftux-tooltip",
              isShown: true,
              onDismiss: function onDismiss() {
                return onDismissTooltip('shared-link-toggle');
              },
              position: "middle-left",
              showCloseButton: true,
              text: sharedLinkToggleTooltip,
              theme: "callout"
            }, toggleComponent);
          }

          return /*#__PURE__*/React.createElement(Tooltip, {
            position: "top-right",
            text: /*#__PURE__*/React.createElement(FormattedMessage, messages.sharedLinkDisabledTooltipCopy)
          }, toggleComponent);
        }

        if (!this.canRemoveSharedLink(isSharedLinkEnabled, canChangeAccessLevel)) {
          return /*#__PURE__*/React.createElement(Tooltip, {
            position: "top-right",
            text: /*#__PURE__*/React.createElement(FormattedMessage, messages.removeLinkTooltip)
          }, toggleComponent);
        }
      }

      return toggleComponent;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          sharedLink = _this$props4.sharedLink,
          onSettingsClick = _this$props4.onSettingsClick;
      var isSharedLinkEnabled = !!sharedLink.url;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", {
        className: "label"
      }, /*#__PURE__*/React.createElement(FormattedMessage, messages.sharedLinkSectionLabel))), /*#__PURE__*/React.createElement("div", {
        className: "shared-link-toggle-row"
      }, this.renderToggle(), isSharedLinkEnabled && onSettingsClick && this.renderSharedLinkSettingsLink()), isSharedLinkEnabled && this.renderSharedLink());
    }
  }]);

  return SharedLinkSection;
}(React.Component);

_defineProperty(SharedLinkSection, "defaultProps", {
  trackingProps: {}
});

export default SharedLinkSection;
//# sourceMappingURL=SharedLinkSection.js.map