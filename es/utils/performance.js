import getProp from 'lodash/get';
var isMarkSupported = typeof getProp(window, 'performance.mark') === 'function';

var mark = function mark(markName) {
  return isMarkSupported && window.performance.mark(markName);
};

export { mark, isMarkSupported };
//# sourceMappingURL=performance.js.map