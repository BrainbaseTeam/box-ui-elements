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

import * as React from 'react';
import { CompositeDecorator, EditorState } from 'draft-js';
import noop from 'lodash/noop';
import DraftJSMentionSelectorCore from './DraftJSMentionSelectorCore';
import DraftMentionItem from './DraftMentionItem';
import FormInput from '../form/FormInput';
import * as messages from '../input-messages';
/**
 * Scans a Draft ContentBlock for entity ranges, so they can be annotated
 * @see docs at {@link https://draftjs.org/docs/advanced-topics-decorators.html#compositedecorator}
 * @param {ContentBlock} contentBlock
 * @param {function} callback
 * @param {ContentState} contentState
 */

var mentionStrategy = function mentionStrategy(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    var ret = entityKey !== null && contentState.getEntity(entityKey).getType() === 'MENTION';
    return ret;
  }, callback);
};

var DraftJSMentionSelector = /*#__PURE__*/function (_React$Component) {
  _inherits(DraftJSMentionSelector, _React$Component);

  var _super = _createSuper(DraftJSMentionSelector);

  function DraftJSMentionSelector(props) {
    var _this;

    _classCallCheck(this, DraftJSMentionSelector);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      if (_this.props.validateOnBlur && _this.containerEl && event.relatedTarget instanceof Node && !_this.containerEl.contains(event.relatedTarget)) {
        _this.checkValidity();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
      var onFocus = _this.props.onFocus;

      if (onFocus) {
        onFocus(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (nextEditorState) {
      var internalEditorState = _this.state.internalEditorState;
      var onChange = _this.props.onChange;
      onChange(nextEditorState);

      if (internalEditorState) {
        _this.setState({
          internalEditorState: nextEditorState
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleValidityStateUpdateHandler", function () {
      var isTouched = _this.state.isTouched;

      if (!isTouched) {
        return;
      }

      var error = _this.getErrorFromValidityState();

      _this.setState({
        error: error
      });
    });

    _defineProperty(_assertThisInitialized(_this), "checkValidity", function () {
      _this.handleValidityStateUpdateHandler();
    });

    var mentionDecorator = new CompositeDecorator([{
      strategy: mentionStrategy,
      component: DraftMentionItem
    }]); // @NOTE (smotraghi 2017-05-30):
    // This component might be either own its EditorState (in which case it lives in `this.state.internalEditorState`)
    // or be a controlled component whose EditorState is passed in via the `editorState` prop.
    // If `props.editorState` is set, `internalEditorState` is `null`,
    // otherwise we initialize it here

    _this.state = {
      contacts: [],
      isTouched: false,
      internalEditorState: props.editorState ? null : EditorState.createEmpty(mentionDecorator),
      error: null
    };
    return _this;
  }

  _createClass(DraftJSMentionSelector, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var prevInternalEditorState = prevState.internalEditorState;
      var internalEditorState = this.state.internalEditorState;
      var prevEditorStateFromProps = prevProps.editorState;
      var editorState = this.props.editorState; // Determine whether we're working with the internal editor state or
      // external editor state passed in from props

      var prevEditorState = prevInternalEditorState || prevEditorStateFromProps;
      var currentEditorState = internalEditorState || editorState; // Only handle isTouched state transitions and check validity if the
      // editorState references are different. This is to avoid getting stuck
      // in an infinite loop of checking validity because checkValidity always
      // calls setState({ error })

      if (prevEditorState && currentEditorState && prevEditorState !== currentEditorState) {
        var newState = this.getDerivedStateFromEditorState(currentEditorState, prevEditorState);

        if (newState) {
          this.setState(newState, this.checkValidityIfAllowed);
        } else {
          this.checkValidityIfAllowed();
        }
      }
    }
  }, {
    key: "getDerivedStateFromEditorState",
    value: function getDerivedStateFromEditorState(currentEditorState, previousEditorState) {
      var isPreviousEditorStateEmpty = this.isEditorStateEmpty(previousEditorState);
      var isCurrentEditorStateEmpty = this.isEditorStateEmpty(currentEditorState);
      var isNewEditorState = isCurrentEditorStateEmpty && !isPreviousEditorStateEmpty;
      var isEditorStateDirty = isPreviousEditorStateEmpty && !isCurrentEditorStateEmpty;
      var newState = null; // Detect case where controlled EditorState is created anew and empty.
      // If next editorState is empty and the current editorState is not empty
      // that means it is a new empty state and this component should not be marked dirty

      if (isNewEditorState) {
        newState = {
          isTouched: false,
          error: null
        };
      } else if (isEditorStateDirty) {
        // Detect case where controlled EditorState has been made dirty
        // If the current editorState is empty and the next editorState is not
        // empty then this is the first interaction so mark this component dirty
        newState = {
          isTouched: true
        };
      }

      return newState;
    }
  }, {
    key: "checkValidityIfAllowed",
    value: function checkValidityIfAllowed() {
      var validateOnBlur = this.props.validateOnBlur;

      if (!validateOnBlur) {
        this.checkValidity();
      }
    }
  }, {
    key: "isEditorStateEmpty",
    value: function isEditorStateEmpty(editorState) {
      var text = editorState.getCurrentContent().getPlainText().trim();
      var lastChangeType = editorState.getLastChangeType();
      return text.length === 0 && lastChangeType === null;
    }
    /**
     * @returns {string}
     */

  }, {
    key: "getErrorFromValidityState",
    value: function getErrorFromValidityState() {
      var _this$props = this.props,
          externalEditorState = _this$props.editorState,
          isRequired = _this$props.isRequired,
          maxLength = _this$props.maxLength,
          minLength = _this$props.minLength;
      var internalEditorState = this.state.internalEditorState; // manually check for content length if isRequired is true

      var editorState = internalEditorState || externalEditorState;

      var _editorState$getCurre = editorState.getCurrentContent().getPlainText().trim(),
          length = _editorState$getCurre.length;

      if (isRequired && !length) {
        return messages.valueMissing();
      }

      if (typeof minLength !== 'undefined' && length < minLength) {
        return messages.tooShort(minLength);
      }

      if (typeof maxLength !== 'undefined' && length > maxLength) {
        return messages.tooLong(maxLength);
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          _this$props2$classNam = _this$props2.className,
          className = _this$props2$classNam === void 0 ? '' : _this$props2$classNam,
          externalEditorState = _this$props2.editorState,
          hideLabel = _this$props2.hideLabel,
          isDisabled = _this$props2.isDisabled,
          isRequired = _this$props2.isRequired,
          label = _this$props2.label,
          mentionTriggers = _this$props2.mentionTriggers,
          name = _this$props2.name,
          onMention = _this$props2.onMention,
          placeholder = _this$props2.placeholder,
          selectorRow = _this$props2.selectorRow,
          startMentionMessage = _this$props2.startMentionMessage,
          onReturn = _this$props2.onReturn;
      var _this$state = this.state,
          contacts = _this$state.contacts,
          internalEditorState = _this$state.internalEditorState,
          error = _this$state.error;
      var handleBlur = this.handleBlur,
          handleChange = this.handleChange,
          handleFocus = this.handleFocus;
      var editorState = internalEditorState || externalEditorState;
      return /*#__PURE__*/React.createElement("div", {
        ref: function ref(containerEl) {
          _this2.containerEl = containerEl;
        },
        className: className
      }, /*#__PURE__*/React.createElement(FormInput, {
        name: name,
        onValidityStateUpdate: this.handleValidityStateUpdateHandler
      }, /*#__PURE__*/React.createElement(DraftJSMentionSelectorCore, {
        contacts: contacts,
        editorState: editorState,
        error: error,
        hideLabel: hideLabel,
        isDisabled: isDisabled,
        isRequired: isRequired,
        label: label,
        mentionTriggers: mentionTriggers,
        onBlur: handleBlur,
        onChange: handleChange,
        onFocus: handleFocus,
        onMention: onMention,
        onReturn: onReturn,
        placeholder: placeholder,
        selectorRow: selectorRow,
        startMentionMessage: startMentionMessage
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      var contacts = nextProps.contacts;
      return contacts ? {
        contacts: contacts
      } : null;
    }
  }]);

  return DraftJSMentionSelector;
}(React.Component);

_defineProperty(DraftJSMentionSelector, "defaultProps", {
  isRequired: false,
  onChange: noop,
  validateOnBlur: true
});

export default DraftJSMentionSelector;
//# sourceMappingURL=DraftJSMentionSelector.js.map