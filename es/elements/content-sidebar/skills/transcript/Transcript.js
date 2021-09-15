function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
 * @file Transcript component
 * @author Box
 */
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { bdlGray50 } from '../../../../styles/variables';
import PlainButton from '../../../../components/plain-button/PlainButton';
import IconEdit from '../../../../icons/general/IconEdit';
import IconCopy from '../../../../icons/general/IconCopy';
import IconExpand from '../../../../icons/general/IconExpand';
import IconCollapse from '../../../../icons/general/IconCollapse';
import { formatTime } from '../../../../utils/datetime';
import LoadingIndicatorWrapper from '../../../../components/loading-indicator/LoadingIndicatorWrapper';
import Tooltip from '../../../../components/tooltip/Tooltip';
import { copy } from '../../../../utils/download';
import { SKILLS_TARGETS } from '../../../common/interactionTargets';
import messages from '../../../common/messages';
import { isValidTimeSlice } from './timeSliceUtils';
import TranscriptRow from './TranscriptRow';
import './Transcript.scss';

var Transcript =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Transcript, _React$PureComponent);

  function Transcript() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Transcript);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Transcript)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isEditingIndex: undefined,
      newTranscriptText: '',
      isCollapsed: true,
      isLoading: false
    });

    _defineProperty(_assertThisInitialized(_this), "transcriptReducer", function (accumulator, _ref) {
      var appears = _ref.appears,
          text = _ref.text;
      var start = isValidTimeSlice(appears) && Array.isArray(appears) ? "".concat(formatTime(appears[0].start), ":") : '';
      return "".concat(accumulator).concat(start, " ").concat(text || '', "\r\n");
    });

    _defineProperty(_assertThisInitialized(_this), "transcriptMapper", function (_ref2, index) {
      var appears = _ref2.appears,
          text = _ref2.text;
      var _this$state = _this.state,
          isEditingIndex = _this$state.isEditingIndex,
          newTranscriptText = _this$state.newTranscriptText;
      var isEditingRow = isEditingIndex === index;
      var transcriptText = isEditingRow ? newTranscriptText : text;
      var interactionTarget = isEditingRow ? SKILLS_TARGETS.TRANSCRIPTS.EDIT_TEXT : SKILLS_TARGETS.TRANSCRIPTS.TRANSCRIPT;
      return React.createElement(TranscriptRow, {
        key: index,
        appears: appears,
        interactionTarget: interactionTarget,
        isEditing: isEditingRow,
        onCancel: _this.onCancel,
        onChange: _this.onChange,
        onClick: function onClick() {
          return _this.onClick(index);
        },
        onSave: _this.onSave,
        text: transcriptText
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleIsEditing", function () {
      _this.setState(function (prevState) {
        return {
          isEditingIndex: typeof prevState.isEditingIndex === 'number' ? undefined : -1
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSave", function () {
      var _this$props = _this.props,
          entries = _this$props.card.entries,
          onSkillChange = _this$props.onSkillChange;
      var _this$state2 = _this.state,
          isEditingIndex = _this$state2.isEditingIndex,
          newTranscriptText = _this$state2.newTranscriptText;

      if (typeof isEditingIndex !== 'number') {
        return;
      }

      var entry = entries[isEditingIndex];

      if (entry.text === newTranscriptText) {
        _this.onCancel();
      } else {
        _this.setState({
          isLoading: true,
          isEditingIndex: -1
        });

        onSkillChange(null, null, [{
          replacement: _objectSpread({}, entry, {
            text: newTranscriptText
          }),
          replaced: entry
        }]);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onCancel", function () {
      _this.setState({
        isEditingIndex: -1,
        newTranscriptText: ''
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (event) {
      var currentTarget = event.currentTarget;

      _this.setState({
        newTranscriptText: currentTarget.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (index) {
      var entries = _this.props.card.entries;
      var isEditingIndex = _this.state.isEditingIndex;

      if (typeof isEditingIndex === 'number') {
        _this.setState({
          isEditingIndex: index,
          newTranscriptText: entries[index].text
        });
      } else {
        _this.previewSegment(index);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "copyTranscript", function () {
      var entries = _this.props.card.entries;
      var copiedClass = 'be-transcript-copied';
      copy(entries.reduce(_this.transcriptReducer, '')); // Animate the button by adding a class

      if (_this.copyBtn) {
        _this.copyBtn.classList.add(copiedClass);
      } // Remove the animation class


      setTimeout(function () {
        if (_this.copyBtn) {
          _this.copyBtn.classList.remove(copiedClass);
        }
      }, 1000);
    });

    _defineProperty(_assertThisInitialized(_this), "copyBtnRef", function (btn) {
      _this.copyBtn = btn;
    });

    _defineProperty(_assertThisInitialized(_this), "toggleExpandCollapse", function () {
      _this.setState(function (prevState) {
        return {
          isCollapsed: !prevState.isCollapsed
        };
      });
    });

    return _this;
  }

  _createClass(Transcript, [{
    key: "componentDidUpdate",

    /**
     * Called when transcripts gets new properties
     *
     * @private
     * @return {void}
     */
    value: function componentDidUpdate(prevProps) {
      if (prevProps === this.props) {
        return;
      }

      var wasEditing = typeof this.state.isEditingIndex === 'number';
      this.setState({
        isEditingIndex: wasEditing ? -1 : undefined,
        newTranscriptText: '',
        isLoading: false
      });
    }
    /**
     * Reducer to accumulate all transcript entries for copying
     *
     * @param {Object} accumulator - reducer accumulator
     * @return {string} accumulated transcript entries
     */

  }, {
    key: "previewSegment",

    /**
     * Previews a transcript segment
     *
     * @private
     * @param {number|void} [index] - row index to edit
     * @return {void}
     */
    value: function previewSegment(index) {
      var _this$props2 = this.props,
          entries = _this$props2.card.entries,
          getViewer = _this$props2.getViewer;
      var appears = entries[index].appears;
      var viewer = getViewer ? getViewer() : null;
      var isValid = isValidTimeSlice(appears) && Array.isArray(appears) && appears.length === 1;
      var timeSlice = appears;
      var start = isValid ? timeSlice[0].start : 0;

      if (isValid && viewer && typeof viewer.play === 'function') {
        viewer.play(start);
      }
    }
    /**
     * Saves the new card data
     *
     * @private
     * @return {void}
     */

  }, {
    key: "render",

    /**
     * Renders the transcript
     *
     * @private
     * @return {Object}
     */
    value: function render() {
      var _this$props3 = this.props,
          entries = _this$props3.card.entries,
          isEditable = _this$props3.isEditable;
      var _this$state3 = this.state,
          isEditingIndex = _this$state3.isEditingIndex,
          isCollapsed = _this$state3.isCollapsed,
          isLoading = _this$state3.isLoading;
      var hasEntries = entries.length > 0;
      var hasManyEntries = entries.length > 5;
      var isEditing = typeof isEditingIndex === 'number';
      var editBtnClassName = classNames('be-transcript-edit', {
        'be-transcript-is-editing': isEditing
      });
      var contentClassName = classNames({
        'be-transcript-content-collapsed': isCollapsed
      });
      var expandCollapseMessage = isCollapsed ? messages.expand : messages.collapse;
      return React.createElement(LoadingIndicatorWrapper, {
        className: "be-transcript",
        isLoading: isLoading
      }, hasEntries && !isLoading && React.createElement("div", {
        className: "be-transcript-actions"
      }, React.createElement(Tooltip, {
        text: React.createElement(FormattedMessage, messages.copy)
      }, React.createElement(PlainButton, {
        className: "be-transcript-copy",
        "data-resin-target": SKILLS_TARGETS.TRANSCRIPTS.COPY,
        getDOMRef: this.copyBtnRef,
        onClick: this.copyTranscript,
        type: "button"
      }, React.createElement(IconCopy, {
        color: bdlGray50
      }))), hasManyEntries && React.createElement(Tooltip, {
        text: React.createElement(FormattedMessage, expandCollapseMessage)
      }, React.createElement(PlainButton, {
        className: "be-transcript-expand",
        "data-resin-target": SKILLS_TARGETS.TRANSCRIPTS.EXPAND,
        onClick: this.toggleExpandCollapse,
        type: "button"
      }, isCollapsed ? React.createElement(IconExpand, {
        color: bdlGray50
      }) : React.createElement(IconCollapse, {
        color: bdlGray50
      }))), isEditable && React.createElement(Tooltip, {
        text: React.createElement(FormattedMessage, messages.editLabel)
      }, React.createElement(PlainButton, {
        className: editBtnClassName,
        "data-resin-target": SKILLS_TARGETS.TRANSCRIPTS.EDIT,
        onClick: this.toggleIsEditing,
        type: "button"
      }, React.createElement(IconEdit, null)))), isEditing ? React.createElement("div", {
        className: "be-transcript-edit-message"
      }, React.createElement(FormattedMessage, messages.transcriptEdit)) : null, hasEntries ? React.createElement("div", {
        className: contentClassName
      }, entries.map(this.transcriptMapper)) : React.createElement(FormattedMessage, messages.skillNoInfoFoundError));
    }
  }]);

  return Transcript;
}(React.PureComponent);

export default Transcript;
//# sourceMappingURL=Transcript.js.map