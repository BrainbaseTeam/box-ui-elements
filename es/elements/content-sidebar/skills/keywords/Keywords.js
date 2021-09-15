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
 * @file File Keywords SkillCard component
 * @author Box
 */
import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import PlainButton from '../../../../components/plain-button/PlainButton';
import IconEdit from '../../../../icons/general/IconEdit';
import LoadingIndicatorWrapper from '../../../../components/loading-indicator/LoadingIndicatorWrapper';
import InlineError from '../../../../components/inline-error/InlineError';
import Tooltip from '../../../../components/tooltip/Tooltip';
import messages from '../../../common/messages';
import { SKILLS_TARGETS } from '../../../common/interactionTargets';
import EditableKeywords from './EditableKeywords';
import ReadOnlyKeywords from './ReadOnlyKeywords';
import './Keywords.scss';

var Keywords =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Keywords, _PureComponent);

  /**
   * [constructor]
   *
   * @public
   * @return {Keywords}
   */
  function Keywords(props) {
    var _this;

    _classCallCheck(this, Keywords);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Keywords).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggleIsEditing", function () {
      _this.setState(function (prevState) {
        return {
          isEditing: !prevState.isEditing
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onAdd", function (keyword) {
      var transcript = _this.props.transcript;
      var adds = _this.state.adds;
      var locations = [];
      var regex = new RegExp("\\b".concat(keyword.text, "\\b"), 'i');

      if (transcript && Array.isArray(transcript.entries)) {
        transcript.entries.forEach(function (_ref) {
          var text = _ref.text,
              appears = _ref.appears;

          if (text && regex.test(text) && Array.isArray(appears) && appears.length > 0) {
            locations.push(appears[0]);
          }
        });
      }

      keyword.appears = locations;
      adds.push(keyword);

      _this.setState({
        adds: adds.slice(0)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDelete", function (keyword) {
      var _this$state = _this.state,
          adds = _this$state.adds,
          removes = _this$state.removes;
      var addedIndex = adds.findIndex(function (added) {
        return added === keyword;
      });

      if (addedIndex > -1) {
        adds.splice(addedIndex, 1);

        _this.setState({
          adds: adds.slice(0)
        });
      } else {
        removes.push(keyword);

        _this.setState({
          removes: removes.slice(0)
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSave", function () {
      var onSkillChange = _this.props.onSkillChange;
      var _this$state2 = _this.state,
          removes = _this$state2.removes,
          adds = _this$state2.adds;

      _this.toggleIsEditing();

      if (removes.length > 0 || adds.length > 0) {
        _this.setState({
          isLoading: true
        });

        onSkillChange(removes, adds);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onCancel", function () {
      _this.resetState(_this.props);
    });

    _this.state = {
      keywords: props.card.entries,
      adds: [],
      removes: [],
      isEditing: props.hasError,
      hasError: props.hasError,
      isLoading: false
    };
    return _this;
  }
  /**
   * Helper to reset the state
   *
   * @private
   * @param {Object} props - component props
   * @return {void}
   */


  _createClass(Keywords, [{
    key: "resetState",
    value: function resetState(props) {
      this.setState({
        keywords: props.card.entries,
        adds: [],
        removes: [],
        isEditing: false,
        hasError: false,
        isLoading: false
      });
    }
    /**
     * Toggles the edit mode
     *
     * @private
     * @return {void}
     */

  }, {
    key: "render",

    /**
     * Renders the keywords
     *
     * @private
     * @return {void}
     */
    value: function render() {
      var _this$props = this.props,
          card = _this$props.card,
          getViewer = _this$props.getViewer,
          isEditable = _this$props.isEditable;
      var duration = card.duration;
      var _this$state3 = this.state,
          isEditing = _this$state3.isEditing,
          isLoading = _this$state3.isLoading,
          hasError = _this$state3.hasError,
          keywords = _this$state3.keywords,
          removes = _this$state3.removes,
          adds = _this$state3.adds;
      var hasKeywords = keywords.length > 0;
      var entries = keywords.filter(function (face) {
        return !removes.includes(face);
      }).concat(adds);
      var editClassName = classNames('be-keyword-edit', {
        'be-keyword-is-editing': isEditing
      });
      return React.createElement(LoadingIndicatorWrapper, {
        className: "be-keywords",
        isLoading: isLoading
      }, hasKeywords && isEditable && !isLoading && React.createElement(Tooltip, {
        text: React.createElement(FormattedMessage, messages.editLabel)
      }, React.createElement(PlainButton, {
        className: editClassName,
        "data-resin-target": SKILLS_TARGETS.KEYWORDS.EDIT,
        onClick: this.toggleIsEditing,
        type: "button"
      }, React.createElement(IconEdit, null))), hasError && React.createElement(InlineError, {
        title: React.createElement(FormattedMessage, messages.sidebarSkillsErrorTitle)
      }, React.createElement(FormattedMessage, messages.sidebarSkillsErrorContent)), isEditing && React.createElement(EditableKeywords, {
        keywords: entries,
        onAdd: this.onAdd,
        onCancel: this.onCancel,
        onDelete: this.onDelete,
        onSave: this.onSave
      }), !isEditing && hasKeywords && React.createElement(ReadOnlyKeywords, {
        duration: duration,
        getViewer: getViewer,
        keywords: entries
      }), !isEditing && !hasKeywords && React.createElement(FormattedMessage, messages.skillNoInfoFoundError));
    }
  }]);

  return Keywords;
}(PureComponent);

export default Keywords;
//# sourceMappingURL=Keywords.js.map