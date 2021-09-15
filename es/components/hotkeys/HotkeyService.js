function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

import { OrderedMap, OrderedSet } from 'immutable';
import Mousetrap from 'mousetrap';
import uniqueId from 'lodash/uniqueId';
import HotkeyManager from './HotkeyManager'; // An instance of this class represents one hotkey "layer"

var HotkeyService =
/*#__PURE__*/
function () {
  function HotkeyService() {
    var _this = this;

    _classCallCheck(this, HotkeyService);

    // create a fake HTML element to grab the event listener from mousetrap.
    // hacky, but mousetrap unfortunately doesn't expose this handler :(
    this.mousetrap = new Mousetrap({
      addEventListener: function addEventListener(type, callback) {
        _this.mousetrapEventHandler = function (event) {
          if (HotkeyManager.getActiveLayerID() !== _this.layerID) {
            return;
          } // event should not propagate past this layer, no matter what


          event.stopPropagation();
          callback(event);
        };
      }
    });
    this.reset();
    this.layerID = uniqueId('hotkey-layer');
    HotkeyManager.setActiveLayer(this.layerID);
    window.addEventListener('keypress', this.mousetrapEventHandler);
    window.addEventListener('keydown', this.mousetrapEventHandler);
    window.addEventListener('keyup', this.mousetrapEventHandler);
  }

  _createClass(HotkeyService, [{
    key: "destroyLayer",
    value: function destroyLayer() {
      HotkeyManager.removeLayer(this.layerID);
      window.removeEventListener('keypress', this.mousetrapEventHandler);
      window.removeEventListener('keydown', this.mousetrapEventHandler);
      window.removeEventListener('keyup', this.mousetrapEventHandler);
    }
  }, {
    key: "reset",
    value: function reset() {
      // Use an ordered collection since we ultimately display keys in the order they were added
      this.hotkeys = new OrderedMap();
      this.mousetrap.reset();
    }
  }, {
    key: "getActiveHotkeys",
    value: function getActiveHotkeys() {
      // Sort hotkeys into buckets by "type"
      return this.hotkeys.toOrderedSet().reduce(function (hotkeys, hotkey) {
        var type = hotkey.type;

        if (!type) {
          return hotkeys;
        }

        if (!(type in hotkeys)) {
          hotkeys[type] = [];
        }

        hotkeys[type].push(hotkey);
        return hotkeys;
      }, {});
    }
  }, {
    key: "getActiveTypes",
    value: function getActiveTypes() {
      // Get "types" of hotkeys in sorted order, by first hotkey
      // e.g. if the current layer has:
      // [
      //     { key: 'shift+a', type: 'File Selection' },
      //     { key: 'shift+g+a', type: 'Navigation' },
      //     { key: 'shift+x', type: 'File Selection' },
      // ]
      // then this function would output [ 'File Selection', 'Navigation' ].
      // Used to help generate the hotkey help modal menu options.
      return this.hotkeys.reduce(function (types, _ref) {
        var type = _ref.type;
        return type ? types.add(type) : types;
      }, new OrderedSet()).toJS();
    }
  }, {
    key: "registerHotkey",
    value: function registerHotkey(hotkeyConfig) {
      var _this2 = this;

      var key = hotkeyConfig.key,
          handler = hotkeyConfig.handler;
      var keys = Array.isArray(key) ? key : [key];
      var badKeys = keys.filter(function (candidate) {
        return _this2.hotkeys.has(candidate);
      });
      var existingConfig = this.hotkeys.get(keys[0]); // Ignore the whole config if it has already been registered

      if (existingConfig === hotkeyConfig) {
        return;
      } // If any of the keys are being used by another config, abort rudely.


      if (badKeys.length !== 0) {
        throw new Error("This app is trying to bind multiple actions to the hot keys: ".concat(badKeys, "."));
      }

      this.mousetrap.bind(keys, handler);
      keys.forEach(function (keyBinding) {
        _this2.hotkeys = _this2.hotkeys.set(keyBinding, hotkeyConfig);
      });
    }
  }, {
    key: "deregisterHotkey",
    value: function deregisterHotkey(hotkeyConfig) {
      var _this3 = this;

      var key = hotkeyConfig.key;
      var keys = Array.isArray(key) ? key : [key];
      keys.forEach(function (keyBinding) {
        _this3.hotkeys = _this3.hotkeys.delete(keyBinding);
      });
      this.mousetrap.unbind(keys);
    }
  }]);

  return HotkeyService;
}();

export default HotkeyService;
//# sourceMappingURL=HotkeyService.js.map