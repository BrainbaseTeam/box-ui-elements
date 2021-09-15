function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
import noop from 'lodash/noop';
import { matchPath } from 'react-router-dom';
import { getBadUserError } from '../../utils/error';
export default function withSidebarAnnotations(WrappedComponent) {
  var WithSidebarAnnotations =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(WithSidebarAnnotations, _React$Component);

    function WithSidebarAnnotations(props) {
      var _this;

      _classCallCheck(this, WithSidebarAnnotations);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(WithSidebarAnnotations).call(this, props));

      _defineProperty(_assertThisInitialized(_this), "sidebarPanels", React.createRef());

      _defineProperty(_assertThisInitialized(_this), "redirectDeeplinkedAnnotation", function () {
        var _this$props = _this.props,
            file = _this$props.file,
            getAnnotationsPath = _this$props.getAnnotationsPath,
            getAnnotationsMatchPath = _this$props.getAnnotationsMatchPath,
            history = _this$props.history,
            location = _this$props.location;
        var match = getAnnotationsMatchPath(location);
        var annotationId = getProp(match, 'params.annotationId');
        var currentFileVersionId = getProp(file, 'file_version.id');
        var fileVersionId = getProp(match, 'params.fileVersionId');

        if (fileVersionId && fileVersionId !== currentFileVersionId) {
          history.replace(getAnnotationsPath(currentFileVersionId, annotationId));
        }
      });

      _defineProperty(_assertThisInitialized(_this), "updateActiveAnnotation", function () {
        var _this$props2 = _this.props,
            _this$props2$annotato = _this$props2.annotatorState,
            activeAnnotationFileVersionId = _this$props2$annotato.activeAnnotationFileVersionId,
            activeAnnotationId = _this$props2$annotato.activeAnnotationId,
            file = _this$props2.file,
            getAnnotationsMatchPath = _this$props2.getAnnotationsMatchPath,
            getAnnotationsPath = _this$props2.getAnnotationsPath,
            history = _this$props2.history,
            location = _this$props2.location;
        var match = getAnnotationsMatchPath(location);
        var currentFileVersionId = getProp(file, 'file_version.id');
        var defaultFileVersionId = activeAnnotationFileVersionId || currentFileVersionId;
        var fileVersionId = getProp(match, 'params.fileVersionId', defaultFileVersionId);
        var newLocationState = activeAnnotationId ? {
          open: true
        } : location.state; // Update the location pathname and open state if transitioning to an active annotation id, force the sidebar open

        history.push({
          pathname: getAnnotationsPath(fileVersionId, activeAnnotationId),
          state: newLocationState
        });
      });

      _defineProperty(_assertThisInitialized(_this), "updateActiveVersion", function () {
        var _this$props3 = _this.props,
            api = _this$props3.api,
            file = _this$props3.file,
            fileId = _this$props3.fileId,
            getAnnotationsMatchPath = _this$props3.getAnnotationsMatchPath,
            getAnnotationsPath = _this$props3.getAnnotationsPath,
            history = _this$props3.history,
            location = _this$props3.location,
            onVersionChange = _this$props3.onVersionChange;
        var feedAPI = api.getFeedAPI(false);
        var match = getAnnotationsMatchPath(location);
        var currentFileVersionId = getProp(file, 'file_version.id');
        var fileVersionId = getProp(match, 'params.fileVersionId');

        var _ref = feedAPI.getCachedItems(fileId) || {},
            _ref$items = _ref.items,
            feedItems = _ref$items === void 0 ? [] : _ref$items;

        var version = feedItems.filter(function (item) {
          return item.type === 'file_version';
        }).find(function (item) {
          return item.id === fileVersionId;
        });

        if (version) {
          onVersionChange(version, {
            currentVersionId: currentFileVersionId,
            updateVersionToCurrent: function updateVersionToCurrent() {
              return history.push(getAnnotationsPath(currentFileVersionId));
            }
          });
        }
      });

      _this.redirectDeeplinkedAnnotation();

      return _this;
    }

    _createClass(WithSidebarAnnotations, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this$props4 = this.props,
            annotatorState = _this$props4.annotatorState,
            fileId = _this$props4.fileId,
            getAnnotationsMatchPath = _this$props4.getAnnotationsMatchPath,
            location = _this$props4.location,
            onVersionChange = _this$props4.onVersionChange;
        var prevAnnotatorState = prevProps.annotatorState,
            prevFileId = prevProps.fileId,
            prevLocation = prevProps.location;
        var activeAnnotationId = annotatorState.activeAnnotationId,
            annotation = annotatorState.annotation;
        var prevActiveAnnotationId = prevAnnotatorState.activeAnnotationId,
            prevAnnotation = prevAnnotatorState.annotation;
        var match = getAnnotationsMatchPath(location);
        var prevMatch = getAnnotationsMatchPath(prevLocation);
        var fileVersionId = getProp(match, 'params.fileVersionId');
        var hasActiveAnnotationChanged = prevActiveAnnotationId !== activeAnnotationId;
        var isAnnotationsPath = !!match;
        var isTransitioningToAnnotationPath = activeAnnotationId && !isAnnotationsPath;
        var prevFileVersionId = getProp(prevMatch, 'params.fileVersionId');

        if (annotation && prevAnnotation !== annotation) {
          this.addAnnotation();
        } // Active annotation id changed. If location is currently an annotation path or
        // if location is not currently an annotation path but the active annotation id
        // transitioned from falsy to truthy, update the location accordingly


        if (hasActiveAnnotationChanged && (isAnnotationsPath || isTransitioningToAnnotationPath)) {
          this.updateActiveAnnotation();
        }

        if (fileVersionId && prevFileVersionId !== fileVersionId) {
          this.updateActiveVersion();
        }

        if (prevFileId !== fileId) {
          // If the file id has changed, reset the current version id since the previous (possibly versioned)
          // location is no longer active
          onVersionChange(null);
        }
      }
    }, {
      key: "addAnnotation",
      value: function addAnnotation() {
        var _this$props5 = this.props,
            _this$props5$annotato = _this$props5.annotatorState,
            action = _this$props5$annotato.action,
            annotation = _this$props5$annotato.annotation,
            _this$props5$annotato2 = _this$props5$annotato.meta;
        _this$props5$annotato2 = _this$props5$annotato2 === void 0 ? {} : _this$props5$annotato2;
        var requestId = _this$props5$annotato2.requestId,
            api = _this$props5.api,
            currentUser = _this$props5.currentUser,
            file = _this$props5.file,
            fileId = _this$props5.fileId,
            isOpen = _this$props5.isOpen,
            location = _this$props5.location;

        if (!requestId) {
          return;
        } // TODO: need to address in follow on -- currentUser may be undefined here but is never fetched for sure until ActivitySidebar


        if (!currentUser) {
          throw getBadUserError();
        }

        var feedAPI = api.getFeedAPI(false);
        var pathname = getProp(location, 'pathname', '');
        var isActivity = matchPath(pathname, '/activity');
        var isPending = action === 'create_start';

        var _ref2 = feedAPI.getCachedItems(fileId) || {},
            hasItems = _ref2.items;

        var current = this.sidebarPanels.current; // If there are existing items in the cache for this file, then patch the cache with the new annotation
        // If there are no cache entry for feeditems, then it is assumed that it has not yet been fetched.

        if (hasItems) {
          feedAPI.addAnnotation(file, currentUser, annotation, requestId, isPending);
        } // If the activity sidebar is currently open, then force it to refresh with the updated data


        if (current && isActivity && isOpen) {
          current.refresh(false);
        }
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement(WrappedComponent, _extends({
          ref: this.sidebarPanels
        }, this.props));
      }
    }]);

    return WithSidebarAnnotations;
  }(React.Component);

  _defineProperty(WithSidebarAnnotations, "defaultProps", {
    annotatorState: {},
    getAnnotationsMatchPath: noop,
    getAnnotationsPath: noop,
    onVersionChange: noop
  });

  var displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  WithSidebarAnnotations.displayName = "WithSidebarAnnotations(".concat(displayName, ")");
  return WithSidebarAnnotations;
}
//# sourceMappingURL=withSidebarAnnotations.js.map