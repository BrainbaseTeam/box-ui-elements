import { createContext } from 'react';
var defaultMessageContextValue = {
  messageStateMap: {},
  messageApi: {
    eligibleMessageIDMap: {},
    markMessageAsSeen: function markMessageAsSeen() {},
    markMessageAsClosed: function markMessageAsClosed() {}
  },
  setMessageStateMap: function setMessageStateMap() {}
};
var MessageContext = createContext(defaultMessageContextValue);
export default MessageContext;
//# sourceMappingURL=MessageContext.js.map