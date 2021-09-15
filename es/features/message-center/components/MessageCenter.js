function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import * as React from 'react';
import noop from 'lodash/noop';
import Megaphone20 from '../../../icon/fill/Megaphone20';
import CountBadge from '../../../components/count-badge/CountBadge';
import Badgeable from '../../../components/badgeable/Badgeable';
import MessageCenterModal from './message-center-modal/MessageCenterModal';
import Internationalize from '../../../elements/common/Internationalize';

function MessageCenter(_ref) {
  var contentPreviewProps = _ref.contentPreviewProps,
      getUnreadMessageCount = _ref.getUnreadMessageCount,
      ButtonComponent = _ref.buttonComponent,
      getEligibleMessages = _ref.getEligibleMessages,
      getToken = _ref.getToken,
      apiHost = _ref.apiHost,
      postMarkAllMessagesAsSeen = _ref.postMarkAllMessagesAsSeen,
      overscanRowCount = _ref.overscanRowCount,
      language = _ref.language,
      messages = _ref.messages,
      _ref$onMessageShown = _ref.onMessageShown,
      onMessageShown = _ref$onMessageShown === void 0 ? noop : _ref$onMessageShown;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isOpen = _React$useState2[0],
      setIsOpen = _React$useState2[1];

  var _React$useState3 = React.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      unreadMessageCount = _React$useState4[0],
      setUnreadMessageCount = _React$useState4[1]; // TODO: create hook for fetching, loading


  var _React$useState5 = React.useState(null),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      eligibleMessages = _React$useState6[0],
      setEligibleMessages = _React$useState6[1];

  var isFetchingMessagesRef = React.useRef(false);
  React.useEffect(function () {
    function fetchUnreadMessageCount() {
      return _fetchUnreadMessageCount.apply(this, arguments);
    }

    function _fetchUnreadMessageCount() {
      _fetchUnreadMessageCount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _ref2, count;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return getUnreadMessageCount();

              case 3:
                _ref2 = _context.sent;
                count = _ref2.count;
                setUnreadMessageCount(count);
                _context.next = 10;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));
      return _fetchUnreadMessageCount.apply(this, arguments);
    }

    fetchUnreadMessageCount();
  }, [getUnreadMessageCount]);
  React.useEffect(function () {
    function fetchEligibleMessages() {
      return _fetchEligibleMessages.apply(this, arguments);
    }

    function _fetchEligibleMessages() {
      _fetchEligibleMessages = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var eligibleMessagesResponse;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (isFetchingMessagesRef.current) {
                  _context2.next = 13;
                  break;
                }

                isFetchingMessagesRef.current = true;
                _context2.prev = 2;
                _context2.next = 5;
                return getEligibleMessages();

              case 5:
                eligibleMessagesResponse = _context2.sent;
                setEligibleMessages(eligibleMessagesResponse);
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](2);
                setEligibleMessages(_context2.t0);

              case 12:
                isFetchingMessagesRef.current = false;

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 9]]);
      }));
      return _fetchEligibleMessages.apply(this, arguments);
    }

    var isOpenAndNoMessages = isOpen && !eligibleMessages; // if there are unread messages, prefetch the data as the user is more likely to click on the message center

    var shouldPrefetch = !isOpen && !eligibleMessages && !!unreadMessageCount;

    if (isOpenAndNoMessages || shouldPrefetch) {
      fetchEligibleMessages();
    }
  }, [eligibleMessages, getEligibleMessages, isOpen, unreadMessageCount]);

  function handleOnClick() {
    setIsOpen(function (prevIsOpen) {
      return !prevIsOpen;
    });

    if (unreadMessageCount && unreadMessageCount > 0 && eligibleMessages) {
      try {
        postMarkAllMessagesAsSeen(eligibleMessages);
      } catch (err) {// swallow
      }

      setUnreadMessageCount(0);
    }
  }

  function onRequestClose() {
    setIsOpen(false);
  }

  var icon = React.createElement(ButtonComponent, {
    "data-resin-target": "messageCenterOpenModal",
    "data-testid": "message-center-unread-count",
    onClick: handleOnClick,
    render: function render() {
      return React.createElement(Badgeable, {
        className: "icon-bell-badge",
        topRight: React.createElement(CountBadge, {
          isVisible: !!unreadMessageCount,
          shouldAnimate: true,
          value: unreadMessageCount || 0
        })
      }, React.createElement(Megaphone20, {
        className: "bdl-MessageCenter-icon"
      }));
    }
  });
  return React.createElement(Internationalize, {
    messages: messages,
    language: language
  }, React.createElement("span", {
    className: "bdl-MessageCenter",
    "data-resin-component": "messageCenter"
  }, isOpen ? React.createElement(React.Fragment, null, icon, React.createElement(MessageCenterModal, {
    apiHost: apiHost,
    contentPreviewProps: contentPreviewProps,
    getToken: getToken,
    messages: eligibleMessages,
    onRequestClose: onRequestClose,
    overscanRowCount: overscanRowCount,
    onMessageShown: onMessageShown
  })) : React.createElement(React.Fragment, null, icon)));
}

export default MessageCenter;
//# sourceMappingURL=MessageCenter.js.map