function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HotkeyManager = function HotkeyManager() {
  var _this = this;

  _classCallCheck(this, HotkeyManager);

  _defineProperty(this, "layerStack", []);

  _defineProperty(this, "setActiveLayer", function (layerID) {
    _this.layerStack.push(layerID);
  });

  _defineProperty(this, "removeLayer", function (layerID) {
    // $FlowFixMe
    _this.layerStack = _this.layerStack.filter(function (thisLayerID) {
      return thisLayerID !== layerID;
    });
  });

  _defineProperty(this, "getActiveLayerID", function () {
    if (_this.layerStack.length === 0) {
      return null;
    }

    return _this.layerStack[_this.layerStack.length - 1];
  });
}; // This is a singleton service to maintain the global hotkey layer stack


export default new HotkeyManager();
//# sourceMappingURL=HotkeyManager.js.map