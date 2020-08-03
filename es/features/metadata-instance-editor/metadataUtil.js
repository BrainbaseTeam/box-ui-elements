function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var isHidden = function isHidden(obj) {
  return !!obj.isHidden || !!obj.hidden;
};
/**
 * Utility function for converting a string or array of strings into a Set object
 * @param templateFilters - Array<string> | string
 * @returns {Set<T>}
 */


var normalizeTemplateFilters = function normalizeTemplateFilters(templateFilters) {
  return typeof templateFilters === 'string' ? new Set([templateFilters]) : new Set(templateFilters);
};
/**
 * Utility function for cloning an array of metadata templates and filtering the templates and fields if necessary
 * @param templates Array<MetadataTemplate>
 * @param selectedTemplateKey - string
 * @param templateFilters - Array<string> | string
 * @returns {Array<T>}
 */


var normalizeTemplates = function normalizeTemplates(templates, selectedTemplateKey, templateFilters) {
  if (!selectedTemplateKey) {
    return _toConsumableArray(templates);
  }

  var clonedTemplates = templates.filter(function (template) {
    return template.templateKey === selectedTemplateKey;
  });
  var fields = clonedTemplates[0] ? clonedTemplates[0].fields : null;

  if (templateFilters && fields) {
    var normalizedFilters = normalizeTemplateFilters(templateFilters);
    clonedTemplates[0].fields = fields.filter(function (field) {
      return normalizedFilters.has(field.id);
    });
  }

  return clonedTemplates;
};

export { isHidden, normalizeTemplates, normalizeTemplateFilters };
//# sourceMappingURL=metadataUtil.js.map