import * as React from 'react';
import IconIWorkKeynoteDesktop from './IconIWorkKeynoteDesktop';
import IconIWorkPagesDesktop from './IconIWorkPagesDesktop';
import IconIWorkNumbersDesktop from './IconIWorkNumbersDesktop';

var IWorkDesktopIcon = function IWorkDesktopIcon(_ref) {
  var className = _ref.className,
      _ref$dimension = _ref.dimension,
      dimension = _ref$dimension === void 0 ? 30 : _ref$dimension,
      extension = _ref.extension,
      title = _ref.title;
  var Component = null;

  switch (extension) {
    case 'pages':
      Component = IconIWorkPagesDesktop;
      break;

    case 'numbers':
      Component = IconIWorkNumbersDesktop;
      break;

    case 'key':
      Component = IconIWorkKeynoteDesktop;
      break;
    // no default
  }

  if (Component !== null) {
    return /*#__PURE__*/React.createElement(Component, {
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