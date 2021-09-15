var _BLACKLIST, _WHITELIST, _appRestrictionsMessa;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import messages from './messages';
import { APP_RESTRICTION_MESSAGE_TYPE, LIST_ACCESS_LEVEL } from '../constants';
var BLACKLIST = LIST_ACCESS_LEVEL.BLACKLIST,
    WHITELIST = LIST_ACCESS_LEVEL.WHITELIST;
var DEFAULT = APP_RESTRICTION_MESSAGE_TYPE.DEFAULT,
    WITH_APP_LIST = APP_RESTRICTION_MESSAGE_TYPE.WITH_APP_LIST,
    WITH_OVERFLOWN_APP_LIST = APP_RESTRICTION_MESSAGE_TYPE.WITH_OVERFLOWN_APP_LIST;
var appRestrictionsMessageMap = (_appRestrictionsMessa = {}, _defineProperty(_appRestrictionsMessa, BLACKLIST, (_BLACKLIST = {}, _defineProperty(_BLACKLIST, DEFAULT, messages.appDownloadRestricted), _defineProperty(_BLACKLIST, WITH_APP_LIST, messages.appDownloadBlacklist), _defineProperty(_BLACKLIST, WITH_OVERFLOWN_APP_LIST, messages.appDownloadBlacklistOverflow), _BLACKLIST)), _defineProperty(_appRestrictionsMessa, WHITELIST, (_WHITELIST = {}, _defineProperty(_WHITELIST, DEFAULT, messages.appDownloadRestricted), _defineProperty(_WHITELIST, WITH_APP_LIST, messages.appDownloadWhitelist), _defineProperty(_WHITELIST, WITH_OVERFLOWN_APP_LIST, messages.appDownloadWhitelistOverflow), _WHITELIST)), _appRestrictionsMessa);
export default appRestrictionsMessageMap;
//# sourceMappingURL=appRestrictionsMessageMap.js.map