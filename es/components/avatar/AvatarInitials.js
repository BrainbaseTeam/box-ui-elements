import * as React from 'react';
import { avatarColors } from '../../styles/variables';

var getInitials = function getInitials(name) {
  // Remove any bracketed text from the user name
  var cleanedName = name.replace(/[[({<]+.*[\])}>]+/g, '').trim();
  var firstInitial = cleanedName.slice(0, 1);
  var lastInitial = cleanedName.slice(cleanedName.lastIndexOf(' ') + 1, cleanedName.lastIndexOf(' ') + 2);
  return (firstInitial + lastInitial).toUpperCase();
};

var AvatarInitials = function AvatarInitials(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? 0 : _ref$id,
      name = _ref.name;
  var avatarColorSelector = parseInt(id, 10) || 0;
  var backgroundColorIndex = avatarColorSelector % avatarColors.length;
  return React.createElement("span", {
    className: "avatar-initials ".concat(className),
    "data-bg-idx": backgroundColorIndex
  }, getInitials(name));
};

export default AvatarInitials;
//# sourceMappingURL=AvatarInitials.js.map