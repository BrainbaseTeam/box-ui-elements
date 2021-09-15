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
  var message = isLoading && (view === VIEW_FOLDER || view === VIEW_METADATA) ? React.createElement(FormattedMessage, messages.loadingState) : React.createElement(FormattedMessage, messages["".concat(view, "State")]);

  switch (view) {
    case VIEW_ERROR:
      type = React.createElement(ErrorEmptyState, null);
      break;

    case VIEW_SELECTED:
      type = React.createElement(SelectedItemsEmptyState, null);
      break;

    case VIEW_SEARCH:
      type = React.createElement(SearchEmptyState, null);
      break;

    default:
      type = React.createElement(FolderEmptyState, null);
      break;
  }

  return React.createElement("div", {
    className: "be-empty"
  }, type, React.createElement("div", null, message));
};

export default EmptyState;
//# sourceMappingURL=EmptyState.js.map