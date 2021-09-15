import * as React from 'react';
import { injectIntl } from 'react-intl';
import IconPlusThin from '../../icons/general/IconPlusThin';
import IconMinusThin from '../../icons/general/IconMinusThin';
import PlainButton from '../plain-button/PlainButton';
import messages from '../../elements/common/messages';
import { bdlGray50 } from '../../styles/variables';
import './GridViewSlider.scss';

var GridViewSlider = function GridViewSlider(_ref) {
  var columnCount = _ref.columnCount,
      gridMaxColumns = _ref.gridMaxColumns,
      gridMinColumns = _ref.gridMinColumns,
      intl = _ref.intl,
      maxColumnCount = _ref.maxColumnCount,
      _onChange = _ref.onChange;
  var RANGE_STEP = 1; // This math is necessary since the highest value of the slider should result in
  // the lowest number of columns

  var RANGE_MIN = gridMaxColumns - maxColumnCount + 1;
  var RANGE_MAX = gridMaxColumns - gridMinColumns + 1;
  var sliderValue = RANGE_MAX - columnCount + 1;
  return gridMinColumns < maxColumnCount && React.createElement("div", {
    className: "bdl-GridViewSlider"
  }, React.createElement(PlainButton, {
    className: "bdl-GridViewSlider-button",
    onClick: function onClick() {
      _onChange(Math.max(RANGE_MIN, sliderValue - RANGE_STEP));
    },
    type: "button",
    "aria-label": intl.formatMessage(messages.gridViewDecreaseColumnSize)
  }, React.createElement(IconMinusThin, {
    color: bdlGray50,
    width: 14,
    height: 14
  })), React.createElement("input", {
    className: "bdl-GridViewSlider-range",
    max: RANGE_MAX,
    min: RANGE_MIN,
    onChange: function onChange(event) {
      _onChange(event.currentTarget.valueAsNumber);
    },
    step: RANGE_STEP,
    type: "range",
    value: sliderValue
  }), React.createElement(PlainButton, {
    className: "bdl-GridViewSlider-button",
    onClick: function onClick() {
      _onChange(Math.min(RANGE_MAX, sliderValue + RANGE_STEP));
    },
    type: "button",
    "aria-label": intl.formatMessage(messages.gridViewIncreaseColumnSize)
  }, React.createElement(IconPlusThin, {
    color: bdlGray50,
    width: 14,
    height: 14
  })));
};

export default injectIntl(GridViewSlider);
//# sourceMappingURL=GridViewSlider.js.map