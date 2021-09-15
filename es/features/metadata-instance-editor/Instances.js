import * as React from 'react';
import Instance from './Instance';

var Instances = function Instances(_ref) {
  var _ref$isCascadingPolic = _ref.isCascadingPolicyApplicable,
      isCascadingPolicyApplicable = _ref$isCascadingPolic === void 0 ? false : _ref$isCascadingPolic,
      _ref$editors = _ref.editors,
      editors = _ref$editors === void 0 ? [] : _ref$editors,
      onModification = _ref.onModification,
      onRemove = _ref.onRemove,
      onSave = _ref.onSave,
      selectedTemplateKey = _ref.selectedTemplateKey;
  return editors.map(function (_ref2) {
    var _ref2$isDirty = _ref2.isDirty,
        isDirty = _ref2$isDirty === void 0 ? false : _ref2$isDirty,
        instance = _ref2.instance,
        _ref2$hasError = _ref2.hasError,
        hasError = _ref2$hasError === void 0 ? false : _ref2$hasError,
        template = _ref2.template;
    var templateKey = template.templateKey;
    var isOpen = editors.length === 1 || templateKey === selectedTemplateKey;
    return React.createElement(Instance, {
      canEdit: instance.canEdit,
      cascadePolicy: instance.cascadePolicy,
      data: instance.data,
      hasError: hasError,
      id: instance.id,
      isCascadingPolicyApplicable: isCascadingPolicyApplicable,
      isDirty: isDirty,
      isOpen: isOpen,
      key: "".concat(instance.id, "-").concat(templateKey),
      onModification: onModification,
      onSave: onSave,
      onRemove: onRemove,
      template: template
    });
  });
};

export default Instances;
//# sourceMappingURL=Instances.js.map