function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Checkbox from '../../../components/checkbox/Checkbox';
import { RadioButton } from '../../../components/radio';
import { ContentExplorerModePropType } from '../prop-types';
import ContentExplorerModes from '../modes';
import messages from '../messages';

var ItemListButton = function ItemListButton(_ref) {
  var contentExplorerMode = _ref.contentExplorerMode,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? '' : _ref$id,
      _ref$isDisabled = _ref.isDisabled,
      isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
      _ref$isSelected = _ref.isSelected,
      isSelected = _ref$isSelected === void 0 ? false : _ref$isSelected,
      name = _ref.name;

  if (contentExplorerMode === ContentExplorerModes.MULTI_SELECT) {
    return React.createElement(Checkbox, {
      hideLabel: true,
      isChecked: !isDisabled && isSelected,
      isDisabled: isDisabled,
      label: React.createElement(FormattedMessage, _extends({}, messages.selectItem, {
        values: {
          name: name
        }
      })),
      name: "item",
      readOnly: true,
      value: id
    });
  }

  return React.createElement(RadioButton, {
    hideLabel: true,
    isDisabled: isDisabled,
    isSelected: !isDisabled && isSelected,
    label: React.createElement(FormattedMessage, _extends({}, messages.selectItem, {
      values: {
        name: name
      }
    })),
    name: "item",
    value: id
  });
};

ItemListButton.propTypes = {
  contentExplorerMode: ContentExplorerModePropType.isRequired,
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  name: PropTypes.string.isRequired
};
export default ItemListButton;
//# sourceMappingURL=ItemListButton.js.map