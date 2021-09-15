function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable react/jsx-sort-props */
import * as React from 'react';
import * as vars from '../../styles/variables';
import AccessibleSVG from '../../components/accessible-svg/AccessibleSVG';
/**
 * This is an auto-generated component and should not be edited
 * manually in contributor pull requests.
 *
 * If you have problems with this component:
 * - https://github.com/box/box-ui-elements/issues/new?template=Bug_report.md
 *
 * If there are missing features in this component:
 * - https://github.com/box/box-ui-elements/issues/new?template=Feature_request.md
 */

var Download16 = function Download16(props) {
  return React.createElement(AccessibleSVG, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), React.createElement("defs", null, React.createElement("filter", {
    id: "prefix__a"
  }, React.createElement("feColorMatrix", {
    in: "SourceGraphic",
    values: "0 0 0 0 0.564706 0 0 0 0 0.564706 0 0 0 0 0.564706 0 0 0 1.000000 0"
  }))), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    filter: "url(#prefix__a)"
  }, React.createElement("path", {
    fill: vars.bdlGray50,
    fillRule: "nonzero",
    d: "M14.5 15a.5.5 0 110 1h-13a.5.5 0 110-1h13zM9 1a1 1 0 011 1v.002L9.992 6 12 6a1 1 0 01.846 1.534l-.065.09-4 5a1 1 0 01-1.562 0l-4-5A1 1 0 014 6l2.004-.001.01-4.001a1 1 0 011-.998H9z"
  })));
};

export default Download16;
//# sourceMappingURL=Download16.js.map