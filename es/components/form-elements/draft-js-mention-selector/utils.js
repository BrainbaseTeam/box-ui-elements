import { EditorState, Modifier } from 'draft-js';
var defaultMentionTriggers = ['@', '＠', '﹫'];
var defaultMentionTriggersString = defaultMentionTriggers.reduce(function (prev, current) {
  return "".concat(prev, "\\").concat(current);
}, '');
var defaultMentionPattern = new RegExp("([".concat(defaultMentionTriggersString, "])([^").concat(defaultMentionTriggersString, "]*)$"));
/**
 * Extracts the active mention from the editor state
 */

function getActiveMentionForEditorState(editorState) {
  var mentionPattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMentionPattern;
  var contentState = editorState.getCurrentContent();
  var selectionState = editorState.getSelection();
  var startKey = selectionState.getStartKey();
  var activeBlock = contentState.getBlockForKey(startKey);
  var cursorPosition = selectionState.getStartOffset();
  var result = null; // Break the active block into entity ranges.

  activeBlock.findEntityRanges(function (character) {
    return character.getEntity() === null;
  }, function (start, end) {
    // Find the active range (is the cursor inside this range?)
    if (start <= cursorPosition && cursorPosition <= end) {
      // Determine if the active range contains a mention.
      var activeRangeText = activeBlock.getText().substr(start, cursorPosition - start);
      var mentionMatch = activeRangeText.match(mentionPattern);

      if (mentionMatch) {
        result = {
          blockID: startKey,
          mentionString: mentionMatch[2],
          mentionTrigger: mentionMatch[1],
          start: start + mentionMatch.index,
          end: cursorPosition
        };
      }
    }

    return null;
  });
  return result;
}
/**
 * Inserts a selected mention into the editor
 */


function addMention(editorState, activeMention, mention) {
  var _ref = activeMention || {},
      start = _ref.start,
      end = _ref.end;

  var id = mention.id,
      name = mention.name;
  var contentState = editorState.getCurrentContent();
  var selectionState = editorState.getSelection();
  var preInsertionSelectionState = selectionState.merge({
    anchorOffset: start,
    focusOffset: end
  });
  var textToInsert = "@".concat(name);
  var contentStateWithEntity = contentState.createEntity('MENTION', 'IMMUTABLE', {
    id: id
  });
  var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  var contentStateWithLink = Modifier.replaceText(contentState, preInsertionSelectionState, textToInsert, null, entityKey);
  var spaceOffset = preInsertionSelectionState.getStartOffset() + textToInsert.length;
  var selectionStateForAddingSpace = preInsertionSelectionState.merge({
    anchorOffset: spaceOffset,
    focusOffset: spaceOffset
  });
  var contentStateWithLinkAndExtraSpace = Modifier.insertText(contentStateWithLink, selectionStateForAddingSpace, ' ');
  var editorStateWithLink = EditorState.push(editorState, contentStateWithLinkAndExtraSpace, 'change-block-type');
  return editorStateWithLink;
}
/**
 * Formats the editor's text such that it will be accepted by the server.
 */


function getFormattedCommentText(editorState) {
  var contentState = editorState.getCurrentContent();
  var blockMap = contentState.getBlockMap();
  var resultStringArr = []; // The API needs to explicitly know if a message contains a mention.

  var hasMention = false; // For all ContentBlocks in the ContentState:

  blockMap.forEach(function (block) {
    var text = block.getText();
    var blockMapStringArr = []; // Break down the ContentBlock into ranges

    block.findEntityRanges(function () {
      return true;
    }, function (start, end) {
      var entityKey = block.getEntityAt(start); // If the range is an Entity, format its text eg "@[1:Username]"
      // Otherwise append its text to the block result as-is

      if (entityKey) {
        var entity = contentState.getEntity(entityKey);
        var stringToAdd = "@[".concat(entity.getData().id, ":").concat(text.substring(start + 1, end), "]");
        blockMapStringArr.push(stringToAdd);
        hasMention = true;
      } else {
        blockMapStringArr.push(text.substring(start, end));
      }
    });
    resultStringArr.push(blockMapStringArr.join(''));
  }); // Concatenate the array of block strings with newlines
  // (Each block represents a paragraph)

  return {
    text: resultStringArr.join('\n'),
    hasMention: hasMention
  };
}

export { addMention, defaultMentionTriggers, defaultMentionPattern, getActiveMentionForEditorState, getFormattedCommentText };
//# sourceMappingURL=utils.js.map