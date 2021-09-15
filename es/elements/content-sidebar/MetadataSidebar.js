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
 * @file Metadata sidebar component
 * @author Box
 */
import * as React from 'react';
import flow from 'lodash/flow';
import getProp from 'lodash/get';
import noop from 'lodash/noop';
import { FormattedMessage } from 'react-intl';
import API from '../../api';
import EmptyContent from '../../features/metadata-instance-editor/EmptyContent';
import InlineError from '../../components/inline-error/InlineError';
import Instances from '../../features/metadata-instance-editor/Instances';
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';
import LoadingIndicatorWrapper from '../../components/loading-indicator/LoadingIndicatorWrapper';
import messages from '../common/messages';
import SidebarContent from './SidebarContent';
import TemplateDropdown from '../../features/metadata-instance-editor/TemplateDropdown';
import { normalizeTemplates } from '../../features/metadata-instance-editor/metadataUtil';
import { EVENT_JS_READY } from '../common/logger/constants';
import { isUserCorrectableError } from '../../utils/error';
import { mark } from '../../utils/performance';
import { withAPIContext } from '../common/api-context';
import { withErrorBoundary } from '../common/error-boundary';
import { withLogger } from '../common/logger';
import { FIELD_IS_EXTERNALLY_OWNED, FIELD_PERMISSIONS, FIELD_PERMISSIONS_CAN_UPLOAD, IS_ERROR_DISPLAYED, ORIGIN_METADATA_SIDEBAR, SIDEBAR_VIEW_METADATA } from '../../constants';
import './MetadataSidebar.scss';
var MARK_NAME_JS_READY = "".concat(ORIGIN_METADATA_SIDEBAR, "_").concat(EVENT_JS_READY);
mark(MARK_NAME_JS_READY);

