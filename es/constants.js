/**
 * 
 * @file Global constants
 * @author Box
 */
import Browser from './utils/Browser';
/* ------------------------ API ---------------------------- */

export var API_PAGE_LIMIT = 1000; // default limit for paginated api calls

/* ----------------------- Size ---------------------------- */

export var SIZE_LARGE = 'large';
export var SIZE_MEDIUM = 'medium';
export var SIZE_SMALL = 'small';
export var SIZE_VERY_LARGE = 'very_large';
/* ----------------------- Views ---------------------------- */

export var VIEW_FOLDER = 'folder';
export var VIEW_SEARCH = 'search';
export var VIEW_SELECTED = 'selected';
export var VIEW_RECENTS = 'recents';
export var VIEW_ERROR = 'error';
export var VIEW_UPLOAD_EMPTY = 'upload-empty';
export var VIEW_UPLOAD_IN_PROGRESS = 'upload-inprogress';
export var VIEW_UPLOAD_SUCCESS = 'upload-success';
export var VIEW_METADATA = 'metadata';
/* ----------------------- ViewModes ---------------------------- */

export var VIEW_MODE_LIST = 'list';
export var VIEW_MODE_GRID = 'grid';
/* ----------------------- Types ---------------------------- */

export var TYPE_FOLDER = 'folder';
export var TYPE_FILE = 'file';
export var TYPE_WEBLINK = 'web_link';
/* -------------------- Typed Prefix-------------------------- */

export var TYPED_ID_FOLDER_PREFIX = 'folder_';
export var TYPED_ID_FILE_PREFIX = 'file_';
export var TYPED_ID_WEBLINK_PREFIX = 'web_link_';
export var TYPED_ID_FEED_PREFIX = 'feedItems_';
/* ----------------- Cache Key Prefix ----------------------- */

export var CACHE_PREFIX_FOLDER = TYPED_ID_FOLDER_PREFIX;
export var CACHE_PREFIX_FILE = TYPED_ID_FILE_PREFIX;
export var CACHE_PREFIX_WEBLINK = TYPED_ID_WEBLINK_PREFIX;
export var CACHE_PREFIX_SEARCH = 'search_';
export var CACHE_PREFIX_RECENTS = 'recents_';
export var CACHE_PREFIX_METADATA = 'metadata_';
export var CACHE_PREFIX_METADATA_QUERY = 'metadata_query_';
/* ----------------------- Sorts ---------------------------- */

export var SORT_ASC = 'ASC';
export var SORT_DESC = 'DESC';
/* -------------------- Shared access ----------------------- */

export var ACCESS_NONE = 'none';
export var ACCESS_OPEN = 'open';
export var ACCESS_COLLAB = 'collaborators';
export var ACCESS_COMPANY = 'company';
/* ----------------------- Headers -------------------------- */

export var HEADER_ACCEPT = 'Accept';
export var HEADER_CONTENT_TYPE = 'Content-Type';
export var HEADER_RETRY_AFTER = 'Retry-After';
export var HEADER_CLIENT_NAME = 'X-Box-Client-Name';
export var HEADER_CLIENT_VERSION = 'X-Box-Client-Version';
export var HEADER_ACCEPT_LANGUAGE = 'Accept-Language';
/* ------------------ Metadata ---------------------- */

export var KEY_CLASSIFICATION_TYPE = 'Box__Security__Classification__Key';
export var METADATA_TEMPLATE_CLASSIFICATION = 'securityClassification-6VMVochwUWo';
export var METADATA_TEMPLATE_SKILLS = 'boxSkillsCards';
export var METADATA_TEMPLATE_PROPERTIES = 'properties';
export var METADATA_SCOPE_GLOBAL = 'global';
export var METADATA_SCOPE_ENTERPRISE = 'enterprise';
export var METADATA_TEMPLATE_FETCH_LIMIT = API_PAGE_LIMIT;
/* ----------------------- Fields --------------------------- */

