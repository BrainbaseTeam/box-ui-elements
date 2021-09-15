function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import { FIELD_FILE_VERSION, FIELD_SHA1, FIELD_SHARED_LINK, FIELD_WATERMARK_INFO } from '../../constants';
import { FOLDER_FIELDS_TO_FETCH } from '../../utils/fields'; // Fields needed for Content Explorer folder requests

var CONTENT_EXPLORER_FOLDER_FIELDS_TO_FETCH = [].concat(_toConsumableArray(FOLDER_FIELDS_TO_FETCH), [FIELD_FILE_VERSION, FIELD_SHA1, FIELD_SHARED_LINK, FIELD_WATERMARK_INFO]);
export default CONTENT_EXPLORER_FOLDER_FIELDS_TO_FETCH;
//# sourceMappingURL=constants.js.map