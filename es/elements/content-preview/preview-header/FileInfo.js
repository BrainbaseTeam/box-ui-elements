/**
 * 
 * @file file info section of the preview header
 * @author Box
 */
import React from 'react';
import FileIcon from '../../../icons/file-icon/FileIcon';
import './FileInfo.scss';

var FileInfo = function FileInfo(_ref) {
  var file = _ref.file,
      version = _ref.version;
  // Opt to show version over the file object since it is more specific
  var displayItem = version || file;
  return React.createElement("div", {
    className: "bcpr-FileInfo"
  }, displayItem && React.createElement(React.Fragment, null, React.createElement(FileIcon, {
    dimension: 24,
    extension: displayItem.extension
  }), React.createElement("span", {
    className: "bcpr-FileInfo-name"
  }, displayItem.name)));
};

export default FileInfo;
//# sourceMappingURL=FileInfo.js.map