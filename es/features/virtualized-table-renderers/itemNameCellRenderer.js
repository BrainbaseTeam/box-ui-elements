function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import classNames from 'classnames';
import noop from 'lodash/noop';
import { getFileExtension } from '../../utils/file';
import messages from './messages';
import FileIcon from '../../icons/file-icon';
import FolderIcon from '../../icons/folder-icon';
import PlainButton from '../../components/plain-button/PlainButton';
import baseCellRenderer from './baseCellRenderer';
import './ItemNameCell.scss';

var itemNameCellRenderer = function itemNameCellRenderer(intl) {
  var _onClick = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

  return function (cellRendererParams) {
    return baseCellRenderer(cellRendererParams, function (cellValue) {
      var name = cellValue.name,
          type = cellValue.type,
          isExternal = cellValue.isExternal,
          dataAttributes = cellValue.dataAttributes;
      var extension = getFileExtension(name);
      var displayName = isExternal ? intl.formatMessage(messages.externalFile) : name;
      var isFolder = type === 'folder';
      var itemNameCellClass = classNames('bdl-ItemNameCell-name', {
        'bdl-is-external': isExternal,
        'bdl-is-folder': isFolder
      });
      return React.createElement("span", {
        className: "bdl-ItemNameCell",
        title: displayName
      }, isFolder ? React.createElement(React.Fragment, null, React.createElement(FolderIcon, {
        dimension: 32,
        isExternal: isExternal
      }), React.createElement(PlainButton, _extends({
        className: itemNameCellClass,
        onClick: function onClick() {
          return _onClick(cellValue);
        },
        type: "button"
      }, dataAttributes), displayName)) : React.createElement(React.Fragment, null, React.createElement(FileIcon, {
        dimension: 32,
        extension: extension
      }), React.createElement("span", _extends({
        className: itemNameCellClass
      }, dataAttributes), displayName)));
    });
  };
};

export default itemNameCellRenderer;
//# sourceMappingURL=itemNameCellRenderer.js.map