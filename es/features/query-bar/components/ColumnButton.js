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

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { Flyout, Overlay } from '../../../components/flyout';
import Button from '../../../components/button/Button';
import MenuToggle from '../../../components/dropdown-menu/MenuToggle';
import IconMetadataColumns from '../../../icons/metadata-view/IconMetadataColumns';
import ColumnButtonOverlay from './ColumnButtonOverlay';
import messages from '../messages';

var ColumnButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ColumnButton, _React$Component);

  function ColumnButton(props) {
    var _this;

    _classCallCheck(this, ColumnButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ColumnButton).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onClose", function () {
      _this.setState({
        isColumnMenuOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onOpen", function () {
      _this.setState({
        isColumnMenuOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleColumnButton", function () {
      _this.setState({
        isColumnMenuOpen: !_this.state.isColumnMenuOpen
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getNumberOfHiddenColumns", function () {
      var columns = _this.props.columns;
      return columns ? columns.reduce(function (total, column) {
        if (!column.isShown) {
          return total + 1;
        }

        return total;
      }, 0) : 0;
    });

    _this.state = {
      isColumnMenuOpen: false
    };
    return _this;
  }

  _createClass(ColumnButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          template = _this$props.template,
          columns = _this$props.columns,
          onColumnChange = _this$props.onColumnChange;
      var isColumnMenuOpen = this.state.isColumnMenuOpen;
      var numberOfHiddenColumns = this.getNumberOfHiddenColumns();
      var buttonClasses = classNames('query-bar-button', numberOfHiddenColumns !== 0 ? 'is-active' : '');
      var columnsButtonText;

      if (numberOfHiddenColumns === 0) {
        columnsButtonText = React.createElement(FormattedMessage, messages.columnsButtonText);
      } else {
        columnsButtonText = React.createElement(FormattedMessage, _extends({
          values: {
            count: numberOfHiddenColumns
          }
        }, messages.columnsHiddenButtonText));
      }

      return React.createElement(Flyout, {
        className: "query-bar-column-dropdown-flyout",
        closeOnClick: true,
        closeOnClickOutside: true,
        onClose: this.onClose,
        onOpen: this.onOpen,
        position: "bottom-right"
      }, React.createElement(Button, {
        className: buttonClasses,
        isDisabled: template === undefined,
        onClick: this.toggleColumnButton,
        type: "button"
      }, React.createElement(MenuToggle, null, React.createElement(IconMetadataColumns, null), React.createElement("span", {
        className: "button-label"
      }, columnsButtonText))), React.createElement(Overlay, null, isColumnMenuOpen ? React.createElement(ColumnButtonOverlay, {
        columns: columns,
        onColumnChange: onColumnChange
      }) : React.createElement("div", null)));
    }
  }]);

  return ColumnButton;
}(React.Component);

export default ColumnButton;
//# sourceMappingURL=ColumnButton.js.map