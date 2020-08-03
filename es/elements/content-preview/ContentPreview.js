function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
 * @file Content Preview Component
 * @author Box
 */
import 'regenerator-runtime/runtime';
import * as React from 'react';
import classNames from 'classnames';
import uniqueid from 'lodash/uniqueId';
import throttle from 'lodash/throttle';
import cloneDeep from 'lodash/cloneDeep';
import omit from 'lodash/omit';
import getProp from 'lodash/get';
import flow from 'lodash/flow';
import noop from 'lodash/noop';
import Measure from 'react-measure';
import { decode } from '../../utils/keys';
import makeResponsive from '../common/makeResponsive';
import Internationalize from '../common/Internationalize';
import AsyncLoad from '../common/async-load';
import TokenService from '../../utils/TokenService';
import { isInputElement, focus } from '../../utils/dom';
import { getTypedFileId } from '../../utils/file';
import { withErrorBoundary } from '../common/error-boundary';
import { withLogger } from '../common/logger';
import { PREVIEW_FIELDS_TO_FETCH } from '../../utils/fields';
import { mark } from '../../utils/performance';
import { withFeatureProvider } from '../common/feature-checking';
import { EVENT_JS_READY } from '../common/logger/constants';
import ReloadNotification from './ReloadNotification';
import API from '../../api';
import PreviewHeader from './preview-header';
import PreviewNavigation from './PreviewNavigation';
import PreviewLoading from './PreviewLoading';
import { DEFAULT_HOSTNAME_API, DEFAULT_HOSTNAME_APP, DEFAULT_HOSTNAME_STATIC, DEFAULT_PREVIEW_VERSION, DEFAULT_LOCALE, DEFAULT_PATH_STATIC_PREVIEW, CLIENT_NAME_CONTENT_PREVIEW, ORIGIN_PREVIEW, ORIGIN_CONTENT_PREVIEW, ERROR_CODE_UNKNOWN } from '../../constants';
import '../common/fonts.scss';
import '../common/base.scss';
import './ContentPreview.scss';
var InvalidIdError = new Error('Invalid id for Preview!');
var PREVIEW_LOAD_METRIC_EVENT = 'load';
var MARK_NAME_JS_READY = "".concat(ORIGIN_CONTENT_PREVIEW, "_").concat(EVENT_JS_READY);
mark(MARK_NAME_JS_READY);
var LoadableSidebar = AsyncLoad({
  loader: function loader() {
    return import(
    /* webpackMode: "lazy", webpackChunkName: "content-sidebar" */
    '../content-sidebar');
  }
});

