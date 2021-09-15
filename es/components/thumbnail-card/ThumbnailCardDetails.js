import * as React from 'react';
import Tooltip from '../tooltip';
import { useIsContentOverflowed } from '../../utils/dom';

var Title = function Title(_ref) {
  var title = _ref.title;
  // $FlowFixMe
  var textRef = React.useRef(null);
  var isTextOverflowed = useIsContentOverflowed(textRef);
  return React.createElement(Tooltip, {
    isDisabled: !isTextOverflowed,
    text: title
  }, React.createElement("div", {
    ref: textRef,
    className: "thumbnail-card-title"
  }, title));
};

var ThumbnailCardDetails = function ThumbnailCardDetails(_ref2) {
  var actionItem = _ref2.actionItem,
      icon = _ref2.icon,
      subtitle = _ref2.subtitle,
      title = _ref2.title;
  return React.createElement("div", {
    className: "thumbnail-card-details"
  }, icon, React.createElement("div", {
    className: "thumbnail-card-details-content"
  }, React.createElement("div", {
    className: "ThumbnailCardDetails-bodyText"
  }, React.createElement(Title, {
    title: title
  }), subtitle && React.createElement("div", {
    className: "thumbnail-card-subtitle"
  }, subtitle)), actionItem));
};

export default ThumbnailCardDetails;
//# sourceMappingURL=ThumbnailCardDetails.js.map