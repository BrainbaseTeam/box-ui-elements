/**
 * 
 * @file Component for file icon and name
 */
import React from 'react';
import Badgeable from '../../components/badgeable';
import FileIcon from '../../icons/file-icon/FileIcon';
import IconAlertDefault from '../../icons/general/IconAlertDefault';
import IconFolderPersonal from '../../icons/folder/IconFolderPersonal';
import ItemName from './ItemName';
import { STATUS_ERROR } from '../../constants';
import './IconName.scss';

var IconName = function IconName(_ref) {
  var name = _ref.name,
      extension = _ref.extension,
      _ref$isFolder = _ref.isFolder,
      isFolder = _ref$isFolder === void 0 ? false : _ref$isFolder,
      isResumableUploadsEnabled = _ref.isResumableUploadsEnabled,
      status = _ref.status;
  var icon = isFolder ? /*#__PURE__*/React.createElement(IconFolderPersonal, null) : /*#__PURE__*/React.createElement(FileIcon, {
    extension: extension
  });

  if (isResumableUploadsEnabled && status === STATUS_ERROR) {
    icon = /*#__PURE__*/React.createElement(Badgeable, {
      className: "bcu-icon-badge",
      bottomRight: /*#__PURE__*/React.createElement(IconAlertDefault, {
        height: 18,
        width: 18
      })
    }, icon);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "bcu-item-icon-name"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bcu-item-icon"
  }, icon), /*#__PURE__*/React.createElement("div", {
    className: "bcu-item-name"
  }, /*#__PURE__*/React.createElement(ItemName, {
    name: name
  })));
};

export default IconName;
//# sourceMappingURL=IconName.js.map