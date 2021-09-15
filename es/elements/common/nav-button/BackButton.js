function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Back Button component
 * @author Box
 */
import * as React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { Route } from 'react-router-dom';
import IconNavigateLeft from '../../../icons/general/IconNavigateLeft';
import messages from '../messages';
import PlainButton from '../../../components/plain-button';
import './BackButton.scss';

var BackButton = function BackButton(_ref) {
  var className = _ref.className,
      to = _ref.to,
      rest = _objectWithoutProperties(_ref, ["className", "to"]);

  return React.createElement(Route, null, function (_ref2) {
    var history = _ref2.history;
    return React.createElement(PlainButton, _extends({
      className: classNames('bdl-BackButton', className),
      onClick: function onClick() {
        return to ? history.push(to) : history.goBack();
      },
      type: "button"
    }, rest), React.createElement(IconNavigateLeft, {
      height: 24,
      width: 24
    }), React.createElement("span", {
      className: "accessibility-hidden"
    }, React.createElement(FormattedMessage, messages.back)));
  });
};

export default BackButton;
//# sourceMappingURL=BackButton.js.map