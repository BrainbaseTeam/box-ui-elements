/**
 * 
 * @file File Keywords SkillCard component
 * @author Box
 */
import * as React from 'react';
import classNames from 'classnames';
import PlainButton from '../../../../components/plain-button/PlainButton';
import IconClose from '../../../../icons/general/IconClose';
import IconMinus from '../../../../icons/general/IconMinus';
import { SKILLS_TARGETS } from '../../../common/interactionTargets';
import { COLOR_999, COLOR_WHITE } from '../../../../constants';
import './Face.scss';

var Face = function Face(_ref) {
  var face = _ref.face,
      selected = _ref.selected,
      isEditing = _ref.isEditing,
      onDelete = _ref.onDelete,
      onSelect = _ref.onSelect;
  var isAnyFaceSelected = !!selected;
  var isCurrentFaceSelected = face === selected;
  var isFaceSelected = isAnyFaceSelected && isCurrentFaceSelected && !isEditing;
  var faceClassName = classNames('be-face-wrapper', {
    'be-face-unselected': !isEditing && isAnyFaceSelected && !isCurrentFaceSelected
  });
  return React.createElement("div", {
    className: faceClassName
  }, React.createElement(PlainButton, {
    className: "be-face",
    "data-resin-target": SKILLS_TARGETS.FACES.FACE,
    onClick: function onClick() {
      return !isEditing && onSelect(face);
    },
    type: "button"
  }, React.createElement("img", {
    alt: face.text,
    src: face.image_url,
    title: face.text
  }), isFaceSelected && React.createElement(IconMinus, {
    color: COLOR_WHITE
  })), isEditing && React.createElement(PlainButton, {
    className: "be-face-delete",
    "data-resin-target": SKILLS_TARGETS.FACES.DELETE,
    onClick: function onClick() {
      return onDelete(face);
    },
    type: "button"
  }, React.createElement(IconClose, {
    color: COLOR_999,
    height: 16,
    width: 16
  })));
};

export default Face;
//# sourceMappingURL=Face.js.map