function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
 * @file AppActivity component
 */
import * as React from 'react';
import classNames from 'classnames';
import getProp from 'lodash/get';
import noop from 'lodash/noop';
import TetherComponent from 'react-tether';
import { FormattedMessage, injectIntl } from 'react-intl';
import ActivityCard from '../ActivityCard';
import ActivityTimestamp from '../common/activity-timestamp';
import DeleteConfirmation from '../common/delete-confirmation';
import IconTrash from '../../../../icons/general/IconTrash';
import Media from '../../../../components/media';
import messages from './messages';
import { bdlGray80 } from '../../../../styles/variables';
import { Link } from '../../../../components/link';
import { MenuItem } from '../../../../components/menu';
import './AppActivity.scss';

function mapActivityNodes(node) {
  var _node$dataset = node.dataset,
      dataset = _node$dataset === void 0 ? {} : _node$dataset,
      _node$href = node.href,
      href = _node$href === void 0 ? '#' : _node$href,
      tagName = node.tagName,
      textContent = node.textContent;

  switch (tagName) {
    case 'A':
      return React.createElement(Link, {
        href: href,
        "data-resin-target": dataset.resinTarget,
        "data-resin-action": dataset.resinAction,
        key: "app_actvity_link_".concat(href),
        rel: "roreferrer noopener",
        className: "bcs-AppActivity-link",
        target: "_blank"
      }, textContent);

    default:
      return textContent;
  }
}

var AppActivity =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(AppActivity, _React$PureComponent);

  function AppActivity() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AppActivity);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AppActivity)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "parser", new DOMParser());

    _defineProperty(_assertThisInitialized(_this), "state", {
      isConfirmingDelete: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeleteCancel", function () {
      _this.setState({
        isConfirmingDelete: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeleteClick", function () {
      _this.setState({
        isConfirmingDelete: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeleteConfirm", function () {
      var _this$props = _this.props,
          id = _this$props.id,
          onDelete = _this$props.onDelete,
          permissions = _this$props.permissions;
      onDelete({
        id: id,
        permissions: permissions
      });
    });

    _defineProperty(_assertThisInitialized(_this), "parseActivity", function () {
      var renderedText = _this.props.rendered_text;

      var doc = _this.parser.parseFromString(renderedText, 'text/html');

      if (!doc) {
        return [];
      }

      var childNodes = getProp(doc, 'body.childNodes', []);
      return Array.from(childNodes);
    });

    return _this;
  }

  _createClass(AppActivity, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          templateId = _this$props2.activity_template.id,
          _this$props2$app = _this$props2.app,
          name = _this$props2$app.name,
          icon_url = _this$props2$app.icon_url,
          createdAt = _this$props2.created_at,
          createdBy = _this$props2.created_by,
          currentUser = _this$props2.currentUser,
          error = _this$props2.error,
          intl = _this$props2.intl,
          isPending = _this$props2.isPending,
          permissions = _this$props2.permissions;
      var canDelete = getProp(permissions, 'can_delete', false) || currentUser && currentUser.id === createdBy.id;
      var createdAtTimestamp = new Date(createdAt).getTime();
      var isMenuVisible = canDelete && !isPending;
      var isConfirmingDelete = this.state.isConfirmingDelete;
      return React.createElement(ActivityCard, {
        className: "bcs-AppActivity",
        "data-resin-target": "loaded",
        "data-resin-feature": "appActivityCard".concat(templateId)
      }, React.createElement(Media, {
        className: classNames({
          'bcs-is-pending': isPending || error
        })
      }, React.createElement(Media.Figure, null, React.createElement("img", {
        className: "bcs-AppActivity-icon",
        alt: intl.formatMessage(messages.appActivityAltIcon, {
          appActivityName: name
        }),
        src: icon_url
      })), React.createElement(Media.Body, {
        className: "bcs-AppActivity-body"
      }, isMenuVisible && React.createElement(TetherComponent, {
        attachment: "top right",
        className: "bcs-AppActivity-confirm",
        constraints: [{
          to: 'scrollParent',
          attachment: 'together'
        }],
        targetAttachment: "bottom right"
      }, React.createElement(Media.Menu, {
        isDisabled: isConfirmingDelete
      }, React.createElement(MenuItem, {
        onClick: this.handleDeleteClick
      }, React.createElement(IconTrash, {
        color: bdlGray80
      }), React.createElement(FormattedMessage, messages.appActivityDeleteMenuItem))), isConfirmingDelete && React.createElement(DeleteConfirmation, {
        isOpen: isConfirmingDelete,
        message: messages.appActivityDeletePrompt,
        onDeleteCancel: this.handleDeleteCancel,
        onDeleteConfirm: this.handleDeleteConfirm
      })), React.createElement("figcaption", {
        className: "bcs-AppActivity-headline"
      }, name), React.createElement("div", null, React.createElement(ActivityTimestamp, {
        date: createdAtTimestamp
      })), this.parseActivity().map(mapActivityNodes))));
    }
  }]);

  return AppActivity;
}(React.PureComponent);

_defineProperty(AppActivity, "defaultProps", {
  onDelete: noop,
  permissions: {}
});

export default injectIntl(AppActivity);
//# sourceMappingURL=AppActivity.js.map