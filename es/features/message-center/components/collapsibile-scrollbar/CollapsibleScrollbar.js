function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import Scrollbar from 'react-scrollbars-custom';
import styled from 'styled-components';
import { getScrollShadowClassName } from '../../../collapsible-sidebar/utils/scrollShadow';
var StyledScrollThumb = styled.div.withConfig({
  displayName: "CollapsibleScrollbar__StyledScrollThumb",
  componentId: "sc-6dom38-0"
})(["opacity:0;transition:opacity 0.15s;.scroll-shadow-container:hover &,&.dragging{opacity:0.5;}"]); // The following values match the derived values from scrollShadow.scss

var StyledScrollContainer = styled.div.withConfig({
  displayName: "CollapsibleScrollbar__StyledScrollContainer",
  componentId: "sc-6dom38-1"
})(["&::before{box-shadow:0 6px 6px -2px ", ";}&::after{box-shadow:0 -6px 6px -2px ", ";}"], function (props) {
  return props.theme.primary.scrollShadowRgba;
}, function (props) {
  return props.theme.primary.scrollShadowRgba;
});

function CollapsibleScrollbar(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      onScroll = _ref.onScroll,
      style = _ref.style,
      thumbYStyles = _ref.thumbYStyles,
      trackYStyles = _ref.trackYStyles,
      rest = _objectWithoutProperties(_ref, ["children", "className", "onScroll", "style", "thumbYStyles", "trackYStyles"]);

  var scrollRef = React.useRef(null);

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isScrolling = _React$useState2[0],
      setIsScrolling = _React$useState2[1];

  var _React$useState3 = React.useState(),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      scrollShadowClassName = _React$useState4[0],
      setScrollShadowClassName = _React$useState4[1];

  var turnOffScrollingState = function turnOffScrollingState() {
    setIsScrolling(false);
  }; // If there hasn't been an update to isScrolling in 100ms, it'll be set to false.


  var debouncedTurnOffScrollingState = React.useCallback(debounce(turnOffScrollingState, 100), []);

  var onScrollHandler = function onScrollHandler(scrollValues, prevScrollValues) {
    if (!scrollRef.current) {
      return;
    }

    var scrollHeight = scrollValues.scrollHeight,
        clientHeight = scrollValues.clientHeight,
        scrollTop = scrollValues.scrollTop;
    var scrollShadowClassNameValue = getScrollShadowClassName(scrollTop, scrollHeight, clientHeight);
    setIsScrolling(true);
    setScrollShadowClassName(scrollShadowClassNameValue);
    debouncedTurnOffScrollingState();

    if (onScroll) {
      onScroll(scrollValues, prevScrollValues);
    }
  };

  var setScrollShadowState = React.useCallback(function () {
    if (!scrollRef.current) {
      return;
    }

    var _scrollRef$current = scrollRef.current,
        scrollHeight = _scrollRef$current.scrollHeight,
        clientHeight = _scrollRef$current.clientHeight,
        scrollTop = _scrollRef$current.scrollTop;
    var newScrollShadowClassName = getScrollShadowClassName(scrollTop, scrollHeight, clientHeight);

    if (scrollShadowClassName !== newScrollShadowClassName) {
      setScrollShadowClassName(newScrollShadowClassName);
    }
  }, [scrollShadowClassName]);

  var onUpdateHandler = function onUpdateHandler(scrollValues, prevScrollValues) {
    var clientHeight = scrollValues.clientHeight,
        contentScrollHeight = scrollValues.contentScrollHeight;
    var prevClientHeight = prevScrollValues.clientHeight,
        prevContentScrollHeight = prevScrollValues.contentScrollHeight;

    if (clientHeight !== prevClientHeight || contentScrollHeight !== prevContentScrollHeight) {
      setScrollShadowState();
    }
  }; // sets onScrollHandler to true for a maximum of once every 50ms.


  var throttledOnScrollHandler = throttle(onScrollHandler, 50);
  var throttledOnUpdateHandler = throttle(onUpdateHandler, 50);
  var classes = classNames('bdl-CollapsibleScrollbar', className, {
    'is-scrolling': isScrolling
  });
  React.useEffect(function () {
    setScrollShadowState();
  }, [setScrollShadowState]); // $FlowFixMe

  React.useImperativeHandle(ref, function () {
    return {
      scrollbarRef: scrollRef
    };
  });
  return React.createElement(Scrollbar, _extends({
    ref: scrollRef,
    className: scrollShadowClassName,
    onScroll: throttledOnScrollHandler,
    onUpdate: throttledOnUpdateHandler,
    renderer: function renderer(props) {
      var elementRef = props.elementRef,
          restProps = _objectWithoutProperties(props, ["elementRef"]);

      return React.createElement(StyledScrollContainer, _extends({}, restProps, {
        ref: elementRef
      }));
    },
    style: style,
    thumbYProps: {
      renderer: function renderer(renderProps) {
        var elementRef = renderProps.elementRef,
            renderPropStyle = renderProps.style,
            restProps = _objectWithoutProperties(renderProps, ["elementRef", "style"]);

        return React.createElement(StyledScrollThumb, _extends({
          style: _objectSpread({}, renderPropStyle, {}, thumbYStyles)
        }, restProps, {
          ref: elementRef
        }));
      }
    },
    trackYProps: {
      style: _objectSpread({
        background: 'none',
        top: '0',
        height: '100%',
        width: '8px',
        marginRight: '1px'
      }, trackYStyles)
    }
  }, rest), React.createElement("div", {
    className: classes,
    "data-testid": "content-wrapper"
  }, children));
}

export default React.forwardRef(CollapsibleScrollbar);
//# sourceMappingURL=CollapsibleScrollbar.js.map