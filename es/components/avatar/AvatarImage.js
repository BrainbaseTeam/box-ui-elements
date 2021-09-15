import * as React from 'react';

var AvatarImage = function AvatarImage(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      url = _ref.url,
      _onError = _ref.onError;
  return React.createElement("img", {
    alt: "",
    className: "avatar-image ".concat(className),
    onError: function onError(event) {
      if (typeof _onError === 'function') {
        _onError(event);
      }
    },
    src: url
  });
};

export default AvatarImage;
//# sourceMappingURL=AvatarImage.js.map