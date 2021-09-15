function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import DropdownMenu, { MenuToggle } from '../../components/dropdown-menu';
import { Menu, SelectMenuItem } from '../../components/menu';
import PlainButton from '../../components/plain-button';
import Tooltip from '../../components/tooltip';
import SharedLinkAccessLabel from './SharedLinkAccessLabel';
import { ANYONE_WITH_LINK, ANYONE_IN_COMPANY, DISABLED_REASON_ACCESS_POLICY, DISABLED_REASON_MALICIOUS_CONTENT, PEOPLE_IN_ITEM } from './constants';
import messages from './messages';
var accessLevels = [ANYONE_WITH_LINK, ANYONE_IN_COMPANY, PEOPLE_IN_ITEM];

var SharedLinkAccessMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SharedLinkAccessMenu, _React$Component);

  function SharedLinkAccessMenu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SharedLinkAccessMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SharedLinkAccessMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onChangeAccessLevel", function (newAccessLevel) {
      var _this$props = _this.props,
          accessLevel = _this$props.accessLevel,
          changeAccessLevel = _this$props.changeAccessLevel,
          trackingProps = _this$props.trackingProps;
      var onChangeSharedLinkAccessLevel = trackingProps.onChangeSharedLinkAccessLevel;

      if (accessLevel !== newAccessLevel) {
        changeAccessLevel(newAccessLevel);

        if (onChangeSharedLinkAccessLevel) {
          onChangeSharedLinkAccessLevel(newAccessLevel);
        }
      }
    });

    return _this;
  }

  _createClass(SharedLinkAccessMenu, [{
    key: "renderMenu",
    value: function renderMenu() {
      var _this2 = this;

      var _this$props2 = this.props,
          accessLevel = _this$props2.accessLevel,
          accessLevelsDisabledReason = _this$props2.accessLevelsDisabledReason,
          allowedAccessLevels = _this$props2.allowedAccessLevels,
          enterpriseName = _this$props2.enterpriseName,
          itemType = _this$props2.itemType;
      return React.createElement(Menu, {
        className: "usm-share-access-menu"
      }, accessLevels.map(function (level) {
        var isDisabled = !allowedAccessLevels[level];
        var isDisabledByAccessPolicy = accessLevelsDisabledReason[level] === DISABLED_REASON_ACCESS_POLICY;
        var isDisabledByMaliciousContent = accessLevelsDisabledReason[level] === DISABLED_REASON_MALICIOUS_CONTENT;
        var isDisabledByPolicy = isDisabledByAccessPolicy || isDisabledByMaliciousContent;
        var tooltipMessage = isDisabledByMaliciousContent ? messages.disabledMaliciousContentShareLinkPermission : messages.disabledShareLinkPermission; // If an access level is disabled for reasons other than access policy enforcement
        // then we just don't show that menu item. If it is disabled because of an access policy
        // instead, then we show the menu item in a disabled state and with a tooltip.

        if (isDisabled && !isDisabledByPolicy) {
          return null;
        }

        return React.createElement(Tooltip, {
          isDisabled: !isDisabledByPolicy,
          key: "tooltip-".concat(level),
          position: "top-center",
          text: React.createElement(FormattedMessage, tooltipMessage)
        }, React.createElement(SelectMenuItem, {
          key: level,
          isDisabled: isDisabled,
          isSelected: level === accessLevel,
          onClick: function onClick() {
            return _this2.onChangeAccessLevel(level);
          }
        }, React.createElement(SharedLinkAccessLabel, {
          accessLevel: level,
          enterpriseName: enterpriseName,
          hasDescription: true,
          itemType: itemType
        })));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          accessLevel = _this$props3.accessLevel,
          enterpriseName = _this$props3.enterpriseName,
          itemType = _this$props3.itemType,
          onDismissTooltip = _this$props3.onDismissTooltip,
          submitting = _this$props3.submitting,
          tooltipContent = _this$props3.tooltipContent,
          trackingProps = _this$props3.trackingProps;
      var onSharedLinkAccessMenuOpen = trackingProps.onSharedLinkAccessMenuOpen,
          sharedLinkAccessMenuButtonProps = trackingProps.sharedLinkAccessMenuButtonProps;
      return React.createElement(Tooltip, {
        className: "usm-ftux-tooltip",
        isShown: !!tooltipContent,
        onDismiss: onDismissTooltip,
        position: "middle-left",
        showCloseButton: true,
        text: tooltipContent,
        theme: "callout"
      }, React.createElement(DropdownMenu, {
        onMenuOpen: onSharedLinkAccessMenuOpen,
        constrainToWindow: true
      }, React.createElement(PlainButton, _extends({
        className: classNames('lnk', {
          'is-disabled': submitting,
          'bdl-is-disabled': submitting
        }),
        disabled: submitting
      }, sharedLinkAccessMenuButtonProps), React.createElement(MenuToggle, null, React.createElement(SharedLinkAccessLabel, {
        accessLevel: accessLevel,
        enterpriseName: enterpriseName,
        hasDescription: false,
        itemType: itemType
      }))), this.renderMenu()));
    }
  }]);

  return SharedLinkAccessMenu;
}(React.Component);

_defineProperty(SharedLinkAccessMenu, "defaultProps", {
  accessLevelsDisabledReason: {},
  allowedAccessLevels: {},
  trackingProps: {}
});

export default SharedLinkAccessMenu;
//# sourceMappingURL=SharedLinkAccessMenu.js.map