function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Button from '../../../components/button';
import PrimaryButton from '../../../components/primary-button';
import { ContentExplorerModePropType, FolderPropType, ItemsMapPropType } from '../prop-types';
import ContentExplorerModes from '../modes';
import messages from '../messages';
export var getChosenItemsFromSelectedItems = function getChosenItemsFromSelectedItems(selectedItems) {
  var chosenItems = [];
  var selectedItemsIds = Object.keys(selectedItems);
  selectedItemsIds.forEach(function (id) {
    if (!selectedItems[id].isActionDisabled) {
      chosenItems.push(selectedItems[id]);
    }
  });
  return chosenItems;
};

var ContentExplorerActionButtons = function ContentExplorerActionButtons(_ref) {
  var _ref$actionButtonsPro = _ref.actionButtonsProps,
      actionButtonsProps = _ref$actionButtonsPro === void 0 ? {} : _ref$actionButtonsPro,
      _ref$areButtonsDisabl = _ref.areButtonsDisabled,
      areButtonsDisabled = _ref$areButtonsDisabl === void 0 ? false : _ref$areButtonsDisabl,
      _ref$cancelButtonProp = _ref.cancelButtonProps,
      cancelButtonProps = _ref$cancelButtonProp === void 0 ? {} : _ref$cancelButtonProp,
      _ref$chooseButtonProp = _ref.chooseButtonProps,
      chooseButtonProps = _ref$chooseButtonProp === void 0 ? {} : _ref$chooseButtonProp,
      chooseButtonText = _ref.chooseButtonText,
      contentExplorerMode = _ref.contentExplorerMode,
      currentFolder = _ref.currentFolder,
      _ref$isChooseButtonLo = _ref.isChooseButtonLoading,
      isChooseButtonLoading = _ref$isChooseButtonLo === void 0 ? false : _ref$isChooseButtonLo,
      _ref$isCopyButtonLoad = _ref.isCopyButtonLoading,
      isCopyButtonLoading = _ref$isCopyButtonLoad === void 0 ? false : _ref$isCopyButtonLoad,
      _ref$isMoveButtonLoad = _ref.isMoveButtonLoading,
      isMoveButtonLoading = _ref$isMoveButtonLoad === void 0 ? false : _ref$isMoveButtonLoad,
      onCancelClick = _ref.onCancelClick,
      onChooseClick = _ref.onChooseClick,
      onCopyClick = _ref.onCopyClick,
      onMoveClick = _ref.onMoveClick,
      onSelectedClick = _ref.onSelectedClick,
      selectedItems = _ref.selectedItems;

  var handleChooseClick = function handleChooseClick() {
    var chosenItems = getChosenItemsFromSelectedItems(selectedItems);

    if (chosenItems.length === 0 && contentExplorerMode === ContentExplorerModes.SELECT_FOLDER && currentFolder) {
      // Choose the selected item. If no item is selected, choose the current folder.
      chosenItems = [currentFolder];
    }

    if (onChooseClick && chosenItems.length > 0) {
      onChooseClick(chosenItems);
    }
  };

  var handleMoveClick = function handleMoveClick() {
    var selectedItemsIds = Object.keys(selectedItems); // Move to the selected item. If no item is selected, move to the current folder.

    var itemToMove = selectedItemsIds.length > 0 ? selectedItems[selectedItemsIds[0]] : currentFolder;

    if (onMoveClick) {
      onMoveClick(itemToMove);
    }
  };

  var handleCopyClick = function handleCopyClick() {
    var selectedItemsIds = Object.keys(selectedItems); // Copy to the selected item. If no item is selected, copy to the current folder.

    var itemToCopy = selectedItemsIds.length > 0 ? selectedItems[selectedItemsIds[0]] : currentFolder;

    if (onCopyClick) {
      onCopyClick(itemToCopy);
    }
  };

  var renderStatus = function renderStatus() {
    var chosenItems = getChosenItemsFromSelectedItems(selectedItems);
    var statusMessage = React.createElement(FormattedMessage, _extends({}, messages.numSelected, {
      values: {
        numSelected: chosenItems.length
      }
    }));
    var statusElement = onSelectedClick ? React.createElement(Button, {
      className: "status-message",
      onClick: onSelectedClick
    }, statusMessage) : React.createElement("span", {
      className: "status-message"
    }, statusMessage);
    return contentExplorerMode === ContentExplorerModes.MULTI_SELECT && statusElement;
  };

  return React.createElement("div", _extends({
    className: "content-explorer-action-buttons-container"
  }, actionButtonsProps), renderStatus(), React.createElement(Button, _extends({
    className: "content-explorer-cancel-button",
    type: "button",
    isDisabled: isChooseButtonLoading || isMoveButtonLoading || isCopyButtonLoading,
    onClick: onCancelClick
  }, cancelButtonProps), React.createElement(FormattedMessage, messages.cancel)), (contentExplorerMode === ContentExplorerModes.SELECT_FILE || contentExplorerMode === ContentExplorerModes.SELECT_FOLDER || contentExplorerMode === ContentExplorerModes.MULTI_SELECT) && React.createElement(PrimaryButton, _extends({
    type: "button",
    className: "content-explorer-choose-button",
    isDisabled: areButtonsDisabled || isChooseButtonLoading,
    isLoading: isChooseButtonLoading,
    onClick: handleChooseClick
  }, chooseButtonProps), chooseButtonText || React.createElement(FormattedMessage, messages.choose)), contentExplorerMode === ContentExplorerModes.MOVE_COPY && React.createElement(PrimaryButton, {
    key: "move-btn",
    type: "button",
    className: "content-explorer-move-button",
    onClick: handleMoveClick,
    isDisabled: areButtonsDisabled || isMoveButtonLoading || isCopyButtonLoading,
    isLoading: isMoveButtonLoading
  }, React.createElement(FormattedMessage, messages.move)), contentExplorerMode === ContentExplorerModes.MOVE_COPY && React.createElement(PrimaryButton, {
    key: "copy-btn",
    type: "button",
    className: "content-explorer-copy-button",
    onClick: handleCopyClick,
    isDisabled: areButtonsDisabled || isMoveButtonLoading || isCopyButtonLoading,
    isLoading: isCopyButtonLoading
  }, React.createElement(FormattedMessage, messages.copy)));
};

ContentExplorerActionButtons.propTypes = {
  actionButtonsProps: PropTypes.object,
  areButtonsDisabled: PropTypes.bool,
  cancelButtonProps: PropTypes.object,
  chooseButtonProps: PropTypes.object,
  chooseButtonText: PropTypes.node,
  contentExplorerMode: ContentExplorerModePropType.isRequired,
  currentFolder: FolderPropType,
  isChooseButtonLoading: PropTypes.bool,
  isCopyButtonLoading: PropTypes.bool,
  isMoveButtonLoading: PropTypes.bool,
  onCancelClick: PropTypes.func,
  onChooseClick: PropTypes.func,
  onCopyClick: PropTypes.func,
  onMoveClick: PropTypes.func,
  onSelectedClick: PropTypes.func,
  selectedItems: ItemsMapPropType.isRequired
};
export default ContentExplorerActionButtons;
//# sourceMappingURL=ContentExplorerActionButtons.js.map