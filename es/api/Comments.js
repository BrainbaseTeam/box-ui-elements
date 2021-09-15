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
 * @file Helper for the box comments API
 * @author Box
 */
import { COMMENTS_FIELDS_TO_FETCH } from '../utils/fields';
import OffsetBasedAPI from './OffsetBasedAPI';
import { PERMISSION_CAN_COMMENT, PERMISSION_CAN_DELETE, PERMISSION_CAN_EDIT, ERROR_CODE_CREATE_COMMENT, ERROR_CODE_UPDATE_COMMENT, ERROR_CODE_DELETE_COMMENT, ERROR_CODE_FETCH_COMMENTS } from '../constants';

var Comments =
/*#__PURE__*/
function (_OffsetBasedAPI) {
  _inherits(Comments, _OffsetBasedAPI);

  function Comments() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Comments);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Comments)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "successHandler", function (data) {
      if (_this.isDestroyed() || typeof _this.successCallback !== 'function') {
        return;
      } // There is no response data when deleting a comment


      if (!data) {
        _this.successCallback();

        return;
      } // We don't have entries when updating/creating a comment


      if (!data.entries) {
        _this.successCallback(_this.format(data));

        return;
      }

      var comments = data.entries.map(_this.format);

      _this.successCallback(_objectSpread({}, data, {
        entries: comments
      }));
    });

    return _this;
  }

  _createClass(Comments, [{
    key: "getUrl",

    /**
     * API URL for comments on a file
     *
     * @param {string} id - A box file id
     * @return {string} base url for files
     */
    value: function getUrl(id) {
      if (!id) {
        throw new Error('Missing file id!');
      }

      return "".concat(this.getBaseApiUrl(), "/files/").concat(id, "/comments");
    }
    /**
     * API URL for comments endpoint
     *
     * @param {string} [id] - A box comment id
     * @return {string} base url for comments
     */

  }, {
    key: "commentsUrl",
    value: function commentsUrl(id) {
      var baseUrl = "".concat(this.getBaseApiUrl(), "/comments");
      return id ? "".concat(baseUrl, "/").concat(id) : baseUrl;
    }
    /**
     * Formats comment data for use in components.
     *
     * @param {string} [id] - An individual comment entry from the API
     * @return {Task} A task
     */

  }, {
    key: "format",
    value: function format(comment) {
      return _objectSpread({}, comment, {
        tagged_message: comment.tagged_message !== '' ? comment.tagged_message : comment.message
      });
    }
    /**
     * Formats the comments api response to usable data
     * @param {Object} data the api response data
     */

  }, {
    key: "createComment",

    /**
     * API for creating a comment on a file
     *
     * @param {BoxItem} file - File object for which we are creating a comment
     * @param {string} message - Comment message
     * @param {string} taggedMessage - Comment message with @mentions
     * @param {Function} successCallback - Success callback
     * @param {Function} errorCallback - Error callback
     * @return {void}
     */
    value: function createComment(_ref) {
      var file = _ref.file,
          message = _ref.message,
          taggedMessage = _ref.taggedMessage,
          successCallback = _ref.successCallback,
          errorCallback = _ref.errorCallback;
      this.errorCode = ERROR_CODE_CREATE_COMMENT;
      var _file$id = file.id,
          id = _file$id === void 0 ? '' : _file$id,
          permissions = file.permissions;

      try {
        this.checkApiCallValidity(PERMISSION_CAN_COMMENT, permissions, id);
      } catch (e) {
        errorCallback(e, this.errorCode);
        return;
      }

      var requestData = {
        data: {
          item: {
            id: id,
            type: 'file'
          },
          message: message,
          tagged_message: taggedMessage
        },
        params: {
          fields: COMMENTS_FIELDS_TO_FETCH.toString()
        }
      };
      this.post({
        id: id,
        url: this.commentsUrl(),
        data: requestData,
        successCallback: successCallback,
        errorCallback: errorCallback
      });
    }
    /**
     * API for updating a comment on a file
     *
     * @param {BoxItem} file - File object for which we are updating a comment
     * @param {string} commentId - Comment to be edited
     * @param {string} message - Comment message
     * @param {BoxItemPermission} permissions - The known permissions of the comment we're updating
     * @param {Function} successCallback - Success callback
     * @param {Function} errorCallback - Error callback
     * @return {void}
     */

  }, {
    key: "updateComment",
    value: function updateComment(_ref2) {
      var file = _ref2.file,
          commentId = _ref2.commentId,
          message = _ref2.message,
          tagged_message = _ref2.tagged_message,
          permissions = _ref2.permissions,
          successCallback = _ref2.successCallback,
          errorCallback = _ref2.errorCallback;
      this.errorCode = ERROR_CODE_UPDATE_COMMENT;
      var _file$id2 = file.id,
          id = _file$id2 === void 0 ? '' : _file$id2;

      try {
        this.checkApiCallValidity(PERMISSION_CAN_EDIT, permissions, id);
      } catch (e) {
        errorCallback(e, this.errorCode);
        return;
      }

      var requestData = {
        data: {
          message: message,
          tagged_message: tagged_message
        }
      };
      this.put({
        id: id,
        url: this.commentsUrl(commentId),
        data: requestData,
        successCallback: successCallback,
        errorCallback: errorCallback
      });
    }
    /**
     * API for deleting a comment on a file
     *
     * @param {BoxItem} file - File object for which we are deleting a comment
     * @param {string} commentId - Id of the comment we are deleting
     * @param {BoxItemPermission} permissions - The known permissions of the comment we're deleting
     * @param {Function} successCallback - Success callback
     * @param {Function} errorCallback - Error callback
     * @return {void}
     */

  }, {
    key: "deleteComment",
    value: function deleteComment(_ref3) {
      var file = _ref3.file,
          commentId = _ref3.commentId,
          permissions = _ref3.permissions,
          successCallback = _ref3.successCallback,
          errorCallback = _ref3.errorCallback;
      this.errorCode = ERROR_CODE_DELETE_COMMENT;
      var _file$id3 = file.id,
          id = _file$id3 === void 0 ? '' : _file$id3;

      try {
        this.checkApiCallValidity(PERMISSION_CAN_DELETE, permissions, id);
      } catch (e) {
        errorCallback(e, this.errorCode);
        return;
      }

      this.delete({
        id: id,
        url: this.commentsUrl(commentId),
        successCallback: successCallback,
        errorCallback: errorCallback
      });
    }
    /**
     * API for fetching comments on a file
     *
     * @param {string} fileId - the file id
     * @param {BoxItemPermission} permissions - the permissions for the file
     * @param {Function} successCallback - the success callback
     * @param {Function} errorCallback - the error callback
     * @param {array} fields - the fields to fetch
     * @param {number} offset - the offset from the start to start fetching at
     * @param {number} limit - the number of items to fetch
     * @param {boolean} shouldFetchAll - true if should get all the pages before calling the sucessCallback
     * @returns {void}
     */

  }, {
    key: "getComments",
    value: function getComments(fileId, permissions, successCallback, errorCallback) {
      var fields = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : COMMENTS_FIELDS_TO_FETCH;
      var offset = arguments.length > 5 ? arguments[5] : undefined;
      var limit = arguments.length > 6 ? arguments[6] : undefined;
      var shouldFetchAll = arguments.length > 7 ? arguments[7] : undefined;
      this.errorCode = ERROR_CODE_FETCH_COMMENTS;

      try {
        this.checkApiCallValidity(PERMISSION_CAN_COMMENT, permissions, fileId);
      } catch (e) {
        errorCallback(e, this.errorCode);
        return;
      }

      this.offsetGet(fileId, successCallback, errorCallback, offset, limit, fields, shouldFetchAll);
    }
  }]);

  return Comments;
}(OffsetBasedAPI);

export default Comments;
//# sourceMappingURL=Comments.js.map