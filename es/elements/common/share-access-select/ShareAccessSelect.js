/**
 * 
 * @file Content Explorer Delete Confirmation Dialog
 * @author Box
 */
import React from 'react';
import { injectIntl } from 'react-intl';
import messages from '../messages';
import { ACCESS_NONE, ACCESS_OPEN, ACCESS_COLLAB, ACCESS_COMPANY } from '../../../constants';
import './ShareAccessSelect.scss';

var ShareAccessSelect = function ShareAccessSelect(_ref) {
  var className = _ref.className,
      canSetShareAccess = _ref.canSetShareAccess,
      onChange = _ref.onChange,
      item = _ref.item,
      intl = _ref.intl;
  var allowedSharedAccessLevels = item.allowed_shared_link_access_levels,
      permissions = item.permissions,
      sharedLink = item.shared_link;

  if (!allowedSharedAccessLevels) {
    return React.createElement("span", null);
  }

  var _ref2 = sharedLink || {},
      _ref2$access = _ref2.access,
      access = _ref2$access === void 0 ? ACCESS_NONE : _ref2$access;

  var _ref3 = permissions || {},
      allowShareAccessChange = _ref3.can_set_share_access;

  var changeHandler = function changeHandler(_ref4) {
    var target = _ref4.target;
    return onChange(target.value, item);
  };

  var allowOpen = allowedSharedAccessLevels.indexOf(ACCESS_OPEN) > -1;
  var allowCollab = allowedSharedAccessLevels.indexOf(ACCESS_COLLAB) > -1;
  var allowCompany = allowedSharedAccessLevels.indexOf(ACCESS_COMPANY) > -1;
  var allowed = canSetShareAccess && allowShareAccessChange && (allowOpen || allowCompany || allowCollab);

  if (!allowed) {
    return React.createElement("span", null);
  }
  /* eslint-disable jsx-a11y/no-onchange */


  return React.createElement("select", {
    className: "be-share-access-select ".concat(className),
    onChange: changeHandler,
    value: access
  }, allowOpen ? React.createElement("option", {
    value: ACCESS_OPEN
  }, intl.formatMessage(messages.shareAccessOpen)) : null, allowCollab ? React.createElement("option", {
    value: ACCESS_COLLAB
  }, intl.formatMessage(messages.shareAccessCollab)) : null, allowCompany ? React.createElement("option", {
    value: ACCESS_COMPANY
  }, intl.formatMessage(messages.shareAccessCompany)) : null, React.createElement("option", {
    value: ACCESS_NONE
  }, access === ACCESS_NONE ? intl.formatMessage(messages.shareAccessNone) : intl.formatMessage(messages.shareAccessRemove)));
};

export default injectIntl(ShareAccessSelect);
//# sourceMappingURL=ShareAccessSelect.js.map