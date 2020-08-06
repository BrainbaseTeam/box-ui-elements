function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Versions Sidebar component
 * @author Box
 */
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import InlineError from '../../../components/inline-error';
import messages from './messages';
import SidebarContent from '../SidebarContent';
import VersionsMenu from './VersionsMenu';
import { BackButton } from '../../common/nav-button';
import { DEFAULT_FETCH_END } from '../../../constants';
import { LoadingIndicatorWrapper } from '../../../components/loading-indicator';
import './VersionsSidebar.scss';
var MAX_VERSIONS = DEFAULT_FETCH_END;

var VersionsSidebar = function VersionsSidebar(_ref) {
  var error = _ref.error,
      isLoading = _ref.isLoading,
      parentName = _ref.parentName,
      versions = _ref.versions,
      rest = _objectWithoutProperties(_ref, ["error", "isLoading", "parentName", "versions"]);

  var showLimit = versions.length >= MAX_VERSIONS;
  var showVersions = !!versions.length;
  var showEmpty = !isLoading && !showVersions;
  var showError = !!error;
  return /*#__PURE__*/React.createElement(SidebarContent, {
    className: "bcs-Versions",
    "data-resin-component": "preview",
    "data-resin-feature": "versions",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BackButton, {
      "data-resin-target": "back",
      to: "/".concat(parentName)
    }), /*#__PURE__*/React.createElement(FormattedMessage, messages.versionsTitle))
  }, /*#__PURE__*/React.createElement(LoadingIndicatorWrapper, {
    className: "bcs-Versions-content",
    crawlerPosition: "top",
    isLoading: isLoading
  }, showError && /*#__PURE__*/React.createElement(InlineError, {
    title: /*#__PURE__*/React.createElement(FormattedMessage, messages.versionServerError)
  }, /*#__PURE__*/React.createElement(FormattedMessage, error)), showEmpty && /*#__PURE__*/React.createElement("div", {
    className: "bcs-Versions-empty"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.versionsEmpty)), showVersions && /*#__PURE__*/React.createElement("div", {
    className: "bcs-Versions-menu"
  }, /*#__PURE__*/React.createElement(VersionsMenu, _extends({
    versions: versions
  }, rest))), showLimit && /*#__PURE__*/React.createElement("div", {
    className: "bcs-Versions-maxEntries"
  }, /*#__PURE__*/React.createElement(FormattedMessage, _extends({}, messages.versionMaxEntries, {
    values: {
      maxVersions: MAX_VERSIONS
    }
  })))));
};

export default VersionsSidebar;
//# sourceMappingURL=VersionsSidebar.js.map