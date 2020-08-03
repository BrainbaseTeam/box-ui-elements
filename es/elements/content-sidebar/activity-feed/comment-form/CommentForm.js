function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
import DraftJSMentionSelector, { createMentionSelectorState } from '../../../../components/form-elements/draft-js-mention-selector';
import Form from '../../../../components/form-elements/form/Form';
import Media from '../../../../components/media';
import messages from './messages';
import './CommentForm.scss';

var CommentForm = /*#__PURE__*/function (_React$Component) {
  _inherits(CommentForm, _React$Component);

  var _super = _createSuper(CommentForm);

  function CommentForm() {
    var _this;

    _classCallCheck(this, CommentForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

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
      var contentState = commentEditorState.getCurrentContent();
      var blockMap = contentState.getBlockMap();
      var resultStringArr = []; // The API needs to explicitly know if a message contains a mention.

      var hasMention = false; // For all ContentBlocks in the ContentState:

      blockMap.forEach(function (block) {
        var text = block.getText();
        var blockMapStringArr = []; // Break down the ContentBlock into ranges

        block.findEntityRanges(function () {
          return true;
        }, function (start, end) {
          var entityKey = block.getEntityAt(start); // If the range is an Entity, format its text eg "@[1:Username]"
          // Otherwise append its text to the block result as-is

          if (entityKey) {
            var entity = contentState.getEntity(entityKey);
            var stringToAdd = "@[".concat(entity.getData().id, ":").concat(text.substring(start + 1, end), "]");
            blockMapStringArr.push(stringToAdd);
            hasMention = true;
          } else {
            blockMapStringArr.push(text.substring(start, end));
          }
        });
        resultStringArr.push(blockMapStringArr.join(''));
      }); // Concatenate the array of block strings with newlines
      // (Each block represents a paragraph)

      return {
        text: resultStringArr.join('\n'),
        hasMention: hasMention
      };
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
          onCancel = _this$props2.onCancel,
          onFocus = _this$props2.onFocus,
          user = _this$props2.user,
          isEditing = _this$props2.isEditing,
          tagged_message = _this$props2.tagged_message,
          getAvatarUrl = _this$props2.getAvatarUrl;
      var commentEditorState = this.state.commentEditorState;
      var inputContainerClassNames = classNames('bcs-CommentForm', className, {
        'bcs-is-open': isOpen
      });
      return /*#__PURE__*/React.createElement(Media, {
        className: inputContainerClassNames
      }, !isEditing && /*#__PURE__*/React.createElement(Media.Figure, {
        className: "bcs-CommentForm-avatar"
      }, /*#__PURE__*/React.createElement(Avatar, {
        getAvatarUrl: getAvatarUrl,
        user: user
      })), /*#__PURE__*/React.createElement(Media.Body, {
        className: "bcs-CommentForm-body"
      }, /*#__PURE__*/React.createElement(Form, {
        onValidSubmit: this.onFormValidSubmitHandler
      }, /*#__PURE__*/React.createElement(DraftJSMentionSelector, {
        className: "bcs-CommentForm-input",
        contacts: isOpen ? mentionSelectorContacts : [],
        editorState: commentEditorState,
        hideLabel: true,
        isDisabled: isDisabled,
        isRequired: isOpen,
        name: "commentText",
        label: "Comment",
        onChange: this.onMentionSelectorChangeHandler,
        onFocus: onFocus,
        onMention: getMentionWithQuery,
        placeholder: tagged_message ? undefined : formatMessage(messages.commentWrite),
        validateOnBlur: false
      }), /*#__PURE__*/React.createElement("aside", {
        className: "bcs-CommentForm-tip"
      }, /*#__PURE__*/React.createElement(FormattedMessage, messages.atMentionTip)), isOpen && /*#__PURE__*/React.createElement(CommentFormControls, {
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