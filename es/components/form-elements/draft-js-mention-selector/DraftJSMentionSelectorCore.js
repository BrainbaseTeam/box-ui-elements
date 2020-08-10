function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { EditorState, Modifier } from 'draft-js';
import DatalistItem from '../../datalist-item';
import DraftJSEditor from '../../draft-js-editor';
import SelectorDropdown from '../../selector-dropdown';
import messages from './messages';
import './MentionSelector.scss';

var DefaultSelectorRow = function DefaultSelectorRow(_ref) {
  var _ref$item = _ref.item,
      item = _ref$item === void 0 ? {} : _ref$item,
      rest = _objectWithoutProperties(_ref, ["item"]);

  return /*#__PURE__*/React.createElement(DatalistItem, rest, item.name, " ", /*#__PURE__*/React.createElement("span", {
    className: "dropdown-secondary-text"
  }, item.email));
};

var DefaultStartMentionMessage = function DefaultStartMentionMessage() {
  return /*#__PURE__*/React.createElement(FormattedMessage, messages.startMention);
};

var MentionStartState = function MentionStartState(_ref2) {
  var message = _ref2.message;
  return /*#__PURE__*/React.createElement("div", {
    className: "mention-start-state"
  }, message);
};

var DraftJSMentionSelector = /*#__PURE__*/function (_React$Component) {
  _inherits(DraftJSMentionSelector, _React$Component);

  var _super = _createSuper(DraftJSMentionSelector);

  function DraftJSMentionSelector(props) {
    var _this;

    _classCallCheck(this, DraftJSMentionSelector);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleMention", function () {
      var onMention = _this.props.onMention;
      var activeMention = _this.state.activeMention;

      if (onMention) {
        onMention(activeMention ? activeMention.mentionString : '');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleContactSelected", function (index) {
      var contacts = _this.props.contacts;

      _this.addMention(contacts[index]);

      _this.setState({
        activeMention: null,
        isFocused: true
      }, function () {
        _this.handleMention();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      var onBlur = _this.props.onBlur;

      _this.setState({
        isFocused: false
      });

      if (onBlur) {
        onBlur(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
      var onFocus = _this.props.onFocus;

      _this.setState({
        isFocused: true
      });

      if (onFocus) {
        onFocus(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (nextEditorState) {
      var onChange = _this.props.onChange;

      var activeMention = _this.getActiveMentionForEditorState(nextEditorState);

      _this.setState({
        activeMention: activeMention
      }, function () {
        if (onChange) {
          onChange(nextEditorState);
        }

        if (activeMention && activeMention.mentionString) {
          _this.handleMention();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "shouldDisplayMentionLookup", function () {
      var contacts = _this.props.contacts;
      var activeMention = _this.state.activeMention;
      return !!(activeMention && activeMention.mentionString && contacts.length);
    });

    var mentionTriggers = props.mentionTriggers.reduce(function (prev, current) {
      return "".concat(prev, "\\").concat(current);
    }, '');
    _this.state = {
      activeMention: null,
      isFocused: false,
      mentionPattern: new RegExp("([".concat(mentionTriggers, "])([^").concat(mentionTriggers, "]*)$"))
    };
    return _this;
  }
  /**
   * Lifecycle method that gets called immediately after an update
   * @param {object} lastProps Props the component is receiving
   * @returns {void}
   */


  _createClass(DraftJSMentionSelector, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevContacts = prevProps.contacts;
      var currentContacts = this.props.contacts;
      var activeMention = this.state.activeMention;

      if (activeMention !== null && !currentContacts.length && prevContacts !== currentContacts) {
        // if empty set of contacts get passed in, set active mention to null
        this.setState({
          activeMention: null
        });
      }
    }
    /**
     * Extracts the active mention from the editor state
     *
     * @param {EditorState} editorState
     * @returns {object}
     */

  }, {
    key: "getActiveMentionForEditorState",
    value: function getActiveMentionForEditorState(editorState) {
      var mentionPattern = this.state.mentionPattern;
      var contentState = editorState.getCurrentContent();
      var selectionState = editorState.getSelection();
      var startKey = selectionState.getStartKey();
      var activeBlock = contentState.getBlockForKey(startKey);
      var cursorPosition = selectionState.getStartOffset();
      var result = null; // Break the active block into entity ranges.

      activeBlock.findEntityRanges(function (character) {
        return character.getEntity() === null;
      }, function (start, end) {
        // Find the active range (is the cursor inside this range?)
        if (start <= cursorPosition && cursorPosition <= end) {
          // Determine if the active range contains a mention.
          var activeRangeText = activeBlock.getText().substr(start, cursorPosition - start);
          var mentionMatch = activeRangeText.match(mentionPattern);

          if (mentionMatch) {
            result = {
              blockID: startKey,
              mentionString: mentionMatch[2],
              mentionTrigger: mentionMatch[1],
              start: start + mentionMatch.index,
              end: cursorPosition
            };
          }
        }

        return null;
      });
      return result;
    }
    /**
     * Called on each keypress when a mention is being composed
     * @returns {void}
     */

  }, {
    key: "addMention",

    /**
     * Inserts a selected mention into the editor
     * @param {object} mention The selected mention to insert
     */
    value: function addMention(mention) {
      var _this2 = this;

      var activeMention = this.state.activeMention;
      var editorState = this.props.editorState;

      var _ref3 = activeMention || {},
          start = _ref3.start,
          end = _ref3.end;

      var id = mention.id,
          name = mention.name;
      var contentState = editorState.getCurrentContent();
      var selectionState = editorState.getSelection();
      var preInsertionSelectionState = selectionState.merge({
        anchorOffset: start,
        focusOffset: end
      });
      var textToInsert = "@".concat(name);
      var contentStateWithEntity = contentState.createEntity('MENTION', 'IMMUTABLE', {
        id: id
      });
      var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      var contentStateWithLink = Modifier.replaceText(contentState, preInsertionSelectionState, textToInsert, null, entityKey);
      var spaceOffset = preInsertionSelectionState.getStartOffset() + textToInsert.length;
      var selectionStateForAddingSpace = preInsertionSelectionState.merge({
        anchorOffset: spaceOffset,
        focusOffset: spaceOffset
      });
      var contentStateWithLinkAndExtraSpace = Modifier.insertText(contentStateWithLink, selectionStateForAddingSpace, ' ');
      var editorStateWithLink = EditorState.push(editorState, contentStateWithLinkAndExtraSpace, 'change-block-type');
      this.setState({
        activeMention: null
      }, function () {
        _this2.handleChange(editorStateWithLink);
      });
    }
    /**
     * @returns {boolean}
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          contacts = _this$props.contacts,
          editorState = _this$props.editorState,
          error = _this$props.error,
          hideLabel = _this$props.hideLabel,
          isDisabled = _this$props.isDisabled,
          isRequired = _this$props.isRequired,
          label = _this$props.label,
          onReturn = _this$props.onReturn,
          placeholder = _this$props.placeholder,
          selectorRow = _this$props.selectorRow,
          startMentionMessage = _this$props.startMentionMessage,
          onMention = _this$props.onMention;
      var _this$state = this.state,
          activeMention = _this$state.activeMention,
          isFocused = _this$state.isFocused;
      var classes = classNames('mention-selector-wrapper', className);
      var showMentionStartState = !!(onMention && activeMention && !activeMention.mentionString && isFocused);
      return /*#__PURE__*/React.createElement("div", {
        className: classes
      }, /*#__PURE__*/React.createElement(SelectorDropdown, {
        onSelect: this.handleContactSelected,
        selector: /*#__PURE__*/React.createElement(DraftJSEditor, {
          editorState: editorState,
          error: error,
          hideLabel: hideLabel,
          isDisabled: isDisabled,
          isFocused: isFocused,
          isRequired: isRequired,
          label: label,
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          onChange: this.handleChange,
          onReturn: onReturn,
          placeholder: placeholder
        })
      }, this.shouldDisplayMentionLookup() ? contacts.map(function (contact) {
        return /*#__PURE__*/React.cloneElement(selectorRow, _objectSpread(_objectSpread(_objectSpread({}, selectorRow.props), contact), {}, {
          key: contact.id
        }));
      }) : []), showMentionStartState ? /*#__PURE__*/React.createElement(MentionStartState, {
        message: startMentionMessage
      }) : null);
    }
  }]);

  return DraftJSMentionSelector;
}(React.Component);

_defineProperty(DraftJSMentionSelector, "defaultProps", {
  className: '',
  contacts: [],
  isDisabled: false,
  isRequired: false,
  mentionTriggers: ['@', '＠', '﹫'],
  selectorRow: /*#__PURE__*/React.createElement(DefaultSelectorRow, null),
  startMentionMessage: /*#__PURE__*/React.createElement(DefaultStartMentionMessage, null)
});

export default DraftJSMentionSelector;
//# sourceMappingURL=DraftJSMentionSelectorCore.js.map