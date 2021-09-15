function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import classnames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { Link } from '../../components/link';
import { COLLAB_GROUP_TYPE, COLLAB_PENDING_TYPE } from './constants';
import messages from './messages';
import CollaboratorAvatarItem from './CollaboratorAvatarItem';
import './CollaboratorListItem.scss';

var CollaboratorListItem = function CollaboratorListItem(props) {
  var index = props.index,
      trackingProps = props.trackingProps;
  var usernameProps = trackingProps.usernameProps,
      emailProps = trackingProps.emailProps;
  var _props$collaborator = props.collaborator,
      email = _props$collaborator.email,
      expiration = _props$collaborator.expiration,
      hasCustomAvatar = _props$collaborator.hasCustomAvatar,
      name = _props$collaborator.name,
      type = _props$collaborator.type,
      imageURL = _props$collaborator.imageURL,
      isExternalCollab = _props$collaborator.isExternalCollab,
      profileURL = _props$collaborator.profileURL,
      translatedRole = _props$collaborator.translatedRole,
      userID = _props$collaborator.userID;
  var userOrGroupNameContent = type !== COLLAB_GROUP_TYPE ? React.createElement("div", {
    className: classnames('name', type)
  }, React.createElement(Link, _extends({
    href: profileURL || "/profile/".concat(userID),
    rel: "noopener",
    target: "_blank",
    title: name
  }, usernameProps), name)) : React.createElement("div", {
    className: classnames('name', type)
  }, name);
  var emailContent = type !== COLLAB_GROUP_TYPE && email ? React.createElement("div", {
    className: "email"
  }, React.createElement(Link, _extends({
    href: "mailto:".concat(email),
    title: email
  }, emailProps), email)) : null;
  return React.createElement("li", null, React.createElement("div", {
    className: "collaborator-list-item"
  }, React.createElement("div", {
    className: "user"
  }, React.createElement(CollaboratorAvatarItem, {
    allowBadging: true,
    avatarUrl: imageURL,
    email: email,
    expiration: expiration,
    hasCustomAvatar: hasCustomAvatar,
    id: index,
    isExternalCollab: isExternalCollab,
    name: name
  }), React.createElement("div", {
    className: "info"
  }, userOrGroupNameContent, emailContent)), React.createElement("div", {
    className: "role"
  }, type === COLLAB_PENDING_TYPE ? React.createElement(FormattedMessage, messages.pendingCollabText) : translatedRole)));
};

export default CollaboratorListItem;
//# sourceMappingURL=CollaboratorListItem.js.map