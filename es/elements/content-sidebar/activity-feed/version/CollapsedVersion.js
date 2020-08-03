function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Collapsed Version component
 */
import * as React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import IconInfoInverted from '../../../../icons/general/IconInfoInverted';
import PlainButton from '../../../../components/plain-button';
import messages from '../../../common/messages';
import selectors from '../../../common/selectors/version';
import { ACTIVITY_TARGETS } from '../../../common/interactionTargets';
import './Version.scss';

function getMessageForAction(action, collaborators, version_start, version_end) {
  // We only support collapsing for multiple upload versions
  if (action !== 'upload') {
    return null;
  }

  var collaboratorIDs = Object.keys(collaborators);
  var numberOfCollaborators = collaboratorIDs.length;
  var versionRange = /*#__PURE__*/React.createElement("span", {
    className: "bcs-Version-range"
  }, version_start, " - ", version_end);

  if (numberOfCollaborators === 1) {
    var collaborator = collaborators[collaboratorIDs[0]];
    return /*#__PURE__*/React.createElement(FormattedMessage, _extends({}, messages.versionUploadCollapsed, {
      values: {
        name: /*#__PURE__*/React.createElement("strong", null, collaborator.name),
        versions: versionRange
      }
    }));
  }

  return /*#__PURE__*/React.createElement(FormattedMessage, _extends({}, messages.versionMultipleUsersUploaded, {
    values: {
      numberOfCollaborators: numberOfCollaborators,
      versions: versionRange
    }
  }));
}

var CollapsedVersion = function CollapsedVersion(props) {
  var action = selectors.getVersionAction(props);
  var collaborators = props.collaborators,
      intl = props.intl,
      onInfo = props.onInfo,
      versions = props.versions,
      version_start = props.version_start,
      version_end = props.version_end;
  return /*#__PURE__*/React.createElement("div", {
    className: "bcs-Version"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bcs-Version-message"
  }, getMessageForAction(action, collaborators, version_start, version_end)), onInfo ? /*#__PURE__*/React.createElement("span", {
    className: "bcs-Version-actions"
  }, /*#__PURE__*/React.createElement(PlainButton, {
    "aria-label": intl.formatMessage(messages.getVersionInfo),
    className: "bcs-Version-info",
    "data-resin-target": ACTIVITY_TARGETS.VERSION_CARD,
    onClick: function onClick() {
      onInfo({
        versions: versions
      });
    },
    type: "button"
  }, /*#__PURE__*/React.createElement(IconInfoInverted, {
    height: 16,
    width: 16
  }))) : null);
};

export { CollapsedVersion as CollapsedVersionBase };
export default injectIntl(CollapsedVersion);
//# sourceMappingURL=CollapsedVersion.js.map