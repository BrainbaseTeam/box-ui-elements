import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../../messages';
import ErrorState from '../error-state/ErrorState';

function EmptyState() {
  return React.createElement(ErrorState, null, React.createElement(FormattedMessage, messages.noPosts));
}

export default EmptyState;
//# sourceMappingURL=EmptyState.js.map