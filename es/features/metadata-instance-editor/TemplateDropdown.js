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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import classNames from 'classnames';
import isEqual from 'lodash/isEqual';
import { FormattedMessage, injectIntl } from 'react-intl';
import DatalistItem from '../../components/datalist-item';
import SelectorDropdown from '../../components/selector-dropdown';
import SearchForm from '../../components/search-form/SearchForm';
import PlainButton from '../../components/plain-button';
import LoadingIndicator from '../../components/loading-indicator';
import { Flyout, Overlay } from '../../components/flyout';
import MenuToggle from '../../components/dropdown-menu/MenuToggle';
import messages from './messages';
import TEMPLATE_CUSTOM_PROPERTIES from './constants';
import './TemplateDropdown.scss';

var InputContainer = function InputContainer(_ref) {
  var _ref$inputProps = _ref.inputProps,
      inputProps = _ref$inputProps === void 0 ? {} : _ref$inputProps,
      rest = _objectWithoutProperties(_ref, ["inputProps"]);

  return React.createElement(SearchForm, _extends({}, inputProps, rest, {
    shouldPreventClearEventPropagation: true,
    "data-resin-target": "metadata-templatesearch"
  }));
};

var getAvailableTemplates = function getAvailableTemplates(allTemplates, usedTemplates) {
  return allTemplates.filter(function (template) {
    return usedTemplates.findIndex(function (usedTemplate) {
      return usedTemplate.templateKey === template.templateKey && usedTemplate.scope === template.scope;
    }) === -1;
  });
};

