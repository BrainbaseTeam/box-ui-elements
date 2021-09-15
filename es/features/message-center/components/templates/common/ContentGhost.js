import * as React from 'react';
import Ghost from '../../../../../components/ghost/Ghost';
import './styles/ContentGhost.scss';

function ContentGhost() {
  return React.createElement("div", {
    className: "ContentGhost"
  }, React.createElement(Ghost, {
    className: "ContentGhost-title",
    height: 24,
    width: 280
  }), React.createElement(Ghost, {
    className: "ContentGhost-body",
    height: 80
  }), React.createElement("div", {
    className: "ContentGhost-footer"
  }, React.createElement(Ghost, {
    className: "ContentGhost-dateGhost",
    height: 20,
    width: 96
  }), React.createElement(Ghost, {
    className: "ContentGhost-linkGhost",
    height: 20,
    width: 96
  })));
}

export default ContentGhost;
//# sourceMappingURL=ContentGhost.js.map