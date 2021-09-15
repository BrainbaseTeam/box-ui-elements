function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Avatar from '../../components/avatar';

var PresenceAvatar = function PresenceAvatar(_ref) {
  var avatarUrl = _ref.avatarUrl,
      id = _ref.id,
      isActive = _ref.isActive,
      name = _ref.name,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      isDropDownAvatar = _ref.isDropDownAvatar,
      rest = _objectWithoutProperties(_ref, ["avatarUrl", "id", "isActive", "name", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur", "isDropDownAvatar"]);

  return React.createElement("div", _extends({
    className: classnames('presence-avatar', {
      'presence-avatar-notehead': !isDropDownAvatar,
      'presence-avatar-dropdown': isDropDownAvatar,
      'is-active': isActive
    }),
    onBlur: onBlur,
    onFocus: onFocus,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    ,
    tabIndex: !isDropDownAvatar ? '0' : ''
  }, rest), React.createElement(Avatar, {
    avatarUrl: avatarUrl,
    className: !isDropDownAvatar ? 'presence-notehead' : '',
    id: id,
    name: name
  }));
};

PresenceAvatar.propTypes = {
  avatarUrl: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isActive: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  isDropDownAvatar: PropTypes.bool
};
PresenceAvatar.defaultProps = {
  isActive: false
};
export default PresenceAvatar;
//# sourceMappingURL=PresenceAvatar.js.map