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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlainButton from '../../components/plain-button';
import { Flyout, Overlay } from '../../components/flyout';
import PresenceCollaboratorsList from './PresenceCollaboratorsList';
import { collaboratorsPropType, flyoutPositionPropType } from './propTypes';
import './Presence.scss'; // eslint-disable-next-line react/prefer-stateless-function

var PresenceLink =
/*#__PURE__*/
function (_Component) {
  _inherits(PresenceLink, _Component);

  function PresenceLink() {
    _classCallCheck(this, PresenceLink);

    return _possibleConstructorReturn(this, _getPrototypeOf(PresenceLink).apply(this, arguments));
  }

  _createClass(PresenceLink, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          collaborators = _this$props.collaborators,
          onFlyoutScroll = _this$props.onFlyoutScroll,
          containerAttributes = _this$props.containerAttributes,
          flyoutPosition = _this$props.flyoutPosition;

      if (collaborators.length === 0) {
        return null;
      }

      return React.createElement(Flyout, {
        className: "presence ".concat(className),
        position: flyoutPosition
      }, React.createElement("div", _extends({
        className: "presence-link-container"
      }, containerAttributes), React.createElement(PlainButton, null, children)), React.createElement(Overlay, {
        shouldDefaultFocus: false
      }, React.createElement(PresenceCollaboratorsList, {
        collaborators: collaborators,
        onScroll: onFlyoutScroll
      })));
    }
  }]);

  return PresenceLink;
}(Component);

_defineProperty(PresenceLink, "propTypes", {
  children: PropTypes.node,
  className: PropTypes.string,
  collaborators: PropTypes.arrayOf(collaboratorsPropType).isRequired,

  /** Addtional attributes for presenceLink container */
  containerAttributes: PropTypes.object,
  onFlyoutScroll: PropTypes.func,

  /** Option to change the orientation of the dropdown. MUST be: bottom-right, bottom-left, bottom-center etc. or in this specific format */
  flyoutPosition: flyoutPositionPropType
});

_defineProperty(PresenceLink, "defaultProps", {
  className: '',
  flyoutPosition: 'bottom-right'
});

export default PresenceLink;
//# sourceMappingURL=PresenceLink.js.map