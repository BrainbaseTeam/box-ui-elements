import * as React from 'react';
import KeynoteForMac32 from '../../icon/logo/KeynoteForMac32';
import NumbersForMac32 from '../../icon/logo/NumbersForMac32';
import PagesForMac32 from '../../icon/logo/PagesForMac32';

var IWorkDesktopIcon = function IWorkDesktopIcon(_ref) {
  var className = _ref.className,
      _ref$dimension = _ref.dimension,
      dimension = _ref$dimension === void 0 ? 32 : _ref$dimension,
      extension = _ref.extension,
      title = _ref.title;
  var Component = null;

  switch (extension) {
    case 'pages':
      Component = PagesForMac32;
      break;

    case 'numbers':
      Component = NumbersForMac32;
      break;

    case 'key':
      Component = KeynoteForMac32;
      break;
    // no default
  }

  if (Component !== null) {
    return React.createElement(Component, {
      className: className,
      height: dimension,
      title: title,
      width: dimension
    });
  }

  return null;
};

export default IWorkDesktopIcon;
//# sourceMappingURL=IWorkDesktopIcon.js.map