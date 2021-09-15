import * as React from 'react';
import classNames from 'classnames';
import './styles/MessageFooter.scss';
import MessageFormattedDate from './MessageFormattedDate';

var renderActionItem = function renderActionItem(actionItem, name) {
  if (!actionItem) {
    return null;
  }

  var label = actionItem.label,
      actions = actionItem.actions;
  var openURLAction = actions.find(function (action) {
    return action.type === 'openURL';
  });

  if (openURLAction && openURLAction.url && openURLAction.target) {
    return React.createElement("a", {
      className: "MessageFooter-action",
      "data-resin-target": "messageCenterAction|".concat(name),
      href: openURLAction.url,
      target: openURLAction.target
    }, label, " \u2192");
  }

  return null;
};

function MessageFooter(_ref) {
  var actionItem = _ref.actionItem,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      date = _ref.date,
      name = _ref.name;
  return React.createElement("div", {
    className: classNames('MessageFooter', className)
  }, React.createElement("span", {
    className: "MessageFooter-date"
  }, React.createElement(MessageFormattedDate, {
    date: date
  })), renderActionItem(actionItem, name));
}

export default MessageFooter;
//# sourceMappingURL=MessageFooter.js.map