export var FIELD_ID = 'id';
export var FIELD_DATE = 'date';
export var FIELD_NAME = 'name';
export var FIELD_TYPE = 'type';
export var FIELD_SIZE = 'size';
export var FIELD_PARENT = 'parent';
export var FIELD_EXTENSION = 'extension';
export var FIELD_ITEM_EXPIRATION = 'expires_at';
export var FIELD_PERMISSIONS = 'permissions';
export var FIELD_PERMISSIONS_CAN_UPLOAD = "".concat(FIELD_PERMISSIONS, ".can_upload");
export var FIELD_ITEM_COLLECTION = 'item_collection';
export var FIELD_PATH_COLLECTION = 'path_collection';
export var FIELD_CONTENT_CREATED_AT = 'content_created_at';
export var FIELD_CONTENT_MODIFIED_AT = 'content_modified_at';
export var FIELD_MODIFIED_AT = 'modified_at';
export var FIELD_RESTORED_AT = 'restored_at';
export var FIELD_RESTORED_FROM = 'restored_from';
export var FIELD_CREATED_AT = 'created_at';
export var FIELD_INTERACTED_AT = 'interacted_at';
export var FIELD_SHARED_LINK = 'shared_link';
export var FIELD_SHARED_LINK_ACCESS_LEVELS_DISABLED_REASONS = 'allowed_shared_link_access_levels_disabled_reasons';
export var FIELD_SHARED_LINK_FEATURES = 'shared_link_features';
export var FIELD_ALLOWED_INVITEE_ROLES = 'allowed_invitee_roles';
export var FIELD_ALLOWED_SHARED_LINK_ACCESS_LEVELS = 'allowed_shared_link_access_levels';
export var FIELD_HAS_COLLABORATIONS = 'has_collaborations';
export var FIELD_IS_EXTERNALLY_OWNED = 'is_externally_owned';
export var FIELD_TOTAL_COUNT = 'total_count';
export var FIELD_ENTRIES = 'entries';
export var FIELD_DOWNLOAD_URL = 'download_url';
export var FIELD_ACCESS = 'access';
export var FIELD_URL = 'url';
export var FIELD_CREATED_BY = 'created_by';
export var FIELD_MODIFIED_BY = 'modified_by';
export var FIELD_OWNED_BY = 'owned_by';
export var FIELD_RESTORED_BY = 'restored_by';
export var FIELD_TRASHED_BY = 'trashed_by';
export var FIELD_DESCRIPTION = 'description';
export var FIELD_REPRESENTATIONS = 'representations';
export var FIELD_SHA1 = 'sha1';
export var FIELD_WATERMARK_INFO = 'watermark_info';
export var FIELD_AUTHENTICATED_DOWNLOAD_URL = 'authenticated_download_url';
export var FIELD_FILE_VERSION = 'file_version';
export var FIELD_IS_DOWNLOAD_AVAILABLE = 'is_download_available';
export var FIELD_VERSION_LIMIT = 'version_limit';
export var FIELD_VERSION_NUMBER = 'version_number';
export var FIELD_METADATA = 'metadata';
export var FIELD_METADATA_SKILLS = "".concat(FIELD_METADATA, ".").concat(METADATA_SCOPE_GLOBAL, ".").concat(METADATA_TEMPLATE_SKILLS);
export var FIELD_METADATA_PROPERTIES = "".concat(FIELD_METADATA, ".").concat(METADATA_SCOPE_GLOBAL, ".").concat(METADATA_TEMPLATE_PROPERTIES);
export var FIELD_METADATA_CLASSIFICATION = "".concat(FIELD_METADATA, ".").concat(METADATA_SCOPE_ENTERPRISE, ".").concat(METADATA_TEMPLATE_CLASSIFICATION);
export var FIELD_DUE_AT = 'due_at';
export var FIELD_TASK_ASSIGNMENT_COLLECTION = 'task_assignment_collection';
export var FIELD_TASK_COLLABORATOR_COLLECTION = 'task_collaborator_collection';
export var FIELD_IS_COMPLETED = 'is_completed';
export var FIELD_MESSAGE = 'message';
export var FIELD_TAGGED_MESSAGE = 'tagged_message';
export var FIELD_TRASHED_AT = 'trashed_at';
export var FIELD_ASSIGNED_TO = 'assigned_to';
export var FIELD_RELEVANCE = '';
export var FIELD_STATUS = 'status';
export var FIELD_ACTIVITY_TEMPLATE = 'activity_template';
export var FIELD_APP = 'app';
export var FIELD_OCCURRED_AT = 'occurred_at';
export var FIELD_RENDERED_TEXT = 'rendered_text';
export var FIELD_RETENTION = 'retention';
export var FIELD_UPLOADER_DISPLAY_NAME = 'uploader_display_name';
export var FIELD_CLASSIFICATION = 'classification';
export var FIELD_ENTERPRISE = 'enterprise';
export var FIELD_HOSTNAME = 'hostname';
/* ----------------------- Permissions --------------------------- */

