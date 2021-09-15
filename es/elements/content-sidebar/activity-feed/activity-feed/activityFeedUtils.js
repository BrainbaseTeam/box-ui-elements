function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Activity feed utility methods
 */
import selectors from '../../../common/selectors/version';
import { PLACEHOLDER_USER, VERSION_UPLOAD_ACTION } from '../../../../constants';
export var ItemTypes = {
  fileVersion: 'file_version'
};
export function collapseFeedState(feedState) {
  if (!feedState) {
    return [];
  }

  return feedState.reduce(function (collapsedFeedState, feedItem) {
    var previousFeedItem = collapsedFeedState.pop();

    if (!previousFeedItem) {
      return collapsedFeedState.concat([feedItem]);
    }

    if (feedItem.type === ItemTypes.fileVersion && previousFeedItem.type === ItemTypes.fileVersion && selectors.getVersionAction(feedItem) === VERSION_UPLOAD_ACTION && selectors.getVersionAction(previousFeedItem) === VERSION_UPLOAD_ACTION) {
      var tmpModifiedBy = previousFeedItem.modified_by,
          _previousFeedItem$ver = previousFeedItem.versions,
          versions = _previousFeedItem$ver === void 0 ? [previousFeedItem] : _previousFeedItem$ver,
          _previousFeedItem$ver2 = previousFeedItem.version_start,
          version_start = _previousFeedItem$ver2 === void 0 ? parseInt(previousFeedItem.version_number, 10) : _previousFeedItem$ver2,
          _previousFeedItem$ver3 = previousFeedItem.version_end,
          version_end = _previousFeedItem$ver3 === void 0 ? parseInt(previousFeedItem.version_number, 10) : _previousFeedItem$ver3;
      var prevModifiedBy = tmpModifiedBy || PLACEHOLDER_USER;
      var tmpCurModifiedBy = feedItem.modified_by,
          created_at = feedItem.created_at,
          trashed_at = feedItem.trashed_at,
          id = feedItem.id,
          version_number = feedItem.version_number;
      var parsedVersionNumber = parseInt(version_number, 10);

      var collaborators = previousFeedItem.collaborators || _defineProperty({}, prevModifiedBy.id, _objectSpread({}, prevModifiedBy));

      var modifiedBy = tmpCurModifiedBy || PLACEHOLDER_USER; // add collaborators
      // $FlowFixMe

      collaborators[modifiedBy.id] = _objectSpread({}, modifiedBy);
      return collapsedFeedState.concat([{
        collaborators: collaborators,
        created_at: created_at,
        modified_by: modifiedBy,
        trashed_at: trashed_at,
        id: id,
        type: ItemTypes.fileVersion,
        version_number: version_number,
        versions: versions.concat([feedItem]),
        version_start: Math.min(version_start, parsedVersionNumber),
        version_end: Math.max(version_end, parsedVersionNumber)
      }]);
    }

    return collapsedFeedState.concat([previousFeedItem, feedItem]);
  }, []);
}
//# sourceMappingURL=activityFeedUtils.js.map