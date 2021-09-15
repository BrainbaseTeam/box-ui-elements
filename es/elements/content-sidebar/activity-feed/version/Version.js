var _ACTION_MAP;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Version component
 */
import * as React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import ActivityCard from '../ActivityCard';
import IconInfo from '../../../../icons/general/IconInfo';
import messages from '../../../common/messages';
import PlainButton from '../../../../components/plain-button';
import selectors from '../../../common/selectors/version';
import { ACTIVITY_TARGETS } from '../../../common/interactionTargets';
import { FILE_REQUEST_NAME, VERSION_UPLOAD_ACTION, VERSION_DELETE_ACTION, VERSION_PROMOTE_ACTION, VERSION_RESTORE_ACTION } from '../../../../constants';
import './Version.scss';
var ACTION_MAP = (_ACTION_MAP = {}, _defineProperty(_ACTION_MAP, VERSION_DELETE_ACTION, messages.versionDeleted), _defineProperty(_ACTION_MAP, VERSION_PROMOTE_ACTION, messages.versionPromoted), _defineProperty(_ACTION_MAP, VERSION_RESTORE_ACTION, messages.versionRestored), _defineProperty(_ACTION_MAP, VERSION_UPLOAD_ACTION, messages.versionUploaded), _ACTION_MAP);

var Version = function Version(props) {
  // $FlowFixMe
  var action = selectors.getVersionAction(props);
  var id = props.id,
      intl = props.intl,
      onInfo = props.onInfo,
      version_number = props.version_number,
      version_promoted = props.version_promoted; // $FlowFixMe

  var user = selectors.getVersionUser(props);
  var name = user.name === FILE_REQUEST_NAME ? intl.formatMessage(messages.fileRequestDisplayName) : user.name;
  return React.createElement(ActivityCard, {
    className: "bcs-Version"
  }, React.createElement("span", {
    className: "bcs-Version-message"
  }, React.createElement(FormattedMessage, _extends({}, ACTION_MAP[action], {
    values: {
      name: React.createElement("strong", null, name),
      version_number: version_number,
      version_promoted: version_promoted
    }
  }))), onInfo ? React.createElement("span", {
    className: "bcs-Version-actions"
  }, React.createElement(PlainButton, {
    "aria-label": intl.formatMessage(messages.getVersionInfo),
    className: "bcs-Version-info",
    "data-resin-target": ACTIVITY_TARGETS.VERSION_CARD,
    onClick: function onClick() {
      onInfo({
        id: id,
        version_number: version_number
      });
    },
    type: "button"
  }, React.createElement(IconInfo, {
    height: 16,
    width: 16
  }))) : null);
};

export { Version as VersionBase };
export default injectIntl(Version);
//# sourceMappingURL=Version.js.map