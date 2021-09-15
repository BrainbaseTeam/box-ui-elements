function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import classNames from 'classnames';
import noop from 'lodash/noop'; // @ts-ignore flow import

import PresenceAvatar from './PresenceAvatar';
import PresenceAvatarTooltipContent from './PresenceAvatarTooltipContent';
import Tooltip, { TooltipPosition } from '../../components/tooltip';
import './PresenceAvatarList.scss';

function PresenceAvatarList(props, ref) {
  var avatarAttributes = props.avatarAttributes,
      className = props.className,
      collaborators = props.collaborators,
      hideAdditionalCount = props.hideAdditionalCount,
      hideTooltips = props.hideTooltips,
      _props$maxAdditionalC = props.maxAdditionalCollaborators,
      maxAdditionalCollaborators = _props$maxAdditionalC === void 0 ? 99 : _props$maxAdditionalC,
      _props$maxDisplayedAv = props.maxDisplayedAvatars,
      maxDisplayedAvatars = _props$maxDisplayedAv === void 0 ? 3 : _props$maxDisplayedAv,
      _props$onAvatarMouseE = props.onAvatarMouseEnter,
      onAvatarMouseEnter = _props$onAvatarMouseE === void 0 ? noop : _props$onAvatarMouseE,
      _props$onAvatarMouseL = props.onAvatarMouseLeave,
      onAvatarMouseLeave = _props$onAvatarMouseL === void 0 ? noop : _props$onAvatarMouseL,
      rest = _objectWithoutProperties(props, ["avatarAttributes", "className", "collaborators", "hideAdditionalCount", "hideTooltips", "maxAdditionalCollaborators", "maxDisplayedAvatars", "onAvatarMouseEnter", "onAvatarMouseLeave"]);

  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      activeTooltip = _React$useState2[0],
      setActiveTooltip = _React$useState2[1];

  var hideTooltip = function hideTooltip() {
    setActiveTooltip(null);

    if (onAvatarMouseLeave) {
      onAvatarMouseLeave();
    }
  };

  var showTooltip = function showTooltip(id) {
    setActiveTooltip(id);

    if (onAvatarMouseEnter) {
      onAvatarMouseEnter(id);
    }
  };

  if (!collaborators.length) {
    return null;
  }

  return React.createElement("div", _extends({
    ref: ref,
    className: classNames('bdl-PresenceAvatarList', className)
  }, rest), collaborators.slice(0, maxDisplayedAvatars).map(function (collaborator) {
    var id = collaborator.id,
        avatarUrl = collaborator.avatarUrl,
        name = collaborator.name,
        isActive = collaborator.isActive,
        interactedAt = collaborator.interactedAt,
        interactionType = collaborator.interactionType;
    return React.createElement(Tooltip, {
      key: id,
      isShown: !hideTooltips && activeTooltip === id,
      position: TooltipPosition.BOTTOM_CENTER,
      text: React.createElement(PresenceAvatarTooltipContent, {
        name: name,
        interactedAt: interactedAt,
        interactionType: interactionType,
        isActive: isActive
      })
    }, React.createElement(PresenceAvatar, _extends({
      avatarUrl: avatarUrl,
      id: id,
      isActive: isActive,
      name: name,
      onBlur: hideTooltip,
      onFocus: function onFocus() {
        return showTooltip(id);
      },
      onMouseEnter: function onMouseEnter() {
        return showTooltip(id);
      },
      onMouseLeave: hideTooltip
    }, avatarAttributes)));
  }), !hideAdditionalCount && collaborators.length > maxDisplayedAvatars && React.createElement("div", _extends({
    className: classNames('bdl-PresenceAvatarList-count', 'avatar') // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    ,
    tabIndex: 0
  }, avatarAttributes), collaborators.length - maxDisplayedAvatars > maxAdditionalCollaborators ? "".concat(maxAdditionalCollaborators, "+") : "+".concat(collaborators.length - maxDisplayedAvatars)));
}

export { PresenceAvatarList as PresenceAvatarListComponent };
export default React.forwardRef(PresenceAvatarList);
//# sourceMappingURL=PresenceAvatarList.js.map