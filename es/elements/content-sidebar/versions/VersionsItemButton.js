function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Versions Item Button component
 * @author Box
 */
import * as React from 'react';
import classNames from 'classnames';
import PlainButton from '../../../components/plain-button';
import { scrollIntoView } from '../../../utils/dom';
import './VersionsItemButton.scss';

var VersionsItemButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VersionsItemButton, _React$Component);

  function VersionsItemButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, VersionsItemButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(VersionsItemButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "setButtonRef", function (buttonRef) {
      _this.buttonRef = buttonRef;
    });

    _defineProperty(_assertThisInitialized(_this), "setScroll", function () {
      var isSelected = _this.props.isSelected;

      if (_this.buttonRef && isSelected) {
        scrollIntoView(_this.buttonRef);
      }
    });

    return _this;
  }

  _createClass(VersionsItemButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setScroll();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var prevIsSelected = _ref.isSelected;
      var isSelected = this.props.isSelected;

      if (isSelected !== prevIsSelected) {
        this.setScroll();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          fileId = _this$props.fileId,
          isCurrent = _this$props.isCurrent,
          isDisabled = _this$props.isDisabled,
          isSelected = _this$props.isSelected,
          onClick = _this$props.onClick;
      var buttonClassName = classNames('bcs-VersionsItemButton', {
        'bcs-is-disabled': isDisabled,
        'bcs-is-selected': isSelected && !isDisabled
      });
      return React.createElement(PlainButton, {
        "aria-disabled": isDisabled,
        className: buttonClassName,
        "data-resin-iscurrent": isCurrent,
        "data-resin-itemid": fileId,
        "data-resin-target": "select",
        "data-testid": "versions-item-button",
        getDOMRef: this.setButtonRef,
        isDisabled: isDisabled,
        onClick: onClick,
        type: "button"
      }, children);
    }
  }]);

  return VersionsItemButton;
}(React.Component);

_defineProperty(VersionsItemButton, "defaultProps", {
  isCurrent: false,
  isDisabled: false,
  isSelected: false
});

export default VersionsItemButton;
//# sourceMappingURL=VersionsItemButton.js.map