function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Open With button when multiple integrations are present
 * @author Box
 */
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import MenuToggle from '../../components/dropdown-menu/MenuToggle';
import IconOpenWith from '../../icons/general/IconOpenWith';
import Button from '../../components/button/Button';
import Tooltip from '../common/Tooltip';
import messages from '../common/messages';
import OpenWithButtonContents from './OpenWithButtonContents';
import { CLASS_INTEGRATION_ICON, OPEN_WITH_BUTTON_ICON_SIZE } from '../../constants';

var MultipleIntegrationsOpenWithButton = function MultipleIntegrationsOpenWithButton(buttonProps) {
  return React.createElement(Tooltip, {
    position: "middle-left",
    text: React.createElement(FormattedMessage, messages.defaultOpenWithDescription)
  }, React.createElement(Button, _extends({
    "data-testid": "multipleintegrationsbutton"
  }, buttonProps), React.createElement(MenuToggle, null, React.createElement(OpenWithButtonContents, null, React.createElement(IconOpenWith, {
    className: CLASS_INTEGRATION_ICON,
    dimension: OPEN_WITH_BUTTON_ICON_SIZE,
    height: OPEN_WITH_BUTTON_ICON_SIZE,
    width: OPEN_WITH_BUTTON_ICON_SIZE
  })))));
};

export default MultipleIntegrationsOpenWithButton;
//# sourceMappingURL=MultipleIntegrationsOpenWithButton.js.map