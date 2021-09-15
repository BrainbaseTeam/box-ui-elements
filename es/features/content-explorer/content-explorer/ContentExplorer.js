function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import omit from 'lodash/omit';
import ContentExplorerHeaderActions from './ContentExplorerHeaderActions';
import ContentExplorerEmptyState from './ContentExplorerEmptyState';
import ContentExplorerActionButtons from './ContentExplorerActionButtons';
import ContentExplorerSelectAll from './ContentExplorerSelectAll';
import ItemList from '../item-list';
import { ContentExplorerModePropType, FoldersPathPropType, ItemsPropType } from '../prop-types';
import ContentExplorerModes from '../modes';
import ItemTypes from '../item-types';
import './ContentExplorer.scss';

var ContentExplorer =
/*#__PURE__*/
function (_Component) {
  _inherits(ContentExplorer, _Component);

  function ContentExplorer(props) {
    var _this;

    _classCallCheck(this, ContentExplorer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContentExplorer).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "doAncestersContainClassname", function (node, className, limit) {
      var nodeOfInterest = node;
      var counter = 0;

      while (nodeOfInterest.parentNode && counter < limit) {
        // Done traversing (Document node does not have classnames)
        if (!nodeOfInterest.parentNode.className) {
          break;
        }

        if (nodeOfInterest.parentNode.className.includes(className)) {
          return true;
        }

        nodeOfInterest = nodeOfInterest.parentNode;
        counter += 1;
      }

      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "shouldDeselectItems", function () {
      var contentExplorerMode = _this.props.contentExplorerMode;
      return (// always deselect when not in multi select mode
        contentExplorerMode !== ContentExplorerModes.MULTI_SELECT
      );
    });

    _defineProperty(_assertThisInitialized(_this), "handleDocumentClick", function (event) {
      var isInside = _this.domNode && _this.domNode.contains(event.target) || _this.domNode === event.target;

      if (!isInside && _this.shouldDeselectItems()) {
        _this.deselectItems();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleContentExplorerClick", function () {
      if (_this.shouldDeselectItems()) {
        _this.deselectItems();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "enterFolder", function (enteredFolder) {
      var _this$props = _this.props,
          contentExplorerMode = _this$props.contentExplorerMode,
          onEnterFolder = _this$props.onEnterFolder;
      var foldersPath = _this.state.foldersPath;
      var folderIndex = foldersPath.findIndex(function (folder) {
        return folder.id === enteredFolder.id;
      });
      var newFoldersPath = foldersPath.slice();

      if (folderIndex === -1) {
        // Append folder to the path if it's not already in the folders path
        newFoldersPath = newFoldersPath.concat([_objectSpread({}, enteredFolder)]);
      } else {
        // Otherwise, remove all folders that came after the entered folder
        newFoldersPath = newFoldersPath.slice(0, folderIndex + 1);
      }

      var newState = {
        foldersPath: newFoldersPath
      };

      if (contentExplorerMode !== ContentExplorerModes.MULTI_SELECT) {
        newState.selectedItems = {};
      }

      _this.setState(newState);

      onEnterFolder(enteredFolder, newFoldersPath);
    });

    _defineProperty(_assertThisInitialized(_this), "handleFoldersPathUpdated", function (newFoldersPath) {
      _this.setState({
        foldersPath: newFoldersPath
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearchSubmit", function (searchQuery) {
      var onSearchSubmit = _this.props.onSearchSubmit;

      _this.setState({
        isInSearchMode: true
      });

      onSearchSubmit(searchQuery);
    });

    _defineProperty(_assertThisInitialized(_this), "handleExitSearch", function (folderBeforeSearch) {
      var onExitSearch = _this.props.onExitSearch;

      _this.setState({
        isInSearchMode: false
      });

      onExitSearch(folderBeforeSearch);
    });

    _defineProperty(_assertThisInitialized(_this), "handleItemClick", function (_ref) {
      var event = _ref.event,
          index = _ref.index;
      var _this$props2 = _this.props,
          contentExplorerMode = _this$props2.contentExplorerMode,
          items = _this$props2.items,
          onSelectItem = _this$props2.onSelectItem;
      var selectedItems = _this.state.selectedItems;
      var item = items[index];

      if (item.isDisabled || item.isLoading) {
        return;
      } // Prevent the event from bubbling up (so our content explorer click handler doesn't fire)


      event.stopPropagation();
      var newSelectedItems = {};

      if (contentExplorerMode === ContentExplorerModes.MULTI_SELECT) {
        newSelectedItems = _this.toggleSelectedItem(selectedItems, item);
      } else {
        newSelectedItems[item.id] = item;
      }

      _this.setState({
        selectedItems: newSelectedItems,
        isSelectAllChecked: false
      });

      if (onSelectItem) {
        onSelectItem(item, index);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleItemDoubleClick", function (_ref2) {
      var index = _ref2.index;
      var _this$props3 = _this.props,
          items = _this$props3.items,
          onChooseItems = _this$props3.onChooseItems;
      var item = items[index];

      if (item.isDisabled || item.isLoading) {
        return;
      }

      if (item.type === ItemTypes.FOLDER) {
        _this.enterFolder(item);
      } else {
        onChooseItems([item]);
      }

      _this.setState({
        isSelectAllChecked: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleItemNameClick", function (event, index) {
      var items = _this.props.items;
      var item = items[index];

      if (item.type !== ItemTypes.FOLDER) {
        return;
      } // Prevent the event from bubbling (so our row click handler doesn't fire)


      event.preventDefault();
      event.stopPropagation();

      _this.enterFolder(item);

      _this.setState({
        isSelectAllChecked: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleSelectedItem", function (selectedItems, item) {
      var result = _objectSpread({}, selectedItems);

      if (result[item.id]) {
        delete result[item.id];
      } else {
        result[item.id] = item;
      }

      return result;
    });

    _defineProperty(_assertThisInitialized(_this), "selectAll", function () {
      var items = _this.props.items;
      var selectedItems = _this.state.selectedItems;

      var result = _objectSpread({}, selectedItems);

      items.forEach(function (item) {
        if (!result[item.id]) {
          result[item.id] = item;
        }
      });
      return result;
    });

    _defineProperty(_assertThisInitialized(_this), "unselectAll", function () {
      var items = _this.props.items;
      var selectedItems = _this.state.selectedItems;

      var result = _objectSpread({}, selectedItems);

      items.forEach(function (item) {
        if (result[item.id]) {
          delete result[item.id];
        }
      });
      return result;
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelectAllClick",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var items, isSelectAllChecked, newSelectedItems;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // check if the items list is still loading
              items = _this.props.items;

              if (!(items && items[0] && items[0].isLoading)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              isSelectAllChecked = _this.state.isSelectAllChecked;
              newSelectedItems = isSelectAllChecked ? _this.unselectAll() : _this.selectAll();

              _this.setState({
                selectedItems: newSelectedItems,
                isSelectAllChecked: !isSelectAllChecked
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this), "renderItemListEmptyState", function () {
      var _this$state = _this.state,
          foldersPath = _this$state.foldersPath,
          isInSearchMode = _this$state.isInSearchMode;
      var isViewingSearchResults = isInSearchMode && foldersPath.length === 1;
      return React.createElement(ContentExplorerEmptyState, {
        isSearch: isViewingSearchResults
      });
    });

    _this.state = {
      selectedItems: props.initialSelectedItems || {},
      foldersPath: props.initialFoldersPath,
      isInSearchMode: false,
      isSelectAllChecked: false
    };
    return _this;
  }

  _createClass(ContentExplorer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.handleDocumentClick, true);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref4) {
      var prevInitialFoldersPath = _ref4.initialFoldersPath;
      var initialFoldersPath = this.props.initialFoldersPath;

      if (prevInitialFoldersPath !== initialFoldersPath) {
        this.setState({
          foldersPath: initialFoldersPath
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleDocumentClick, true);
    }
  }, {
    key: "getCurrentFolder",
    value: function getCurrentFolder() {
      var foldersPath = this.state.foldersPath;
      return foldersPath[foldersPath.length - 1];
    }
    /**
     * Traverse the hirerachy up to the limit to see if any of the parent has the className
     */

  }, {
    key: "deselectItems",
    value: function deselectItems() {
      this.setState({
        selectedItems: {}
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          actionButtonsProps = _this$props4.actionButtonsProps,
          cancelButtonProps = _this$props4.cancelButtonProps,
          chooseButtonProps = _this$props4.chooseButtonProps,
          chooseButtonText = _this$props4.chooseButtonText,
          className = _this$props4.className,
          contentExplorerMode = _this$props4.contentExplorerMode,
          customInput = _this$props4.customInput,
          headerActionsAccessory = _this$props4.headerActionsAccessory,
          onChooseItems = _this$props4.onChooseItems,
          onMoveItem = _this$props4.onMoveItem,
          onCopyItem = _this$props4.onCopyItem,
          onCancelButtonClick = _this$props4.onCancelButtonClick,
          onCreateNewFolderButtonClick = _this$props4.onCreateNewFolderButtonClick,
          onSelectedClick = _this$props4.onSelectedClick,
          showCreateNewFolderButton = _this$props4.showCreateNewFolderButton,
          isChooseButtonLoading = _this$props4.isChooseButtonLoading,
          isCopyButtonLoading = _this$props4.isCopyButtonLoading,
          isCreateNewFolderAllowed = _this$props4.isCreateNewFolderAllowed,
          isMoveButtonLoading = _this$props4.isMoveButtonLoading,
          isSelectAllAllowed = _this$props4.isSelectAllAllowed,
          items = _this$props4.items,
          numItemsPerPage = _this$props4.numItemsPerPage,
          numTotalItems = _this$props4.numTotalItems,
          onLoadMoreItems = _this$props4.onLoadMoreItems,
          itemIconRenderer = _this$props4.itemIconRenderer,
          itemNameLinkRenderer = _this$props4.itemNameLinkRenderer,
          itemButtonRenderer = _this$props4.itemButtonRenderer,
          listWidth = _this$props4.listWidth,
          listHeight = _this$props4.listHeight,
          searchInputProps = _this$props4.searchInputProps,
          rest = _objectWithoutProperties(_this$props4, ["actionButtonsProps", "cancelButtonProps", "chooseButtonProps", "chooseButtonText", "className", "contentExplorerMode", "customInput", "headerActionsAccessory", "onChooseItems", "onMoveItem", "onCopyItem", "onCancelButtonClick", "onCreateNewFolderButtonClick", "onSelectedClick", "showCreateNewFolderButton", "isChooseButtonLoading", "isCopyButtonLoading", "isCreateNewFolderAllowed", "isMoveButtonLoading", "isSelectAllAllowed", "items", "numItemsPerPage", "numTotalItems", "onLoadMoreItems", "itemIconRenderer", "itemNameLinkRenderer", "itemButtonRenderer", "listWidth", "listHeight", "searchInputProps"]);

      var _this$state2 = this.state,
          isInSearchMode = _this$state2.isInSearchMode,
          foldersPath = _this$state2.foldersPath,
          selectedItems = _this$state2.selectedItems,
          isSelectAllChecked = _this$state2.isSelectAllChecked;
      var isViewingSearchResults = isInSearchMode && foldersPath.length === 1;
      var currentFolder = this.getCurrentFolder();
      var contentExplorerProps = omit(rest, ['initialFoldersPath', 'onEnterFolder', 'onSelectItem', 'onSearchSubmit', 'onExitSearch']);
      var selectedItemsIds = Object.keys(selectedItems);
      var areActionButtonsDisabled; // NOTE: it almost feels like this whole section should be inside the
      // ContentExplorerActionButtons instead. There's a lot of implicit knowledge
      // of what the action buttons are and what they should be doing.

      if (contentExplorerMode === ContentExplorerModes.MULTI_SELECT) {
        // NOTE:o nly expecting to have 1 (choose) button so as long as something
        // is selected and that item's isActionDisabled is false, we enable the action button
        areActionButtonsDisabled = selectedItemsIds.length === 0 || selectedItemsIds.length === 1 && selectedItems[selectedItemsIds[0]].isActionDisabled;
      } else if (isViewingSearchResults || contentExplorerMode === ContentExplorerModes.SELECT_FILE) {
        // Buttons are only enabled when an item is selected
        // When viewing search results, there is no "current folder"
        // When selecting a file, the file can only selected from the list
        areActionButtonsDisabled = selectedItemsIds.length === 0 || selectedItems[selectedItemsIds[0]].isActionDisabled;
      } else {
        // Buttons are enabled using the selected item or the current folder if no item is selected
        areActionButtonsDisabled = selectedItemsIds.length > 0 ? selectedItems[selectedItemsIds[0]].isActionDisabled : currentFolder.isActionDisabled;
      }

      return (// eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
        React.createElement("div", _extends({
          className: classNames('content-explorer', className),
          "data-testid": "content-explorer",
          onClick: this.handleContentExplorerClick,
          ref: function ref(_ref5) {
            _this2.domNode = _ref5;
          }
        }, contentExplorerProps), React.createElement(ContentExplorerHeaderActions, {
          contentExplorerMode: contentExplorerMode,
          customInput: customInput,
          foldersPath: foldersPath,
          isCreateNewFolderAllowed: isCreateNewFolderAllowed,
          onCreateNewFolderButtonClick: onCreateNewFolderButtonClick,
          onFoldersPathUpdated: this.handleFoldersPathUpdated,
          onEnterFolder: this.enterFolder,
          onExitSearch: this.handleExitSearch,
          onSearchSubmit: this.handleSearchSubmit,
          searchInputProps: searchInputProps,
          showCreateNewFolderButton: showCreateNewFolderButton
        }, headerActionsAccessory), isSelectAllAllowed && React.createElement(ContentExplorerSelectAll, {
          numTotalItems: numTotalItems,
          isSelectAllChecked: isSelectAllChecked,
          handleSelectAllClick: this.handleSelectAllClick
        }), React.createElement(ItemList, {
          contentExplorerMode: contentExplorerMode,
          height: listHeight,
          itemButtonRenderer: itemButtonRenderer,
          itemIconRenderer: itemIconRenderer,
          itemNameLinkRenderer: itemNameLinkRenderer,
          items: items,
          noItemsRenderer: this.renderItemListEmptyState,
          numItemsPerPage: numItemsPerPage,
          numTotalItems: numTotalItems,
          onItemClick: this.handleItemClick,
          onItemDoubleClick: this.handleItemDoubleClick,
          onItemNameClick: this.handleItemNameClick,
          onLoadMoreItems: onLoadMoreItems,
          selectedItems: selectedItems,
          width: listWidth
        }), React.createElement(ContentExplorerActionButtons, {
          actionButtonsProps: actionButtonsProps,
          areButtonsDisabled: areActionButtonsDisabled,
          cancelButtonProps: cancelButtonProps,
          chooseButtonProps: chooseButtonProps,
          chooseButtonText: chooseButtonText,
          contentExplorerMode: contentExplorerMode,
          currentFolder: currentFolder,
          isChooseButtonLoading: isChooseButtonLoading,
          isCopyButtonLoading: isCopyButtonLoading,
          isMoveButtonLoading: isMoveButtonLoading,
          onCancelClick: onCancelButtonClick,
          onChooseClick: onChooseItems,
          onCopyClick: onCopyItem,
          onSelectedClick: onSelectedClick,
          onMoveClick: onMoveItem,
          selectedItems: selectedItems
        }))
      );
    }
  }]);

  return ContentExplorer;
}(Component);

_defineProperty(ContentExplorer, "propTypes", {
  /** Props for the action buttons container */
  actionButtonsProps: PropTypes.object,

  /** Props for the cancel button */
  cancelButtonProps: PropTypes.object,

  /** Props for the choose button */
  chooseButtonProps: PropTypes.object,

  /** Custom text for the choose button */
  chooseButtonText: PropTypes.node,

  /** Adds class name. */
  className: PropTypes.string,

  /** Configures the content explorer based on the user's intended action (ex. select file or move/copy) */
  contentExplorerMode: ContentExplorerModePropType.isRequired,

  /** Props that contains the custom search input. Is rendered in header actions */
  customInput: PropTypes.func,

  /** Any extra items in the header to the right of the search input (and new folder button) */
  headerActionsAccessory: PropTypes.node,

  /** Initial path of folders. The last folder in the array is the current folder. */
  initialFoldersPath: FoldersPathPropType.isRequired,

  /** Initial items that will show up as selected */
  initialSelectedItems: PropTypes.object,

  /**
   * Called when the current folder changes
   *
   * @param {Object} enteredFolder
   * @param {Array} newFoldersPath
   */
  onEnterFolder: PropTypes.func.isRequired,

  /**
   * Called when an item is selected
   *
   * @param {Object} selectedItem
   * @param {number} selectedItemIndex
   */
  onSelectItem: PropTypes.func,

  /**
   * Called when an item is chosen
   *
   * @param {Object[]} chosenItems
   */
  onChooseItems: PropTypes.func,

  /** Called when selected button is clicked */
  onSelectedClick: PropTypes.func,

  /**
   * Called when a destination folder has been selected for moving an item to
   *
   * @param {Object} destFolder destination folder
   */
  onMoveItem: PropTypes.func,

  /**
   * Called when a destination folder has been selected for copying an item to
   *
   * @param {Object} destFolder destination folder
   */
  onCopyItem: PropTypes.func,

  /** Called when cancel button is clicked */
  onCancelButtonClick: PropTypes.func,

  /** Called when new folder button is clicked */
  onCreateNewFolderButtonClick: PropTypes.func,

  /** Whether the new folder button should be shown */
  showCreateNewFolderButton: PropTypes.bool,

  /** Whether the choose button should be shown with a loading indicator */
  isChooseButtonLoading: PropTypes.bool,

  /** Whether the copy button should be shown with a loading indicator */
  isCopyButtonLoading: PropTypes.bool,

  /** Whether the user has permission to create a new folder */
  isCreateNewFolderAllowed: PropTypes.bool,

  /** Whether the user can see select all checkbox */
  isSelectAllAllowed: PropTypes.bool,

  /** Whether the move button should be shown with a loading indicator */
  isMoveButtonLoading: PropTypes.bool,

  /**
   * Called when a search query is submitted.
   *
   * @param {string} searchQuery
   */
  onSearchSubmit: PropTypes.func.isRequired,

  /**
   * Called when search mode is exited. An updated items list should now be passed in to display the user's file tree.
   *
   * @param {Object} folderBeforeSearch the previous folder object before entering search mode
   */
  onExitSearch: PropTypes.func.isRequired,

  /** List of items to display */
  items: ItemsPropType.isRequired,

  /** Number of items to load per page as the user scrolls */
  numItemsPerPage: PropTypes.number,

  /** Total number of items across all pages */
  numTotalItems: PropTypes.number,

  /** Called to load more items */
  onLoadMoreItems: PropTypes.func,

  /** Used to render item icons in the list. Overrides the default icons. */
  itemIconRenderer: PropTypes.func,

  /** Used to render item name links in the list. Overrides the default links. */
  itemNameLinkRenderer: PropTypes.func,

  /** Used to render item buttons in the list. Overrides the default buttons. */
  itemButtonRenderer: PropTypes.func,

  /** Width of the item list */
  listWidth: PropTypes.number.isRequired,

  /** Height of the item list */
  listHeight: PropTypes.number.isRequired,

  /** Props for the search input */
  searchInputProps: PropTypes.object
});

_defineProperty(ContentExplorer, "defaultProps", {
  actionButtonsProps: {},
  cancelButtonProps: {},
  chooseButtonProps: {},
  className: '',
  searchInputProps: {}
});

export default ContentExplorer;
//# sourceMappingURL=ContentExplorer.js.map