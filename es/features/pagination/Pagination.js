function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Pagination component
 * @author Box
 */
import React from 'react';
import MarkerBasedPagination from './MarkerBasedPagination';
import OffsetBasedPagination from './OffsetBasedPagination';
import './Pagination.scss';

var Pagination = function Pagination(_ref) {
  var hasNextMarker = _ref.hasNextMarker,
      hasPrevMarker = _ref.hasPrevMarker,
      onMarkerBasedPageChange = _ref.onMarkerBasedPageChange,
      rest = _objectWithoutProperties(_ref, ["hasNextMarker", "hasPrevMarker", "onMarkerBasedPageChange"]);

  if (hasNextMarker || hasPrevMarker) {
    return React.createElement(MarkerBasedPagination, {
      hasNextMarker: hasNextMarker,
      hasPrevMarker: hasPrevMarker,
      onMarkerBasedPageChange: onMarkerBasedPageChange
    });
  }

  return React.createElement(OffsetBasedPagination, rest);
};

export default Pagination;
//# sourceMappingURL=Pagination.js.map