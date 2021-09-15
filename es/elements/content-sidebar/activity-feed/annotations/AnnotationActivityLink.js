function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import classNames from 'classnames';
import noop from 'lodash/noop';
import { injectIntl } from 'react-intl';
import PlainButton from '../../../../components/plain-button';
import { ButtonType } from '../../../../components/button';
import './AnnotationActivityLink.scss';

var AnnotationActivityLink = function AnnotationActivityLink(_ref) {
  var className = _ref.className,
      id = _ref.id,
      intl = _ref.intl,
      _ref$isDisabled = _ref.isDisabled,
      isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
      message = _ref.message,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? noop : _ref$onClick,
      rest = _objectWithoutProperties(_ref, ["className", "id", "intl", "isDisabled", "message", "onClick"]);

  var values = message.values,
      messageDescriptor = _objectWithoutProperties(message, ["values"]);

  var translatedMessage = intl.formatMessage(messageDescriptor, values);

  var handleClick = function handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.focus(); // Buttons do not receive focus in Firefox and Safari on MacOS

    onClick(id);
  };

  var handleMouseDown = function handleMouseDown(event) {
    if (isDisabled) {
      return;
    } // Prevents document event handlers from executing because box-annotations relies on
    // detecting mouse events on the document outside of annotation targets to determine when to
    // deselect annotations. This link also may represent that annotation target in the sidebar.


    event.nativeEvent.stopImmediatePropagation();
  };

  return React.createElement(PlainButton, _extends({
    className: classNames('bcs-AnnotationActivityLink', className),
    "data-testid": "bcs-AnnotationActivity-link",
    isDisabled: isDisabled,
    onClick: handleClick,
    onMouseDown: handleMouseDown,
    title: translatedMessage,
    type: ButtonType.BUTTON
  }, rest), React.createElement("span", {
    className: "bcs-AnnotationActivityLink-message"
  }, translatedMessage));
};

export { AnnotationActivityLink as AnnotationActivityLinkBase };
export default injectIntl(AnnotationActivityLink);
//# sourceMappingURL=AnnotationActivityLink.js.map