/**
 * 
 * @file Item name component
 */
import React from 'react';
import './ItemName.scss';

var ItemName = function ItemName(_ref) {
  var name = _ref.name;
  return React.createElement("span", {
    className: "bcu-item-label"
  }, name);
};

export default ItemName;
//# sourceMappingURL=ItemName.js.map