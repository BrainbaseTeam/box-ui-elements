var _ACTION_MAP;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Versions Item component
 * @author Box
 */
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import selectors from '../../common/selectors/version';
import sizeUtil from '../../../utils/size';
import VersionsItemActions from './VersionsItemActions';
import VersionsItemButton from './VersionsItemButton';
import VersionsItemBadge from './VersionsItemBadge';
import VersionsItemRetention from './VersionsItemRetention';
import { ReadableTime } from '../../../components/time';
import { FILE_REQUEST_NAME, VERSION_DELETE_ACTION, VERSION_PROMOTE_ACTION, VERSION_RESTORE_ACTION, VERSION_UPLOAD_ACTION } from '../../../constants';
import './VersionsItem.scss';
var ACTION_MAP = (_ACTION_MAP = {}, _defineProperty(_ACTION_MAP, VERSION_DELETE_ACTION, messages.versionDeletedBy), _defineProperty(_ACTION_MAP, VERSION_RESTORE_ACTION, messages.versionRestoredBy), _defineProperty(_ACTION_MAP, VERSION_PROMOTE_ACTION, messages.versionPromotedBy), _defineProperty(_ACTION_MAP, VERSION_UPLOAD_ACTION, messages.versionUploadedBy), _ACTION_MAP);
var FILE_EXTENSIONS_OFFICE = ['xlsb', 'xlsm', 'xlsx'];
var FIVE_MINUTES_MS = 5 * 60 * 1000;

var VersionsItem = function VersionsItem(_ref) {
  var fileId = _ref.fileId,
      _ref$isCurrent = _ref.isCurrent,
      isCurrent = _ref$isCurrent === void 0 ? false : _ref$isCurrent,
      _ref$isSelected = _ref.isSelected,
      isSelected = _ref$isSelected === void 0 ? false : _ref$isSelected,
      _ref$isWatermarked = _ref.isWatermarked,
      isWatermarked = _ref$isWatermarked === void 0 ? false : _ref$isWatermarked,
      onDelete = _ref.onDelete,
      onDownload = _ref.onDownload,
      onPreview = _ref.onPreview,
      onPromote = _ref.onPromote,
      onRestore = _ref.onRestore,
      version = _ref.version,
      versionCount = _ref.versionCount,
      versionLimit = _ref.versionLimit;
  var createdAt = version.created_at,
      extension = version.extension,
      versionId = version.id,
      is_download_available = version.is_download_available,
      _version$permissions = version.permissions,
      permissions = _version$permissions === void 0 ? {} : _version$permissions,
      restoredAt = version.restored_at,
      retention = version.retention,
      size = version.size,
      trashedAt = version.trashed_at,
      versionNumber = version.version_number,
      versionPromoted = version.version_promoted;
  var can_delete = permissions.can_delete,
      can_download = permissions.can_download,
      can_preview = permissions.can_preview,
      can_upload = permissions.can_upload;

  var _ref2 = retention || {},
      retentionAppliedAt = _ref2.applied_at,
      retentionDispositionAt = _ref2.disposition_at;

  var retentionDispositionAtDate = retentionDispositionAt && new Date(retentionDispositionAt); // Version info helpers

  var versionAction = selectors.getVersionAction(version);
  var versionInteger = versionNumber ? parseInt(versionNumber, 10) : 1;
  var versionTime = restoredAt || trashedAt || createdAt;
  var versionTimestamp = versionTime && new Date(versionTime).getTime();
  var versionUserName = selectors.getVersionUser(version).name || React.createElement(FormattedMessage, messages.versionUserUnknown);
  var versionDisplayName = versionUserName !== FILE_REQUEST_NAME ? versionUserName : React.createElement(FormattedMessage, messages.fileRequestDisplayName); // Version state helpers

  var isDeleted = versionAction === VERSION_DELETE_ACTION;
  var isDownloadable = !!is_download_available;
  var isLimited = versionCount - versionInteger >= versionLimit;
  var isOffice = FILE_EXTENSIONS_OFFICE.includes(extension);
  var isRestricted = (isOffice || isWatermarked) && !isCurrent;
  var isRetained = !!retentionAppliedAt && (!retentionDispositionAtDate || retentionDispositionAtDate > new Date()); // Version action helpers

  var canPreview = can_preview && !isDeleted && !isLimited && !isRestricted;
  var showDelete = can_delete && !isDeleted && !isCurrent;
  var showDownload = can_download && !isDeleted && isDownloadable;
  var showPromote = can_upload && !isDeleted && !isCurrent;
  var showRestore = can_delete && isDeleted;
  var showPreview = canPreview && !isSelected;
  var hasActions = showDelete || showDownload || showPreview || showPromote || showRestore; // Version action callback helper

  var handleAction = function handleAction(handler) {
    return function () {
      if (handler) {
        handler(versionId);
      }
    };
  };

  return React.createElement("div", {
    className: "bcs-VersionsItem"
  }, React.createElement(VersionsItemButton, {
    fileId: fileId,
    isCurrent: isCurrent,
    isDisabled: !canPreview,
    isSelected: isSelected,
    onClick: handleAction(onPreview)
  }, React.createElement("div", {
    className: "bcs-VersionsItem-badge"
  }, React.createElement(VersionsItemBadge, {
    versionNumber: versionNumber
  })), React.createElement("div", {
    className: "bcs-VersionsItem-details"
  }, isCurrent && React.createElement("div", {
    className: "bcs-VersionsItem-current"
  }, React.createElement(FormattedMessage, messages.versionCurrent)), React.createElement("div", {
    className: "bcs-VersionsItem-log",
    "data-testid": "bcs-VersionsItem-log",
    title: versionDisplayName
  }, React.createElement(FormattedMessage, _extends({}, ACTION_MAP[versionAction], {
    values: {
      name: versionDisplayName,
      versionPromoted: versionPromoted
    }
  }))), React.createElement("div", {
    className: "bcs-VersionsItem-info"
  }, versionTimestamp && React.createElement("time", {
    className: "bcs-VersionsItem-date",
    dateTime: versionTime
  }, React.createElement(ReadableTime, {
    alwaysShowTime: true,
    relativeThreshold: FIVE_MINUTES_MS,
    timestamp: versionTimestamp
  })), !!size && React.createElement("span", {
    className: "bcs-VersionsItem-size"
  }, sizeUtil(size))), isRetained && React.createElement("div", {
    className: "bcs-VersionsItem-retention"
  }, React.createElement(VersionsItemRetention, {
    retention: retention
  })), isLimited && hasActions && React.createElement("div", {
    className: "bcs-VersionsItem-footer"
  }, React.createElement(FormattedMessage, _extends({}, messages.versionLimitExceeded, {
    values: {
      versionLimit: versionLimit
    }
  }))))), !isLimited && hasActions && React.createElement(VersionsItemActions, {
    fileId: fileId,
    isCurrent: isCurrent,
    isRetained: isRetained,
    onDelete: handleAction(onDelete),
    onDownload: handleAction(onDownload),
    onPreview: handleAction(onPreview),
    onPromote: handleAction(onPromote),
    onRestore: handleAction(onRestore),
    showDelete: showDelete,
    showDownload: showDownload,
    showPreview: showPreview,
    showPromote: showPromote,
    showRestore: showRestore
  }));
};

export default VersionsItem;
//# sourceMappingURL=VersionsItem.js.map