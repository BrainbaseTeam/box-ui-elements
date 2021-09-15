function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Versions Menu component
 * @author Box
 */
import React from 'react';
import last from 'lodash/last';
import { injectIntl } from 'react-intl';
import * as util from '../../../utils/datetime';
import messages from './messages';
import VersionsGroup from './VersionsGroup';
import './VersionsMenu.scss';

var getHeading = function getHeading(_ref) {
  var intl = _ref.intl,
      version = _ref.version;
  var createdAt = version.created_at;
  var currentDate = new Date();
  var currentDay = currentDate.getDay();
  var currentSunday = currentDate.getDate() - currentDay;
  var createdAtDate = util.convertToDate(createdAt);
  var heading;

  if (util.isToday(createdAtDate)) {
    heading = intl.formatMessage(messages.versionsToday); // Today
  } else if (util.isYesterday(createdAtDate)) {
    heading = intl.formatMessage(messages.versionsYesterday); // Yesterday
  } else if (!util.isCurrentYear(createdAtDate)) {
    heading = intl.formatDate(createdAt, {
      year: 'numeric'
    }); // 2018
  } else if (!util.isCurrentMonth(createdAtDate)) {
    heading = intl.formatDate(createdAt, {
      month: 'long'
    }); // January
  } else if (createdAtDate.getDate() <= currentSunday - 7) {
    heading = intl.formatMessage(messages.versionsThisMonth); // This Month
  } else if (createdAtDate.getDate() <= currentSunday) {
    heading = intl.formatMessage(messages.versionsPriorWeek); // Last Week
  } else {
    heading = intl.formatDate(createdAt, {
      weekday: 'long'
    }); // Monday
  }

  return heading;
};

var VersionsMenu = React.memo(function (_ref2) {
  var intl = _ref2.intl,
      versions = _ref2.versions,
      rest = _objectWithoutProperties(_ref2, ["intl", "versions"]);

  var _ref3 = versions[0] || {},
      currentId = _ref3.id; // Build an ordered set of groups with headings based on the original order of the versions array


  var versionGroups = versions.reduce(function (groups, version) {
    var currentGroup = last(groups);
    var groupHeading = getHeading({
      intl: intl,
      version: version
    }); // Push a new group if there are no groups or if the heading has changed

    if (!currentGroup || currentGroup.groupHeading !== groupHeading) {
      groups.push({
        groupHeading: groupHeading,
        groupVersions: []
      });
    } // Push the sorted version to the newest group's versions collection


    last(groups).groupVersions.push(version);
    return groups;
  }, []);
  return React.createElement("ul", {
    className: "bcs-VersionsMenu"
  }, versionGroups.map(function (_ref4) {
    var groupHeading = _ref4.groupHeading,
        groupVersions = _ref4.groupVersions;
    return React.createElement("li", {
      className: "bcs-VersionsMenu-item",
      key: groupHeading
    }, React.createElement(VersionsGroup, _extends({
      currentId: currentId,
      heading: groupHeading,
      versions: groupVersions
    }, rest)));
  }));
});
export default injectIntl(VersionsMenu);
//# sourceMappingURL=VersionsMenu.js.map