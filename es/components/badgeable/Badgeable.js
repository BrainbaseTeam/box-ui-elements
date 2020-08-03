import * as React from 'react';
import './Badgeable.scss';

var Badgeable = function Badgeable(props) {
  var children = props.children,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$topLeft = props.topLeft,
      topLeft = _props$topLeft === void 0 ? null : _props$topLeft,
      _props$topRight = props.topRight,
      topRight = _props$topRight === void 0 ? null : _props$topRight,
      _props$bottomLeft = props.bottomLeft,
      bottomLeft = _props$bottomLeft === void 0 ? null : _props$bottomLeft,
      _props$bottomRight = props.bottomRight,
      bottomRight = _props$bottomRight === void 0 ? null : _props$bottomRight;
  return /*#__PURE__*/React.createElement("div", {
    className: "badgeable-container ".concat(className)
  }, children, /*#__PURE__*/React.createElement("div", {
    className: "badges"
  }, topLeft && /*#__PURE__*/React.createElement("div", {
    className: "top-left-badge"
  }, topLeft), topRight && /*#__PURE__*/React.createElement("div", {
    className: "top-right-badge"
  }, topRight), bottomLeft && /*#__PURE__*/React.createElement("div", {
    className: "bottom-left-badge"
  }, bottomLeft), bottomRight && /*#__PURE__*/React.createElement("div", {
    className: "bottom-right-badge"
  }, bottomRight)));
};

export default Badgeable;
//# sourceMappingURL=Badgeable.js.map