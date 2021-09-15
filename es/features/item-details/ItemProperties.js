function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import uniqueid from 'lodash/uniqueId';
import { FormattedDate, FormattedMessage } from 'react-intl';
import EditableDescription from './EditableDescription';
import EditableURL from './EditableURL';
import RetentionPolicy from './RetentionPolicy';
import ReadonlyDescription from './ReadonlyDescription';
import messages from './messages';
import './ItemProperties.scss';
var datetimeOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
};

var ItemProperties = function ItemProperties(_ref) {
  var createdAt = _ref.createdAt,
      description = _ref.description,
      _ref$descriptionTexta = _ref.descriptionTextareaProps,
      descriptionTextareaProps = _ref$descriptionTexta === void 0 ? {} : _ref$descriptionTexta,
      enterpriseOwner = _ref.enterpriseOwner,
      modifiedAt = _ref.modifiedAt,
      onDescriptionChange = _ref.onDescriptionChange,
      onValidURLChange = _ref.onValidURLChange,
      owner = _ref.owner,
      _ref$retentionPolicyP = _ref.retentionPolicyProps,
      retentionPolicyProps = _ref$retentionPolicyP === void 0 ? {} : _ref$retentionPolicyP,
      size = _ref.size,
      trashedAt = _ref.trashedAt,
      uploader = _ref.uploader,
      url = _ref.url;
  var descriptionId = uniqueid('description_');
  return React.createElement("dl", {
    className: "item-properties"
  }, description || onDescriptionChange ? React.createElement(React.Fragment, null, React.createElement(FormattedMessage, messages.description, function (text) {
    return React.createElement("dt", {
      id: descriptionId
    }, text);
  }), React.createElement("dd", null, onDescriptionChange ? React.createElement(EditableDescription, {
    onDescriptionChange: onDescriptionChange,
    textAreaProps: _objectSpread({}, descriptionTextareaProps, {
      'aria-labelledby': descriptionId
    }),
    value: description
  }) : React.createElement(ReadonlyDescription, {
    value: description
  }))) : null, !!url && React.createElement(React.Fragment, null, React.createElement(FormattedMessage, _extends({
    tagName: "dt"
  }, messages.url)), React.createElement("dd", null, onValidURLChange ? React.createElement(EditableURL, {
    onValidURLChange: onValidURLChange,
    value: url
  }) : url)), owner ? React.createElement(React.Fragment, null, React.createElement(FormattedMessage, _extends({
    tagName: "dt"
  }, messages.owner)), React.createElement("dd", null, owner)) : null, enterpriseOwner ? React.createElement(React.Fragment, null, React.createElement(FormattedMessage, _extends({
    tagName: "dt"
  }, messages.enterpriseOwner)), React.createElement("dd", null, enterpriseOwner)) : null, uploader ? React.createElement(React.Fragment, null, React.createElement(FormattedMessage, _extends({
    tagName: "dt"
  }, messages.uploader)), React.createElement("dd", null, uploader)) : null, createdAt ? React.createElement(React.Fragment, null, React.createElement(FormattedMessage, _extends({
    tagName: "dt"
  }, messages.created)), React.createElement("dd", null, React.createElement(FormattedDate, _extends({
    value: new Date(createdAt)
  }, datetimeOptions)))) : null, modifiedAt ? React.createElement(React.Fragment, null, React.createElement(FormattedMessage, _extends({
    tagName: "dt"
  }, messages.modified)), React.createElement("dd", null, React.createElement(FormattedDate, _extends({
    value: new Date(modifiedAt)
  }, datetimeOptions)))) : null, size ? React.createElement(React.Fragment, null, React.createElement(FormattedMessage, _extends({
    tagName: "dt"
  }, messages.size)), React.createElement("dd", null, size)) : null, trashedAt ? React.createElement(React.Fragment, null, React.createElement(FormattedMessage, _extends({
    tagName: "dt"
  }, messages.deleted)), React.createElement("dd", null, React.createElement(FormattedDate, _extends({
    value: new Date(trashedAt)
  }, datetimeOptions)))) : null, React.createElement(RetentionPolicy, retentionPolicyProps));
};

ItemProperties.propTypes = {
  /** the datetime this item was created, accepts any value that can be passed to the Date() constructor */
  createdAt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** a description for the item */
  description: PropTypes.string,

  /** props for the editable description textarea */
  descriptionTextareaProps: PropTypes.object,

  /** the name of the item's enterprise owner if the item is owned by a different enterprise */
  enterpriseOwner: PropTypes.string,

  /** the datetime this item was last modified, accepts any value that can be passed to the Date() constructor */
  modifiedAt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** function called on description textarea blur with the new value to save */
  onDescriptionChange: PropTypes.func,

  /** function called on url input blur with the new value to save */
  onValidURLChange: PropTypes.func,

  /** the name of the item's owner */
  owner: PropTypes.string,

  /** props for the retention policy of this item */
  retentionPolicyProps: PropTypes.object,

  /** use the getFileSize util to get a localized human-readable string from the number of bytes */
  size: PropTypes.string,

  /** the datetime this item was deleted or moved to trash, accepts any value that can be passed to the Date() constructor */
  trashedAt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** the name of the user who uploaded this item */
  uploader: PropTypes.string,

  /** the URL for the item when the item is a weblink */
  url: PropTypes.string
};
export default ItemProperties;
//# sourceMappingURL=ItemProperties.js.map