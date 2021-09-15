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
 * @file Skills sidebar component
 * @author Box
 */
import * as React from 'react';
import flow from 'lodash/flow';
import getProp from 'lodash/get';
import noop from 'lodash/noop';
import { FormattedMessage } from 'react-intl';
import API from '../../api';
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';
import messages from '../common/messages';
import SidebarContent from './SidebarContent';
import SidebarSkills from './skills/SidebarSkills';
import { EVENT_JS_READY } from '../common/logger/constants';
import { mark } from '../../utils/performance';
import { withAPIContext } from '../common/api-context';
import { withErrorBoundary } from '../common/error-boundary';
import { withLogger } from '../common/logger';
import { FIELD_PERMISSIONS_CAN_UPLOAD, SKILLS_TRANSCRIPT, ORIGIN_SKILLS_SIDEBAR, SIDEBAR_VIEW_SKILLS } from '../../constants';
import './SkillsSidebar.scss';
var MARK_NAME_JS_READY = "".concat(ORIGIN_SKILLS_SIDEBAR, "_").concat(EVENT_JS_READY);
mark(MARK_NAME_JS_READY);

var SkillsSidebar =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(SkillsSidebar, _React$PureComponent);

  function SkillsSidebar(props) {
    var _this;

    _classCallCheck(this, SkillsSidebar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SkillsSidebar).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      errors: {}
    });

    _defineProperty(_assertThisInitialized(_this), "fetchSkillsSuccessCallback", function (cards) {
      _this.updatePreviewTranscript(cards);

      _this.setState({
        cards: cards
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updatePreviewTranscript", function (cards) {
      var _this$props = _this.props,
          getPreview = _this$props.getPreview,
          getViewer = _this$props.getViewer;
      var preview = getPreview ? getPreview() : null;
      var viewer = getViewer ? getViewer() : null;
      var transcriptCard = cards.find(function (card) {
        return card.skill_card_type === SKILLS_TRANSCRIPT;
      });

      if (!transcriptCard || !preview) {
        return;
      }

      if (!viewer) {
        preview.addListener('load', function (_ref) {
          var loadedViewer = _ref.viewer;

          if (typeof loadedViewer.loadAutoGeneratedCaptions === 'function') {
            loadedViewer.loadAutoGeneratedCaptions(transcriptCard);
          }
        });
      } else if (typeof viewer.loadAutoGeneratedCaptions === 'function') {
        viewer.loadAutoGeneratedCaptions(transcriptCard);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSaveSuccessHandler", function (index, updatedCards) {
      var errors = _this.state.errors;

      var clone = _objectSpread({}, errors);

      delete clone[index];

      _this.updatePreviewTranscript(updatedCards);

      _this.setState({
        cards: updatedCards,
        errors: clone
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSaveErrorHandler", function (index) {
      var errors = _this.state.errors;

      var clone = _objectSpread({}, errors);

      clone[index] = true;

      _this.setState({
        errors: clone
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSave", function (index) {
      var removes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var adds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var replaces = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      var _this$props2 = _this.props,
          api = _this$props2.api,
          file = _this$props2.file;
      var _this$state$cards = _this.state.cards,
          cards = _this$state$cards === void 0 ? [] : _this$state$cards;
      var card = cards[index];
      var path = "/cards/".concat(index);
      var ops = [];
      var canEdit = getProp(file, FIELD_PERMISSIONS_CAN_UPLOAD, false);

      if (!canEdit || !card) {
        return;
      }

      if (Array.isArray(replaces)) {
        replaces.forEach(function (_ref2) {
          var replaced = _ref2.replaced,
              replacement = _ref2.replacement;
          var idx = card.entries.findIndex(function (entry) {
            return entry === replaced;
          });

          if (idx > -1) {
            ops.push({
              op: 'replace',
              path: "".concat(path, "/entries/").concat(idx),
              value: replacement
            });
          }
        });
      }

      if (Array.isArray(removes)) {
        var deletes = [];
        removes.forEach(function (removed) {
          var idx = card.entries.findIndex(function (entry) {
            return entry === removed;
          });

          if (idx > -1) {
            deletes.push(idx);
          }
        }); // To maintain metadata index positions, removes should be
        // done is reverse order with largest index being removed first.
        // Remove operations are atomic and don't happen in batch.

        deletes.sort(function (a, b) {
          return b - a;
        }) // number sort in descending order
        .forEach(function (idx) {
          ops.push({
            op: 'remove',
            path: "".concat(path, "/entries/").concat(idx)
          });
        });
      }

      if (Array.isArray(adds)) {
        adds.forEach(function (added) {
          ops.push({
            op: 'add',
            path: "".concat(path, "/entries/-"),
            value: added
          });
        });
      } // If no ops, don't proceed


      if (ops.length === 0) {
        return;
      } // Add test ops before any other ops


      ops.splice(0, 0, {
        op: 'test',
        path: path,
        value: card
      });
      api.getMetadataAPI(false).updateSkills(file, ops, function (updatedCards) {
        _this.onSaveSuccessHandler(index, updatedCards);
      }, function () {
        _this.onSaveErrorHandler(index);
      });
    });

    var logger = _this.props.logger;
    logger.onReadyMetric({
      endMarkName: MARK_NAME_JS_READY
    });
    return _this;
  }

  _createClass(SkillsSidebar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props3 = this.props,
          api = _this$props3.api,
          file = _this$props3.file;
      api.getMetadataAPI(false).getSkills(file, this.fetchSkillsSuccessCallback, noop);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref3) {
      var prevRefreshIdentity = _ref3.refreshIdentity;
      var _this$props4 = this.props,
          api = _this$props4.api,
          file = _this$props4.file,
          refreshIdentity = _this$props4.refreshIdentity;

      if (refreshIdentity !== prevRefreshIdentity) {
        api.getMetadataAPI(false).getSkills(file, this.fetchSkillsSuccessCallback, noop);
      }
    }
    /**
     * Handles skills fetch success
     *
     * @private
     * @param {Array<SkillCard>} cards - Skills cards
     * @return {void}
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          file = _this$props5.file,
          getViewer = _this$props5.getViewer,
          elementId = _this$props5.elementId;
      var _this$state = this.state,
          cards = _this$state.cards,
          errors = _this$state.errors;
      return React.createElement(SidebarContent, {
        className: "bcs-skills",
        elementId: elementId,
        sidebarView: SIDEBAR_VIEW_SKILLS,
        title: React.createElement(FormattedMessage, messages.sidebarSkillsTitle)
      }, cards ? React.createElement(SidebarSkills, {
        cards: cards,
        errors: errors,
        file: file,
        getViewer: getViewer,
        onSkillChange: this.onSave
      }) : React.createElement(LoadingIndicator, null));
    }
  }]);

  return SkillsSidebar;
}(React.PureComponent);

export { SkillsSidebar as SkillsSidebarComponent };
export default flow([withLogger(ORIGIN_SKILLS_SIDEBAR), withErrorBoundary(ORIGIN_SKILLS_SIDEBAR), withAPIContext])(SkillsSidebar);
//# sourceMappingURL=SkillsSidebar.js.map