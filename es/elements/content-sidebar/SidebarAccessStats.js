function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Versions sidebar component
 * @author Box
 */
import React from 'react';
import isFinite from 'lodash/isFinite';
import { injectIntl, FormattedMessage } from 'react-intl';
import AccessStats from '../../features/access-stats/AccessStats';
import messages from '../common/messages';
import { INTERACTION_TARGET, SECTION_TARGETS, DETAILS_TARGETS } from '../common/interactionTargets';
import { isBoxNote } from '../../utils/file';
import SidebarSection from './SidebarSection';
import withErrorHandling from './withErrorHandling';

var SidebarAccessStats = function SidebarAccessStats(_ref) {
  var onAccessStatsClick = _ref.onAccessStatsClick,
      _ref$accessStats = _ref.accessStats,
      accessStats = _ref$accessStats === void 0 ? {
    comment_count: undefined,
    download_count: undefined,
    edit_count: undefined,
    has_count_overflowed: false,
    preview_count: undefined
  } : _ref$accessStats,
      file = _ref.file,
      error = _ref.error,
      intl = _ref.intl;
  var preview_count = accessStats.preview_count,
      comment_count = accessStats.comment_count,
      download_count = accessStats.download_count,
      edit_count = accessStats.edit_count;

  if (!isFinite(preview_count) && !isFinite(comment_count) && !isFinite(download_count) && !isFinite(edit_count) && !error) {
    return null;
  }

  var errorMessage = error ? intl.formatMessage(error) : undefined;
  return React.createElement(SidebarSection, {
    interactionTarget: SECTION_TARGETS.ACCESS_STATS,
    title: React.createElement(FormattedMessage, messages.sidebarAccessStats)
  }, React.createElement(AccessStats, {
    errorMessage: errorMessage,
    commentCount: comment_count,
    commentStatButtonProps: _defineProperty({}, INTERACTION_TARGET, DETAILS_TARGETS.ACCESS_STATS.COMMENTS),
    downloadCount: download_count,
    downloadStatButtonProps: _defineProperty({}, INTERACTION_TARGET, DETAILS_TARGETS.ACCESS_STATS.DOWNLOADS),
    previewCount: preview_count,
    previewStatButtonProps: _defineProperty({}, INTERACTION_TARGET, DETAILS_TARGETS.ACCESS_STATS.PREVIEWS),
    viewStatButtonProps: _defineProperty({}, INTERACTION_TARGET, DETAILS_TARGETS.ACCESS_STATS.VIEWS),
    editCount: edit_count,
    editStatButtonProps: _defineProperty({}, INTERACTION_TARGET, DETAILS_TARGETS.ACCESS_STATS.EDITS),
    openAccessStatsModal: onAccessStatsClick,
    isBoxNote: isBoxNote(file),
    viewMoreButtonProps: _defineProperty({}, INTERACTION_TARGET, DETAILS_TARGETS.ACCESS_STATS.VIEW_DETAILS)
  }));
};

export { SidebarAccessStats as SidebarAccessStatsComponent };
export default withErrorHandling(injectIntl(SidebarAccessStats));
//# sourceMappingURL=SidebarAccessStats.js.map