/**
 * 
 * @file Preview sidebar additional tab placeholder component
 * @author Box
 */
import * as React from 'react';
import classNames from 'classnames';

var AdditionalTabPlaceholder = function AdditionalTabPlaceholder(_ref) {
  var _ref$isLoading = _ref.isLoading,
      isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading;
  var classes = classNames('bdl-AdditionalTabPlaceholder-icon', {
    'bdl-AdditionalTabPlaceholder-icon--loading': isLoading
  });
  return React.createElement("div", {
    className: "bdl-AdditionalTabPlaceholder",
    "data-testid": "additionaltabplaceholder"
  }, React.createElement("div", {
    className: classes
  }));
};

export default AdditionalTabPlaceholder;
//# sourceMappingURL=AdditionalTabPlaceholder.js.map