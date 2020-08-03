function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'classnames';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { BetaBadge } from '../../components/badge';
import { Link } from '../../components/link';
import Tooltip from '../../components/tooltip/Tooltip';
import messages from './messages';
import './styles/BetaFeedbackBadge.scss';

var BetaFeedbackBadge = function BetaFeedbackBadge(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$tooltip = _ref.tooltip,
      tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
      rest = _objectWithoutProperties(_ref, ["className", "tooltip"]);

  var classes = classNames('bdl-HeaderFeedbackBadge', className);
  var formUrl = rest.formUrl;
  var badge = tooltip ? /*#__PURE__*/React.createElement(Tooltip, {
    text: /*#__PURE__*/React.createElement(FormattedMessage, messages.feedbackCtaText),
    position: "middle-right"
  }, /*#__PURE__*/React.createElement(BetaBadge, {
    "aria-hidden": true,
    className: "bdl-HeaderFeedbackBadge-betaBadge"
  })) : /*#__PURE__*/React.createElement(BetaBadge, {
    className: "bdl-HeaderFeedbackBadge-betaBadge"
  }); // TODO: tooltip may require constrainToScrollParent & constrainToWindow in some contexts

  return /*#__PURE__*/React.createElement("span", {
    className: classes
  }, /*#__PURE__*/React.createElement("span", {
    id: "bdl-HeaderFeedbackBadge-ariaLabel",
    "aria-hidden": "true",
    hidden: true
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.feedbackFormDescription)), /*#__PURE__*/React.createElement(Link, {
    href: formUrl,
    target: "_blank",
    "aria-labelledby": "bdl-HeaderFeedbackBadge-ariaLabel"
  }, badge));
};

export default BetaFeedbackBadge;
//# sourceMappingURL=BetaFeedbackBadge.js.map