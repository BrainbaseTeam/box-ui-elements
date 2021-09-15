import * as React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import DropdownMenu from '../../../../components/dropdown-menu';
import IconEllipsis from '../../../../icons/general/IconEllipsis';
import messages from './messages';
import Pencil16 from '../../../../icon/line/Pencil16';
import PlainButton from '../../../../components/plain-button';
import Trash16 from '../../../../icon/fill/Trash16';
import { ACTIVITY_TARGETS } from '../../../common/interactionTargets';
import { bdlGray50 } from '../../../../styles/variables';
import { Menu, MenuItem } from '../../../../components/menu';

var AnnotationActivityMenu = function AnnotationActivityMenu(_ref) {
  var canDelete = _ref.canDelete,
      canEdit = _ref.canEdit,
      className = _ref.className,
      id = _ref.id,
      isDisabled = _ref.isDisabled,
      onDelete = _ref.onDelete,
      onEdit = _ref.onEdit,
      onMenuClose = _ref.onMenuClose,
      onMenuOpen = _ref.onMenuOpen;
  var menuProps = {
    'data-resin-component': 'preview',
    'data-resin-feature': 'annotations'
  };
  return React.createElement(DropdownMenu, {
    constrainToScrollParent: true,
    isRightAligned: true,
    onMenuClose: onMenuClose,
    onMenuOpen: onMenuOpen
  }, React.createElement(PlainButton, {
    className: classNames('bcs-AnnotationActivityMenu', className),
    isDisabled: isDisabled,
    "data-testid": "annotation-activity-actions-menu",
    type: "button"
  }, React.createElement(IconEllipsis, {
    color: bdlGray50,
    height: 16,
    width: 16
  })), React.createElement(Menu, menuProps, canEdit && React.createElement(MenuItem, {
    "data-resin-itemid": id,
    "data-resin-target": ACTIVITY_TARGETS.ANNOTATION_OPTIONS_EDIT,
    "data-testid": "edit-annotation-activity",
    onClick: onEdit
  }, React.createElement(Pencil16, null), React.createElement(FormattedMessage, messages.annotationActivityEditMenuItem)), canDelete && React.createElement(MenuItem, {
    "data-resin-itemid": id,
    "data-resin-target": ACTIVITY_TARGETS.ANNOTATION_OPTIONS_DELETE,
    "data-testid": "delete-annotation-activity",
    onClick: onDelete
  }, React.createElement(Trash16, null), React.createElement(FormattedMessage, messages.annotationActivityDeleteMenuItem))));
};

export default AnnotationActivityMenu;
//# sourceMappingURL=AnnotationActivityMenu.js.map