function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import './Section.scss';

var Section = function Section(_ref) {
  var children = _ref.children,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? '' : _ref$id,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$description = _ref.description,
      description = _ref$description === void 0 ? '' : _ref$description,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      rest = _objectWithoutProperties(_ref, ["children", "id", "className", "description", "title"]);

  return React.createElement("section", _extends({
    className: "section ".concat(className),
    id: id
  }, rest), React.createElement("div", null, React.createElement("h5", {
    className: "section-title"
  }, title), React.createElement("div", {
    className: "section-description"
  }, description)), React.createElement("div", {
    className: "section-content"
  }, children));
};

export default Section;
//# sourceMappingURL=Section.js.map