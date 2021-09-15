function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * 
 * @file Form to invoke an integration via POST
 * @author Box
 */
import React, { PureComponent } from 'react';
import { HTTP_POST } from '../../constants';

var ExecuteForm =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ExecuteForm, _PureComponent);

  function ExecuteForm(props) {
    var _this;

    _classCallCheck(this, ExecuteForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExecuteForm).call(this, props));
    _this.ref = React.createRef();
    return _this;
  }

  _createClass(ExecuteForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var onSubmit = this.props.onSubmit;
      this.ref.current.submit();
      onSubmit();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$executePo = _this$props.executePostData,
          url = _this$props$executePo.url,
          params = _this$props$executePo.params,
          id = _this$props.id,
          windowName = _this$props.windowName;
      return React.createElement("form", {
        ref: this.ref,
        action: url,
        id: "bcow-execute-form-".concat(id),
        method: HTTP_POST,
        rel: "noreferrer noopener",
        target: windowName || '_blank'
      }, params && params.map(function (_ref) {
        var key = _ref.key,
            value = _ref.value;
        return React.createElement("input", {
          key: key,
          name: key,
          type: "hidden",
          value: value
        });
      }));
    }
  }]);

  return ExecuteForm;
}(PureComponent);

export default ExecuteForm;
//# sourceMappingURL=ExecuteForm.js.map