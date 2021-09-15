/**
 * 
 * @file Preview Navigation
 * @author Box
 */
import * as React from 'react';
import { injectIntl } from 'react-intl';
import { Route } from 'react-router-dom';
import IconNavigateLeft from '../../icons/general/IconNavigateLeft';
import IconNavigateRight from '../../icons/general/IconNavigateRight';
import PlainButton from '../../components/plain-button/PlainButton';
import messages from '../common/messages';

var PreviewNavigation = function PreviewNavigation(_ref) {
  var _ref$collection = _ref.collection,
      collection = _ref$collection === void 0 ? [] : _ref$collection,
      currentIndex = _ref.currentIndex,
      intl = _ref.intl,
      onNavigateLeft = _ref.onNavigateLeft,
      onNavigateRight = _ref.onNavigateRight;
  var hasLeftNavigation = collection.length > 1 && currentIndex > 0 && currentIndex < collection.length;
  var hasRightNavigation = collection.length > 1 && currentIndex > -1 && currentIndex < collection.length - 1;

  if (!hasLeftNavigation && !hasRightNavigation) {
    return null;
  }

  return React.createElement(Route, {
    path: ['/:activeTab/:deeplink', '/']
  }, function (_ref2) {
    var match = _ref2.match,
        history = _ref2.history;
    return React.createElement(React.Fragment, null, hasLeftNavigation && React.createElement(PlainButton, {
      className: "bcpr-navigate-left",
      onClick: function onClick() {
        if (match.params.deeplink) {
          history.push("/".concat(match.params.activeTab));
        }

        onNavigateLeft();
      },
      title: intl.formatMessage(messages.previousFile),
      type: "button"
    }, React.createElement(IconNavigateLeft, null)), hasRightNavigation && React.createElement(PlainButton, {
      className: "bcpr-navigate-right",
      onClick: function onClick() {
        if (match.params.deeplink) {
          history.push("/".concat(match.params.activeTab));
        }

        onNavigateRight();
      },
      title: intl.formatMessage(messages.nextFile),
      type: "button"
    }, React.createElement(IconNavigateRight, null)));
  });
};

export { PreviewNavigation as PreviewNavigationComponent };
export default injectIntl(PreviewNavigation);
//# sourceMappingURL=PreviewNavigation.js.map