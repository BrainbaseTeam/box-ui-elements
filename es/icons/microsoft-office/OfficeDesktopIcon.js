import * as React from 'react';
import IconExcelDesktop from './IconExcelDesktop';
import IconPowerPointDesktop from './IconPowerPointDesktop';
import IconWordDesktop from './IconWordDesktop';

var OfficeDesktopIcon = function OfficeDesktopIcon(_ref) {
  var className = _ref.className,
      _ref$dimension = _ref.dimension,
      dimension = _ref$dimension === void 0 ? 30 : _ref$dimension,
      extension = _ref.extension,
      title = _ref.title;
  var Component = null;

  switch (extension) {
    case 'doc':
    case 'docx':
      Component = IconWordDesktop;
      break;

    case 'ppt':
    case 'pptx':
      Component = IconPowerPointDesktop;
      break;

    case 'xls':
    case 'xlsx':
    case 'xlsm':
    case 'xlsb':
      Component = IconExcelDesktop;
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

export default OfficeDesktopIcon;
//# sourceMappingURL=OfficeDesktopIcon.js.map