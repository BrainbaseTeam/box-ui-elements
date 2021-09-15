import { formatUser } from './FormattedUser';
import baseCellRenderer from './baseCellRenderer';
import messages from './messages';

var lastModifiedByCellRenderer = function lastModifiedByCellRenderer(intl) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      dateFormat = _ref.dateFormat;

  return function (cellRendererParams) {
    return baseCellRenderer(cellRendererParams, function (_ref2) {
      var modified_at = _ref2.modified_at,
          modified_by = _ref2.modified_by;
      var lastModified = '';

      if (dateFormat) {
        lastModified = intl.formatDate(modified_at, dateFormat);
      } else if (intl.formatRelativeTime) {
        // react-intl v3
        lastModified = intl.formatRelativeTime(Date.parse(modified_at) - Date.now(), 'day', {
          style: 'short',
          numeric: 'auto'
        });
      } else {
        // react-intl v2
        lastModified = intl.formatRelative(Date.parse(modified_at), {
          units: 'day-short',
          style: 'numeric'
        });
      }

      if (modified_by) {
        var id = modified_by.id,
            name = modified_by.name,
            email = modified_by.email,
            login = modified_by.login;
        var user = formatUser({
          id: id,
          email: email || login,
          name: name
        }, intl);
        return intl.formatMessage(messages.lastModifiedBy, {
          lastModified: lastModified,
          user: user
        });
      }

      return lastModified;
    });
  };
};

export default lastModifiedByCellRenderer;
//# sourceMappingURL=lastModifiedByCellRenderer.js.map