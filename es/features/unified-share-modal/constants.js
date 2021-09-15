// Shared link access level constants
var ANYONE_WITH_LINK = 'peopleWithTheLink';
var ANYONE_IN_COMPANY = 'peopleInYourCompany';
var PEOPLE_IN_ITEM = 'peopleInThisItem'; // Shared link permission level constants

var CAN_EDIT = 'canEdit';
var CAN_VIEW_DOWNLOAD = 'canViewDownload';
var CAN_VIEW_ONLY = 'canViewOnly'; // Invitee permission level constants

var EDITOR = 'Editor';
var CO_OWNER = 'Co-owner';
var PREVIEWER = 'Previewer';
var PREVIEWER_UPLOADER = 'Previewer Uploader';
var OWNER = 'Owner';
var VIEWER = 'Viewer';
var VIEWER_UPLOADER = 'Viewer Uploader';
var UPLOADER = 'Uploader';
var COLLAB_GROUP_TYPE = 'group';
var COLLAB_USER_TYPE = 'user';
var COLLAB_PENDING_TYPE = 'pending'; // Business Justfications for external collab restrictions

var JUSTIFICATION_CHECKPOINT_COLLAB = 'COLLAB';
var JUSTIFICATION_CHECKPOINT_CREATE_SHARED_LINK = 'CREATE_SHARED_LINK';
var JUSTIFICATION_CHECKPOINT_DOWNLOAD = 'DOWNLOAD';
var JUSTIFICATION_CHECKPOINT_EXTERNAL_COLLAB = 'EXTERNAL_COLLAB'; // Default allowed access levels

var ALLOWED_ACCESS_LEVELS = {
  peopleInThisItem: true,
  peopleInYourCompany: true,
  peopleWithTheLink: true
};
var DISABLED_REASON_ACCESS_POLICY = 'access_policy';
var DISABLED_REASON_MALICIOUS_CONTENT = 'malicious_content';
var INVITEE_PERMISSIONS_FOLDER = [{
  default: false,
  text: CO_OWNER,
  value: CO_OWNER
}, {
  default: true,
  // default in the WebApp
  text: EDITOR,
  value: EDITOR
}, {
  default: false,
  text: PREVIEWER,
  value: PREVIEWER
}, {
  default: false,
  text: PREVIEWER_UPLOADER,
  value: PREVIEWER_UPLOADER
}, {
  default: false,
  text: UPLOADER,
  value: UPLOADER
}, {
  default: false,
  text: VIEWER,
  value: VIEWER
}, {
  default: false,
  text: VIEWER_UPLOADER,
  value: VIEWER_UPLOADER
}];
var INVITEE_PERMISSIONS_FILE = [{
  default: true,
  // default in the WebApp
  text: EDITOR,
  value: EDITOR
}, {
  default: false,
  text: VIEWER,
  value: VIEWER
}];
export { ALLOWED_ACCESS_LEVELS, ANYONE_IN_COMPANY, ANYONE_WITH_LINK, CAN_EDIT, CAN_VIEW_DOWNLOAD, CAN_VIEW_ONLY, COLLAB_GROUP_TYPE, COLLAB_PENDING_TYPE, COLLAB_USER_TYPE, CO_OWNER, DISABLED_REASON_ACCESS_POLICY, DISABLED_REASON_MALICIOUS_CONTENT, EDITOR, INVITEE_PERMISSIONS_FOLDER, INVITEE_PERMISSIONS_FILE, JUSTIFICATION_CHECKPOINT_COLLAB, JUSTIFICATION_CHECKPOINT_CREATE_SHARED_LINK, JUSTIFICATION_CHECKPOINT_DOWNLOAD, JUSTIFICATION_CHECKPOINT_EXTERNAL_COLLAB, OWNER, PEOPLE_IN_ITEM, PREVIEWER, PREVIEWER_UPLOADER, UPLOADER, VIEWER, VIEWER_UPLOADER };
//# sourceMappingURL=constants.js.map