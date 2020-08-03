var _ACTION_MAP;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Version component
 */
import * as React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import IconInfoInverted from '../../../../icons/general/IconInfoInverted';
import messages from '../../../common/messages';
import PlainButton from '../../../../components/plain-button';
import selectors from '../../../common/selectors/version';
import { ACTIVITY_TARGETS } from '../../../common/interactionTargets';
import { VERSION_UPLOAD_ACTION, VERSION_DELETE_ACTION, VERSION_PROMOTE_ACTION, VERSION_RESTORE_ACTION } from '../../../../constants';
import './Version.scss';
var ACTION_MAP = (_ACTION_MAP = {}, _defineProperty(_ACTION_MAP, VERSION_DELETE_ACTION, messages.versionDeleted), _defineProperty(_ACTION_MAP, VERSION_PROMOTE_ACTION, messages.versionPromoted), _defineProperty(_ACTION_MAP, VERSION_RESTORE_ACTION, messages.versionRestored), _defineProperty(_ACTION_MAP, VERSION_UPLOAD_ACTION, messages.versionUploaded), _ACTION_MAP);

var Version = function Version(props) {
  var action = selectors.getVersionAction(props);
  var id = props.id,
      intl = props.intl,
      onInfo = props.onInfo,
      version_number = props.version_number,
      version_promoted = props.version_promoted;

  var _selectors$getVersion = selectors.getVersionUser(props),
      name = _selectors$getVersion.name;

  return /*#__PURE__*/React.createElement("div", {
    className: "bcs-Version"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bcs-Version-message"
  }, /*#__PURE__*/React.createElement(FormattedMessage, _extends({}, ACTION_MAP[action], {
    values: {
      name: /*#__PURE__*/React.createElement("strong", null, name),
      version_number: version_number,
      version_promoted: version_promoted
    }
  }))), onInfo ? /*#__PURE__*/React.createElement("span", {
    className: "bcs-Version-actions"
  }, /*#__PURE__*/React.createElement(PlainButton, {
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
  }, /*#__PURE__*/React.createElement(IconInfoInverted, {
    height: 16,
    width: 16
  }))) : null);
};

export { Version as VersionBase };
export default injectIntl(Version);
//# sourceMappingURL=Version.js.map