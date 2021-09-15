function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import * as React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import classNames from 'classnames';
import { AutoSizer, CellMeasurer, CellMeasurerCache, List } from 'react-virtualized';
import debounce from 'lodash/debounce';
import AnimateHeight from 'react-animate-height';
import Scrollbar from 'react-scrollbars-custom';
import Modal from '../../../../components/modal/Modal';
import CategorySelector from '../../../../components/category-selector/CategorySelector';
import CollapsibleScrollbar from '../collapsibile-scrollbar/CollapsibleScrollbar';
import Message from '../message/Message';
import intlMessages from '../../messages';
import './MessageCenterModal.scss';
import MessagePreviewGhost from '../../../message-preview-ghost/MessagePreviewGhost';
import ContentGhost from '../templates/common/ContentGhost';
import BottomContentWrapper from '../templates/common/BottomContentWrapper';
import ErrorState from '../error-state/ErrorState';
import EmptyState from './EmptyState';
var ALL = 'all';
var cache = new CellMeasurerCache({
  defaultHeight: 400,
  fixedWidth: true
});
var SCROLLBAR_MARGIN = 16;
var listStyle = {
  overflowX: false,
  overflowY: false
};
var trackYStyles = {
  marginLeft: "".concat(SCROLLBAR_MARGIN, "px")
};

