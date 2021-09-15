function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import classNames from 'classnames'; // @ts-ignore flow import

import Tooltip, { TooltipTheme } from '../tooltip';
import ImageTooltipContent from './ImageTooltipContent';
import './ImageTooltip.scss'; // We manually set "text" with our specific visual tooltip content.

var ImageTooltip = function ImageTooltip(_ref) {
  var children = _ref.children,
      className = _ref.className,
      content = _ref.content,
      image = _ref.image,
      title = _ref.title,
      otherTooltipProps = _objectWithoutProperties(_ref, ["children", "className", "content", "image", "title"]);

  // State to track if the image has been loaded before displaying the tooltip
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isImageLoaded = _React$useState2[0],
      setIsImageLoaded = _React$useState2[1];

  var tooltipContent = React.createElement(ImageTooltipContent, {
    content: content,
    onImageLoad: function onImageLoad() {
      return setIsImageLoaded(true);
    },
    title: title
  }, React.Children.only(image));
  var imageTooltipClasses = classNames('bdl-ImageTooltip', {
    className: className,
    'bdl-is-image-loaded': isImageLoaded
  });
  return React.createElement(Tooltip, _extends({
    className: imageTooltipClasses,
    showCloseButton: true,
    theme: TooltipTheme.CALLOUT
  }, otherTooltipProps, {
    text: tooltipContent
  }), children);
};

export default ImageTooltip;
//# sourceMappingURL=ImageTooltip.js.map