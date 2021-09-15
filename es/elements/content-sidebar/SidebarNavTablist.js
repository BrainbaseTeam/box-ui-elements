function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Content Sidebar nav tablist Component
 * @author Box
 */
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { KEYS } from '../../constants';

var SidebarNavTablist = function SidebarNavTablist(_ref) {
  var children = _ref.children,
      history = _ref.history,
      elementId = _ref.elementId,
      isOpen = _ref.isOpen,
      onNavigate = _ref.onNavigate;
  var refs = [];
  var tablist = React.Children.map(children, function (child) {
    return child && "/".concat(child.props.sidebarView);
  });

  var handleKeyDown = function handleKeyDown(event) {
    var currentIndex = tablist.indexOf(history.location.pathname);
    var length = tablist.length;
    var nextIndex = currentIndex;

    switch (event.key) {
      case KEYS.arrowUp:
        nextIndex = (currentIndex - 1 + length) % length;
        history.push(tablist[nextIndex]);

        if (refs.length > 0) {
          refs[nextIndex].focus();
        }

        event.stopPropagation();
        event.preventDefault();
        break;

      case KEYS.arrowDown:
        nextIndex = (currentIndex + 1) % length;
        history.push(tablist[nextIndex]);

        if (refs.length > 0) {
          refs[nextIndex].focus();
        }

        event.stopPropagation();
        event.preventDefault();
        break;

      default:
        break;
    }
  };

  return React.createElement("div", {
    "aria-orientation": "vertical",
    className: "bcs-SidebarNav-main",
    role: "tablist",
    tabIndex: "0",
    onKeyDown: handleKeyDown
  }, React.Children.map(children, function (tab) {
    if (!tab) {
      return null;
    }

    return React.cloneElement(tab, _objectSpread({
      elementId: elementId,
      isOpen: isOpen,
      onNavigate: onNavigate,
      ref: function ref(_ref2) {
        refs.push(_ref2);
      }
    }, tab.props));
  }));
};

export default withRouter(SidebarNavTablist);
//# sourceMappingURL=SidebarNavTablist.js.map