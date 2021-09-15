import classNames from 'classnames';
import './scrollShadow.scss';

var getScrollShadowState = function getScrollShadowState(scrollTop, scrollHeight, clientHeight) {
  var scrollState = {};

  if (scrollTop > 0) {
    scrollState.isTopOverflowed = true;
  }

  if (scrollHeight - clientHeight > scrollTop) {
    scrollState.isBottomOverflowed = true;
  }

  return scrollState;
};

var getScrollShadowClassName = function getScrollShadowClassName(scrollTop, scrollHeight, clientHeight) {
  var scrollState = getScrollShadowState(scrollTop, scrollHeight, clientHeight);
  return classNames('scroll-shadow-container', {
    'is-showing-top-shadow': scrollState.isTopOverflowed,
    'is-showing-bottom-shadow': scrollState.isBottomOverflowed
  });
};

export { getScrollShadowClassName, getScrollShadowState };
//# sourceMappingURL=scrollShadow.js.map