function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Component for Approval comment form
 */
import * as React from 'react';
import noop from 'lodash/noop';
import classNames from 'classnames';
import { FormattedMessage, injectIntl } from 'react-intl';
import Avatar from '../Avatar';
import CommentFormControls from './CommentFormControls';
import DraftJSMentionSelector, { createMentionSelectorState, getFormattedCommentText } from '../../../../components/form-elements/draft-js-mention-selector';
import Form from '../../../../components/form-elements/form/Form';
import Media from '../../../../components/media';
import messages from './messages';
import './CommentForm.scss';

var CommentForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CommentForm, _React$Component);

  function CommentForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CommentForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CommentForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      commentEditorState: createMentionSelectorState(_this.props.tagged_message)
    });

    _defineProperty(_assertThisInitialized(_this), "onFormValidSubmitHandler", function () {
      var _this$props = _this.props,
          _this$props$createCom = _this$props.createComment,
          createComment = _this$props$createCom === void 0 ? noop : _this$props$createCom,
          _this$props$updateCom = _this$props.updateComment,
          updateComment = _this$props$updateCom === void 0 ? noop : _this$props$updateCom,
          onSubmit = _this$props.onSubmit,
          entityId = _this$props.entityId;

      var _this$getFormattedCom = _this.getFormattedCommentText(),
          text = _this$getFormattedCom.text,
          hasMention = _this$getFormattedCom.hasMention;

      if (!text) {
        return;
      }

      if (entityId) {
        updateComment({
          id: entityId,
          text: text,
          hasMention: hasMention
        });
      } else {
        createComment({
          text: text,
          hasMention: hasMention
        });
      }

      if (onSubmit) {
        onSubmit();
      }

      _this.setState({
        commentEditorState: createMentionSelectorState()
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMentionSelectorChangeHandler", function (nextEditorState) {
      return _this.setState({
        commentEditorState: nextEditorState
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getFormattedCommentText", function () {
      var commentEditorState = _this.state.commentEditorState;
      return getFormattedCommentText(commentEditorState);
    });

    return _this;
  }

  _createClass(CommentForm, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var prevIsOpen = _ref.isOpen;
      var isOpen = this.props.isOpen;

      if (isOpen !== prevIsOpen && !isOpen) {
        this.setState({
          commentEditorState: createMentionSelectorState()
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          getMentionWithQuery = _this$props2.getMentionWithQuery,
          formatMessage = _this$props2.intl.formatMessage,
          isDisabled = _this$props2.isDisabled,
          isOpen = _this$props2.isOpen,
          _this$props2$mentionS = _this$props2.mentionSelectorContacts,
          mentionSelectorContacts = _this$props2$mentionS === void 0 ? [] : _this$props2$mentionS,
          contactsLoaded = _this$props2.contactsLoaded,
          onCancel = _this$props2.onCancel,
          onFocus = _this$props2.onFocus,
          user = _this$props2.user,
          isEditing = _this$props2.isEditing,
          tagged_message = _this$props2.tagged_message,
          getAvatarUrl = _this$props2.getAvatarUrl,
          _this$props2$showTip = _this$props2.showTip,
          showTip = _this$props2$showTip === void 0 ? true : _this$props2$showTip;
      var commentEditorState = this.state.commentEditorState;
      var inputContainerClassNames = classNames('bcs-CommentForm', className, {
        'bcs-is-open': isOpen
      });
      return React.createElement(Media, {
        className: inputContainerClassNames
      }, !isEditing && React.createElement(Media.Figure, {
        className: "bcs-CommentForm-avatar"
      }, React.createElement(Avatar, {
        getAvatarUrl: getAvatarUrl,
        user: user
      })), React.createElement(Media.Body, {
        className: "bcs-CommentForm-body",
        "data-testid": "bcs-CommentForm-body"
      }, React.createElement(Form, {
        onValidSubmit: this.onFormValidSubmitHandler
      }, React.createElement(DraftJSMentionSelector, {
        className: "bcs-CommentForm-input",
        contacts: isOpen ? mentionSelectorContacts : [],
        contactsLoaded: contactsLoaded,
        editorState: commentEditorState,
        hideLabel: true,
        isDisabled: isDisabled,
        isRequired: isOpen,
        name: "commentText",
        label: formatMessage(messages.commentLabel),
        description: formatMessage(messages.atMentionTipDescription),
        onChange: this.onMentionSelectorChangeHandler,
        onFocus: onFocus,
        onMention: getMentionWithQuery,
        placeholder: tagged_message ? undefined : formatMessage(messages.commentWrite),
        validateOnBlur: false
      }), showTip && React.createElement("aside", {
        className: "bcs-CommentForm-tip"
      }, React.createElement(FormattedMessage, messages.atMentionTip)), isOpen && React.createElement(CommentFormControls, {
        onCancel: onCancel
      }))));
    }
  }]);

  return CommentForm;
}(React.Component); // For testing only


_defineProperty(CommentForm, "defaultProps", {
  isOpen: false
});

export { CommentForm as CommentFormUnwrapped };
export default injectIntl(CommentForm);
//# sourceMappingURL=CommentForm.js.map