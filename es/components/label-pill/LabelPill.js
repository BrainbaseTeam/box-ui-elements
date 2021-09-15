function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import classNames from 'classnames';
import startCase from 'lodash/startCase';
import LabelPillIcon from './LabelPillIcon';
import LabelPillText from './LabelPillText';
import './LabelPill.scss';
export var LabelPillStatus;

(function (LabelPillStatus) {
  LabelPillStatus["DEFAULT"] = "default";
  LabelPillStatus["INFO"] = "info";
  LabelPillStatus["FTUX"] = "ftux";
  LabelPillStatus["HIGHLIGHT"] = "highlight";
  LabelPillStatus["SUCCESS"] = "success";
  LabelPillStatus["WARNING"] = "warning";
  LabelPillStatus["ALERT"] = "alert";
  LabelPillStatus["ERROR"] = "error";
})(LabelPillStatus || (LabelPillStatus = {}));

export var LabelPillSize;

(function (LabelPillSize) {
  LabelPillSize["REGULAR"] = "regular";
  LabelPillSize["LARGE"] = "large";
})(LabelPillSize || (LabelPillSize = {}));

var LabelPillContainer = React.forwardRef(function (props, ref) {
  var children = props.children,
      _props$type = props.type,
      type = _props$type === void 0 ? LabelPillStatus.DEFAULT : _props$type,
      _props$size = props.size,
      size = _props$size === void 0 ? LabelPillSize.REGULAR : _props$size,
      className = props.className,
      rest = _objectWithoutProperties(props, ["children", "type", "size", "className"]);

  var labelPillClasses = classNames('bdl-LabelPill', "bdl-LabelPill--".concat(type), "bdl-LabelPill--size".concat(startCase(size)), className);
  return React.createElement("span", _extends({
    ref: ref,
    className: labelPillClasses
  }, rest), children);
});
LabelPillContainer.displayName = 'LabelPill';
var LabelPill = {
  Pill: LabelPillContainer,
  Text: LabelPillText,
  Icon: LabelPillIcon
};
export default LabelPill;
//# sourceMappingURL=LabelPill.js.map