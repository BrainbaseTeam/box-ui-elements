import { CompositeDecorator } from 'draft-js';
import DraftMentionItem from './DraftMentionItem';

var mentionStrategy = function mentionStrategy(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    var ret = entityKey !== null && contentState.getEntity(entityKey).getType() === 'MENTION';
    return ret;
  }, callback);
};

var DraftMentionDecorator = new CompositeDecorator([{
  strategy: mentionStrategy,
  component: DraftMentionItem
}]);
export default DraftMentionDecorator;
//# sourceMappingURL=DraftMentionDecorator.js.map