var MetadataSidebar =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(MetadataSidebar, _React$PureComponent);

  function MetadataSidebar(props) {
    var _this;

    _classCallCheck(this, MetadataSidebar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MetadataSidebar).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isLoading: false
    });

    _defineProperty(_assertThisInitialized(_this), "onApiError", function (error, code) {
      var newState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var onError = _this.props.onError;
      var status = error.status;
      var isValidError = isUserCorrectableError(status);

      _this.setState(_objectSpread({
        error: messages.sidebarMetadataEditingErrorContent,
        isLoading: false
      }, newState));

      onError(error, code, _defineProperty({
        error: error
      }, IS_ERROR_DISPLAYED, isValidError));
    });

    _defineProperty(_assertThisInitialized(_this), "onRemove", function (id) {
      var api = _this.props.api;
      var file = _this.state.file;

      var editor = _this.getEditor(id);

      if (!editor || !file) {
        return;
      }

      api.getMetadataAPI(false).deleteMetadata(file, editor.template, function () {
        return _this.onRemoveSuccessHandler(editor);
      }, _this.onApiError);
    });

    _defineProperty(_assertThisInitialized(_this), "onAddSuccessHandler", function (editor) {
      var _this$state$editors = _this.state.editors,
          editors = _this$state$editors === void 0 ? [] : _this$state$editors;
      var clone = editors.slice(0);
      clone.push(editor);

      _this.setState({
        editors: clone,
        isLoading: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onAdd", function (template) {
      var api = _this.props.api;
      var file = _this.state.file;

      if (!file) {
        return;
      }

      _this.setState({
        isLoading: true
      });

      api.getMetadataAPI(false).createMetadata(file, template, _this.onAddSuccessHandler, _this.onApiError);
    });

    _defineProperty(_assertThisInitialized(_this), "onSave", function (id, ops) {
      var api = _this.props.api;
      var file = _this.state.file;

      var oldEditor = _this.getEditor(id);

      if (!oldEditor || !file) {
        return;
      }

      api.getMetadataAPI(false).updateMetadata(file, oldEditor.template, ops, function (newEditor) {
        _this.replaceEditor(oldEditor, newEditor);
      }, function (error, code) {
        _this.onSaveErrorHandler(oldEditor, error, code);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onModification", function (id, isDirty) {
      var oldEditor = _this.getEditor(id);

      if (!oldEditor) {
        return;
      }

      var newEditor = _objectSpread({}, oldEditor, {
        isDirty: isDirty
      }); // shallow clone suffices for isDirty setting


      _this.replaceEditor(oldEditor, newEditor);
    });

    _defineProperty(_assertThisInitialized(_this), "fetchMetadataErrorCallback", function (e, code) {
      _this.onApiError(e, code, {
        editors: undefined,
        error: messages.sidebarMetadataFetchingErrorContent,
        templates: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fetchMetadataSuccessCallback", function (_ref) {
      var editors = _ref.editors,
          templates = _ref.templates;
      var _this$props = _this.props,
          selectedTemplateKey = _this$props.selectedTemplateKey,
          templateFilters = _this$props.templateFilters;

      _this.setState({
        editors: editors.slice(0),
        // cloned for potential editing
        error: undefined,
        isLoading: false,
        templates: normalizeTemplates(templates, selectedTemplateKey, templateFilters)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fetchFileErrorCallback", function (e, code) {
      _this.onApiError(e, code, {
        error: messages.sidebarFileFetchingErrorContent,
        file: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fetchFileSuccessCallback", function (file) {
      var currentFile = _this.state.file;
      var currentCanUpload = getProp(currentFile, FIELD_PERMISSIONS_CAN_UPLOAD, false);
      var newCanUpload = getProp(file, FIELD_PERMISSIONS_CAN_UPLOAD, false);
      var shouldFetchMetadata = !currentFile || currentCanUpload !== newCanUpload;
      var callback = shouldFetchMetadata ? _this.fetchMetadata : noop;

      _this.setState({
        file: file
      }, callback);
    });

    var logger = _this.props.logger;
    logger.onReadyMetric({
      endMarkName: MARK_NAME_JS_READY
    });
    return _this;
  }

  _createClass(MetadataSidebar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchFile();
    }
    /**
     * Common error callback
     *
     * @param {Error} error - API error
     * @param {string} code - error code
     * @param {Object} [newState] - optional state to set
     * @return {void}
     */

  }, {
    key: "canEdit",

    /**
     * Checks upload permission
     *
     * @return {boolean} - true if metadata can be edited
     */
    value: function canEdit() {
      var file = this.state.file;
      return getProp(file, FIELD_PERMISSIONS_CAN_UPLOAD, false);
    }
    /**
     * Finds the editor we are editing
     *
     * @param {number} id - instance id
     * @return {Object} editor instance
     */

  }, {
    key: "getEditor",
    value: function getEditor(id) {
      var _this$state$editors2 = this.state.editors,
          editors = _this$state$editors2 === void 0 ? [] : _this$state$editors2;
      return editors.find(function (_ref2) {
        var instance = _ref2.instance;
        return instance.id === id;
      });
    }
    /**
     * Instance remove success handler
     *
     * @param {Object} editor - the editor to remove
     * @return {void}
     */

  }, {
    key: "onRemoveSuccessHandler",
    value: function onRemoveSuccessHandler(editor) {
      var _this$state$editors3 = this.state.editors,
          editors = _this$state$editors3 === void 0 ? [] : _this$state$editors3;
      var clone = editors.slice(0);
      clone.splice(editors.indexOf(editor), 1);
      this.setState({
        editors: clone
      });
    }
    /**
     * Instance remove handler
     *
     * @param {string} id - instance id
     * @return {void}
     */

  }, {
    key: "replaceEditor",

    /**
     * Instance save success handler
     *
     * @param {Object} oldEditor - prior editor
     * @param {Object} newEditor - updated editor
     * @return {void}
     */
    value: function replaceEditor(oldEditor, newEditor) {
      var _this$state$editors4 = this.state.editors,
          editors = _this$state$editors4 === void 0 ? [] : _this$state$editors4;
      var clone = editors.slice(0);
      clone.splice(editors.indexOf(oldEditor), 1, newEditor);
      this.setState({
        editors: clone
      });
    }
    /**
     * Instance save error handler
     *
     * @param {Object} oldEditor - prior editor
     * @param {Object} error - api error
     * @param {string} code - error code
     * @return {void}
     */

  }, {
    key: "onSaveErrorHandler",
    value: function onSaveErrorHandler(oldEditor, error, code) {
      var clone = _objectSpread({}, oldEditor, {
        hasError: true
      }); // shallow clone suffices for hasError setting


      this.replaceEditor(oldEditor, clone);
      this.onApiError(error, code);
    }
    /**
     * Instance save handler
     *
     * @param {string} id - instance id
     * @param {Array} ops - json patch ops
     * @return {void}
     */

  }, {
    key: "fetchMetadata",

    /**
     * Fetches the metadata editors
     *
     * @return {void}
     */
    value: function fetchMetadata() {
      var _this$props2 = this.props,
          api = _this$props2.api,
          isFeatureEnabled = _this$props2.isFeatureEnabled;
      var file = this.state.file;

      if (!file) {
        return;
      }

      api.getMetadataAPI(false).getMetadata(file, this.fetchMetadataSuccessCallback, this.fetchMetadataErrorCallback, isFeatureEnabled, {
        refreshCache: true
      });
    }
    /**
     * Handles a failed file fetch
     *
     * @private
     * @param {Error} e - API error
     * @param {string} code - error code
     * @return {void}
     */

  }, {
    key: "fetchFile",

    /**
     * Fetches a file with the fields needed for metadata sidebar
     *
     * @return {void}
     */
    value: function fetchFile() {
      var _this$props3 = this.props,
          api = _this$props3.api,
          fileId = _this$props3.fileId;
      api.getFileAPI().getFile(fileId, this.fetchFileSuccessCallback, this.fetchFileErrorCallback, {
        fields: [FIELD_IS_EXTERNALLY_OWNED, FIELD_PERMISSIONS],
        refreshCache: true // see implications in file success callback

      });
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.fetchMetadata();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          editors = _this$state.editors,
          file = _this$state.file,
          error = _this$state.error,
          isLoading = _this$state.isLoading,
          templates = _this$state.templates;
      var _this$props4 = this.props,
          elementId = _this$props4.elementId,
          selectedTemplateKey = _this$props4.selectedTemplateKey;
      var showEditor = !!file && !!templates && !!editors;
      var showLoadingIndicator = !error && !showEditor;
      var canEdit = this.canEdit();
      var showTemplateDropdown = showEditor && canEdit;
      var showEmptyContent = showEditor && editors.length === 0;
      return React.createElement(SidebarContent, {
        actions: showTemplateDropdown ? React.createElement(TemplateDropdown, {
          hasTemplates: templates && templates.length !== 0,
          isDropdownBusy: false,
          onAdd: this.onAdd // $FlowFixMe checked via showTemplateDropdown & showEditor
          ,
          templates: templates // $FlowFixMe checked via showTemplateDropdown & showEditor
          ,
          usedTemplates: editors.map(function (editor) {
            return editor.template;
          })
        }) : null,
        className: "bcs-metadata",
        elementId: elementId,
        sidebarView: SIDEBAR_VIEW_METADATA,
        title: React.createElement(FormattedMessage, messages.sidebarMetadataTitle)
      }, error && React.createElement(InlineError, {
        title: React.createElement(FormattedMessage, messages.error)
      }, React.createElement(FormattedMessage, error)), showLoadingIndicator && React.createElement(LoadingIndicator, null), showEditor && React.createElement(LoadingIndicatorWrapper, {
        className: "metadata-instance-editor",
        isLoading: isLoading
      }, showEmptyContent ? React.createElement(EmptyContent, {
        canAdd: canEdit
      }) : React.createElement(Instances, {
        editors: editors,
        onModification: this.onModification,
        onRemove: this.onRemove,
        onSave: this.onSave,
        selectedTemplateKey: selectedTemplateKey
      })));
    }
  }]);

  return MetadataSidebar;
}(React.PureComponent);

_defineProperty(MetadataSidebar, "defaultProps", {
  isFeatureEnabled: true
});

export { MetadataSidebar as MetadataSidebarComponent };
export default flow([withLogger(ORIGIN_METADATA_SIDEBAR), withErrorBoundary(ORIGIN_METADATA_SIDEBAR), withAPIContext])(MetadataSidebar);
//# sourceMappingURL=MetadataSidebar.js.map