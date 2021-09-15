import React from 'react';
import PropTypes from 'prop-types';
import processString from 'react-process-string';
var NEWLINE_REGEX = /(\r\n|\n\r|\n|\r)/g; // eslint-disable-next-line no-useless-escape

var URL_REGEX = /\b(ht|f)tps?:\/\/[\w\._\-]+(:\d+)?(\/[\w\-_\.~\+\/#\?&%=:\[\]@!\$'\(\)\*;,]*)?/gim;

var ReadonlyDescription = function ReadonlyDescription(_ref) {
  var value = _ref.value;
  return processString([{
    regex: NEWLINE_REGEX,
    // eslint-disable-next-line react/display-name
    fn: function fn(key) {
      return React.createElement("br", {
        key: key
      });
    }
  }, {
    regex: URL_REGEX,
    // eslint-disable-next-line react/display-name
    fn: function fn(key, result) {
      return React.createElement("a", {
        key: key,
        href: result[0],
        rel: "noopener noreferrer",
        target: "_blank"
      }, result[0]);
    }
  }])(value);
};

ReadonlyDescription.propTypes = {
  value: PropTypes.string
};
export default ReadonlyDescription;
//# sourceMappingURL=ReadonlyDescription.js.map