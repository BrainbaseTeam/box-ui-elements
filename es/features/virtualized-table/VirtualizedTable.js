function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { injectIntl } from 'react-intl';
import { AutoSizer } from 'react-virtualized/dist/es/AutoSizer/index';
import { WindowScroller } from 'react-virtualized/dist/es/WindowScroller/index';
import BaseVirtualizedTable from './BaseVirtualizedTable';
import './VirtualizedTable.scss';

var VirtualizedTable = function VirtualizedTable(_ref) {
  var children = _ref.children,
      height = _ref.height,
      intl = _ref.intl,
      rest = _objectWithoutProperties(_ref, ["children", "height", "intl"]);

  return React.createElement(AutoSizer, {
    defaultHeight: height,
    disableHeight: true
  }, function (_ref2) {
    var width = _ref2.width;
    return height ? React.createElement(BaseVirtualizedTable, _extends({
      height: height,
      width: width
    }, rest), typeof children === 'function' ? children(intl) : children) : React.createElement(WindowScroller, null, function (_ref3) {
      var dynamicHeight = _ref3.height,
          isScrolling = _ref3.isScrolling,
          onChildScroll = _ref3.onChildScroll,
          scrollTop = _ref3.scrollTop;
      return React.createElement(BaseVirtualizedTable, _extends({
        autoHeight: true,
        height: dynamicHeight,
        isScrolling: isScrolling,
        onScroll: onChildScroll,
        scrollTop: scrollTop,
        width: width
      }, rest), typeof children === 'function' ? children(intl) : children);
    });
  });
};

export default injectIntl(VirtualizedTable);
//# sourceMappingURL=VirtualizedTable.js.map