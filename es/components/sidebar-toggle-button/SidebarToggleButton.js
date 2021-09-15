function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import classNames from 'classnames';
import { injectIntl } from 'react-intl';
import IconHide from '../../icons/general/IconHide';
import IconShow from '../../icons/general/IconShow';
import PlainButton from '../plain-button';
import Tooltip from '../tooltip';
import messages from '../../elements/common/messages';
import './SidebarToggleButton.scss';
var DIRECTION_LEFT = 'left';
var DIRECTION_RIGHT = 'right';

var SidebarToggleButton = function SidebarToggleButton(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? DIRECTION_RIGHT : _ref$direction,
      intl = _ref.intl,
      isOpen = _ref.isOpen,
      onClick = _ref.onClick,
      rest = _objectWithoutProperties(_ref, ["className", "direction", "intl", "isOpen", "onClick"]);

  var isCollapsed = !isOpen ? 'collapsed' : '';
  var intlMessage = isOpen ? messages.sidebarHide : messages.sidebarShow;
  var intlText = intl.formatMessage(intlMessage);
  var classes = classNames(className, 'bdl-SidebarToggleButton', {
    'bdl-is-collapsed': isCollapsed
  });
  var tooltipPosition = direction === DIRECTION_LEFT ? 'middle-right' : 'middle-left';

  var renderButton = function renderButton() {
    if (direction === DIRECTION_LEFT) {
      return isOpen ? React.createElement(IconShow, {
        height: 16,
        width: 16
      }) : React.createElement(IconHide, {
        height: 16,
        width: 16
      });
    }

    return isOpen ? React.createElement(IconHide, {
      height: 16,
      width: 16
    }) : React.createElement(IconShow, {
      height: 16,
      width: 16
    });
  };

  return React.createElement(Tooltip, {
    position: tooltipPosition,
    text: intlText
  }, React.createElement(PlainButton, _extends({
    "aria-label": intlText,
    className: classes,
    onClick: onClick,
    type: "button"
  }, rest), renderButton()));
};

export default injectIntl(SidebarToggleButton);
//# sourceMappingURL=SidebarToggleButton.js.map