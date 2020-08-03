/**
 * 
 * @file Function to create size in words out of number
 * @author Box
 */

/**
 * Gets the size in words
 *
 * @param {number} size in bytes
 * @return {string} size in words
 */
export default function (size) {
  if (!size) return '0 Byte';
  var kilo = 1024;
  var decimals = 2;
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
  var exp = Math.floor(Math.log(size) / Math.log(kilo));
  return "".concat(parseFloat((size / Math.pow(kilo, exp)).toFixed(decimals)), " ").concat(sizes[exp]);
}
//# sourceMappingURL=size.js.map