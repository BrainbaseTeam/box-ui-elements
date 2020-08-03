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
var Components = {
  IconFileAudio: IconFileAudio,
  IconFileBoxNote: IconFileBoxNote,
  IconFileCode: IconFileCode,
  IconFileDefault: IconFileDefault,
  IconFileDocument: IconFileDocument,
  IconFileDwg: IconFileDwg,
  IconFileExcelSpreadsheet: IconFileExcelSpreadsheet,
  IconFileGoogleDocs: IconFileGoogleDocs,
  IconFileGoogleSheets: IconFileGoogleSheets,
  IconFileGoogleSlides: IconFileGoogleSlides,
  IconFileIllustrator: IconFileIllustrator,
  IconFileImage: IconFileImage,
  IconFileIndesign: IconFileIndesign,
  IconFileKeynote: IconFileKeynote,
  IconFileNumbers: IconFileNumbers,
  IconFilePages: IconFilePages,
  IconFilePDF: IconFilePDF,
  IconFilePhotoshop: IconFilePhotoshop,
  IconFilePowerpointPresentation: IconFilePowerpointPresentation,
  IconFilePresentation: IconFilePresentation,
  IconFileSpreadsheet: IconFileSpreadsheet,
  IconFileText: IconFileText,
  IconFileThreeD: IconFileThreeD,
  IconFileVector: IconFileVector,
  IconFileVideo: IconFileVideo,
  IconFileWordDocument: IconFileWordDocument,
  IconFileZip: IconFileZip
};

var mirror = function mirror(values) {
  return values.reduce(function (prev, cur) {
    prev[cur] = cur;
    return prev;
  }, {});
};

var EXTENSIONS = {
  IconFileAudio: mirror(['aac', 'aif', 'aifc', 'aiff', 'amr', 'au', 'flac', 'm3u', 'm4a', 'mid', 'mp3', 'ra', 'wav', 'wma', 'wpl']),
  IconFileBoxNote: mirror(['boxnote']),
  IconFileCode: mirror(['as', 'as3', 'asm', 'aspx', 'c', 'cpp', 'bat', 'c', 'cc', 'cmake', 'cs', 'css', 'cxx', 'db', 'diff', 'erb', 'groovy', 'h', 'haml', 'hh', 'htm', 'html', 'java', 'js', 'less', 'm', 'make', 'md', 'ml', 'mm', 'php', 'pl', 'plist', 'properties', 'py', 'rb', 'sass', 'scala', 'script', 'scm', 'sml', 'sql', 'sh', 'wabba', 'yaml']),
  IconFileDocument: mirror(['csv', 'dot', 'dotx', 'msg', 'odt', 'rtf', 'tsv', 'wpd', 'xhtml', 'xml', 'xsd', 'xsl']),
  IconFileDwg: mirror(['dwg', 'dwgzip']),
  IconFileExcelSpreadsheet: mirror(['xls', 'xlsx', 'xlsm', 'xlsb']),
  IconFileGoogleDocs: mirror(['gdoc']),
  IconFileGoogleSheets: mirror(['gsheet']),
  IconFileGoogleSlides: mirror(['gslide', 'gslides']),
  IconFileVector: mirror(['eps']),
  IconFileIllustrator: mirror(['ai']),
  IconFileIndesign: mirror(['indd']),
  IconFileKeynote: mirror(['key']),
  IconFileNumbers: mirror(['numbers']),
  IconFilePages: mirror(['pages']),
  IconFileImage: mirror(['bmp', 'gif', 'gdraw', 'jpeg', 'jpg', 'png', 'ps', 'svs', 'svg', 'tif', 'tiff']),
  IconFilePDF: mirror(['pdf']),
  IconFilePresentation: mirror(['odp', 'otp', 'pot', 'potx']),
  IconFilePowerpointPresentation: mirror(['ppt', 'pptx', 'pptm']),
  IconFilePhotoshop: mirror(['psd']),
  IconFileSpreadsheet: mirror(['ods', 'xlt', 'xltx']),
  IconFileText: mirror(['txt', 'vi', 'vim', 'webdoc']),
  IconFileThreeD: mirror(['3ds', 'dae', 'fbx', 'obj', 'ply', 'stl']),
  IconFileVideo: mirror(['3g2', '3gp', 'avi', 'flv', 'm2v', 'm2ts', 'm4v', 'mkv', 'mov', 'mp4', 'mpeg', 'mpg', 'ogg', 'mts', 'qt', 'wmv']),
  IconFileWordDocument: mirror(['docx', 'doc', 'docm']),
  IconFileZip: mirror(['rar', 'tgz', 'zip'])
};

var getFileIconComponent = function getFileIconComponent(extension) {
  var extensionComponentName = Object.keys(EXTENSIONS).filter(function (extensionComponent) {
    return !!EXTENSIONS[extensionComponent][extension];
  })[0];
  return extensionComponentName || 'IconFileDefault';
};

var FileIcon = function FileIcon(_ref) {
  var _ref$dimension = _ref.dimension,
      dimension = _ref$dimension === void 0 ? 32 : _ref$dimension,
      _ref$extension = _ref.extension,
      extension = _ref$extension === void 0 ? '' : _ref$extension,
      title = _ref.title;
  var IconComponent = Components[getFileIconComponent(extension)];
  return /*#__PURE__*/React.createElement(IconComponent, {
    height: dimension,
    title: title,
    width: dimension
  });
};

export default FileIcon;
//# sourceMappingURL=FileIcon.js.map