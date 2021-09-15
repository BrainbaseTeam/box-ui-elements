function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import isEqual from 'lodash/isEqual';
import cloneDeep from 'lodash/cloneDeep';
import noop from 'lodash/noop';
import Collapsible from '../../components/collapsible/Collapsible';
import Form from '../../components/form-elements/form/Form';
import LoadingIndicatorWrapper from '../../components/loading-indicator/LoadingIndicatorWrapper';
import PlainButton from '../../components/plain-button/PlainButton';
import Tooltip from '../../components/tooltip';
import IconMetadataColored from '../../icons/general/IconMetadataColored';
import IconAlertCircle from '../../icons/general/IconAlertCircle';
import IconEdit from '../../icons/general/IconEdit';
import { bdlWatermelonRed } from '../../styles/variables';
import { scrollIntoView } from '../../utils/dom';
import CascadePolicy from './CascadePolicy';
import TemplatedInstance from './TemplatedInstance';
import CustomInstance from './CustomInstance';
import MetadataInstanceConfirmDialog from './MetadataInstanceConfirmDialog';
import Footer from './Footer';
import messages from './messages';
import { FIELD_TYPE_FLOAT, FIELD_TYPE_INTEGER } from '../metadata-instance-fields/constants';
import TEMPLATE_CUSTOM_PROPERTIES from './constants';
import { JSON_PATCH_OP_REMOVE, JSON_PATCH_OP_ADD, JSON_PATCH_OP_REPLACE, JSON_PATCH_OP_TEST } from '../../common/constants';
import { isValidValue } from '../metadata-instance-fields/validateMetadataField';
import { isHidden } from './metadataUtil';
import { RESIN_TAG_TARGET } from '../../common/variables';
import './Instance.scss';

var createFieldKeyToTypeMap = function createFieldKeyToTypeMap() {
  var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return fields.reduce(function (prev, _ref) {
    var key = _ref.key,
        type = _ref.type;
    prev[key] = type;
    return prev;
  }, {});
};

var getValue = function getValue(data, key, type) {
  var value = data[key];

  switch (type) {
    case FIELD_TYPE_FLOAT:
      return parseFloat(value);

    case FIELD_TYPE_INTEGER:
      return parseInt(value, 10);

    default:
      return value;
  }
};

