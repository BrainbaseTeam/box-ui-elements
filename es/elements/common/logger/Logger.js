function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
import noop from 'lodash/noop';
import uuidv4 from 'uuid/v4';
import { isMarkSupported } from '../../../utils/performance';
import { EVENT_JS_READY } from './constants';
import { METRIC_TYPE_PREVIEW, METRIC_TYPE_ELEMENTS_LOAD_METRIC } from '../../../constants';
var SESSION_ID = uuidv4();
var uniqueEvents = new Set();

var Logger =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Logger, _React$Component);

  function Logger(props) {
    var _this;

    _classCallCheck(this, Logger);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Logger).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handlePreviewMetric", function (data) {
      var onMetric = _this.props.onMetric;
      onMetric(_objectSpread({}, data, {
        type: METRIC_TYPE_PREVIEW
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "handleReadyMetric", function (data) {
      if (!isMarkSupported) {
        return;
      }

      var startMarkName = _this.props.startMarkName;

      var metricData = _objectSpread({}, data, {
        startMarkName: startMarkName
      });

      _this.logUniqueMetric(METRIC_TYPE_ELEMENTS_LOAD_METRIC, EVENT_JS_READY, metricData);
    });

    _this.loggerProps = {
      onPreviewMetric: _this.handlePreviewMetric,
      onReadyMetric: _this.handleReadyMetric
    };
    return _this;
  }

  _createClass(Logger, [{
    key: "createEventName",

    /**
     * Creates an event name meant for use with an event which is unique and meant to be logged only once
     *
     * @param {string} name - The event name
     * @returns {string} A string containing the component and event name
     */
    value: function createEventName(name) {
      var source = this.props.source;
      return "".concat(source, "::").concat(name);
    }
    /**
     * Checks to see if the specified event for the component has already been fired.
     *
     * @param {string} component - the component name
     * @param {string} name - the event name
     * @returns {boolean} True if the event has already been fired
     */

  }, {
    key: "hasLoggedEvent",
    value: function hasLoggedEvent(name) {
      return this.uniqueEvents.has(name);
    }
    /**
     * Invokes the provided metric logging callback.
     *
     * @param {string} type - the type of the event
     * @param {string} name - the name of the event
     * @param {Object} data  - the event data
     */

  }, {
    key: "logMetric",
    value: function logMetric(type, name, data) {
      var _this$props = this.props,
          onMetric = _this$props.onMetric,
          source = _this$props.source;

      var metric = _objectSpread({}, data, {
        component: source,
        name: name,
        timestamp: this.getTimestamp(),
        sessionId: this.sessionId,
        type: type
      });

      onMetric(metric);
    }
    /**
     * Logs a unique metric event. Prevents duplicate events from being logged in the session.
     *
     * @param {string} type - the type of the event
     * @param {string} name - the name of the event
     * @param {Object} data  - the event data
     */

  }, {
    key: "logUniqueMetric",
    value: function logUniqueMetric(type, name, data) {
      var eventName = this.createEventName(name);

      if (this.hasLoggedEvent(eventName)) {
        return;
      }

      this.logMetric(type, name, data);
      this.uniqueEvents.add(eventName);
    }
    /**
     * Preview metric handler
     *
     * @param {Object} data - the metric data
     * @returns {void}
     */

  }, {
    key: "getTimestamp",

    /**
     * Create an ISO Timestamp for right now.
     *
     * @returns {string}
     */
    value: function getTimestamp() {
      return new Date().toISOString();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          onMetric = _this$props2.onMetric,
          startMarkName = _this$props2.startMarkName,
          rest = _objectWithoutProperties(_this$props2, ["children", "onMetric", "startMarkName"]);

      return React.cloneElement(children, _objectSpread({}, rest, {
        logger: this.loggerProps
      }));
    }
  }, {
    key: "uniqueEvents",
    get: function get() {
      return uniqueEvents;
    }
  }, {
    key: "sessionId",
    get: function get() {
      return SESSION_ID;
    }
  }]);

  return Logger;
}(React.Component);

_defineProperty(Logger, "defaultProps", {
  onMetric: noop
});

export default Logger;
//# sourceMappingURL=Logger.js.map