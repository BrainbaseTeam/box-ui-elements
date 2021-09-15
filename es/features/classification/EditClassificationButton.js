function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Classification add/edit button
 * @author Box
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import PlainButton from '../../components/plain-button/PlainButton';

var EditClassificationButton = function EditClassificationButton(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      isEditing = _ref.isEditing,
      onEdit = _ref.onEdit,
      rest = _objectWithoutProperties(_ref, ["className", "isEditing", "onEdit"]);

  var message = isEditing ? messages.edit : messages.add;
  var interaction = isEditing ? 'editclassification' : 'addclassification';
  return React.createElement(PlainButton, _extends({
    className: "bdl-EditClassificationButton ".concat(className),
    "data-resin-target": interaction,
    onClick: onEdit,
    type: "button"
  }, rest), React.createElement(FormattedMessage, message));
};

export default EditClassificationButton;
//# sourceMappingURL=EditClassificationButton.js.map