import * as React from 'react';
import classNames from 'classnames';
import Button from '../button';
import PrimaryButton from '../primary-button';
import X16 from '../../icon/fill/X16';
import './Nudge.scss';

function Nudge(_ref) {
  var buttonText = _ref.buttonText,
      className = _ref.className,
      content = _ref.content,
      _ref$dataResinTarget = _ref.dataResinTarget,
      dataResinTarget = _ref$dataResinTarget === void 0 ? 'nudgeButton' : _ref$dataResinTarget,
      illustration = _ref.illustration,
      isShown = _ref.isShown,
      header = _ref.header,
      onButtonClick = _ref.onButtonClick,
      onCloseButtonClick = _ref.onCloseButtonClick;
  var classes = classNames(['bdl-Nudge', className], {
    'bdl-is-closed': !isShown
  });
  var closeButton = React.createElement(Button, {
    "aria-label": "close-nudge",
    className: "bdl-Nudge-closeButton",
    onClick: onCloseButtonClick
  }, React.createElement(X16, {
    height: 18,
    width: 18
  }));
  return React.createElement("article", {
    className: classes,
    "data-resin-component": "nudge"
  }, closeButton, React.createElement("div", {
    className: "bdl-Nudge-illustration"
  }, illustration), React.createElement("h2", {
    className: "bdl-Nudge-header"
  }, header), React.createElement("p", {
    className: "bdl-Nudge-content"
  }, content), React.createElement("div", {
    className: "bdl-Nudge-button"
  }, React.createElement(PrimaryButton, {
    "data-resin-target": dataResinTarget,
    onClick: onButtonClick
  }, buttonText)));
}

export default Nudge;
//# sourceMappingURL=Nudge.js.map