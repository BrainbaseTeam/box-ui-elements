function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import getProp from 'lodash/get';
import AutoSizer from 'react-virtualized/dist/es/AutoSizer';
import GridView from '../../components/grid-view/GridView';
import ItemGridCell from './ItemGridCell';

var ItemGrid = function ItemGrid(_ref) {
  var currentCollection = _ref.currentCollection,
      gridColumnCount = _ref.gridColumnCount,
      rootId = _ref.rootId,
      rest = _objectWithoutProperties(_ref, ["currentCollection", "gridColumnCount", "rootId"]);

  /**
   * Renderer used for cards in grid view
   *
   * @param {number} slotIndex - index of item in currentCollection.items
   * @return {React.Element} - Element to display in card
   */
  var slotRenderer = function slotRenderer(slotIndex) {
    var item = getProp(currentCollection, "items[".concat(slotIndex, "]"));
    return item ? React.createElement(ItemGridCell, _extends({
      item: item,
      rootId: rootId
    }, rest)) : null;
  };

  return React.createElement(AutoSizer, null, function (_ref2) {
    var height = _ref2.height,
        width = _ref2.width;
    return React.createElement(GridView, {
      columnCount: gridColumnCount,
      currentCollection: currentCollection,
      height: height,
      slotRenderer: slotRenderer,
      width: width
    });
  });
};

export default ItemGrid;
//# sourceMappingURL=ItemGrid.js.map