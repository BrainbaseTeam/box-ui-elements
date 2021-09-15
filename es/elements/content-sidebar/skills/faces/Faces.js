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
 * @file Faces Skill Card component
 * @author Box
 */
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import PlainButton from '../../../../components/plain-button/PlainButton';
import PrimaryButton from '../../../../components/primary-button/PrimaryButton';
import LoadingIndicatorWrapper from '../../../../components/loading-indicator/LoadingIndicatorWrapper';
import InlineError from '../../../../components/inline-error/InlineError';
import Tooltip from '../../../../components/tooltip/Tooltip';
import Button from '../../../../components/button/Button';
import IconEdit from '../../../../icons/general/IconEdit';
import messages from '../../../common/messages';
import { SKILLS_TARGETS } from '../../../common/interactionTargets';
import Face from './Face';
import Timeline from '../timeline';
import './Faces.scss';

var Faces =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Faces, _React$PureComponent);

  /**
   * [constructor]
   *
   * @public
   * @return {Faces}
   */
  function Faces(props) {
    var _this;

    _classCallCheck(this, Faces);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Faces).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggleIsEditing", function () {
      _this.setState(function (prevState) {
        return {
          isEditing: !prevState.isEditing
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSelect", function (face) {
      var selected = _this.state.selected;

      _this.setState({
        selected: selected === face ? undefined : face
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDelete", function (face) {
      var removes = _this.state.removes;
      removes.push(face);

      _this.setState({
        removes: removes.slice(0)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSave", function () {
      var onSkillChange = _this.props.onSkillChange;
      var removes = _this.state.removes;

      _this.toggleIsEditing();

      if (removes.length > 0) {
        _this.setState({
          isLoading: true
        });

        onSkillChange(removes);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onCancel", function () {
      _this.resetState(_this.props);
    });

    _this.state = {
      faces: props.card.entries,
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


  _createClass(Faces, [{
    key: "resetState",
    value: function resetState(props) {
      this.setState({
        faces: props.card.entries,
        removes: [],
        isEditing: false,
        selected: undefined,
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
     * Renders the faces
     *
     * @private
     * @return {void}
     */
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          card = _this$props.card,
          isEditable = _this$props.isEditable,
          getViewer = _this$props.getViewer;
      var _this$state = this.state,
          selected = _this$state.selected,
          faces = _this$state.faces,
          removes = _this$state.removes,
          isEditing = _this$state.isEditing,
          hasError = _this$state.hasError,
          isLoading = _this$state.isLoading;
      var duration = card.duration;
      var hasFaces = faces.length > 0;
      var entries = faces.filter(function (face) {
        return !removes.includes(face);
      });
      var editClassName = classNames('be-face-edit', {
        'be-faces-is-editing': isEditing
      });
      return React.createElement(LoadingIndicatorWrapper, {
        className: "be-faces",
        isLoading: isLoading
      }, hasFaces && isEditable && !isLoading && React.createElement(Tooltip, {
        text: React.createElement(FormattedMessage, messages.editLabel)
      }, React.createElement(PlainButton, {
        className: editClassName,
        "data-resin-target": SKILLS_TARGETS.FACES.EDIT,
        onClick: this.toggleIsEditing,
        type: "button"
      }, React.createElement(IconEdit, null))), hasError && React.createElement(InlineError, {
        title: React.createElement(FormattedMessage, messages.sidebarSkillsErrorTitle)
      }, React.createElement(FormattedMessage, messages.sidebarSkillsErrorContent)), hasFaces ? entries.map(function (face, index) {
        return (
          /* eslint-disable react/no-array-index-key */
          React.createElement(Face, {
            key: index,
            face: face,
            isEditing: isEditing,
            onDelete: _this2.onDelete,
            onSelect: _this2.onSelect,
            selected: selected
          })
          /* eslint-enable react/no-array-index-key */

        );
      }) : React.createElement(FormattedMessage, messages.skillNoInfoFoundError), !!selected && !isEditing && Array.isArray(selected.appears) && selected.appears.length > 0 && React.createElement(Timeline, {
        duration: duration,
        getViewer: getViewer,
        interactionTarget: SKILLS_TARGETS.FACES.TIMELINE,
        timeslices: selected.appears
      }), isEditing && React.createElement("div", {
        className: "be-faces-buttons"
      }, React.createElement(Button, {
        "data-resin-target": SKILLS_TARGETS.FACES.EDIT_CANCEL,
        onClick: this.onCancel,
        type: "button"
      }, React.createElement(FormattedMessage, messages.cancel)), React.createElement(PrimaryButton, {
        "data-resin-target": SKILLS_TARGETS.FACES.EDIT_SAVE,
        onClick: this.onSave,
        type: "button"
      }, React.createElement(FormattedMessage, messages.save))));
    }
  }]);

  return Faces;
}(React.PureComponent);

export default Faces;
//# sourceMappingURL=Faces.js.map