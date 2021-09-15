/**
 * 
 * @file Skills card component
 * @author Box
 */
import React from 'react';
import Status from './status';
import Transcript from './transcript';
import Keywords from './keywords';
import Faces from './faces';
import { SKILLS_TRANSCRIPT, SKILLS_KEYWORD, SKILLS_TIMELINE, SKILLS_FACE, SKILLS_STATUS } from '../../../constants';

var SidebarSkillsCard = function SidebarSkillsCard(_ref) {
  var card = _ref.card,
      cards = _ref.cards,
      hasError = _ref.hasError,
      isEditable = _ref.isEditable,
      onSkillChange = _ref.onSkillChange,
      getViewer = _ref.getViewer;

  switch (card.skill_card_type) {
    case SKILLS_KEYWORD:
      return React.createElement(Keywords, {
        card: card,
        getViewer: getViewer,
        hasError: hasError,
        isEditable: isEditable,
        onSkillChange: onSkillChange,
        transcript: isEditable ? cards.find(function (_ref2) {
          var skill_card_type = _ref2.skill_card_type;
          return skill_card_type === SKILLS_TRANSCRIPT;
        }) : undefined
      });

    case SKILLS_TIMELINE:
    case SKILLS_FACE:
      return React.createElement(Faces, {
        card: card,
        getViewer: getViewer,
        hasError: hasError,
        isEditable: isEditable,
        onSkillChange: onSkillChange
      });

    case SKILLS_TRANSCRIPT:
      return React.createElement(Transcript, {
        card: card,
        getViewer: getViewer,
        hasError: hasError,
        isEditable: isEditable,
        onSkillChange: onSkillChange
      });

    case SKILLS_STATUS:
      return React.createElement(Status, {
        card: card
      });

    default:
      return null;
  }
};

export default SidebarSkillsCard;
//# sourceMappingURL=SidebarSkillsCard.js.map