var Instance =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Instance, _React$PureComponent);

  function Instance(props) {
    var _this;

    _classCallCheck(this, Instance);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Instance).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onCancel", function () {
      var _this$props = _this.props,
          id = _this$props.id,
          onModification = _this$props.onModification;

      _this.setState(_this.getState(_this.props)); // Callback to parent to tell that something is dirty


      if (onModification) {
        onModification(id, false);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onConfirmRemove", function () {
      _this.setState({
        shouldConfirmRemove: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onConfirmCancel", function () {
      _this.setState({
        shouldConfirmRemove: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onRemove", function () {
      if (!_this.isEditing()) {
        return;
      }

      var _this$props2 = _this.props,
          id = _this$props2.id,
          onRemove = _this$props2.onRemove;

      if (onRemove) {
        onRemove(id);

        _this.setState({
          isBusy: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSave", function () {
      var _this$props3 = _this.props,
          cascadePolicy = _this$props3.cascadePolicy,
          originalData = _this$props3.data,
          id = _this$props3.id,
          isDirty = _this$props3.isDirty,
          isCascadingPolicyApplicable = _this$props3.isCascadingPolicyApplicable,
          onSave = _this$props3.onSave;
      var _this$state = _this.state,
          currentData = _this$state.data,
          errors = _this$state.errors,
          isCascadingEnabled = _this$state.isCascadingEnabled,
          isCascadingOverwritten = _this$state.isCascadingOverwritten;

      if (!_this.isEditing() || !isDirty || !onSave || Object.keys(errors).length) {
        return;
      }

      _this.setState({
        isBusy: true,
        isEditing: false,
        shouldShowCascadeOptions: false
      });

      onSave(id, _this.createJSONPatch(currentData, originalData), isCascadingPolicyApplicable ? {
        canEdit: cascadePolicy ? cascadePolicy.canEdit : false,
        id: cascadePolicy ? cascadePolicy.id : undefined,
        isEnabled: isCascadingEnabled,
        overwrite: isCascadingOverwritten
      } : undefined, cloneDeep(currentData));
    });

    _defineProperty(_assertThisInitialized(_this), "onFieldChange", function (key, value, type) {
      var _this$state2 = _this.state,
          data = _this$state2.data,
          errors = _this$state2.errors; // Don't do anything if data is the same or not in edit mode

      if (!_this.isEditing() || isEqual(data[key], value)) {
        return;
      }

      var isValid = isValidValue(type, value);

      var finalErrors = _objectSpread({}, errors);

      var finalData = cloneDeep(data);
      finalData[key] = value;

      if (isValid) {
        delete finalErrors[key];
      } else {
        finalErrors[key] = React.createElement(FormattedMessage, messages.invalidInput);
      }

      _this.setState({
        data: finalData,
        errors: finalErrors
      }, function () {
        _this.setDirty(type);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onFieldRemove", function (key) {
      if (!_this.isEditing()) {
        return;
      }

      var _this$state3 = _this.state,
          data = _this$state3.data,
          errors = _this$state3.errors;
      var finalData = cloneDeep(data);

      var finalErrors = _objectSpread({}, errors);

      delete finalData[key];
      delete finalErrors[key];

      _this.setState({
        data: finalData,
        errors: finalErrors
      }, _this.setDirty);
    });

    _defineProperty(_assertThisInitialized(_this), "onCascadeToggle", function (value) {
      var isCascadingPolicyApplicable = _this.props.isCascadingPolicyApplicable;

      if (!isCascadingPolicyApplicable) {
        return;
      }

      _this.setState({
        isCascadingEnabled: value,
        shouldShowCascadeOptions: value
      }, _this.setDirty);
    });

    _defineProperty(_assertThisInitialized(_this), "onCascadeModeChange", function (value) {
      var isCascadingPolicyApplicable = _this.props.isCascadingPolicyApplicable;

      if (!isCascadingPolicyApplicable) {
        return;
      }

      _this.setState({
        isCascadingOverwritten: value
      }, _this.setDirty);
    });

    _defineProperty(_assertThisInitialized(_this), "renderDeleteMessage", function (isFile, template) {
      var message;
      var isProperties = template.templateKey === TEMPLATE_CUSTOM_PROPERTIES;

      if (isProperties) {
        message = isFile ? 'fileMetadataRemoveCustomTemplateConfirm' : 'folderMetadataRemoveCustomTemplateConfirm';
      } else {
        message = isFile ? 'fileMetadataRemoveTemplateConfirm' : 'folderMetadataRemoveTemplateConfirm';
      }

      return React.createElement(FormattedMessage, _extends({}, messages[message], {
        values: {
          metadataName: template.displayName
        }
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "setDirty", function (type) {
      var _this$props4 = _this.props,
          id = _this$props4.id,
          isCascadingPolicyApplicable = _this$props4.isCascadingPolicyApplicable,
          onModification = _this$props4.onModification;
      var _this$state4 = _this.state,
          data = _this$state4.data,
          isCascadingEnabled = _this$state4.isCascadingEnabled,
          isCascadingOverwritten = _this$state4.isCascadingOverwritten;
      var hasDataChanged = !isEqual(data, _this.props.data);
      var hasCascadingChanged = false;

      if (isCascadingPolicyApplicable) {
        // isCascadingOverwritten always starts out as false, so true signifies a change
        hasCascadingChanged = isCascadingOverwritten || isCascadingEnabled !== _this.isCascadingEnabled(_this.props);
      } // Callback to parent to tell that something is dirty


      if (onModification) {
        onModification(id, hasDataChanged || hasCascadingChanged, type);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "collapsibleRef", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "toggleIsEditing", function () {
      _this.setState(function (prevState) {
        return {
          isEditing: !prevState.isEditing
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderEditButton", function () {
      var isDirty = _this.props.isDirty;
      var isBusy = _this.state.isBusy;

      var canEdit = _this.canEdit();

      var isEditing = _this.isEditing();

      var editClassName = classNames('metadata-instance-editor-instance-edit', {
        'metadata-instance-editor-instance-is-editing': isEditing
      });

      if (canEdit && !isDirty && !isBusy) {
        return React.createElement(Tooltip, {
          position: "top-left",
          text: React.createElement(FormattedMessage, messages.metadataEditTooltip)
        }, React.createElement(PlainButton, {
          className: editClassName,
          "data-resin-target": "metadata-instanceedit",
          onClick: _this.toggleIsEditing,
          type: "button"
        }, React.createElement(IconEdit, null)));
      }

      return null;
    });

    _this.state = _this.getState(props);
    _this.fieldKeyToTypeMap = createFieldKeyToTypeMap(props.template.fields);
    return _this;
  }

  _createClass(Instance, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref2, prevState) {
      var prevHasError = _ref2.hasError,
          prevIsDirty = _ref2.isDirty;
      var currentElement = this.collapsibleRef.current;
      var _this$props5 = this.props,
          hasError = _this$props5.hasError,
          isDirty = _this$props5.isDirty;
      var isEditing = prevState.isEditing;

      if (currentElement && this.state.shouldConfirmRemove) {
        scrollIntoView(currentElement, {
          block: 'start',
          behavior: 'smooth'
        });
      }

      if (hasError && hasError !== prevHasError) {
        // If hasError is true, which means an error occurred while
        // doing a network operation and hence hide the busy indicator
        // Saving also disables isEditing, so need to enable that back.
        // isDirty remains as it was before.
        this.setState({
          isBusy: false,
          isEditing: true
        });
      } else if (prevIsDirty && !isDirty) {
        // If the form was dirty and now its not dirty
        // we know a successful save may have happened.
        // We don't modify isEditing here because we maintain the
        // prior state for that. If we came here from a save
        // success then save already disabled isEditing.
        if (isEditing) {
          // We are still editing so don't reset it
          this.setState({
            isBusy: false
          });
        } else {
          // For a successfull save we reset cascading overwrite radio
          this.setState({
            isBusy: false,
            isCascadingOverwritten: false
          });
        }
      }
    }
    /**
     * Undo any changes made
     *
     * @return {void}
     */

  }, {
    key: "getState",

    /**
     * Returns the state from props
     *
     * @return {Object} - react state
     */
    value: function getState(props) {
      return {
        data: cloneDeep(props.data),
        errors: {},
        isBusy: false,
        isCascadingEnabled: this.isCascadingEnabled(props),
        isCascadingOverwritten: false,
        isEditing: false,
        shouldConfirmRemove: false,
        shouldShowCascadeOptions: false
      };
    }
    /**
     * Returns the card title with possible error mark
     *
     * @return {Object} - react title element
     */

  }, {
    key: "getTitle",
    value: function getTitle() {
      var _this$props6 = this.props,
          _this$props6$cascadeP = _this$props6.cascadePolicy,
          cascadePolicy = _this$props6$cascadeP === void 0 ? {} : _this$props6$cascadeP,
          hasError = _this$props6.hasError,
          isCascadingPolicyApplicable = _this$props6.isCascadingPolicyApplicable,
          template = _this$props6.template;
      var isProperties = template.templateKey === TEMPLATE_CUSTOM_PROPERTIES;
      var type = isCascadingPolicyApplicable && cascadePolicy.id ? 'cascade' : 'default';
      return React.createElement("span", {
        className: "metadata-instance-editor-instance-title"
      }, React.createElement(IconMetadataColored, {
        type: type
      }), React.createElement("span", {
        className: classNames('metadata-instance-editor-instance-title-text', {
          'metadata-instance-editor-instance-has-error': hasError
        })
      }, isProperties ? React.createElement(FormattedMessage, messages.customTitle) : template.displayName), hasError && React.createElement(IconAlertCircle, {
        color: bdlWatermelonRed
      }));
    }
    /**
     * Render the correct delete message to show based on custom metadata and file/folder metadata
     */

  }, {
    key: "getConfirmationMessage",

    /**
     * Get the delete confirmation message base on the template key
     */
    value: function getConfirmationMessage() {
      var _this$props7 = this.props,
          template = _this$props7.template,
          isCascadingPolicyApplicable = _this$props7.isCascadingPolicyApplicable;
      var isFile = !isCascadingPolicyApplicable;
      return this.renderDeleteMessage(isFile, template);
    }
    /**
     * Evaluates if the metadata was changed or cascading policy
     * altered or enabled.
     *
     * @return {void}
     */

  }, {
    key: "isCascadingEnabled",

    /**
     * Determines if cascading policy is enabled based on
     * whether it has an id or not.
     *
     * @param {Object} props - component props
     * @return {boolean} true if cascading policy is enabled
     */
    value: function isCascadingEnabled(props) {
      if (props.cascadePolicy) {
        return !!props.cascadePolicy.id;
      }

      return false;
    }
    /**
     * Toggles the edit mode
     *
     * @private
     * @return {void}
     */

  }, {
    key: "createJSONPatch",

    /**
     * Creates JSON Patch operations from the passed in
     * data while comparing it to the original data from props.
     *
     * Only diffs at the root level and primitives.
     *
     * @param {*} currentData - the latest changes by the user
     * @param {*} originalData - the original values
     * @return {Array} - JSON patch operations
     */
    value: function createJSONPatch(currentData, originalData) {
      var _this2 = this;

      var ops = [];
      var data = cloneDeep(currentData); // clone the data for mutation
      // Iterate over the original data and find keys that have changed.
      // Also remove them from the data object to only leave new keys.

      Object.keys(originalData).forEach(function (key) {
        var type = _this2.fieldKeyToTypeMap[key];
        var originalValue = getValue(originalData, key, type);
        var path = "/".concat(key);

        if (Object.prototype.hasOwnProperty.call(data, key)) {
          var value = getValue(data, key, type); // Only register changed data

          if (!isEqual(value, originalValue)) {
            // Add a test OP for each replaces
            ops.push({
              op: JSON_PATCH_OP_TEST,
              path: path,
              value: originalValue
            });
            ops.push({
              op: JSON_PATCH_OP_REPLACE,
              path: path,
              value: value
            });
          }
        } else {
          // Key was removed
          // Add a test OP for removes
          ops.push({
            op: JSON_PATCH_OP_TEST,
            path: path,
            value: originalValue
          });
          ops.push({
            op: JSON_PATCH_OP_REMOVE,
            path: path
          });
        }

        delete data[key];
      }); // Iterate over the remaining keys that are new.

      Object.keys(data).forEach(function (key) {
        var type = _this2.fieldKeyToTypeMap[key];
        var value = getValue(data, key, type);
        ops.push({
          op: JSON_PATCH_OP_ADD,
          path: "/".concat(key),
          value: value
        });
      });
      return ops;
    }
    /**
     * Utility function to determine if instance is editable
     *
     * @return {boolean} true if editable
     */

  }, {
    key: "canEdit",
    value: function canEdit() {
      var _this$props8 = this.props,
          canEdit = _this$props8.canEdit,
          onModification = _this$props8.onModification,
          onRemove = _this$props8.onRemove,
          onSave = _this$props8.onSave;
      return canEdit && typeof onRemove === 'function' && typeof onSave === 'function' && typeof onModification === 'function';
    }
    /**
     * Utility function to determine if instance is in edit mode
     *
     * @return {boolean} true if editing
     */

  }, {
    key: "isEditing",
    value: function isEditing() {
      var isEditing = this.state.isEditing;
      return this.canEdit() && isEditing;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props9 = this.props,
          _this$props9$cascadeP = _this$props9.cascadePolicy,
          cascadePolicy = _this$props9$cascadeP === void 0 ? {} : _this$props9$cascadeP,
          isDirty = _this$props9.isDirty,
          isCascadingPolicyApplicable = _this$props9.isCascadingPolicyApplicable,
          isOpen = _this$props9.isOpen,
          template = _this$props9.template;
      var _template$fields = template.fields,
          fields = _template$fields === void 0 ? [] : _template$fields;
      var _this$state5 = this.state,
          data = _this$state5.data,
          errors = _this$state5.errors,
          isBusy = _this$state5.isBusy,
          isCascadingEnabled = _this$state5.isCascadingEnabled,
          shouldConfirmRemove = _this$state5.shouldConfirmRemove,
          shouldShowCascadeOptions = _this$state5.shouldShowCascadeOptions,
          isCascadingOverwritten = _this$state5.isCascadingOverwritten;
      var isProperties = template.templateKey === TEMPLATE_CUSTOM_PROPERTIES;
      var isEditing = this.isEditing();

      if (!template || isHidden(template)) {
        return null;
      } // Animate short and tall cards at consistent speeds.


      var animationDuration = (fields.length + 1) * 50;
      return React.createElement("div", {
        ref: this.collapsibleRef
      }, React.createElement(Collapsible, {
        animationDuration: animationDuration,
        buttonProps: _defineProperty({}, RESIN_TAG_TARGET, 'metadata-card'),
        hasStickyHeader: true,
        headerActionItems: this.renderEditButton(),
        isBordered: true,
        isOpen: isOpen,
        title: this.getTitle()
      }, shouldConfirmRemove && React.createElement(LoadingIndicatorWrapper, {
        isLoading: isBusy
      }, React.createElement(MetadataInstanceConfirmDialog, {
        confirmationMessage: this.getConfirmationMessage(),
        onCancel: this.onConfirmCancel,
        onConfirm: this.onRemove
      })), !shouldConfirmRemove && React.createElement(LoadingIndicatorWrapper, {
        isLoading: isBusy
      }, React.createElement(Form, {
        onValidSubmit: isDirty ? this.onSave : noop
      }, React.createElement("div", {
        className: "metadata-instance-editor-instance"
      }, isCascadingPolicyApplicable && React.createElement(CascadePolicy, {
        canEdit: isEditing && !!cascadePolicy.canEdit,
        isCascadingEnabled: isCascadingEnabled,
        isCascadingOverwritten: isCascadingOverwritten,
        isCustomMetadata: isProperties,
        onCascadeModeChange: this.onCascadeModeChange,
        onCascadeToggle: this.onCascadeToggle,
        shouldShowCascadeOptions: shouldShowCascadeOptions
      }), isProperties ? React.createElement(CustomInstance, {
        canEdit: isEditing,
        data: data,
        onFieldChange: this.onFieldChange,
        onFieldRemove: this.onFieldRemove
      }) : React.createElement(TemplatedInstance, {
        canEdit: isEditing,
        data: data,
        errors: errors,
        onFieldChange: this.onFieldChange,
        onFieldRemove: this.onFieldRemove,
        template: template
      })), isEditing && React.createElement(Footer, {
        onCancel: this.onCancel,
        onRemove: this.onConfirmRemove,
        showSave: isDirty
      })))));
    }
  }]);

  return Instance;
}(React.PureComponent);

_defineProperty(Instance, "defaultProps", {
  data: {},
  isDirty: false
});

export default Instance;
//# sourceMappingURL=Instance.js.map