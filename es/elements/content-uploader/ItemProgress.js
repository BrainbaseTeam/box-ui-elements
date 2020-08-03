/**
 * 
 * @file Upload item progress component
 */
import React from 'react';
import ProgressBar from './ProgressBar';
import './ItemProgress.scss';

var ItemProgress = function ItemProgress(_ref) {
  var progress = _ref.progress;
  return /*#__PURE__*/React.createElement("div", {
    className: "bcu-item-progress"
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    percent: progress
  }), /*#__PURE__*/React.createElement("div", {
    className: "bcu-progress-label"
  }, progress, "%"));
};

export default ItemProgress;
//# sourceMappingURL=ItemProgress.js.map