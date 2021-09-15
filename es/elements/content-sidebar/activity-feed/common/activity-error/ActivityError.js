function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import classnames from 'classnames';
import InlineError from '../../../../../components/inline-error';
import PlainButton from '../../../../../components/plain-button';
import './ActivityError.scss';

var ActivityError = function ActivityError(_ref) {
  var action = _ref.action,
      message = _ref.message,
      title = _ref.title,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["action", "message", "title", "className"]);

  return React.createElement(InlineError, {
    className: classnames('bcs-ActivityError', className),
    title: React.createElement(FormattedMessage, _extends({}, title, rest))
  }, React.createElement("div", null, React.createElement(FormattedMessage, message)), action ? React.createElement(PlainButton, {
    className: "bcs-ActivityError-action lnk",
    onClick: action.onAction,
    type: "button"
  }, action.text) : null);
};

export default ActivityError;
//# sourceMappingURL=ActivityError.js.map