export var PERMISSION_CAN_COMMENT = 'can_comment';
export var PERMISSION_CAN_CREATE_ANNOTATIONS = 'can_create_annotations';
export var PERMISSION_CAN_DELETE = 'can_delete';
export var PERMISSION_CAN_DOWNLOAD = 'can_download';
export var PERMISSION_CAN_EDIT = 'can_edit';
export var PERMISSION_CAN_PREVIEW = 'can_preview';
export var PERMISSION_CAN_RENAME = 'can_rename';
export var PERMISSION_CAN_SET_SHARE_ACCESS = 'can_set_share_access';
export var PERMISSION_CAN_SHARE = 'can_share';
export var PERMISSION_CAN_UPLOAD = 'can_upload';
export var PERMISSION_CAN_VIEW_ANNOTATIONS = 'can_view_annotations';
/* --------------------- Invitee roles --------------------------- */

export var INVITEE_ROLE_EDITOR = 'editor';
/* ------------- Delimiters for bread crumbs ---------------- */

export var DELIMITER_SLASH = 'slash';
export var DELIMITER_CARET = 'caret';
/* ---------------------- Defaults -------------------------- */

export var DEFAULT_PREVIEW_VERSION = '2.72.0';
export var DEFAULT_LOCALE = 'en-US';
export var DEFAULT_PATH_STATIC = 'platform/elements';
export var DEFAULT_PATH_STATIC_PREVIEW = 'platform/preview';
export var DEFAULT_HOSTNAME_API = 'https://api.box.com';
export var DEFAULT_HOSTNAME_STATIC = 'https://cdn01.boxcdn.net';
export var DEFAULT_HOSTNAME_UPLOAD = 'https://upload.box.com';
export var DEFAULT_HOSTNAME_UPLOAD_APP = 'https://upload.app.box.com';
export var DEFAULT_HOSTNAME_UPLOAD_GOV = 'https://upload.app.box-gov.com';
export var DEFAULT_HOSTNAME_APP = 'https://app.box.com';
export var DEFAULT_CONTAINER = 'body';
export var DEFAULT_ROOT = '0';
export var DEFAULT_SEARCH_DEBOUNCE = 500;
export var DEFAULT_COLLAB_DEBOUNCE = 500;
export var DEFAULT_FORMAT_DEBOUNCE = 1000;
export var DEFAULT_MAX_COLLABORATORS = 25;
export var DEFAULT_MAX_CONTACTS = 50;
export var DEFAULT_PAGE_NUMBER = 1;
export var DEFAULT_PAGE_SIZE = 50;
export var DEFAULT_FETCH_START = 0;
export var DEFAULT_FETCH_END = 1000;
export var DEFAULT_VIEW_FILES = 'files';
export var DEFAULT_VIEW_RECENTS = 'recents';
export var DEFAULT_VIEW_METADATA = 'metadata';
export var CLIENT_NAME_CONTENT_EXPLORER = 'ContentExplorer';
export var CLIENT_NAME_OPEN_WITH = 'ContentOpenWith';
export var CLIENT_NAME_CONTENT_PICKER = 'ContentPicker';
export var CLIENT_NAME_CONTENT_PREVIEW = 'ContentPreview';
export var CLIENT_NAME_CONTENT_SHARING = 'ContentSharing';
export var CLIENT_NAME_CONTENT_SIDEBAR = 'ContentSidebar';
export var CLIENT_NAME_CONTENT_UPLOADER = 'ContentUploader';
export var CLIENT_NAME_FILE_PICKER = 'FilePicker';
export var CLIENT_NAME_FOLDER_PICKER = 'FolderPicker';
/* ---------------------- Statuses -------------------------- */

export var STATUS_PENDING = 'pending';
export var STATUS_IN_PROGRESS = 'inprogress';
export var STATUS_STAGED = 'staged';
export var STATUS_COMPLETE = 'complete';
export var STATUS_ERROR = 'error';
export var STATUS_ACCEPTED = 'accepted';
export var STATUS_INACTIVE = 'inactive';
/* ------------------- Styles ------------------------ */

