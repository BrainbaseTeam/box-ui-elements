import * as React from 'react';
import ScrollWrapper from '../../components/scroll-wrapper';
import Header from './Header';
import Instances from './Instances';
import EmptyContent from './EmptyContent';
import MetadataInstanceEditorContext from './MetadataInstanceEditorContext';
import './MetadataInstanceEditor.scss';

var MetadataInstanceEditor = function MetadataInstanceEditor(_ref) {
  var blurExceptionClassNames = _ref.blurExceptionClassNames,
      canAdd = _ref.canAdd,
      _ref$isCascadingPolic = _ref.isCascadingPolicyApplicable,
      isCascadingPolicyApplicable = _ref$isCascadingPolic === void 0 ? false : _ref$isCascadingPolic,
      isDropdownBusy = _ref.isDropdownBusy,
      _ref$editors = _ref.editors,
      editors = _ref$editors === void 0 ? [] : _ref$editors,
      onModification = _ref.onModification,
      onRemove = _ref.onRemove,
      onAdd = _ref.onAdd,
      onSave = _ref.onSave,
      selectedTemplateKey = _ref.selectedTemplateKey,
      templates = _ref.templates,
      title = _ref.title;
  return React.createElement(MetadataInstanceEditorContext.Provider, {
    value: {
      blurExceptionClassNames: blurExceptionClassNames
    }
  }, React.createElement("div", {
    className: "metadata-instance-editor"
  }, React.createElement(Header, {
    canAdd: canAdd,
    editors: editors,
    isDropdownBusy: isDropdownBusy,
    onAdd: onAdd,
    templates: templates,
    title: title
  }), editors.length === 0 ? React.createElement(EmptyContent, {
    canAdd: canAdd
  }) : React.createElement(ScrollWrapper, null, React.createElement(Instances, {
    editors: editors,
    isCascadingPolicyApplicable: isCascadingPolicyApplicable,
    onModification: onModification,
    onRemove: onRemove,
    onSave: onSave,
    selectedTemplateKey: selectedTemplateKey
  }))));
};

export default MetadataInstanceEditor;
//# sourceMappingURL=MetadataInstanceEditor.js.map