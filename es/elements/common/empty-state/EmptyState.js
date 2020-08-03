/**
 * 
 * @file Empty state component
 * @author Box
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import ErrorEmptyState from '../../../icons/states/ErrorEmptyState';
import FolderEmptyState from '../../../icons/states/FolderEmptyState';
import SelectedItemsEmptyState from '../../../icons/states/SelectedItemsEmptyState';
import SearchEmptyState from '../../../icons/states/SearchEmptyState';
import messages from '../messages';
import { VIEW_ERROR, VIEW_FOLDER, VIEW_METADATA, VIEW_SEARCH, VIEW_SELECTED } from '../../../constants';
import './EmptyState.scss';

var EmptyState = function EmptyState(_ref) {
  var view = _ref.view,
      isLoading = _ref.isLoading;
  var type;
  var message = isLoading && (view === VIEW_FOLDER || view === VIEW_METADATA) ? /*#__PURE__*/React.createElement(FormattedMessage, messages.loadingState) : /*#__PURE__*/React.createElement(FormattedMessage, messages["".concat(view, "State")]);

  switch (view) {
    case VIEW_ERROR:
      type = /*#__PURE__*/React.createElement(ErrorEmptyState, null);
      break;

    case VIEW_SELECTED:
      type = /*#__PURE__*/React.createElement(SelectedItemsEmptyState, null);
      break;

    case VIEW_SEARCH:
      type = /*#__PURE__*/React.createElement(SearchEmptyState, null);
      break;

    default:
      type = /*#__PURE__*/React.createElement(FolderEmptyState, null);
      break;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "be-empty"
  }, type, /*#__PURE__*/React.createElement("div", null, message));
};

export default EmptyState;
//# sourceMappingURL=EmptyState.js.map