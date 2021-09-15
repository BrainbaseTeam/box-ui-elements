import baseCellRenderer from './baseCellRenderer';
import { formatUser } from './FormattedUser';

var userCellRenderer = function userCellRenderer(intl) {
  return function (cellRendererParams) {
    return baseCellRenderer(cellRendererParams, function (_ref) {
      var id = _ref.id,
          email = _ref.email,
          name = _ref.name,
          login = _ref.login;
      return formatUser({
        id: id,
        email: email || login,
        name: name
      }, intl);
    });
  };
};

export default userCellRenderer;
//# sourceMappingURL=userCellRenderer.js.map