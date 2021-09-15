/**
 * 
 * @file Add component
 * @author Box
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import AddButton from './AddButton';
import DropdownMenu from '../../../components/dropdown-menu/DropdownMenu';
import Menu from '../../../components/menu/Menu';
import MenuItem from '../../../components/menu/MenuItem';
import messages from '../messages';

var Add = function Add(_ref) {
  var onUpload = _ref.onUpload,
      onCreate = _ref.onCreate,
      _ref$showUpload = _ref.showUpload,
      showUpload = _ref$showUpload === void 0 ? true : _ref$showUpload,
      _ref$showCreate = _ref.showCreate,
      showCreate = _ref$showCreate === void 0 ? true : _ref$showCreate;
  return React.createElement(DropdownMenu, {
    isRightAligned: true
  }, React.createElement(AddButton, null), React.createElement(Menu, null, showUpload && React.createElement(MenuItem, {
    onClick: onUpload
  }, React.createElement(FormattedMessage, messages.upload)), showCreate && React.createElement(MenuItem, {
    onClick: onCreate
  }, React.createElement(FormattedMessage, messages.newFolder))));
};

export default Add;
//# sourceMappingURL=Add.js.map