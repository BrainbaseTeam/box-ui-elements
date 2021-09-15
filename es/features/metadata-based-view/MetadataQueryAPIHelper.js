function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Metadata Queries API Helper
 * @author Box
 */
import cloneDeep from 'lodash/cloneDeep';
import find from 'lodash/find';
import getProp from 'lodash/get';
import includes from 'lodash/includes';
import isArray from 'lodash/isArray';
import isNil from 'lodash/isNil';
import API from '../../api';
import { ITEM_TYPE_FILE, JSON_PATCH_OP_ADD, JSON_PATCH_OP_REMOVE, JSON_PATCH_OP_REPLACE, JSON_PATCH_OP_TEST, METADATA_FIELD_TYPE_ENUM, METADATA_FIELD_TYPE_MULTISELECT } from '../../common/constants';
import { FIELD_NAME, FIELD_METADATA } from '../../constants';
var SELECT_TYPES = [METADATA_FIELD_TYPE_ENUM, METADATA_FIELD_TYPE_MULTISELECT];

var MetadataQueryAPIHelper = function MetadataQueryAPIHelper(api) {
  var _this = this;

  _classCallCheck(this, MetadataQueryAPIHelper);

  _defineProperty(this, "createJSONPatchOperations", function (field, oldValue, newValue) {
    var operation = JSON_PATCH_OP_REPLACE;

    if (isNil(oldValue) && newValue) {
      operation = JSON_PATCH_OP_ADD;
    }

    if (oldValue && isNil(newValue)) {
      operation = JSON_PATCH_OP_REMOVE;
    }

    var testOp = {
      op: JSON_PATCH_OP_TEST,
      path: "/".concat(field),
      value: oldValue
    };
    var patchOp = {
      op: operation,
      path: "/".concat(field),
      value: newValue
    };

    if (operation === JSON_PATCH_OP_REMOVE) {
      delete patchOp.value;
    }

    return operation === JSON_PATCH_OP_ADD ? [patchOp] : [testOp, patchOp];
  });

  _defineProperty(this, "getMetadataQueryFields", function () {
    /*
        Example metadata query:
        const query = {
            from: 'enterprise_12345.myAwesomeTemplateKey',
            fields: [
                'name', // base representation field for an item (name, size, etag etc.)
                'metadata.enterprise_12345.myAwesomeTemplateKey.field_1', // metadata instance field
                'metadata.enterprise_12345.myAwesomeTemplateKey.field_2', // metadata instance field
                'metadata.enterprise_12345.myAwesomeTemplateKey.field_3' // metadata instance field
            ],
            ancestor_folder_id: 0,
        };
         This function will return ['field_1', 'field_2', 'field_3']
    */
    var _this$metadataQuery = _this.metadataQuery,
        _this$metadataQuery$f = _this$metadataQuery.fields,
        fields = _this$metadataQuery$f === void 0 ? [] : _this$metadataQuery$f,
        from = _this$metadataQuery.from;
    return fields.filter(function (field) {
      return field.includes(from);
    }).map(function (field) {
      return field.split('.').pop();
    });
  });

  _defineProperty(this, "flattenMetadata", function (metadata) {
    var templateFields = getProp(_this.metadataTemplate, 'fields', []);
    var instance = getProp(metadata, "".concat(_this.templateScope, ".").concat(_this.templateKey));

    if (!instance) {
      return {};
    }

    var queryFields = _this.getMetadataQueryFields();

    var fields = queryFields.map(function (queryField) {
      var templateField = find(templateFields, ['key', queryField]);
      var type = getProp(templateField, 'type'); // get data type

      var displayName = getProp(templateField, 'displayName', queryField); // get displayName, defaults to key

      var field = {
        key: "".concat(FIELD_METADATA, ".").concat(_this.templateScope, ".").concat(_this.templateKey, ".").concat(queryField),
        value: instance[queryField],
        type: type,
        displayName: displayName
      };

      if (includes(SELECT_TYPES, type)) {
        // get "options" for enums or multiselects
        field.options = getProp(templateField, 'options');
      }

      return field;
    });
    return {
      enterprise: {
        fields: fields,
        id: instance.$id
      }
    };
  });

  _defineProperty(this, "flattenResponseEntry", function (metadataEntry) {
    var metadata = metadataEntry.metadata;
    return _objectSpread({}, metadataEntry, {
      metadata: _this.flattenMetadata(metadata)
    });
  });

  _defineProperty(this, "filterMetdataQueryResponse", function (response) {
    var _response$entries = response.entries,
        entries = _response$entries === void 0 ? [] : _response$entries,
        next_marker = response.next_marker;
    return {
      entries: entries.filter(function (entry) {
        return getProp(entry, 'type') === ITEM_TYPE_FILE;
      }),
      // return only file items
      next_marker: next_marker
    };
  });

  _defineProperty(this, "getFlattenedDataWithTypes", function (templateSchemaResponse) {
    _this.metadataTemplate = getProp(templateSchemaResponse, 'data');
    var _this$metadataQueryRe = _this.metadataQueryResponseData,
        entries = _this$metadataQueryRe.entries,
        next_marker = _this$metadataQueryRe.next_marker;
    return {
      items: entries.map(_this.flattenResponseEntry),
      nextMarker: next_marker
    };
  });

  _defineProperty(this, "getTemplateSchemaInfo", function (data) {
    var entries = data.entries;
    _this.metadataQueryResponseData = _this.filterMetdataQueryResponse(data);

    if (!entries || entries.length === 0) {
      // Don't make metadata API call to get template info
      return Promise.resolve();
    }

    var metadata = getProp(entries, '[0].metadata');
    _this.templateScope = Object.keys(metadata)[0];
    var instance = metadata[_this.templateScope];
    _this.templateKey = Object.keys(instance)[0];
    return _this.api.getMetadataAPI(true).getSchemaByTemplateKey(_this.templateKey);
  });

  _defineProperty(this, "queryMetadata", function () {
    return new Promise(function (resolve, reject) {
      _this.api.getMetadataQueryAPI().queryMetadata(_this.metadataQuery, resolve, reject, {
        forceFetch: true
      });
    });
  });

  _defineProperty(this, "fetchMetadataQueryResults", function (metadataQuery, successsCallback, errorCallback) {
    _this.metadataQuery = _this.verifyQueryFields(metadataQuery);
    return _this.queryMetadata().then(_this.getTemplateSchemaInfo).then(_this.getFlattenedDataWithTypes).then(successsCallback).catch(errorCallback);
  });

  _defineProperty(this, "updateMetadata", function (file, field, oldValue, newValue, successsCallback, errorCallback) {
    var operations = _this.createJSONPatchOperations(field, oldValue, newValue);

    return _this.api.getMetadataAPI(true).updateMetadata(file, _this.metadataTemplate, operations, successsCallback, errorCallback);
  });

  _defineProperty(this, "verifyQueryFields", function (metadataQuery) {
    var clonedQuery = cloneDeep(metadataQuery);
    var clonedFields = isArray(clonedQuery.fields) ? clonedQuery.fields : []; // Make sure the query fields array has "name" field which is necessary to display info.

    if (!clonedFields.includes(FIELD_NAME)) {
      clonedFields.push(FIELD_NAME);
    }

    clonedQuery.fields = clonedFields;
    return clonedQuery;
  });

  this.api = api;
};

export { MetadataQueryAPIHelper as default };
//# sourceMappingURL=MetadataQueryAPIHelper.js.map