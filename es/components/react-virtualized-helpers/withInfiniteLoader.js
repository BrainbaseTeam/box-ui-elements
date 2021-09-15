function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import InfiniteLoader from 'react-virtualized/dist/commonjs/InfiniteLoader';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function withInfiniteLoader(WrappedComponent) {
  var InfiniteLoaderComponent = function InfiniteLoaderComponent(_ref) {
    var _ref$infiniteLoaderPr = _ref.infiniteLoaderProps,
        isRowLoaded = _ref$infiniteLoaderPr.isRowLoaded,
        loadMoreRows = _ref$infiniteLoaderPr.loadMoreRows,
        minimumBatchSize = _ref$infiniteLoaderPr.minimumBatchSize,
        rowCount = _ref$infiniteLoaderPr.rowCount,
        threshold = _ref$infiniteLoaderPr.threshold,
        rest = _objectWithoutProperties(_ref, ["infiniteLoaderProps"]);

    return React.createElement(InfiniteLoader, {
      isRowLoaded: isRowLoaded,
      loadMoreRows: loadMoreRows,
      minimumBatchSize: minimumBatchSize,
      rowCount: rowCount,
      threshold: threshold
    }, function (_ref2) {
      var onRowsRendered = _ref2.onRowsRendered,
          registerChild = _ref2.registerChild;
      return React.createElement(WrappedComponent, _extends({}, rest, {
        ref: registerChild,
        onRowsRendered: onRowsRendered
      }));
    });
  };

  InfiniteLoaderComponent.displayName = "WithInfiniteLoader(".concat(getDisplayName(WrappedComponent), ")");
  return InfiniteLoaderComponent;
}

export default withInfiniteLoader;
//# sourceMappingURL=withInfiniteLoader.js.map