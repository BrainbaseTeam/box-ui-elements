function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 
 * @file Main entry point for the box api
 * @author Box
 */
import Cache from '../utils/Cache';
import ChunkedUploadAPI from './uploads/MultiputUpload';
import PlainUploadAPI from './uploads/PlainUpload';
import FolderAPI from './Folder';
import FileAPI from './File';
import WebLinkAPI from './WebLink';
import SearchAPI from './Search';
import RecentsAPI from './Recents';
import VersionsAPI from './Versions';
import CommentsAPI from './Comments';
import TasksNewAPI from './tasks/TasksNew';
import TaskCollaboratorsAPI from './tasks/TaskCollaborators';
import TaskLinksAPI from './tasks/TaskLinks';
import FileAccessStatsAPI from './FileAccessStats';
import MarkerBasedGroupsAPI from './MarkerBasedGroups';
import MarkerBasedUsersAPI from './MarkerBasedUsers';
import GroupsAPI from './Groups';
import UsersAPI from './Users';
import MetadataAPI from './Metadata';
import FileCollaboratorsAPI from './FileCollaborators';
import FileCollaborationsAPI from './FileCollaborations';
import FolderCollaborationsAPI from './FolderCollaborations';
import CollaborationsAPI from './Collaborations';
import FeedAPI from './Feed';
import AppIntegrationsAPI from './AppIntegrations';
import AnnotationsAPI from './Annotations';
import OpenWithAPI from './OpenWith';
import MetadataQueryAPI from './MetadataQuery';
import BoxEditAPI from './box-edit';
import { DEFAULT_HOSTNAME_API, DEFAULT_HOSTNAME_UPLOAD, TYPE_FOLDER, TYPE_FILE, TYPE_WEBLINK } from '../constants';