export var CLASS_MODAL_CONTENT = 'be-modal-dialog-content';
export var CLASS_MODAL_CONTENT_FULL_BLEED = 'be-modal-dialog-content-full-bleed';
export var CLASS_MODAL_OVERLAY = 'be-modal-dialog-overlay';
export var CLASS_IS_SMALL = 'be-is-small';
export var CLASS_IS_MEDIUM = 'be-is-medium';
export var CLASS_IS_TOUCH = 'be-is-touch';
export var CLASS_MODAL = 'be-modal';
export var CLASS_INTEGRATION_ICON = 'bcow-integration-icon';
export var OVERLAY_WRAPPER_CLASS = 'overlay-wrapper';
/* ------------------ Error Codes ---------------------- */

export var ERROR_CODE_ITEM_NAME_INVALID = 'item_name_invalid';
export var ERROR_CODE_ITEM_NAME_TOO_LONG = 'item_name_too_long';
export var ERROR_CODE_ITEM_NAME_IN_USE = 'item_name_in_use';
export var ERROR_CODE_UPLOAD_FILE_LIMIT = 'upload_file_limit';
export var ERROR_CODE_UPLOAD_CHILD_FOLDER_FAILED = 'child_folder_failed_upload';
export var ERROR_CODE_UPLOAD_STORAGE_LIMIT_EXCEEDED = 'storage_limit_exceeded';
export var ERROR_CODE_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED = 'file_size_limit_exceeded';
export var ERROR_CODE_UPLOAD_PENDING_APP_FOLDER_SIZE_LIMIT = 'pending_app_folder_size_limit';
export var ERROR_CODE_UPLOAD_BAD_DIGEST = 'bad_digest';
export var ERROR_CODE_UPLOAD_FAILED_PACKAGE = 'failed_package_upload';
export var ERROR_CODE_FETCH_ACTIVITY = 'fetch_activity_error';
export var ERROR_CODE_FETCH_ANNOTATION = 'fetch_annotation_error';
export var ERROR_CODE_FETCH_ANNOTATIONS = 'fetch_annotations_error';
export var ERROR_CODE_FETCH_FILE = 'fetch_file_error';
export var ERROR_CODE_FETCH_FILE_DUE_TO_POLICY = 'forbidden_by_policy';
export var ERROR_CODE_FETCH_FOLDER = 'fetch_folder_error';
export var ERROR_CODE_FETCH_WEBLINK = 'fetch_weblink_error';
export var ERROR_CODE_FETCH_CLASSIFICATION = 'fetch_classification_error';
export var ERROR_CODE_FETCH_COMMENTS = 'fetch_comments_error';
export var ERROR_CODE_FETCH_VERSION = 'fetch_version_error';
export var ERROR_CODE_FETCH_VERSIONS = 'fetch_versions_error';
export var ERROR_CODE_FETCH_TASKS = 'fetch_tasks_error';
export var ERROR_CODE_FETCH_CURRENT_USER = 'fetch_current_user_error';
export var ERROR_CODE_FETCH_ENTERPRISE_GROUPS = 'fetch_enterprise_groups_error';
export var ERROR_CODE_FETCH_ENTERPRISE_USERS = 'fetch_enterprise_users_error';
export var ERROR_CODE_FETCH_TASK_ASSIGNMENT = 'fetch_task_assignment_error';
export var ERROR_CODE_FETCH_TASK_COLLABORATOR = 'fetch_task_collaborator_error';
export var ERROR_CODE_FETCH_INTEGRATIONS = 'fetch_integrations_error';
export var ERROR_CODE_FETCH_METADATA = 'fetch_metadata_error';
export var ERROR_CODE_FETCH_METADATA_TEMPLATES = 'fetch_metadata_templates_error';
export var ERROR_CODE_FETCH_ACCESS_STATS = 'fetch_access_stats_error';
export var ERROR_CODE_FETCH_SKILLS = 'fetch_skills_error';
export var ERROR_CODE_FETCH_RECENTS = 'fetch_recents_error';
export var ERROR_CODE_EXECUTE_INTEGRATION = 'execute_integrations_error';
export var ERROR_CODE_CREATE_ANNOTATION = 'create_annotation_error';
export var ERROR_CODE_CREATE_COMMENT = 'create_comment_error';
export var ERROR_CODE_CREATE_TASK = 'create_task_error';
export var ERROR_CODE_CREATE_TASK_LINK = 'create_task_link_error';
export var ERROR_CODE_CREATE_TASK_ASSIGNMENT = 'create_task_assignment_error';
export var ERROR_CODE_CREATE_TASK_COLLABORATOR = 'create_task_collaborator_error';
export var ERROR_CODE_CREATE_FOLDER = 'create_folder_error';
export var ERROR_CODE_CREATE_METADATA = 'create_metadata_error';
export var ERROR_CODE_DELETE_APP_ACTIVITY = 'delete_app_activity_error';
export var ERROR_CODE_DELETE_ANNOTATION = 'delete_annotation_error';
export var ERROR_CODE_EDIT_ANNOTATION = 'edit_annotation_error';
export var ERROR_CODE_DELETE_COMMENT = 'delete_comment_error';
export var ERROR_CODE_DELETE_TASK = 'delete_task_error';
export var ERROR_CODE_DELETE_TASK_ASSIGNMENT = 'delete_task_assignment_error';
export var ERROR_CODE_DELETE_TASK_COLLABORATOR = 'delete_task_collaborator_error';
export var ERROR_CODE_DELETE_ITEM = 'delete_item_error';
export var ERROR_CODE_DELETE_METADATA = 'delete_metadata_error';
export var ERROR_CODE_DELETE_VERSION = 'delete_version_error';
export var ERROR_CODE_GROUP_EXCEEDS_LIMIT = 'group_exceeds_limit';
export var ERROR_CODE_PROMOTE_VERSION = 'promote_version_error';
export var ERROR_CODE_RESTORE_VERSION = 'restore_version_error';
export var ERROR_CODE_UPDATE_TASK = 'update_task_error';
export var ERROR_CODE_UPDATE_TASK_ASSIGNMENT = 'update_task_assignment_error';
export var ERROR_CODE_UPDATE_TASK_COLLABORATOR = 'update_task_collaborator_error';
export var ERROR_CODE_UPDATE_COMMENT = 'update_comment_error';
export var ERROR_CODE_UPDATE_SKILLS = 'update_skills_error';
export var ERROR_CODE_UPDATE_METADATA = 'update_metadata_error';
export var ERROR_CODE_GET_DOWNLOAD_URL = 'get_download_url_error';
export var ERROR_CODE_RENAME_ITEM = 'rename_item_error';
export var ERROR_CODE_SHARE_ITEM = 'share_item_error';
export var ERROR_CODE_SET_FILE_DESCRIPTION = 'set_file_description_error';
export var ERROR_CODE_UPLOAD = 'upload_error';
export var ERROR_CODE_UNEXPECTED_EXCEPTION = 'unexpected_exception_error';
export var ERROR_CODE_SEARCH = 'search_error';
export var ERROR_CODE_METADATA_QUERY = 'metadata_query_error';
export var ERROR_CODE_UNKNOWN = 'unknown_error';
/* ------------------ Origins ---------------------- */

