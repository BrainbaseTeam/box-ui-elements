/**
 * Define MessageAction
 */
var close = 'close';
var launch = 'launch';
var openURL = 'openURL';
var pushHistory = 'pushHistory'; // push history will change href without reloading the app

var postToServer = 'postToServer';
export var messageActionTypes = {
  close: close,
  launch: launch,
  openURL: openURL,
  pushHistory: pushHistory,
  postToServer: postToServer
};
export var messageActions = {
  close: {
    type: 'close'
  }
};
//# sourceMappingURL=message-actions.js.map