import * as React from 'react';
import Tooltip from '../../components/tooltip';
import './SandboxBanner.scss';

var SandboxBanner = function SandboxBanner(_ref) {
  var children = _ref.children;
  return React.createElement(Tooltip, {
    text: children
  }, React.createElement("div", {
    className: "bdl-SandboxBanner"
  }, React.createElement("div", {
    className: "bdl-SandboxBanner-text"
  }, children)));
};

export default SandboxBanner;
//# sourceMappingURL=SandboxBanner.js.map