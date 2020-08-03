function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * 
 * @file Open With button
 * @author Box
 */
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import noop from 'lodash/noop';
import Button from '../../components/button/Button';
import IconOpenWith from '../../icons/general/IconOpenWith';
import Tooltip from '../common/Tooltip';
import messages from '../common/messages';
import OpenWithButtonContents from './OpenWithButtonContents';
import utils from './openWithUtils';
import { CLASS_INTEGRATION_ICON, OPEN_WITH_BUTTON_ICON_SIZE } from '../../constants';
import getIcon from './IconFileMap';

/**
 * Gets the tooltip text for the ContentOpenWith button
 *
 * @private
 * @return {?(string | Element)} the tooltip message
 */
export var getTooltip = function getTooltip(displayDescription, isLoading, error) {
  var disabledReasons = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  if (isLoading) {
    return null;
  }

  var message = /*#__PURE__*/React.createElement(FormattedMessage, messages.emptyOpenWithDescription);

  if (disabledReasons.length > 0) {
    var _disabledReasons = _slicedToArray(disabledReasons, 1);

    message = _disabledReasons[0];
  } else if (error) {
    message = /*#__PURE__*/React.createElement(FormattedMessage, messages.errorOpenWithDescription);
  } else if (displayDescription) {
    message = displayDescription;
  }

  return message;
};

var OpenWithButton = function OpenWithButton(_ref) {
  var error = _ref.error,
      _ref$onClick = _ref.onClick,
      _onClick = _ref$onClick === void 0 ? noop : _ref$onClick,
      displayIntegration = _ref.displayIntegration,
      isLoading = _ref.isLoading;

  var _ref2 = displayIntegration || {},
      displayName = _ref2.displayName,
      isDisplayIntegrationDisabled = _ref2.isDisabled,
      extension = _ref2.extension,
      disabledReasons = _ref2.disabledReasons,
      displayDescription = _ref2.displayDescription;

  var isDisabled = !!isDisplayIntegrationDisabled || !displayName;
  var Icon = displayName ? getIcon(displayName) : IconOpenWith;
  var tooltipDisplayProps = utils.isDisabledBecauseBoxToolsIsNotInstalled(displayIntegration) ? {
    isShown: true,
    showCloseButton: true
  } : {};
  return /*#__PURE__*/React.createElement(Tooltip, _extends({
    className: "bcow-tooltip",
    position: "bottom-center",
    text: getTooltip(displayDescription, isLoading, error, disabledReasons)
  }, tooltipDisplayProps), /*#__PURE__*/React.createElement(Button, {
    isDisabled: isDisabled,
    onClick: function onClick() {
      return displayIntegration ? _onClick(displayIntegration) : noop;
    }
  }, /*#__PURE__*/React.createElement(OpenWithButtonContents, null, /*#__PURE__*/React.createElement(Icon, {
    className: CLASS_INTEGRATION_ICON,
    dimension: OPEN_WITH_BUTTON_ICON_SIZE,
    extension: extension,
    height: OPEN_WITH_BUTTON_ICON_SIZE,
    width: OPEN_WITH_BUTTON_ICON_SIZE
  }))));
};

export default OpenWithButton;
//# sourceMappingURL=OpenWithButton.js.map