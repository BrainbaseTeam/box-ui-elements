function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import * as React from 'react';
import classNames from 'classnames';
import Badgeable from '../badgeable';
import AvatarImage from './AvatarImage';
import AvatarInitials from './AvatarInitials';
import UnknownUserAvatar from './UnknownUserAvatar';
import GlobeBadge16 from '../../icon/fill/GlobeBadge16';
import './Avatar.scss';
var SIZES = {
  small: true,
  large: true
};

function Avatar(_ref) {
  var _ref2;

  var avatarUrl = _ref.avatarUrl,
      className = _ref.className,
      name = _ref.name,
      id = _ref.id,
      isExternal = _ref.isExternal,
      _ref$shouldShowExtern = _ref.shouldShowExternal,
      shouldShowExternal = _ref$shouldShowExtern === void 0 ? false : _ref$shouldShowExtern,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? '' : _ref$size;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      hasImageErrored = _React$useState2[0],
      setHasImageErrored = _React$useState2[1];

  var _React$useState3 = React.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      prevAvatarUrl = _React$useState4[0],
      setPrevAvatarUrl = _React$useState4[1];

  var classes = classNames(['avatar', className, (_ref2 = {}, _defineProperty(_ref2, "avatar--".concat(size), size && SIZES[size]), _defineProperty(_ref2, 'avatar--isExternal', shouldShowExternal && isExternal), _ref2)]); // Reset hasImageErrored state when avatarUrl changes

  if (avatarUrl !== prevAvatarUrl) {
    setHasImageErrored(false);
    setPrevAvatarUrl(avatarUrl);
  }

  var avatar;

  if (avatarUrl && !hasImageErrored) {
    avatar = React.createElement(AvatarImage, {
      onError: function onError() {
        setHasImageErrored(true);
      },
      url: avatarUrl
    });
  } else if (name) {
    avatar = React.createElement(AvatarInitials, {
      id: id,
      name: name
    });
  } else {
    avatar = React.createElement(UnknownUserAvatar, {
      className: "avatar-icon"
    });
  }

  return React.createElement(Badgeable, {
    className: classes,
    bottomRight: shouldShowExternal && isExternal ? React.createElement(GlobeBadge16, {
      className: "bdl-Avatar-externalBadge"
    }) : undefined
  }, React.createElement("span", null, avatar));
}

export default Avatar;
//# sourceMappingURL=Avatar.js.map