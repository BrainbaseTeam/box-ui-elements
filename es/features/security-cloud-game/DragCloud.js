function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import React from 'react';
import IconCloud from '../../icons/general/IconCloud';

var DropShadowFilter = function DropShadowFilter() {
  return /*#__PURE__*/React.createElement("filter", {
    id: "drop-shadow"
  }, /*#__PURE__*/React.createElement("feGaussianBlur", {
    in: "SourceAlpha",
    stdDeviation: "2"
  }), /*#__PURE__*/React.createElement("feOffset", {
    dx: "2",
    dy: "2",
    result: "offsetblur"
  }), /*#__PURE__*/React.createElement("feFlood", {
    floodColor: "black",
    floodOpacity: "0.3"
  }), /*#__PURE__*/React.createElement("feComposite", {
    in2: "offsetblur",
    operator: "in"
  }), /*#__PURE__*/React.createElement("feMerge", null, /*#__PURE__*/React.createElement("feMergeNode", null), /*#__PURE__*/React.createElement("feMergeNode", {
    in: "SourceGraphic"
  })));
};
/**
 * react-draggable requires component that supports onMouseDown, onMouseUp, onTouchStart, and onTouchEnd so we need
 * to explicitly pass them through here.
 */


var DragCloud = function DragCloud(_ref) {
  var className = _ref.className,
      _ref$cloudSize = _ref.cloudSize,
      cloudSize = _ref$cloudSize === void 0 ? 64 : _ref$cloudSize,
      onMouseDown = _ref.onMouseDown,
      onMouseUp = _ref.onMouseUp,
      onTouchEnd = _ref.onTouchEnd,
      onTouchStart = _ref.onTouchStart,
      position = _ref.position,
      style = _ref.style;
  var x = position.x,
      y = position.y;
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    React.createElement("div", {
      className: "drag-cloud ".concat(className),
      onMouseDown: onMouseDown,
      onMouseUp: onMouseUp,
      onTouchEnd: onTouchEnd,
      onTouchStart: onTouchStart,
      style: _objectSpread(_objectSpread({}, style), {}, {
        top: "".concat(y, "px"),
        left: "".concat(x, "px")
      })
    }, /*#__PURE__*/React.createElement(IconCloud, {
      filter: {
        id: 'drop-shadow',
        definition: /*#__PURE__*/React.createElement(DropShadowFilter, null)
      },
      height: cloudSize,
      width: cloudSize
    }))
  );
};

DragCloud.displayName = 'DragCloud';
DragCloud.propTypes = {
  className: PropTypes.string,
  cloudSize: PropTypes.number,
  onMouseUp: PropTypes.func,
  onMouseDown: PropTypes.func,
  onTouchEnd: PropTypes.func,
  onTouchStart: PropTypes.func,
  position: PropTypes.objectOf(PropTypes.number).isRequired,
  style: PropTypes.object
}; // Actual export

export default DragCloud;
//# sourceMappingURL=DragCloud.js.map