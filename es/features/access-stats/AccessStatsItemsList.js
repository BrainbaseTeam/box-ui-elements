import * as React from 'react';
import AccessStatsItem from './AccessStatsItem';

var AccessStatsItemsList = function AccessStatsItemsList(_ref) {
  var commentCount = _ref.commentCount,
      commentStatButtonProps = _ref.commentStatButtonProps,
      downloadCount = _ref.downloadCount,
      downloadStatButtonProps = _ref.downloadStatButtonProps,
      editCount = _ref.editCount,
      editStatButtonProps = _ref.editStatButtonProps,
      _ref$hasCountOverflow = _ref.hasCountOverflowed,
      hasCountOverflowed = _ref$hasCountOverflow === void 0 ? false : _ref$hasCountOverflow,
      isBoxNote = _ref.isBoxNote,
      openAccessStatsModal = _ref.openAccessStatsModal,
      previewCount = _ref.previewCount,
      previewStatButtonProps = _ref.previewStatButtonProps,
      viewStatButtonProps = _ref.viewStatButtonProps;
  return React.createElement("ul", {
    className: "access-stats-list"
  }, React.createElement(AccessStatsItem, {
    count: previewCount,
    hasCountOverflowed: hasCountOverflowed,
    openAccessStatsModal: openAccessStatsModal,
    statButtonProps: isBoxNote ? viewStatButtonProps : previewStatButtonProps,
    type: isBoxNote ? 'view' : 'preview'
  }), React.createElement(AccessStatsItem, {
    count: editCount,
    hasCountOverflowed: hasCountOverflowed,
    openAccessStatsModal: openAccessStatsModal,
    statButtonProps: editStatButtonProps,
    type: "edit"
  }), React.createElement(AccessStatsItem, {
    count: commentCount,
    hasCountOverflowed: hasCountOverflowed,
    openAccessStatsModal: openAccessStatsModal,
    statButtonProps: commentStatButtonProps,
    type: "comment"
  }), !isBoxNote && React.createElement(AccessStatsItem, {
    count: downloadCount,
    hasCountOverflowed: hasCountOverflowed,
    openAccessStatsModal: openAccessStatsModal,
    statButtonProps: downloadStatButtonProps,
    type: "download"
  }));
};

export default AccessStatsItemsList;
//# sourceMappingURL=AccessStatsItemsList.js.map