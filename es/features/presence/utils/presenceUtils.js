import messages from '../messages';
var MS_IN_A_MINUTE = 60000; // number of milliseconds in one minute

var MS_IN_A_DAY = 86400000; // number of milliseconds in one day

var INTERACTION_TYPE_MODIFY = 'user.item_modify';
var INTERACTION_TYPE_UPLOAD = 'user.item_upload';
var INTERACTION_TYPE_PREVIEW = 'user.item_preview';
var INTERACTION_TYPE_OPEN = 'user.item_open';
var INTERACTION_TYPE_COMMENT = 'user.comment_create';

function getLastActionTimeMS(lastAccessTimeMS, lastModifiedTimeMS) {
  var sessionLengthMS = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : MS_IN_A_DAY;

  if (!lastModifiedTimeMS) {
    return lastAccessTimeMS;
  }

  return lastAccessTimeMS - lastModifiedTimeMS < sessionLengthMS ? lastModifiedTimeMS : lastAccessTimeMS;
}

function sortByActivity(a, b) {
  if (a.isActive && b.isActive) {
    // if both users are active,  do not modify sort order
    return 0;
  }

  if (a.isActive && !b.isActive) {
    // if a is active and b is inactive, a comes first
    return -1;
  }

  if (!a.isActive && b.isActive) {
    // vice versa as above
    return 1;
  } // otherwise, neither collaborator is active and we sort on the last "action" time


  return 0;
}

function determineInteractionMessage(interactionType, interactedAt) {
  var message;
  var lessThanAMinuteAgo = Date.now() - interactedAt < MS_IN_A_MINUTE;

  switch (interactionType) {
    // For Box Notes only
    case INTERACTION_TYPE_MODIFY:
    case INTERACTION_TYPE_UPLOAD:
      message = lessThanAMinuteAgo ? messages.modifiedIntheLastMinuteText : messages.timeSinceLastModifiedText;
      break;

    case INTERACTION_TYPE_PREVIEW:
      message = lessThanAMinuteAgo ? messages.previewedIntheLastMinuteText : messages.timeSinceLastPreviewedText;
      break;
    // For Box Notes only

    case INTERACTION_TYPE_OPEN:
      message = lessThanAMinuteAgo ? messages.accessedInTheLastMinuteText : messages.timeSinceLastAccessedText;
      break;

    case INTERACTION_TYPE_COMMENT:
      message = lessThanAMinuteAgo ? messages.commentedIntheLastMinuteText : messages.timeSinceLastCommentedText;
      break;

    default:
      message = null;
      break;
  }

  return message;
}

export { sortByActivity, getLastActionTimeMS, determineInteractionMessage };
//# sourceMappingURL=presenceUtils.js.map