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
 * @file Helper for the box App Activity API
 * @author Box
 */
import MarkerBasedAPI from './MarkerBasedAPI';
import { ERROR_CODE_DELETE_APP_ACTIVITY, HTTP_STATUS_CODE_NOT_FOUND } from '../constants';
import { APP_ACTIVITY_FIELDS_TO_FETCH } from '../utils/fields';

var AppActivity =
/*#__PURE__*/
function (_MarkerBasedAPI) {
  _inherits(AppActivity, _MarkerBasedAPI);

  function AppActivity() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AppActivity);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AppActivity)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "permissions", {});

    _defineProperty(_assertThisInitialized(_this), "mapAppActivityItem", function (item) {
      var activity_template = item.activity_template,
          app = item.app,
          created_by = item.created_by,
          id = item.id,
          occurred_at = item.occurred_at,
          rendered_text = item.rendered_text,
          type = item.type;
      var can_delete = _this.permissions.can_delete;
      return {
        activity_template: activity_template,
        app: app,
        created_at: occurred_at,
        created_by: created_by,
        id: id,
        permissions: {
          can_delete: can_delete
        },
        rendered_text: rendered_text,
        type: type
      };
    });

    _defineProperty(_assertThisInitialized(_this), "successHandler", function (_ref) {
      var _ref$entries = _ref.entries,
          entries = _ref$entries === void 0 ? [] : _ref$entries;

      if (_this.isDestroyed() || typeof _this.successCallback !== 'function') {
        return;
      }

      var activityEntries = entries.map(_this.mapAppActivityItem);

      _this.successCallback({
        entries: activityEntries,
        total_count: activityEntries.length
      });
    });

    _defineProperty(_assertThisInitialized(_this), "errorHandler", function (error) {
      if (_this.isDestroyed() && typeof _this.errorCallback !== 'function') {
        return;
      }

      var response = error.response; // In the case of a 404, the enterprise does not have App Activities enabled.
      // Show no App Activity

      if (response.status === HTTP_STATUS_CODE_NOT_FOUND) {
        _this.successHandler({
          entries: [],
          total_count: 0
        });
      } else {
        _this.errorCallback(error, response.status);
      }
    });

    return _this;
  }

  _createClass(AppActivity, [{
    key: "getUrl",

    /**
     * API URL for getting App Activity on a file
     *
     * @return {string} Url for all app activity on a file
     */
    value: function getUrl() {
      return "".concat(this.getBaseApiUrl(), "/app_activities");
    }
    /**
     * API URL for deleting app activity from a file
     *
     * @param id - ID of an app activity item
     * @return {string} - URL to delete app activity
     */

  }, {
    key: "getDeleteUrl",
    value: function getDeleteUrl(id) {
      if (!id) {
        throw new Error('Missing file id!');
      }

      return "".concat(this.getUrl(), "/").concat(id);
    }
    /**
     * Generic success handler
     *
     * @param {AppActivityAPIItems} data - the response data
     */

  }, {
    key: "getAppActivity",

    /**
     * API for fetching App Activity on a file
     *
     * @param {string} id - the file id
     * @param {BoxItemPermission} permissions - Permissions to attach to the app activity items. Determines if it can be deleted.
     * @param {Function} successCallback - the success callback
     * @param {Function} errorCallback - the error callback
     * @param {number} [limit] - the max number of app activity items to return.
     *
     * @returns {void}
     */
    value: function getAppActivity(id, permissions, successCallback, errorCallback) {
      var requestData = {
        item_id: id,
        item_type: 'file',
        fields: APP_ACTIVITY_FIELDS_TO_FETCH.toString()
      };
      this.permissions = permissions;
      this.markerGet({
        id: id,
        successCallback: successCallback,
        errorCallback: errorCallback,
        requestData: requestData
      });
    }
    /**
     * Delete an app activity item
     *
     * @param {string} id - The ID of the Box file that App Activity is on
     * @param {string} appActivityId - An AppActivity item id
     * @param {Function} successCallback - The success callback
     * @param {Function} errorCallback - The error callback
     */

  }, {
    key: "deleteAppActivity",
    value: function deleteAppActivity(_ref2) {
      var id = _ref2.id,
          appActivityId = _ref2.appActivityId,
          successCallback = _ref2.successCallback,
          errorCallback = _ref2.errorCallback;
      this.errorCode = ERROR_CODE_DELETE_APP_ACTIVITY;
      this.delete({
        id: id,
        url: this.getDeleteUrl(appActivityId),
        successCallback: successCallback,
        errorCallback: errorCallback
      });
    }
  }]);

  return AppActivity;
}(MarkerBasedAPI);

export default AppActivity;
//# sourceMappingURL=AppActivity.js.map