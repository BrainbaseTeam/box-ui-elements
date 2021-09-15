import React from 'react'; // @ts-ignore flow import

import PreviewError from './PreviewError';
import { PreviewLoading } from '../../components/preview';
import './PreviewMask.scss';
export default function PreviewMask(_ref) {
  var errorCode = _ref.errorCode,
      extension = _ref.extension,
      isLoading = _ref.isLoading;

  if (!errorCode && !isLoading) {
    return null;
  }

  return React.createElement("div", {
    className: "bcpr-PreviewMask"
  }, errorCode ? React.createElement(PreviewError, {
    errorCode: errorCode
  }) : isLoading && React.createElement(PreviewLoading, {
    extension: extension
  }));
}
//# sourceMappingURL=PreviewMask.js.map