var ContentPreview = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(ContentPreview, _React$PureComponent);

  var _super = _createSuper(ContentPreview);

  // Defines a generic type for ContentSidebar, since an import would interfere with code splitting

  /**
   * [constructor]
   *
   * @return {ContentPreview}
   */
  function ContentPreview(props) {
    var _this;

    _classCallCheck(this, ContentPreview);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "contentSidebar", /*#__PURE__*/React.createRef());

    _defineProperty(_assertThisInitialized(_this), "initialState", {
      error: undefined,
      isReloadNotificationVisible: false,
      isThumbnailSidebarOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "onPreviewError", function (_ref) {
      var error = _ref.error,
          rest = _objectWithoutProperties(_ref, ["error"]);

      var _error$code = error.code,
          code = _error$code === void 0 ? ERROR_CODE_UNKNOWN : _error$code;
      var onError = _this.props.onError; // In case of error, there should be no thumbnail sidebar to account for

      _this.setState({
        isThumbnailSidebarOpen: false
      });

      onError(error, code, _objectSpread(_objectSpread({}, rest), {}, {
        error: error
      }), ORIGIN_PREVIEW);
    });

    _defineProperty(_assertThisInitialized(_this), "onPreviewMetric", function (previewMetrics) {
      var logger = _this.props.logger;
      var event_name = previewMetrics.event_name;

      var metrics = _objectSpread({}, previewMetrics); // We need to add in the total file fetch time to the file_info_time and value (total)
      // as preview does not do the files call


      if (event_name === PREVIEW_LOAD_METRIC_EVENT) {
        var totalFetchFileTime = _this.getTotalFileFetchTime();

        var totalTime = (previewMetrics.value || 0) + totalFetchFileTime; // If an unnatural load time occurs or is invalid, don't log a load event

        if (!totalTime) {
          return;
        }

        metrics = _objectSpread(_objectSpread({}, previewMetrics), {}, {
          file_info_time: totalFetchFileTime,
          value: totalTime
        });
      }

      logger.onPreviewMetric(metrics);
    });

    _defineProperty(_assertThisInitialized(_this), "onPreviewLoad", function (data) {
      var _this$props = _this.props,
          onLoad = _this$props.onLoad,
          collection = _this$props.collection;

      var currentIndex = _this.getFileIndex();

      var filesToPrefetch = collection.slice(currentIndex + 1, currentIndex + 5);
      var previewTimeMetrics = getProp(data, 'metrics.time');
      var loadData = data;

      if (previewTimeMetrics) {
        var totalPreviewMetrics = _this.addFetchFileTimeToPreviewMetrics(previewTimeMetrics);

        loadData = _objectSpread(_objectSpread({}, loadData), {}, {
          metrics: _objectSpread(_objectSpread({}, loadData.metrics), {}, {
            time: totalPreviewMetrics
          })
        });
      }

      onLoad(loadData);

      _this.focusPreview();

      if (_this.preview && filesToPrefetch.length > 1) {
        _this.prefetch(filesToPrefetch);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "loadPreview", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _this$props2, enableThumbnailsSidebar, fileOptions, tokenOrTokenFunction, rest, _this$state, file, selectedVersion, fileId, fileOpts, token, previewOptions, Preview;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props2 = _this.props, enableThumbnailsSidebar = _this$props2.enableThumbnailsSidebar, fileOptions = _this$props2.fileOptions, tokenOrTokenFunction = _this$props2.token, rest = _objectWithoutProperties(_this$props2, ["enableThumbnailsSidebar", "fileOptions", "token"]);
              _this$state = _this.state, file = _this$state.file, selectedVersion = _this$state.selectedVersion;

              if (!(!_this.isPreviewLibraryLoaded() || !file || !tokenOrTokenFunction)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return");

            case 4:
              fileId = _this.getFileId(file);

              if (!(fileId !== _this.state.currentFileId)) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return");

            case 7:
              fileOpts = _objectSpread({}, fileOptions);

              token = function token(typedId) {
                return TokenService.getReadTokens(typedId, tokenOrTokenFunction);
              };

              if (selectedVersion) {
                fileOpts[fileId] = fileOpts[fileId] || {};
                fileOpts[fileId].fileVersionId = selectedVersion.id;
              }

              previewOptions = {
                container: "#".concat(_this.id, " .bcpr-content"),
                enableThumbnailsSidebar: enableThumbnailsSidebar,
                fileOptions: fileOpts,
                header: 'none',
                headerElement: "#".concat(_this.id, " .bcpr-PreviewHeader"),
                showAnnotations: _this.canViewAnnotations(),
                showDownload: _this.canDownload(),
                skipServerUpdate: true,
                useHotkeys: false
              };
              Preview = global.Box.Preview;
              _this.preview = new Preview();

              _this.preview.addListener('load', _this.onPreviewLoad);

              _this.preview.addListener('preview_error', _this.onPreviewError);

              _this.preview.addListener('preview_metric', _this.onPreviewMetric);

              _this.preview.addListener('thumbnailsOpen', function () {
                return _this.setState({
                  isThumbnailSidebarOpen: true
                });
              });

              _this.preview.addListener('thumbnailsClose', function () {
                return _this.setState({
                  isThumbnailSidebarOpen: false
                });
              });

              _this.preview.updateFileCache([file]);

              _this.preview.show(file.id, token, _objectSpread(_objectSpread({}, previewOptions), omit(rest, Object.keys(previewOptions))));

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this), "loadFileFromStage", function () {
      if (_this.stagedFile) {
        _this.setState(_objectSpread(_objectSpread({}, _this.initialState), {}, {
          file: _this.stagedFile
        }), function () {
          _this.stagedFile = undefined;
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "closeReloadNotification", function () {
      _this.setState({
        isReloadNotificationVisible: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onResize", function () {
      if (_this.preview && _this.preview.getCurrentViewer()) {
        _this.preview.resize();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "fetchFileSuccessCallback", function (file) {
      _this.fetchFileEndTime = performance.now();
      var currentFile = _this.state.file;
      var isExistingFile = currentFile ? currentFile.id === file.id : false;
      var isWatermarked = getProp(file, 'watermark_info.is_watermarked', false); // If the file is watermarked or if its a new file, then update the state
      // In this case preview should reload without prompting the user

      if (isWatermarked || !isExistingFile) {
        _this.setState(_objectSpread(_objectSpread({}, _this.initialState), {}, {
          file: file
        })); // $FlowFixMe file version and sha1 should exist at this point

      } else if (currentFile.file_version.sha1 !== file.file_version.sha1) {
        // If we are already prevewing the file that got updated then show the
        // user a notification to reload the file only if its sha1 changed
        _this.stagedFile = file;

        _this.setState(_objectSpread(_objectSpread({}, _this.initialState), {}, {
          isReloadNotificationVisible: true
        }));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "fetchFileErrorCallback", function (fileError, code) {
      var onError = _this.props.onError;
      var errorCode = fileError.code || code;
      var error = {
        code: errorCode,
        message: fileError.message
      };

      _this.setState({
        error: error,
        file: undefined
      });

      onError(fileError, errorCode, {
        error: fileError
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getPreview", function () {
      var file = _this.state.file;

      if (!_this.preview || !file) {
        return null;
      }

      return _this.preview;
    });

    _defineProperty(_assertThisInitialized(_this), "getViewer", function () {
      var preview = _this.getPreview();

      var viewer = preview ? preview.getCurrentViewer() : null;
      return viewer && viewer.isLoaded() && !viewer.isDestroyed() ? viewer : null;
    });

    _defineProperty(_assertThisInitialized(_this), "navigateLeft", function () {
      var currentIndex = _this.getFileIndex();

      var newIndex = currentIndex === 0 ? 0 : currentIndex - 1;

      if (newIndex !== currentIndex) {
        _this.navigateToIndex(newIndex);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "navigateRight", function () {
      var collection = _this.props.collection;

      var currentIndex = _this.getFileIndex();

      var newIndex = currentIndex === collection.length - 1 ? collection.length - 1 : currentIndex + 1;

      if (newIndex !== currentIndex) {
        _this.navigateToIndex(newIndex);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "download", function () {
      var onDownload = _this.props.onDownload;
      var file = _this.state.file;

      if (_this.preview) {
        _this.preview.download();

        onDownload(cloneDeep(file));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "print", function () {
      if (_this.preview) {
        _this.preview.print();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseMove", throttle(function () {
      var viewer = _this.getViewer();

      var isPreviewing = !!viewer;
      var CLASS_NAVIGATION_VISIBILITY = 'bcpr-nav-is-visible';
      clearTimeout(_this.mouseMoveTimeoutID);

      if (!_this.previewContainer) {
        return;
      } // Always assume that navigation arrows will be hidden


      _this.previewContainer.classList.remove(CLASS_NAVIGATION_VISIBILITY); // Only show it if either we aren't previewing or if we are then the viewer
      // is not blocking the show. If we are previewing then the viewer may choose
      // to not allow navigation arrows. This is mostly useful for videos since the
      // navigation arrows may interfere with the settings menu inside video player.


      if (_this.previewContainer && (!isPreviewing || viewer.allowNavigationArrows())) {
        _this.previewContainer.classList.add(CLASS_NAVIGATION_VISIBILITY);
      }

      _this.mouseMoveTimeoutID = setTimeout(function () {
        if (_this.previewContainer) {
          _this.previewContainer.classList.remove(CLASS_NAVIGATION_VISIBILITY);
        }
      }, 1500);
    }, 1000));

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      var useHotkeys = _this.props.useHotkeys;

      if (!useHotkeys) {
        return;
      }

      var consumed = false;
      var key = decode(event);

      var viewer = _this.getViewer(); // If focus was on an input or if the viewer doesn't exist
      // then don't bother doing anything further


      if (!key || !viewer || isInputElement(event.target)) {
        return;
      }

      if (typeof viewer.onKeydown === 'function') {
        consumed = !!viewer.onKeydown(key, event.nativeEvent);
      }

      if (!consumed) {
        switch (key) {
          case 'ArrowLeft':
            _this.navigateLeft();

            consumed = true;
            break;

          case 'ArrowRight':
            _this.navigateRight();

            consumed = true;
            break;

          default: // no-op

        }
      }

      if (consumed) {
        event.preventDefault();
        event.stopPropagation();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onVersionChange", function (version) {
      var additionalVersionInfo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var onVersionChange = _this.props.onVersionChange;
      _this.updateVersionToCurrent = additionalVersionInfo.updateVersionToCurrent;
      onVersionChange(version, additionalVersionInfo);

      _this.setState({
        selectedVersion: version
      });
    });

    _defineProperty(_assertThisInitialized(_this), "containerRef", function (container) {
      _this.previewContainer = container;
    });

    var apiHost = props.apiHost,
        cache = props.cache,
        _fileId = props.fileId,
        language = props.language,
        requestInterceptor = props.requestInterceptor,
        responseInterceptor = props.responseInterceptor,
        sharedLink = props.sharedLink,
        sharedLinkPassword = props.sharedLinkPassword,
        _token = props.token;
    _this.id = uniqueid('bcpr_');
    _this.api = new API({
      apiHost: apiHost,
      cache: cache,
      clientName: CLIENT_NAME_CONTENT_PREVIEW,
      language: language,
      requestInterceptor: requestInterceptor,
      responseInterceptor: responseInterceptor,
      sharedLink: sharedLink,
      sharedLinkPassword: sharedLinkPassword,
      token: _token
    });
    _this.state = _objectSpread(_objectSpread({}, _this.initialState), {}, {
      currentFileId: _fileId,
      // eslint-disable-next-line react/no-unused-state
      prevFileIdProp: _fileId
    });
    var _logger = props.logger;

    _logger.onReadyMetric({
      endMarkName: MARK_NAME_JS_READY
    });

    return _this;
  }
  /**
   * Cleanup
   *
   * @return {void}
   */


  _createClass(ContentPreview, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Don't destroy the cache while unmounting
      this.api.destroy(false);
      this.destroyPreview();
    }
    /**
     * Cleans up the preview instance
     */

  }, {
    key: "destroyPreview",
    value: function destroyPreview() {
      if (this.preview) {
        this.preview.destroy();
        this.preview.removeAllListeners();
        this.preview = undefined;
      }

      this.setState({
        selectedVersion: undefined
      });
    }
    /**
     * Destroys api instances with caches
     *
     * @private
     * @return {void}
     */

  }, {
    key: "clearCache",
    value: function clearCache() {
      this.api.destroy(true);
    }
    /**
     * Once the component mounts, load Preview assets and fetch file info.
     *
     * @return {void}
     */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadStylesheet();
      this.loadScript();
      this.fetchFile(this.state.currentFileId);
      this.focusPreview();
    }
  }, {
    key: "componentDidUpdate",

    /**
     * After component updates, load Preview if appropriate.
     *
     * @return {void}
     */
    value: function componentDidUpdate(prevProps, prevState) {
      var token = this.props.token;
      var currentFileId = this.state.currentFileId;
      var hasFileIdChanged = prevState.currentFileId !== currentFileId;
      var hasTokenChanged = prevProps.token !== token;

      if (hasFileIdChanged) {
        this.destroyPreview();
        this.fetchFile(currentFileId);
      } else if (this.shouldLoadPreview(prevState)) {
        this.loadPreview();
      } else if (hasTokenChanged) {
        this.updatePreviewToken();
      }
    }
    /**
     * Updates the access token used by preview library
     *
     * @param {boolean} shouldReload - true if preview should be reloaded
     */

  }, {
    key: "updatePreviewToken",
    value: function updatePreviewToken() {
      var shouldReload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.preview) {
        this.preview.updateToken(this.props.token, shouldReload);
      }
    }
    /**
     * Returns whether or not preview should be loaded.
     *
     * @param {State} prevState - Previous state
     * @return {boolean}
     */

  }, {
    key: "shouldLoadPreview",
    value: function shouldLoadPreview(prevState) {
      var _this$state2 = this.state,
          file = _this$state2.file,
          selectedVersion = _this$state2.selectedVersion;
      var prevFile = prevState.file,
          prevSelectedVersion = prevState.selectedVersion;
      var prevSelectedVersionId = getProp(prevSelectedVersion, 'id');
      var selectedVersionId = getProp(selectedVersion, 'id');
      var prevFileVersionId = getProp(prevFile, 'file_version.id');
      var fileVersionId = getProp(file, 'file_version.id');
      var loadPreview = false;

      if (selectedVersionId !== prevSelectedVersionId) {
        var isPreviousCurrent = fileVersionId === prevSelectedVersionId || !prevSelectedVersionId;
        var isSelectedCurrent = fileVersionId === selectedVersionId || !selectedVersionId; // Load preview if the user has selected a non-current version of the file

        loadPreview = !isPreviousCurrent || !isSelectedCurrent;
      } else if (fileVersionId && prevFileVersionId) {
        // Load preview if the file's current version ID has changed
        loadPreview = fileVersionId !== prevFileVersionId;
      } else {
        // Load preview if file object has newly been populated in state
        loadPreview = !prevFile && !!file;
      }

      return loadPreview;
    }
    /**
     * Returns preview asset urls
     *
     * @return {string} base url
     */

  }, {
    key: "getBasePath",
    value: function getBasePath(asset) {
      var _this$props3 = this.props,
          staticHost = _this$props3.staticHost,
          staticPath = _this$props3.staticPath,
          language = _this$props3.language,
          previewLibraryVersion = _this$props3.previewLibraryVersion;
      var path = "".concat(staticPath, "/").concat(previewLibraryVersion, "/").concat(language, "/").concat(asset);
      var suffix = staticHost.endsWith('/') ? path : "/".concat(path);
      return "".concat(staticHost).concat(suffix);
    }
    /**
     * Determines if preview assets are loaded
     *
     * @return {boolean} true if preview is loaded
     */

  }, {
    key: "isPreviewLibraryLoaded",
    value: function isPreviewLibraryLoaded() {
      return !!global.Box && !!global.Box.Preview;
    }
    /**
     * Loads external css by appending a <link> element
     *
     * @return {void}
     */

  }, {
    key: "loadStylesheet",
    value: function loadStylesheet() {
      var _document = document,
          head = _document.head;
      var url = this.getBasePath('preview.css');

      if (!head || head.querySelector("link[rel=\"stylesheet\"][href=\"".concat(url, "\"]"))) {
        return;
      }

      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = url;
      head.appendChild(link);
    }
    /**
     * Loads external script by appending a <script> element
     *
     * @return {void}
     */

  }, {
    key: "loadScript",
    value: function loadScript() {
      var _document2 = document,
          head = _document2.head;
      var url = this.getBasePath('preview.js');

      if (!head || this.isPreviewLibraryLoaded()) {
        return;
      }

      var previewScript = head.querySelector("script[src=\"".concat(url, "\"]"));

      if (previewScript) {
        return;
      }

      var script = document.createElement('script');
      script.src = url;
      script.addEventListener('load', this.loadPreview);
      head.appendChild(script);
    }
    /**
     * Focuses the preview on load.
     *
     * @return {void}
     */

  }, {
    key: "focusPreview",
    value: function focusPreview() {
      var _this$props4 = this.props,
          autoFocus = _this$props4.autoFocus,
          getInnerRef = _this$props4.getInnerRef;

      if (autoFocus && !isInputElement(document.activeElement)) {
        focus(getInnerRef());
      }
    }
    /**
     * Updates preview cache and prefetches a file
     *
     * @param {BoxItem} file - file to prefetch
     * @return {void}
     */

  }, {
    key: "updatePreviewCacheAndPrefetch",
    value: function updatePreviewCacheAndPrefetch(file, token) {
      if (!this.preview || !file || !file.id) {
        return;
      }

      this.preview.updateFileCache([file]);
      this.preview.prefetch({
        fileId: file.id,
        token: token
      });
    }
    /**
     * Gets the file id
     *
     * @param {string|BoxItem} file - box file or file id
     * @return {string} file id
     */

  }, {
    key: "getFileId",
    value: function getFileId(file) {
      if (typeof file === 'string') {
        return file;
      }

      if (_typeof(file) === 'object' && !!file.id) {
        return file.id;
      }

      throw InvalidIdError;
    }
    /**
     * Prefetches the next few preview files if any
     *
     * @param {Array<string|BoxItem>} files - files to prefetch
     * @return {void}
     */

  }, {
    key: "prefetch",
    value: function () {
      var _prefetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(files) {
        var _this2 = this;

        var token, typedIds;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                token = this.props.token;
                typedIds = files.map(function (file) {
                  return getTypedFileId(_this2.getFileId(file));
                });
                _context2.next = 4;
                return TokenService.cacheTokens(typedIds, token);

              case 4:
                files.forEach(function (file) {
                  var fileId = _this2.getFileId(file);

                  _this2.fetchFile(fileId, noop, noop, {
                    refreshCache: false
                  });
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function prefetch(_x) {
        return _prefetch.apply(this, arguments);
      }

      return prefetch;
    }()
    /**
     * Calculates the total file fetch time
     *
     * @return {number} the total fetch time
     */

  }, {
    key: "getTotalFileFetchTime",
    value: function getTotalFileFetchTime() {
      if (!this.fetchFileStartTime || !this.fetchFileEndTime) {
        return 0;
      }

      return Math.round(this.fetchFileEndTime - this.fetchFileStartTime);
    }
    /**
     * Handler for 'preview_error' preview event
     *
     * @param {PreviewLibraryError} previewError - the error data emitted from preview
     * @return {void}
     */

  }, {
    key: "addFetchFileTimeToPreviewMetrics",

    /**
     * Adds in the file fetch time to the preview metrics
     *
     * @param {Object} previewTimeMetrics - the preview time metrics
     * @return {Object} the preview time metrics merged with the files call time
     */
    value: function addFetchFileTimeToPreviewMetrics(previewTimeMetrics) {
      var totalFetchFileTime = this.getTotalFileFetchTime();
      var rendering = previewTimeMetrics.rendering,
          conversion = previewTimeMetrics.conversion,
          preload = previewTimeMetrics.preload; // We need to add in the total file fetch time to the rendering and total as preview
      // does not do the files call. In the case the file is in the process of
      // being converted, we need to add to conversion instead of the render

      var totalConversion = conversion;
      var totalRendering = rendering;
      var totalPreload = preload;

      if (conversion) {
        totalConversion += totalFetchFileTime;
      } else {
        totalRendering += totalFetchFileTime;
      }

      if (totalPreload) {
        // Preload is optional, depending on file type
        totalPreload += totalFetchFileTime;
      }

      var previewMetrics = {
        conversion: totalConversion,
        rendering: totalRendering,
        total: totalRendering + totalConversion,
        preload: totalPreload
      };
      return previewMetrics;
    }
    /**
     * onLoad function for preview
     *
     * @return {void}
     */

  }, {
    key: "canDownload",

    /**
     * Returns whether file can be downloaded based on file properties, permissions, and user-defined options.
     *
     * @return {boolean}
     */
    value: function canDownload() {
      var canDownload = this.props.canDownload;
      var file = this.state.file;
      var isFileDownloadable = getProp(file, 'permissions.can_download', false) && getProp(file, 'is_download_available', false);
      return isFileDownloadable && !!canDownload;
    }
    /**
     * Returns whether file can be annotated based on permissions
     *
     * @return {boolean}
     */

  }, {
    key: "canAnnotate",
    value: function canAnnotate() {
      var showAnnotations = this.props.showAnnotations;
      var file = this.state.file;
      var isFileAnnotatable = getProp(file, 'permissions.can_annotate', false);
      return !!showAnnotations && isFileAnnotatable;
    }
    /**
     * Returns whether a preview should render annotations based on permissions
     *
     * @return {boolean}
     */

  }, {
    key: "canViewAnnotations",
    value: function canViewAnnotations() {
      var showAnnotations = this.props.showAnnotations;
      var file = this.state.file;
      var hasViewAllPermissions = getProp(file, 'permissions.can_view_annotations_all', false);
      var hasViewSelfPermissions = getProp(file, 'permissions.can_view_annotations_self', false);
      return !!showAnnotations && (this.canAnnotate() || hasViewAllPermissions || hasViewSelfPermissions);
    }
    /**
     * Loads preview in the component using the preview library.
     *
     * @return {void}
     */

  }, {
    key: "fetchFile",

    /**
     * Fetches a file
     *
     * @param {string} id file id
     * @param {Function|void} [successCallback] - Callback after file is fetched
     * @param {Function|void} [errorCallback] - Callback after error
     * @param {Object|void} [fetchOptions] - Fetch options
     * @return {void}
     */
    value: function fetchFile(id, successCallback, errorCallback) {
      var fetchOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (!id) {
        return;
      }

      this.fetchFileStartTime = performance.now();
      this.fetchFileEndTime = null;
      this.api.getFileAPI().getFile(id, successCallback || this.fetchFileSuccessCallback, errorCallback || this.fetchFileErrorCallback, _objectSpread(_objectSpread({}, fetchOptions), {}, {
        fields: PREVIEW_FIELDS_TO_FETCH
      }));
    }
    /**
     * Returns the preview instance
     *
     * @return {Preview} current instance of preview
     */

  }, {
    key: "getFileIndex",

    /**
     * Finds the index of current file inside the collection
     *
     * @return {number} -1 if not indexed
     */
    value: function getFileIndex() {
      var currentFileId = this.state.currentFileId;
      var collection = this.props.collection;

      if (!currentFileId || collection.length < 2) {
        return -1;
      }

      return collection.findIndex(function (item) {
        if (typeof item === 'string') {
          return item === currentFileId;
        }

        return item.id === currentFileId;
      });
    }
    /**
     * Shows a preview of a file at the specified index in the current collection.
     *
     * @public
     * @param {number} index - Index of file to preview
     * @return {void}
     */

  }, {
    key: "navigateToIndex",
    value: function navigateToIndex(index) {
      var _this$props5 = this.props,
          collection = _this$props5.collection,
          onNavigate = _this$props5.onNavigate;
      var length = collection.length;

      if (length < 2 || index < 0 || index > length - 1) {
        return;
      }

      var fileOrId = collection[index];
      var fileId = _typeof(fileOrId) === 'object' ? fileOrId.id || '' : fileOrId;
      this.setState({
        currentFileId: fileId
      }, function () {
        // Execute navigation callback
        onNavigate(fileId);
      });
    }
    /**
     * Shows a preview of the previous file.
     *
     * @public
     * @return {void}
     */

  }, {
    key: "refreshSidebar",

    /**
     * Refreshes the content sidebar panel
     *
     * @return {void}
     */
    value: function refreshSidebar() {
      var contentSidebar = this.contentSidebar.current;

      if (contentSidebar) {
        contentSidebar.refresh();
      }
    }
    /**
     * Renders the file preview
     *
     * @inheritdoc
     * @return {Element}
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          apiHost = _this$props6.apiHost,
          token = _this$props6.token,
          language = _this$props6.language,
          messages = _this$props6.messages,
          className = _this$props6.className,
          contentSidebarProps = _this$props6.contentSidebarProps,
          contentOpenWithProps = _this$props6.contentOpenWithProps,
          hasHeader = _this$props6.hasHeader,
          history = _this$props6.history,
          isLarge = _this$props6.isLarge,
          isVeryLarge = _this$props6.isVeryLarge,
          logoUrl = _this$props6.logoUrl,
          onClose = _this$props6.onClose,
          measureRef = _this$props6.measureRef,
          sharedLink = _this$props6.sharedLink,
          sharedLinkPassword = _this$props6.sharedLinkPassword,
          requestInterceptor = _this$props6.requestInterceptor,
          responseInterceptor = _this$props6.responseInterceptor;
      var _this$state3 = this.state,
          error = _this$state3.error,
          file = _this$state3.file,
          isReloadNotificationVisible = _this$state3.isReloadNotificationVisible,
          currentFileId = _this$state3.currentFileId,
          isThumbnailSidebarOpen = _this$state3.isThumbnailSidebarOpen,
          selectedVersion = _this$state3.selectedVersion;
      var collection = this.props.collection;
      var styleClassName = classNames('be bcpr', {
        'bcpr-thumbnails-open': isThumbnailSidebarOpen
      }, className);

      if (!currentFileId) {
        return null;
      }

      var errorCode = getProp(error, 'code');
      var currentVersionId = getProp(file, 'file_version.id');
      var selectedVersionId = getProp(selectedVersion, 'id', currentVersionId);
      var onHeaderClose = currentVersionId === selectedVersionId ? onClose : this.updateVersionToCurrent;
      /* eslint-disable jsx-a11y/no-static-element-interactions */

      /* eslint-disable jsx-a11y/no-noninteractive-tabindex */

      return /*#__PURE__*/React.createElement(Internationalize, {
        language: language,
        messages: messages
      }, /*#__PURE__*/React.createElement("div", {
        id: this.id,
        className: styleClassName,
        ref: measureRef,
        onKeyDown: this.onKeyDown,
        tabIndex: 0
      }, hasHeader && /*#__PURE__*/React.createElement(PreviewHeader, {
        file: file,
        logoUrl: logoUrl,
        token: token,
        onClose: onHeaderClose,
        onPrint: this.print,
        canDownload: this.canDownload(),
        onDownload: this.download,
        contentOpenWithProps: contentOpenWithProps,
        canAnnotate: this.canAnnotate(),
        selectedVersion: selectedVersion
      }), /*#__PURE__*/React.createElement("div", {
        className: "bcpr-body"
      }, /*#__PURE__*/React.createElement("div", {
        className: "bcpr-container",
        onMouseMove: this.onMouseMove,
        ref: this.containerRef
      }, file ? /*#__PURE__*/React.createElement(Measure, {
        bounds: true,
        onResize: this.onResize
      }, function (_ref3) {
        var previewRef = _ref3.measureRef;
        return /*#__PURE__*/React.createElement("div", {
          ref: previewRef,
          className: "bcpr-content"
        });
      }) : /*#__PURE__*/React.createElement("div", {
        className: "bcpr-loading-wrapper"
      }, /*#__PURE__*/React.createElement(PreviewLoading, {
        errorCode: errorCode,
        isLoading: !errorCode,
        loadingIndicatorProps: {
          size: 'large'
        }
      })), /*#__PURE__*/React.createElement(PreviewNavigation, {
        collection: collection,
        currentIndex: this.getFileIndex(),
        history: history,
        onNavigateLeft: this.navigateLeft,
        onNavigateRight: this.navigateRight
      })), file && /*#__PURE__*/React.createElement(LoadableSidebar, _extends({}, contentSidebarProps, {
        apiHost: apiHost,
        token: token,
        cache: this.api.getCache(),
        fileId: currentFileId,
        getPreview: this.getPreview,
        getViewer: this.getViewer,
        history: history,
        isDefaultOpen: isLarge || isVeryLarge,
        language: language,
        ref: this.contentSidebar,
        sharedLink: sharedLink,
        sharedLinkPassword: sharedLinkPassword,
        requestInterceptor: requestInterceptor,
        responseInterceptor: responseInterceptor,
        onVersionChange: this.onVersionChange
      }))), isReloadNotificationVisible && /*#__PURE__*/React.createElement(ReloadNotification, {
        onClose: this.closeReloadNotification,
        onClick: this.loadFileFromStage
      })));
      /* eslint-enable jsx-a11y/no-static-element-interactions */

      /* eslint-enable jsx-a11y/no-noninteractive-tabindex */
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var fileId = props.fileId;

      if (fileId !== state.prevFileIdProp) {
        return {
          currentFileId: fileId,
          prevFileIdProp: fileId
        };
      }

      return null;
    }
  }]);

  return ContentPreview;
}(React.PureComponent);

_defineProperty(ContentPreview, "defaultProps", {
  apiHost: DEFAULT_HOSTNAME_API,
  appHost: DEFAULT_HOSTNAME_APP,
  autoFocus: false,
  canDownload: true,
  className: '',
  collection: [],
  contentOpenWithProps: {},
  contentSidebarProps: {},
  enableThumbnailsSidebar: false,
  hasHeader: false,
  language: DEFAULT_LOCALE,
  onDownload: noop,
  onError: noop,
  onLoad: noop,
  onNavigate: noop,
  onVersionChange: noop,
  previewLibraryVersion: DEFAULT_PREVIEW_VERSION,
  showAnnotations: false,
  staticHost: DEFAULT_HOSTNAME_STATIC,
  staticPath: DEFAULT_PATH_STATIC_PREVIEW,
  useHotkeys: true
});

export { ContentPreview as ContentPreviewComponent };
export default flow([makeResponsive, withFeatureProvider, withLogger(ORIGIN_CONTENT_PREVIEW), withErrorBoundary(ORIGIN_CONTENT_PREVIEW)])(ContentPreview);
//# sourceMappingURL=ContentPreview.js.map