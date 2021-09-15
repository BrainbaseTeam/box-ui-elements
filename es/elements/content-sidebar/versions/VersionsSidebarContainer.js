function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
 * @file Versions Sidebar container
 * @author Box
 */
import React from 'react';
import flow from 'lodash/flow';
import getProp from 'lodash/get';
import merge from 'lodash/merge';
import noop from 'lodash/noop';
import { generatePath, withRouter } from 'react-router-dom';
import API from '../../../api';
import messages from './messages';
import openUrlInsideIframe from '../../../utils/iframe';
import VersionsSidebar from './VersionsSidebar';
import VersionsSidebarAPI from './VersionsSidebarAPI';
import { withAPIContext } from '../../common/api-context';

var VersionsSidebarContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VersionsSidebarContainer, _React$Component);

  function VersionsSidebarContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, VersionsSidebarContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(VersionsSidebarContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isLoading: true,
      isWatermarked: false,
      versionCount: Infinity,
      versionLimit: Infinity,
      versions: []
    });

    _defineProperty(_assertThisInitialized(_this), "window", window);

    _defineProperty(_assertThisInitialized(_this), "handleActionDelete", function (versionId) {
      _this.setState({
        isLoading: true
      });

      return _this.api.deleteVersion(_this.findVersion(versionId)).then(function () {
        return _this.api.fetchVersion(versionId);
      }).then(_this.handleDeleteSuccess).then(function () {
        return _this.props.onVersionDelete(versionId);
      }).catch(function () {
        return _this.handleActionError(messages.versionActionDeleteError);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleActionDownload", function (versionId) {
      return _this.api.fetchDownloadUrl(_this.findVersion(versionId)).then(openUrlInsideIframe).then(function () {
        return _this.props.onVersionDownload(versionId);
      }).catch(function () {
        return _this.handleActionError(messages.versionActionDownloadError);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleActionPreview", function (versionId) {
      _this.updateVersion(versionId);

      _this.props.onVersionPreview(versionId);
    });

    _defineProperty(_assertThisInitialized(_this), "handleActionPromote", function (versionId) {
      _this.setState({
        isLoading: true
      });

      return _this.api.promoteVersion(_this.findVersion(versionId)).then(_this.api.fetchData).then(_this.handleFetchSuccess).then(_this.handlePromoteSuccess).then(function () {
        return _this.props.onVersionPromote(versionId);
      }).catch(function () {
        return _this.handleActionError(messages.versionActionPromoteError);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleActionRestore", function (versionId) {
      _this.setState({
        isLoading: true
      });

      return _this.api.restoreVersion(_this.findVersion(versionId)).then(function () {
        return _this.api.fetchVersion(versionId);
      }).then(_this.handleRestoreSuccess).then(function () {
        return _this.props.onVersionRestore(versionId);
      }).catch(function () {
        return _this.handleActionError(messages.versionActionRestoreError);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleActionError", function (message) {
      _this.setState({
        error: message,
        isLoading: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeleteSuccess", function (data) {
      var selectedVersionId = _this.props.versionId;
      var versionId = data.id;

      _this.mergeResponse(data); // Bump the user to the current version if they deleted their selected version


      if (versionId === selectedVersionId) {
        _this.updateVersionToCurrent();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleRestoreSuccess", function (data) {
      _this.mergeResponse(data);
    });

    _defineProperty(_assertThisInitialized(_this), "handleFetchError", function () {
      _this.setState({
        error: messages.versionFetchError,
        isLoading: false,
        isWatermarked: false,
        versionCount: 0,
        versions: []
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFetchSuccess", function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          fileResponse = _ref2[0],
          versionsResponse = _ref2[1];

      var api = _this.props.api;
      var version_limit = fileResponse.version_limit;
      var isWatermarked = getProp(fileResponse, 'watermark_info.is_watermarked', false);
      var versionLimit = version_limit !== null && version_limit !== undefined ? version_limit : Infinity;
      var versionsWithPermissions = api.getVersionsAPI(false).addPermissions(versionsResponse, fileResponse) || {};
      var versions = versionsWithPermissions.entries,
          versionCount = versionsWithPermissions.total_count;

      _this.setState({
        error: undefined,
        isLoading: false,
        isWatermarked: isWatermarked,
        versionCount: versionCount,
        versionLimit: versionLimit,
        versions: _this.sortVersions(versions)
      }, _this.verifyVersion);

      return [fileResponse, versionsResponse];
    });

    _defineProperty(_assertThisInitialized(_this), "handlePromoteSuccess", function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 1),
          file = _ref4[0];

      var fileVersion = file.file_version;

      if (fileVersion) {
        _this.updateVersion(fileVersion.id);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "initialize", function () {
      _this.api = new VersionsSidebarAPI(_this.props);
    });

    _defineProperty(_assertThisInitialized(_this), "fetchData", function () {
      _this.api.fetchData().then(_this.handleFetchSuccess).catch(_this.handleFetchError);
    });

    _defineProperty(_assertThisInitialized(_this), "findVersion", function (versionId) {
      var versions = _this.state.versions;
      return versions.find(function (version) {
        return version.id === versionId;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getCurrentVersionId", function () {
      var versions = _this.state.versions;
      return versions[0] ? versions[0].id : null;
    });

    _defineProperty(_assertThisInitialized(_this), "mergeVersions", function (newVersion) {
      var versions = _this.state.versions;
      var newVersionId = newVersion ? newVersion.id : '';
      return versions.map(function (version) {
        return version.id === newVersionId ? merge(_objectSpread({}, version), newVersion) : version;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "mergeResponse", function (data) {
      var newVersions = _this.mergeVersions(data);

      _this.setState({
        error: undefined,
        isLoading: false,
        versions: newVersions
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateVersion", function (versionId) {
      var _this$props = _this.props,
          history = _this$props.history,
          match = _this$props.match;
      return history.push(generatePath(match.path, _objectSpread({}, match.params, {
        versionId: versionId
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "updateVersionToCurrent", function () {
      _this.updateVersion(_this.getCurrentVersionId());
    });

    _defineProperty(_assertThisInitialized(_this), "verifyVersion", function () {
      var _this$props2 = _this.props,
          onVersionChange = _this$props2.onVersionChange,
          versionId = _this$props2.versionId;

      var selectedVersion = _this.findVersion(versionId);

      if (selectedVersion) {
        onVersionChange(selectedVersion, {
          currentVersionId: _this.getCurrentVersionId(),
          updateVersionToCurrent: _this.updateVersionToCurrent
        });
      } else {
        _this.updateVersionToCurrent();
      }
    });

    return _this;
  }

  _createClass(VersionsSidebarContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initialize();
      this.fetchData();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref5) {
      var prevFileId = _ref5.fileId,
          prevVersionId = _ref5.versionId;
      var _this$props3 = this.props,
          fileId = _this$props3.fileId,
          versionId = _this$props3.versionId;

      if (fileId !== prevFileId) {
        this.refresh();
      }

      if (versionId !== prevVersionId) {
        this.verifyVersion();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Reset the current version id since the wrapping route is no longer active
      this.props.onVersionChange(null);
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.initialize();
      this.setState({
        isLoading: true
      }, this.fetchData);
    }
  }, {
    key: "sortVersions",
    value: function sortVersions() {
      var versions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return _toConsumableArray(versions).sort(function (a, b) {
        return Date.parse(b.created_at) - Date.parse(a.created_at);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          fileId = _this$props4.fileId,
          parentName = _this$props4.parentName;
      return React.createElement(VersionsSidebar, _extends({
        fileId: fileId,
        onDelete: this.handleActionDelete,
        onDownload: this.handleActionDownload,
        onPreview: this.handleActionPreview,
        onPromote: this.handleActionPromote,
        onRestore: this.handleActionRestore,
        parentName: parentName
      }, this.state));
    }
  }]);

  return VersionsSidebarContainer;
}(React.Component);

_defineProperty(VersionsSidebarContainer, "defaultProps", {
  onVersionChange: noop,
  onVersionDelete: noop,
  onVersionDownload: noop,
  onVersionPreview: noop,
  onVersionPromote: noop,
  onVersionRestore: noop,
  parentName: ''
});

export default flow([withRouter, withAPIContext])(VersionsSidebarContainer);
//# sourceMappingURL=VersionsSidebarContainer.js.map