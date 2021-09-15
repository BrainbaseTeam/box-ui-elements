function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import classNames from 'classnames';
import ThumbnailCardDetails from './ThumbnailCardDetails';
import ThumbnailCardThumbnail from './ThumbnailCardThumbnail';
import './ThumbnailCard.scss';

var ThumbnailCard = function ThumbnailCard(_ref) {
  var actionItem = _ref.actionItem,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      icon = _ref.icon,
      _ref$highlightOnHover = _ref.highlightOnHover,
      highlightOnHover = _ref$highlightOnHover === void 0 ? false : _ref$highlightOnHover,
      subtitle = _ref.subtitle,
      title = _ref.title,
      thumbnail = _ref.thumbnail,
      rest = _objectWithoutProperties(_ref, ["actionItem", "className", "icon", "highlightOnHover", "subtitle", "title", "thumbnail"]);

  return React.createElement("div", _extends({
    role: "button",
    tabIndex: "0",
    className: classNames('thumbnail-card', className, {
      'is-highlight-applied': highlightOnHover
    })
  }, rest), React.createElement(ThumbnailCardThumbnail, {
    thumbnail: thumbnail
  }), React.createElement(ThumbnailCardDetails, {
    actionItem: actionItem,
    icon: icon,
    subtitle: subtitle,
    title: title
  }));
};

export default ThumbnailCard;
//# sourceMappingURL=ThumbnailCard.js.map