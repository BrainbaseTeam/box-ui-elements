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
import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import { FormattedMessage, injectIntl } from 'react-intl';
import Button from '../../components/button';
import Link from '../../components/link/LinkBase';
import messages from './messages';
import PresenceAvatar from './PresenceAvatar';
import { determineInteractionMessage } from './utils/presenceUtils';
import './PresenceCollaboratorsList.scss';

var PresenceCollaboratorsList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PresenceCollaboratorsList, _React$Component);

  function PresenceCollaboratorsList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PresenceCollaboratorsList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PresenceCollaboratorsList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isScrollableAbove: false,
      isScrollableBelow: false
    });

    _defineProperty(_assertThisInitialized(_this), "calculateOverflow", function (elem) {
      var isScrollableAbove = elem.scrollTop > 0;
      var isScrollableBelow = elem.scrollTop < elem.scrollHeight - elem.clientHeight;
      return {
        isScrollableAbove: isScrollableAbove,
        isScrollableBelow: isScrollableBelow
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function (event) {
      var onScroll = _this.props.onScroll;

      if (_this.elDropdownList) {
        _this.setState(_this.calculateOverflow(_this.elDropdownList));

        if (onScroll) {
          onScroll(event);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "throttledHandleScroll", throttle(_this.handleScroll, 50, {
      leading: true,
      trailing: true
    }));

    _defineProperty(_assertThisInitialized(_this), "renderTitle", function () {
      return React.createElement("div", {
        className: "bdl-PresenceCollaboratorsList-title"
      }, React.createElement(FormattedMessage, messages.recentActivity));
    });

    _defineProperty(_assertThisInitialized(_this), "renderTimestampMessage", function (interactedAt, interactionType) {
      var lastActionMessage = determineInteractionMessage(interactionType, interactedAt);
      var intl = _this.props.intl;
      var timeAgo = intl.formatRelativeTime ? intl.formatRelativeTime(interactedAt - Date.now()) : intl.formatRelative(interactedAt);

      if (lastActionMessage) {
        return React.createElement(FormattedMessage, _extends({}, lastActionMessage, {
          values: {
            timeAgo: timeAgo
          }
        }));
      }

      return null;
    });

    _defineProperty(_assertThisInitialized(_this), "renderCollabList", function () {
      var collaborators = _this.props.collaborators;
      return collaborators.map(function (collaborator) {
        var avatarUrl = collaborator.avatarUrl,
            id = collaborator.id,
            isActive = collaborator.isActive,
            interactedAt = collaborator.interactedAt,
            interactionType = collaborator.interactionType,
            name = collaborator.name,
            profileUrl = collaborator.profileUrl;
        return React.createElement("div", {
          key: id,
          className: "bdl-PresenceCollaboratorsList-item"
        }, React.createElement(PresenceAvatar, {
          avatarUrl: avatarUrl,
          id: id,
          isActive: isActive,
          isDropDownAvatar: true,
          name: name
        }), React.createElement("div", {
          className: "bdl-PresenceCollaboratorsList-item-info-container"
        }, React.createElement("div", {
          className: "bdl-PresenceCollaboratorsList-item-info-name"
        }, isEmpty(profileUrl) ? React.createElement("span", null, name) : React.createElement(Link, {
          href: profileUrl,
          target: "_blank"
        }, name)), React.createElement("div", {
          className: "bdl-PresenceCollaboratorsList-item-info-time"
        }, isActive ? React.createElement(FormattedMessage, messages.activeNowText) : _this.renderTimestampMessage(interactedAt, interactionType))));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderActions", function () {
      var _this$props = _this.props,
          getLinkCallback = _this$props.getLinkCallback,
          inviteCallback = _this$props.inviteCallback;
      return (getLinkCallback || inviteCallback) && React.createElement("div", {
        className: "bdl-PresenceCollaboratorsList-actions"
      }, React.createElement("div", null, getLinkCallback && React.createElement(Button, {
        onClick: getLinkCallback
      }, React.createElement(FormattedMessage, messages.getLinkButtonText)), inviteCallback && React.createElement(Button, {
        onClick: inviteCallback
      }, React.createElement(FormattedMessage, messages.inviteButtonText))));
    });

    return _this;
  }

  _createClass(PresenceCollaboratorsList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var overflow = this.calculateOverflow(this.elDropdownList); // eslint-disable-next-line react/no-did-mount-set-state

      this.setState(overflow);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var overflow = this.calculateOverflow(this.elDropdownList);
      /**
       * recalculate overflow when dropdown is visible and new collabs are added
       * This will not go into an infinite loop because we check for changes in local component state
       */

      if (overflow.isScrollableAbove !== this.state.isScrollableAbove || overflow.isScrollableBelow !== this.state.isScrollableBelow) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState(overflow);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          isScrollableAbove = _this$state.isScrollableAbove,
          isScrollableBelow = _this$state.isScrollableBelow;
      var _this$props2 = this.props,
          getLinkCallback = _this$props2.getLinkCallback,
          inviteCallback = _this$props2.inviteCallback;
      var buttonsPresent = getLinkCallback || inviteCallback;
      var dropdownListClasses = classnames('bdl-PresenceCollaboratorsList-list', {
        'dropshadow-list': !buttonsPresent,
        'dropshadow-list-with-buttons': buttonsPresent,
        'is-scrollable-above': isScrollableAbove,
        'is-scrollable-below': isScrollableBelow
      });
      var title = this.renderTitle();
      var collabList = this.renderCollabList();
      var actions = this.renderActions();
      return React.createElement("div", {
        className: "bdl-PresenceCollaboratorsList"
      }, title, React.createElement("div", {
        ref: function ref(list) {
          _this2.elDropdownList = list;
        },
        className: dropdownListClasses,
        onScroll: this.throttledHandleScroll
      }, collabList), actions);
    }
  }]);

  return PresenceCollaboratorsList;
}(React.Component);

_defineProperty(PresenceCollaboratorsList, "propTypes", {
  collaborators: PropTypes.arrayOf(PropTypes.shape({
    /** Url to avatar image. If passed in, component will render the avatar image instead of the initials */
    avatarUrl: PropTypes.string,

    /** Users id */
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isActive: PropTypes.bool,

    /** Unix timestamp of when the user last interacted with the document */
    interactedAt: PropTypes.number,

    /** The type of interaction by the user */
    interactionType: PropTypes.string,

    /** User's full name */
    name: PropTypes.string.isRequired,

    /** Custom Profile URL */
    profileUrl: PropTypes.string
  })).isRequired,

  /* Get Link button callback. also controls visibility of button */
  getLinkCallback: PropTypes.func,

  /* Show Invite button callback. also controls visibility of button */
  inviteCallback: PropTypes.func,

  /* Callback for Dropdown onScroll event */
  onScroll: PropTypes.func,

  /* Intl object */
  intl: PropTypes.any
});

export { PresenceCollaboratorsList as PresenceCollaboratorsListComponent };
export default injectIntl(PresenceCollaboratorsList);
//# sourceMappingURL=PresenceCollaboratorsList.js.map