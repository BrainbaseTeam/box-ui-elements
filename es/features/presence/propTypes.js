import PropTypes from 'prop-types';
var BOTTOM_LEFT = 'bottom-left';
var BOTTOM_RIGHT = 'bottom-right';
var BOTTOM_CENTER = 'bottom-center';
var collaboratorsPropType = PropTypes.shape({
  /** Url to avatar image. If passed in, component will render the avatar image instead of the initials */
  avatarUrl: PropTypes.string,

  /** Users id */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isActive: PropTypes.bool,

  /** Unix timestamp of when the user last interacted with the document */
  interactedAt: PropTypes.number,

  /** The type of interaction by the user */
  interactionType: PropTypes.string,

  /** User's full name */
  name: PropTypes.string.isRequired,

  /** Custom Profile URL */
  profileUrl: PropTypes.string
});
var flyoutPositionPropType = PropTypes.oneOf([BOTTOM_LEFT, BOTTOM_RIGHT, BOTTOM_CENTER]);
export { collaboratorsPropType, flyoutPositionPropType };
//# sourceMappingURL=propTypes.js.map