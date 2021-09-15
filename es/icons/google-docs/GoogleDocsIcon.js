import * as React from 'react';
import IconGoogleSlides from './IconGoogleSlides';
import IconGoogleSheets from './IconGoogleSheets';
import IconGoogleDocs from './IconGoogleDocs';

var GoogleDocsIcon = function GoogleDocsIcon(_ref) {
  var className = _ref.className,
      _ref$dimension = _ref.dimension,
      dimension = _ref$dimension === void 0 ? 30 : _ref$dimension,
      extension = _ref.extension,
      title = _ref.title;
  var Component = null;

  switch (extension) {
    case 'docm':
    case 'docx':
    case 'gdoc':
    case 'odt':
      Component = IconGoogleDocs;
      break;

    case 'gsheet':
    case 'ods':
    case 'xlsm':
    case 'xlsx':
      Component = IconGoogleSheets;
      break;

    case 'gslide':
    case 'gslides':
    case 'odp':
    case 'pptm':
    case 'pptx':
      Component = IconGoogleSlides;
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

export default GoogleDocsIcon;
//# sourceMappingURL=GoogleDocsIcon.js.map