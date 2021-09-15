function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import IconFileBase from './IconFileBase';

var IconFileDwg = function IconFileDwg(props) {
  return React.createElement(IconFileBase, _extends({}, props, {
    baseClassName: "icon-file-dwg"
  }), React.createElement("path", {
    d: "M20 4H7a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9.89zm5 23H7V5h13v4a1 1 0 0 0 1 1h4z",
    fill: "#0696d7"
  }), React.createElement("path", {
    d: "M18 17v-2h-2v-4h-1v4h-2v2H9v1h4v2h2v4h1v-4h2v-2h4v-1zm-1 2h-3v-3h3z",
    fill: "#0696d7"
  }));
};

export default IconFileDwg;
//# sourceMappingURL=IconFileDwg.js.map