import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import TemplateDropdown from './TemplateDropdown';
import messages from './messages';
import { isHidden } from './metadataUtil';
import './Header.scss';

var Header = function Header(_ref) {
  var canAdd = _ref.canAdd,
      editors = _ref.editors,
      isDropdownBusy = _ref.isDropdownBusy,
      onAdd = _ref.onAdd,
      templates = _ref.templates,
      title = _ref.title;
  return React.createElement("div", {
    className: "metadata-instance-editor-header"
  }, title || React.createElement("h4", {
    className: "metadata-instance-editor-title"
  }, React.createElement(FormattedMessage, messages.metadataTemplatesTitle)), canAdd && onAdd && React.createElement(TemplateDropdown, {
    isDropdownBusy: isDropdownBusy,
    onAdd: onAdd,
    templates: templates.filter(function (template) {
      return !isHidden(template);
    } // Checking both isHidden and hidden attributes due to differences in V2 and V3 APIs
    ),
    usedTemplates: editors.map(function (editor) {
      return editor.template;
    })
  }));
};

export default Header;
//# sourceMappingURL=Header.js.map