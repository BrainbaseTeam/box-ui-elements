function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import PlainButton from '../../components/plain-button';
import messages from './messages';

var VersionHistoryLink = function VersionHistoryLink(_ref) {
  var className = _ref.className,
      versionCount = _ref.versionCount,
      onClick = _ref.onClick,
      rest = _objectWithoutProperties(_ref, ["className", "versionCount", "onClick"]);

  var formattedMessageComponent = React.createElement(FormattedMessage, _extends({}, messages.savedVersions, {
    values: {
      versionCount: versionCount
    }
  })); // Only render it as a link if there is an onClick

  if (onClick) {
    return React.createElement(PlainButton, _extends({
      className: classNames('lnk', className),
      onClick: onClick
    }, rest), formattedMessageComponent);
  }

  return React.createElement("div", {
    className: className
  }, formattedMessageComponent);
};

VersionHistoryLink.defaultProps = {
  className: ''
};
export default VersionHistoryLink;
//# sourceMappingURL=VersionHistoryLink.js.map