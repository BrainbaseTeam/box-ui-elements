function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Versions Sidebar API Helper
 * @author Box
 */
import API from '../../../api';
import { FILE_VERSION_FIELDS_TO_FETCH } from '../../../utils/fields';

var VersionsSidebarAPI = function VersionsSidebarAPI(_ref) {
  var _this = this;

  var api = _ref.api,
      fileId = _ref.fileId;

  _classCallCheck(this, VersionsSidebarAPI);

  _defineProperty(this, "fetchData", function () {
    return Promise.all([_this.fetchFile(), _this.fetchVersions()]).then(_this.fetchVersionCurrent);
  });

  _defineProperty(this, "fetchDownloadUrl", function (version) {
    return new Promise(function (resolve, reject) {
      if (!version) {
        return reject(new Error('Could not find requested version'));
      }

      return _this.api.getFileAPI().getDownloadUrl(_this.fileId, version, resolve, reject);
    });
  });

  _defineProperty(this, "fetchFile", function () {
    return new Promise(function (resolve, reject) {
      return _this.api.getFileAPI().getFile(_this.fileId, resolve, reject, {
        fields: FILE_VERSION_FIELDS_TO_FETCH,
        forceFetch: true
      });
    });
  });

  _defineProperty(this, "fetchVersions", function () {
    return new Promise(function (resolve, reject) {
      return _this.api.getVersionsAPI(false).getVersions(_this.fileId, resolve, reject);
    });
  });

  _defineProperty(this, "fetchVersionCurrent", function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        fileResponse = _ref3[0],
        versionsResponse = _ref3[1];

    var _fileResponse$file_ve = fileResponse.file_version,
        file_version = _fileResponse$file_ve === void 0 ? {} : _fileResponse$file_ve;
    return new Promise(function (resolve, reject) {
      return _this.api.getVersionsAPI(false).getVersion(_this.fileId, file_version.id, function (currentVersionResponse) {
        resolve([fileResponse, _this.api.getVersionsAPI(false).addCurrentVersion(currentVersionResponse, versionsResponse, fileResponse)]);
      }, reject);
    });
  });

  _defineProperty(this, "fetchVersion", function (versionId) {
    return new Promise(function (resolve, reject) {
      return _this.api.getVersionsAPI(false).getVersion(_this.fileId, versionId, resolve, reject);
    });
  });

  _defineProperty(this, "deleteVersion", function (version) {
    var _ref4 = version || {},
        versionId = _ref4.id,
        _ref4$permissions = _ref4.permissions,
        permissions = _ref4$permissions === void 0 ? {} : _ref4$permissions;

    return new Promise(function (resolve, reject) {
      return _this.api.getVersionsAPI(false).deleteVersion({
        fileId: _this.fileId,
        permissions: permissions,
        successCallback: resolve,
        errorCallback: reject,
        versionId: versionId
      });
    });
  });

  _defineProperty(this, "promoteVersion", function (version) {
    var _ref5 = version || {},
        versionId = _ref5.id,
        _ref5$permissions = _ref5.permissions,
        permissions = _ref5$permissions === void 0 ? {} : _ref5$permissions;

    return new Promise(function (resolve, reject) {
      return _this.api.getVersionsAPI(false).promoteVersion({
        fileId: _this.fileId,
        permissions: permissions,
        successCallback: resolve,
        errorCallback: reject,
        versionId: versionId
      });
    });
  });

  _defineProperty(this, "restoreVersion", function (version) {
    var _ref6 = version || {},
        versionId = _ref6.id,
        _ref6$permissions = _ref6.permissions,
        permissions = _ref6$permissions === void 0 ? {} : _ref6$permissions;

    return new Promise(function (resolve, reject) {
      return _this.api.getVersionsAPI(false).restoreVersion({
        fileId: _this.fileId,
        permissions: permissions,
        successCallback: resolve,
        errorCallback: reject,
        versionId: versionId
      });
    });
  });

  this.api = api;
  this.fileId = fileId;
};

export { VersionsSidebarAPI as default };
//# sourceMappingURL=VersionsSidebarAPI.js.map