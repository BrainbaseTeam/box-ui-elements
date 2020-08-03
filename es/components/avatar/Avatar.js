function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import * as React from 'react';
import classNames from 'classnames';
import AvatarImage from './AvatarImage';
import AvatarInitials from './AvatarInitials';
import UnknownUserAvatar from '../../icons/avatars/UnknownUserAvatar';
import './Avatar.scss';
var SIZES = {
  large: true
};

function Avatar(_ref) {
  var avatarUrl = _ref.avatarUrl,
      className = _ref.className,
      name = _ref.name,
      id = _ref.id,
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

  var classes = classNames(['avatar', className, _defineProperty({}, "avatar--".concat(size), SIZES[size])]); // Reset hasImageErrored state when avatarUrl changes

  if (avatarUrl !== prevAvatarUrl) {
    setHasImageErrored(false);
    setPrevAvatarUrl(avatarUrl);
  }

  var avatar;

  if (avatarUrl && !hasImageErrored) {
    avatar = /*#__PURE__*/React.createElement(AvatarImage, {
      onError: function onError() {
        setHasImageErrored(true);
      },
      url: avatarUrl
    });
  } else if (name) {
    avatar = /*#__PURE__*/React.createElement(AvatarInitials, {
      id: id,
      name: name
    });
  } else {
    avatar = /*#__PURE__*/React.createElement(UnknownUserAvatar, {
      className: "avatar-icon"
    });
  }

  return /*#__PURE__*/React.createElement("span", {
    className: classes,
    role: "presentation"
  }, avatar);
}

export default Avatar;
//# sourceMappingURL=Avatar.js.map