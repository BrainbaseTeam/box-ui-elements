function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import ThumbnailCardDetails from './ThumbnailCardDetails';
import ThumbnailCardThumbnail from './ThumbnailCardThumbnail';
import './ThumbnailCard.scss';

var ThumbnailCard = function ThumbnailCard(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      icon = _ref.icon,
      subtitle = _ref.subtitle,
      title = _ref.title,
      thumbnail = _ref.thumbnail,
      rest = _objectWithoutProperties(_ref, ["className", "icon", "subtitle", "title", "thumbnail"]);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: "thumbnail-card ".concat(className)
  }, rest), /*#__PURE__*/React.createElement(ThumbnailCardThumbnail, {
    thumbnail: thumbnail
  }), /*#__PURE__*/React.createElement(ThumbnailCardDetails, {
    icon: icon,
    subtitle: subtitle,
    title: title
  }));
};

export default ThumbnailCard;
//# sourceMappingURL=ThumbnailCard.js.map