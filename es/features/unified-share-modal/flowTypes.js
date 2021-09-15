var _accessLevelValues, _permissionLevelValue, _collaboratorGroupVal;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import * as constants from './constants';
// DRY: Invert the constants so that we can construct the appropriate enum types
var accessLevelValues = (_accessLevelValues = {}, _defineProperty(_accessLevelValues, constants.ANYONE_WITH_LINK, 'ANYONE_WITH_LINK'), _defineProperty(_accessLevelValues, constants.ANYONE_IN_COMPANY, 'ANYONE_IN_COMPANY'), _defineProperty(_accessLevelValues, constants.PEOPLE_IN_ITEM, 'PEOPLE_IN_ITEM'), _accessLevelValues);
var permissionLevelValues = (_permissionLevelValue = {}, _defineProperty(_permissionLevelValue, constants.CAN_EDIT, 'CAN_EDIT'), _defineProperty(_permissionLevelValue, constants.CAN_VIEW_DOWNLOAD, 'CAN_VIEW_DOWNLOAD'), _defineProperty(_permissionLevelValue, constants.CAN_VIEW_ONLY, 'CAN_VIEW_ONLY'), _permissionLevelValue);
var collaboratorGroupValues = (_collaboratorGroupVal = {}, _defineProperty(_collaboratorGroupVal, constants.COLLAB_GROUP_TYPE, 'COLLAB_GROUP_TYPE'), _defineProperty(_collaboratorGroupVal, constants.COLLAB_USER_TYPE, 'COLLAB_USER_TYPE'), _defineProperty(_collaboratorGroupVal, constants.COLLAB_PENDING_TYPE, 'COLLAB_PENDING_TYPE'), _collaboratorGroupVal);
//# sourceMappingURL=flowTypes.js.map