function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

import * as React from 'react';
import { injectIntl } from 'react-intl';
import { Modal } from '../../components/modal';
import UnifiedShareModalTitle from './UnifiedShareModalTitle';
import UnifiedShareForm from './UnifiedShareForm';
import RemoveLinkConfirmModal from './RemoveLinkConfirmModal';
import './UnifiedShareModal.scss';

var UnifiedShareModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UnifiedShareModal, _React$Component);

  function UnifiedShareModal(props) {
    var _this;

    _classCallCheck(this, UnifiedShareModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UnifiedShareModal).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getInitialData", function () {
      var getInitialData = _this.props.getInitialData;
      getInitialData().finally(function () {
        _this.setState({
          isFetching: false,
          shouldRenderFTUXTooltip: true
        });
      });

      _this.setState({
        getInitialDataCalled: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFtuxCloseClick", function () {
      _this.setState({
        shouldRenderFTUXTooltip: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "openConfirmModal", function () {
      _this.setState({
        isConfirmModalOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeConfirmModal", function () {
      _this.setState({
        isConfirmModalOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "removeLink", function () {
      var _this$props = _this.props,
          onRemoveLink = _this$props.onRemoveLink,
          displayInModal = _this$props.displayInModal;
      onRemoveLink();

      if (!displayInModal) {
        _this.closeConfirmModal();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderUSF", function () {
      var _this$props2 = _this.props,
          sharedLinkEditTagTargetingApi = _this$props2.sharedLinkEditTagTargetingApi,
          sharedLinkEditTooltipTargetingApi = _this$props2.sharedLinkEditTooltipTargetingApi;
      var _this$state = _this.state,
          isFetching = _this$state.isFetching,
          sharedLinkLoaded = _this$state.sharedLinkLoaded,
          shouldRenderFTUXTooltip = _this$state.shouldRenderFTUXTooltip;
      return React.createElement(UnifiedShareForm, _extends({}, _this.props, {
        handleFtuxCloseClick: _this.handleFtuxCloseClick,
        isFetching: isFetching,
        openConfirmModal: _this.openConfirmModal,
        sharedLinkEditTagTargetingApi: sharedLinkEditTagTargetingApi,
        sharedLinkEditTooltipTargetingApi: sharedLinkEditTooltipTargetingApi,
        sharedLinkLoaded: sharedLinkLoaded,
        shouldRenderFTUXTooltip: shouldRenderFTUXTooltip
      }));
    });

    var initialDataReceived = props.initialDataReceived;
    _this.state = {
      getInitialDataCalled: !!initialDataReceived,
      isConfirmModalOpen: false,
      isEmailLinkSectionExpanded: false,
      isFetching: !initialDataReceived,
      sharedLinkLoaded: false,
      shouldRenderFTUXTooltip: false,
      showCollaboratorList: false
    };
    return _this;
  }

  _createClass(UnifiedShareModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props3 = this.props,
          item = _this$props3.item,
          trackingProps = _this$props3.trackingProps;
      var type = item.type,
          typedID = item.typedID;
      var modalTracking = trackingProps.modalTracking;
      var onLoad = modalTracking.onLoad;
      var getInitialDataCalled = this.state.getInitialDataCalled; // This check is to ensure minimum item props are
      // hydrated before we fetch data

      if (!getInitialDataCalled && type && typedID) {
        this.getInitialData();
      }

      if (onLoad) {
        onLoad();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props4 = this.props,
          item = _this$props4.item,
          sharedLink = _this$props4.sharedLink;
      var type = item.type,
          typedID = item.typedID;
      var prevSharedLink = prevProps.sharedLink;
      var getInitialDataCalled = this.state.getInitialDataCalled; // This check is to ensure minimum item props are
      // hydrated before we fetch data

      if (!getInitialDataCalled && type && typedID) {
        this.getInitialData();
      } // we use state to override the default auto copy prop when a URL comes into view


      if (prevSharedLink.url !== sharedLink.url && sharedLink.url) {
        this.setState({
          sharedLinkLoaded: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      // Shared link section props
      var _this$props5 = this.props,
          canInvite = _this$props5.canInvite,
          displayInModal = _this$props5.displayInModal,
          isOpen = _this$props5.isOpen,
          item = _this$props5.item,
          onRequestClose = _this$props5.onRequestClose,
          submitting = _this$props5.submitting,
          trackingProps = _this$props5.trackingProps;
      var modalTracking = trackingProps.modalTracking,
          removeLinkConfirmModalTracking = trackingProps.removeLinkConfirmModalTracking;
      var modalProps = modalTracking.modalProps;
      var _this$state2 = this.state,
          isEmailLinkSectionExpanded = _this$state2.isEmailLinkSectionExpanded,
          isConfirmModalOpen = _this$state2.isConfirmModalOpen,
          showCollaboratorList = _this$state2.showCollaboratorList; // focus logic at modal level

      var extendedModalProps = _objectSpread({
        focusElementSelector: canInvite ? '.bdl-PillSelector-input' // focus on invite collabs field
        : '.toggle-simple'
      }, modalProps);

      return React.createElement(React.Fragment, null, displayInModal ? React.createElement(Modal, _extends({
        className: "be-modal unified-share-modal",
        isOpen: isConfirmModalOpen ? false : isOpen,
        onRequestClose: submitting ? undefined : onRequestClose,
        title: React.createElement(UnifiedShareModalTitle, {
          isEmailLinkSectionExpanded: isEmailLinkSectionExpanded,
          showCollaboratorList: showCollaboratorList,
          item: item
        })
      }, extendedModalProps), this.renderUSF()) : React.createElement("div", {
        className: "bdl-UnifiedShareForm-container"
      }, this.renderUSF()), isConfirmModalOpen && React.createElement(RemoveLinkConfirmModal, _extends({
        isOpen: isConfirmModalOpen,
        onRequestClose: this.closeConfirmModal,
        removeLink: this.removeLink,
        submitting: submitting
      }, removeLinkConfirmModalTracking)));
    }
  }]);

  return UnifiedShareModal;
}(React.Component);

_defineProperty(UnifiedShareModal, "defaultProps", {
  displayInModal: true,
  initiallySelectedContacts: [],
  isAllowEditSharedLinkForFileEnabled: false,
  createSharedLinkOnLoad: false,
  focusSharedLinkOnLoad: false,
  restrictedExternalCollabEmails: [],
  trackingProps: {
    inviteCollabsEmailTracking: {},
    sharedLinkEmailTracking: {},
    sharedLinkTracking: {},
    inviteCollabTracking: {},
    modalTracking: {},
    removeLinkConfirmModalTracking: {},
    collaboratorListTracking: {}
  }
});

export { UnifiedShareModal as UnifiedShareModalBase };
export default injectIntl(UnifiedShareModal);
//# sourceMappingURL=UnifiedShareModal.js.map