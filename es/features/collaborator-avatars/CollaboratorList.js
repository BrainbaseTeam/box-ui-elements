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

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { ModalActions } from '../../components/modal';
import Button from '../../components/button';
import PlainButton from '../../components/plain-button';
import { Link } from '../../components/link';
import CollaborationBadge from '../../icons/badges/CollaborationBadge';
import commonMessages from '../../common/messages';
import CollaboratorListItem from './CollaboratorListItem';
import messages from './messages';
import './CollaboratorList.scss';
var MAX_COLLABORATOR_LIST_SIZE = 90;

var CollaboratorList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CollaboratorList, _React$Component);

  function CollaboratorList() {
    _classCallCheck(this, CollaboratorList);

    return _possibleConstructorReturn(this, _getPrototypeOf(CollaboratorList).apply(this, arguments));
  }

  _createClass(CollaboratorList, [{
    key: "createCollaboratorPageLink",
    value: function createCollaboratorPageLink(children, trackingProp) {
      var item = this.props.item;
      var type = item.type,
          id = item.id;
      var collaboratorsPageLink = "/".concat(type, "/").concat(id, "/collaborators/");
      return React.createElement(Link, _extends({
        href: collaboratorsPageLink,
        rel: "noopener",
        target: "_blank"
      }, trackingProp), children);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          collaborators = _this$props.collaborators,
          onDoneClick = _this$props.onDoneClick,
          maxCollaboratorListSize = _this$props.maxCollaboratorListSize,
          trackingProps = _this$props.trackingProps;
      var usernameProps = trackingProps.usernameProps,
          emailProps = trackingProps.emailProps,
          manageLinkProps = trackingProps.manageLinkProps,
          viewAdditionalProps = trackingProps.viewAdditionalProps,
          doneButtonProps = trackingProps.doneButtonProps;
      var manageAllBtn = React.createElement(PlainButton, {
        className: "manage-all-btn",
        type: "button"
      }, React.createElement(FormattedMessage, messages.manageAllLinkText));
      var maxListSizeToRender = Math.min(maxCollaboratorListSize, MAX_COLLABORATOR_LIST_SIZE);
      return React.createElement("div", {
        className: "usm-collaborator-list"
      }, React.createElement("div", {
        className: "manage-all-btn-container"
      }, this.createCollaboratorPageLink(manageAllBtn, manageLinkProps)), React.createElement("ul", {
        className: "be collaborator-list"
      }, collaborators.slice(0, maxListSizeToRender).map(function (collaborator, index) {
        var collabID = collaborator.collabID,
            type = collaborator.type;
        return React.createElement(CollaboratorListItem, {
          key: "".concat(collabID, "-").concat(type),
          collaborator: collaborator,
          index: index,
          trackingProps: {
            usernameProps: usernameProps,
            emailProps: emailProps
          }
        });
      }), collaborators.length > maxListSizeToRender && React.createElement("li", {
        className: "collaborator-list-item more"
      }, React.createElement("div", null, React.createElement(CollaborationBadge, {
        height: 32,
        width: 32
      })), React.createElement("div", null, this.createCollaboratorPageLink(React.createElement(FormattedMessage, messages.viewAdditionalPeopleText), viewAdditionalProps)))), React.createElement(ModalActions, null, React.createElement(Button, _extends({
        className: "btn-done",
        onClick: onDoneClick
      }, doneButtonProps), React.createElement(FormattedMessage, commonMessages.done))));
    }
  }]);

  return CollaboratorList;
}(React.Component);

_defineProperty(CollaboratorList, "defaultProps", {
  maxCollaboratorListSize: MAX_COLLABORATOR_LIST_SIZE
});

export default CollaboratorList;
//# sourceMappingURL=CollaboratorList.js.map