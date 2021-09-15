import * as React from 'react';
import IconExcelOnline from './IconExcelOnline';
import IconPowerPointOnline from './IconPowerPointOnline';
import IconWordOnline from './IconWordOnline';

var OfficeOnlineIcon = function OfficeOnlineIcon(_ref) {
  var className = _ref.className,
      _ref$dimension = _ref.dimension,
      dimension = _ref$dimension === void 0 ? 30 : _ref$dimension,
      extension = _ref.extension,
      title = _ref.title;
  var Component = null;

  switch (extension) {
    case 'doc':
    case 'docx':
      Component = IconWordOnline;
      break;

    case 'ppt':
    case 'pptx':
      Component = IconPowerPointOnline;
      break;

    case 'xls':
    case 'xlsx':
    case 'xlsm':
    case 'xlsb':
      Component = IconExcelOnline;
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

export default OfficeOnlineIcon;
//# sourceMappingURL=OfficeOnlineIcon.js.map