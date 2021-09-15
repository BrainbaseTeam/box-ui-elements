function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import IconFileBase from './IconFileBase';

var IconFileDocument = function IconFileDocument(props) {
  return React.createElement(IconFileBase, _extends({}, props, {
    baseClassName: "icon-file-document"
  }), React.createElement("path", {
    d: "M25 27H7V5h13l5 5v17z",
    fill: "#fff"
  }), React.createElement("path", {
    d: "M20 4H7a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9.89zm5 23H7V5h13v4a1 1 0 0 0 1 1h4z",
    fill: "#2a62b9"
  }), React.createElement("path", {
    d: "M10 20h8v1h-8zm0-3h11v1H10zm0-3h11v1H10z",
    fill: "#2a62b9"
  }));
};

export default IconFileDocument;
//# sourceMappingURL=IconFileDocument.js.map