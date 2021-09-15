import * as React from 'react';
import Ghost from '../../components/ghost/Ghost';

function MessagePreviewGhost() {
  return React.createElement("div", {
    className: "MessagePreviewGhost"
  }, React.createElement(Ghost, {
    className: "MessagePreviewGhost-ghost",
    height: 288
  }));
}

export default MessagePreviewGhost;
//# sourceMappingURL=MessagePreviewGhost.js.map