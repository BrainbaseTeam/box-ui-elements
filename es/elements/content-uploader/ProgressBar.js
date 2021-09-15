function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Component for a progress bar
 */
import React, { PureComponent } from 'react';
import './ProgressBar.scss';

var ProgressBar =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ProgressBar, _PureComponent);

  _createClass(ProgressBar, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var percent = _ref.percent;

      if (percent !== state.percent) {
        return {
          percent: percent
        };
      }

      return null;
    }
    /**
     * [constructor]
     *
     * @return {ProgressBar}
     */

  }]);

  function ProgressBar(props) {
    var _this;

    _classCallCheck(this, ProgressBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProgressBar).call(this, props));
    var percent = props.percent;
    _this.state = {
      percent: percent
    };
    return _this;
  }
  /**
   * Renders the progress bar
   *
   * @return {void}
   */


  _createClass(ProgressBar, [{
    key: "render",
    value: function render() {
      var percent = this.state.percent;
      var containerStyle = {
        transitionDelay: percent > 0 && percent < 100 ? '0' : '0.4s'
      };
      return React.createElement("div", {
        className: "bcu-progress-container",
        style: containerStyle
      }, React.createElement("div", {
        className: "bcu-progress",
        style: {
          width: "".concat(percent, "%")
        }
      }));
    }
  }]);

  return ProgressBar;
}(PureComponent);

_defineProperty(ProgressBar, "defaultProps", {
  percent: 0
});

export default ProgressBar;
//# sourceMappingURL=ProgressBar.js.map