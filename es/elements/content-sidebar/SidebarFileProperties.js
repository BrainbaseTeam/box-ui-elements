function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Sidebar file properties component
 * @author Box
 */
import React from 'react';
import getProp from 'lodash/get';
import { injectIntl } from 'react-intl';
import ItemProperties from '../../features/item-details/ItemProperties';
import LoadingIndicatorWrapper from '../../components/loading-indicator/LoadingIndicatorWrapper';
import getFileSize from '../../utils/getFileSize';
import { INTERACTION_TARGET, DETAILS_TARGETS } from '../common/interactionTargets';
import withErrorHandling from './withErrorHandling';
import { PLACEHOLDER_USER } from '../../constants';

var SidebarFileProperties = function SidebarFileProperties(_ref) {
  var file = _ref.file,
      onDescriptionChange = _ref.onDescriptionChange,
      hasRetentionPolicy = _ref.hasRetentionPolicy,
      retentionPolicy = _ref.retentionPolicy,
      onRetentionPolicyExtendClick = _ref.onRetentionPolicyExtendClick,
      isLoading = _ref.isLoading,
      intl = _ref.intl;
  return React.createElement(LoadingIndicatorWrapper, {
    isLoading: isLoading
  }, React.createElement(ItemProperties, {
    createdAt: file.content_created_at,
    description: file.description,
    descriptionTextareaProps: _defineProperty({}, INTERACTION_TARGET, DETAILS_TARGETS.DESCRIPTION),
    modifiedAt: file.content_modified_at,
    onDescriptionChange: getProp(file, 'permissions.can_rename') ? onDescriptionChange : undefined,
    owner: getProp(file, 'owned_by.name'),
    retentionPolicyProps: hasRetentionPolicy ? _objectSpread({}, retentionPolicy, {
      openModal: onRetentionPolicyExtendClick
    }) : {},
    size: getFileSize(file.size, intl.locale) // use uploader_display_name if uploaded anonymously
    ,
    uploader: getProp(file, 'created_by.id') === PLACEHOLDER_USER.id ? getProp(file, 'uploader_display_name') : getProp(file, 'created_by.name')
  }));
};

export { SidebarFileProperties as SidebarFilePropertiesComponent };
export default injectIntl(withErrorHandling(SidebarFileProperties));
//# sourceMappingURL=SidebarFileProperties.js.map