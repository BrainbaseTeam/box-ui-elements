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
import classNames from 'classnames';
import noop from 'lodash/noop';
import { FormattedMessage } from 'react-intl';
import TetherComponent from 'react-tether';
import Trash16 from '../../../../icon/line/Trash16';
import Pencil16 from '../../../../icon/line/Pencil16';
import Avatar from '../Avatar';
import Media from '../../../../components/media';
import { MenuItem } from '../../../../components/menu';
import { ACTIVITY_TARGETS } from '../../../common/interactionTargets';
import DeleteConfirmation from '../common/delete-confirmation';
import ActivityTimestamp from '../common/activity-timestamp';
import UserLink from '../common/user-link';
import ActivityCard from '../ActivityCard';
import ActivityError from '../common/activity-error';
import ActivityMessage from '../common/activity-message';
import CommentForm from '../comment-form';
import { PLACEHOLDER_USER } from '../../../../constants';
import messages from './messages';
import './Comment.scss';

var Comment =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Comment, _React$Component);

  function Comment() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Comment);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Comment)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isConfirmingDelete: false,
      isEditing: false,
      isInputOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeleteConfirm", function () {
      var _this$props = _this.props,
          id = _this$props.id,
          onDelete = _this$props.onDelete,
          permissions = _this$props.permissions;
      onDelete({
        id: id,
        permissions: permissions
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeleteCancel", function () {
      _this.setState({
        isConfirmingDelete: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeleteClick", function () {
      _this.setState({
        isConfirmingDelete: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleEditClick", function () {
      _this.setState({
        isEditing: true,
        isInputOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "commentFormFocusHandler", function () {
      return _this.setState({
        isInputOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "commentFormCancelHandler", function () {
      return _this.setState({
        isInputOpen: false,
        isEditing: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "commentFormSubmitHandler", function () {
      return _this.setState({
        isInputOpen: false,
        isEditing: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleUpdate", function (_ref) {
      var id = _ref.id,
          text = _ref.text,
          hasMention = _ref.hasMention;
      var _this$props2 = _this.props,
          onEdit = _this$props2.onEdit,
          permissions = _this$props2.permissions;
      onEdit(id, text, hasMention, permissions);

      _this.commentFormSubmitHandler();
    });

    return _this;
  }

  _createClass(Comment, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          created_by = _this$props3.created_by,
          created_at = _this$props3.created_at,
          _this$props3$permissi = _this$props3.permissions,
          permissions = _this$props3$permissi === void 0 ? {} : _this$props3$permissi,
          id = _this$props3.id,
          isPending = _this$props3.isPending,
          error = _this$props3.error,
          _this$props3$tagged_m = _this$props3.tagged_message,
          tagged_message = _this$props3$tagged_m === void 0 ? '' : _this$props3$tagged_m,
          translatedTaggedMessage = _this$props3.translatedTaggedMessage,
          translations = _this$props3.translations,
          currentUser = _this$props3.currentUser,
          isDisabled = _this$props3.isDisabled,
          getAvatarUrl = _this$props3.getAvatarUrl,
          getUserProfileUrl = _this$props3.getUserProfileUrl,
          getMentionWithQuery = _this$props3.getMentionWithQuery,
          mentionSelectorContacts = _this$props3.mentionSelectorContacts,
          onEdit = _this$props3.onEdit;
      var _this$state = this.state,
          isConfirmingDelete = _this$state.isConfirmingDelete,
          isEditing = _this$state.isEditing,
          isInputOpen = _this$state.isInputOpen;
      var createdAtTimestamp = new Date(created_at).getTime();
      var createdByUser = created_by || PLACEHOLDER_USER;
      var canEdit = onEdit !== noop && permissions.can_edit;
      var canDelete = permissions.can_delete;
      var isMenuVisible = (canDelete || canEdit) && !isPending;
      return React.createElement(ActivityCard, {
        className: "bcs-Comment"
      }, React.createElement(Media, {
        className: classNames('bcs-Comment-media', {
          'bcs-is-pending': isPending || error
        })
      }, React.createElement(Media.Figure, null, React.createElement(Avatar, {
        getAvatarUrl: getAvatarUrl,
        user: createdByUser
      })), React.createElement(Media.Body, null, isMenuVisible && React.createElement(TetherComponent, {
        attachment: "top right",
        className: "bcs-Comment-deleteConfirmationModal",
        constraints: [{
          to: 'scrollParent',
          attachment: 'together'
        }],
        targetAttachment: "bottom right"
      }, React.createElement(Media.Menu, {
        isDisabled: isConfirmingDelete,
        "data-testid": "comment-actions-menu",
        menuProps: {
          'data-resin-component': ACTIVITY_TARGETS.COMMENT_OPTIONS
        }
      }, canEdit && React.createElement(MenuItem, {
        "data-resin-target": ACTIVITY_TARGETS.COMMENT_OPTIONS_EDIT,
        "data-testid": "edit-comment",
        onClick: this.handleEditClick
      }, React.createElement(Pencil16, null), React.createElement(FormattedMessage, messages.commentEditMenuItem)), canDelete && React.createElement(MenuItem, {
        "data-resin-target": ACTIVITY_TARGETS.COMMENT_OPTIONS_DELETE,
        "data-testid": "delete-comment",
        onClick: this.handleDeleteClick
      }, React.createElement(Trash16, null), React.createElement(FormattedMessage, messages.commentDeleteMenuItem))), isConfirmingDelete && React.createElement(DeleteConfirmation, {
        "data-resin-component": ACTIVITY_TARGETS.COMMENT_OPTIONS,
        isOpen: isConfirmingDelete,
        message: messages.commentDeletePrompt,
        onDeleteCancel: this.handleDeleteCancel,
        onDeleteConfirm: this.handleDeleteConfirm
      })), React.createElement("div", {
        className: "bcs-Comment-headline"
      }, React.createElement(UserLink, {
        "data-resin-target": ACTIVITY_TARGETS.PROFILE,
        id: createdByUser.id,
        name: createdByUser.name,
        getUserProfileUrl: getUserProfileUrl
      })), React.createElement("div", null, React.createElement(ActivityTimestamp, {
        date: createdAtTimestamp
      })), isEditing ? React.createElement(CommentForm, {
        isDisabled: isDisabled,
        className: classNames('bcs-Comment-editor', {
          'bcs-is-disabled': isDisabled
        }),
        updateComment: this.handleUpdate,
        isOpen: isInputOpen // $FlowFixMe
        ,
        user: currentUser,
        onCancel: this.commentFormCancelHandler,
        onFocus: this.commentFormFocusHandler,
        isEditing: isEditing,
        entityId: id,
        tagged_message: tagged_message,
        getAvatarUrl: getAvatarUrl,
        mentionSelectorContacts: mentionSelectorContacts,
        getMentionWithQuery: getMentionWithQuery
      }) : React.createElement(ActivityMessage, _extends({
        id: id,
        tagged_message: tagged_message,
        translatedTaggedMessage: translatedTaggedMessage
      }, translations, {
        translationFailed: error ? true : null,
        getUserProfileUrl: getUserProfileUrl
      })))), error ? React.createElement(ActivityError, error) : null);
    }
  }]);

  return Comment;
}(React.Component);

_defineProperty(Comment, "defaultProps", {
  onDelete: noop,
  onEdit: noop
});

export default Comment;
//# sourceMappingURL=Comment.js.map