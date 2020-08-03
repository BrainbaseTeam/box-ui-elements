var _PropTypes$shape;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import { CAN_EDIT, CAN_VIEW, PEOPLE_WITH_LINK, PEOPLE_IN_COMPANY, PEOPLE_IN_ITEM } from './constants';
var accessLevelPropType = PropTypes.oneOf([PEOPLE_WITH_LINK, PEOPLE_IN_COMPANY, PEOPLE_IN_ITEM]).isRequired;
var allowedAccessLevelsPropType = PropTypes.shape((_PropTypes$shape = {}, _defineProperty(_PropTypes$shape, PEOPLE_WITH_LINK, PropTypes.boolean), _defineProperty(_PropTypes$shape, PEOPLE_IN_COMPANY, PropTypes.boolean), _defineProperty(_PropTypes$shape, PEOPLE_IN_ITEM, PropTypes.boolean), _PropTypes$shape)).isRequired;
var permissionLevelPropType = PropTypes.oneOf([CAN_EDIT, CAN_VIEW]);
export { accessLevelPropType, allowedAccessLevelsPropType, permissionLevelPropType };
//# sourceMappingURL=propTypes.js.map