function MessageCenterModal(_ref) {
  var apiHost = _ref.apiHost,
      contentPreviewProps = _ref.contentPreviewProps,
      onRequestClose = _ref.onRequestClose,
      messages = _ref.messages,
      getToken = _ref.getToken,
      intl = _ref.intl,
      _ref$overscanRowCount = _ref.overscanRowCount,
      overscanRowCount = _ref$overscanRowCount === void 0 ? 1 : _ref$overscanRowCount,
      onMessageShown = _ref.onMessageShown;
  var categories = React.useMemo(function () {
    if (!Array.isArray(messages)) {
      return null;
    }

    var messageCategoriesSet = new Set();
    messages.forEach(function (_ref2) {
      var category = _ref2.templateParams.category;
      messageCategoriesSet.add(category);
    });

    if (messageCategoriesSet.size <= 1) {
      return null;
    }

    return [{
      value: ALL,
      displayText: intl.formatMessage(intlMessages.all)
    }, {
      value: 'product',
      displayText: intl.formatMessage(intlMessages.product)
    }, {
      value: 'events',
      displayText: intl.formatMessage(intlMessages.events)
    }, {
      value: 'education',
      displayText: intl.formatMessage(intlMessages.boxEducation)
    }];
  }, [intl, messages]);
  var listRef = React.useRef(null);
  var isMouseInTitleRef = React.useRef(false);
  var messageLoadCacheRef = React.useRef(new Map());

  var _React$useState = React.useState(ALL),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      category = _React$useState2[0],
      setCategory = _React$useState2[1];

  var _React$useState3 = React.useState(true),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isExpanded = _React$useState4[0],
      setIsExpanded = _React$useState4[1];

  var _React$useState5 = React.useState({
    width: 0,
    height: 0
  }),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      dimensions = _React$useState6[0],
      setDimensions = _React$useState6[1];

  var scrollRef = React.useRef(null);
  var title = React.createElement("section", {
    className: classNames('bdl-MessageCenterModal-title', {
      'is-expanded': isExpanded,
      'is-collapsed': !isExpanded
    }),
    "data-testid": "modal-title",
    onMouseEnter: function onMouseEnter() {
      isMouseInTitleRef.current = true;
      setIsExpanded(true);
    },
    onMouseLeave: function onMouseLeave() {
      isMouseInTitleRef.current = false;
    }
  }, React.createElement("div", {
    className: "bdl-MessageCenterModal-whatsNew"
  }, React.createElement(FormattedMessage, intlMessages.title)), categories && React.createElement(AnimateHeight, {
    duration: 300,
    height: isExpanded ? 'auto' : 0
  }, React.createElement("section", {
    className: "bdl-MessageCenterModal-categorySelector"
  }, React.createElement(CategorySelector, {
    currentCategory: category,
    categories: categories,
    onSelect: function onSelect(value) {
      cache.clearAll();
      setCategory(value);
    }
  }))));
  var filteredMessages = React.useMemo(function () {
    if (!Array.isArray(messages)) {
      return [];
    }

    return messages.filter(function (_ref3) {
      var templateParams = _ref3.templateParams;
      return category === ALL || templateParams.category === category;
    }).sort(function (_ref4, _ref5) {
      var activateDateA = _ref4.activateDate,
          priorityA = _ref4.priority;
      var activateDateB = _ref5.activateDate,
          priorityB = _ref5.priority;

      // sort by date (descending), secondary sort by priority (descending)
      if (activateDateA > activateDateB) {
        return -1;
      }

      if (activateDateA < activateDateB) {
        return 1;
      }

      if (priorityA > priorityB) {
        return -1;
      }

      if (priorityA < priorityB) {
        return 1;
      }

      return 0;
    });
  }, [category, messages]);
  React.useEffect(function () {
    if (scrollRef.current && scrollRef.current.scrollbarRef && scrollRef.current.scrollbarRef.current) {
      scrollRef.current.scrollbarRef.current.scrollToTop();
    }
  }, [category]);

  function rowRenderer(_ref6) {
    var index = _ref6.index,
        parent = _ref6.parent,
        style = _ref6.style,
        isVisible = _ref6.isVisible;
    var message = filteredMessages[index];
    var messageId = message.id;
    var isFirstTimeBeingShown = !messageLoadCacheRef.current.has(messageId);

    if (isVisible && isFirstTimeBeingShown) {
      messageLoadCacheRef.current.set(messageId, true);
      onMessageShown(message);
    }

    return React.createElement(CellMeasurer, {
      key: messageId,
      cache: cache,
      columnIndex: 0,
      parent: parent,
      rowIndex: index
    }, function (_ref7) {
      var registerChild = _ref7.registerChild;
      return React.createElement("div", {
        ref: registerChild,
        className: "bdl-MessageCenterModal-message",
        style: style,
        "data-testid": "messagecentermodalmessage"
      }, React.createElement(Message, _extends({
        contentPreviewProps: contentPreviewProps,
        apiHost: apiHost
      }, message, {
        getToken: getToken
      })));
    });
  }

  function handleOnScroll(clientHeight, scrollTop, prevClientHeight, prevScrollTop) {
    if (clientHeight > 0 && clientHeight === prevClientHeight && !isMouseInTitleRef.current) {
      var isScrollingDown = prevScrollTop < scrollTop;

      if (isExpanded && isScrollingDown) {
        setIsExpanded(false);
      } else if (!isExpanded && !isScrollingDown) {
        setIsExpanded(true);
      }
    }
  }

  function handleResize(resizeDimensions) {
    setDimensions(resizeDimensions);
  }

  var handlOnResize = React.useCallback(debounce(handleResize, 300), []);

  function renderMessages(width, height) {
    if (!messages) {
      return React.createElement("div", {
        className: "bdl-MessageCenterModal-message"
      }, React.createElement("div", {
        className: "bdl-MessageCenterModal-ghost"
      }, React.createElement(MessagePreviewGhost, null), React.createElement(BottomContentWrapper, null, React.createElement(ContentGhost, null))));
    }

    return React.createElement(List, {
      ref: listRef,
      className: "bdl-MessageCenterModal-list",
      deferredMeasurementCache: cache,
      height: dimensions.height || height,
      noRowsRenderer: EmptyState,
      overscanRowCount: overscanRowCount,
      rowCount: filteredMessages.length,
      rowHeight: cache.rowHeight,
      rowRenderer: rowRenderer,
      style: listStyle,
      width: width - SCROLLBAR_MARGIN
    });
  }

  return React.createElement(Modal, {
    className: "bdl-MessageCenterModal",
    "data-resin-component": "messageCenterModal",
    "data-testid": "messagecentermodal",
    isOpen: true,
    onRequestClose: onRequestClose,
    title: title
  }, React.createElement("section", {
    className: "bdl-MessageCenterModal-messages"
  }, React.createElement(AutoSizer, {
    onResize: handlOnResize
  }, function (_ref8) {
    var height = _ref8.height,
        width = _ref8.width;
    return React.createElement(CollapsibleScrollbar, {
      ref: scrollRef,
      onScroll: function onScroll(_ref9, _ref10) {
        var clientHeight = _ref9.clientHeight,
            scrollTop = _ref9.scrollTop,
            scrollLeft = _ref9.scrollLeft;
        var prevClientHeight = _ref10.clientHeight,
            prevScrollTop = _ref10.scrollTop;
        handleOnScroll(clientHeight, scrollTop, prevClientHeight, prevScrollTop);

        if (listRef.current && listRef.current.Grid) {
          var Grid = listRef.current.Grid;
          Grid.handleScrollEvent({
            scrollTop: scrollTop,
            scrollLeft: scrollLeft
          });
        }
      },
      permanentTrackY: true,
      style: {
        width: width,
        height: height
      },
      trackYStyles: trackYStyles
    }, messages instanceof Error ? React.createElement(ErrorState, null, React.createElement(FormattedMessage, intlMessages.errorFetchingPosts)) : renderMessages(width, height));
  })));
}

export default injectIntl(MessageCenterModal);
//# sourceMappingURL=MessageCenterModal.js.map