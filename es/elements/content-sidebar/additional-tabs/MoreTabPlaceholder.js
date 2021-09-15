/**
 * 
 * @file Preview sidebar more tabs loading component
 * @author Box
 */
import * as React from 'react';
import { bdlGray10 } from '../../../styles/variables';
import IconEllipsis from '../../../icons/general/IconEllipsis';

var MoreTabPlaceholder = function MoreTabPlaceholder() {
  return React.createElement("div", {
    className: "bdl-AdditionalTabPlaceholder"
  }, React.createElement(IconEllipsis, {
    color: bdlGray10,
    className: "bdl-AdditionalTabPlaceholder-moreIcon"
  }));
};

export default MoreTabPlaceholder;
//# sourceMappingURL=MoreTabPlaceholder.js.map