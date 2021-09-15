import filesize from 'filesize';
var defaultDigitalUnits = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
var bcp47TagToDigitalUnits = {
  fi: ['t', 'kt', 'Mt', 'Gt', 'Tt', 'Pt', 'Et', 'Zt', 'Yt'],
  fr: ['o', 'Ko', 'Mo', 'Go', 'To', 'Po', 'Eo', 'Zo', 'Yo'],
  ru: ['Б', 'КБ', 'МБ', 'ГБ', 'ТБ', 'ПБ', 'ЭБ', 'ЗБ', 'ЙБ']
};
/**
 * Formats a file size from number of bytes to a human-readable, localized string.
 * @param {number} size Number of bytes
 * @param {string} [locale] Optional locale, defaults to 'en'
 * @returns {string} The size as a localized string
 */

var getFileSize = function getFileSize(size) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';
  var settings = {
    round: 1,
    locale: locale
  };
  var localizedUnits = bcp47TagToDigitalUnits[locale];

  if (localizedUnits) {
    // map default units to localized units, ex. { B: Б, KB: КБ, ... }
    settings.symbols = defaultDigitalUnits.reduce(function (symbols, unit, index) {
      symbols[unit] = localizedUnits[index];
      return symbols;
    }, {});
  }

  return filesize(size, settings);
};

export default getFileSize;
//# sourceMappingURL=getFileSize.js.map