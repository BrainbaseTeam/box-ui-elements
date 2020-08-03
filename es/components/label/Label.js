function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import commonMessages from '../../common/messages';
import InfoIconWithTooltip from './InfoIconWithTooltip';
import StandardLabel from './StandardLabel';
import HiddenLabel from './HiddenLabel';
import './Label.scss';

var OptionalFormattedMessage = function OptionalFormattedMessage() {
  return /*#__PURE__*/React.createElement("span", {
    className: "label-optional"
  }, "(", /*#__PURE__*/React.createElement(FormattedMessage, commonMessages.optional), ")");
};

var Label = function Label(_ref) {
  var text = _ref.text,
      tooltip = _ref.tooltip,
      infoTooltip = _ref.infoTooltip,
      infoIconProps = _ref.infoIconProps,
      showOptionalText = _ref.showOptionalText,
      hideLabel = _ref.hideLabel,
      children = _ref.children;
  var labelContent = [/*#__PURE__*/React.createElement("span", {
    key: "labelText"
  }, text), showOptionalText ? /*#__PURE__*/React.createElement(OptionalFormattedMessage, {
    key: "optionalMessage"
  }) : null];

  if (infoTooltip) {
    labelContent.push( /*#__PURE__*/React.createElement(InfoIconWithTooltip, {
      key: "infoTooltip",
      iconProps: _objectSpread({
        className: 'tooltip-icon'
      }, infoIconProps),
      tooltipText: infoTooltip
    }));
  }

  if (hideLabel) {
    return /*#__PURE__*/React.createElement(HiddenLabel, {
      labelContent: labelContent
    }, children);
  }

  return /*#__PURE__*/React.createElement(StandardLabel, {
    labelContent: labelContent,
    tooltip: tooltip
  }, children);
};

export default Label;
//# sourceMappingURL=Label.js.map