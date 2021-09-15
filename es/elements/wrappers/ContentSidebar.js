function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * 
 * @file Base class for the Content Sidebar ES6 wrapper
 * @author Box
 */
import React from 'react';
import { render as _render } from 'react-dom';
import ES6Wrapper from './ES6Wrapper';
import ContentSidebarComponent from '../content-sidebar';

var ContentSidebar =
/*#__PURE__*/
function (_ES6Wrapper) {
  _inherits(ContentSidebar, _ES6Wrapper);

  function ContentSidebar() {
    _classCallCheck(this, ContentSidebar);

    return _possibleConstructorReturn(this, _getPrototypeOf(ContentSidebar).apply(this, arguments));
  }

  _createClass(ContentSidebar, [{
    key: "refresh",

    /**
     * Helper to programmatically refresh the current sidebar panel
     * @returns {void}
     */
    value: function refresh() {
      this.getComponent().refresh();
    }
    /** @inheritdoc */

  }, {
    key: "render",
    value: function render() {
      _render(React.createElement(ContentSidebarComponent, _extends({
        componentRef: this.setComponent,
        fileId: this.id,
        language: this.language,
        messages: this.messages,
        onInteraction: this.onInteraction,
        token: this.token
      }, this.options)), this.container);
    }
  }]);

  return ContentSidebar;
}(ES6Wrapper);

global.Box = global.Box || {};
global.Box.ContentSidebar = ContentSidebar;
export default ContentSidebar;
//# sourceMappingURL=ContentSidebar.js.map