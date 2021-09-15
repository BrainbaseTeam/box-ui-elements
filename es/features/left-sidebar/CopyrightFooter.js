function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import LinkBase from '../../components/link/LinkBase';
import './styles/CopyrightFooter.scss';

var CopyrightLink = function CopyrightLink(props) {
  var _props$linkProps = props.linkProps,
      linkProps = _props$linkProps === void 0 ? {} : _props$linkProps,
      _props$date = props.date,
      date = _props$date === void 0 ? new Date() : _props$date;
  return React.createElement("div", {
    className: "copyright-footer"
  }, React.createElement("small", {
    className: "copyright"
  }, React.createElement(LinkBase, _extends({
    href: "/about-us"
  }, linkProps), "\xA9 ", date.getFullYear(), " Box Inc.")));
};

export default CopyrightLink;
//# sourceMappingURL=CopyrightFooter.js.map