function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Helper for activity feed API's
 * @author Box
 */
import uniqueId from 'lodash/uniqueId';
import noop from 'lodash/noop';
import { getBadItemError, getBadUserError, isUserCorrectableError } from '../utils/error';
import commonMessages from '../elements/common/messages';
import messages from './messages';
import { sortFeedItems } from '../utils/sorter';
import Base from './Base';
import AnnotationsAPI from './Annotations';
import CommentsAPI from './Comments';
import VersionsAPI from './Versions';
import TasksNewAPI from './tasks/TasksNew';
import GroupsAPI from './Groups';
import TaskCollaboratorsAPI from './tasks/TaskCollaborators';
import TaskLinksAPI from './tasks/TaskLinks';
import AppActivityAPI from './AppActivity';
import { ERROR_CODE_CREATE_TASK, ERROR_CODE_UPDATE_TASK, ERROR_CODE_GROUP_EXCEEDS_LIMIT, HTTP_STATUS_CODE_CONFLICT, IS_ERROR_DISPLAYED, TASK_NEW_APPROVED, TASK_NEW_COMPLETED, TASK_NEW_REJECTED, TASK_NEW_NOT_STARTED, TYPED_ID_FEED_PREFIX, TASK_MAX_GROUP_ASSIGNEES } from '../constants';
var TASK_NEW_INITIAL_STATUS = TASK_NEW_NOT_STARTED;
var TASK = 'task';

