function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import * as React from 'react';
import classNames from 'classnames';
import getProp from 'lodash/get';
import noop from 'lodash/noop';
import TetherComponent from 'react-tether';
import ActivityError from '../common/activity-error';
import ActivityMessage from '../common/activity-message';
import ActivityTimestamp from '../common/activity-timestamp';
import AnnotationActivityLink from './AnnotationActivityLink';
import AnnotationActivityMenu from './AnnotationActivityMenu';
import Avatar from '../Avatar';
import CommentForm from '../comment-form/CommentForm';
import DeleteConfirmation from '../common/delete-confirmation';
import Media from '../../../../components/media';
import messages from './messages';
import SelectableActivityCard from '../SelectableActivityCard';
import UserLink from '../common/user-link';
import { ACTIVITY_TARGETS } from '../../../common/interactionTargets';
import { PLACEHOLDER_USER } from '../../../../constants';
import './AnnotationActivity.scss';

var AnnotationActivity = function AnnotationActivity(_ref) {
  var currentUser = _ref.currentUser,
      item = _ref.item,
      getAvatarUrl = _ref.getAvatarUrl,
      getMentionWithQuery = _ref.getMentionWithQuery,
      getUserProfileUrl = _ref.getUserProfileUrl,
      isCurrentVersion = _ref.isCurrentVersion,
      mentionSelectorContacts = _ref.mentionSelectorContacts,
      _ref$onDelete = _ref.onDelete,
      onDelete = _ref$onDelete === void 0 ? noop : _ref$onDelete,
      _ref$onEdit = _ref.onEdit,
      onEdit = _ref$onEdit === void 0 ? noop : _ref$onEdit,
      _ref$onSelect = _ref.onSelect,
      onSelect = _ref$onSelect === void 0 ? noop : _ref$onSelect;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isConfirmingDelete = _React$useState2[0],
      setIsConfirmingDelete = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isEditing = _React$useState4[0],
      setIsEditing = _React$useState4[1];

  var _React$useState5 = React.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      isMenuOpen = _React$useState6[0],
      setIsMenuOpen = _React$useState6[1];

  var created_at = item.created_at,
      created_by = item.created_by,
      description = item.description,
      error = item.error,
      file_version = item.file_version,
      id = item.id,
      isPending = item.isPending,
      _item$permissions = item.permissions,
      permissions = _item$permissions === void 0 ? {} : _item$permissions,
      target = item.target;
  var canDelete = permissions.can_delete,
      canEdit = permissions.can_edit;
  var isFileVersionUnavailable = file_version === null;
  var isCardDisabled = !!error || isConfirmingDelete || isMenuOpen || isEditing || isFileVersionUnavailable;
  var isMenuVisible = (canDelete || canEdit) && !isPending;

  var handleDelete = function handleDelete() {
    return setIsConfirmingDelete(true);
  };

  var handleDeleteCancel = function handleDeleteCancel() {
    return setIsConfirmingDelete(false);
  };

  var handleDeleteConfirm = function handleDeleteConfirm() {
    setIsConfirmingDelete(false);
    onDelete({
      id: id,
      permissions: permissions
    });
  };

  var handleEdit = function handleEdit() {
    return setIsEditing(true);
  };

  var handleFormCancel = function handleFormCancel() {
    return setIsEditing(false);
  };

  var handleFormSubmit = function handleFormSubmit(_ref2) {
    var text = _ref2.text;
    setIsEditing(false);
    onEdit(id, text, permissions);
  };

  var handleMenuClose = function handleMenuClose() {
    return setIsMenuOpen(false);
  };

  var handleMenuOpen = function handleMenuOpen() {
    return setIsMenuOpen(true);
  };

  var handleMouseDown = function handleMouseDown(event) {
    if (isCardDisabled) {
      return;
    } // Prevents document event handlers from executing because box-annotations relies on
    // detecting mouse events on the document outside of annotation targets to determine when to
    // deselect annotations


    event.stopPropagation();
  };

  var handleSelect = function handleSelect() {
    return onSelect(item);
  };

  var createdAtTimestamp = new Date(created_at).getTime();
  var createdByUser = created_by || PLACEHOLDER_USER;
  var linkMessage = isCurrentVersion ? messages.annotationActivityPageItem : messages.annotationActivityVersionLink;
  var linkValue = isCurrentVersion ? target.location.value : getProp(file_version, 'version_number');
  var message = description && description.message || '';
  var activityLinkMessage = isFileVersionUnavailable ? messages.annotationActivityVersionUnavailable : _objectSpread({}, linkMessage, {
    values: {
      number: linkValue
    }
  });
  var tetherProps = {
    attachment: 'top right',
    className: 'bcs-AnnotationActivity-deleteConfirmationModal',
    constraints: [{
      to: 'scrollParent',
      attachment: 'together'
    }],
    targetAttachment: 'bottom right'
  };
  return React.createElement(React.Fragment, null, React.createElement(SelectableActivityCard, {
    className: "bcs-AnnotationActivity",
    "data-resin-feature": "annotations",
    "data-resin-iscurrent": isCurrentVersion,
    "data-resin-itemid": id,
    "data-resin-target": "annotationButton",
    isDisabled: isCardDisabled,
    onMouseDown: handleMouseDown,
    onSelect: handleSelect
  }, React.createElement(Media, {
    className: classNames('bcs-AnnotationActivity-media', {
      'bcs-is-pending': isPending || error
    })
  }, React.createElement(Media.Figure, null, React.createElement(Avatar, {
    getAvatarUrl: getAvatarUrl,
    user: createdByUser
  })), React.createElement(Media.Body, null, React.createElement("div", {
    className: "bcs-AnnotationActivity-headline"
  }, React.createElement(UserLink, {
    "data-resin-target": ACTIVITY_TARGETS.PROFILE,
    getUserProfileUrl: getUserProfileUrl,
    id: createdByUser.id,
    name: createdByUser.name
  })), React.createElement("div", {
    className: "bcs-AnnotationActivity-timestamp"
  }, React.createElement(ActivityTimestamp, {
    date: createdAtTimestamp
  }), React.createElement(AnnotationActivityLink, {
    className: "bcs-AnnotationActivity-link",
    "data-resin-target": "annotationLink",
    id: id,
    isDisabled: isFileVersionUnavailable,
    message: activityLinkMessage,
    onClick: handleSelect
  })), isEditing && currentUser ? React.createElement(CommentForm, {
    className: "bcs-AnnotationActivity-editor",
    entityId: id,
    getAvatarUrl: getAvatarUrl,
    getMentionWithQuery: getMentionWithQuery,
    isEditing: isEditing,
    isOpen: isEditing,
    mentionSelectorContacts: mentionSelectorContacts,
    onCancel: handleFormCancel,
    updateComment: handleFormSubmit,
    user: currentUser,
    tagged_message: message
  }) : React.createElement(ActivityMessage, {
    id: id,
    tagged_message: message,
    getUserProfileUrl: getUserProfileUrl
  }))), error ? React.createElement(ActivityError, error) : null), React.createElement(TetherComponent, tetherProps, isMenuVisible && React.createElement(AnnotationActivityMenu, {
    canDelete: canDelete,
    canEdit: canEdit,
    className: "bcs-AnnotationActivity-menu",
    id: id,
    isDisabled: isConfirmingDelete,
    onDelete: handleDelete,
    onEdit: handleEdit,
    onMenuClose: handleMenuClose,
    onMenuOpen: handleMenuOpen
  }), isConfirmingDelete && React.createElement(DeleteConfirmation, {
    "data-resin-component": ACTIVITY_TARGETS.ANNOTATION_OPTIONS,
    isOpen: isConfirmingDelete,
    message: messages.annotationActivityDeletePrompt,
    onDeleteCancel: handleDeleteCancel,
    onDeleteConfirm: handleDeleteConfirm
  })));
};

export default AnnotationActivity;
//# sourceMappingURL=AnnotationActivity.js.map