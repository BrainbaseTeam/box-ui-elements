function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { useContext, useMemo } from 'react';
import { MESSAGE_STATES } from './constants';
import MessageContext from './MessageContext';

function useMessage(name) {
  var messageContext = useContext(MessageContext);
  return useMemo(function () {
    var _messageContext$messa = messageContext.messageApi,
        eligibleMessageIDMap = _messageContext$messa.eligibleMessageIDMap,
        markMessageAsSeen = _messageContext$messa.markMessageAsSeen,
        markMessageAsClosed = _messageContext$messa.markMessageAsClosed,
        messageStateMap = messageContext.messageStateMap,
        setMessageStateMap = messageContext.setMessageStateMap;
    var canShow = name in eligibleMessageIDMap && messageStateMap[name] !== MESSAGE_STATES.CLOSED;

    function onShow() {
      if (canShow && !messageStateMap[name]) {
        setMessageStateMap(_objectSpread({}, messageStateMap, _defineProperty({}, name, MESSAGE_STATES.SHOWING))); // FIXME markMessageAsSeen action was currently throttled to prevent we make multiple
        // backend call if onShow is called multiple times before setMessageStateMap
        // actually alter the messageState. But it is preferrable to prevent
        // markMessageAsSeen from being called multiple times instead of throttling
        // after it is called.

        markMessageAsSeen(eligibleMessageIDMap[name]);
      }
    }

    function onClose() {
      if (canShow && messageStateMap[name] === MESSAGE_STATES.SHOWING) {
        setMessageStateMap(_objectSpread({}, messageStateMap, _defineProperty({}, name, MESSAGE_STATES.CLOSED)));
        markMessageAsClosed(eligibleMessageIDMap[name]);
      }
    }

    function onComplete() {
      if (canShow && messageStateMap[name] === MESSAGE_STATES.SHOWING) {
        setMessageStateMap(_objectSpread({}, messageStateMap, _defineProperty({}, name, MESSAGE_STATES.CLOSED)));
        markMessageAsClosed(eligibleMessageIDMap[name]);
      }
    }

    return {
      canShow: canShow,
      onShow: onShow,
      onClose: onClose,
      onComplete: onComplete
    };
  }, [messageContext, name]);
}

export default useMessage;
//# sourceMappingURL=useMessage.js.map