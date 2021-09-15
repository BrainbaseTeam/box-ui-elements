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

/**
 * 
 * @file Preview sidebar additional tabs component
 * @author Box
 */
import React, { PureComponent } from 'react';
import AdditionalTab from './AdditionalTab';
import AdditionalTabsLoading from './AdditionalTabsLoading';
import './AdditionalTabs.scss';

var AdditionalTabs =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(AdditionalTabs, _PureComponent);

  function AdditionalTabs(props) {
    var _this;

    _classCallCheck(this, AdditionalTabs);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AdditionalTabs).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "numLoadedTabs", 0);

    _defineProperty(_assertThisInitialized(_this), "onImageLoad", function () {
      var tabs = _this.props.tabs;

      if (!tabs) {
        return;
      }

      var hasMoreTab = tabs.find(function (tab) {
        return tab.id < 0 && !tab.iconUrl;
      });
      var numTabs = tabs.length - (hasMoreTab ? 1 : 0);
      _this.numLoadedTabs += 1;

      if (_this.numLoadedTabs === numTabs) {
        _this.setState({
          isLoading: false
        });
      }
    });

    _this.state = {
      isLoading: true
    };
    return _this;
  }
  /**
   * Handles an individual icon image load
   *
   * @return {void}
   */


  _createClass(AdditionalTabs, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var tabs = this.props.tabs;
      var isLoading = this.state.isLoading;
      return React.createElement("div", {
        className: "bdl-AdditionalTabs"
      }, isLoading && React.createElement(AdditionalTabsLoading, null), tabs && tabs.map(function (tabData) {
        return React.createElement(AdditionalTab, _extends({
          key: tabData.id,
          onImageLoad: _this2.onImageLoad,
          isLoading: isLoading
        }, tabData));
      }));
    }
  }]);

  return AdditionalTabs;
}(PureComponent);

export default AdditionalTabs;
//# sourceMappingURL=AdditionalTabs.js.map