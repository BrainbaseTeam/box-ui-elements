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

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import Button from '../../components/button';
import messages from './messages';
import PresenceAvatarList from './PresenceAvatarList';
import PresenceCollaboratorsList from './PresenceCollaboratorsList';
import { ARROW_DOWN, ENTER, SPACE } from '../../common/keyboard-events';
import { collaboratorsPropType, flyoutPositionPropType } from './propTypes';
import { Flyout, Overlay } from '../../components/flyout';
import { GROWTH_382_EXPERIMENT_BUCKET, GROWTH_382_AUTOFLY_CLASS, GROWTH_382_AUTOFLY_CLASS_FIRST_LOAD } from './constants';
import './Presence.scss';

var Presence =
/*#__PURE__*/
function (_Component) {
  _inherits(Presence, _Component);

  function Presence() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Presence);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Presence)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isDropdownActive: false,
      showActivityPrompt: Boolean(_this.props.collaborators.length && _this.props.onClickViewCollaborators && _this.props.experimentBucket === GROWTH_382_EXPERIMENT_BUCKET)
    });

    _defineProperty(_assertThisInitialized(_this), "saveRefToContainer", function (el) {
      _this.presenceContainerEl = el;
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
      var _classNames;

      var _this$props = this.props,
          avatarAttributes = _this$props.avatarAttributes,
          className = _this$props.className,
          closeOnWindowBlur = _this$props.closeOnWindowBlur,
          collaborators = _this$props.collaborators,
          constrainToScrollParent = _this$props.constrainToScrollParent,
          constrainToWindow = _this$props.constrainToWindow,
          containerAttributes = _this$props.containerAttributes,
          flyoutPosition = _this$props.flyoutPosition,
          getLinkCallback = _this$props.getLinkCallback,
          inviteCallback = _this$props.inviteCallback,
          maxAdditionalCollaboratorsNum = _this$props.maxAdditionalCollaboratorsNum,
          maxDisplayedAvatars = _this$props.maxDisplayedAvatars,
          onAvatarMouseEnter = _this$props.onAvatarMouseEnter,
          onAvatarMouseLeave = _this$props.onAvatarMouseLeave,
          onFlyoutScroll = _this$props.onFlyoutScroll;
      var isDropdownActive = this.state.isDropdownActive; // GROWTH-382

      var _this$props2 = this.props,
          experimentBucket = _this$props2.experimentBucket,
          onAccessStatsRequested = _this$props2.onAccessStatsRequested;
      var showActivityPrompt = this.state.showActivityPrompt;
      var requestAccessStats = null;

      if (!showActivityPrompt && experimentBucket === GROWTH_382_EXPERIMENT_BUCKET) {
        requestAccessStats = // eslint-disable-next-line jsx-a11y/anchor-is-valid
        React.createElement("a", {
          className: "presence-overlay-request-stats",
          href: "#",
          onClick: onAccessStatsRequested
        }, React.createElement(FormattedMessage, messages.previewPresenceFlyoutAccessStatsLink));
      }

      var overlayClassNames = classNames('presence-overlay', (_classNames = {}, _defineProperty(_classNames, GROWTH_382_AUTOFLY_CLASS, experimentBucket && !showActivityPrompt), _defineProperty(_classNames, GROWTH_382_AUTOFLY_CLASS_FIRST_LOAD, experimentBucket && showActivityPrompt), _classNames));
      var overlayContent = showActivityPrompt ? React.createElement(React.Fragment, null, React.createElement(FormattedMessage, messages.previewPresenceFlyoutCopy), React.createElement(Button, {
        className: "btn-primary",
        onClick: this._showRecentsFlyout
      }, React.createElement(FormattedMessage, messages.previewPresenceFlyoutActivityCTA))) : React.createElement(PresenceCollaboratorsList, {
        collaborators: collaborators,
        experimentBucket: experimentBucket,
        getLinkCallback: getLinkCallback,
        inviteCallback: inviteCallback,
        onScroll: onFlyoutScroll
      });
      return React.createElement(Flyout, {
        className: "presence ".concat(className),
        closeOnWindowBlur: closeOnWindowBlur,
        constrainToScrollParent: constrainToScrollParent,
        constrainToWindow: constrainToWindow,
        isVisibleByDefault: showActivityPrompt,
        onClose: this._handleOverlayClose,
        onOpen: this._handleOverlayOpen,
        position: flyoutPosition
      }, React.createElement(PresenceAvatarList, _extends({
        ref: this.saveRefToContainer,
        avatarAttributes: avatarAttributes,
        className: classNames('presence-avatar-container', {
          'dropdown-active': isDropdownActive
        }),
        collaborators: collaborators,
        hideTooltips: isDropdownActive,
        maxAdditionalCollaborators: maxAdditionalCollaboratorsNum,
        maxDisplayedAvatars: maxDisplayedAvatars,
        onAvatarMouseEnter: onAvatarMouseEnter,
        onAvatarMouseLeave: onAvatarMouseLeave,
        onKeyDown: this.handleKeyDown
      }, containerAttributes)), React.createElement(Overlay, {
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
  closeOnWindowBlur: PropTypes.bool,
  intl: PropTypes.any
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

export { Presence as PresenceComponent };
export default injectIntl(Presence);
//# sourceMappingURL=Presence.js.map