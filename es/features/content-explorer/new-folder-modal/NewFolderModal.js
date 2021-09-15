function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Modal, ModalActions } from '../../../components/modal';
import TextInput from '../../../components/text-input';
import Button from '../../../components/button';
import PrimaryButton from '../../../components/primary-button';
import messages from '../messages';
import './NewFolderModal.scss';

var NewFolderModal =
/*#__PURE__*/
function (_Component) {
  _inherits(NewFolderModal, _Component);

  function NewFolderModal(props) {
    var _this;

    _classCallCheck(this, NewFolderModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NewFolderModal).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleCreateClick", function () {
      var onCreateFolderSubmit = _this.props.onCreateFolderSubmit;
      var folderNameInput = _this.state.folderNameInput;
      onCreateFolderSubmit(folderNameInput);
    });

    _defineProperty(_assertThisInitialized(_this), "handleFolderNameInput", function (event) {
      var onCreateFolderInput = _this.props.onCreateFolderInput;
      var input = event.target.value;

      _this.setState({
        folderNameInput: input
      });

      if (onCreateFolderInput) {
        onCreateFolderInput(input);
      }
    });

    _this.state = {
      folderNameInput: ''
    };
    return _this;
  }

  _createClass(NewFolderModal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          intl = _this$props.intl,
          isOpen = _this$props.isOpen,
          onRequestClose = _this$props.onRequestClose,
          parentFolderName = _this$props.parentFolderName,
          isCreatingFolder = _this$props.isCreatingFolder,
          createFolderError = _this$props.createFolderError;
      var folderNameInput = this.state.folderNameInput;
      var isCreateButtonDisabled = !folderNameInput.trim().length || !!createFolderError || !!isCreatingFolder;
      return React.createElement(Modal, {
        className: classNames('new-folder-modal', className),
        focusElementSelector: ".folder-name-input input",
        isOpen: isOpen,
        onRequestClose: onRequestClose,
        title: React.createElement(FormattedMessage, _extends({}, messages.newFolderModalTitle, {
          values: {
            parentFolderName: parentFolderName
          }
        }))
      }, React.createElement(TextInput, {
        className: "folder-name-input",
        error: createFolderError,
        isRequired: true,
        label: React.createElement(FormattedMessage, messages.newFolderModalFolderNameLabel),
        onInput: this.handleFolderNameInput,
        placeholder: intl.formatMessage(messages.newFolderModalFolderNamePlaceholder),
        type: "text",
        value: folderNameInput
      }), React.createElement(ModalActions, null, React.createElement(Button, {
        className: "new-folder-modal-cancel-button",
        onClick: onRequestClose,
        type: "button"
      }, React.createElement(FormattedMessage, messages.newFolderModalCancel)), React.createElement(PrimaryButton, {
        className: "new-folder-modal-create-button",
        isDisabled: isCreateButtonDisabled,
        isLoading: isCreatingFolder,
        onClick: this.handleCreateClick,
        type: "button"
      }, React.createElement(FormattedMessage, messages.newFolderModalCreate))));
    }
  }]);

  return NewFolderModal;
}(Component);

_defineProperty(NewFolderModal, "propTypes", {
  /** Adds class name to modal. */
  className: PropTypes.string,
  intl: PropTypes.any,

  /** Opens the modal. */
  isOpen: PropTypes.bool,

  /** Called when the modal is requested to be closed. */
  onRequestClose: PropTypes.func.isRequired,

  /**
   * Called when the folder creation is submitted.
   *
   * @param {string} folderName
   */
  onCreateFolderSubmit: PropTypes.func.isRequired,

  /**
   * Called with the latest folder name input.
   *
   * @param {string} folderName
   */
  onCreateFolderInput: PropTypes.func,

  /** The name of the parent folder that the new folder will be created in. */
  parentFolderName: PropTypes.string,

  /** Folder is in the process of being created. */
  isCreatingFolder: PropTypes.bool,

  /** Message that will be shown when there was an error creating the folder. */
  createFolderError: PropTypes.string
});

_defineProperty(NewFolderModal, "defaultProps", {
  className: '',
  isOpen: false,
  parentFolderName: '',
  isCreatingFolder: false,
  createFolderError: null
});

export { NewFolderModal as NewFolderModalBase };
export default injectIntl(NewFolderModal);
//# sourceMappingURL=NewFolderModal.js.map