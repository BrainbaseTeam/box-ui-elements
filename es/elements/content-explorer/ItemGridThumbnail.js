import * as React from 'react';
import isThumbnailReady from './utils';
import { getIcon } from '../common/item/iconCellRenderer';
import './ItemGridThumbnail.scss';

var ItemGridThumbnail = function ItemGridThumbnail(_ref) {
  var item = _ref.item;
  var thumbnailUrl = item.thumbnailUrl;

  if (item.metadata) {
    thumbnailUrl = item.metadata.enterprise_261189234.customThumbnail.url;
  }

  return React.createElement("div", {
    className: "bce-ItemGridThumbnail"
  }, thumbnailUrl && isThumbnailReady(item) ? React.createElement("div", {
    className: "bce-ItemGridThumbnail-item",
    style: {
      width: '100%',
      height: '100%',
      background: "url(\"".concat(thumbnailUrl, "\") center center / cover no-repeat")
    }
  }) : React.createElement("div", {
    className: "bce-ItemGridThumbnail-item"
  }, getIcon(128, item)));
};

export default ItemGridThumbnail;
//# sourceMappingURL=ItemGridThumbnail.js.map