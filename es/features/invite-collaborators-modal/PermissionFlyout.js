import React from 'react';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from '../../components/table';
import { Flyout, Overlay } from '../../components/flyout';
import IconInfo from '../../icons/general/IconInfo';
import messages from './messages';
import './PermissionFlyout.scss';

var PermissionFlyout = function PermissionFlyout(_ref) {
  var formatMessage = _ref.intl.formatMessage;
  var columnHeaders = [formatMessage(messages.permissionLevelsTableHeaderText), formatMessage(messages.uploadTableHeaderText), formatMessage(messages.downloadTableHeaderText), formatMessage(messages.previewTableHeaderText), formatMessage(messages.getLinkTableHeaderText), formatMessage(messages.editTableHeaderText), formatMessage(messages.deleteTableHeaderText), formatMessage(messages.ownerTableHeaderText)];
  var data = [[formatMessage(messages.coownerLevelText), '●', '●', '●', '●', '●', '●', '●'], [formatMessage(messages.editorLevelText), '●', '●', '●', '●', '●', '●', ''], [formatMessage(messages.viewerUploaderLevelText), '●', '●', '●', '●', '●', '', ''], [formatMessage(messages.previewerUploaderLevelText), '●', '', '●', '', '', '', ''], [formatMessage(messages.viewerLevelText), '', '●', '●', '●', '', '', ''], [formatMessage(messages.previewerLevelText), '', '', '●', '', '', '', ''], [formatMessage(messages.uploaderLevelText), '●', '', '', '', '', '', '']];
  return /*#__PURE__*/React.createElement(Flyout, {
    className: "invitation-permission-flyout-overlay",
    position: "top-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "invitation-permission-flyout-target",
    "data-resin-target": "learnmore"
  }, /*#__PURE__*/React.createElement(IconInfo, {
    height: 16,
    with: 16
  }), /*#__PURE__*/React.createElement(FormattedMessage, messages.inviteePermissionsLearnMore)), /*#__PURE__*/React.createElement(Overlay, null, /*#__PURE__*/React.createElement(Table, {
    isCompact: true
  }, /*#__PURE__*/React.createElement(TableHeader, null, columnHeaders.map(function (header) {
    return /*#__PURE__*/React.createElement(TableHeaderCell, {
      key: header
    }, header);
  })), /*#__PURE__*/React.createElement(TableBody, null, data.map(function (row, rowIndex) {
    return /*#__PURE__*/React.createElement(TableRow, {
      key: rowIndex
    }, row.map(function (cell, colIndex) {
      return /*#__PURE__*/React.createElement(TableCell, {
        key: "".concat(rowIndex).concat(colIndex)
      }, cell);
    }));
  })))));
};

PermissionFlyout.displayName = 'PermissionFlyout';
PermissionFlyout.propTypes = {
  intl: intlShape.isRequired
};
export { PermissionFlyout as PermissionFlyoutBase };
export default injectIntl(PermissionFlyout);
//# sourceMappingURL=PermissionFlyout.js.map