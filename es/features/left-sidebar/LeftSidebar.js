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
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import { NavSidebar, NavList, NavListCollapseHeader } from '../../components/nav-sidebar';
import FooterIndicator from '../../components/footer-indicator/FooterIndicator';
import LoadingIndicatorWrapper from '../../components/loading-indicator/LoadingIndicatorWrapper';
import { bdlBoxBlue } from '../../styles/variables';
import CopyrightFooter from './CopyrightFooter';
import InstantLogin from './InstantLogin';
import LeftSidebarDropWrapper from './LeftSidebarDropWrapper';
import LeftSidebarIconWrapper from './LeftSidebarIconWrapper';
import NewItemsIndicator from './NewItemsIndicator';
import defaultNavLinkRenderer from './defaultNavLinkRenderer';
import './styles/LeftSidebar.scss';

var LeftSidebar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LeftSidebar, _React$Component);

  function LeftSidebar(props) {
    var _this;

    _classCallCheck(this, LeftSidebar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LeftSidebar).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onListScroll", function () {
      _this.changeIsScrollingState();

      _this.throttledCheckAndChangeScrollShadows();
    });

    _defineProperty(_assertThisInitialized(_this), "checkAndChangeScrollShadows", function () {
      if (_this.elScrollableList) {
        _this.setState(_this.calculateOverflow(_this.elScrollableList));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "changeIsScrollingState", function () {
      if (!_this.state.isScrolling) {
        _this.setState({
          isScrolling: true
        });
      }

      _this.debouncedTurnOffScrollingState();
    });

    _defineProperty(_assertThisInitialized(_this), "turnOffScrollingState", function () {
      _this.setState({
        isScrolling: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "debouncedTurnOffScrollingState", debounce(_this.turnOffScrollingState, 100));

    _defineProperty(_assertThisInitialized(_this), "throttledCheckAndChangeScrollShadows", throttle(_this.checkAndChangeScrollShadows, 50));

    _this.state = {
      isScrollableAbove: false,
      isScrollableBelow: false,
      isScrolling: false
    };
    return _this;
  }

  _createClass(LeftSidebar, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!this.elScrollableList) {
        return;
      }

      var overflow = this.calculateOverflow(this.elScrollableList);
      /**
       * recalculate overflow when dropdown is visible and new collabs are added
       * This will not go into an infinite loop because we check for changes in local component state
       */

      if (overflow.isScrollableAbove !== this.state.isScrollableAbove || overflow.isScrollableBelow !== this.state.isScrollableBelow) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState(overflow);
      }
    }
  }, {
    key: "getIcon",
    value: function getIcon(iconElement, IconComponent) {
      var customTheme = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var selected = arguments.length > 3 ? arguments[3] : undefined;
      var scaleIcon = arguments.length > 4 ? arguments[4] : undefined;
      var wrapperClass = scaleIcon ? 'scaled-icon' : '';

      if (iconElement) {
        return React.createElement(LeftSidebarIconWrapper, {
          className: wrapperClass
        }, iconElement);
      }

      if (IconComponent) {
        return React.createElement(LeftSidebarIconWrapper, {
          className: wrapperClass
        }, React.createElement(IconComponent, {
          color: selected && customTheme.secondaryColor ? customTheme.secondaryColor : bdlBoxBlue,
          selected: selected
        }));
      }

      return null;
    }
  }, {
    key: "getNewItemBadge",
    value: function getNewItemBadge(newItemBadge) {
      var customTheme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var secondaryColor = customTheme.secondaryColor;
      return newItemBadge ? React.createElement(NewItemsIndicator, {
        customColor: secondaryColor
      }) : null;
    }
  }, {
    key: "getNavList",
    value: function getNavList(headerLinkProps, leftSidebarProps, showLoadingIndicator, onToggleCollapse) {
      var _this2 = this;

      var _headerLinkProps$canR = headerLinkProps.canReceiveDrop,
          canReceiveDrop = _headerLinkProps$canR === void 0 ? false : _headerLinkProps$canR,
          _headerLinkProps$clas = headerLinkProps.className,
          className = _headerLinkProps$clas === void 0 ? '' : _headerLinkProps$clas,
          collapsed = headerLinkProps.collapsed,
          dropTargetRef = headerLinkProps.dropTargetRef,
          id = headerLinkProps.id,
          menuItems = headerLinkProps.menuItems,
          placeholder = headerLinkProps.placeholder,
          showDropZoneOnHover = headerLinkProps.showDropZoneOnHover;
      var heading = onToggleCollapse ? React.createElement(NavListCollapseHeader, {
        onToggleCollapse: onToggleCollapse
      }, this.getNavLink(headerLinkProps, leftSidebarProps)) : this.getNavLink(headerLinkProps, leftSidebarProps);
      var placeholderEl = menuItems && menuItems.length || showLoadingIndicator ? null : React.createElement("div", {
        className: "placeholder"
      }, placeholder);
      var classes = classNames('left-sidebar-list', className, {
        'is-loading-empty': showLoadingIndicator && menuItems && menuItems.length === 0,
        'is-loading': showLoadingIndicator && menuItems && menuItems.length > 0,
        'lsb-scrollable-shadow-top': this.state.isScrollableAbove,
        'lsb-scrollable-shadow-bottom': this.state.isScrollableBelow
      });
      var ulProps = onToggleCollapse ? {
        onScroll: this.onListScroll,
        ref: function ref(elScrollableList) {
          _this2.elScrollableList = elScrollableList;
        }
      } : {};
      var builtNavList = React.createElement(NavList, {
        className: classes,
        collapsed: collapsed,
        heading: heading,
        placeholder: placeholderEl,
        key: "list-".concat(id),
        ulProps: ulProps
      }, menuItems && menuItems.map(function (props) {
        return _this2.getNavLink(props, leftSidebarProps);
      }) || null);
      return canReceiveDrop ? React.createElement(LeftSidebarDropWrapper, {
        isDragging: leftSidebarProps.isDragging,
        dropTargetRef: dropTargetRef,
        showDropZoneOnHover: showDropZoneOnHover
      }, builtNavList) : builtNavList;
    }
  }, {
    key: "getNavLink",
    value: function getNavLink(props, leftSidebarProps) {
      var callout = props.callout,
          _props$canReceiveDrop = props.canReceiveDrop,
          canReceiveDrop = _props$canReceiveDrop === void 0 ? false : _props$canReceiveDrop,
          _props$className = props.className,
          className = _props$className === void 0 ? '' : _props$className,
          dropTargetRef = props.dropTargetRef,
          htmlAttributes = props.htmlAttributes,
          iconComponent = props.iconComponent,
          iconElement = props.iconElement,
          id = props.id,
          message = props.message,
          navLinkRenderer = props.navLinkRenderer,
          newItemBadge = props.newItemBadge,
          onClickRemove = props.onClickRemove,
          removeButtonHtmlAttributes = props.removeButtonHtmlAttributes,
          routerLink = props.routerLink,
          routerProps = props.routerProps,
          scaleIcon = props.scaleIcon,
          _props$selected = props.selected,
          selected = _props$selected === void 0 ? false : _props$selected,
          showTooltip = props.showTooltip,
          showDropZoneOnHover = props.showDropZoneOnHover;
      var linkClassNames = classNames('left-sidebar-link', className, {
        'is-selected': selected
      });
      var linkProps = {
        callout: callout,
        className: linkClassNames,
        customTheme: leftSidebarProps.customTheme,
        onClickRemove: onClickRemove,
        htmlAttributes: htmlAttributes,
        icon: this.getIcon(iconElement, iconComponent, leftSidebarProps.customTheme, selected, scaleIcon),
        isScrolling: this.state.isScrolling,
        message: message,
        newItemBadge: this.getNewItemBadge(newItemBadge, leftSidebarProps.customTheme),
        removeButtonHtmlAttributes: removeButtonHtmlAttributes,
        routerLink: routerLink,
        routerProps: routerProps,
        selected: selected,
        showTooltip: showTooltip
      };
      var builtLink = navLinkRenderer ? navLinkRenderer(linkProps) : defaultNavLinkRenderer(linkProps); // Check for menu items on links so we don't double-highlight groups

      return canReceiveDrop && !props.menuItems ? React.createElement(LeftSidebarDropWrapper, {
        isDragging: leftSidebarProps.isDragging,
        dropTargetRef: dropTargetRef,
        key: "link-".concat(id),
        showDropZoneOnHover: showDropZoneOnHover
      }, builtLink) : React.createElement(React.Fragment, {
        key: "link-".concat(id)
      }, builtLink);
    }
  }, {
    key: "calculateOverflow",
    value: function calculateOverflow(elem) {
      var isScrollableAbove = elem.scrollTop > 0;
      var isScrollableBelow = elem.scrollTop < elem.scrollHeight - elem.clientHeight;
      return {
        isScrollableAbove: isScrollableAbove,
        isScrollableBelow: isScrollableBelow
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          leftSidebarProps = _this$props.leftSidebarProps,
          menuItems = _this$props.menuItems;
      var className = leftSidebarProps.className || '';
      var navSidebarProps = leftSidebarProps.htmlAttributes || {};
      var instantLoginProps = leftSidebarProps.instantLoginProps || {};
      var preparedMenu = menuItems.map(function (props, key) {
        if (props.menuItems) {
          if (props.onToggleCollapse) {
            var collapsed = props.collapsed,
                showLoadingIndicator = props.showLoadingIndicator;
            return React.createElement(LoadingIndicatorWrapper, {
              className: "favorites-loading-wrapper",
              crawlerPosition: "top",
              isLoading: showLoadingIndicator && !collapsed,
              key: "loading-indicator-".concat(key)
            }, _this3.getNavList(props, leftSidebarProps, showLoadingIndicator, props.onToggleCollapse));
          }

          return _this3.getNavList(props, leftSidebarProps);
        }

        return _this3.getNavLink(props, leftSidebarProps);
      });
      return React.createElement(NavSidebar, _extends({
        className: "left-sidebar ".concat(className)
      }, navSidebarProps), leftSidebarProps.isInstantLoggedIn ? React.createElement(InstantLogin, instantLoginProps) : null, React.createElement("div", {
        className: "left-sidebar-container"
      }, preparedMenu), React.createElement(CopyrightFooter, {
        linkProps: leftSidebarProps.copyrightFooterProps
      }), leftSidebarProps.indicatorText ? React.createElement(FooterIndicator, {
        indicatorText: leftSidebarProps.indicatorText
      }) : null);
    }
  }]);

  return LeftSidebar;
}(React.Component);

_defineProperty(LeftSidebar, "defaultProps", {
  leftSidebarProps: {},
  menuItems: []
});

export default LeftSidebar;
//# sourceMappingURL=LeftSidebar.js.map