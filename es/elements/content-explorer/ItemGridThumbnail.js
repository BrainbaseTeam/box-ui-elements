import * as React from 'react';
import { getIcon } from '../common/item/iconCellRenderer';
import './ItemGridThumbnail.scss';

var ItemGridThumbnail = function ItemGridThumbnail(_ref) {
  var item = _ref.item;
  var thumbnailUrl = item.thumbnailUrl;
  return /*#__PURE__*/React.createElement("div", {
    className: "bce-ItemGridThumbnail"
  }, thumbnailUrl ? /*#__PURE__*/React.createElement("div", {
    className: "bce-ItemGridThumbnail-item",
    style: {
      backgroundImage: "url(\"".concat(thumbnailUrl, "\")")
    }
  }) : /*#__PURE__*/React.createElement("div", {
    className: "bce-ItemGridThumbnail-item"
  }, getIcon(128, item)));
};

export default ItemGridThumbnail;
//# sourceMappingURL=ItemGridThumbnail.js.map