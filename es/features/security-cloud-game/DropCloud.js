import PropTypes from 'prop-types';
import React from 'react';
import Logo from '../../components/logo';
import IconCloud from '../../icons/general/IconCloud';

var InsetFilter = function InsetFilter() {
  return /*#__PURE__*/React.createElement("filter", {
    id: "inset-shadow"
  }, /*#__PURE__*/React.createElement("feOffset", {
    dx: "0",
    dy: "1.5"
  }), /*#__PURE__*/React.createElement("feGaussianBlur", {
    result: "offset-blur",
    stdDeviation: "0.5"
  }), /*#__PURE__*/React.createElement("feComposite", {
    in: "SourceGraphic",
    in2: "offset-blur",
    operator: "out",
    result: "inverse"
  }), /*#__PURE__*/React.createElement("feFlood", {
    floodColor: "black",
    floodOpacity: "1",
    result: "color"
  }), /*#__PURE__*/React.createElement("feComposite", {
    in: "color",
    in2: "inverse",
    operator: "in",
    result: "shadow"
  }), /*#__PURE__*/React.createElement("feComposite", {
    in: "shadow",
    in2: "SourceGraphic",
    operator: "over"
  }));
};

var DropCloud = function DropCloud(_ref) {
  var className = _ref.className,
      _ref$cloudSize = _ref.cloudSize,
      cloudSize = _ref$cloudSize === void 0 ? 64 : _ref$cloudSize,
      position = _ref.position;
  var x = position.x,
      y = position.y;
  return /*#__PURE__*/React.createElement("div", {
    className: "drop-cloud ".concat(className),
    style: {
      top: "".concat(y, "px"),
      left: "".concat(x, "px")
    }
  }, /*#__PURE__*/React.createElement(IconCloud, {
    filter: {
      id: 'inset-shadow',
      definition: /*#__PURE__*/React.createElement(InsetFilter, null)
    },
    height: cloudSize,
    width: cloudSize
  }), /*#__PURE__*/React.createElement(Logo, null));
};

DropCloud.displayName = 'DropCloud';
DropCloud.propTypes = {
  className: PropTypes.string,
  cloudSize: PropTypes.number,
  position: PropTypes.objectOf(PropTypes.number).isRequired
}; // Actual export

export default DropCloud;
//# sourceMappingURL=DropCloud.js.map