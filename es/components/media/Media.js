function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import classnames from 'classnames';
import MediaFigure from './MediaFigure';
import MediaBody from './MediaBody';
import MediaMenu from './MediaMenu';
import './Media.scss';

var Media = function Media(_ref) {
  var Wrapper = _ref.as,
      children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["as", "children", "className"]);

  return /*#__PURE__*/React.createElement(Wrapper, _extends({
    className: classnames('bdl-Media', className)
  }, rest), children);
}; // Use this instead of default value because of param destructuring bug in Flow
// that affects union types
// https://github.com/facebook/flow/issues/5461


Media.defaultProps = {
  as: 'div'
};
Media.Body = MediaBody;
Media.Menu = MediaMenu;
Media.Figure = MediaFigure;
export default Media;
//# sourceMappingURL=Media.js.map