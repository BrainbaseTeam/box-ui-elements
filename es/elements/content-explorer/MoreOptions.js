import React from 'react';
import { FormattedMessage } from 'react-intl';
import Button from '../../components/button/Button';
import DropdownMenu from '../../components/dropdown-menu/DropdownMenu';
import Menu from '../../components/menu/Menu';
import MenuItem from '../../components/menu/MenuItem';
import Browser from '../../utils/Browser';
import IconEllipsis from '../../icons/general/IconEllipsis';
import { bdlGray50 } from '../../styles/variables';
import messages from '../common/messages';
import { PERMISSION_CAN_DOWNLOAD, PERMISSION_CAN_RENAME, PERMISSION_CAN_DELETE, PERMISSION_CAN_SHARE, PERMISSION_CAN_PREVIEW, TYPE_FILE, TYPE_WEBLINK } from '../../constants';
import './MoreOptionsCell.scss';

var MoreOptions = function MoreOptions(_ref) {
  var canPreview = _ref.canPreview,
      canShare = _ref.canShare,
      canDownload = _ref.canDownload,
      canDelete = _ref.canDelete,
      canRename = _ref.canRename,
      onItemSelect = _ref.onItemSelect,
      onItemDelete = _ref.onItemDelete,
      onItemDownload = _ref.onItemDownload,
      onItemRename = _ref.onItemRename,
      onItemShare = _ref.onItemShare,
      onItemPreview = _ref.onItemPreview,
      isSmall = _ref.isSmall,
      item = _ref.item;

  var onFocus = function onFocus() {
    return onItemSelect(item);
  };

  var onDelete = function onDelete() {
    return onItemDelete(item);
  };

  var onDownload = function onDownload() {
    return onItemDownload(item);
  };

  var onRename = function onRename() {
    return onItemRename(item);
  };

  var onShare = function onShare() {
    return onItemShare(item);
  };

  var onPreview = function onPreview() {
    return onItemPreview(item);
  };

  var permissions = item.permissions,
      type = item.type;

  if (!permissions) {
    return /*#__PURE__*/React.createElement("span", null);
  }

  var allowPreview = type === TYPE_FILE && canPreview && permissions[PERMISSION_CAN_PREVIEW];
  var allowOpen = type === TYPE_WEBLINK;
  var allowDelete = canDelete && permissions[PERMISSION_CAN_DELETE];
  var allowShare = canShare && permissions[PERMISSION_CAN_SHARE];
  var allowRename = canRename && permissions[PERMISSION_CAN_RENAME];
  var allowDownload = canDownload && permissions[PERMISSION_CAN_DOWNLOAD] && type === TYPE_FILE && !Browser.isMobile();
  var allowed = allowDelete || allowRename || allowDownload || allowPreview || allowShare || allowOpen;

  if (!allowed) {
    return /*#__PURE__*/React.createElement("span", null);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "bce-more-options"
  }, /*#__PURE__*/React.createElement(DropdownMenu, {
    constrainToScrollParent: true,
    isRightAligned: true
  }, /*#__PURE__*/React.createElement(Button, {
    className: "bce-btn-more-options",
    onFocus: onFocus,
    type: "button"
  }, /*#__PURE__*/React.createElement(IconEllipsis, {
    color: bdlGray50,
    height: 10,
    width: 16
  })), /*#__PURE__*/React.createElement(Menu, null, allowPreview && /*#__PURE__*/React.createElement(MenuItem, {
    onClick: onPreview
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.preview)), allowOpen && /*#__PURE__*/React.createElement(MenuItem, {
    onClick: onPreview
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.open)), allowDelete && /*#__PURE__*/React.createElement(MenuItem, {
    onClick: onDelete
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.delete)), allowDownload && /*#__PURE__*/React.createElement(MenuItem, {
    onClick: onDownload
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.download)), allowRename && /*#__PURE__*/React.createElement(MenuItem, {
    onClick: onRename
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.rename)), allowShare && /*#__PURE__*/React.createElement(MenuItem, {
    onClick: onShare
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.share)))), allowShare && !isSmall && /*#__PURE__*/React.createElement(Button, {
    onClick: onShare,
    onFocus: onFocus,
    type: "button"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.share)));
};

export default MoreOptions;
//# sourceMappingURL=MoreOptions.js.map