function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

      return React.createElement(UserLink, {
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

        return React.createElement(Link, {
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