var Feed =
/*#__PURE__*/
function (_Base) {
  _inherits(Feed, _Base);

  /**
   * @property {AnnotationsAPI}
   */

  /**
   * @property {VersionsAPI}
   */

  /**
   * @property {CommentsAPI}
   */

  /**
   * @property {AppActivityAPI}
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

  /**
   * @property {BoxItem}
   */

  /**
   * @property {ElementsXhrError}
   */
  function Feed(options) {
    var _this;

    _classCallCheck(this, Feed);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Feed).call(this, options));

    _defineProperty(_assertThisInitialized(_this), "updateAnnotation", function (file, annotationId, text, permissions, successCallback, errorCallback) {
      if (!file.id) {
        throw getBadItemError();
      }

      _this.annotationsAPI = new AnnotationsAPI(_this.options);
      _this.file = file;
      _this.errorCallback = errorCallback;

      _this.updateFeedItem({
        message: text,
        isPending: true
      }, annotationId);

      _this.annotationsAPI.updateAnnotation(_this.file.id, annotationId, permissions, text, function (annotation) {
        _this.updateFeedItem(_objectSpread({}, annotation, {
          isPending: false
        }), annotationId);

        if (!_this.isDestroyed()) {
          successCallback(annotation);
        }
      }, function (e, code) {
        _this.updateCommentErrorCallback(e, code, annotationId);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateCommentErrorCallback", function (e, code, id) {
      _this.updateFeedItem(_this.createFeedError(messages.commentUpdateErrorMessage), id);

      _this.feedErrorCallback(true, e, code);
    });

    _defineProperty(_assertThisInitialized(_this), "deleteAnnotation", function (file, annotationId, permissions, successCallBack, errorCallback) {
      _this.annotationsAPI = new AnnotationsAPI(_this.options);

      if (!file.id) {
        throw getBadItemError();
      }

      _this.file = file;
      _this.errorCallback = errorCallback;

      _this.updateFeedItem({
        isPending: true
      }, annotationId);

      _this.annotationsAPI.deleteAnnotation(_this.file.id, annotationId, permissions, _this.deleteFeedItem.bind(_assertThisInitialized(_this), annotationId, successCallBack), function (error, code) {
        // Reusing comment error handler since annotations are treated as comments to user
        _this.deleteCommentErrorCallback(error, code, annotationId);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateTaskCollaborator", function (file, taskId, taskCollaboratorId, taskCollaboratorStatus, _successCallback, errorCallback) {
      if (!file.id) {
        throw getBadItemError();
      }

      _this.file = file;
      _this.errorCallback = errorCallback;

      _this.updateFeedItem({
        isPending: true
      }, taskId);

      var collaboratorsApi = new TaskCollaboratorsAPI(_this.options);

      _this.taskCollaboratorsAPI.push(collaboratorsApi);

      var taskCollaboratorPayload = {
        id: taskCollaboratorId,
        status: taskCollaboratorStatus
      };

      var handleError = function handleError(e, code) {
        var errorMessage;

        switch (taskCollaboratorStatus) {
          case TASK_NEW_APPROVED:
            errorMessage = messages.taskApproveErrorMessage;
            break;

          case TASK_NEW_COMPLETED:
            errorMessage = messages.taskCompleteErrorMessage;
            break;

          case TASK_NEW_REJECTED:
            errorMessage = messages.taskRejectErrorMessage;
            break;

          default:
            errorMessage = messages.taskCompleteErrorMessage;
        }

        _this.updateFeedItem(_this.createFeedError(errorMessage, messages.taskActionErrorTitle), taskId);

        _this.feedErrorCallback(true, e, code);
      };

      collaboratorsApi.updateTaskCollaborator({
        file: file,
        taskCollaborator: taskCollaboratorPayload,
        successCallback: function successCallback(taskCollab) {
          _this.updateTaskCollaboratorSuccessCallback(taskId, file, taskCollab, _successCallback, handleError);
        },
        errorCallback: handleError
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateTaskCollaboratorSuccessCallback", function (taskId, file, updatedCollaborator, _successCallback2, errorCallback) {
      _this.tasksNewAPI = new TasksNewAPI(_this.options);

      _this.tasksNewAPI.getTask({
        id: taskId,
        file: file,
        successCallback: function successCallback(task) {
          _this.updateFeedItem(_objectSpread({}, task, {
            isPending: false
          }), taskId);

          _successCallback2(updatedCollaborator);
        },
        errorCallback: errorCallback
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateTaskNew",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(file, task) {
        var successCallback,
            errorCallback,
            groupInfoPromises,
            groupCounts,
            hasAnyGroupCountExceeded,
            warning,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                successCallback = _args.length > 2 && _args[2] !== undefined ? _args[2] : noop;
                errorCallback = _args.length > 3 && _args[3] !== undefined ? _args[3] : noop;

                if (file.id) {
                  _context.next = 4;
                  break;
                }

                throw getBadItemError();

              case 4:
                _this.file = file;
                _this.errorCallback = errorCallback;
                _this.tasksNewAPI = new TasksNewAPI(_this.options);

                _this.updateFeedItem({
                  isPending: true
                }, task.id);

                _context.prev = 8;
                // create request for the size of each group by ID
                // TODO: use async/await for both creating and editing tasks
                groupInfoPromises = task.addedAssignees.filter(function (assignee) {
                  return assignee.item && assignee.item.type === 'group';
                }).map(function (assignee) {
                  return assignee.id;
                }).map(function (groupId) {
                  return new GroupsAPI(_this.options).getGroupCount({
                    file: file,
                    group: {
                      id: groupId
                    }
                  });
                });
                _context.next = 12;
                return Promise.all(groupInfoPromises);

              case 12:
                groupCounts = _context.sent;
                hasAnyGroupCountExceeded = groupCounts.some(function (groupInfo) {
                  return groupInfo.total_count > TASK_MAX_GROUP_ASSIGNEES;
                });
                warning = {
                  code: ERROR_CODE_GROUP_EXCEEDS_LIMIT,
                  type: 'warning'
                };

                if (!hasAnyGroupCountExceeded) {
                  _context.next = 18;
                  break;
                }

                _this.feedErrorCallback(false, warning, ERROR_CODE_GROUP_EXCEEDS_LIMIT);

                return _context.abrupt("return");

              case 18:
                _context.next = 20;
                return new Promise(function (resolve, reject) {
                  _this.tasksNewAPI.updateTaskWithDeps({
                    file: file,
                    task: task,
                    successCallback: resolve,
                    errorCallback: reject
                  });
                });

              case 20:
                _context.next = 22;
                return new Promise(function (resolve, reject) {
                  _this.tasksNewAPI.getTask({
                    file: file,
                    id: task.id,
                    successCallback: function successCallback(taskData) {
                      _this.updateFeedItem(_objectSpread({}, taskData, {
                        isPending: false
                      }), task.id);

                      resolve();
                    },
                    errorCallback: function errorCallback(e) {
                      _this.updateFeedItem({
                        isPending: false
                      }, task.id);

                      _this.feedErrorCallback(false, e, ERROR_CODE_UPDATE_TASK);

                      reject();
                    }
                  });
                });

              case 22:
                // everything succeeded, so call the passed in success callback
                if (!_this.isDestroyed()) {
                  successCallback();
                }

                _context.next = 29;
                break;

              case 25:
                _context.prev = 25;
                _context.t0 = _context["catch"](8);

                _this.updateFeedItem({
                  isPending: false
                }, task.id);

                _this.feedErrorCallback(false, _context.t0, ERROR_CODE_UPDATE_TASK);

              case 29:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[8, 25]]);
      }));

      return function (_x6, _x7) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "deleteComment", function (file, commentId, permissions, successCallback, errorCallback) {
      _this.commentsAPI = new CommentsAPI(_this.options);

      if (!file.id) {
        throw getBadItemError();
      }

      _this.file = file;
      _this.errorCallback = errorCallback;

      _this.updateFeedItem({
        isPending: true
      }, commentId);

      _this.commentsAPI.deleteComment({
        file: file,
        commentId: commentId,
        permissions: permissions,
        successCallback: _this.deleteFeedItem.bind(_assertThisInitialized(_this), commentId, successCallback),
        errorCallback: function errorCallback(e, code) {
          _this.deleteCommentErrorCallback(e, code, commentId);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "deleteCommentErrorCallback", function (e, code, commentId) {
      _this.updateFeedItem(_this.createFeedError(messages.commentDeleteErrorMessage), commentId);

      _this.feedErrorCallback(true, e, code);
    });

    _defineProperty(_assertThisInitialized(_this), "createTaskNew", function (file, currentUser, message, assignees, taskType, dueAt, completionRule, _successCallback3, errorCallback) {
      if (!file.id) {
        throw getBadItemError();
      }

      _this.file = file;
      _this.errorCallback = errorCallback;
      var uuid = uniqueId('task_');
      var dueAtString;

      if (dueAt) {
        var dueAtDate = new Date(dueAt);
        dueAtString = dueAtDate.toISOString();
      } // TODO: make pending task generator a function


      var pendingTask = {
        created_by: {
          type: 'task_collaborator',
          target: currentUser,
          id: uniqueId(),
          role: 'CREATOR',
          status: TASK_NEW_INITIAL_STATUS
        },
        completion_rule: completionRule,
        created_at: new Date().toISOString(),
        due_at: dueAtString,
        id: uuid,
        description: message,
        type: TASK,
        assigned_to: {
          entries: assignees.map(function (assignee) {
            return {
              id: uniqueId(),
              target: _objectSpread({}, assignee, {
                avatar_url: '',
                type: 'user'
              }),
              status: TASK_NEW_INITIAL_STATUS,
              permissions: {
                can_delete: false,
                can_update: false
              },
              role: 'ASSIGNEE',
              type: 'task_collaborator'
            };
          }),
          limit: 10,
          next_marker: null
        },
        permissions: {
          can_update: false,
          can_delete: false,
          can_create_task_collaborator: false,
          can_create_task_link: false
        },
        task_links: {
          entries: [{
            id: uniqueId(),
            type: 'task_link',
            target: _objectSpread({
              type: 'file'
            }, file),
            permissions: {
              can_delete: false,
              can_update: false
            }
          }],
          limit: 1,
          next_marker: null
        },
        task_type: taskType,
        status: TASK_NEW_NOT_STARTED
      };
      var taskPayload = {
        description: message,
        due_at: dueAtString,
        task_type: taskType,
        completion_rule: completionRule
      }; // create request for the size of each group by ID

      var groupInfoPromises = assignees.filter(function (assignee) {
        return (assignee.item && assignee.item.type) === 'group';
      }).map(function (assignee) {
        return assignee.id;
      }).map(function (groupId) {
        return new GroupsAPI(_this.options).getGroupCount({
          file: file,
          group: {
            id: groupId
          }
        });
      }); // Fetch each group size in parallel --> return an array of group sizes

      Promise.all(groupInfoPromises).then(function (groupCounts) {
        var hasAnyGroupCountExceeded = groupCounts.some(function (groupInfo) {
          return groupInfo.total_count > TASK_MAX_GROUP_ASSIGNEES;
        });
        var warning = {
          code: ERROR_CODE_GROUP_EXCEEDS_LIMIT,
          type: 'warning'
        };

        if (hasAnyGroupCountExceeded) {
          _this.feedErrorCallback(false, warning, ERROR_CODE_GROUP_EXCEEDS_LIMIT);

          return;
        }

        _this.tasksNewAPI = new TasksNewAPI(_this.options);

        _this.tasksNewAPI.createTaskWithDeps({
          file: file,
          task: taskPayload,
          assignees: assignees,
          successCallback: function successCallback(taskWithDepsData) {
            _this.addPendingItem(_this.file.id, currentUser, pendingTask);

            _this.updateFeedItem(_objectSpread({}, taskWithDepsData, {
              task_links: {
                entries: taskWithDepsData.task_links,
                next_marker: null,
                limit: 1
              },
              assigned_to: {
                entries: taskWithDepsData.assigned_to,
                next_marker: null,
                limit: taskWithDepsData.assigned_to.length
              },
              isPending: false
            }), uuid);

            _successCallback3(taskWithDepsData);
          },
          errorCallback: function errorCallback(e, code) {
            _this.feedErrorCallback(false, e, code);
          }
        });
      }).catch(function (error) {
        _this.feedErrorCallback(false, error, ERROR_CODE_CREATE_TASK);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "deleteTaskNew", function (file, task) {
      var successCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : noop;
      var errorCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;

      if (!file.id) {
        throw getBadItemError();
      }

      _this.file = file;
      _this.errorCallback = errorCallback;
      _this.tasksNewAPI = new TasksNewAPI(_this.options);

      _this.updateFeedItem({
        isPending: true
      }, task.id);

      _this.tasksNewAPI.deleteTask({
        file: file,
        task: task,
        successCallback: _this.deleteFeedItem.bind(_assertThisInitialized(_this), task.id, successCallback),
        errorCallback: function errorCallback(e, code) {
          _this.updateFeedItem(_this.createFeedError(messages.taskDeleteErrorMessage), task.id);

          _this.feedErrorCallback(true, e, code);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "deleteFeedItem", function (id) {
      var successCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

      var cachedItems = _this.getCachedItems(_this.file.id);

      if (cachedItems) {
        var _feedItems2 = cachedItems.items.filter(function (feedItem) {
          return feedItem.id !== id;
        });

        _this.setCachedItems(_this.file.id, _feedItems2);

        if (!_this.isDestroyed()) {
          successCallback(id);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "feedErrorCallback", function () {
      var hasError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var e = arguments.length > 1 ? arguments[1] : undefined;
      var code = arguments.length > 2 ? arguments[2] : undefined;

      if (hasError) {
        _this.errors.push(_objectSpread({}, e, {
          code: code
        }));
      }

      if (!_this.isDestroyed() && _this.errorCallback) {
        _this.errorCallback(e, code, _defineProperty({
          error: e
        }, IS_ERROR_DISPLAYED, hasError));
      }

      console.error(e); // eslint-disable-line no-console
    });

    _defineProperty(_assertThisInitialized(_this), "addPendingItem", function (id, currentUser, itemBase) {
      if (!currentUser) {
        throw getBadUserError();
      }

      var date = new Date().toISOString();

      var pendingFeedItem = _objectSpread({
        created_at: date,
        created_by: currentUser,
        modified_at: date,
        isPending: true
      }, itemBase);

      var cachedItems = _this.getCachedItems(_this.file.id);

      var feedItems = cachedItems ? cachedItems.items : [];
      var feedItemsWithPendingItem = [].concat(_toConsumableArray(feedItems), [pendingFeedItem]);

      _this.setCachedItems(id, feedItemsWithPendingItem);

      return pendingFeedItem;
    });

    _defineProperty(_assertThisInitialized(_this), "createCommentSuccessCallback", function (commentData, id, successCallback) {
      var _commentData$message = commentData.message,
          message = _commentData$message === void 0 ? '' : _commentData$message,
          _commentData$tagged_m = commentData.tagged_message,
          tagged_message = _commentData$tagged_m === void 0 ? '' : _commentData$tagged_m; // Comment component uses tagged_message only

      commentData.tagged_message = tagged_message || message;

      _this.updateFeedItem(_objectSpread({}, commentData, {
        isPending: false
      }), id);

      if (!_this.isDestroyed()) {
        successCallback(commentData);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "createCommentErrorCallback", function (e, code, id) {
      var errorMessage = e.status === HTTP_STATUS_CODE_CONFLICT ? messages.commentCreateConflictMessage : messages.commentCreateErrorMessage;

      _this.updateFeedItem(_this.createFeedError(errorMessage), id);

      _this.feedErrorCallback(false, e, code);
    });

    _defineProperty(_assertThisInitialized(_this), "updateFeedItem", function (updates, id) {
      if (!_this.file.id) {
        throw getBadItemError();
      }

      var cachedItems = _this.getCachedItems(_this.file.id);

      if (cachedItems) {
        var updatedFeedItems = cachedItems.items.map(function (item) {
          if (item.id === id) {
            return _objectSpread({}, item, {}, updates);
          }

          return item;
        });

        _this.setCachedItems(_this.file.id, updatedFeedItems);

        return updatedFeedItems;
      }

      return null;
    });

    _defineProperty(_assertThisInitialized(_this), "createComment", function (file, currentUser, text, hasMention, _successCallback4, errorCallback) {
      var uuid = uniqueId('comment_');
      var commentData = {
        id: uuid,
        tagged_message: text,
        type: 'comment'
      };

      if (!file.id) {
        throw getBadItemError();
      }

      _this.file = file;
      _this.errorCallback = errorCallback;

      _this.addPendingItem(_this.file.id, currentUser, commentData);

      var message = {};

      if (hasMention) {
        message.taggedMessage = text;
      } else {
        message.message = text;
      }

      _this.commentsAPI = new CommentsAPI(_this.options);

      _this.commentsAPI.createComment(_objectSpread({
        file: file
      }, message, {
        successCallback: function successCallback(comment) {
          _this.createCommentSuccessCallback(comment, uuid, _successCallback4);
        },
        errorCallback: function errorCallback(e, code) {
          _this.createCommentErrorCallback(e, code, uuid);
        }
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "updateComment", function (file, commentId, text, hasMention, permissions, _successCallback5, errorCallback) {
      var commentData = {
        tagged_message: text
      };

      if (!file.id) {
        throw getBadItemError();
      }

      _this.file = file;
      _this.errorCallback = errorCallback;

      _this.updateFeedItem(_objectSpread({}, commentData, {
        isPending: true
      }), commentId);

      var message = {};

      if (hasMention) {
        message.tagged_message = text;
      } else {
        message.message = text;
      }

      _this.commentsAPI = new CommentsAPI(_this.options);

      _this.commentsAPI.updateComment(_objectSpread({
        file: file,
        commentId: commentId,
        permissions: permissions
      }, message, {
        successCallback: function successCallback(comment) {
          // use the request payload instead of response in the
          // feed item update because response may not contain
          // the tagged version of the message
          _this.updateFeedItem(_objectSpread({}, message, {
            isPending: false
          }), commentId);

          if (!_this.isDestroyed()) {
            _successCallback5(comment);
          }
        },
        errorCallback: function errorCallback(e, code) {
          _this.updateCommentErrorCallback(e, code, commentId);
        }
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "deleteAppActivity", function (file, appActivityId, successCallback, errorCallback) {
      var id = file.id;

      if (!id) {
        throw getBadItemError();
      }

      _this.appActivityAPI = new AppActivityAPI(_this.options);
      _this.file = file;
      _this.errorCallback = errorCallback;

      _this.updateFeedItem({
        isPending: true
      }, appActivityId);

      _this.appActivityAPI.deleteAppActivity({
        id: id,
        appActivityId: appActivityId,
        successCallback: _this.deleteFeedItem.bind(_assertThisInitialized(_this), appActivityId, successCallback),
        errorCallback: function errorCallback(e, code) {
          _this.deleteAppActivityErrorCallback(e, code, appActivityId);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "deleteAppActivityErrorCallback", function (e, code, id) {
      _this.updateFeedItem(_this.createFeedError(messages.appActivityDeleteErrorMessage), id);

      _this.feedErrorCallback(true, e, code);
    });

    _this.taskCollaboratorsAPI = [];
    _this.taskLinksAPI = [];
    _this.errors = [];
    return _this;
  }
  /**
   * Creates pending card on create_start action, then updates card on next call
   * @param {BoxItem} file - The file to which the annotation is assigned
   * @param {Object} currentUser - the user who performed the action
   * @param {Annotation} annotation - the current annotation to be created
   * @param {string} id - unique id for the incoming annotation
   * @param {boolean} isPending - indicates the current creation process of the annotation
   */


  _createClass(Feed, [{
    key: "addAnnotation",
    value: function addAnnotation(file, currentUser, annotation, id, isPending) {
      if (!file.id) {
        throw getBadItemError();
      }

      this.file = file; // Add the pending interstitial card

      if (isPending) {
        var newAnnotation = _objectSpread({}, annotation, {
          created_by: currentUser,
          id: id,
          type: 'annotation'
        });

        this.addPendingItem(this.file.id, currentUser, newAnnotation);
        return;
      } // Create action has completed, so update the existing pending item


      this.updateFeedItem(_objectSpread({}, annotation, {
        isPending: false
      }), id);
    }
  }, {
    key: "getCacheKey",

    /**
     * Creates a key for the cache
     *
     * @param {string} id folder id
     * @return {string} key
     */
    value: function getCacheKey(id) {
      return "".concat(TYPED_ID_FEED_PREFIX).concat(id);
    }
    /**
     * Gets the items from the cache
     *
     * @param {string} id the cache id
     */

  }, {
    key: "getCachedItems",
    value: function getCachedItems(id) {
      var cache = this.getCache();
      var cacheKey = this.getCacheKey(id);
      return cache.get(cacheKey);
    }
    /**
     * Sets the items in the cache
     *
     * @param {string} id - the cache id
     * @param {Array} items - the feed items to cache
     */

  }, {
    key: "setCachedItems",
    value: function setCachedItems(id, items) {
      var cache = this.getCache();
      var cacheKey = this.getCacheKey(id);
      cache.set(cacheKey, {
        errors: this.errors,
        items: items
      });
    }
    /**
     * Gets the feed items
     *
     * @param {BoxItem} file - The file to which the task is assigned
     * @param {boolean} shouldRefreshCache - Optionally updates the cache
     * @param {Function} successCallback - the success callback  which is called after data fetching is complete
     * @param {Function} errorCallback - the error callback which is called after data fetching is complete if there was an error
     * @param {Function} onError - the function to be called immediately after an error occurs
     * @param {Object} [options]- feature flips, etc
     * @param {Object} [options.shouldShowAppActivity] - feature flip the new app activity api
     */

  }, {
    key: "feedItems",
    value: function (_feedItems) {
      function feedItems(_x, _x2, _x3, _x4, _x5) {
        return _feedItems.apply(this, arguments);
      }

      feedItems.toString = function () {
        return _feedItems.toString();
      };

      return feedItems;
    }(function (file, shouldRefreshCache, successCallback, errorCallback, onError) {
      var _this2 = this;

      var _ref2 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {},
          _ref2$shouldShowAnnot = _ref2.shouldShowAnnotations,
          shouldShowAnnotations = _ref2$shouldShowAnnot === void 0 ? false : _ref2$shouldShowAnnot,
          _ref2$shouldShowAppAc = _ref2.shouldShowAppActivity,
          shouldShowAppActivity = _ref2$shouldShowAppAc === void 0 ? false : _ref2$shouldShowAppAc;

      var id = file.id,
          _file$permissions = file.permissions,
          permissions = _file$permissions === void 0 ? {} : _file$permissions;
      var cachedItems = this.getCachedItems(id);

      if (cachedItems) {
        var _errors = cachedItems.errors,
            items = cachedItems.items;

        if (_errors.length) {
          errorCallback(items, _errors);
        } else {
          successCallback(items);
        }

        if (!shouldRefreshCache) {
          return;
        }
      }

      this.file = file;
      this.errors = [];
      this.errorCallback = onError;
      var annotationsPromise = shouldShowAnnotations ? this.fetchAnnotations(permissions) : Promise.resolve();
      var versionsPromise = this.fetchVersions();
      var currentVersionPromise = this.fetchCurrentVersion();
      var commentsPromise = this.fetchComments(permissions);
      var tasksPromise = this.fetchTasksNew();
      var appActivityPromise = shouldShowAppActivity ? this.fetchAppActivity(permissions) : Promise.resolve();
      Promise.all([versionsPromise, currentVersionPromise, commentsPromise, tasksPromise, appActivityPromise, annotationsPromise]).then(function (_ref3) {
        var _ref4 = _toArray(_ref3),
            versions = _ref4[0],
            currentVersion = _ref4[1],
            feedItems = _ref4.slice(2);

        var versionsWithCurrent = _this2.versionsAPI.addCurrentVersion(currentVersion, versions, _this2.file);

        var sortedFeedItems = sortFeedItems.apply(void 0, [versionsWithCurrent].concat(_toConsumableArray(feedItems)));

        if (!_this2.isDestroyed()) {
          _this2.setCachedItems(id, sortedFeedItems);

          if (_this2.errors.length) {
            errorCallback(sortedFeedItems, _this2.errors);
          } else {
            successCallback(sortedFeedItems);
          }
        }
      });
    })
  }, {
    key: "fetchAnnotations",
    value: function fetchAnnotations(permissions) {
      var _this3 = this;

      this.annotationsAPI = new AnnotationsAPI(this.options);
      return new Promise(function (resolve) {
        _this3.annotationsAPI.getAnnotations(_this3.file.id, undefined, permissions, resolve, _this3.fetchFeedItemErrorCallback.bind(_this3, resolve));
      });
    }
    /**
     * Fetches the comments for a file
     *
     * @param {Object} permissions - the file permissions
     * @return {Promise} - the file comments
     */

  }, {
    key: "fetchComments",
    value: function fetchComments(permissions) {
      var _this4 = this;

      this.commentsAPI = new CommentsAPI(this.options);
      return new Promise(function (resolve) {
        _this4.commentsAPI.getComments(_this4.file.id, permissions, resolve, _this4.fetchFeedItemErrorCallback.bind(_this4, resolve));
      });
    }
    /**
     * Fetches the versions for a file
     *
     * @return {Promise} - the file versions
     */

  }, {
    key: "fetchVersions",
    value: function fetchVersions() {
      var _this5 = this;

      this.versionsAPI = new VersionsAPI(this.options);
      return new Promise(function (resolve) {
        _this5.versionsAPI.getVersions(_this5.file.id, resolve, _this5.fetchFeedItemErrorCallback.bind(_this5, resolve));
      });
    }
    /**
     * Fetches the current version for a file
     *
     * @return {Promise} - the file versions
     */

  }, {
    key: "fetchCurrentVersion",
    value: function fetchCurrentVersion() {
      var _this6 = this;

      this.versionsAPI = new VersionsAPI(this.options);
      return new Promise(function (resolve) {
        var _this6$file$file_vers = _this6.file.file_version,
            file_version = _this6$file$file_vers === void 0 ? {} : _this6$file$file_vers;

        _this6.versionsAPI.getVersion(_this6.file.id, file_version.id, resolve, _this6.fetchFeedItemErrorCallback.bind(_this6, resolve));
      });
    }
    /**
     * Fetches the tasks for a file
     *
     * @return {Promise} - the feed items
     */

  }, {
    key: "fetchTasksNew",
    value: function fetchTasksNew() {
      var _this7 = this;

      this.tasksNewAPI = new TasksNewAPI(this.options);
      return new Promise(function (resolve) {
        _this7.tasksNewAPI.getTasksForFile({
          file: {
            id: _this7.file.id
          },
          successCallback: resolve,
          errorCallback: function errorCallback(err, code) {
            return _this7.fetchFeedItemErrorCallback(resolve, err, code);
          }
        });
      });
    }
    /**
     * Error callback for fetching feed items.
     * Should only call the error callback if the response is a 401, 429 or >= 500
     *
     * @param {Function} resolve - the function which will be called on error
     * @param {Object} e - the axios error
     * @param {string} code - the error code
     * @return {void}
     */

  }, {
    key: "fetchFeedItemErrorCallback",
    value: function fetchFeedItemErrorCallback(resolve, e, code) {
      var status = e.status;
      var shouldDisplayError = isUserCorrectableError(status);
      this.feedErrorCallback(shouldDisplayError, e, code);
      resolve();
    }
    /**
     * Updates a task assignment
     *
     * @param {BoxItem} file - The file to which the task is assigned
     * @param {string} taskId - ID of task to be updated
     * @param {string} taskCollaboratorId - Task assignment ID
     * @param {TaskCollabStatus} taskCollaboratorStatus - New task assignment status
     * @param {Function} successCallback - the function which will be called on success
     * @param {Function} errorCallback - the function which will be called on error
     * @return {void}
     */

  }, {
    key: "createTaskCollaboratorsforGroup",

    /**
     * Creates a task group via the API.
     *
     * @param {BoxItem} file - The file to which the task is assigned
     * @param {Task|TaskUpdatePayload} task - The newly created or existing task from the API
     * @param {SelectorItem} assignee - The user assigned to this task
     * @param {Function} errorCallback - Task create error callback
     * @return {Promise<TaskAssignment>}
     */
    value: function createTaskCollaboratorsforGroup(file, task, assignee) {
      var _this8 = this;

      if (!file.id) {
        throw getBadItemError();
      }

      this.file = file;
      return new Promise(function (resolve, reject) {
        var taskCollaboratorsAPI = new TaskCollaboratorsAPI(_this8.options);

        _this8.taskCollaboratorsAPI.push(taskCollaboratorsAPI);

        taskCollaboratorsAPI.createTaskCollaboratorsforGroup({
          file: file,
          task: task,
          group: assignee,
          successCallback: resolve,
          errorCallback: function errorCallback(e) {
            reject(e);
          }
        });
      });
    }
    /**
     * Creates a task collaborator via the API.
     *
     * @param {BoxItem} file - The file to which the task is assigned
     * @param {Task|TaskUpdatePayload} task - The newly created or existing task from the API
     * @param {SelectorItem} assignee - The user assigned to this task
     * @param {Function} errorCallback - Task create error callback
     * @return {Promise<TaskAssignment>}
     */

  }, {
    key: "createTaskCollaborator",
    value: function createTaskCollaborator(file, task, assignee) {
      var _this9 = this;

      if (!file.id) {
        throw getBadItemError();
      }

      this.file = file;
      return new Promise(function (resolve, reject) {
        var taskCollaboratorsAPI = new TaskCollaboratorsAPI(_this9.options);

        _this9.taskCollaboratorsAPI.push(taskCollaboratorsAPI);

        taskCollaboratorsAPI.createTaskCollaborator({
          file: file,
          task: task,
          user: assignee,
          successCallback: resolve,
          errorCallback: function errorCallback(e) {
            reject(e);
          }
        });
      });
    }
    /**
     * Deletes a task collaborator via the API.
     *
     * @param {BoxItem} file - The file to which the task is assigned
     * @param {Task|TaskUpdatePayload} task - The newly deleted or existing task from the API
     * @param {TaskCollabAssignee} assignee - The user assigned to this task
     * @param {Function} errorCallback - Task delete error callback
     * @return {Promise<TaskAssignment>}
     */

  }, {
    key: "deleteTaskCollaborator",
    value: function deleteTaskCollaborator(file, task, assignee) {
      var _this10 = this;

      if (!file.id) {
        throw getBadItemError();
      }

      this.file.id = file.id;
      return new Promise(function (resolve, reject) {
        var taskCollaboratorsAPI = new TaskCollaboratorsAPI(_this10.options);

        _this10.taskCollaboratorsAPI.push(taskCollaboratorsAPI);

        taskCollaboratorsAPI.deleteTaskCollaborator({
          file: file,
          task: task,
          taskCollaborator: {
            id: assignee.id
          },
          successCallback: resolve,
          errorCallback: function errorCallback(e) {
            reject(e);
          }
        });
      });
    }
    /**
     * Creates a task link via the API.
     *
     * @param {BoxItem} file - The file to which the task is assigned
     * @param {Task} task - The newly created task from the API
     * @param {Function} errorCallback - Task create error callback
     * @return {Promise<TaskAssignment}
     */

  }, {
    key: "createTaskLink",
    value: function createTaskLink(file, task) {
      var _this11 = this;

      if (!file.id) {
        throw getBadItemError();
      }

      this.file = file;
      return new Promise(function (resolve, reject) {
        var taskLinksAPI = new TaskLinksAPI(_this11.options);

        _this11.taskLinksAPI.push(taskLinksAPI);

        taskLinksAPI.createTaskLink({
          file: file,
          task: task,
          successCallback: resolve,
          errorCallback: reject
        });
      });
    }
    /**
     * Deletes a task in the new API
     *
     * @param {BoxItem} file - The file to which the task is assigned
     * @param {string} taskId - The task's id
     * @param {Function} successCallback - the function which will be called on success
     * @param {Function} errorCallback - the function which will be called on error
     * @return {void}
     */

  }, {
    key: "createFeedError",

    /**
     * Constructs an error object that renders to an inline feed error
     *
     * @param {string} message - The error message body.
     * @param {string} title - The error message title.
     * @return {Object} An error message object
     */
    value: function createFeedError(message) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : commonMessages.errorOccured;
      return {
        error: {
          message: message,
          title: title
        }
      };
    }
    /**
     * Replace a feed item with new feed item data.
     *
     * @param {Object} updates - The new data to be applied to the feed item.
     * @param {string} id - ID of the feed item to replace.
     * @return {void}
     */

  }, {
    key: "destroyTaskCollaborators",
    value: function destroyTaskCollaborators() {
      if (Array.isArray(this.taskCollaboratorsAPI)) {
        this.taskCollaboratorsAPI.forEach(function (api) {
          return api.destroy();
        });
        this.taskCollaboratorsAPI = [];
      }
    }
  }, {
    key: "destroyTaskLinks",
    value: function destroyTaskLinks() {
      if (Array.isArray(this.taskLinksAPI)) {
        this.taskLinksAPI.forEach(function (api) {
          return api.destroy();
        });
        this.taskLinksAPI = [];
      }
    }
    /**
     * Fetches app activities for a file
     * @param {BoxItemPermission} permissions - Permissions to attach to the app activity items
     *
     * @return {Promise} - the feed items
     */

  }, {
    key: "fetchAppActivity",
    value: function fetchAppActivity(permissions) {
      var _this12 = this;

      this.appActivityAPI = new AppActivityAPI(this.options);
      return new Promise(function (resolve) {
        _this12.appActivityAPI.getAppActivity(_this12.file.id, permissions, resolve, _this12.fetchFeedItemErrorCallback.bind(_this12, resolve));
      });
    }
    /**
     * Deletes an app activity item.
     *
     * @param {BoxItem} file - The file to which the app activity belongs to
     * @param {string} appActivityId - The app activity item id to delete
     * @param {Function} successCallback - the function which will be called on success
     * @param {Function} errorCallback - the function which will be called on error
     * @return {void}
     */

  }, {
    key: "destroy",

    /**
     * Destroys all the task feed API's
     *
     * @return {void}
     */
    value: function destroy() {
      _get(_getPrototypeOf(Feed.prototype), "destroy", this).call(this);

      if (this.annotationsAPI) {
        this.annotationsAPI.destroy();
        delete this.annotationsAPI;
      }

      if (this.commentsAPI) {
        this.commentsAPI.destroy();
        delete this.commentsAPI;
      }

      if (this.versionsAPI) {
        this.versionsAPI.destroy();
        delete this.versionsAPI;
      }

      if (this.appActivityAPI) {
        this.appActivityAPI.destroy();
        delete this.appActivityAPI;
      }

      if (this.tasksNewAPI) {
        this.tasksNewAPI.destroy();
        delete this.tasksNewAPI;
      }

      this.destroyTaskCollaborators();
      this.destroyTaskLinks();
    }
  }]);

  return Feed;
}(Base);

export default Feed;
//# sourceMappingURL=Feed.js.map