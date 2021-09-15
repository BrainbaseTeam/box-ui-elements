function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Versions Group component
 * @author Box
 */
import React from 'react';
import VersionsList from './VersionsList';
import './VersionsGroup.scss';

var VersionsGroup = function VersionsGroup(_ref) {
  var heading = _ref.heading,
      rest = _objectWithoutProperties(_ref, ["heading"]);

  return React.createElement("section", {
    className: "bcs-VersionsGroup"
  }, React.createElement("h4", {
    className: "bcs-VersionsGroup-heading"
  }, heading), React.createElement(VersionsList, rest));
};

export default VersionsGroup;
//# sourceMappingURL=VersionsGroup.js.map