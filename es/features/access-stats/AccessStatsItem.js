function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import PlainButton from '../../components/plain-button/PlainButton';
import IconEye from '../../icons/general/IconEye';
import IconComment from '../../icons/general/IconComment';
import IconDownloadSolid from '../../icons/general/IconDownloadSolid';
import IconPencilSolid from '../../icons/general/IconPencilSolid';
import messages from './messages';
import './AccessStatsItem.scss';
var statsAttributesTable = {
  preview: {
    icon: IconEye,
    message: messages.accessStatsPreviews
  },
  view: {
    icon: IconEye,
    message: messages.accessStatsViews
  },
  download: {
    icon: IconDownloadSolid,
    message: messages.accessStatsDownloads
  },
  comment: {
    icon: IconComment,
    message: messages.accessStatsComments
  },
  edit: {
    icon: IconPencilSolid,
    message: messages.accessStatsEdits
  }
};
var ICON_COLOR = '#2a62b9';
var ITEM_CONTENT_CLASS_NAME = 'access-stats-item-content';

var AccessStatsItem = function AccessStatsItem(_ref) {
  var type = _ref.type,
      _ref$count = _ref.count,
      count = _ref$count === void 0 ? 0 : _ref$count,
      _ref$hasCountOverflow = _ref.hasCountOverflowed,
      hasCountOverflowed = _ref$hasCountOverflow === void 0 ? false : _ref$hasCountOverflow,
      openAccessStatsModal = _ref.openAccessStatsModal,
      statButtonProps = _ref.statButtonProps;
  var statAttributes = statsAttributesTable[type];
  var IconComponent = statAttributes.icon;
  var labelMessage = statAttributes.message;
  var itemContent = React.createElement(React.Fragment, null, React.createElement(IconComponent, {
    color: ICON_COLOR,
    height: 10,
    width: 14
  }), React.createElement("span", {
    className: "access-stats-label"
  }, React.createElement(FormattedMessage, labelMessage)), React.createElement(FormattedNumber, {
    value: count
  }), hasCountOverflowed && '+');
  return React.createElement("li", {
    className: "access-stats-item"
  }, openAccessStatsModal ? React.createElement(PlainButton, _extends({
    className: ITEM_CONTENT_CLASS_NAME,
    onClick: openAccessStatsModal
  }, statButtonProps), itemContent) : React.createElement("span", {
    className: ITEM_CONTENT_CLASS_NAME
  }, itemContent));
};

export default AccessStatsItem;
//# sourceMappingURL=AccessStatsItem.js.map