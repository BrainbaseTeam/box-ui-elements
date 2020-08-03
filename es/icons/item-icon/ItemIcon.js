import * as React from 'react';
import IconFileAudio from '../file/IconFileAudio';
import IconFileBoxNote from '../file/IconFileBoxNote';
import IconFileCode from '../file/IconFileCode';
import IconFileDefault from '../file/IconFileDefault';
import IconFileDocument from '../file/IconFileDocument';
import IconFileDwg from '../file/IconFileDwg';
import IconFileExcelSpreadsheet from '../file/IconFileExcelSpreadsheet';
import IconFileGoogleDocs from '../file/IconFileGoogleDocs';
import IconFileGoogleSheets from '../file/IconFileGoogleSheets';
import IconFileGoogleSlides from '../file/IconFileGoogleSlides';
import IconFileIllustrator from '../file/IconFileIllustrator';
import IconFileImage from '../file/IconFileImage';
import IconFileIndesign from '../file/IconFileIndesign';
import IconFileKeynote from '../file/IconFileKeynote';
import IconFileNumbers from '../file/IconFileNumbers';
import IconFilePages from '../file/IconFilePages';
import IconFilePDF from '../file/IconFilePDF';
import IconFilePhotoshop from '../file/IconFilePhotoshop';
import IconFilePowerpointPresentation from '../file/IconFilePowerpointPresentation';
import IconFilePresentation from '../file/IconFilePresentation';
import IconFileSpreadsheet from '../file/IconFileSpreadsheet';
import IconFileText from '../file/IconFileText';
import IconFileThreeD from '../file/IconFileThreeD';
import IconFileVector from '../file/IconFileVector';
import IconFileVideo from '../file/IconFileVideo';
import IconFileWordDocument from '../file/IconFileWordDocument';
import IconFileZip from '../file/IconFileZip';
import BookmarkIcon from '../bookmark-icon';
import IconFolderCollab from '../folder/IconFolderCollab';
import IconFolderExternal from '../folder/IconFolderExternal';
import IconFolderPersonal from '../folder/IconFolderPersonal';
var itemIconTable = {
  audio: IconFileAudio,
  bookmark: BookmarkIcon,
  boxnote: IconFileBoxNote,
  code: IconFileCode,
  default: IconFileDefault,
  document: IconFileDocument,
  dwg: IconFileDwg,
  'excel-spreadsheet': IconFileExcelSpreadsheet,
  'folder-collab': IconFolderCollab,
  'folder-external': IconFolderExternal,
  'folder-plain': IconFolderPersonal,
  'google-docs': IconFileGoogleDocs,
  'google-sheets': IconFileGoogleSheets,
  'google-slides': IconFileGoogleSlides,
  illustrator: IconFileIllustrator,
  image: IconFileImage,
  indesign: IconFileIndesign,
  keynote: IconFileKeynote,
  numbers: IconFileNumbers,
  pages: IconFilePages,
  pdf: IconFilePDF,
  photoshop: IconFilePhotoshop,
  'powerpoint-presentation': IconFilePowerpointPresentation,
  presentation: IconFilePresentation,
  spreadsheet: IconFileSpreadsheet,
  text: IconFileText,
  threed: IconFileThreeD,
  vector: IconFileVector,
  video: IconFileVideo,
  'word-document': IconFileWordDocument,
  zip: IconFileZip
};

var ItemIcon = function ItemIcon(_ref) {
  var className = _ref.className,
      _ref$dimension = _ref.dimension,
      dimension = _ref$dimension === void 0 ? 32 : _ref$dimension,
      iconType = _ref.iconType,
      title = _ref.title;
  var IconComponent = itemIconTable[iconType] || IconFileDefault;
  return /*#__PURE__*/React.createElement(IconComponent, {
    className: className,
    height: dimension,
    title: title,
    width: dimension
  });
};

export default ItemIcon;
//# sourceMappingURL=ItemIcon.js.map