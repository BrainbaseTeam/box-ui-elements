function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { ContentState, EditorState, Modifier, SelectionState } from 'draft-js';
import DraftMentionDecorator from './DraftMentionDecorator'; // returns data for first mention in a string

var getMentionFromText = function getMentionFromText(text) {
  // RegEx.exec() is stateful, so we create a new regex instance each time
  var mentionRegex = /([@＠﹫])\[([0-9]+):([^\]]+)]/gi;
  var matchArray = mentionRegex.exec(text);

  if (!matchArray) {
    return null;
  }

  var _matchArray = _slicedToArray(matchArray, 4),
      fullMatch = _matchArray[0],
      triggerSymbol = _matchArray[1],
      id = _matchArray[2],
      name = _matchArray[3];

  var start = matchArray.index;
  var end = start + fullMatch.length;
  var data = {
    id: id,
    name: name,
    content: "".concat(triggerSymbol).concat(name)
  };
  return {
    start: start,
    end: end,
    data: data
  };
}; // creates draftjs state with mentions parsed into entities


var createMentionSelectorState = function createMentionSelectorState() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var contentState = ContentState.createFromText(message);
  var contentBlock = contentState.getFirstBlock();

  while (contentBlock != null) {
    var text = contentBlock.getText();
    var mention = text ? getMentionFromText(text) : null;

    if (mention == null) {
      contentBlock = contentState.getBlockAfter(contentBlock.getKey());
    } else {
      var data = mention.data,
          start = mention.start,
          end = mention.end;
      contentState.createEntity('MENTION', 'IMMUTABLE', data);
      var mentionEntityKey = contentState.getLastCreatedEntityKey();
      var mentionRange = SelectionState.createEmpty(contentBlock.getKey()).merge({
        anchorOffset: start,
        focusOffset: end
      });
      contentState = Modifier.replaceText(contentState, mentionRange, data.content, null, mentionEntityKey);
      contentBlock = contentState.getBlockForKey(contentBlock.getKey());
    }
  }

  return EditorState.createWithContent(contentState, DraftMentionDecorator);
};

export default createMentionSelectorState;
//# sourceMappingURL=createMentionSelectorState.js.map