var TemplateDropdown =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(TemplateDropdown, _React$PureComponent);

  function TemplateDropdown(props) {
    var _this;

    _classCallCheck(this, TemplateDropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TemplateDropdown).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getDropdown", function () {
      var _this$props = _this.props,
          isDropdownBusy = _this$props.isDropdownBusy,
          onAdd = _this$props.onAdd,
          activeTemplate = _this$props.activeTemplate,
          defaultTemplateIcon = _this$props.defaultTemplateIcon,
          activeTemplateIcon = _this$props.activeTemplateIcon,
          allTemplates = _this$props.templates,
          title = _this$props.title,
          usedTemplates = _this$props.usedTemplates;
      var templates = _this.state.templates;
      var hasUnusedTemplates = getAvailableTemplates(allTemplates, usedTemplates).length > 0;
      var hasTemplates = allTemplates.length > 0;
      var hasResults = templates.length > 0;
      var indicatorOrMessage = null;

      if (isDropdownBusy) {
        indicatorOrMessage = React.createElement(LoadingIndicator, {
          className: "metadata-instance-editor-template-message template-dropdown-loading-indicator"
        });
      } else if (!hasTemplates || !hasUnusedTemplates || !hasResults) {
        var message = {
          id: ''
        };

        if (!hasTemplates) {
          message = messages.metadataTemplatesServerHasNoTemplates;
        } else if (!hasUnusedTemplates) {
          message = messages.metadataTemplatesNoRemainingTemplates;
        } else if (!hasResults) {
          message = messages.metadataTemplatesNoResults;
        }

        indicatorOrMessage = React.createElement("i", {
          className: "metadata-instance-editor-template-message"
        }, React.createElement(FormattedMessage, message));
      }

      var renderedTemplates = templates.map(function (template) {
        var isTemplateSelected = activeTemplate && activeTemplate.id === template.id;
        var buttonClassName = classNames('metadata-template-dropdown-select-template', {
          'metadata-template-dropdown-is-selected': isTemplateSelected
        });
        return React.createElement(DatalistItem, {
          key: template.id
        }, React.createElement(PlainButton, {
          className: buttonClassName,
          tabIndex: "-1",
          type: "button"
        }, isTemplateSelected ? activeTemplateIcon : defaultTemplateIcon, _this.getTemplateName(template)));
      });
      return React.createElement(React.Fragment, null, React.createElement(SelectorDropdown, {
        className: "metadata-instance-editor-template-dropdown-menu",
        title: title,
        isAlwaysOpen: true,
        onSelect: function onSelect(index) {
          onAdd(templates[index]);
        },
        selector: _this.getSelector(),
        shouldScroll: true
      }, indicatorOrMessage ? null : renderedTemplates), indicatorOrMessage);
    });

    _defineProperty(_assertThisInitialized(_this), "getSelector", function () {
      var intl = _this.props.intl;
      var filterText = _this.state.filterText;
      return React.createElement(InputContainer, {
        label: "",
        onChange: _this.handleUserInput,
        placeholder: intl.formatMessage(messages.metadataTemplateSearchPlaceholder),
        type: "text",
        useClearButton: true,
        value: filterText
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleUserInput", function (userInput) {
      var _this$props2 = _this.props,
          allTemplates = _this$props2.templates,
          usedTemplates = _this$props2.usedTemplates;
      var filterText = userInput;
      var templates = getAvailableTemplates(allTemplates, usedTemplates);

      _this.setState({
        filterText: filterText,
        templates: templates.filter(function (template) {
          var label = template.templateKey === TEMPLATE_CUSTOM_PROPERTIES ? messages.customTitle.defaultMessage : template.displayName;
          return label.toLowerCase().includes(filterText.toLowerCase());
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onOpen", function () {
      var _this$props3 = _this.props,
          onDropdownToggle = _this$props3.onDropdownToggle,
          templates = _this$props3.templates,
          usedTemplates = _this$props3.usedTemplates;

      if (onDropdownToggle) {
        onDropdownToggle(true);
      }

      _this.setState({
        isDropdownOpen: true,
        filterText: '',
        templates: getAvailableTemplates(templates, usedTemplates)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onClose", function () {
      var onDropdownToggle = _this.props.onDropdownToggle;

      if (onDropdownToggle) {
        onDropdownToggle(false);
      }

      _this.setState({
        isDropdownOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderEntryButton", function () {
      var entryButton = _this.props.entryButton;
      var isDropdownOpen = _this.state.isDropdownOpen;
      var buttonToggleClassName = classNames('lnk', {
        'is-toggled': isDropdownOpen
      });

      if (entryButton) {
        return entryButton;
      }

      return React.createElement(PlainButton, {
        "data-resin-target": "metadata-templateaddmenu",
        className: buttonToggleClassName,
        type: "button"
      }, React.createElement(MenuToggle, null, React.createElement(FormattedMessage, messages.metadataTemplateAdd)));
    });

    _this.state = {
      isDropdownOpen: false,
      filterText: '',
      templates: getAvailableTemplates(props.templates, props.usedTemplates)
    };
    return _this;
  }
  /**
   * Updates the state
   *
   * @param {Object} prevProps - next props
   * @return {void}
   */


  _createClass(TemplateDropdown, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref2) {
      var prevTemplates = _ref2.templates,
          prevUsedTemplates = _ref2.usedTemplates;
      var _this$props4 = this.props,
          templates = _this$props4.templates,
          usedTemplates = _this$props4.usedTemplates;

      if (!isEqual(prevTemplates, templates) || !isEqual(prevUsedTemplates, usedTemplates)) {
        this.setState({
          templates: getAvailableTemplates(templates, usedTemplates)
        });
      }
    }
  }, {
    key: "getTemplateName",

    /**
     * Returns template display name.
     * For custom metadata we have it on the client.
     *
     * @return {React.Node} - string or formatted name
     */
    value: function getTemplateName(template) {
      return template.templateKey === TEMPLATE_CUSTOM_PROPERTIES ? React.createElement(FormattedMessage, _extends({
        className: "template-display-name"
      }, messages.customTitle)) : React.createElement("div", {
        className: "template-display-name"
      }, template.displayName);
    }
    /**
     * Updates the filter text and filters the results
     *
     * @param {UserInput} userInput - input value returned from onChangeHandler from SearchForm.js
     * @return {void}
     */

  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      var flyoutClassName = classNames('metadata-instance-editor-template-dropdown-flyout', className);
      return React.createElement(Flyout, {
        className: flyoutClassName,
        closeOnClick: true,
        closeOnClickOutside: true,
        onClose: this.onClose,
        onOpen: this.onOpen,
        position: "bottom-left",
        shouldDefaultFocus: true
      }, this.renderEntryButton(), React.createElement(Overlay, null, this.getDropdown()));
    }
  }]);

  return TemplateDropdown;
}(React.PureComponent);

export { TemplateDropdown as TemplateDropdownBase };
export default injectIntl(TemplateDropdown);
//# sourceMappingURL=TemplateDropdown.js.map