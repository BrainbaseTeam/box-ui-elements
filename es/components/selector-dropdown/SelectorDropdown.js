function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
import uniqueId from 'lodash/uniqueId';
import { scrollIntoView } from '../../utils/dom';
import ScrollWrapper from '../scroll-wrapper';
import { OVERLAY_WRAPPER_CLASS } from '../../constants';
import './SelectorDropdown.scss';

function stopDefaultEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

var SelectorDropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectorDropdown, _React$Component);

  function SelectorDropdown(props) {
    var _this;

    _classCallCheck(this, SelectorDropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectorDropdown).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "setActiveItem", function (index) {
      _this.setState({
        activeItemIndex: index
      });

      if (index === -1) {
        _this.setActiveItemID(null);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setActiveItemID", function (id) {
      var scrollBoundarySelector = _this.props.scrollBoundarySelector;
      var itemEl = id ? document.getElementById(id) : null;
      var scrollOptions = {
        block: 'nearest'
      }; // Allow null in case we want to clear the default
      // boundary from scrollIntoView

      if (typeof scrollBoundarySelector !== 'undefined') {
        scrollOptions.boundary = document.querySelector(scrollBoundarySelector);
      }

      _this.setState({
        activeItemID: id
      }, function () {
        scrollIntoView(itemEl, scrollOptions);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "haveChildrenChanged", function (prevChildren) {
      var children = _this.props.children;
      var childrenCount = React.Children.count(children);
      var prevChildrenCount = React.Children.count(prevChildren);

      if (childrenCount !== prevChildrenCount) {
        return true;
      }

      if (childrenCount === 0) {
        return false;
      }

      var childrenKeys = React.Children.map(children, function (child) {
        return child.key;
      });
      var prevChildrenKeys = React.Children.map(prevChildren, function (child) {
        return child.key;
      });
      return childrenKeys.some(function (childKey, index) {
        return childKey !== prevChildrenKeys[index];
      });
    });

    _defineProperty(_assertThisInitialized(_this), "resetActiveItem", function () {
      _this.setState({
        activeItemID: null,
        activeItemIndex: -1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function () {
      _this.openDropdown();
    });

    _defineProperty(_assertThisInitialized(_this), "handleDocumentClick", function (event) {
      var container = _this.selectorDropdownRef.current;
      var isInside = container && event.target instanceof Node && container.contains(event.target) || container === event.target;

      if (!isInside) {
        _this.closeDropdown();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleInput", function () {
      _this.openDropdown();
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      var _this$props = _this.props,
          children = _this$props.children,
          isAlwaysOpen = _this$props.isAlwaysOpen,
          onEnter = _this$props.onEnter;
      var activeItemIndex = _this.state.activeItemIndex;
      var childrenCount = React.Children.count(children);

      switch (event.key) {
        case 'ArrowDown':
          if (_this.isDropdownOpen()) {
            if (childrenCount) {
              stopDefaultEvent(event);
            }

            var nextIndex = activeItemIndex === childrenCount - 1 ? -1 : activeItemIndex + 1;

            _this.setActiveItem(nextIndex);
          } else {
            _this.openDropdown();
          }

          break;

        case 'ArrowUp':
          if (_this.isDropdownOpen()) {
            if (childrenCount) {
              stopDefaultEvent(event);
            }

            var prevIndex = activeItemIndex === -1 ? childrenCount - 1 : activeItemIndex - 1;

            _this.setActiveItem(prevIndex);
          } else {
            _this.openDropdown();
          }

          break;

        case 'Enter':
          if (activeItemIndex !== -1 && _this.isDropdownOpen()) {
            stopDefaultEvent(event);

            _this.selectItem(activeItemIndex, event);
          } else if (onEnter) {
            onEnter(event);
          }

          break;

        case 'Tab':
          if (_this.isDropdownOpen()) {
            _this.closeDropdown();

            _this.resetActiveItem();
          }

          break;

        case 'Escape':
          if (!isAlwaysOpen && _this.isDropdownOpen()) {
            stopDefaultEvent(event);

            _this.closeDropdown();

            _this.resetActiveItem();
          }

          break;
        // no default
      }
    });

    _defineProperty(_assertThisInitialized(_this), "isDropdownOpen", function () {
      var _this$props2 = _this.props,
          children = _this$props2.children,
          isAlwaysOpen = _this$props2.isAlwaysOpen;
      var shouldOpen = _this.state.shouldOpen;
      var childrenCount = React.Children.count(children);
      return childrenCount > 0 && (!!isAlwaysOpen || shouldOpen);
    });

    _defineProperty(_assertThisInitialized(_this), "openDropdown", function () {
      if (!_this.state.shouldOpen) {
        var shouldSetActiveItemOnOpen = _this.props.shouldSetActiveItemOnOpen;

        if (shouldSetActiveItemOnOpen) {
          _this.setActiveItem(0);
        }

        _this.setState({
          shouldOpen: true
        });

        document.addEventListener('click', _this.handleDocumentClick, true);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "closeDropdown", function () {
      _this.setState({
        shouldOpen: false
      });

      document.removeEventListener('click', _this.handleDocumentClick, true);
    });

    _defineProperty(_assertThisInitialized(_this), "selectItem", function (index, event) {
      var onSelect = _this.props.onSelect;

      if (onSelect) {
        onSelect(index, event);
      }

      _this.closeDropdown();
    });

    _this.listboxID = uniqueId('listbox');
    _this.state = {
      activeItemID: null,
      activeItemIndex: -1,
      shouldOpen: false
    };
    _this.selectorDropdownRef = React.createRef();
    return _this;
  }

  _createClass(SelectorDropdown, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var shouldSetActiveItemOnOpen = _ref.shouldSetActiveItemOnOpen,
          children = _ref.children;

      if (this.haveChildrenChanged(children)) {
        // For UX purposes filtering the items is equivalent
        // to re-opening the dropdown. In such cases we highlight
        // the first item when configured to do so
        if (shouldSetActiveItemOnOpen) {
          this.setActiveItem(0);
        } else {
          this.resetActiveItem();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // just in case event listener was added during openDropdown() but the component
      // gets unmounted without closeDropdown()
      document.removeEventListener('click', this.handleDocumentClick, true);
    }
  }, {
    key: "render",
    value: function render() {
      var listboxID = this.listboxID,
          selectItem = this.selectItem,
          setActiveItem = this.setActiveItem,
          setActiveItemID = this.setActiveItemID,
          _closeDropdown = this.closeDropdown;
      var _this$props3 = this.props,
          dividerIndex = _this$props3.dividerIndex,
          overlayTitle = _this$props3.overlayTitle,
          children = _this$props3.children,
          className = _this$props3.className,
          title = _this$props3.title,
          selector = _this$props3.selector,
          shouldScroll = _this$props3.shouldScroll;
      var _this$state = this.state,
          activeItemID = _this$state.activeItemID,
          activeItemIndex = _this$state.activeItemIndex;
      var isOpen = this.isDropdownOpen();
      var inputProps = {
        'aria-activedescendant': activeItemID,
        'aria-autocomplete': 'list',
        'aria-expanded': isOpen,
        role: 'combobox'
      };

      if (isOpen) {
        inputProps['aria-owns'] = listboxID;
      }

      var list = React.createElement("ul", {
        className: classNames('overlay', overlayTitle ? overlayTitle.toLowerCase() : ''),
        id: listboxID,
        role: "listbox"
      }, overlayTitle && React.createElement("h5", {
        className: "SelectorDropdown-title"
      }, overlayTitle), React.Children.map(children, function (item, index) {
        var itemProps = {
          onClick: function onClick(event) {
            selectItem(index, event);
          },

          /* preventDefault on mousedown so blur doesn't happen before click */
          onMouseDown: function onMouseDown(event) {
            event.preventDefault();
          },
          onMouseEnter: function onMouseEnter() {
            setActiveItem(index);
          },
          closeDropdown: function closeDropdown() {
            _closeDropdown();
          },
          setActiveItemID: setActiveItemID
        };

        if (index === activeItemIndex) {
          itemProps.isActive = true;
        }

        var hasDivider = index === dividerIndex;
        return React.createElement(React.Fragment, null, hasDivider && React.createElement("hr", {
          className: "SelectorDropdown-divider"
        }), React.cloneElement(item, itemProps));
      })); // change onKeyPress/onPaste back to onInput when React fixes this IE11 bug: https://github.com/facebook/react/issues/7280
      // We're simulating the blur event with the tab key listener and the
      // click listener as a proxy because IE will trigger a blur when
      // using the scrollbar in the dropdown which indavertently closes the dropdown.

      return (// eslint-disable-next-line jsx-a11y/no-static-element-interactions
        React.createElement("div", {
          className: classNames('SelectorDropdown', className),
          onFocus: this.handleFocus,
          onKeyDown: this.handleKeyDown,
          onKeyPress: this.handleInput,
          onPaste: this.handleInput,
          ref: this.selectorDropdownRef
        }, React.cloneElement(selector, {
          inputProps: inputProps
        }), isOpen && React.createElement("div", {
          className: "".concat(OVERLAY_WRAPPER_CLASS, " is-visible")
        }, title, shouldScroll ? React.createElement(ScrollWrapper, null, list) : list))
      );
    }
  }]);

  return SelectorDropdown;
}(React.Component);

export default SelectorDropdown;
//# sourceMappingURL=SelectorDropdown.js.map