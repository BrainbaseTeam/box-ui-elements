import { Record } from 'immutable';
import PropTypes from 'prop-types';
var HotkeyRecord = Record({
  description: null,
  handler: function handler() {},
  key: '',
  type: undefined
});
var HotkeyPropType = PropTypes.shape({
  description: PropTypes.node,
  handler: PropTypes.func.isRequired,
  key: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  type: PropTypes.string
});
export { HotkeyPropType };
export default HotkeyRecord;
//# sourceMappingURL=HotkeyRecord.js.map