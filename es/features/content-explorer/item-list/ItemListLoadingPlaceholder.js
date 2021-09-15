import PropTypes from 'prop-types';
import React from 'react';

var ItemListLoadingPlaceholder = function ItemListLoadingPlaceholder(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '80%' : _ref$width;
  return React.createElement("div", {
    className: "item-list-loading-placeholder",
    style: {
      width: width
    }
  });
};

ItemListLoadingPlaceholder.propTypes = {
  width: PropTypes.string
};
export default ItemListLoadingPlaceholder;
//# sourceMappingURL=ItemListLoadingPlaceholder.js.map