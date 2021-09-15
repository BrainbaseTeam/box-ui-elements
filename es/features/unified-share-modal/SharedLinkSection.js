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
import PlainButton from '../../components/plain-button';
import Button from '../../components/button';
import GuideTooltip from '../../components/guide-tooltip';
import TextInputWithCopyButton from '../../components/text-input-with-copy-button';
import Toggle from '../../components/toggle/Toggle';
import Tooltip from '../../components/tooltip';
import { convertToMs } from '../../utils/datetime';
import IconMail from '../../icons/general/IconMail';
import IconClock from '../../icons/general/IconClock';
import IconGlobe from '../../icons/general/IconGlobe';
import { bdlWatermelonRed } from '../../styles/variables';
import { isBoxNote } from '../../utils/file';
import Browser from '../../utils/Browser';
import convertToBoxItem from './utils/item';
import SharedLinkAccessMenu from './SharedLinkAccessMenu';
import SharedLinkPermissionMenu from './SharedLinkPermissionMenu';
import messages from './messages';
import { ANYONE_IN_COMPANY, ANYONE_WITH_LINK, CAN_EDIT, CAN_VIEW_DOWNLOAD, CAN_VIEW_ONLY, PEOPLE_IN_ITEM } from './constants';

var SharedLinkSection =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SharedLinkSection, _React$Component);

  function SharedLinkSection(props) {
    var _this;

    _classCallCheck(this, SharedLinkSection);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SharedLinkSection).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "canAddSharedLink", function (isSharedLinkEnabled, canAddLink) {
      return !isSharedLinkEnabled && canAddLink;
    });

    _defineProperty(_assertThisInitialized(_this), "canRemoveSharedLink", function (isSharedLinkEnabled, canRemoveLink) {
      return isSharedLinkEnabled && canRemoveLink;
    });

    _this.state = {
      isAutoCreatingSharedLink: false,
      isCopySuccessful: null,
      isPermissionElevatedToEdit: false
    };
    return _this;
  }

  _createClass(SharedLinkSection, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          sharedLink = _this$props.sharedLink,
          autoCreateSharedLink = _this$props.autoCreateSharedLink,
          addSharedLink = _this$props.addSharedLink,
          sharedLinkEditTooltipTargetingApi = _this$props.sharedLinkEditTooltipTargetingApi,
          submitting = _this$props.submitting;

      if (autoCreateSharedLink && !this.state.isAutoCreatingSharedLink && sharedLink && !sharedLink.url && !submitting && !sharedLink.isNewSharedLink) {
        this.setState({
          isAutoCreatingSharedLink: true
        });
        addSharedLink();
      } // if ESL ftux tooltip is showing on initial mount, we call onShow


      if (sharedLinkEditTooltipTargetingApi && sharedLinkEditTooltipTargetingApi.canShow) {
        var onShow = sharedLinkEditTooltipTargetingApi.onShow;
        onShow();
      }
    } // We handle didUpdate but not didMount because
    // the component initially renders with empty data
    // in order to start showing UI components.
    // When getInitialData completes in the parent we
    // rerender with correct sharedLink data and can
    // check whether to auto create a new one.
    // Note: we are assuming the 2nd render is safe
    // to start doing this check.

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      var _this$props2 = this.props,
          sharedLink = _this$props2.sharedLink,
          autoCreateSharedLink = _this$props2.autoCreateSharedLink,
          addSharedLink = _this$props2.addSharedLink,
          submitting = _this$props2.submitting,
          triggerCopyOnLoad = _this$props2.triggerCopyOnLoad,
          _this$props2$onCopyEr = _this$props2.onCopyError,
          onCopyError = _this$props2$onCopyEr === void 0 ? function () {} : _this$props2$onCopyEr,
          _this$props2$onCopySu = _this$props2.onCopySuccess,
          onCopySuccess = _this$props2$onCopySu === void 0 ? function () {} : _this$props2$onCopySu,
          _this$props2$onCopyIn = _this$props2.onCopyInit,
          onCopyInit = _this$props2$onCopyIn === void 0 ? function () {} : _this$props2$onCopyIn;
      var _this$state = this.state,
          isAutoCreatingSharedLink = _this$state.isAutoCreatingSharedLink,
          isCopySuccessful = _this$state.isCopySuccessful,
          isPermissionElevatedToEdit = _this$state.isPermissionElevatedToEdit;

      if (autoCreateSharedLink && !isAutoCreatingSharedLink && !sharedLink.url && !submitting && !sharedLink.isNewSharedLink) {
        this.setState({
          isAutoCreatingSharedLink: true
        });
        addSharedLink();
      }

      if (!prevProps.sharedLink.url && sharedLink.url) {
        this.setState({
          isAutoCreatingSharedLink: false
        });

        if (this.toggleRef) {
          this.toggleRef.focus();
        }
      }

      if (prevProps.sharedLink.permissionLevel !== '' && prevProps.sharedLink.permissionLevel !== CAN_EDIT && sharedLink.permissionLevel === CAN_EDIT) {
        this.setState({
          isPermissionElevatedToEdit: true
        });
      }

      if (isPermissionElevatedToEdit && (sharedLink.permissionLevel !== CAN_EDIT || sharedLink.accessLevel !== ANYONE_IN_COMPANY)) {
        this.setState({
          isPermissionElevatedToEdit: false
        });
      }

      if (Browser.canWriteToClipboard() && triggerCopyOnLoad && !isAutoCreatingSharedLink && sharedLink.url && isCopySuccessful === null) {
        onCopyInit();
        navigator.clipboard.writeText(sharedLink.url).then(function () {
          _this2.setState({
            isCopySuccessful: true
          });

          onCopySuccess();
        }).catch(function () {
          _this2.setState({
            isCopySuccessful: false
          });

          onCopyError();
        });
      }
    }
  }, {
    key: "renderSharedLink",
    value: function renderSharedLink() {
      var _this$props3 = this.props,
          autofocusSharedLink = _this$props3.autofocusSharedLink,
          changeSharedLinkAccessLevel = _this$props3.changeSharedLinkAccessLevel,
          changeSharedLinkPermissionLevel = _this$props3.changeSharedLinkPermissionLevel,
          config = _this$props3.config,
          isAllowEditSharedLinkForFileEnabled = _this$props3.isAllowEditSharedLinkForFileEnabled,
          item = _this$props3.item,
          itemType = _this$props3.itemType,
          intl = _this$props3.intl,
          _onDismissTooltip = _this$props3.onDismissTooltip,
          onEmailSharedLinkClick = _this$props3.onEmailSharedLinkClick,
          sharedLink = _this$props3.sharedLink,
          sharedLinkEditTagTargetingApi = _this$props3.sharedLinkEditTagTargetingApi,
          sharedLinkEditTooltipTargetingApi = _this$props3.sharedLinkEditTooltipTargetingApi,
          submitting = _this$props3.submitting,
          trackingProps = _this$props3.trackingProps,
          triggerCopyOnLoad = _this$props3.triggerCopyOnLoad,
          tooltips = _this$props3.tooltips;
      var _this$state2 = this.state,
          isCopySuccessful = _this$state2.isCopySuccessful,
          isPermissionElevatedToEdit = _this$state2.isPermissionElevatedToEdit;
      var accessLevel = sharedLink.accessLevel,
          accessLevelsDisabledReason = sharedLink.accessLevelsDisabledReason,
          allowedAccessLevels = sharedLink.allowedAccessLevels,
          canChangeAccessLevel = sharedLink.canChangeAccessLevel,
          enterpriseName = sharedLink.enterpriseName,
          isEditAllowed = sharedLink.isEditAllowed,
          isEditSettingAvailable = sharedLink.isEditSettingAvailable,
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
      var shouldTriggerCopyOnLoad = !!triggerCopyOnLoad && !!isCopySuccessful;
      /**
       * The email button should be rendered by default.
       * Only hide the button if there is a config prop that declares showEmailSharedLinkForm to be false.
       */

      var hideEmailButton = config && config.showEmailSharedLinkForm === false;
      var isEditableBoxNote = isBoxNote(convertToBoxItem(item)) && isEditAllowed;
      var allowedPermissionLevels = [CAN_EDIT, CAN_VIEW_DOWNLOAD, CAN_VIEW_ONLY];

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
      } // if the user cannot edit, we remove this option from the dropdown


      if (!isEditSettingAvailable || !isAllowEditSharedLinkForFileEnabled) {
        allowedPermissionLevels = allowedPermissionLevels.filter(function (level) {
          return level !== CAN_EDIT;
        });
      }

      return React.createElement(React.Fragment, null, React.createElement("div", {
        className: "shared-link-field-row"
      }, React.createElement(Tooltip, {
        className: "usm-ftux-tooltip",
        isShown: !!tooltips['shared-link-copy-button'],
        onDismiss: function onDismiss() {
          return _onDismissTooltip('shared-link-copy-button');
        },
        position: "middle-right",
        showCloseButton: true,
        text: tooltips['shared-link-copy-button'],
        theme: "callout"
      }, React.createElement(TextInputWithCopyButton, {
        "aria-label": intl.formatMessage(messages.sharedLinkURLLabel),
        autofocus: autofocusSharedLink,
        buttonProps: copyButtonProps,
        className: "shared-link-field-container",
        disabled: submitting,
        label: "",
        onCopySuccess: onSharedLinkCopy,
        triggerCopyOnLoad: shouldTriggerCopyOnLoad,
        type: "url",
        value: url
      })), !hideEmailButton && React.createElement(Tooltip, {
        position: "top-left",
        text: React.createElement(FormattedMessage, messages.sendSharedLink)
      }, React.createElement(Button, _extends({
        "aria-label": intl.formatMessage(messages.sendSharedLink),
        className: "email-shared-link-btn",
        isDisabled: submitting,
        onClick: onEmailSharedLinkClick,
        type: "button"
      }, sendSharedLinkButtonProps), React.createElement(IconMail, null)))), React.createElement("div", {
        className: "shared-link-access-row"
      }, React.createElement(SharedLinkAccessMenu, {
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
      }), !isEditableBoxNote && accessLevel !== PEOPLE_IN_ITEM && React.createElement(GuideTooltip, {
        isShown: allowedPermissionLevels.includes(CAN_EDIT) && (sharedLinkEditTooltipTargetingApi === null || sharedLinkEditTooltipTargetingApi === void 0 ? void 0 : sharedLinkEditTooltipTargetingApi.canShow),
        title: intl.formatMessage(messages.ftuxEditPermissionTooltipTitle),
        body: intl.formatMessage(messages.ftuxEditPermissionTooltipBody),
        onDismiss: function onDismiss() {
          if (sharedLinkEditTooltipTargetingApi) {
            var onComplete = sharedLinkEditTooltipTargetingApi.onComplete;
            onComplete();
          }
        }
      }, React.createElement(SharedLinkPermissionMenu, {
        allowedPermissionLevels: allowedPermissionLevels,
        canChangePermissionLevel: canChangeAccessLevel,
        changePermissionLevel: changeSharedLinkPermissionLevel,
        permissionLevel: permissionLevel,
        sharedLinkEditTagTargetingApi: sharedLinkEditTagTargetingApi,
        submitting: submitting,
        trackingProps: {
          onChangeSharedLinkPermissionLevel: onChangeSharedLinkPermissionLevel,
          sharedLinkPermissionsMenuButtonProps: sharedLinkPermissionsMenuButtonProps
        }
      })), isEditableBoxNote && React.createElement(Tooltip, {
        text: React.createElement(FormattedMessage, messages.sharedLinkPermissionsEditTooltip)
      }, React.createElement(PlainButton, {
        isDisabled: true,
        className: "can-edit-btn"
      }, React.createElement(FormattedMessage, messages.sharedLinkPermissionsEdit)))), accessLevel === ANYONE_WITH_LINK && React.createElement("div", {
        className: "security-indicator-note"
      }, React.createElement("span", {
        className: "security-indicator-icon-globe"
      }, React.createElement(IconGlobe, {
        height: 12,
        width: 12
      })), permissionLevel === CAN_EDIT ? React.createElement(FormattedMessage, _extends({
        "data-testid": "shared-link-editable-publicly-available-message"
      }, messages.sharedLinkEditablePubliclyAvailable)) : React.createElement(FormattedMessage, _extends({
        "data-testid": "shared-link-publicly-available-message"
      }, messages.sharedLinkPubliclyAvailable))), accessLevel === ANYONE_IN_COMPANY && isPermissionElevatedToEdit && React.createElement("div", {
        className: "security-indicator-note"
      }, React.createElement("span", {
        className: "security-indicator-icon-globe"
      }, React.createElement(IconGlobe, {
        height: 12,
        width: 12
      })), React.createElement(FormattedMessage, _extends({
        "data-testid": "shared-link-elevated-editable-company-available-message"
      }, messages.sharedLinkElevatedEditableCompanyAvailable))));
    }
  }, {
    key: "renderSharedLinkSettingsLink",
    value: function renderSharedLinkSettingsLink() {
      var _this$props4 = this.props,
          intl = _this$props4.intl,
          onDismissTooltip = _this$props4.onDismissTooltip,
          onSettingsClick = _this$props4.onSettingsClick,
          showSharedLinkSettingsCallout = _this$props4.showSharedLinkSettingsCallout,
          trackingProps = _this$props4.trackingProps,
          tooltips = _this$props4.tooltips;
      var sharedLinkSettingsButtonProps = trackingProps.sharedLinkSettingsButtonProps;
      return React.createElement("div", {
        className: "shared-link-settings-btn-container"
      }, React.createElement(Tooltip, {
        className: "usm-ftux-tooltip",
        isShown: !!tooltips['shared-link-settings'] || showSharedLinkSettingsCallout,
        onDismiss: function onDismiss() {
          return onDismissTooltip('shared-link-settings');
        },
        position: "middle-right",
        showCloseButton: true,
        text: tooltips['shared-link-settings'] || React.createElement(FormattedMessage, messages.sharedLinkSettingsCalloutText),
        theme: "callout"
      }, React.createElement(PlainButton, _extends({}, sharedLinkSettingsButtonProps, {
        "aria-label": intl.formatMessage(messages.settingsButtonLabel),
        className: "shared-link-settings-btn",
        onClick: onSettingsClick,
        type: "button"
      }), React.createElement(FormattedMessage, messages.sharedLinkSettings))));
    }
  }, {
    key: "renderToggle",
    value: function renderToggle() {
      var _this3 = this;

      var _this$props5 = this.props,
          item = _this$props5.item,
          onDismissTooltip = _this$props5.onDismissTooltip,
          onToggleSharedLink = _this$props5.onToggleSharedLink,
          sharedLink = _this$props5.sharedLink,
          submitting = _this$props5.submitting,
          tooltips = _this$props5.tooltips;
      var canChangeAccessLevel = sharedLink.canChangeAccessLevel,
          expirationTimestamp = sharedLink.expirationTimestamp,
          url = sharedLink.url;
      var isSharedLinkEnabled = !!url;
      var canAddSharedLink = this.canAddSharedLink(isSharedLinkEnabled, item.grantedPermissions.itemShare);
      var canRemoveSharedLink = this.canRemoveSharedLink(isSharedLinkEnabled, canChangeAccessLevel);
      var isToggleEnabled = (canAddSharedLink || canRemoveSharedLink) && !submitting;
      var linkText;

      if (isSharedLinkEnabled) {
        linkText = React.createElement(FormattedMessage, messages.linkShareOn);

        if (expirationTimestamp && expirationTimestamp !== 0) {
          linkText = React.createElement("span", null, React.createElement(FormattedMessage, messages.linkShareOn), React.createElement(Tooltip, {
            position: "top-center",
            text: React.createElement(FormattedMessage, _extends({}, messages.sharedLinkExpirationTooltip, {
              values: {
                expiration: convertToMs(expirationTimestamp)
              }
            }))
          }, React.createElement("span", {
            className: "shared-link-expiration-badge"
          }, React.createElement(IconClock, {
            color: bdlWatermelonRed
          }))));
        }
      } else {
        linkText = React.createElement(FormattedMessage, messages.linkShareOff);
      }

      var toggleComponent = React.createElement("div", {
        className: "share-toggle-container"
      }, React.createElement(Toggle, {
        isDisabled: !isToggleEnabled,
        isOn: isSharedLinkEnabled,
        label: linkText,
        name: "toggle",
        onChange: onToggleSharedLink,
        ref: function ref(_ref) {
          _this3.toggleRef = _ref;
        }
      }));

      if (!submitting) {
        if (canAddSharedLink) {
          var sharedLinkToggleTooltip = tooltips['shared-link-toggle'];

          if (sharedLinkToggleTooltip) {
            return React.createElement(Tooltip, {
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

          return React.createElement(Tooltip, {
            position: "top-right",
            text: React.createElement(FormattedMessage, messages.sharedLinkDisabledTooltipCopy)
          }, toggleComponent);
        }

        if (!isToggleEnabled) {
          var tooltipDisabledMessage = isSharedLinkEnabled ? messages.removeLinkTooltip : messages.disabledCreateLinkTooltip;
          return React.createElement(Tooltip, {
            className: "usm-disabled-message-tooltip",
            position: "top-right",
            text: React.createElement(FormattedMessage, tooltipDisabledMessage)
          }, toggleComponent);
        }
      }

      return toggleComponent;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          sharedLink = _this$props6.sharedLink,
          onSettingsClick = _this$props6.onSettingsClick;
      var isSharedLinkEnabled = !!sharedLink.url;
      return React.createElement("div", {
        className: "be"
      }, React.createElement("hr", {
        className: "bdl-SharedLinkSection-separator"
      }), React.createElement("label", null, React.createElement("span", {
        className: "label bdl-Label"
      }, React.createElement(FormattedMessage, messages.sharedLinkSectionLabel))), React.createElement("div", {
        className: "shared-link-toggle-row"
      }, this.renderToggle(), isSharedLinkEnabled && onSettingsClick && this.renderSharedLinkSettingsLink()), isSharedLinkEnabled && this.renderSharedLink());
    }
  }]);

  return SharedLinkSection;
}(React.Component);

_defineProperty(SharedLinkSection, "defaultProps", {
  trackingProps: {},
  autoCreateSharedLink: false
});

export default SharedLinkSection;
//# sourceMappingURL=SharedLinkSection.js.map