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

/**
 * 
 * @file Read Only Keywords Card component
 * @author Box
 */
import * as React from 'react';
import PillCloud from '../../../../components/pill-cloud/PillCloud';
import { SKILLS_TARGETS, INTERACTION_TARGET } from '../../../common/interactionTargets';
import Timeline from '../timeline';
import getPills from './keywordUtils';
import './ReadOnlyKeywords.scss';

var ReadOnlyselecteds =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ReadOnlyselecteds, _React$PureComponent);

  function ReadOnlyselecteds() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ReadOnlyselecteds);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ReadOnlyselecteds)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      selectedIndex: -1
    });

    _defineProperty(_assertThisInitialized(_this), "onSelect", function (pill) {
      var selectedIndex = _this.state.selectedIndex;
      var newIndex = pill.value;

      _this.setState({
        selectedIndex: selectedIndex === newIndex ? -1 : newIndex
      });
    });

    return _this;
  }

  _createClass(ReadOnlyselecteds, [{
    key: "render",

    /**
     * Renders the keywords
     *
     * @private
     * @return {void}
     */
    value: function render() {
      var _this$props = this.props,
          keywords = _this$props.keywords,
          getViewer = _this$props.getViewer,
          duration = _this$props.duration;
      var selectedIndex = this.state.selectedIndex;
      var options = getPills(keywords);
      var selected = keywords[selectedIndex];
      var pillCloudProps = selected ? {
        selectedOptions: [options[selectedIndex]]
      } : {};
      return React.createElement(React.Fragment, null, React.createElement(PillCloud, _extends({
        onSelect: this.onSelect,
        options: options
      }, pillCloudProps, {
        buttonProps: _defineProperty({}, INTERACTION_TARGET, SKILLS_TARGETS.KEYWORDS.SELECT)
      })), !!selected && Array.isArray(selected.appears) && selected.appears.length > 0 && React.createElement(Timeline, {
        duration: duration,
        getViewer: getViewer,
        interactionTarget: SKILLS_TARGETS.KEYWORDS.TIMELINE,
        text: selected.text,
        timeslices: selected.appears
      }));
    }
  }]);

  return ReadOnlyselecteds;
}(React.PureComponent);

export default ReadOnlyselecteds;
//# sourceMappingURL=ReadOnlyKeywords.js.map