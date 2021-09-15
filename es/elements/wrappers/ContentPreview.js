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
 * @file Base class for the Content Preview ES6 wrapper
 * @author Box
 */
import React from 'react';
import { render as _render } from 'react-dom';
import ES6Wrapper from './ES6Wrapper';
import ContentPreviewResponsive from '../content-preview';

var ContentPreview =
/*#__PURE__*/
function (_ES6Wrapper) {
  _inherits(ContentPreview, _ES6Wrapper);

  function ContentPreview() {
    _classCallCheck(this, ContentPreview);

    return _possibleConstructorReturn(this, _getPrototypeOf(ContentPreview).apply(this, arguments));
  }

  _createClass(ContentPreview, [{
    key: "refreshSidebar",

    /**
     * Helper to programmatically refresh the preview's sidebar panel
     * @returns {void}
     */
    value: function refreshSidebar() {
      this.getComponent().refreshSidebar();
    }
    /** @inheritdoc */

  }, {
    key: "render",
    value: function render() {
      _render(React.createElement(ContentPreviewResponsive, _extends({
        componentRef: this.setComponent,
        fileId: this.id,
        language: this.language,
        messages: this.messages,
        onInteraction: this.onInteraction,
        token: this.token
      }, this.options)), this.container);
    }
  }]);

  return ContentPreview;
}(ES6Wrapper);

global.Box = global.Box || {};
global.Box.ContentPreview = ContentPreview;
export default ContentPreview;
//# sourceMappingURL=ContentPreview.js.map