import * as React from 'react';
import IconIWorkKeynote from './IconIWorkKeynote';
import IconIWorkNumbers from './IconIWorkNumbers';
import IconIWorkPages from './IconIWorkPages';

var IWorkIcon = function IWorkIcon(_ref) {
  var className = _ref.className,
      _ref$dimension = _ref.dimension,
      dimension = _ref$dimension === void 0 ? 30 : _ref$dimension,
      extension = _ref.extension,
      title = _ref.title;
  var Component = null;

  switch (extension) {
    case 'pages':
      Component = IconIWorkPages;
      break;

    case 'numbers':
      Component = IconIWorkNumbers;
      break;

    case 'key':
      Component = IconIWorkKeynote;
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

export default IWorkIcon;
//# sourceMappingURL=IWorkIcon.js.map