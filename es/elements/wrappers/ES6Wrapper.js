function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Base class for the Box UI Elements ES6 wrapper
 * @author Box
 */
import EventEmitter from 'events';
import ReactDOM from 'react-dom';
import i18n from '../common/i18n';
import { DEFAULT_CONTAINER } from '../../constants';

var ES6Wrapper =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(ES6Wrapper, _EventEmitter);

  function ES6Wrapper() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ES6Wrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ES6Wrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "language", i18n.language);

    _defineProperty(_assertThisInitialized(_this), "messages", i18n.messages);

    _defineProperty(_assertThisInitialized(_this), "setComponent", function (component) {
      _this.component = component;
    });

    _defineProperty(_assertThisInitialized(_this), "onInteraction", function (data) {
      _this.emit('interaction', data);
    });

    return _this;
  }

  _createClass(ES6Wrapper, [{
    key: "show",

    /**
     * Shows the content picker.
     *
     * @public
     * @param {string} id - The folder or file id.
     * @param {string} token - The API access token.
     * @param {Object|void} [options] Optional options.
     * @return {void}
     */
    value: function show(id, token) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.id = id;
      this.token = token;
      this.options = options;
      this.options.version = __VERSION__;
      this.emit = this.emit.bind(this);
      var container = options.container || DEFAULT_CONTAINER;
      this.container = container instanceof HTMLElement ? container : document.querySelector(container);
      this.render();
    }
    /**
     * Hides the content picker.
     * Removes all event listeners.
     * Clears out the DOM inside container.
     *
     * @public
     * @return {void}
     */

  }, {
    key: "hide",
    value: function hide() {
      this.removeAllListeners();
      ReactDOM.unmountComponentAtNode(this.container);

      if (this.container) {
        this.container.innerHTML = '';
      }
    }
    /**
     * Renders the component.
     * Should be overriden.
     *
     * @protected
     * @return {void}
     */

  }, {
    key: "render",
    value: function render() {
      throw new Error('Unimplemented!');
    }
    /**
     * Sets reference to the inner component
     *
     * @protected
     * @return {void}
     */

  }, {
    key: "getComponent",

    /**
     * Gets reference to the inner component
     *
     * @public
     * @return {Element}
     */
    value: function getComponent() {
      return this.component;
    }
    /**
     * Clears out the cache used by the component
     *
     * @public
     * @return {Element}
     */

  }, {
    key: "clearCache",
    value: function clearCache() {
      var component = this.getComponent();

      if (component && typeof component.clearCache === 'function') {
        component.clearCache();
      }
    }
    /**
     * Callback for interaction events
     *
     * @return {void}
     */

  }, {
    key: "emit",

    /**
     * Wrapper for emit to prevent JS exceptions
     * in the listeners own code.
     *
     * @public
     * @param {string} eventName - name of the event
     * @param {Object} data - event data
     * @return {boolean} true if the event had listeners, false otherwise.
     */
    value: function emit(eventName, data) {
      try {
        return _get(_getPrototypeOf(ES6Wrapper.prototype), "emit", this).call(this, eventName, data);
      } catch (e) {// do nothing
      }

      return false;
    }
  }]);

  return ES6Wrapper;
}(EventEmitter);

export default ES6Wrapper;
//# sourceMappingURL=ES6Wrapper.js.map