function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * 
 * @file Util for formatting tagged messages
 */
import * as React from 'react';
import { Link } from '../../../../components/link';
import { ACTIVITY_TARGETS } from '../../../common/interactionTargets';
import UserLink from '../common/user-link'; // this regex matches one of the following regular expressions:
// mentions: ([@＠﹫]\[[0-9]+:[^\]]+])
// urls: (?:\b)((?:(?:ht|f)tps?:\/\/)[\w\._\-]+(:\d+)?(\/[\w\-_\.~\+\/#\?&%=:\[\]@!$'\(\)\*;,]*)?)
// NOTE: There are useless escapes in the regex below, should probably remove them when safe
// eslint-disable-next-line

var splitRegex = /((?:[@＠﹫]\[[0-9]+:[^\]]+])|(?:\b(?:(?:ht|f)tps?:\/\/)[\w\._\-]+(?::\d+)?(?:\/[\w\-_\.~\+\/#\?&%=:\[\]@!$'\(\)\*;,]*)?))/gim;
/**
 * Formats a message a string and replaces the following:
 * - all occurrence of mention patterns with a UserLink component
 * - all occurrence of urls with a Link component
 * Ex mention format: @[123:Hello World]
 * @param {String} tagged_message The message string to format
 * @param {String} itemID The id of the tagged message
 * @param {Boolean} shouldReturnString The boolean value whether it should return string
 * @param {Function} [getUserProfileUrl] The method to generate a user profile url
 * @returns {String|React.Node}
 */

var formatTaggedMessage = function formatTaggedMessage(tagged_message, itemID, shouldReturnString, getUserProfileUrl) {
  var contentItems = tagged_message.split(splitRegex).map(function (text, contentIndex) {
    var contentKey = "".concat(contentIndex, "-").concat(itemID); // attempt mention match

    var mentionMatch = text.match(/([@＠﹫])\[([0-9]+):([^\]]+)]/i);

    if (mentionMatch) {
      var _mentionMatch = _slicedToArray(mentionMatch, 4),
          trigger = _mentionMatch[1],
          id = _mentionMatch[2],
          name = _mentionMatch[3];

      if (shouldReturnString) {
        return "".concat(trigger).concat(name);
      }

      return /*#__PURE__*/React.createElement(UserLink, {
        key: contentKey,
        className: "bcs-comment-mention",
        "data-resin-target": ACTIVITY_TARGETS.MENTION,
        getUserProfileUrl: getUserProfileUrl,
        id: id,
        name: "".concat(trigger).concat(name)
      });
    }

    if (!shouldReturnString) {
      // attempt url match
      // NOTE: There are useless escapes in the regex below, should probably remove them when safe
      var urlMatch = text.match( // eslint-disable-next-line no-useless-escape
      /((?:(?:ht|f)tps?:\/\/)[\w\._\-]+(?::\d+)?(?:\/[\w\-_\.~\+\/#\?&%=:\[\]@!$'\(\)\*;,]*)?)/i);

      if (urlMatch) {
        var _urlMatch = _slicedToArray(urlMatch, 2),
            url = _urlMatch[1];

        return /*#__PURE__*/React.createElement(Link, {
          key: contentKey,
          href: url
        }, url);
      }
    }

    return text;
  });
  return shouldReturnString ? contentItems.join('') : contentItems;
};

export default formatTaggedMessage;
//# sourceMappingURL=formatTaggedMessage.js.map