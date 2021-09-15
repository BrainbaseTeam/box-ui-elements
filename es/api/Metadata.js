function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * 
 * @file Helper for the Box metadata related API
 * @author Box
 */
import getProp from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import { getBadItemError, getBadPermissionsError, isUserCorrectableError } from '../utils/error';
import { getTypedFileId } from '../utils/file';
import File from './File';
import { HEADER_CONTENT_TYPE, METADATA_SCOPE_ENTERPRISE, METADATA_SCOPE_GLOBAL, METADATA_TEMPLATE_FETCH_LIMIT, METADATA_TEMPLATE_PROPERTIES, METADATA_TEMPLATE_CLASSIFICATION, METADATA_TEMPLATE_SKILLS, FIELD_METADATA_SKILLS, CACHE_PREFIX_METADATA, ERROR_CODE_UPDATE_SKILLS, ERROR_CODE_UPDATE_METADATA, ERROR_CODE_CREATE_METADATA, ERROR_CODE_DELETE_METADATA, ERROR_CODE_FETCH_METADATA, ERROR_CODE_FETCH_METADATA_TEMPLATES, ERROR_CODE_FETCH_SKILLS } from '../constants';

var Metadata =
/*#__PURE__*/
function (_File) {
  _inherits(Metadata, _File);

  function Metadata() {
    _classCallCheck(this, Metadata);

    return _possibleConstructorReturn(this, _getPrototypeOf(Metadata).apply(this, arguments));
  }

  _createClass(Metadata, [{
    key: "getMetadataCacheKey",

    /**
     * Creates a key for the metadata cache
     *
     * @param {string} id - Folder id
     * @return {string} key
     */
    value: function getMetadataCacheKey(id) {
      return "".concat(CACHE_PREFIX_METADATA).concat(id);
    }
    /**
     * Creates a key for the skills cache
     *
     * @param {string} id - Folder id
     * @return {string} key
     */

  }, {
    key: "getSkillsCacheKey",
    value: function getSkillsCacheKey(id) {
      return "".concat(this.getMetadataCacheKey(id), "_skills");
    }
    /**
     * Creates a key for the classification cache
     *
     * @param {string} id - Folder id
     * @return {string} key
     */

  }, {
    key: "getClassificationCacheKey",
    value: function getClassificationCacheKey(id) {
      return "".concat(this.getMetadataCacheKey(id), "_classification");
    }
    /**
     * API URL for metadata
     *
     * @param {string} id - a Box file id
     * @param {string} field - metadata field
     * @return {string} base url for files
     */

  }, {
    key: "getMetadataUrl",
    value: function getMetadataUrl(id, scope, template) {
      var baseUrl = "".concat(this.getUrl(id), "/metadata");

      if (scope && template) {
        return "".concat(baseUrl, "/").concat(scope, "/").concat(template);
      }

      return baseUrl;
    }
    /**
     * API URL for metadata templates for a scope
     *
     * @param {string} scope - metadata scope
     * @return {string} base url for files
     */

  }, {
    key: "getMetadataTemplateUrl",
    value: function getMetadataTemplateUrl() {
      return "".concat(this.getBaseApiUrl(), "/metadata_templates");
    }
    /**
     * API URL for metadata template for an instance
     *
     * @param {string} id - metadata instance id
     * @return {string} base url for files
     */

  }, {
    key: "getMetadataTemplateUrlForInstance",
    value: function getMetadataTemplateUrlForInstance(id) {
      return "".concat(this.getMetadataTemplateUrl(), "?metadata_instance_id=").concat(id);
    }
    /**
     * API URL for getting metadata template schema by template key
     *
     * @param {string} templateKey - metadata template key
     * @return {string} API url for getting template schema by template key
     */

  }, {
    key: "getMetadataTemplateSchemaUrl",
    value: function getMetadataTemplateSchemaUrl(templateKey) {
      return "".concat(this.getMetadataTemplateUrl(), "/enterprise/").concat(templateKey, "/schema");
    }
    /**
     * API URL for metadata templates
     *
     * @param {string} scope - metadata scope or id
     * @return {string} base url for files
     */

  }, {
    key: "getMetadataTemplateUrlForScope",
    value: function getMetadataTemplateUrlForScope(scope) {
      return "".concat(this.getMetadataTemplateUrl(), "/").concat(scope);
    }
    /**
     * Returns the custom properties template
     *
     * @return {Object} temaplte for custom properties
     */

  }, {
    key: "getCustomPropertiesTemplate",
    value: function getCustomPropertiesTemplate() {
      return {
        id: uniqueId('metadata_template_'),
        scope: METADATA_SCOPE_GLOBAL,
        templateKey: METADATA_TEMPLATE_PROPERTIES,
        hidden: false
      };
    }
    /**
     * Utility to create editors from metadata instances
     * and metadata templates.
     *
     * @param {Object} instance - metadata instance
     * @param {Object} template - metadata template
     * @param {boolean} canEdit - is instance editable
     * @return {Object} metadata editor
     */

  }, {
    key: "createEditor",
    value: function createEditor(instance, template, canEdit) {
      var data = {};
      Object.keys(instance).forEach(function (key) {
        if (!key.startsWith('$')) {
          // $FlowFixMe
          data[key] = instance[key];
        }
      });
      return {
        template: template,
        instance: {
          id: instance.$id,
          canEdit: instance.$canEdit && canEdit,
          data: data
        }
      };
    }
    /**
     * Gets metadata templates for enterprise
     *
     * @param {string} id - file id
     * @param {string} scope - metadata scope
     * @param {string|void} [instanceId] - metadata instance id
     * @return {Object} array of metadata templates
     */

  }, {
    key: "getTemplates",
    value: function () {
      var _getTemplates = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(id, scope, instanceId) {
        var templates, url, status;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.errorCode = ERROR_CODE_FETCH_METADATA_TEMPLATES;
                templates = {};
                url = instanceId ? this.getMetadataTemplateUrlForInstance(instanceId) : this.getMetadataTemplateUrlForScope(scope);
                _context.prev = 3;
                _context.next = 6;
                return this.xhr.get({
                  url: url,
                  id: getTypedFileId(id),
                  params: {
                    limit: METADATA_TEMPLATE_FETCH_LIMIT // internal hard limit is 500

                  }
                });

              case 6:
                templates = _context.sent;
                _context.next = 14;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](3);
                status = _context.t0.status;

                if (!isUserCorrectableError(status)) {
                  _context.next = 14;
                  break;
                }

                throw _context.t0;

              case 14:
                return _context.abrupt("return", getProp(templates, 'data.entries', []));

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 9]]);
      }));

      function getTemplates(_x, _x2, _x3) {
        return _getTemplates.apply(this, arguments);
      }

      return getTemplates;
    }()
    /**
     * Gets metadata template schema by template key
     *
     * @param {string} templateKey - template key
     * @return {Promise} Promise object of metadata template
     */

  }, {
    key: "getSchemaByTemplateKey",
    value: function getSchemaByTemplateKey(templateKey) {
      var url = this.getMetadataTemplateSchemaUrl(templateKey);
      return this.xhr.get({
        url: url
      });
    }
    /**
     * Gets metadata instances for a Box file
     *
     * @param {string} id - file id
     * @return {Object} array of metadata instances
     */

  }, {
    key: "getInstances",
    value: function () {
      var _getInstances = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(id) {
        var instances, status;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.errorCode = ERROR_CODE_FETCH_METADATA;
                instances = {};
                _context2.prev = 2;
                _context2.next = 5;
                return this.xhr.get({
                  url: this.getMetadataUrl(id),
                  id: getTypedFileId(id)
                });

              case 5:
                instances = _context2.sent;
                _context2.next = 13;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](2);
                status = _context2.t0.status;

                if (!isUserCorrectableError(status)) {
                  _context2.next = 13;
                  break;
                }

                throw _context2.t0;

              case 13:
                return _context2.abrupt("return", getProp(instances, 'data.entries', []));

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 8]]);
      }));

      function getInstances(_x4) {
        return _getInstances.apply(this, arguments);
      }

      return getInstances;
    }()
    /**
     * Returns a list of templates that can be added by the user.
     * For collabed files, only custom properties is allowed.
     *
     * @return {Object} template for custom properties
     */

  }, {
    key: "getUserAddableTemplates",
    value: function getUserAddableTemplates(customPropertiesTemplate, enterpriseTemplates, hasMetadataFeature, isExternallyOwned) {
      var userAddableTemplates = [];

      if (hasMetadataFeature) {
        userAddableTemplates = isExternallyOwned ? [customPropertiesTemplate] : [customPropertiesTemplate].concat(enterpriseTemplates);
      } // Only templates that are not hidden and not classification


      return userAddableTemplates.filter(function (template) {
        return !template.hidden && template.templateKey !== METADATA_TEMPLATE_CLASSIFICATION;
      });
    }
    /**
     * Extracts classification for different representation in the UI.
     *
     * @param {string} id - Box file id
     * @param {Array} instances - metadata instances
     * @return {Array} metadata instances without classification
     */

  }, {
    key: "extractClassification",
    value: function extractClassification(id, instances) {
      var classification = instances.find(function (instance) {
        return instance.$template === METADATA_TEMPLATE_CLASSIFICATION;
      });

      if (classification) {
        instances.splice(instances.indexOf(classification), 1);
        var cache = this.getCache();
        var key = this.getClassificationCacheKey(id);
        cache.set(key, classification);
      }

      return instances;
    }
    /**
     * Finds template for a given metadata instance.
     *
     * @param {string} id - Box file id
     * @param {Object} instance - metadata instance
     * @param {Array} templates - metadata templates
     * @return {Object|undefined} template for metadata instance
     */

  }, {
    key: "getTemplateForInstance",
    value: function () {
      var _getTemplateForInstance = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(id, instance, templates) {
        var instanceId, templateKey, scope, template, crossEnterpriseTemplate;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                instanceId = instance.$id;
                templateKey = instance.$template;
                scope = instance.$scope;
                template = templates.find(function (t) {
                  return t.templateKey === templateKey && t.scope === scope;
                }); // Enterprise scopes are always enterprise_XXXXX

                if (!(!template && scope.startsWith(METADATA_SCOPE_ENTERPRISE))) {
                  _context3.next = 9;
                  break;
                }

                _context3.next = 7;
                return this.getTemplates(id, scope, instanceId);

              case 7:
                crossEnterpriseTemplate = _context3.sent;
                // The API always returns an array of at most one item
                template = crossEnterpriseTemplate[0]; // eslint-disable-line

              case 9:
                return _context3.abrupt("return", template);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getTemplateForInstance(_x5, _x6, _x7) {
        return _getTemplateForInstance.apply(this, arguments);
      }

      return getTemplateForInstance;
    }()
    /**
     * Creates and returns metadata editors.
     *
     * @param {string} id - Box file id
     * @param {Array} instances - metadata instances
     * @param {Object} customPropertiesTemplate - custom properties template
     * @param {Array} enterpriseTemplates - enterprise templates
     * @param {Array} globalTemplates - global templates
     * @param {boolean} canEdit - metadata editability
     * @return {Array} metadata editors
     */

  }, {
    key: "getEditors",
    value: function () {
      var _getEditors = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(id, instances, customPropertiesTemplate, enterpriseTemplates, globalTemplates, canEdit) {
        var _this = this;

        var templates, filteredInstances, editors;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                // All usable templates for metadata instances
                templates = [customPropertiesTemplate].concat(enterpriseTemplates, globalTemplates); // Filter out skills and classification
                // let filteredInstances = this.extractSkills(id, instances);

                filteredInstances = this.extractClassification(id, instances); // Create editors from each instance

                editors = [];
                _context5.next = 5;
                return Promise.all(filteredInstances.map(
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee4(instance) {
                    var template;
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.next = 2;
                            return _this.getTemplateForInstance(id, instance, templates);

                          case 2:
                            template = _context4.sent;

                            if (template) {
                              editors.push(_this.createEditor(instance, template, canEdit));
                            }

                          case 4:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  }));

                  return function (_x14) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 5:
                return _context5.abrupt("return", editors);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getEditors(_x8, _x9, _x10, _x11, _x12, _x13) {
        return _getEditors.apply(this, arguments);
      }

      return getEditors;
    }()
    /**
     * API for getting metadata editors
     *
     * @param {string} fileId - Box file id
     * @param {Function} successCallback - Success callback
     * @param {Function} errorCallback - Error callback
     * @param {boolean} hasMetadataFeature - metadata feature check
     * @param {Object} options - fetch options
     * @return {Promise}
     */

  }, {
    key: "getMetadata",
    value: function () {
      var _getMetadata = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(file, successCallback, errorCallback, hasMetadataFeature) {
        var options,
            id,
            permissions,
            is_externally_owned,
            cache,
            key,
            customPropertiesTemplate,
            _ref2,
            _ref3,
            instances,
            globalTemplates,
            enterpriseTemplates,
            editors,
            metadata,
            _args6 = arguments;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                options = _args6.length > 4 && _args6[4] !== undefined ? _args6[4] : {};
                id = file.id, permissions = file.permissions, is_externally_owned = file.is_externally_owned;
                this.errorCode = ERROR_CODE_FETCH_METADATA;
                this.successCallback = successCallback;
                this.errorCallback = errorCallback; // Check for valid file object.
                // Need to eventually check for upload permission.

                if (!(!id || !permissions)) {
                  _context6.next = 8;
                  break;
                }

                this.errorHandler(getBadItemError());
                return _context6.abrupt("return");

              case 8:
                cache = this.getCache();
                key = this.getMetadataCacheKey(id); // Clear the cache if needed

                if (options.forceFetch) {
                  cache.unset(key);
                } // Return the cached value if it exists


                if (!cache.has(key)) {
                  _context6.next = 15;
                  break;
                }

                this.successHandler(cache.get(key));

                if (options.refreshCache) {
                  _context6.next = 15;
                  break;
                }

                return _context6.abrupt("return");

              case 15:
                _context6.prev = 15;
                customPropertiesTemplate = this.getCustomPropertiesTemplate();
                _context6.next = 19;
                return Promise.all([this.getInstances(id), this.getTemplates(id, METADATA_SCOPE_GLOBAL), hasMetadataFeature ? this.getTemplates(id, METADATA_SCOPE_ENTERPRISE) : Promise.resolve([])]);

              case 19:
                _ref2 = _context6.sent;
                _ref3 = _slicedToArray(_ref2, 3);
                instances = _ref3[0];
                globalTemplates = _ref3[1];
                enterpriseTemplates = _ref3[2];
                _context6.next = 26;
                return this.getEditors(id, instances, customPropertiesTemplate, enterpriseTemplates, globalTemplates, !!permissions.can_upload);

              case 26:
                editors = _context6.sent;
                metadata = {
                  editors: editors,
                  templates: this.getUserAddableTemplates(customPropertiesTemplate, enterpriseTemplates, hasMetadataFeature, is_externally_owned)
                };
                cache.set(key, metadata);

                if (!this.isDestroyed()) {
                  this.successHandler(metadata);
                }

                _context6.next = 35;
                break;

              case 32:
                _context6.prev = 32;
                _context6.t0 = _context6["catch"](15);
                this.errorHandler(_context6.t0);

              case 35:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[15, 32]]);
      }));

      function getMetadata(_x15, _x16, _x17, _x18) {
        return _getMetadata.apply(this, arguments);
      }

      return getMetadata;
    }()
    /**
     * Gets skills for file
     *
     * @param {string} id - file id
     * @return {Object} array of metadata instances
     */

  }, {
    key: "getSkills",
    value: function () {
      var _getSkills = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(file, successCallback, errorCallback) {
        var forceFetch,
            id,
            cache,
            key,
            skills,
            cards,
            _args7 = arguments;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                forceFetch = _args7.length > 3 && _args7[3] !== undefined ? _args7[3] : false;
                this.errorCode = ERROR_CODE_FETCH_SKILLS;
                id = file.id;

                if (id) {
                  _context7.next = 6;
                  break;
                }

                errorCallback(getBadItemError(), this.errorCode);
                return _context7.abrupt("return");

              case 6:
                cache = this.getCache();
                key = this.getSkillsCacheKey(id);
                this.successCallback = successCallback;
                this.errorCallback = errorCallback; // Clear the cache if needed

                if (forceFetch) {
                  cache.unset(key);
                } // Return the Cache value if it exists


                if (!cache.has(key)) {
                  _context7.next = 14;
                  break;
                }

                this.successHandler(cache.get(key));
                return _context7.abrupt("return");

              case 14:
                // The file object may already have skills in it
                skills = {
                  data: getProp(file, FIELD_METADATA_SKILLS)
                };
                _context7.prev = 15;

                if (skills.data) {
                  _context7.next = 20;
                  break;
                }

                _context7.next = 19;
                return this.xhr.get({
                  url: this.getMetadataUrl(id, METADATA_SCOPE_GLOBAL, METADATA_TEMPLATE_SKILLS),
                  id: getTypedFileId(id)
                });

              case 19:
                skills = _context7.sent;

              case 20:
                if (!this.isDestroyed()) {
                  cards = skills.data.cards || [];
                  cache.set(key, cards);
                  this.successHandler(cards);
                }

                _context7.next = 26;
                break;

              case 23:
                _context7.prev = 23;
                _context7.t0 = _context7["catch"](15);
                this.errorHandler(_context7.t0);

              case 26:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[15, 23]]);
      }));

      function getSkills(_x19, _x20, _x21) {
        return _getSkills.apply(this, arguments);
      }

      return getSkills;
    }()
    /**
     * API for patching skills on a file
     *
     * @param {BoxItem} file - File object for which we are changing the description
     * @param {string} field - Metadata field to patch
     * @param {Array} operations - Array of JSON patch operations
     * @param {Function} successCallback - Success callback
     * @param {Function} errorCallback - Error callback
     * @return {Promise}
     */

  }, {
    key: "updateSkills",
    value: function () {
      var _updateSkills = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8(file, operations, successCallback, errorCallback) {
        var id, permissions, metadata, cards;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                this.errorCode = ERROR_CODE_UPDATE_SKILLS;
                id = file.id, permissions = file.permissions;

                if (!(!id || !permissions)) {
                  _context8.next = 5;
                  break;
                }

                errorCallback(getBadItemError(), this.errorCode);
                return _context8.abrupt("return");

              case 5:
                if (permissions.can_upload) {
                  _context8.next = 8;
                  break;
                }

                errorCallback(getBadPermissionsError(), this.errorCode);
                return _context8.abrupt("return");

              case 8:
                this.successCallback = successCallback;
                this.errorCallback = errorCallback;
                _context8.prev = 10;
                _context8.next = 13;
                return this.xhr.put({
                  url: this.getMetadataUrl(id, METADATA_SCOPE_GLOBAL, METADATA_TEMPLATE_SKILLS),
                  headers: _defineProperty({}, HEADER_CONTENT_TYPE, 'application/json-patch+json'),
                  id: getTypedFileId(id),
                  data: operations
                });

              case 13:
                metadata = _context8.sent;

                if (!this.isDestroyed()) {
                  cards = metadata.data.cards || [];
                  this.merge(this.getCacheKey(id), FIELD_METADATA_SKILLS, metadata.data);
                  this.getCache().set(this.getSkillsCacheKey(id), cards);
                  this.successHandler(cards);
                }

                _context8.next = 20;
                break;

              case 17:
                _context8.prev = 17;
                _context8.t0 = _context8["catch"](10);
                this.errorHandler(_context8.t0);

              case 20:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[10, 17]]);
      }));

      function updateSkills(_x22, _x23, _x24, _x25) {
        return _updateSkills.apply(this, arguments);
      }

      return updateSkills;
    }()
    /**
     * API for patching metadata on file
     *
     * @param {BoxItem} file - File object for which we are changing the description
     * @param {Object} template - Metadata template
     * @param {Array} operations - Array of JSON patch operations
     * @param {Function} successCallback - Success callback
     * @param {Function} errorCallback - Error callback
     * @return {Promise}
     */

  }, {
    key: "updateMetadata",
    value: function () {
      var _updateMetadata = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9(file, template, operations, successCallback, errorCallback) {
        var id, permissions, canEdit, metadata, cache, key, cachedMetadata, editor;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                this.errorCode = ERROR_CODE_UPDATE_METADATA;
                this.successCallback = successCallback;
                this.errorCallback = errorCallback;
                id = file.id, permissions = file.permissions;

                if (!(!id || !permissions)) {
                  _context9.next = 7;
                  break;
                }

                this.errorHandler(getBadItemError());
                return _context9.abrupt("return");

              case 7:
                canEdit = !!permissions.can_upload;

                if (canEdit) {
                  _context9.next = 11;
                  break;
                }

                this.errorHandler(getBadPermissionsError());
                return _context9.abrupt("return");

              case 11:
                _context9.prev = 11;
                _context9.next = 14;
                return this.xhr.put({
                  url: this.getMetadataUrl(id, template.scope, template.templateKey),
                  headers: _defineProperty({}, HEADER_CONTENT_TYPE, 'application/json-patch+json'),
                  id: getTypedFileId(id),
                  data: operations
                });

              case 14:
                metadata = _context9.sent;

                if (!this.isDestroyed()) {
                  cache = this.getCache();
                  key = this.getMetadataCacheKey(id);
                  cachedMetadata = cache.get(key);
                  editor = this.createEditor(metadata.data, template, canEdit);

                  if (cachedMetadata && cachedMetadata.editors) {
                    cachedMetadata.editors.splice(cachedMetadata.editors.findIndex(function (_ref4) {
                      var instance = _ref4.instance;
                      return instance.id === editor.instance.id;
                    }), 1, editor);
                  }

                  this.successHandler(editor);
                }

                _context9.next = 21;
                break;

              case 18:
                _context9.prev = 18;
                _context9.t0 = _context9["catch"](11);
                this.errorHandler(_context9.t0);

              case 21:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[11, 18]]);
      }));

      function updateMetadata(_x26, _x27, _x28, _x29, _x30) {
        return _updateMetadata.apply(this, arguments);
      }

      return updateMetadata;
    }()
    /**
     * API for creating metadata on file
     *
     * @param {BoxItem} file - File object for which we are changing the description
     * @param {Object} template - Metadata template
     * @param {Function} successCallback - Success callback
     * @param {Function} errorCallback - Error callback
     * @return {Promise}
     */

  }, {
    key: "createMetadata",
    value: function () {
      var _createMetadata = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee10(file, template, successCallback, errorCallback) {
        var id, permissions, is_externally_owned, canEdit, isProperties, metadata, cache, key, cachedMetadata, editor;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this.errorCode = ERROR_CODE_CREATE_METADATA;

                if (!(!file || !template)) {
                  _context10.next = 4;
                  break;
                }

                errorCallback(getBadItemError(), this.errorCode);
                return _context10.abrupt("return");

              case 4:
                id = file.id, permissions = file.permissions, is_externally_owned = file.is_externally_owned;

                if (!(!id || !permissions)) {
                  _context10.next = 8;
                  break;
                }

                errorCallback(getBadItemError(), this.errorCode);
                return _context10.abrupt("return");

              case 8:
                canEdit = !!permissions.can_upload;
                isProperties = template.templateKey === METADATA_TEMPLATE_PROPERTIES && template.scope === METADATA_SCOPE_GLOBAL;

                if (!(!canEdit || is_externally_owned && !isProperties)) {
                  _context10.next = 13;
                  break;
                }

                errorCallback(getBadPermissionsError(), this.errorCode);
                return _context10.abrupt("return");

              case 13:
                this.successCallback = successCallback;
                this.errorCallback = errorCallback;
                _context10.prev = 15;
                _context10.next = 18;
                return this.xhr.post({
                  url: this.getMetadataUrl(id, template.scope, template.templateKey),
                  id: getTypedFileId(id),
                  data: {}
                });

              case 18:
                metadata = _context10.sent;

                if (!this.isDestroyed()) {
                  cache = this.getCache();
                  key = this.getMetadataCacheKey(id);
                  cachedMetadata = cache.get(key);
                  editor = this.createEditor(metadata.data, template, canEdit);
                  cachedMetadata.editors.push(editor);
                  this.successHandler(editor);
                }

                _context10.next = 25;
                break;

              case 22:
                _context10.prev = 22;
                _context10.t0 = _context10["catch"](15);
                this.errorHandler(_context10.t0);

              case 25:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[15, 22]]);
      }));

      function createMetadata(_x31, _x32, _x33, _x34) {
        return _createMetadata.apply(this, arguments);
      }

      return createMetadata;
    }()
    /**
     * API for deleting metadata on file
     *
     * @param {BoxItem} file - File object for which we are changing the description
     * @param {string} scope - Metadata instance scope
     * @param {string} template - Metadata template key
     * @param {Function} successCallback - Success callback
     * @param {Function} errorCallback - Error callback
     * @return {Promise}
     */

  }, {
    key: "deleteMetadata",
    value: function () {
      var _deleteMetadata = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee11(file, template, successCallback, errorCallback) {
        var scope, templateKey, id, permissions, cache, key, metadata;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                this.errorCode = ERROR_CODE_DELETE_METADATA;

                if (!(!file || !template)) {
                  _context11.next = 4;
                  break;
                }

                errorCallback(getBadItemError(), this.errorCode);
                return _context11.abrupt("return");

              case 4:
                scope = template.scope, templateKey = template.templateKey;
                id = file.id, permissions = file.permissions;

                if (!(!id || !permissions)) {
                  _context11.next = 9;
                  break;
                }

                errorCallback(getBadItemError(), this.errorCode);
                return _context11.abrupt("return");

              case 9:
                if (permissions.can_upload) {
                  _context11.next = 12;
                  break;
                }

                errorCallback(getBadPermissionsError(), this.errorCode);
                return _context11.abrupt("return");

              case 12:
                this.successCallback = successCallback;
                this.errorCallback = errorCallback;
                _context11.prev = 14;
                _context11.next = 17;
                return this.xhr.delete({
                  url: this.getMetadataUrl(id, scope, templateKey),
                  id: getTypedFileId(id)
                });

              case 17:
                if (!this.isDestroyed()) {
                  cache = this.getCache();
                  key = this.getMetadataCacheKey(id);
                  metadata = cache.get(key);
                  metadata.editors.splice(metadata.editors.findIndex(function (editor) {
                    return editor.template.scope === scope && editor.template.templateKey === templateKey;
                  }), 1);
                  this.successHandler();
                }

                _context11.next = 23;
                break;

              case 20:
                _context11.prev = 20;
                _context11.t0 = _context11["catch"](14);
                this.errorHandler(_context11.t0);

              case 23:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[14, 20]]);
      }));

      function deleteMetadata(_x35, _x36, _x37, _x38) {
        return _deleteMetadata.apply(this, arguments);
      }

      return deleteMetadata;
    }()
  }]);

  return Metadata;
}(File);

export default Metadata;
//# sourceMappingURL=Metadata.js.map