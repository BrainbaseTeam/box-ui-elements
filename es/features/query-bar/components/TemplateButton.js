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

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import MetadataDefaultBadge from '../../../icons/badges/MetadataDefaultBadge';
import MetadataActiveBadge from '../../../icons/badges/MetadataActiveBadge';
import TemplateDropdown from '../../metadata-instance-editor/TemplateDropdown';
import Button from '../../../components/button/Button';
import MenuToggle from '../../../components/dropdown-menu/MenuToggle';
import messages from '../messages';
import LoadingIndicator from '../../../components/loading-indicator';

var TemplateButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TemplateButton, _React$Component);

  function TemplateButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TemplateButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TemplateButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isTemplateMenuOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "toggleTemplateDropdownButton", function () {
      _this.setState({
        isTemplateMenuOpen: !_this.state.isTemplateMenuOpen
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateActiveTemplate", function (template) {
      var onTemplateChange = _this.props.onTemplateChange;

      if (onTemplateChange) {
        onTemplateChange(template);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderEntryButton", function () {
      var _this$props = _this.props,
          templates = _this$props.templates,
          activeTemplate = _this$props.activeTemplate;
      var icon;
      var text;
      var isLoadingTemplates = !templates;
      var hasTemplates = templates && templates.length > 0;

      if (isLoadingTemplates) {
        icon = React.createElement(LoadingIndicator, {
          className: "loading-indicator"
        });
        text = React.createElement(FormattedMessage, messages.templatesLoadingButtonText);
      } else if (!hasTemplates) {
        text = React.createElement(FormattedMessage, messages.noTemplatesText);
      } else if (activeTemplate) {
        icon = React.createElement(MetadataActiveBadge, null);
        text = activeTemplate.displayName;
      } else if (!activeTemplate) {
        icon = React.createElement(MetadataDefaultBadge, null);
        text = React.createElement(FormattedMessage, messages.templatesButtonText);
      }

      var buttonClasses = classNames('query-bar-button', {
        'is-active': activeTemplate
      });
      return React.createElement(Button, {
        className: buttonClasses,
        isDisabled: !templates || templates.length === 0,
        type: "button",
        onClick: _this.toggleTemplateDropdownButton
      }, React.createElement(MenuToggle, null, icon, React.createElement("span", {
        className: "button-label"
      }, text)));
    });

    _defineProperty(_assertThisInitialized(_this), "renderTitle", function () {
      return React.createElement("div", {
        className: "template-dropdown-list-title"
      }, React.createElement(FormattedMessage, messages.metadataViewTemplateListHeaderTitle));
    });

    return _this;
  }

  _createClass(TemplateButton, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          activeTemplate = _this$props2.activeTemplate,
          templates = _this$props2.templates,
          usedTemplates = _this$props2.usedTemplates;
      return React.createElement(TemplateDropdown, {
        className: "query-bar-template-dropdown-flyout",
        defaultTemplateIcon: React.createElement(MetadataDefaultBadge, {
          className: "template-list-item-badge"
        }),
        title: this.renderTitle(),
        onAdd: this.updateActiveTemplate,
        activeTemplate: activeTemplate,
        activeTemplateIcon: React.createElement(MetadataActiveBadge, {
          className: "template-list-item-badge"
        }),
        templates: templates || [],
        usedTemplates: usedTemplates,
        entryButton: this.renderEntryButton()
      });
    }
  }]);

  return TemplateButton;
}(React.Component);

_defineProperty(TemplateButton, "defaultProps", {
  usedTemplates: []
});

export default TemplateButton;
//# sourceMappingURL=TemplateButton.js.map