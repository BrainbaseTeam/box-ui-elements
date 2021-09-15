function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import CollaboratorAvatarItem from './CollaboratorAvatarItem';
import PlainButton from '../../components/plain-button';
import messages from './messages';
import './CollaboratorAvatars.scss';
var MAX_ADDITIONAL_COLLABORATOR_NUM_CAP = 99;

var CollaboratorAvatars =
/*#__PURE__*/
function (_Component) {
  _inherits(CollaboratorAvatars, _Component);

  function CollaboratorAvatars() {
    _classCallCheck(this, CollaboratorAvatars);

    return _possibleConstructorReturn(this, _getPrototypeOf(CollaboratorAvatars).apply(this, arguments));
  }

  _createClass(CollaboratorAvatars, [{
    key: "isVisible",
    value: function isVisible() {
      return this.props.collaborators.length > 0;
    }
  }, {
    key: "hasAdditionalCollaborators",
    value: function hasAdditionalCollaborators() {
      var _this$props = this.props,
          collaborators = _this$props.collaborators,
          maxDisplayedUserAvatars = _this$props.maxDisplayedUserAvatars;
      return collaborators.length > maxDisplayedUserAvatars;
    }
  }, {
    key: "collaboratorsOverMaxCount",
    value: function collaboratorsOverMaxCount() {
      var _this$props2 = this.props,
          collaborators = _this$props2.collaborators,
          maxDisplayedUserAvatars = _this$props2.maxDisplayedUserAvatars,
          maxAdditionalCollaboratorsNum = _this$props2.maxAdditionalCollaboratorsNum;
      var remainingCollabCount = collaborators.length - maxDisplayedUserAvatars;
      return remainingCollabCount > maxAdditionalCollaboratorsNum;
    }
  }, {
    key: "formatAdditionalCollaboratorCount",
    value: function formatAdditionalCollaboratorCount() {
      var _this$props3 = this.props,
          maxAdditionalCollaboratorsNum = _this$props3.maxAdditionalCollaboratorsNum,
          maxDisplayedUserAvatars = _this$props3.maxDisplayedUserAvatars,
          collaborators = _this$props3.collaborators;
      return this.collaboratorsOverMaxCount() ? "".concat(maxAdditionalCollaboratorsNum, "+") : "+".concat(collaborators.length - maxDisplayedUserAvatars);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          collaborators = _this$props4.collaborators,
          maxDisplayedUserAvatars = _this$props4.maxDisplayedUserAvatars,
          containerAttributes = _this$props4.containerAttributes,
          onClick = _this$props4.onClick;
      return React.createElement(PlainButton, _extends({
        className: classNames('collaborator-avatar-container', {
          'are-avatars-hidden': !this.isVisible()
        }),
        onClick: onClick
      }, containerAttributes, {
        "aria-hidden": this.isVisible() ? 'false' : 'true',
        type: "button"
      }), React.createElement("div", {
        className: "avatars-label"
      }, React.createElement(FormattedMessage, messages.collaboratorAvatarsLabel)), React.createElement("div", {
        className: "avatars"
      }, this.isVisible() && collaborators.slice(0, maxDisplayedUserAvatars).map(function (collaborator, index) {
        var collabID = collaborator.collabID,
            imageURL = collaborator.imageURL,
            hasCustomAvatar = collaborator.hasCustomAvatar,
            name = collaborator.name;
        return React.createElement(CollaboratorAvatarItem, {
          key: "collab-avatar-".concat(collabID),
          avatarUrl: imageURL,
          hasCustomAvatar: hasCustomAvatar,
          id: index,
          name: name
        });
      })), this.isVisible() && this.hasAdditionalCollaborators() && React.createElement("div", {
        className: "avatars-count"
      }, this.formatAdditionalCollaboratorCount()));
    }
  }]);

  return CollaboratorAvatars;
}(Component);

_defineProperty(CollaboratorAvatars, "defaultProps", {
  /** Maximum number of avatars to display before showing a +{n} avatar */
  maxDisplayedUserAvatars: 3,

  /** Maximum number of collaborators before displaying a {maxAdditionalCollaboratorsNum}+ avatar */
  maxAdditionalCollaboratorsNum: MAX_ADDITIONAL_COLLABORATOR_NUM_CAP,
  containerAttributes: {}
});

export default CollaboratorAvatars;
//# sourceMappingURL=CollaboratorAvatars.js.map