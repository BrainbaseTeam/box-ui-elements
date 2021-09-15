function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
import { injectIntl } from 'react-intl';
import ContentExplorerSearch from './ContentExplorerSearch';
import ContentExplorerNewFolderButton from './ContentExplorerNewFolderButton';
import ContentExplorerBreadcrumbs from './ContentExplorerBreadcrumbs';
import { ContentExplorerModePropType, FoldersPathPropType } from '../prop-types';
import messages from '../messages';
var SEARCH_RESULTS_FOLDER_ID = 'search_results_id';

var isSearchResultsFolder = function isSearchResultsFolder(folder) {
  return folder && folder.id === SEARCH_RESULTS_FOLDER_ID;
};

var ContentExplorerHeaderActions =
/*#__PURE__*/
function (_Component) {
  _inherits(ContentExplorerHeaderActions, _Component);

  function ContentExplorerHeaderActions(props) {
    var _this;

    _classCallCheck(this, ContentExplorerHeaderActions);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContentExplorerHeaderActions).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleBreadcrumbClick", function (folderPathIndex, event) {
      var _this$props = _this.props,
          foldersPath = _this$props.foldersPath,
          onEnterFolder = _this$props.onEnterFolder;
      var clickedFolder = foldersPath[folderPathIndex];

      if (event) {
        event.preventDefault();
      } // Do nothing if the right-most breadcrumb (current folder) is clicked


      if (folderPathIndex === foldersPath.length - 1) {
        return;
      } // Show the search results for the last submitted input when clicking the "Search Results" breadcrumb


      if (isSearchResultsFolder(clickedFolder)) {
        _this.submitSearch(_this.lastSubmittedSearchInput);

        return;
      }

      onEnterFolder(clickedFolder);
    });

    _defineProperty(_assertThisInitialized(_this), "handleBreadcrumbsUpButtonClick", function () {
      var foldersPath = _this.props.foldersPath;
      var newFolderIndex = foldersPath.length - 2;

      if (_this.isViewingSearchResults()) {
        _this.exitSearch();
      } else if (newFolderIndex >= 0) {
        _this.handleBreadcrumbClick(newFolderIndex);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearchInput", function (input) {
      _this.setState({
        searchInput: input
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClearSearchButtonClick", function () {
      _this.exitSearch();
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmitSearch", function () {
      var searchInput = _this.state.searchInput;

      _this.submitSearch(searchInput);
    });

    _this.state = {
      searchInput: ''
    };
    _this.foldersPathBeforeSearch = [];
    _this.lastSubmittedSearchInput = '';
    return _this;
  }

  _createClass(ContentExplorerHeaderActions, [{
    key: "getCurrentFolder",
    value: function getCurrentFolder() {
      var foldersPath = this.props.foldersPath;
      return foldersPath[foldersPath.length - 1];
    }
  }, {
    key: "isInSearchMode",
    value: function isInSearchMode() {
      var foldersPath = this.props.foldersPath;
      return foldersPath.some(isSearchResultsFolder);
    }
  }, {
    key: "isViewingSearchResults",
    value: function isViewingSearchResults() {
      return isSearchResultsFolder(this.getCurrentFolder());
    }
  }, {
    key: "exitSearch",
    value: function exitSearch() {
      var _this$props2 = this.props,
          onFoldersPathUpdated = _this$props2.onFoldersPathUpdated,
          onExitSearch = _this$props2.onExitSearch; // Clear the search input even if we aren't in search mode

      this.setState({
        searchInput: ''
      });

      if (this.isInSearchMode()) {
        var foldersPathLength = this.foldersPathBeforeSearch.length;
        var folderBeforeSearch = foldersPathLength > 0 ? this.foldersPathBeforeSearch[foldersPathLength - 1] : {};
        onFoldersPathUpdated(this.foldersPathBeforeSearch);
        onExitSearch(folderBeforeSearch);
      }
    }
  }, {
    key: "submitSearch",
    value: function submitSearch(searchInput) {
      var _this$props3 = this.props,
          foldersPath = _this$props3.foldersPath,
          intl = _this$props3.intl,
          onFoldersPathUpdated = _this$props3.onFoldersPathUpdated,
          onSearchSubmit = _this$props3.onSearchSubmit;

      if (searchInput) {
        // Only save folders path if we aren't already in search mode
        if (!this.isInSearchMode()) {
          this.foldersPathBeforeSearch = foldersPath;
        }

        this.lastSubmittedSearchInput = searchInput;
        onFoldersPathUpdated([{
          id: SEARCH_RESULTS_FOLDER_ID,
          name: intl.formatMessage(messages.searchResults)
        }]);
        onSearchSubmit(searchInput);
      } else {
        this.exitSearch();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          contentExplorerMode = _this$props4.contentExplorerMode,
          CustomInput = _this$props4.customInput,
          foldersPath = _this$props4.foldersPath,
          onCreateNewFolderButtonClick = _this$props4.onCreateNewFolderButtonClick,
          showCreateNewFolderButton = _this$props4.showCreateNewFolderButton,
          isCreateNewFolderAllowed = _this$props4.isCreateNewFolderAllowed,
          searchInputProps = _this$props4.searchInputProps;
      var searchInput = this.state.searchInput;
      var isInSearchMode = this.isInSearchMode();
      return React.createElement("div", {
        className: "content-explorer-header-actions"
      }, React.createElement("div", {
        className: "content-explorer-search-new-folder-container"
      }, CustomInput ? React.createElement(CustomInput, null) : React.createElement(ContentExplorerSearch, {
        inputValue: searchInput,
        onClearButtonClick: this.handleClearSearchButtonClick,
        onInput: this.handleSearchInput,
        onSubmit: this.handleSubmitSearch,
        searchInputProps: searchInputProps
      }), showCreateNewFolderButton && React.createElement(ContentExplorerNewFolderButton, {
        contentExplorerMode: contentExplorerMode,
        onClick: onCreateNewFolderButtonClick,
        isDisabled: !isCreateNewFolderAllowed || isInSearchMode,
        isCreateNewFolderAllowed: isCreateNewFolderAllowed
      }), children), React.createElement(ContentExplorerBreadcrumbs, {
        foldersPath: foldersPath,
        isUpButtonDisabled: foldersPath.length <= 1 && !isInSearchMode,
        onUpButtonClick: this.handleBreadcrumbsUpButtonClick,
        onBreadcrumbClick: this.handleBreadcrumbClick
      }));
    }
  }]);

  return ContentExplorerHeaderActions;
}(Component);

_defineProperty(ContentExplorerHeaderActions, "propTypes", {
  children: PropTypes.node,
  contentExplorerMode: ContentExplorerModePropType.isRequired,
  customInput: PropTypes.func,
  foldersPath: FoldersPathPropType.isRequired,
  intl: PropTypes.any,
  onFoldersPathUpdated: PropTypes.func.isRequired,
  onEnterFolder: PropTypes.func.isRequired,
  onCreateNewFolderButtonClick: PropTypes.func,
  showCreateNewFolderButton: PropTypes.bool,
  isCreateNewFolderAllowed: PropTypes.bool,
  onSearchSubmit: PropTypes.func.isRequired,
  onExitSearch: PropTypes.func.isRequired,
  searchInputProps: PropTypes.object
});

_defineProperty(ContentExplorerHeaderActions, "defaultProps", {
  showCreateNewFolderButton: true,
  isCreateNewFolderAllowed: true,
  searchInputProps: {}
});

export { ContentExplorerHeaderActions as ContentExplorerHeaderActionsBase };
export default injectIntl(ContentExplorerHeaderActions);
//# sourceMappingURL=ContentExplorerHeaderActions.js.map