function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import { ContentExplorerModePropType, FoldersPathPropType, ItemsPropType } from '../prop-types';
import ContentExplorerModal from '../content-explorer-modal';
import NewFolderModal from '../new-folder-modal';

var ContentExplorerModalContainer = /*#__PURE__*/function (_Component) {
  _inherits(ContentExplorerModalContainer, _Component);

  var _super = _createSuper(ContentExplorerModalContainer);

  function ContentExplorerModalContainer(props) {
    var _this;

    _classCallCheck(this, ContentExplorerModalContainer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleEnterFolder", function (enteredFolder, newFoldersPath) {
      var onEnterFolder = _this.props.onEnterFolder;

      _this.setState({
        foldersPath: newFoldersPath
      });

      onEnterFolder(enteredFolder, newFoldersPath);
    });

    _defineProperty(_assertThisInitialized(_this), "handleCreateNewFolderButtonClick", function () {
      var onNewFolderModalShown = _this.props.onNewFolderModalShown;

      _this.setState({
        isNewFolderModalOpen: true
      }, function () {
        return onNewFolderModalShown && onNewFolderModalShown();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleNewFolderModalClose", function () {
      var onNewFolderModalClosed = _this.props.onNewFolderModalClosed;

      _this.setState({
        isNewFolderModalOpen: false
      }, function () {
        return onNewFolderModalClosed && onNewFolderModalClosed();
      });
    });

    _this.state = {
      foldersPath: props.initialFoldersPath,
      isNewFolderModalOpen: false
    };
    return _this;
  }

  _createClass(ContentExplorerModalContainer, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var prevInitialFoldersPath = _ref.initialFoldersPath;
      var initialFoldersPath = this.props.initialFoldersPath;

      if (prevInitialFoldersPath !== initialFoldersPath) {
        // Close the new folder modal when the folders path has changed
        this.setState({
          foldersPath: initialFoldersPath,
          isNewFolderModalOpen: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          headerActionsAccessory = _this$props.headerActionsAccessory,
          modalTitle = _this$props.modalTitle,
          modalDescription = _this$props.modalDescription,
          onRequestClose = _this$props.onRequestClose,
          onCreateFolderSubmit = _this$props.onCreateFolderSubmit,
          onCreateFolderInput = _this$props.onCreateFolderInput,
          isCreatingFolder = _this$props.isCreatingFolder,
          createFolderError = _this$props.createFolderError,
          contentExplorerMode = _this$props.contentExplorerMode,
          initialFoldersPath = _this$props.initialFoldersPath,
          onChooseItems = _this$props.onChooseItems,
          onMoveItem = _this$props.onMoveItem,
          onCopyItem = _this$props.onCopyItem,
          isCreateNewFolderAllowed = _this$props.isCreateNewFolderAllowed,
          onSearchSubmit = _this$props.onSearchSubmit,
          onExitSearch = _this$props.onExitSearch,
          items = _this$props.items,
          numItemsPerPage = _this$props.numItemsPerPage,
          numTotalItems = _this$props.numTotalItems,
          onLoadMoreItems = _this$props.onLoadMoreItems,
          itemIconRenderer = _this$props.itemIconRenderer,
          itemNameLinkRenderer = _this$props.itemNameLinkRenderer,
          itemButtonRenderer = _this$props.itemButtonRenderer,
          showCreateNewFolderButton = _this$props.showCreateNewFolderButton,
          searchInputProps = _this$props.searchInputProps,
          chooseButtonText = _this$props.chooseButtonText;
      var _this$state = this.state,
          foldersPath = _this$state.foldersPath,
          isNewFolderModalOpen = _this$state.isNewFolderModalOpen;
      var currentFolder = foldersPath[foldersPath.length - 1];
      return /*#__PURE__*/React.createElement("div", {
        className: classNames('content-explorer-modal-container', className)
      }, /*#__PURE__*/React.createElement(ContentExplorerModal, {
        className: isNewFolderModalOpen ? 'hidden' : '',
        headerActionsAccessory: headerActionsAccessory,
        title: modalTitle,
        description: modalDescription,
        isOpen: true,
        onRequestClose: onRequestClose,
        contentExplorerMode: contentExplorerMode,
        initialFoldersPath: initialFoldersPath,
        onEnterFolder: this.handleEnterFolder,
        onChooseItems: onChooseItems,
        onMoveItem: onMoveItem,
        onCopyItem: onCopyItem,
        onCreateNewFolderButtonClick: this.handleCreateNewFolderButtonClick,
        isCreateNewFolderAllowed: isCreateNewFolderAllowed,
        onSearchSubmit: onSearchSubmit,
        onExitSearch: onExitSearch,
        items: items,
        numItemsPerPage: numItemsPerPage,
        numTotalItems: numTotalItems,
        onLoadMoreItems: onLoadMoreItems,
        itemIconRenderer: itemIconRenderer,
        itemNameLinkRenderer: itemNameLinkRenderer,
        itemButtonRenderer: itemButtonRenderer,
        showCreateNewFolderButton: showCreateNewFolderButton,
        searchInputProps: searchInputProps,
        chooseButtonText: chooseButtonText
      }), isNewFolderModalOpen && /*#__PURE__*/React.createElement(NewFolderModal, {
        isOpen: true,
        parentFolderName: currentFolder.name,
        onRequestClose: this.handleNewFolderModalClose,
        onCreateFolderSubmit: onCreateFolderSubmit,
        onCreateFolderInput: onCreateFolderInput,
        isCreatingFolder: isCreatingFolder,
        createFolderError: createFolderError
      }));
    }
  }]);

  return ContentExplorerModalContainer;
}(Component);

_defineProperty(ContentExplorerModalContainer, "propTypes", {
  /** Adds class name. */
  className: PropTypes.string,

  /** Any extra items in the header to the right of the search input (and new folder button) */
  headerActionsAccessory: PropTypes.node,

  /** Title shown in the ContentExplorerModal. */
  modalTitle: PropTypes.string,

  /** Description text shown in the ContentExplorerModal. */
  modalDescription: PropTypes.string,

  /** Called when the ContentExplorerModal is closed. */
  onRequestClose: PropTypes.func.isRequired,

  /**
   * Called when the folder creation is submitted.
   *
   * @param {string} folderName
   */
  onCreateFolderSubmit: PropTypes.func,

  /**
   * Called with the latest folder name input.
   *
   * @param {string} folderName
   */
  onCreateFolderInput: PropTypes.func,

  /** Called when the NewFolderModal is shown. */
  onNewFolderModalShown: PropTypes.func,

  /** Called when the NewFolderModal is closed. */
  onNewFolderModalClosed: PropTypes.func,

  /** Folder is in the process of being created. */
  isCreatingFolder: PropTypes.bool,

  /** Message that will be shown when there was an error creating the folder. */
  createFolderError: PropTypes.string,

  /** Configures the content explorer based on the user's intended action (ex. select file or move/copy) */
  contentExplorerMode: ContentExplorerModePropType.isRequired,

  /** Initial path of folders. The last folder in the array is the current folder. */
  initialFoldersPath: FoldersPathPropType.isRequired,

  /**
   * Called when the current folder changes
   *
   * @param {Object} enteredFolder
   * @param {Array} newFoldersPath
   */
  onEnterFolder: PropTypes.func.isRequired,

  /**
   * Called when items are chosen.
   *
   * @param {Object[]} chosenItems In non-multi select mode, the chosenItems will be a 1 element array contain the one chosen item
   */
  onChooseItems: PropTypes.func,

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

  /** Whether the user has permission to create a new folder */
  isCreateNewFolderAllowed: PropTypes.bool,

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

  /** Whether the new folder button should be shown */
  showCreateNewFolderButton: PropTypes.bool,

  /** Props for the search input */
  searchInputProps: PropTypes.object,

  /** Custom text for the choose button */
  chooseButtonText: PropTypes.node
});

_defineProperty(ContentExplorerModalContainer, "defaultProps", {
  onCreateFolderSubmit: function onCreateFolderSubmit() {}
});

export default ContentExplorerModalContainer;
//# sourceMappingURL=ContentExplorerModalContainer.js.map