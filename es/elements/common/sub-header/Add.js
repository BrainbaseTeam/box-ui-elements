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
  return /*#__PURE__*/React.createElement(DropdownMenu, {
    isRightAligned: true
  }, /*#__PURE__*/React.createElement(AddButton, null), /*#__PURE__*/React.createElement(Menu, null, showUpload && /*#__PURE__*/React.createElement(MenuItem, {
    onClick: onUpload
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.upload)), showCreate && /*#__PURE__*/React.createElement(MenuItem, {
    onClick: onCreate
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.newFolder))));
};

export default Add;
//# sourceMappingURL=Add.js.map