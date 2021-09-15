function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { injectIntl } from 'react-intl';
import isNaN from 'lodash/isNaN';
import isDevEnvironment from '../../utils/env';
import { CATEGORY_ZERO, CATEGORY_ONE, CATEGORY_TWO, CATEGORY_FEW, CATEGORY_MANY, CATEGORY_OTHER } from './constants';
import Composition from './Composition';

/**
 * Replace the text inside of this component with a translation. This
 * component is built on top of react-intl, so it works along with the
 * regular react-intl components and objects you are used to, and it gets
 * its translations from react intl as well. The FormattedCompMessage component can
 * be used wherever it is valid to put JSX text. In regular Javascript
 * code, you should continue to use the intl.formatMessage() call and
 * extract your strings into a message.js file.
 */
var FormattedCompMessage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormattedCompMessage, _React$Component);

  function FormattedCompMessage(props) {
    var _this;

    _classCallCheck(this, FormattedCompMessage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormattedCompMessage).call(this, props));
    /* eslint-disable no-console */

    console.warn("box-ui-elements: the FormattedCompMessage component is deprecated! Use react-intl's FormattedMessage instead.");
    /* eslint-enable no-console */
    // these parameters echo the ones in react-intl's FormattedMessage
    // component, plus a few extra

    var _this$props = _this.props,
        defaultMessage = _this$props.defaultMessage,
        count = _this$props.count,
        children = _this$props.children;
    var sourceElements = defaultMessage || children;

    if (sourceElements) {
      var composition = new Composition(sourceElements);
      var source = '';

      if (!isNaN(Number(count))) {
        if (children) {
          source = _this.composePluralString(children);
        } else if (isDevEnvironment()) {
          throw new Error('Cannot use count prop on a FormattedCompMessage component that has no children.');
        }
      } else {
        source = composition.compose();
      }

      _this.state = {
        source: source,
        composition: composition
      };
    }

    return _this;
  }
  /**
   * Search for any Plural elements in the children, and
   * then construct the English source string in the correct
   * format for react-intl to use for pluralization
   * @param {React.Element} children the children of this node
   * @return {string} the composed plural string
   */


  _createClass(FormattedCompMessage, [{
    key: "composePluralString",
    value: function composePluralString(children) {
      var categories = {};
      React.Children.forEach(children, function (child) {
        if (_typeof(child) === 'object' && React.isValidElement(child) && child.type.name === 'Plural') {
          var childComposition = new Composition(child.props.children);
          categories[child.props.category] = childComposition.compose();
        }
      });

      if (!categories.one || !categories.other) {
        if (isDevEnvironment()) {
          throw new Error('Cannot use count prop on a FormattedCompMessage component without giving both a "one" and "other" Plural component in the children.');
        }
      } // add these to the string in a particular order so that
      // we always end up with the same string regardless of
      // the order that the Plural elements were specified in
      // the source code


      var categoriesString = [CATEGORY_ZERO, CATEGORY_ONE, CATEGORY_TWO, CATEGORY_FEW, CATEGORY_MANY, CATEGORY_OTHER].map(function (category) {
        return categories[category] ? " ".concat(category, " {").concat(categories[category], "}") : '';
      }).join(''); // see the intl-messageformat project for an explanation of this syntax

      return "{count, plural,".concat(categoriesString, "}");
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          count = _this$props2.count,
          tagName = _this$props2.tagName,
          intl = _this$props2.intl,
          description = _this$props2.description,
          id = _this$props2.id,
          defaultMessage = _this$props2.defaultMessage,
          rest = _objectWithoutProperties(_this$props2, ["count", "tagName", "intl", "description", "id", "defaultMessage"]);

      var _this$state = this.state,
          composition = _this$state.composition,
          source = _this$state.source;
      var values = {};

      if (typeof count === 'number') {
        // make sure intl.formatMessage switches properly on the count
        values.count = count;
      } // react-intl will do the correct plurals if necessary


      var descriptor = {
        id: id,
        defaultMessage: source,
        description: description
      };
      var translation = intl.formatMessage(descriptor, values); // always wrap the translated string in a tag to contain everything
      // and to give us a spot to record the id. The resource id is the
      // the id in mojito for the string. Having this attr has these advantages:
      // 1. When debugging i18n or translation problems, it is MUCH easier to find
      // the exact string to fix in Mojito rather than guessing. It might be useful
      // for general debugging as well to map from something you see in the UI to
      // the actual code that implements it.
      // 2. It can be used by an in-context linguistic review tool. The tool code
      // can contact mojito and retrieve the English for any translation errors that
      // the reviewer finds and submit translation tickets to Jira and/or fixed
      // translations directly back to Mojito.
      // 3. It can be used by the planned "text experiment framework" to identify
      // whole strings in the UI that can be A/B tested in various langauges without
      // publishing new versions of the code.

      return React.createElement(tagName, _objectSpread({
        key: id,
        'x-resource-id': id
      }, rest), composition.decompose(translation));
    }
  }]);

  return FormattedCompMessage;
}(React.Component);

_defineProperty(FormattedCompMessage, "defaultProps", {
  tagName: 'span'
});

export default injectIntl(FormattedCompMessage);
//# sourceMappingURL=FormattedCompMessage.js.map