function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Component for the sub details for the item name
 * @author Box
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import getSize from '../../../utils/size';
import Datefield from '../date';
import messages from '../messages';
import { VIEW_RECENTS } from '../../../constants';
import './ItemSubDetails.scss';

var ItemSubDetails = function ItemSubDetails(_ref) {
  var item = _ref.item,
      view = _ref.view;
  var _item$modified_at = item.modified_at,
      modified_at = _item$modified_at === void 0 ? '' : _item$modified_at,
      _item$interacted_at = item.interacted_at,
      interacted_at = _item$interacted_at === void 0 ? '' : _item$interacted_at,
      modified_by = item.modified_by;
  var modifiedBy = modified_by ? modified_by.name || '' : '';
  var isRecents = view === VIEW_RECENTS;
  var date = isRecents ? interacted_at || modified_at : modified_at;
  var size = item.size;
  var DateValue = React.createElement(Datefield, {
    date: date,
    omitCommas: true
  });
  var message = messages.modifiedDateBy;

  if (isRecents) {
    message = messages.interactedDate;
  } else if (!modifiedBy) {
    message = messages.modifiedDate;
  }

  return React.createElement("span", null, React.createElement("span", {
    className: "bdl-ItemSubDetails-modifiedBy"
  }, React.createElement(FormattedMessage, _extends({}, message, {
    values: {
      date: DateValue,
      name: modifiedBy
    }
  }))), React.createElement("span", {
    className: "bdl-ItemSubDetails-size"
  }, getSize(size)));
};

export default ItemSubDetails;
//# sourceMappingURL=ItemSubDetails.js.map