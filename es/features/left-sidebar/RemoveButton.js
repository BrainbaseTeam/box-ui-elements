function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import PlainButton from '../../components/plain-button';
import IconClose from '../../icons/general/IconClose';
import './styles/RemoveButton.scss';

var RemoveButton = function RemoveButton(_ref) {
  var onClickRemove = _ref.onClickRemove,
      _ref$removeButtonHtml = _ref.removeButtonHtmlAttributes,
      removeButtonHtmlAttributes = _ref$removeButtonHtml === void 0 ? {} : _ref$removeButtonHtml;
  return React.createElement(PlainButton, _extends({
    className: "lsb-remove-button",
    onClick: onClickRemove
  }, removeButtonHtmlAttributes), React.createElement(IconClose, {
    className: "lsb-remove-button-icon",
    width: 13
  }));
};

export default RemoveButton;
//# sourceMappingURL=RemoveButton.js.map