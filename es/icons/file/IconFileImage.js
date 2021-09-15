function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import IconFileBase from './IconFileBase';

var IconFileImage = function IconFileImage(props) {
  return React.createElement(IconFileBase, _extends({}, props, {
    baseClassName: "icon-file-image"
  }), React.createElement("path", {
    d: "M25 27H7V5h13l5 5v17z",
    fill: "#fff"
  }), React.createElement("path", {
    d: "M20 4H7a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9.89zm5 23H7V5h13v4a1 1 0 0 0 1 1h4z",
    fill: "#3fb87f"
  }), React.createElement("path", {
    d: "M18 17a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm-.6 4.09l-3.12-3.71a.41.41 0 0 0-.58-.06l-.06.06L9 23h13l-2.72-3.6a.35.35 0 0 0-.6 0z",
    fill: "#3fb87f"
  }));
};

export default IconFileImage;
//# sourceMappingURL=IconFileImage.js.map