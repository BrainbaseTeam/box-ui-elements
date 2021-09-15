function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import isEqual from 'lodash/isEqual';
import CustomNewField from './CustomInstanceNewField';
import CustomMetadataField from '../metadata-instance-fields/CustomMetadataField';
import EmptyContent from './EmptyContent';
import { FIELD_TYPE_STRING } from '../metadata-instance-fields/constants';

var CustomInstance =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(CustomInstance, _React$PureComponent);

  _createClass(CustomInstance, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, _ref2) {
      var data = _ref.data;
      var properties = _ref2.properties;

      if (!isEqual(data, properties)) {
        return {
          properties: _objectSpread({}, data)
        };
      }

      return null;
    }
  }]);

  function CustomInstance(props) {
    var _this;

    _classCallCheck(this, CustomInstance);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CustomInstance).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onFieldChange", function (key, value) {
      var _this$props = _this.props,
          canEdit = _this$props.canEdit,
          onFieldChange = _this$props.onFieldChange;

      if (canEdit && onFieldChange) {
        onFieldChange(key, value, FIELD_TYPE_STRING);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onFieldRemove", function (key) {
      var _this$props2 = _this.props,
          canEdit = _this$props2.canEdit,
          onFieldRemove = _this$props2.onFieldRemove;

      if (canEdit && onFieldRemove) {
        onFieldRemove(key);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onAddFieldToggle", function () {
      _this.setState(function (prevState) {
        return {
          isAddFieldVisible: !prevState.isAddFieldVisible
        };
      });
    });

    _this.state = {
      isAddFieldVisible: false,
      properties: _objectSpread({}, props.data)
    };
    return _this;
  }
  /**
   * Adds/updates a new metadata key value pair
   *
   * @param {string} key - metadata key
   * @param {string} value - metadata value
   * @return {void}
   */


  _createClass(CustomInstance, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var canEdit = this.props.canEdit;
      var _this$state = this.state,
          isAddFieldVisible = _this$state.isAddFieldVisible,
          properties = _this$state.properties;
      var fields = Object.keys(properties);
      var canAddFields = canEdit && (isAddFieldVisible || fields.length === 0);
      return React.createElement(React.Fragment, null, fields.map(function (key, index) {
        return React.createElement(CustomMetadataField, {
          key: key,
          canEdit: canEdit,
          dataKey: key,
          dataValue: properties[key],
          isLast: !isAddFieldVisible && index === fields.length - 1,
          onAdd: _this2.onAddFieldToggle,
          onChange: _this2.onFieldChange,
          onRemove: _this2.onFieldRemove
        });
      }), !canAddFields && fields.length === 0 && React.createElement(EmptyContent, null), canAddFields && React.createElement(CustomNewField, {
        isCancellable: fields.length !== 0,
        onAdd: this.onFieldChange,
        onCancel: this.onAddFieldToggle,
        properties: this.props.data
      }));
    }
  }]);

  return CustomInstance;
}(React.PureComponent);

_defineProperty(CustomInstance, "defaultProps", {
  canEdit: true,
  data: {}
});

export default CustomInstance;
//# sourceMappingURL=CustomInstance.js.map