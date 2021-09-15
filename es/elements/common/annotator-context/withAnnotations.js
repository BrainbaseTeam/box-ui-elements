function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

import * as React from 'react';
import getProp from 'lodash/get';
import { generatePath, matchPath } from 'react-router-dom';
import AnnotatorContext from './AnnotatorContext';
import { Action, Status } from './types';
var ANNOTATIONS_PATH = '/:sidebar/annotations/:fileVersionId/:annotationId?';
var defaultState = {
  action: null,
  activeAnnotationFileVersionId: null,
  activeAnnotationId: null,
  annotation: null,
  error: null,
  meta: null
};
export default function withAnnotations(WrappedComponent) {
  var ComponentWithAnnotations =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(ComponentWithAnnotations, _React$Component);

    function ComponentWithAnnotations(props) {
      var _this;

      _classCallCheck(this, ComponentWithAnnotations);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ComponentWithAnnotations).call(this, props)); // Determine by url if there is already a deeply linked annotation

      _defineProperty(_assertThisInitialized(_this), "annotator", null);

      _defineProperty(_assertThisInitialized(_this), "emitActiveChangeEvent", function (id) {
        var _assertThisInitialize = _assertThisInitialized(_this),
            annotator = _assertThisInitialize.annotator;

        if (!annotator) {
          return;
        }

        annotator.emit('annotations_active_set', id);
      });

      _defineProperty(_assertThisInitialized(_this), "emitRemoveEvent", function (id) {
        var _assertThisInitialize2 = _assertThisInitialized(_this),
            annotator = _assertThisInitialize2.annotator;

        if (!annotator) {
          return;
        }

        annotator.emit('annotations_remove', id);
      });

      _defineProperty(_assertThisInitialized(_this), "handleAnnotationCreate", function (eventData) {
        var _eventData$annotation = eventData.annotation,
            annotation = _eventData$annotation === void 0 ? null : _eventData$annotation,
            _eventData$error = eventData.error,
            error = _eventData$error === void 0 ? null : _eventData$error,
            _eventData$meta = eventData.meta,
            meta = _eventData$meta === void 0 ? null : _eventData$meta;
        var onError = _this.props.onError;

        if (onError && error) {
          onError(error, 'create_annotation_error', {
            showNotification: true
          });
        }

        _this.setState(_objectSpread({}, _this.state, {
          action: _this.getAction(eventData),
          annotation: annotation,
          error: error,
          meta: meta
        }));
      });

      _defineProperty(_assertThisInitialized(_this), "handleActiveChange", function (_ref) {
        var annotationId = _ref.annotationId,
            fileVersionId = _ref.fileVersionId;

        _this.setState({
          activeAnnotationFileVersionId: fileVersionId,
          activeAnnotationId: annotationId
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleAnnotationFetchError", function (_ref2) {
        var error = _ref2.error;
        var onError = _this.props.onError;

        if (onError && error) {
          onError(error, 'fetch_annotations_error', {
            showNotification: true
          });
        }
      });

      _defineProperty(_assertThisInitialized(_this), "handleAnnotator", function (annotator) {
        _this.annotator = annotator;

        _this.annotator.addListener('annotations_active_change', _this.handleActiveChange);

        _this.annotator.addListener('annotations_create', _this.handleAnnotationCreate);

        _this.annotator.addListener('annotations_fetch_error', _this.handleAnnotationFetchError);
      });

      _defineProperty(_assertThisInitialized(_this), "handlePreviewDestroy", function () {
        var shouldReset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        if (shouldReset) {
          _this.setState(defaultState);
        }

        if (_this.annotator) {
          _this.annotator.removeListener('annotations_active_change', _this.handleActiveChange);

          _this.annotator.removeListener('annotations_create', _this.handleAnnotationCreate);

          _this.annotator.removeListener('annotations_fetch_error', _this.handleAnnotationFetchError);
        }

        _this.annotator = null;
      });

      var location = props.location;

      var match = _this.getMatchPath(location);

      var activeAnnotationId = getProp(match, 'params.annotationId', null); // Seed the initial state with the activeAnnotationId if any from the location path

      _this.state = _objectSpread({}, defaultState, {
        activeAnnotationId: activeAnnotationId
      });
      return _this;
    }

    _createClass(ComponentWithAnnotations, [{
      key: "getAction",
      value: function getAction(_ref3) {
        var status = _ref3.meta.status,
            error = _ref3.error;
        return status === Status.SUCCESS || error ? Action.CREATE_END : Action.CREATE_START;
      }
    }, {
      key: "getAnnotationsPath",
      value: function getAnnotationsPath(fileVersionId, annotationId) {
        if (!fileVersionId) {
          return '/activity';
        }

        return generatePath(ANNOTATIONS_PATH, {
          sidebar: 'activity',
          annotationId: annotationId || undefined,
          fileVersionId: fileVersionId
        });
      }
    }, {
      key: "getMatchPath",
      value: function getMatchPath(location) {
        var pathname = getProp(location, 'pathname', '');
        return matchPath(pathname, {
          path: ANNOTATIONS_PATH,
          exact: true
        });
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement(AnnotatorContext.Provider, {
          value: {
            emitActiveChangeEvent: this.emitActiveChangeEvent,
            emitRemoveEvent: this.emitRemoveEvent,
            getAnnotationsMatchPath: this.getMatchPath,
            getAnnotationsPath: this.getAnnotationsPath,
            state: this.state
          }
        }, React.createElement(WrappedComponent, _extends({}, this.props, {
          onAnnotator: this.handleAnnotator,
          onPreviewDestroy: this.handlePreviewDestroy
        })));
      }
    }]);

    return ComponentWithAnnotations;
  }(React.Component);

  var displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  ComponentWithAnnotations.displayName = "WithAnnotations(".concat(displayName, ")");
  return ComponentWithAnnotations;
}
//# sourceMappingURL=withAnnotations.js.map