function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import classnames from 'classnames';
import LoadingIndicator, { LoadingIndicatorSize } from './LoadingIndicator';
import './LoadingIndicatorWrapper.scss';
export var LoadingIndicatorWrapperPosition;

(function (LoadingIndicatorWrapperPosition) {
  LoadingIndicatorWrapperPosition["CENTER"] = "center";
  LoadingIndicatorWrapperPosition["TOP"] = "top";
})(LoadingIndicatorWrapperPosition || (LoadingIndicatorWrapperPosition = {}));

var LoadingIndicatorWrapper = function LoadingIndicatorWrapper(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$crawlerPosition = _ref.crawlerPosition,
      crawlerPosition = _ref$crawlerPosition === void 0 ? LoadingIndicatorWrapperPosition.CENTER : _ref$crawlerPosition,
      _ref$crawlerSize = _ref.crawlerSize,
      crawlerSize = _ref$crawlerSize === void 0 ? LoadingIndicatorSize.DEFAULT : _ref$crawlerSize,
      _ref$isLoading = _ref.isLoading,
      isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
      _ref$hideContent = _ref.hideContent,
      hideContent = _ref$hideContent === void 0 ? false : _ref$hideContent,
      rest = _objectWithoutProperties(_ref, ["children", "className", "crawlerPosition", "crawlerSize", "isLoading", "hideContent"]);

  var crawlerPositionClassName = classnames('loading-indicator-veil', {
    'is-with-top-crawler': crawlerPosition === LoadingIndicatorWrapperPosition.TOP,
    'is-with-center-crawler': crawlerPosition === LoadingIndicatorWrapperPosition.CENTER
  }, hideContent ? 'hide-content' : 'blur-content');
  return React.createElement("div", _extends({
    className: "loading-indicator-wrapper ".concat(className)
  }, rest), children, isLoading && React.createElement("div", {
    className: crawlerPositionClassName
  }, React.createElement(LoadingIndicator, {
    size: crawlerSize
  })));
};

export default LoadingIndicatorWrapper;
//# sourceMappingURL=LoadingIndicatorWrapper.js.map