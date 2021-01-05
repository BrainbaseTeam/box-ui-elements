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
import { PERMISSION_CAN_DOWNLOAD, PERMISSION_CAN_RENAME, PERMISSION_CAN_DELETE, PERMISSION_CAN_SHARE, PERMISSION_CAN_PREVIEW, TYPE_FILE, TYPE_FOLDER, TYPE_WEBLINK, PERMISSION_CAN_SET_SHARE_ACCESS } from '../../constants';
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
      onItemCustomShare = _ref.onItemCustomShare,
      onItemMoveTo = _ref.onItemMoveTo,
      onItemCopy = _ref.onItemCopy,
      onItemSetThumbnail = _ref.onItemSetThumbnail,
      onItemRemoveThumbnail = _ref.onItemRemoveThumbnail,
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

  var onCustomShare = function onCustomShare() {
    return onItemCustomShare(item);
  };

  var onMoveTo = function onMoveTo() {
    return onItemMoveTo(item);
  };

  var onCopy = function onCopy() {
    return onItemCopy(item);
  };

  var onSetThumbnail = function onSetThumbnail() {
    return onItemSetThumbnail(item);
  };

  var onRemoveThumbnail = function onRemoveThumbnail() {
    return onItemRemoveThumbnail(item);
  };

  var permissions = item.permissions,
      type = item.type;

  if (!permissions) {
    return /*#__PURE__*/React.createElement("span", null);
  }

  var allowPreview = type === TYPE_FILE && canPreview && permissions[PERMISSION_CAN_PREVIEW];
  var allowOpen = type === TYPE_WEBLINK;
  var allowDelete = canDelete && permissions[PERMISSION_CAN_DELETE];
  var allowShare = canShare && permissions[PERMISSION_CAN_SHARE] && permissions[PERMISSION_CAN_SET_SHARE_ACCESS];
  var allowRename = canRename && permissions[PERMISSION_CAN_RENAME];
  var allowDownload = canDownload && permissions[PERMISSION_CAN_DOWNLOAD] && type === TYPE_FILE && !Browser.isMobile();
  var allowMoveTo = permissions[PERMISSION_CAN_RENAME];
  var allowCopy = permissions[PERMISSION_CAN_RENAME];
  var allowSetThumbnail = type === TYPE_FOLDER && permissions[PERMISSION_CAN_RENAME] && !item.metadata;
  var allowRemoveThumbnail = type === TYPE_FOLDER && permissions[PERMISSION_CAN_RENAME] && item.metadata;
  var allowed = allowDelete || allowRename || allowDownload || allowPreview || allowShare || allowOpen || allowMoveTo || allowCopy || allowSetThumbnail || allowRemoveThumbnail;

  if (!allowed) {
    return /*#__PURE__*/React.createElement("span", null);
  }

  var moveToMenuItem = {
    id: 'be.moveTo',
    description: 'Move to...',
    defaultMessage: 'Move to...'
  };
  var copyMenuItem = {
    id: 'be.copy',
    description: 'Copy',
    defaultMessage: 'Copy'
  };
  var setThumbnailMenuItem = {
    id: 'be.setThumbnail',
    description: 'Set custom thumbnail',
    defaultMessage: 'Set custom thumbnail'
  };
  var removeThumbnailMenuItem = {
    id: 'be.removeThumbnail',
    description: 'Remove custom thumbnail',
    defaultMessage: 'Remove custom thumbnail'
  };
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
    onClick: onCustomShare
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.share)), allowMoveTo && /*#__PURE__*/React.createElement(MenuItem, {
    onClick: onMoveTo
  }, /*#__PURE__*/React.createElement(FormattedMessage, moveToMenuItem)), allowCopy && /*#__PURE__*/React.createElement(MenuItem, {
    onClick: onCopy
  }, /*#__PURE__*/React.createElement(FormattedMessage, copyMenuItem)), allowSetThumbnail && /*#__PURE__*/React.createElement(MenuItem, {
    onClick: onSetThumbnail
  }, /*#__PURE__*/React.createElement(FormattedMessage, setThumbnailMenuItem)), allowRemoveThumbnail && /*#__PURE__*/React.createElement(MenuItem, {
    onClick: onRemoveThumbnail
  }, /*#__PURE__*/React.createElement(FormattedMessage, removeThumbnailMenuItem)))));
};

export default MoreOptions;
//# sourceMappingURL=MoreOptions.js.map