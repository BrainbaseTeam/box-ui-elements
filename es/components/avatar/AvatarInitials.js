import React from 'react';
import { avatarColors } from '../../styles/variables';

var getInitials = function getInitials(name) {
  var firstInitial = name.slice(0, 1);
  var lastInitial = name.slice(name.lastIndexOf(' ') + 1, name.lastIndexOf(' ') + 2);
  return (firstInitial + lastInitial).toUpperCase();
};

var AvatarInitials = function AvatarInitials(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      id = _ref.id,
      name = _ref.name;
  var avatarColorSelector = parseInt(id, 10) || 0;
  var backgroundColorIndex = avatarColorSelector % avatarColors.length;
  return /*#__PURE__*/React.createElement("span", {
    className: "avatar-initials ".concat(className),
    "data-bg-idx": backgroundColorIndex
  }, getInitials(name));
};

export default AvatarInitials;
//# sourceMappingURL=AvatarInitials.js.map