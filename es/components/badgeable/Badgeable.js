import * as React from 'react';
import classnames from 'classnames';
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
  return React.createElement("div", {
    className: classnames('badgeable-container', className)
  }, children, React.createElement("div", {
    className: "badges"
  }, topLeft && React.createElement("div", {
    className: "top-left-badge"
  }, topLeft), topRight && React.createElement("div", {
    className: "top-right-badge"
  }, topRight), bottomLeft && React.createElement("div", {
    className: "bottom-left-badge"
  }, bottomLeft), bottomRight && React.createElement("div", {
    className: "bottom-right-badge"
  }, bottomRight)));
};

export default Badgeable;
//# sourceMappingURL=Badgeable.js.map