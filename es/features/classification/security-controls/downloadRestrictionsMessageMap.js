var _externalAllowed, _externalRestricted, _externalAllowed2, _externalRestricted2, _externalAllowed3, _externalRestricted3, _downloadRestrictions;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import messages from './messages';
import { DOWNLOAD_CONTROL, MANAGED_USERS_ACCESS_LEVEL } from '../constants';
var DESKTOP = DOWNLOAD_CONTROL.DESKTOP,
    MOBILE = DOWNLOAD_CONTROL.MOBILE,
    WEB = DOWNLOAD_CONTROL.WEB;
var OWNERS_AND_COOWNERS = MANAGED_USERS_ACCESS_LEVEL.OWNERS_AND_COOWNERS,
    OWNERS_COOWNERS_AND_EDITORS = MANAGED_USERS_ACCESS_LEVEL.OWNERS_COOWNERS_AND_EDITORS;
var downloadRestrictionsMessageMap = (_downloadRestrictions = {}, _defineProperty(_downloadRestrictions, DESKTOP, {
  externalAllowed: (_externalAllowed = {}, _defineProperty(_externalAllowed, OWNERS_AND_COOWNERS, messages.desktopDownloadOwners), _defineProperty(_externalAllowed, OWNERS_COOWNERS_AND_EDITORS, messages.desktopDownloadOwnersEditors), _externalAllowed),
  externalRestricted: (_externalRestricted = {}, _defineProperty(_externalRestricted, OWNERS_AND_COOWNERS, messages.desktopDownloadExternalOwners), _defineProperty(_externalRestricted, OWNERS_COOWNERS_AND_EDITORS, messages.desktopDownloadExternalOwnersEditors), _defineProperty(_externalRestricted, "default", messages.desktopDownloadExternal), _externalRestricted)
}), _defineProperty(_downloadRestrictions, MOBILE, {
  externalAllowed: (_externalAllowed2 = {}, _defineProperty(_externalAllowed2, OWNERS_AND_COOWNERS, messages.mobileDownloadOwners), _defineProperty(_externalAllowed2, OWNERS_COOWNERS_AND_EDITORS, messages.mobileDownloadOwnersEditors), _externalAllowed2),
  externalRestricted: (_externalRestricted2 = {}, _defineProperty(_externalRestricted2, OWNERS_AND_COOWNERS, messages.mobileDownloadExternalOwners), _defineProperty(_externalRestricted2, OWNERS_COOWNERS_AND_EDITORS, messages.mobileDownloadExternalOwnersEditors), _defineProperty(_externalRestricted2, "default", messages.mobileDownloadExternal), _externalRestricted2)
}), _defineProperty(_downloadRestrictions, WEB, {
  externalAllowed: (_externalAllowed3 = {}, _defineProperty(_externalAllowed3, OWNERS_AND_COOWNERS, messages.webDownloadOwners), _defineProperty(_externalAllowed3, OWNERS_COOWNERS_AND_EDITORS, messages.webDownloadOwnersEditors), _externalAllowed3),
  externalRestricted: (_externalRestricted3 = {}, _defineProperty(_externalRestricted3, OWNERS_AND_COOWNERS, messages.webDownloadExternalOwners), _defineProperty(_externalRestricted3, OWNERS_COOWNERS_AND_EDITORS, messages.webDownloadExternalOwnersEditors), _defineProperty(_externalRestricted3, "default", messages.webDownloadExternal), _externalRestricted3)
}), _downloadRestrictions);
export default downloadRestrictionsMessageMap;
//# sourceMappingURL=downloadRestrictionsMessageMap.js.map