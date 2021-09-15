function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import PlainButton from '../../components/plain-button/PlainButton';
import AccessStatsItemsList from './AccessStatsItemsList';
import messages from './messages';
import './AccessStats.scss';

var AccessStats = function AccessStats(_ref) {
  var _ref$commentCount = _ref.commentCount,
      commentCount = _ref$commentCount === void 0 ? 0 : _ref$commentCount,
      _ref$commentStatButto = _ref.commentStatButtonProps,
      commentStatButtonProps = _ref$commentStatButto === void 0 ? {} : _ref$commentStatButto,
      _ref$downloadCount = _ref.downloadCount,
      downloadCount = _ref$downloadCount === void 0 ? 0 : _ref$downloadCount,
      _ref$downloadStatButt = _ref.downloadStatButtonProps,
      downloadStatButtonProps = _ref$downloadStatButt === void 0 ? {} : _ref$downloadStatButt,
      _ref$editCount = _ref.editCount,
      editCount = _ref$editCount === void 0 ? 0 : _ref$editCount,
      _ref$editStatButtonPr = _ref.editStatButtonProps,
      editStatButtonProps = _ref$editStatButtonPr === void 0 ? {} : _ref$editStatButtonPr,
      errorMessage = _ref.errorMessage,
      _ref$hasCountOverflow = _ref.hasCountOverflowed,
      hasCountOverflowed = _ref$hasCountOverflow === void 0 ? false : _ref$hasCountOverflow,
      _ref$isBoxNote = _ref.isBoxNote,
      isBoxNote = _ref$isBoxNote === void 0 ? false : _ref$isBoxNote,
      openAccessStatsModal = _ref.openAccessStatsModal,
      _ref$previewCount = _ref.previewCount,
      previewCount = _ref$previewCount === void 0 ? 0 : _ref$previewCount,
      _ref$previewStatButto = _ref.previewStatButtonProps,
      previewStatButtonProps = _ref$previewStatButto === void 0 ? {} : _ref$previewStatButto,
      _ref$viewMoreButtonPr = _ref.viewMoreButtonProps,
      viewMoreButtonProps = _ref$viewMoreButtonPr === void 0 ? {} : _ref$viewMoreButtonPr,
      _ref$viewStatButtonPr = _ref.viewStatButtonProps,
      viewStatButtonProps = _ref$viewStatButtonPr === void 0 ? {} : _ref$viewStatButtonPr;
  return React.createElement("div", {
    className: "access-stats"
  }, errorMessage ? React.createElement("p", null, errorMessage) : React.createElement(React.Fragment, null, React.createElement(AccessStatsItemsList, {
    commentCount: commentCount,
    commentStatButtonProps: commentStatButtonProps,
    downloadCount: downloadCount,
    downloadStatButtonProps: downloadStatButtonProps,
    editCount: editCount,
    editStatButtonProps: editStatButtonProps,
    hasCountOverflowed: hasCountOverflowed,
    isBoxNote: isBoxNote,
    openAccessStatsModal: openAccessStatsModal,
    previewCount: previewCount,
    previewStatButtonProps: previewStatButtonProps,
    viewStatButtonProps: viewStatButtonProps
  }), openAccessStatsModal && React.createElement(PlainButton, _extends({
    className: "lnk access-stats-view-details",
    onClick: openAccessStatsModal
  }, viewMoreButtonProps), React.createElement(FormattedMessage, messages.accessStatsViewDetails))));
};

export default AccessStats;
//# sourceMappingURL=AccessStats.js.map