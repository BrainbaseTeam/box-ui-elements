function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @deprecated, use Collapsible

/**
 * 
 * @file Preview sidebar section component
 * @author Box
 */
import * as React from 'react';
import classNames from 'classnames';
import PlainButton from '../../components/plain-button/PlainButton';
import IconCaretDown from '../../icons/general/IconCaretDown';
import { COLOR_999 } from '../../constants';
import './SidebarSection.scss';

var SidebarSection = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(SidebarSection, _React$PureComponent);

  var _super = _createSuper(SidebarSection);

  /**
   * [constructor]
   *
   * @private
   * @return {ContentPreview}
   */
  function SidebarSection(props) {
    var _this;

    _classCallCheck(this, SidebarSection);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "toggleVisibility", function () {
      _this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });
    });

    _this.state = {
      isOpen: props.isOpen
    };
    return _this;
  }
  /**
   * Click handler for toggling the section
   *
   * @private
   * @param {Event} event - click event
   * @return {void}
   */


  _createClass(SidebarSection, [{
    key: "render",

    /**
     * Renders the section
     *
     * @private
     * @inheritdoc
     * @return {void}
     */
    value: function render() {
      var isOpen = this.state.isOpen;
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          title = _this$props.title,
          interactionTarget = _this$props.interactionTarget;
      var sectionClassName = classNames('bcs-section', {
        'bcs-section-open': isOpen
      }, className);
      return /*#__PURE__*/React.createElement("div", {
        className: sectionClassName
      }, title && /*#__PURE__*/React.createElement(PlainButton, {
        className: "bcs-section-title",
        "data-resin-target": interactionTarget,
        onClick: this.toggleVisibility,
        type: "button"
      }, title, /*#__PURE__*/React.createElement(IconCaretDown, {
        color: COLOR_999,
        width: 8
      })), (isOpen || !title) && /*#__PURE__*/React.createElement("div", {
        className: "bcs-section-content"
      }, children));
    }
  }]);

  return SidebarSection;
}(React.PureComponent);

_defineProperty(SidebarSection, "defaultProps", {
  className: '',
  isOpen: true
});

export default SidebarSection;
//# sourceMappingURL=SidebarSection.js.map