var APIFactory =
/*#__PURE__*/
function () {
  /**
   * @property {*}
   */

  /**
   * @property {FileAPI}
   */

  /**
   * @property {WebLink}
   */

  /**
   * @property {FolderAPI}
   */

  /**
   * @property {PlainUploadAPI}
   */

  /**
   * @property {ChunkedUploadAPI}
   */

  /**
   * @property {SearchAPI}
   */

  /**
   * @property {RecentsAPI}
   */

  /**
   * @property {VersionsAPI}
   */

  /**
   * @property {CommentsAPI}
   */

  /**
   * @property {TasksNewAPI}
   */

  /**
   * @property {TaskCollaboratorsAPI}
   */

  /**
   * @property {TaskLinksAPI}
   */

  /*
   * @property {FileAccessStatsAPI}
   */

  /*
   * @property {MarkerBasedGroupsAPI}
   */

  /*
   * @property {MarkerBasedUsersAPI}
   */

  /**
   * @property {GroupsAPI}
   */

  /*
   * @property {UsersAPI}
   */

  /*
   * @property {MetadataAPI}
   */

  /**
   * @property {FileCollaboratorsAPI}
   */

  /**
   * @property {FileCollaborationsAPI}
   */

  /**
   * @property {FolderCollaborationsAPI}
   */

  /**
   * @property {CollaborationsAPI}
   */

  /**
   * @property {FeedAPI}
   */

  /**
   * @property {OpenWithAPI}
   */

  /**
   * @property {AppIntegrationsAPI}
   */

  /**
   * @property {MetadataQueryAPI}
   */

  /** @property {BoxEditAPI}
   *
   */

  /**
   * @property {AnnotationsAPI}
   */

  /**
   * [constructor]
   *
   * @param {Object} options
   * @param {string} options.id - item id
   * @param {string|function} options.token - Auth token
   * @param {string} [options.sharedLink] - Shared link
   * @param {string} [options.sharedLinkPassword] - Shared link password
   * @param {string} [options.apiHost] - Api host
   * @param {string} [options.uploadHost] - Upload host name
   * @return {API} Api instance
   */
  function APIFactory(options) {
    _classCallCheck(this, APIFactory);

    this.options = _objectSpread({}, options, {
      apiHost: options.apiHost || DEFAULT_HOSTNAME_API,
      uploadHost: options.uploadHost || DEFAULT_HOSTNAME_UPLOAD,
      cache: options.cache || new Cache(),
      language: options.language
    });
  }
  /**
   * [destructor]
   *
   * @param {boolean} destroyCache - true to destroy cache
   * @return {void}
   */


  _createClass(APIFactory, [{
    key: "destroy",
    value: function destroy() {
      var destroyCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.fileAPI) {
        this.fileAPI.destroy();
        delete this.fileAPI;
      }

      if (this.weblinkAPI) {
        this.weblinkAPI.destroy();
        delete this.weblinkAPI;
      }

      if (this.plainUploadAPI) {
        this.plainUploadAPI.destroy();
        delete this.plainUploadAPI;
      }

      if (this.chunkedUploadAPI) {
        this.chunkedUploadAPI.destroy();
        delete this.chunkedUploadAPI;
      }

      if (this.folderAPI) {
        this.folderAPI.destroy();
        delete this.folderAPI;
      }

      if (this.searchAPI) {
        this.searchAPI.destroy();
        delete this.searchAPI;
      }

      if (this.recentsAPI) {
        this.recentsAPI.destroy();
        delete this.recentsAPI;
      }

      if (this.versionsAPI) {
        this.versionsAPI.destroy();
        delete this.versionsAPI;
      }

      if (this.fileAccessStatsAPI) {
        this.fileAccessStatsAPI.destroy();
        delete this.fileAccessStatsAPI;
      }

      if (this.tasksNewAPI) {
        this.tasksNewAPI.destroy();
        delete this.tasksNewAPI;
      }

      if (this.taskCollaboratorsAPI) {
        this.taskCollaboratorsAPI.destroy();
        delete this.taskCollaboratorsAPI;
      }

      if (this.taskLinksAPI) {
        this.taskLinksAPI.destroy();
        delete this.taskLinksAPI;
      }

      if (this.commentsAPI) {
        this.commentsAPI.destroy();
        delete this.commentsAPI;
      }

      if (this.markerBasedGroupsAPI) {
        this.markerBasedGroupsAPI.destroy();
        delete this.markerBasedGroupsAPI;
      }

      if (this.markerBasedUsersAPI) {
        this.markerBasedUsersAPI.destroy();
        delete this.markerBasedUsersAPI;
      }

      if (this.groupsAPI) {
        this.groupsAPI.destroy();
        delete this.groupsAPI;
      }

      if (this.usersAPI) {
        this.usersAPI.destroy();
        delete this.usersAPI;
      }

      if (this.metadataAPI) {
        this.metadataAPI.destroy();
        delete this.metadataAPI;
      }

      if (this.fileCollaboratorsAPI) {
        this.fileCollaboratorsAPI.destroy();
        delete this.fileCollaboratorsAPI;
      }

      if (this.fileCollaborationsAPI) {
        this.fileCollaborationsAPI.destroy();
        delete this.fileCollaborationsAPI;
      }

      if (this.folderCollaborationsAPI) {
        this.folderCollaborationsAPI.destroy();
        delete this.folderCollaborationsAPI;
      }

      if (this.collaborationsAPI) {
        this.collaborationsAPI.destroy();
        delete this.collaborationsAPI;
      }

      if (this.appIntegrationsAPI) {
        this.appIntegrationsAPI.destroy();
        delete this.appIntegrationsAPI;
      }

      if (this.metadataQueryAPI) {
        this.metadataQueryAPI.destroy();
        delete this.metadataQueryAPI;
      }

      if (this.openWithAPI) {
        this.openWithAPI.destroy();
        delete this.openWithAPI;
      }

      if (this.annotationsAPI) {
        this.annotationsAPI.destroy();
        delete this.annotationsAPI;
      }

      if (destroyCache) {
        this.options.cache = new Cache();
      }
    }
    /**
     * Gets the cache instance
     *
     * @return {Cache} cache instance
     */

  }, {
    key: "getCache",
    value: function getCache() {
      return this.options.cache;
    }
    /**
     * Returns the API based on type of item
     *
     * @private
     * @param {String} type - item type
     * @return {ItemAPI} api
     */

  }, {
    key: "getAPI",
    value: function getAPI(type) {
      var api;

      switch (type) {
        case TYPE_FOLDER:
          api = this.getFolderAPI();
          break;

        case TYPE_FILE:
          api = this.getFileAPI();
          break;

        case TYPE_WEBLINK:
          api = this.getWebLinkAPI();
          break;

        default:
          throw new Error('Unknown Type!');
      }

      return api;
    }
    /**
     * API for file
     *
     * @return {FileAPI} FileAPI instance
     */

  }, {
    key: "getFileAPI",
    value: function getFileAPI() {
      var shouldDestroy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (shouldDestroy) {
        this.destroy();
      }

      this.fileAPI = new FileAPI(this.options);
      return this.fileAPI;
    }
    /**
     * API for web links
     *
     * @return {WebLinkAPI} WebLinkAPI instance
     */

  }, {
    key: "getWebLinkAPI",
    value: function getWebLinkAPI() {
      this.destroy();
      this.weblinkAPI = new WebLinkAPI(this.options);
      return this.weblinkAPI;
    }
    /**
     * API for plain uploads
     *
     * @return {UploadAPI} UploadAPI instance
     */

  }, {
    key: "getPlainUploadAPI",
    value: function getPlainUploadAPI() {
      this.destroy();
      this.plainUploadAPI = new PlainUploadAPI(this.options);
      return this.plainUploadAPI;
    }
    /**
     * API for chunked uploads
     *
     * @return {UploadAPI} UploadAPI instance
     */

  }, {
    key: "getChunkedUploadAPI",
    value: function getChunkedUploadAPI() {
      this.destroy();
      this.chunkedUploadAPI = new ChunkedUploadAPI(this.options);
      return this.chunkedUploadAPI;
    }
    /**
     * API for folder
     *
     * @return {FolderAPI} FolderAPI instance
     */

  }, {
    key: "getFolderAPI",
    value: function getFolderAPI() {
      this.destroy();
      this.folderAPI = new FolderAPI(this.options);
      return this.folderAPI;
    }
    /**
     * API for search
     *
     * @return {SearchAPI} SearchAPI instance
     */

  }, {
    key: "getSearchAPI",
    value: function getSearchAPI() {
      this.destroy();
      this.searchAPI = new SearchAPI(this.options);
      return this.searchAPI;
    }
    /**
     * API for recents
     *
     * @return {RecentsAPI} RecentsAPI instance
     */

  }, {
    key: "getRecentsAPI",
    value: function getRecentsAPI() {
      this.destroy();
      this.recentsAPI = new RecentsAPI(this.options);
      return this.recentsAPI;
    }
    /**
     * API for metadata
     *
     * @param {boolean} shouldDestroy - true if the factory should destroy before returning the call
     * @return {MetadataAPI} MetadataAPI instance
     */

  }, {
    key: "getMetadataAPI",
    value: function getMetadataAPI(shouldDestroy) {
      if (shouldDestroy) {
        this.destroy();
      }

      this.metadataAPI = new MetadataAPI(this.options);
      return this.metadataAPI;
    }
    /**
     * API for versions
     *
     * @param {boolean} shouldDestroy - true if the factory should destroy before returning the call
     * @return {VersionsAPI} VersionsAPI instance
     */

  }, {
    key: "getVersionsAPI",
    value: function getVersionsAPI(shouldDestroy) {
      if (shouldDestroy) {
        this.destroy();
      }

      this.versionsAPI = new VersionsAPI(this.options);
      return this.versionsAPI;
    }
    /**
     * API for comments
     *
     * @param {boolean} shouldDestroy - true if the factory should destroy before returning the call
     * @return {CommentsAPI} CommentsAPI instance
     */

  }, {
    key: "getCommentsAPI",
    value: function getCommentsAPI(shouldDestroy) {
      if (shouldDestroy) {
        this.destroy();
      }

      this.commentsAPI = new CommentsAPI(this.options);
      return this.commentsAPI;
    }
    /**
     * API for tasks
     *
     * @param {boolean} shouldDestroy - true if the factory should destroy before returning the call
     * @return {TasksAPI} TaskAssignmentsAPI instance
     */

  }, {
    key: "getTasksNewAPI",
    value: function getTasksNewAPI(shouldDestroy) {
      if (shouldDestroy) {
        this.destroy();
      }

      this.tasksNewAPI = new TasksNewAPI(this.options);
      return this.tasksNewAPI;
    }
    /**
     * API for taskCollaborators
     *
     * @param {boolean} shouldDestroy - true if the factory should destroy before returning the call
     * @return {TaskCollaboratorsAPI} TaskCollaboratorsAPI instance
     */

  }, {
    key: "getTaskCollaboratorsAPI",
    value: function getTaskCollaboratorsAPI(shouldDestroy) {
      if (shouldDestroy) {
        this.destroy();
      }

      this.taskCollaboratorsAPI = new TaskCollaboratorsAPI(this.options);
      return this.taskCollaboratorsAPI;
    }
    /**
     * API for taskLinks
     *
     * @param {boolean} shouldDestroy - true if the factory should destroy before returning the call
     * @return {TasksAPI} TaskLinksAPI instance
     */

  }, {
    key: "getTaskLinksAPI",
    value: function getTaskLinksAPI(shouldDestroy) {
      if (shouldDestroy) {
        this.destroy();
      }

      this.taskLinksAPI = new TaskLinksAPI(this.options);
      return this.taskLinksAPI;
    }
    /**
     * API for file access stats
     *
     * @param {boolean} shouldDestroy - true if the factory should destroy before returning the call
     * @return {FileAccessStatsAPI} FileAccessStatsAPI instance
     */

  }, {
    key: "getFileAccessStatsAPI",
    value: function getFileAccessStatsAPI(shouldDestroy) {
      if (shouldDestroy) {
        this.destroy();
      }

      this.fileAccessStatsAPI = new FileAccessStatsAPI(this.options);
      return this.fileAccessStatsAPI;
    }
    /**
     * API for file collaborators
     *
     * @param {boolean} shouldDestroy - true if the factory should destroy before returning the call
     * @return {FileCollaboratorsAPI} FileCollaboratorsAPI instance
     */

  }, {
    key: "getFileCollaboratorsAPI",
    value: function getFileCollaboratorsAPI(shouldDestroy) {
      if (shouldDestroy) {
        this.destroy();
      }

      this.fileCollaboratorsAPI = new FileCollaboratorsAPI(this.options);
      return this.fileCollaboratorsAPI;
    }
    /**
     * API for file collaborations
     *
     * This is different from the FileCollaboratorsAPI! See ./FileCollaborations for more information.
     *
     * @param {boolean} shouldDestroy - true if the factory should destroy before returning the call
     * @return {FileCollaborationsAPI} FileCollaborationsAPI instance
     */

  }, {
    key: "getFileCollaborationsAPI",
    value: function getFileCollaborationsAPI(shouldDestroy) {
      if (shouldDestroy) {
        this.destroy();
      }

      this.fileCollaborationsAPI = new FileCollaborationsAPI(this.options);
      return this.fileCollaborationsAPI;
    }
    /**
     * API for folder collaborations
     *
     * @param {boolean} shouldDestroy - true if the factory should destroy before returning the call
     * @return {FolderCollaborationsAPI} FolderCollaborationsAPI instance
     */

  }, {
    key: "getFolderCollaborationsAPI",
    value: function getFolderCollaborationsAPI(shouldDestroy) {
      if (shouldDestroy) {
        this.destroy();
      }

      this.folderCollaborationsAPI = new FolderCollaborationsAPI(this.options);
      return this.folderCollaborationsAPI;
    }
    /**
     * API for collaborations
     *
     * This is different from the other collaboration/collaborator APIs!
     * See ./Collaborations for more information.
     *
     * @param {boolean} shouldDestroy - true if the factory should destroy before returning the call
     * @return {CollaborationsAPI} CollaborationsAPI instance
     */

  }, {
    key: "getCollaborationsAPI",
    value: function getCollaborationsAPI(shouldDestroy) {
      if (shouldDestroy) {
        this.destroy();
      }

      this.collaborationsAPI = new CollaborationsAPI(this.options);
      return this.collaborationsAPI;
    }
    /**
     * API for Groups (marker-based paging)
     *
     * @param {boolean} shouldDestroy - true if the factory should destroy before returning the call
     * @return {MarkerBasedGroupsAPI} MarkerBasedGroupsAPI instance
     */

  }, {
    key: "getMarkerBasedGroupsAPI",
    value: function getMarkerBasedGroupsAPI(shouldDestroy) {
      if (shouldDestroy) {
        this.destroy();
      }

      this.markerBasedGroupsAPI = new MarkerBasedGroupsAPI(this.options);
      return this.markerBasedGroupsAPI;
    }
    /**
     * API for Users (marker-based paging)
     *
     * @param {boolean} shouldDestroy - true if the factory should destroy before returning the call
     * @return {MarkerBasedUsersAPI} MarkerBasedUsersAPI instance
     */

  }, {
    key: "getMarkerBasedUsersAPI",
    value: function getMarkerBasedUsersAPI(shouldDestroy) {
      if (shouldDestroy) {
        this.destroy();
      }

      this.markerBasedUsersAPI = new MarkerBasedUsersAPI(this.options);
      return this.markerBasedUsersAPI;
    }
    /**
     * API for Groups (offset-based paging)
     *
     * @param {boolean} shouldDestroy - true if the factory should destroy before returning the call
     * @return {GroupsAPI} GroupsAPI instance
     */

  }, {
    key: "getGroupsAPI",
    value: function getGroupsAPI(shouldDestroy) {
      if (shouldDestroy) {
        this.destroy();
      }

      this.groupsAPI = new GroupsAPI(this.options);
      return this.groupsAPI;
    }
    /**
     * API for Users (offset-based paging)
     *
     * @param {boolean} shouldDestroy - true if the factory should destroy before returning the call
     * @return {UsersAPI} UsersAPI instance
     */

  }, {
    key: "getUsersAPI",
    value: function getUsersAPI(shouldDestroy) {
      if (shouldDestroy) {
        this.destroy();
      }

      this.usersAPI = new UsersAPI(this.options);
      return this.usersAPI;
    }
    /**
     * API for Feed Items
     *
     * @param {boolean} shouldDestroy - true if the factory should destroy before returning the call
     * @return {FeedAPI} FeedAPI instance
     */

  }, {
    key: "getFeedAPI",
    value: function getFeedAPI(shouldDestroy) {
      if (shouldDestroy) {
        this.destroy();
      }

      this.feedItemsAPI = new FeedAPI(this.options);
      return this.feedItemsAPI;
    }
    /**
     * API for Open With
     *
     * @param {boolean} shouldDestroy - true if the factory should destroy before returning the call
     * @return {OpenWithAPI} OpenWithAPI instance
     */

  }, {
    key: "getOpenWithAPI",
    value: function getOpenWithAPI(shouldDestroy) {
      if (shouldDestroy) {
        this.destroy();
      }

      this.openWithAPI = new OpenWithAPI(this.options);
      return this.openWithAPI;
    }
    /**
     * API for the App Integrations endpoint
     *
     * @param {boolean} shouldDestroy - true if the factory should destroy before returning the call
     * @return {AppIntegrationsAPI} AppIntegrationsAPI instance
     */

  }, {
    key: "getAppIntegrationsAPI",
    value: function getAppIntegrationsAPI(shouldDestroy) {
      if (shouldDestroy) {
        this.destroy();
      }

      this.appIntegrationsAPI = new AppIntegrationsAPI(this.options);
      return this.appIntegrationsAPI;
    }
    /**
     * API for Metadata Query
     *
     * @param {boolean} shouldDestroy - true if the factory should destroy before returning the call
     * @return {MetadataQuery} MetadataQuery instance
     */

  }, {
    key: "getMetadataQueryAPI",
    value: function getMetadataQueryAPI() {
      var shouldDestroy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (shouldDestroy) {
        this.destroy();
      }

      this.metadataQueryAPI = new MetadataQueryAPI(this.options);
      return this.metadataQueryAPI;
    }
    /**
     * API for Box Edit
     *
     * @return {BoxEditAPI} BoxEditAPI instance
     */

  }, {
    key: "getBoxEditAPI",
    value: function getBoxEditAPI() {
      this.boxEditAPI = new BoxEditAPI();
      return this.boxEditAPI;
    }
    /**
     * API for Annotations
     *
     * @return {AnnotationsAPI} AnnotationsAPI instance
     */

  }, {
    key: "getAnnotationsAPI",
    value: function getAnnotationsAPI(shouldDestroy) {
      if (shouldDestroy) {
        this.destroy();
      }

      this.annotationsAPI = new AnnotationsAPI(this.options);
      return this.annotationsAPI;
    }
  }]);

  return APIFactory;
}();

export default APIFactory;
//# sourceMappingURL=APIFactory.js.map