function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * 
 * @file Helper for the box versions API
 * @author Box
 */
import Base from './Base';
import { ERROR_CODE_FETCH_ACCESS_STATS } from '../constants';

var FileAccessStats =
/*#__PURE__*/
function (_Base) {
  _inherits(FileAccessStats, _Base);

  function FileAccessStats() {
    _classCallCheck(this, FileAccessStats);

    return _possibleConstructorReturn(this, _getPrototypeOf(FileAccessStats).apply(this, arguments));
  }

  _createClass(FileAccessStats, [{
    key: "getUrl",

    /**
     * API URL for access stats
     *
     * @param {string} [id] - a box file id
     * @return {string} base url for files
     */
    value: function getUrl(id) {
      if (!id) {
        throw new Error('Missing file id!');
      }

      return "".concat(this.getBaseApiUrl(), "/file_access_stats/").concat(id);
    }
    /**
     * API for fetching access stats on a file
     *
     * @param {string} id - a box file id
     * @param {Function} successCallback - Success callback
     * @param {Function} errorCallback - Error callback
     * @return {void>}
     */

  }, {
    key: "getFileAccessStats",
    value: function getFileAccessStats(id, successCallback, errorCallback) {
      this.errorCode = ERROR_CODE_FETCH_ACCESS_STATS;
      this.get({
        id: id,
        successCallback: successCallback,
        errorCallback: errorCallback
      });
    }
  }]);

  return FileAccessStats;
}(Base);

export default FileAccessStats;
//# sourceMappingURL=FileAccessStats.js.map