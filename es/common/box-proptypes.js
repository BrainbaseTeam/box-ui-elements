import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
var UserPropType = PropTypes.shape({
  avatarUrl: PropTypes.string,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
});
var SelectorItemPropType = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string.isRequired
});
var ActionItemErrorPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  action: PropTypes.shape({
    text: PropTypes.string.isRequired,
    onAction: PropTypes.func.isRequired
  })
});
var SelectorItemsPropType = PropTypes.arrayOf(SelectorItemPropType);
var OptionPropType = {
  text: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};
var OptionsPropType = PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape(OptionPropType)), ImmutablePropTypes.listOf(ImmutablePropTypes.recordOf(OptionPropType))]).isRequired;
export { ActionItemErrorPropType, SelectorItemsPropType, SelectorItemPropType, UserPropType, OptionsPropType };
//# sourceMappingURL=box-proptypes.js.map