export var ORIGIN_CONTENT_PREVIEW = 'content_preview';
export var ORIGIN_CONTENT_SIDEBAR = 'content_sidebar';
export var ORIGIN_ACTIVITY_SIDEBAR = 'activity_sidebar';
export var ORIGIN_DETAILS_SIDEBAR = 'details_sidebar';
export var ORIGIN_METADATA_SIDEBAR = 'metadata_sidebar';
export var ORIGIN_SKILLS_SIDEBAR = 'skills_sidebar';
export var ORIGIN_VERSIONS_SIDEBAR = 'versions_sidebar';
export var ORIGIN_PREVIEW = 'preview';
export var ORIGIN_CONTENT_EXPLORER = 'content_explorer';
export var ORIGIN_OPEN_WITH = 'open_with';
/* ------------------ Metric Types ---------------------- */

export var METRIC_TYPE_PREVIEW = 'preview_metric';
export var METRIC_TYPE_ELEMENTS_PERFORMANCE_METRIC = 'elements_performance_metric';
export var METRIC_TYPE_ELEMENTS_LOAD_METRIC = 'elements_load_metric';
/* ------------------ Error Keys ---------------------- */

export var IS_ERROR_DISPLAYED = 'isErrorDisplayed'; // used to determine if user will see some error state or message

/* ------------- Representation Hints ------------------- */

