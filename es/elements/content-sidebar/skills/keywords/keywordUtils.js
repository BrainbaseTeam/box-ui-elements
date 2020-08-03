/**
 * 
 * @file Utilities for keywords skill
 * @author Box
 */

/**
 * Converts skill card entries into pills
 *
 * @private
 * @param {Array<Object>} props - keyword entries
 * @return {Array<Object>} pills
 */
var getPills = function getPills() {
  var keywords = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return keywords.map(function (keyword, index) {
    return {
      displayText: keyword.text,
      value: index
    };
  });
};

export default getPills;
//# sourceMappingURL=keywordUtils.js.map