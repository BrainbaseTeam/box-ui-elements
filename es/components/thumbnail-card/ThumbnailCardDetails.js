import * as React from 'react';

var ThumbnailCardDetails = function ThumbnailCardDetails(_ref) {
  var icon = _ref.icon,
      subtitle = _ref.subtitle,
      title = _ref.title;
  return /*#__PURE__*/React.createElement("div", {
    className: "thumbnail-card-details"
  }, icon, /*#__PURE__*/React.createElement("div", {
    className: "thumbnail-card-details-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "thumbnail-card-title"
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    className: "thumbnail-card-subtitle"
  }, subtitle)));
};

export default ThumbnailCardDetails;
//# sourceMappingURL=ThumbnailCardDetails.js.map