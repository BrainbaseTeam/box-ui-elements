function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Versions Item Action component
 * @author Box
 */
import * as React from 'react';
import { MenuItem } from '../../../components/menu';
import './VersionsItemAction.scss';

var VersionsItemAction = function VersionsItemAction(_ref) {
  var action = _ref.action,
      children = _ref.children,
      fileId = _ref.fileId,
      isCurrent = _ref.isCurrent,
      rest = _objectWithoutProperties(_ref, ["action", "children", "fileId", "isCurrent"]);

  return React.createElement(MenuItem, _extends({
    className: "bcs-VersionsItemAction",
    "data-resin-iscurrent": isCurrent,
    "data-resin-itemid": fileId,
    "data-resin-target": action
  }, rest), children);
};

export default VersionsItemAction;
//# sourceMappingURL=VersionsItemAction.js.map