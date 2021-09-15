function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @file Function to abbreviate a number as a string in a locale-sensitive manner.
 * @author Box
 */
import IntlMessageFormat from 'intl-messageformat';
import data from 'box-locale-data';
import isNaN from 'lodash/isNaN';
var languages = data.languages,
    numbers = data.numbers;
export var Lengths;

(function (Lengths) {
  Lengths["short"] = "short";
  Lengths["long"] = "long";
})(Lengths || (Lengths = {}));

function numAbbrWithLocale(input, options, numbersData, locale) {
  if (!input || !numbersData) {
    return '0';
  }

  var length = options.length;
  length = length || Lengths.short;
  var exponent = Math.floor(input).toString().length - 1;

  if (input < 0) {
    exponent -= 1; // take care of the negative sign
  }

  var formats = numbersData[length];
  var digits = exponent >= formats.length ? exponent - formats.length + 3 : formats[exponent].digits;
  var count = Math.round(input / Math.pow(10, exponent - digits + 1));
  var template = new IntlMessageFormat(formats[exponent > formats.length ? formats.length - 1 : exponent].msg, locale);
  return template.format({
    count: count
  });
}
/**
 * Gets the number in abbreviated form in a locale-sensitive manner. This function
 * scales the number down to the smallest it can be, taking only up to 4 significant
 * digits, and rounding the rest. ie. 12345678 becomes "12M" in English.
 *
 * The abbreviation words/letters can have the length "short" or "long", specified
 * with the "length" property in the options. If "short",
 * then this function uses an abbreviation of the bucket such as "12M". If "long",
 * then the name of the bucket is written out in full, such as "12 million".
 *
 * For locales that have complex plurals, such as Russian or Polish, this function
 * returns the correctly pluralized suffix/prefix to go along with the scaled number.
 */


function numAbbr(input) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    length: Lengths.short
  };
  if (!input) return '0'; // languages contains info about the current locale

  var _options$locale = options.locale,
      locale = _options$locale === void 0 ? languages.bcp47Tag || 'en-US' : _options$locale,
      _options$numbersData = options.numbersData,
      numbersData = _options$numbersData === void 0 ? numbers : _options$numbersData;
  var value;

  switch (_typeof(input)) {
    case 'boolean':
      input = input ? 1 : 0;
      break;

    case 'string':
      value = parseInt(input, 10);

      if (isNaN(value)) {
        return '0';
      }

      break;

    case 'object':
      // for an array, we format each element of that array. In order to do that safely,
      // recursively call numAbbr to make sure each of the elements is converted to a
      // number before we call numAbbrWithLocale
      return Array.isArray(input) ? input.map(function (element) {
        return numAbbr(element, options);
      }) : '0';

    default:
      break;
  }

  return numAbbrWithLocale(input, options, numbersData, locale);
}

export default numAbbr;
//# sourceMappingURL=numAbbr.js.map