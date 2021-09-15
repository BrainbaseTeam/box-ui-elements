function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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