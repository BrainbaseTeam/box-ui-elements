function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import merge from 'lodash/merge';
import { ERROR_CODE_CREATE_ANNOTATION, ERROR_CODE_DELETE_ANNOTATION, ERROR_CODE_EDIT_ANNOTATION, ERROR_CODE_FETCH_ANNOTATION, ERROR_CODE_FETCH_ANNOTATIONS, PERMISSION_CAN_CREATE_ANNOTATIONS, PERMISSION_CAN_DELETE, PERMISSION_CAN_EDIT, PERMISSION_CAN_VIEW_ANNOTATIONS } from '../constants';
import MarkerBasedApi from './MarkerBasedAPI';

var Annotations =
/*#__PURE__*/
function (_MarkerBasedApi) {
  _inherits(Annotations, _MarkerBasedApi);

  function Annotations() {
    _classCallCheck(this, Annotations);

    return _possibleConstructorReturn(this, _getPrototypeOf(Annotations).apply(this, arguments));
  }

  _createClass(Annotations, [{
    key: "getUrl",
    value: function getUrl() {
      return "".concat(this.getBaseApiUrl(), "/undoc/annotations");
    }
  }, {
    key: "getUrlForId",
    value: function getUrlForId(annotationId) {
      return "".concat(this.getUrl(), "/").concat(annotationId);
    }
  }, {
    key: "createAnnotation",
    value: function createAnnotation(fileId, fileVersionId, payload, permissions, successCallback, errorCallback) {
      this.errorCode = ERROR_CODE_CREATE_ANNOTATION;

      try {
        this.checkApiCallValidity(PERMISSION_CAN_CREATE_ANNOTATIONS, permissions, fileId);
      } catch (e) {
        errorCallback(e, this.errorCode);
        return;
      }

      var defaults = {
        description: {
          type: 'reply'
        },
        file_version: {
          id: fileVersionId,
          type: 'file_version'
        },
        status: 'open',
        type: 'annotation'
      };
      this.post({
        id: fileId,
        data: {
          data: merge(defaults, payload)
        },
        errorCallback: errorCallback,
        successCallback: successCallback,
        url: this.getUrl()
      });
    }
  }, {
    key: "updateAnnotation",
    value: function updateAnnotation(fileId, annotationId, permissions, message, successCallback, errorCallback) {
      this.errorCode = ERROR_CODE_EDIT_ANNOTATION;

      try {
        this.checkApiCallValidity(PERMISSION_CAN_EDIT, permissions, fileId);
      } catch (e) {
        errorCallback(e, this.errorCode);
        return;
      }

      var requestData = {
        data: {
          description: {
            message: message
          }
        }
      };
      this.put({
        id: fileId,
        data: requestData,
        errorCallback: errorCallback,
        successCallback: successCallback,
        url: this.getUrlForId(annotationId)
      });
    }
  }, {
    key: "deleteAnnotation",
    value: function deleteAnnotation(fileId, annotationId, permissions, successCallback, errorCallback) {
      this.errorCode = ERROR_CODE_DELETE_ANNOTATION;

      try {
        this.checkApiCallValidity(PERMISSION_CAN_DELETE, permissions, fileId);
      } catch (e) {
        errorCallback(e, this.errorCode);
        return;
      }

      this.delete({
        id: fileId,
        errorCallback: errorCallback,
        successCallback: successCallback,
        url: this.getUrlForId(annotationId)
      });
    }
  }, {
    key: "getAnnotation",
    value: function getAnnotation(fileId, annotationId, permissions, successCallback, errorCallback) {
      this.errorCode = ERROR_CODE_FETCH_ANNOTATION;

      try {
        this.checkApiCallValidity(PERMISSION_CAN_VIEW_ANNOTATIONS, permissions, fileId);
      } catch (e) {
        errorCallback(e, this.errorCode);
        return;
      }

      this.get({
        id: fileId,
        errorCallback: errorCallback,
        successCallback: successCallback,
        url: this.getUrlForId(annotationId)
      });
    }
  }, {
    key: "getAnnotations",
    value: function getAnnotations(fileId, fileVersionId, permissions, successCallback, errorCallback, limit, shouldFetchAll) {
      this.errorCode = ERROR_CODE_FETCH_ANNOTATIONS;

      try {
        this.checkApiCallValidity(PERMISSION_CAN_VIEW_ANNOTATIONS, permissions, fileId);
      } catch (e) {
        errorCallback(e, this.errorCode);
        return;
      }

      this.markerGet({
        id: fileId,
        errorCallback: errorCallback,
        limit: limit,
        requestData: {
          file_id: fileId,
          file_version_id: fileVersionId
        },
        shouldFetchAll: shouldFetchAll,
        successCallback: successCallback
      });
    }
  }]);

  return Annotations;
}(MarkerBasedApi);

export { Annotations as default };
//# sourceMappingURL=Annotations.js.map