var X_REP_HINT_BASE = '[3d][pdf][text][mp3][json]';
var X_REP_HINT_DOC_THUMBNAIL = '[jpg?dimensions=1024x1024&paged=false]';
var X_REP_HINT_IMAGE = '[jpg?dimensions=2048x2048,png?dimensions=2048x2048]';
var X_REP_HINT_VIDEO_DASH = '[dash,mp4][filmstrip]';
var X_REP_HINT_VIDEO_MP4 = '[mp4]';
var videoHint = Browser.canPlayDash() ? X_REP_HINT_VIDEO_DASH : X_REP_HINT_VIDEO_MP4;
export var X_REP_HINTS = "".concat(X_REP_HINT_BASE).concat(X_REP_HINT_DOC_THUMBNAIL).concat(X_REP_HINT_IMAGE).concat(videoHint);
/* ------------------ Uploader ---------------------- */

export var DEFAULT_RETRY_DELAY_MS = 3000;
export var MS_IN_S = 1000;
/* ------------------ Colors ---------------------- */

export var COLOR_RED = '#c82341';
export var COLOR_999 = '#999';
export var COLOR_WHITE = '#fff';
/* ------------------ Skills ---------------------- */

export var SKILLS_TRANSCRIPT = 'transcript';
export var SKILLS_KEYWORD = 'keyword';
export var SKILLS_TIMELINE = 'timeline';
export var SKILLS_FACE = 'face';
export var SKILLS_STATUS = 'status';
export var SKILLS_ERROR_INVOCATIONS = 'skills_invocations_error';
export var SKILLS_ERROR_BILLING = 'skills_billing_error';
export var SKILLS_ERROR_EXTERNAL_AUTH = 'skills_external_auth_error';
export var SKILLS_ERROR_UNKNOWN = 'skills_unknown_error';
export var SKILLS_ERROR_INVALID_FILE_SIZE = 'skills_invalid_file_size_error';
export var SKILLS_ERROR_INVALID_FILE_FORMAT = 'skills_invalid_file_format_error';
export var SKILLS_ERROR_FILE_PROCESSING = 'skills_file_processing_error';
export var SKILLS_STATUS_PENDING = 'skills_pending_status';
export var SKILLS_STATUS_INVOKED = 'skills_invoked_status';
/* ------------------ File Extensions ---------------------- */

export var FILE_EXTENSION_BOX_NOTE = 'boxnote';
export var FILE_EXTENSION_GOOGLE_DOC = 'gdoc';
export var FILE_EXTENSION_GOOGLE_SHEET = 'gsheet';
export var FILE_EXTENSION_GOOGLE_SLIDE = 'gslides';
export var FILE_EXTENSION_GOOGLE_SLIDE_LEGACY = 'gslide';
/* ------------------ X-Rep-Hints ---------------------- */
// available dimensions for JPG: "32x32", "94x94", "160x160", "320x320", "1024x1024", "2048x2048"

export var X_REP_HINT_JPG_DIMENSIONS_DEFAULT = '1024x1024'; // available dimensions for PNG: "1024x1024", "2048x2048"

export var X_REP_HINT_PNG_DIMENSIONS_DEFAULT = '1024x1024'; // If unable to fetch jpg thumbnail, grab png rep of first page. Certain file types do not have a thumbnail rep but do have a first page rep.
// Get the PDF rep as well, which ensures that the Preview SDK loads linearized reps for customers with PDF optimization enabled.
// Get the text rep as well, which ensures that large text files load in the Preview SDK.

export var X_REP_HINT_HEADER_DIMENSIONS_DEFAULT = "[jpg?dimensions=".concat(X_REP_HINT_JPG_DIMENSIONS_DEFAULT, "&paged=false,png?dimensions=").concat(X_REP_HINT_PNG_DIMENSIONS_DEFAULT, "][pdf][text]");
/* ------------------ Representations Response ---------- */

export var REPRESENTATIONS_RESPONSE_ERROR = 'error';
export var REPRESENTATIONS_RESPONSE_NONE = 'none';
export var REPRESENTATIONS_RESPONSE_PENDING = 'pending';
export var REPRESENTATIONS_RESPONSE_SUCCESS = 'success';
export var REPRESENTATIONS_RESPONSE_VIEWABLE = 'viewable';
/* ------------------ Sidebar View ---------------------- */

export var SIDEBAR_VIEW_SKILLS = 'skills';
export var SIDEBAR_VIEW_DETAILS = 'details';
export var SIDEBAR_VIEW_METADATA = 'metadata';
export var SIDEBAR_VIEW_ACTIVITY = 'activity';
export var SIDEBAR_VIEW_VERSIONS = 'versions';
/* ------------------ HTTP Requests ---------------------- */

