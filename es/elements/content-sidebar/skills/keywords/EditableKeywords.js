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
 * @file Editable Skill Keywords card component
 * @author Box
 */
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import PillSelector from '../../../../components/pill-selector-dropdown/PillSelector';
import PrimaryButton from '../../../../components/primary-button/PrimaryButton';
import Button from '../../../../components/button/Button';
import messages from '../../../common/messages';
import { SKILLS_TARGETS } from '../../../common/interactionTargets';
import getPills from './keywordUtils';
import './EditableKeywords.scss';

var EditableKeywords =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(EditableKeywords, _React$PureComponent);

  /**
   * [constructor]
   *
   * @public
   * @return {EditableKeywords}
   */
  function EditableKeywords(props) {
    var _this;

    _classCallCheck(this, EditableKeywords);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EditableKeywords).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onRemove", function (option, index) {
      // eslint-disable-line
      var _this$props = _this.props,
          onDelete = _this$props.onDelete,
          keywords = _this$props.keywords;
      onDelete(keywords[index]);
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (_ref) {
      var key = _ref.key;

      if (key === 'Enter' && !_this.state.isInCompositionMode) {
        _this.onBlur();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function () {
      var onAdd = _this.props.onAdd;
      var keyword = _this.state.keyword;

      if (keyword) {
        onAdd({
          type: 'text',
          text: keyword
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onCompositionStart", function () {
      _this.setState({
        isInCompositionMode: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onCompositionEnd", function () {
      _this.setState({
        isInCompositionMode: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onInput", function (event) {
      var currentTarget = event.currentTarget;

      _this.setState({
        keyword: currentTarget.value
      });
    });

    _this.state = {
      pills: getPills(props.keywords),
      keyword: '',
      isInCompositionMode: false
    };
    return _this;
  }
  /**
   * Called when keywords gets new properties.
   * Should reset to original state.
   *
   * @private
   * @param {Object} nextProps - component props
   * @return {void}
   */


  _createClass(EditableKeywords, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref2) {
      var prevKeywords = _ref2.keywords;
      var keywords = this.props.keywords;

      if (prevKeywords !== keywords) {
        this.setState({
          pills: getPills(keywords),
          keyword: ''
        });
      }
    }
    /**
     * Called when keywords gets new properties.
     * Should reset to original state.
     *
     * @private
     * @param {Object} option - pill
     * @param {number} index - pill index
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
      var _this$props2 = this.props,
          onSave = _this$props2.onSave,
          onCancel = _this$props2.onCancel;
      var _this$state = this.state,
          pills = _this$state.pills,
          keyword = _this$state.keyword;
      return React.createElement("span", {
        className: "bdl-EditableKeywords"
      }, React.createElement(PillSelector, {
        onBlur: this.onBlur,
        onCompositionEnd: this.onCompositionEnd,
        onCompositionStart: this.onCompositionStart,
        onInput: this.onInput,
        onKeyDown: this.onKeyDown,
        onPaste: this.onInput,
        onRemove: this.onRemove,
        selectedOptions: pills,
        value: keyword
      }), React.createElement("div", {
        className: "be-keywords-buttons"
      }, React.createElement(Button, {
        "data-resin-target": SKILLS_TARGETS.KEYWORDS.EDIT_CANCEL,
        onClick: onCancel,
        type: "button"
      }, React.createElement(FormattedMessage, messages.cancel)), React.createElement(PrimaryButton, {
        "data-resin-target": SKILLS_TARGETS.KEYWORDS.EDIT_SAVE,
        onClick: onSave,
        type: "button"
      }, React.createElement(FormattedMessage, messages.save))));
    }
  }]);

  return EditableKeywords;
}(React.PureComponent);

export default EditableKeywords;
//# sourceMappingURL=EditableKeywords.js.map