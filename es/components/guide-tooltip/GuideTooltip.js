function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import Tooltip, { TooltipTheme } from '../tooltip';
import Button from '../button'; // @ts-ignore flow import

import messages from './messages';
import './GuideTooltip.scss';

function GuideTooltip(_ref) {
  var body = _ref.body,
      children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      icon = _ref.icon,
      _ref$isShown = _ref.isShown,
      isShown = _ref$isShown === void 0 ? true : _ref$isShown,
      primaryButtonProps = _ref.primaryButtonProps,
      steps = _ref.steps,
      secondaryButtonProps = _ref.secondaryButtonProps,
      _ref$showCloseButton = _ref.showCloseButton,
      showCloseButton = _ref$showCloseButton === void 0 ? true : _ref$showCloseButton,
      title = _ref.title,
      rest = _objectWithoutProperties(_ref, ["body", "children", "className", "icon", "isShown", "primaryButtonProps", "steps", "secondaryButtonProps", "showCloseButton", "title"]);

  return React.createElement(Tooltip, _extends({}, rest, {
    className: "bdl-GuideTooltip ".concat(className),
    isShown: isShown,
    showCloseButton: showCloseButton,
    text: React.createElement(React.Fragment, null, icon && React.createElement("div", {
      className: "bdl-GuideTooltip-icon"
    }, icon), React.createElement("div", {
      className: "bdl-GuideTooltip-right"
    }, title && React.createElement("div", {
      className: "bdl-GuideTooltip-title"
    }, title), React.createElement("div", {
      className: "bdl-GuideTooltip-body"
    }, body), (secondaryButtonProps || primaryButtonProps || steps) && React.createElement("div", {
      className: "bdl-GuideTooltip-bottom"
    }, (secondaryButtonProps || primaryButtonProps) && React.createElement("div", {
      className: "bdl-GuideTooltip-navigation"
    }, secondaryButtonProps && React.createElement(Button, _extends({}, secondaryButtonProps, {
      className: classNames('bdl-GuideTooltip-previousButton', secondaryButtonProps.className)
    })), primaryButtonProps && React.createElement(Button, _extends({}, primaryButtonProps, {
      className: classNames('bdl-GuideTooltip-nextButton', primaryButtonProps.className)
    }))), steps && React.createElement("div", {
      className: "bdl-GuideTooltip-steps"
    }, React.createElement(FormattedMessage, _extends({}, messages.navigation, {
      values: {
        currentStepIndex: steps[0],
        totalNumSteps: steps[1]
      }
    })))))),
    theme: TooltipTheme.CALLOUT
  }), children);
}

export default GuideTooltip;
//# sourceMappingURL=GuideTooltip.js.map