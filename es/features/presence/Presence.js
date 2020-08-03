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
import { FormattedMessage, FormattedRelative } from 'react-intl';
import classnames from 'classnames';
import { Flyout, Overlay } from '../../components/flyout';
import Tooltip from '../../components/tooltip'; // GROWTH-382

import Button from '../../components/button';
import { ARROW_DOWN, ENTER, SPACE } from '../../common/keyboard-events';
import PresenceDropdown from './PresenceDropdown';
import PresenceAvatar from './PresenceAvatar';
import { determineInteractionMessage } from './utils/presenceUtils';
import { collaboratorsPropType, flyoutPositionPropType } from './propTypes'; // GROWTH-382

import { GROWTH_382_EXPERIMENT_BUCKET, GROWTH_382_AUTOFLY_CLASS, GROWTH_382_AUTOFLY_CLASS_FIRST_LOAD } from './constants';
import messages from './messages';
import './Presence.scss';

var Presence = /*#__PURE__*/function (_Component) {
  _inherits(Presence, _Component);

  var _super = _createSuper(Presence);

  function Presence() {
    var _this;

    _classCallCheck(this, Presence);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeTooltip: null,
      isDropdownActive: false,
      showActivityPrompt: Boolean(_this.props.collaborators.length && _this.props.onClickViewCollaborators && _this.props.experimentBucket === GROWTH_382_EXPERIMENT_BUCKET)
    });

    _defineProperty(_assertThisInitialized(_this), "saveRefToContainer", function (el) {
      _this.presenceContainerEl = el;
    });

    _defineProperty(_assertThisInitialized(_this), "_showTooltip", function (id) {
      var onAvatarMouseEnter = _this.props.onAvatarMouseEnter;

      _this.setState({
        activeTooltip: id
      });

      if (onAvatarMouseEnter) {
        onAvatarMouseEnter(id);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_hideTooltip", function () {
      var onAvatarMouseLeave = _this.props.onAvatarMouseLeave;

      _this.setState({
        activeTooltip: null
      });

      if (onAvatarMouseLeave) {
        onAvatarMouseLeave();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_handleOverlayOpen", function (event) {
      var onFlyoutOpen = _this.props.onFlyoutOpen;

      _this.setState({
        isDropdownActive: true
      });

      if (onFlyoutOpen) {
        onFlyoutOpen(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_handleOverlayClose", function (event) {
      var onFlyoutClose = _this.props.onFlyoutClose;

      _this.setState({
        isDropdownActive: false
      });

      if (onFlyoutClose) {
        onFlyoutClose(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "stopPropagationAndPreventDefault", function (event) {
      event.stopPropagation();
      event.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "openDropDown", function () {
      if (_this.presenceContainerEl) {
        _this.presenceContainerEl.click();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      switch (event.key) {
        case ARROW_DOWN:
        case ENTER:
        case SPACE:
          _this.openDropDown();

          _this.stopPropagationAndPreventDefault(event);

          break;

        default:
          break;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_renderTimestampMessage", function (interactedAt, interactionType, isActive) {
      var lastActionMessage = determineInteractionMessage(interactionType);

      if (lastActionMessage) {
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
          className: "presence-avatar-tooltip-event"
        }, isActive ? /*#__PURE__*/React.createElement(FormattedMessage, messages.activeNowText) : /*#__PURE__*/React.createElement(FormattedMessage, _extends({}, lastActionMessage, {
          values: {
            timeAgo: /*#__PURE__*/React.createElement(FormattedRelative, {
              value: interactedAt
            })
          }
        }))));
      }

      return null;
    });

    _defineProperty(_assertThisInitialized(_this), "_renderAvatarTooltip", function (name, interactedAt, interactionType, isActive) {
      return /*#__PURE__*/React.createElement("div", {
        className: "presence-avatar-tooltip-container"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
        className: "presence-avatar-tooltip-name"
      }, name)), _this._renderTimestampMessage(interactedAt, interactionType, isActive));
    });

    _defineProperty(_assertThisInitialized(_this), "_showRecentsFlyout", function (event) {
      var onClickViewCollaborators = _this.props.onClickViewCollaborators;
      onClickViewCollaborators();

      _this.stopPropagationAndPreventDefault(event);

      _this.setState({
        showActivityPrompt: false
      });
    });

    return _this;
  }

  _createClass(Presence, [{
    key: "render",
    value: function render() {
      var _classnames,
          _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          collaborators = _this$props.collaborators,
          maxDisplayedAvatars = _this$props.maxDisplayedAvatars,
          maxAdditionalCollaboratorsNum = _this$props.maxAdditionalCollaboratorsNum,
          getLinkCallback = _this$props.getLinkCallback,
          inviteCallback = _this$props.inviteCallback,
          onFlyoutScroll = _this$props.onFlyoutScroll,
          avatarAttributes = _this$props.avatarAttributes,
          containerAttributes = _this$props.containerAttributes,
          flyoutPosition = _this$props.flyoutPosition,
          constrainToScrollParent = _this$props.constrainToScrollParent,
          constrainToWindow = _this$props.constrainToWindow,
          closeOnWindowBlur = _this$props.closeOnWindowBlur;
      var _this$state = this.state,
          activeTooltip = _this$state.activeTooltip,
          isDropdownActive = _this$state.isDropdownActive;
      var presenceCountClassName = classnames('presence-avatar', 'avatar', 'presence-count', {
        'dropdown-active': isDropdownActive
      }); // GROWTH-382

      var _this$props2 = this.props,
          experimentBucket = _this$props2.experimentBucket,
          onAccessStatsRequested = _this$props2.onAccessStatsRequested;
      var showActivityPrompt = this.state.showActivityPrompt;
      var requestAccessStats = null;

      if (!showActivityPrompt && experimentBucket === GROWTH_382_EXPERIMENT_BUCKET) {
        requestAccessStats =
        /*#__PURE__*/
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        React.createElement("a", {
          className: "presence-dropdown-request-stats",
          href: "#",
          onClick: onAccessStatsRequested
        }, /*#__PURE__*/React.createElement(FormattedMessage, messages.previewPresenceFlyoutAccessStatsLink));
      }

      var overlayClassNames = classnames('presence-dropdown-container', (_classnames = {}, _defineProperty(_classnames, GROWTH_382_AUTOFLY_CLASS, experimentBucket && !showActivityPrompt), _defineProperty(_classnames, GROWTH_382_AUTOFLY_CLASS_FIRST_LOAD, experimentBucket && showActivityPrompt), _classnames));
      var overlayContent = showActivityPrompt ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormattedMessage, messages.previewPresenceFlyoutCopy), /*#__PURE__*/React.createElement(Button, {
        className: "btn-primary",
        onClick: this._showRecentsFlyout
      }, /*#__PURE__*/React.createElement(FormattedMessage, messages.previewPresenceFlyoutActivityCTA))) : /*#__PURE__*/React.createElement(PresenceDropdown, {
        className: "presence-dropdown",
        collaborators: collaborators,
        experimentBucket: experimentBucket,
        getLinkCallback: getLinkCallback,
        inviteCallback: inviteCallback,
        onScroll: onFlyoutScroll
      });
      return /*#__PURE__*/React.createElement(Flyout, {
        className: "presence ".concat(className),
        closeOnWindowBlur: closeOnWindowBlur,
        constrainToScrollParent: constrainToScrollParent,
        constrainToWindow: constrainToWindow,
        isVisibleByDefault: showActivityPrompt,
        onClose: this._handleOverlayClose,
        onOpen: this._handleOverlayOpen,
        position: flyoutPosition
      }, /*#__PURE__*/React.createElement("div", _extends({
        ref: this.saveRefToContainer,
        className: "presence-avatar-container",
        onKeyDown: this.handleKeyDown
      }, containerAttributes), collaborators.slice(0, maxDisplayedAvatars).map(function (collaborator) {
        var id = collaborator.id,
            avatarUrl = collaborator.avatarUrl,
            name = collaborator.name,
            isActive = collaborator.isActive,
            interactedAt = collaborator.interactedAt,
            interactionType = collaborator.interactionType;
        return /*#__PURE__*/React.createElement(Tooltip, {
          key: id,
          isShown: !isDropdownActive && activeTooltip === id,
          position: "bottom-center",
          text: _this2._renderAvatarTooltip(name, interactedAt, interactionType, isActive)
        }, /*#__PURE__*/React.createElement(PresenceAvatar, _extends({
          avatarUrl: avatarUrl,
          id: id,
          isActive: isActive,
          name: name,
          onBlur: _this2._hideTooltip,
          onFocus: _this2._showTooltip.bind(_this2, id),
          onMouseEnter: _this2._showTooltip.bind(_this2, id),
          onMouseLeave: _this2._hideTooltip
        }, avatarAttributes)));
      }), collaborators.length > maxDisplayedAvatars &&
      /*#__PURE__*/
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      React.createElement("div", _extends({
        className: presenceCountClassName,
        tabIndex: "0"
      }, avatarAttributes), collaborators.length - maxDisplayedAvatars > maxAdditionalCollaboratorsNum ? "".concat(maxAdditionalCollaboratorsNum, "+") : "+".concat(collaborators.length - maxDisplayedAvatars))), /*#__PURE__*/React.createElement(Overlay, {
        className: overlayClassNames,
        shouldDefaultFocus: false
      }, overlayContent, requestAccessStats));
    }
  }]);

  return Presence;
}(Component);

_defineProperty(Presence, "propTypes", {
  /** Addtional attributes for avatar container */
  avatarAttributes: PropTypes.object,
  className: PropTypes.string,
  collaborators: PropTypes.arrayOf(collaboratorsPropType).isRequired,

  /** Addtional attributes for presence container */
  containerAttributes: PropTypes.object,

  /** Get Link callback */
  getLinkCallback: PropTypes.func,

  /** Invite button callback */
  inviteCallback: PropTypes.func,

  /** Maximum number of avatars to display before showing a +{n} avatar */
  maxDisplayedAvatars: PropTypes.number,

  /** Maximum number of collaborators before displaying a {maxAdditionalCollaboratorsNum}+ avatar */
  maxAdditionalCollaboratorsNum: PropTypes.number,

  /** Callback funtion for avatar mouseEnter, argument: id of user */
  onAvatarMouseEnter: PropTypes.func,

  /** Callback function for avatar mouseLeave */
  onAvatarMouseLeave: PropTypes.func,

  /** Callback funtion for Flyout events, argument: SyntheticEvent */
  onFlyoutClose: PropTypes.func,
  onFlyoutOpen: PropTypes.func,
  onFlyoutScroll: PropTypes.func,

  /** GROWTH-382 bucketing */
  experimentBucket: PropTypes.string,

  /** GROWTH-382 broadcast that the user wants to view stats from the flyout */
  onAccessStatsRequested: PropTypes.func,

  /** GROWTH-382 log that the user wants to view collaborators from the flyout */
  onClickViewCollaborators: PropTypes.func,

  /** Option to change the orientation of the dropdown. MUST be: bottom-right, bottom-left, bottom-center etc. or in this specific format */
  flyoutPosition: flyoutPositionPropType,

  /** Sets the tether constraint to scrollParent for the flyout */
  constrainToScrollParent: PropTypes.bool,

  /** Sets the tether constraint to window for the flyout */
  constrainToWindow: PropTypes.bool,

  /** Closes the flyout when window loses focus */
  closeOnWindowBlur: PropTypes.bool
});

_defineProperty(Presence, "defaultProps", {
  className: '',
  maxDisplayedAvatars: 3,
  maxAdditionalCollaboratorsNum: 99,
  experimentBucket: null,
  flyoutPosition: 'bottom-left',
  constrainToScrollParent: true,
  constrainToWindow: false,
  closeOnWindowBlur: false
});

export default Presence;
//# sourceMappingURL=Presence.js.map