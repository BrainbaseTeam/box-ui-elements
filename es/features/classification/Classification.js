import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import Label from '../../components/label/Label';
import ClassifiedBadge from './ClassifiedBadge';
import messages from './messages';
import './Classification.scss';
var STYLE_INLINE = 'inline';
var STYLE_TOOLTIP = 'tooltip';

var Classification = function Classification(_ref) {
  var definition = _ref.definition,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      messageStyle = _ref.messageStyle,
      name = _ref.name,
      onClick = _ref.onClick;
  var isClassified = !!name;
  var hasDefinition = !!definition;
  var isTooltipMessageEnabled = isClassified && hasDefinition && messageStyle === STYLE_TOOLTIP;
  var isInlineMessageEnabled = isClassified && hasDefinition && messageStyle === STYLE_INLINE;
  var isNotClassifiedMessageVisible = !isClassified && messageStyle === STYLE_INLINE;
  return /*#__PURE__*/React.createElement("article", {
    className: "bdl-Classification ".concat(className)
  }, isClassified && /*#__PURE__*/React.createElement(ClassifiedBadge, {
    name: name,
    onClick: onClick,
    tooltipText: isTooltipMessageEnabled ? definition : undefined
  }), isInlineMessageEnabled && /*#__PURE__*/React.createElement(Label, {
    text: /*#__PURE__*/React.createElement(FormattedMessage, messages.definition)
  }, /*#__PURE__*/React.createElement("p", {
    className: "bdl-Classification-definition"
  }, definition)), isNotClassifiedMessageVisible && /*#__PURE__*/React.createElement("span", {
    className: "bdl-Classification-missingMessage"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.missing)));
};

export { STYLE_INLINE, STYLE_TOOLTIP };
export default Classification;
//# sourceMappingURL=Classification.js.map