export var HTTP_GET = 'GET';
export var HTTP_POST = 'POST';
export var HTTP_PUT = 'PUT';
export var HTTP_DELETE = 'DELETE';
export var HTTP_OPTIONS = 'OPTIONS';
export var HTTP_HEAD = 'HEAD';
/* ------------------ HTTP Codes  ---------------------- */

export var HTTP_STATUS_CODE_BAD_REQUEST = 400;
export var HTTP_STATUS_CODE_UNAUTHORIZED = 401;
export var HTTP_STATUS_CODE_FORBIDDEN = 403;
export var HTTP_STATUS_CODE_NOT_FOUND = 404;
export var HTTP_STATUS_CODE_CONFLICT = 409;
export var HTTP_STATUS_CODE_RATE_LIMIT = 429;
export var HTTP_STATUS_CODE_INTERNAL_SERVER_ERROR = 500;
export var HTTP_STATUS_CODE_NOT_IMPLEMENTED = 501;
export var HTTP_STATUS_CODE_BAD_GATEWAY = 502;
export var HTTP_STATUS_CODE_SERVICE_UNAVAILABLE = 503;
export var HTTP_STATUS_CODE_GATEWAY_TIMEOUT = 504;
/* ------------------ Version Action Types  ---------------------- */

export var VERSION_DELETE_ACTION = 'delete';
export var VERSION_PROMOTE_ACTION = 'promote';
export var VERSION_RESTORE_ACTION = 'restore';
export var VERSION_UPLOAD_ACTION = 'upload';
/* ------------------ Version Retention Policy Action Types  ---------------------- */

export var VERSION_RETENTION_DELETE_ACTION = 'permanently_delete';
export var VERSION_RETENTION_REMOVE_ACTION = 'remove_retention';
export var VERSION_RETENTION_INDEFINITE = 'indefinite';
/* ------------------ Placeholder Feed Items ------------------------- */

export var PLACEHOLDER_USER = {
  type: 'user',
  id: '2',
  name: ''
};
export var FILE_REQUEST_NAME = 'File Request';
/* ------------------ Open With ------------------------- */

export var APP_INTEGRATION = 'app_integration';
export var BOX_EDIT_INTEGRATION_ID = '1338';
export var BOX_EDIT_SFC_INTEGRATION_ID = '13418';
export var OPEN_WITH_BUTTON_ICON_SIZE = 26;
export var OPEN_WITH_MENU_ITEM_ICON_SIZE = 30;
/* ------------------ Task Statuses ----------------- */

export var TASK_NEW_APPROVED = 'APPROVED';
export var TASK_NEW_COMPLETED = 'COMPLETED';
export var TASK_NEW_NOT_STARTED = 'NOT_STARTED';
export var TASK_NEW_IN_PROGRESS = 'IN_PROGRESS';
export var TASK_NEW_REJECTED = 'REJECTED';
/* ------------------ Task types ----------------- */

export var TASK_TYPE_GENERAL = 'GENERAL';
export var TASK_TYPE_APPROVAL = 'APPROVAL';
/* ----------------- Task Completion Rules ------------ */

export var TASK_COMPLETION_RULE_ALL = 'ALL_ASSIGNEES';
export var TASK_COMPLETION_RULE_ANY = 'ANY_ASSIGNEE';
/* ----------------- Task Edit modes ---------------- */

export var TASK_EDIT_MODE_CREATE = 'CREATE';
export var TASK_EDIT_MODE_EDIT = 'EDIT';
/* ----------------- Task Validation ---------------- */

export var TASK_MAX_GROUP_ASSIGNEES = 250;
/* ----------------- Theme ---------------------------*/

export var THEME_VERY_DARK = 'vDark';
export var THEME_DARK = 'dark';
export var THEME_MID_DARK = 'midDark';
export var THEME_MIDTONE = 'midTone';
export var THEME_MID_LIGHT = 'midLight';
export var THEME_VERY_LIGHT = 'vLight';
/* ------------------ Keyboard Events ----------------- */

export var KEYS = {
  arrowDown: 'ArrowDown',
  arrowLeft: 'ArrowLeft',
  arrowRight: 'ArrowRight',
  arrowUp: 'ArrowUp',
  backspace: 'Backspace',
  enter: 'Enter',
  escape: 'Escape',
  space: ' '
};
/* ----------------- Other ----------------------- */

export var ONE_HOUR_MS = 3600000; // 60 * 60 * 1000
//# sourceMappingURL=constants.js.map