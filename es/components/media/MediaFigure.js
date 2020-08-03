function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import classnames from 'classnames';
import './Media.scss';

var MediaFigure = function MediaFigure(_ref) {
  var Wrapper = _ref.as,
      className = _ref.className,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["as", "className", "children"]);

  return /*#__PURE__*/React.createElement(Wrapper, _extends({
    className: classnames('bdl-Media-figure', className)
  }, rest), children);
}; // Use this instead of default value because of param destructuring bug in Flow
// that affects union types
// https://github.com/facebook/flow/issues/5461


MediaFigure.defaultProps = {
  as: 'figure'
};
export default MediaFigure;
//# sourceMappingURL=MediaFigure.js.map