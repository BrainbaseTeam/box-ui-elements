function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { FormattedDate, FormattedMessage } from 'react-intl';
import { isValidDate } from '../../utils/datetime';
import Label from '../../components/label/Label';
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';
import ClassifiedBadge from './ClassifiedBadge';
import SecurityControls from './security-controls';
import messages from './messages';
import './Classification.scss';
var STYLE_INLINE = 'inline';
var STYLE_TOOLTIP = 'tooltip';

var Classification = function Classification(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      color = _ref.color,
      controls = _ref.controls,
      controlsFormat = _ref.controlsFormat,
      definition = _ref.definition,
      _ref$isImportedClassi = _ref.isImportedClassification,
      isImportedClassification = _ref$isImportedClassi === void 0 ? false : _ref$isImportedClassi,
      isLoadingControls = _ref.isLoadingControls,
      _ref$itemName = _ref.itemName,
      itemName = _ref$itemName === void 0 ? '' : _ref$itemName,
      maxAppCount = _ref.maxAppCount,
      messageStyle = _ref.messageStyle,
      modifiedAt = _ref.modifiedAt,
      modifiedBy = _ref.modifiedBy,
      name = _ref.name,
      onClick = _ref.onClick;
  var isClassified = !!name;
  var hasDefinition = !!definition;
  var hasModifiedAt = !!modifiedAt;
  var hasModifiedBy = !!modifiedBy;
  var hasSecurityControls = !!controls;
  var isTooltipMessageEnabled = isClassified && hasDefinition && messageStyle === STYLE_TOOLTIP;
  var isInlineMessageEnabled = isClassified && hasDefinition && messageStyle === STYLE_INLINE;
  var isNotClassifiedMessageVisible = !isClassified && messageStyle === STYLE_INLINE;
  var isControlsIndicatorEnabled = isClassified && isLoadingControls && messageStyle === STYLE_INLINE;
  var isSecurityControlsEnabled = isClassified && !isLoadingControls && hasSecurityControls && messageStyle === STYLE_INLINE;
  var modifiedDate = new Date(modifiedAt || 0);
  var isModifiedMessageVisible = isClassified && hasModifiedAt && isValidDate(modifiedDate) && hasModifiedBy && messageStyle === STYLE_INLINE;
  var formattedModifiedAt = isModifiedMessageVisible && React.createElement(FormattedDate, {
    value: modifiedDate,
    month: "long",
    year: "numeric",
    day: "numeric"
  });
  var modifiedByMessage = isImportedClassification ? messages.importedBy : messages.modifiedBy;
  return React.createElement("article", {
    className: "bdl-Classification ".concat(className)
  }, isClassified && React.createElement(ClassifiedBadge, {
    color: color,
    name: name,
    onClick: onClick,
    tooltipText: isTooltipMessageEnabled ? definition : undefined
  }), isInlineMessageEnabled && React.createElement(Label, {
    text: React.createElement(FormattedMessage, messages.definition)
  }, React.createElement("p", {
    className: "bdl-Classification-definition"
  }, definition)), isNotClassifiedMessageVisible && React.createElement("span", {
    className: "bdl-Classification-missingMessage"
  }, React.createElement(FormattedMessage, messages.missing)), isModifiedMessageVisible && React.createElement(Label, {
    text: React.createElement(FormattedMessage, messages.modifiedByLabel)
  }, React.createElement("p", {
    className: "bdl-Classification-modifiedBy",
    "data-testid": "classification-modifiedby"
  }, React.createElement(FormattedMessage, _extends({}, modifiedByMessage, {
    values: {
      modifiedAt: formattedModifiedAt,
      modifiedBy: modifiedBy
    }
  })))), isSecurityControlsEnabled && React.createElement(SecurityControls, {
    classificationColor: color,
    classificationName: name,
    controls: controls,
    controlsFormat: controlsFormat,
    definition: definition,
    itemName: itemName,
    maxAppCount: maxAppCount,
    shouldRenderLabel: true
  }), isControlsIndicatorEnabled && React.createElement(LoadingIndicator, null));
};

export { STYLE_INLINE, STYLE_TOOLTIP };
export default Classification;
//# sourceMappingURL=Classification.js.map