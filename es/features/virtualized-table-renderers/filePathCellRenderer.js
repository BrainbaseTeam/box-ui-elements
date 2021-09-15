function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import * as React from 'react';
import classNames from 'classnames';
import { TYPE_FOLDER, DEFAULT_ROOT } from '../../constants';
import messages from './messages';
import Breadcrumb from '../../components/breadcrumb';
import FolderIcon from '../../icons/folder-icon';
import FileIcon from '../../icons/file-icon';
import getSize from '../../utils/size';
import { getFileExtension } from '../../utils/file';
import baseCellRenderer from './baseCellRenderer';
import './FilePathCell.scss';

var getName = function getName() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      name = _ref.name,
      type = _ref.type,
      isExternal = _ref.isExternal,
      id = _ref.id;

  var intl = arguments.length > 1 ? arguments[1] : undefined;

  if (id === DEFAULT_ROOT) {
    return intl.formatMessage(messages.allFiles);
  }

  if (isExternal) {
    var message = type === TYPE_FOLDER ? messages.externalFolder : messages.externalFile;
    return intl.formatMessage(message);
  }

  return name || id;
};

var fileNameCellRenderer = function fileNameCellRenderer(intl) {
  return function (cellRendererParams) {
    return baseCellRenderer(cellRendererParams, function (cellValue) {
      var id = cellValue.id,
          _cellValue$name = cellValue.name,
          name = _cellValue$name === void 0 ? '' : _cellValue$name,
          size = cellValue.size,
          _cellValue$itemPath = cellValue.itemPath,
          itemPath = _cellValue$itemPath === void 0 ? [] : _cellValue$itemPath,
          itemType = cellValue.itemType,
          isExternal = cellValue.isExternal;
      var extension = getFileExtension(name);
      var icon = itemType === TYPE_FOLDER ? React.createElement(FolderIcon, null) : React.createElement(FileIcon, {
        extension: extension
      });
      var path = itemPath.map(function (pathInfo) {
        return getName(pathInfo, intl);
      });
      var displaySize = size ? " (".concat(getSize(size), ")") : '';
      var contentName = getName({
        id: id,
        isExternal: isExternal,
        type: itemType,
        name: name
      }, intl);
      var displayName = "".concat(contentName).concat(displaySize);
      var fullPath = [].concat(_toConsumableArray(path), [displayName]);
      var filePathCellClass = classNames('bdl-FilePathCell', {
        'bdl-is-external': isExternal
      });
      return React.createElement("span", {
        className: filePathCellClass,
        title: fullPath.join(' > ')
      }, icon, React.createElement(Breadcrumb, {
        label: "contentPath"
      }, fullPath.map(function (itemPathName) {
        return React.createElement("span", {
          key: itemPathName,
          className: "bdl-FilePathCell-breadcrumbName"
        }, itemPathName);
      })));
    });
  };
};

export default fileNameCellRenderer;
//# sourceMappingURL=filePathCellRenderer.js.map