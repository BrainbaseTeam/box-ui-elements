function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import Button from '../../../components/button';
import IconGridViewInverted from '../../../icons/general/IconGridViewInverted';
import IconListView from '../../../icons/general/IconListView';
import messages from '../messages';
import Tooltip from '../Tooltip';
import { VIEW_MODE_GRID, VIEW_MODE_LIST } from '../../../constants';
import { bdlGray50 } from '../../../styles/variables';
import './ViewModeChangeButton.scss';

var ViewModeChangeButton = function ViewModeChangeButton(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      onViewModeChange = _ref.onViewModeChange,
      intl = _ref.intl,
      viewMode = _ref.viewMode,
      rest = _objectWithoutProperties(_ref, ["className", "onViewModeChange", "intl", "viewMode"]);

  var isGridView = viewMode === VIEW_MODE_GRID;

  var onClick = function onClick() {
    onViewModeChange(isGridView ? VIEW_MODE_LIST : VIEW_MODE_GRID);
  };

  return /*#__PURE__*/React.createElement(Tooltip, {
    text: isGridView ? /*#__PURE__*/React.createElement(FormattedMessage, messages.listView) : /*#__PURE__*/React.createElement(FormattedMessage, messages.gridView)
  }, /*#__PURE__*/React.createElement(Button, _extends({
    className: classNames('bdl-ViewModeChangeButton', className),
    type: "button",
    onClick: onClick
  }, rest), isGridView ? /*#__PURE__*/React.createElement(IconListView, {
    color: bdlGray50,
    width: 17,
    height: 17
  }) : /*#__PURE__*/React.createElement(IconGridViewInverted, {
    color: bdlGray50,
    width: 17,
    height: 17
  })));
};

export default injectIntl(ViewModeChangeButton);
//# sourceMappingURL=ViewModeChangeButton.js.map