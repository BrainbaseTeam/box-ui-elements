import * as React from 'react';
import './Section.scss';

var Section = function Section(_ref) {
  var children = _ref.children,
      id = _ref.id,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      description = _ref.description,
      title = _ref.title;
  return /*#__PURE__*/React.createElement("section", {
    className: "section ".concat(className),
    id: id
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "section-title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "section-description"
  }, description)), /*#__PURE__*/React.createElement("div", {
    className: "section-content"
  }, children));
};

export default Section;
//# sourceMappingURL=Section.js.map