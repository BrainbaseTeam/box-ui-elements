/**
 * 
 * @file Versions Item Actions component
 * @author Box
 */
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import DropdownMenu from '../../../components/dropdown-menu';
import IconClockPast from '../../../icons/general/IconClockPast';
import IconDownload from '../../../icons/general/IconDownload';
import IconEllipsis from '../../../icons/general/IconEllipsis';
import IconOpenWith from '../../../icons/general/IconOpenWith';
import IconTrash from '../../../icons/general/IconTrash';
import IconUpload from '../../../icons/general/IconUpload';
import messages from './messages';
import PlainButton from '../../../components/plain-button';
import Tooltip from '../../../components/tooltip/Tooltip';
import VersionsItemAction from './VersionsItemAction';
import { Menu } from '../../../components/menu';
import './VersionsItemActions.scss';

var handleMenuClose = function handleMenuClose(event) {
  event.stopPropagation();
};

var handleToggleClick = function handleToggleClick(event) {
  event.stopPropagation();
};

var VersionsItemActions = function VersionsItemActions(_ref) {
  var fileId = _ref.fileId,
      _ref$isCurrent = _ref.isCurrent,
      isCurrent = _ref$isCurrent === void 0 ? false : _ref$isCurrent,
      _ref$isRetained = _ref.isRetained,
      isRetained = _ref$isRetained === void 0 ? false : _ref$isRetained,
      onDelete = _ref.onDelete,
      onDownload = _ref.onDownload,
      onPreview = _ref.onPreview,
      onPromote = _ref.onPromote,
      onRestore = _ref.onRestore,
      _ref$showDelete = _ref.showDelete,
      showDelete = _ref$showDelete === void 0 ? false : _ref$showDelete,
      _ref$showDownload = _ref.showDownload,
      showDownload = _ref$showDownload === void 0 ? false : _ref$showDownload,
      _ref$showPreview = _ref.showPreview,
      showPreview = _ref$showPreview === void 0 ? false : _ref$showPreview,
      _ref$showPromote = _ref.showPromote,
      showPromote = _ref$showPromote === void 0 ? false : _ref$showPromote,
      _ref$showRestore = _ref.showRestore,
      showRestore = _ref$showRestore === void 0 ? false : _ref$showRestore;

  if (!showDelete && !showDownload && !showPreview && !showPromote && !showRestore) {
    return null;
  }

  return /*#__PURE__*/React.createElement(DropdownMenu, {
    className: "bcs-VersionsItemActions",
    constrainToScrollParent: true,
    constrainToWindow: true,
    isRightAligned: true,
    onMenuClose: handleMenuClose
  }, /*#__PURE__*/React.createElement(PlainButton, {
    className: "bcs-VersionsItemActions-toggle",
    "data-resin-iscurrent": isCurrent,
    "data-resin-itemid": fileId,
    "data-resin-target": "overflow",
    onClick: handleToggleClick,
    type: "button"
  }, /*#__PURE__*/React.createElement(IconEllipsis, {
    height: 4,
    width: 14
  }), /*#__PURE__*/React.createElement(FormattedMessage, messages.versionActionToggle, function (text) {
    return /*#__PURE__*/React.createElement("span", {
      className: "accessibility-hidden"
    }, text);
  })), /*#__PURE__*/React.createElement(Menu, {
    className: "bcs-VersionsItemActions-menu",
    "data-resin-component": "preview" // Needed for resin events due to tether moving menu to body
    ,
    "data-resin-feature": "versions" // Needed for resin events due to tether moving menu to body

  }, showPreview && /*#__PURE__*/React.createElement(VersionsItemAction, {
    action: "preview",
    fileId: fileId,
    isCurrent: isCurrent,
    onClick: onPreview
  }, /*#__PURE__*/React.createElement(IconOpenWith, null), /*#__PURE__*/React.createElement(FormattedMessage, messages.versionActionPreview)), showDownload && /*#__PURE__*/React.createElement(VersionsItemAction, {
    action: "download",
    fileId: fileId,
    isCurrent: isCurrent,
    onClick: onDownload
  }, /*#__PURE__*/React.createElement(IconDownload, null), /*#__PURE__*/React.createElement(FormattedMessage, messages.versionActionDownload)), showPromote && /*#__PURE__*/React.createElement(VersionsItemAction, {
    action: "promote",
    fileId: fileId,
    isCurrent: isCurrent,
    onClick: onPromote
  }, /*#__PURE__*/React.createElement(IconUpload, null), /*#__PURE__*/React.createElement(FormattedMessage, messages.versionActionPromote)), showRestore && /*#__PURE__*/React.createElement(VersionsItemAction, {
    action: "restore",
    fileId: fileId,
    isCurrent: isCurrent,
    onClick: onRestore
  }, /*#__PURE__*/React.createElement(IconClockPast, {
    height: 14,
    width: 14
  }), /*#__PURE__*/React.createElement(FormattedMessage, messages.versionActionRestore)), showDelete && /*#__PURE__*/React.createElement(Tooltip, {
    position: "middle-left",
    text: /*#__PURE__*/React.createElement(FormattedMessage, messages.versionActionDisabledRetention),
    isTabbable: false,
    isDisabled: !isRetained
  }, /*#__PURE__*/React.createElement(VersionsItemAction, {
    action: "remove",
    fileId: fileId,
    isCurrent: isCurrent,
    isDisabled: isRetained,
    onClick: onDelete
  }, /*#__PURE__*/React.createElement(IconTrash, null), /*#__PURE__*/React.createElement(FormattedMessage, messages.versionActionDelete)))));
};

export default VersionsItemActions;
//# sourceMappingURL=VersionsItemActions.js.map