function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
 * @file Helper for the box versions API
 * @author Box
 */
import getProp from 'lodash/get';
import { FILE_VERSIONS_FIELDS_TO_FETCH } from '../utils/fields';
import OffsetBasedAPI from './OffsetBasedAPI';
import { DEFAULT_FETCH_END, DEFAULT_FETCH_START, ERROR_CODE_DELETE_VERSION, ERROR_CODE_FETCH_VERSION, ERROR_CODE_FETCH_VERSIONS, ERROR_CODE_PROMOTE_VERSION, ERROR_CODE_RESTORE_VERSION, PERMISSION_CAN_DELETE, PERMISSION_CAN_UPLOAD } from '../constants';

var Versions =
/*#__PURE__*/
function (_OffsetBasedAPI) {
  _inherits(Versions, _OffsetBasedAPI);

  function Versions() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Versions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Versions)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "successHandler", function (data) {
      if (_this.isDestroyed() || typeof _this.successCallback !== 'function') {
        return;
      }

      _this.successCallback(data);
    });

    return _this;
  }

  _createClass(Versions, [{
    key: "getUrl",

    /**
     * API URL for file versions
     *
     * @param {string} id - a box file id
     * @return {string} base url for file versions
     */
    value: function getUrl(id) {
      if (!id) {
        throw new Error('Missing file id!');
      }

      return "".concat(this.getBaseApiUrl(), "/files/").concat(id, "/versions");
    }
    /**
     * API URL for version info endpoint
     *
     * @param {string} id - a box file id
     * @param {string} versionId - a box file version id
     * @return {string} url for version info
     */

  }, {
    key: "getVersionUrl",
    value: function getVersionUrl(id, versionId) {
      if (!versionId) {
        throw new Error('Missing version id!');
      }

      return "".concat(this.getUrl(id), "/").concat(versionId);
    }
    /**
     * Returns the versions api response data
     * @param {Object} data the api response data
     */

  }, {
    key: "addPermissions",

    /**
     * Helper to add associated permissions from the file to the version objects
     *
     * @param {FileVersions} versions - API returned file versions for this file
     * @param {BoxItem} file - The parent file object
     * @return {FileVersions} modified versions array including associated file permissions
     */
    value: function addPermissions(versions, file) {
      if (!versions) {
        return versions;
      } // Versions defer to the parent file for upload (promote) permissions


      var entries = versions.entries,
          total_count = versions.total_count;
      var can_upload = getProp(file, ['permissions', PERMISSION_CAN_UPLOAD], false);
      return {
        entries: entries.map(function (_ref) {
          var permissions = _ref.permissions,
              version = _objectWithoutProperties(_ref, ["permissions"]);

          return _objectSpread({}, version, {
            permissions: _objectSpread({
              can_upload: can_upload
            }, permissions)
          });
        }),
        total_count: total_count
      };
    }
    /**
     * API for deleting a version of a file
     *
     * @param {Object} options - the request options
     * @param {string} options.fileId - a box file id
     * @param {string} options.versionId - a box file version id
     * @param {BoxItemVersionPermission} options.permissions - the permissions for the file
     * @param {Function} options.successCallback - the success callback
     * @param {Function} options.errorCallback - the error callback
     * @returns {void}
     */

  }, {
    key: "deleteVersion",
    value: function deleteVersion(_ref2) {
      var errorCallback = _ref2.errorCallback,
          fileId = _ref2.fileId,
          permissions = _ref2.permissions,
          successCallback = _ref2.successCallback,
          versionId = _ref2.versionId;
      this.errorCode = ERROR_CODE_DELETE_VERSION;

      try {
        this.checkApiCallValidity(PERMISSION_CAN_DELETE, permissions, fileId);
      } catch (e) {
        errorCallback(e, this.errorCode);
        return;
      }

      this.delete({
        id: fileId,
        url: this.getVersionUrl(fileId, versionId),
        successCallback: successCallback,
        errorCallback: errorCallback
      });
    }
    /**
     * API for fetching versions on a file
     *
     * @param {string} fileId - a box file id
     * @param {Function} successCallback - the success callback
     * @param {Function} errorCallback - the error callback
     * @param {number} offset - the offset of the starting version index
     * @param {number} limit - the max number of versions to fetch
     * @param {Array} fields - the fields to fetch
     * @param {boolean} shouldFetchAll - true if all versions should be fetched
     * @returns {void}
     */

  }, {
    key: "getVersions",
    value: function getVersions(fileId, successCallback, errorCallback) {
      var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_FETCH_START;
      var limit = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : DEFAULT_FETCH_END;
      var fields = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : FILE_VERSIONS_FIELDS_TO_FETCH;
      var shouldFetchAll = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;
      this.errorCode = ERROR_CODE_FETCH_VERSIONS;
      this.offsetGet(fileId, successCallback, errorCallback, offset, limit, fields, shouldFetchAll);
    }
    /**
     * API for fetching a certain version for a file
     *
     * @param {string} fileId - a box file id
     * @param {string} fileVersionId - a box file version id
     * @param {Function} successCallback - the success callback
     * @param {Function} errorCallback - the error callback
     * @returns {void}
     */

  }, {
    key: "getVersion",
    value: function getVersion(fileId, fileVersionId, successCallback, errorCallback) {
      this.errorCode = ERROR_CODE_FETCH_VERSION;
      this.get({
        id: fileId,
        successCallback: successCallback,
        errorCallback: errorCallback,
        url: this.getVersionUrl(fileId, fileVersionId),
        requestData: {
          params: {
            fields: FILE_VERSIONS_FIELDS_TO_FETCH.toString()
          }
        }
      });
    }
    /**
     * Decorates the current version and adds it to an existing FileVersions object
     *
     * @param {BoxItemVersion} currentVersion - a box version
     * @param {FileVersions} versions - versions response
     * @param {BoxItem} file - a box file
     * @returns {FileVersions} - a FileVersions object containing the decorated current version
     */

  }, {
    key: "addCurrentVersion",
    value: function addCurrentVersion(currentVersion, versions, file) {
      if (!currentVersion) {
        return versions || {
          entries: [],
          total_count: 0
        };
      }

      if (!versions) {
        return {
          entries: [currentVersion],
          total_count: 1
        };
      }

      var promotedFromId = getProp(file, 'restored_from.id');
      var promotedVersion = versions.entries.find(function (version) {
        return version.id === promotedFromId;
      });

      if (promotedVersion) {
        currentVersion.version_promoted = promotedVersion.version_number;
      }

      return {
        entries: [].concat(_toConsumableArray(versions.entries), [currentVersion]),
        total_count: versions.total_count + 1
      };
    }
    /**
     * API for promoting a version of a file to current
     *
     * @param {Object} options - the request options
     * @param {string} options.fileId - a box file id
     * @param {string} options.versionId - a box file version id
     * @param {BoxItemVersionPermission} options.permissions - the permissions for the file
     * @param {Function} options.successCallback - the success callback
     * @param {Function} options.errorCallback - the error callback
     * @returns {void}
     */

  }, {
    key: "promoteVersion",
    value: function promoteVersion(_ref3) {
      var errorCallback = _ref3.errorCallback,
          fileId = _ref3.fileId,
          permissions = _ref3.permissions,
          successCallback = _ref3.successCallback,
          versionId = _ref3.versionId;
      this.errorCode = ERROR_CODE_PROMOTE_VERSION;

      try {
        this.checkApiCallValidity(PERMISSION_CAN_UPLOAD, permissions, fileId);
      } catch (e) {
        errorCallback(e, this.errorCode);
        return;
      }

      this.post({
        id: fileId,
        data: {
          data: {
            id: versionId,
            type: 'file_version'
          }
        },
        url: this.getVersionUrl(fileId, 'current'),
        successCallback: successCallback,
        errorCallback: errorCallback
      });
    }
    /**
     * API for restoring a deleted version of a file
     *
     * @param {Object} options - the request options
     * @param {string} options.fileId - a box file id
     * @param {string} options.versionId - a box file version id
     * @param {BoxItemVersionPermission} options.permissions - the permissions for the file
     * @param {Function} options.successCallback - the success callback
     * @param {Function} options.errorCallback - the error callback
     * @returns {void}
     */

  }, {
    key: "restoreVersion",
    value: function restoreVersion(_ref4) {
      var errorCallback = _ref4.errorCallback,
          fileId = _ref4.fileId,
          permissions = _ref4.permissions,
          successCallback = _ref4.successCallback,
          versionId = _ref4.versionId;
      this.errorCode = ERROR_CODE_RESTORE_VERSION;

      try {
        this.checkApiCallValidity(PERMISSION_CAN_DELETE, permissions, fileId);
      } catch (e) {
        errorCallback(e, this.errorCode);
        return;
      }

      this.put({
        id: fileId,
        data: {
          data: {
            trashed_at: null
          }
        },
        url: this.getVersionUrl(fileId, versionId),
        successCallback: successCallback,
        errorCallback: errorCallback
      });
    }
  }]);

  return Versions;
}(OffsetBasedAPI);

export default Versions;
//# sourceMappingURL=Versions.js.map