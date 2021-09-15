function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * Utility class for the FormattedCompMessage component.
 */
import React from 'react';
import { JSTYPE_BOOLEAN, JSTYPE_NUMBER, JSTYPE_OBJECT, JSTYPE_STRING } from './constants';

var MessageAccumulator = require('message-accumulator').default; // ES5 CommonJS module


var Node = require('ilib-tree-node').default; // ES5 CommonJS module

/**
 * @class Compose a tree of React elements into a single string.
 *
 * @param {React.Element} element the element to compose
 */


var Composition =
/*#__PURE__*/
function () {
  function Composition(element) {
    _classCallCheck(this, Composition);

    this.element = element;
    this.isComposed = false;
    this.ma = new MessageAccumulator();
    this.keyIndex = 0;
  }

  _createClass(Composition, [{
    key: "recompose",
    value: function recompose(element) {
      var _this = this;

      switch (_typeof(element)) {
        case JSTYPE_OBJECT:
          if (Array.isArray(element)) {
            element.forEach(function (subelement) {
              return _this.recompose(subelement);
            });
          } else if (element) {
            if (element.type === 'Param' || element.type.name === 'Param') {
              this.ma.addParam(element);
            } else {
              this.ma.push(element);
              React.Children.forEach(element.props.children, function (child) {
                return _this.recompose(child);
              });
              this.ma.pop();
            }
          }

          break;

        case JSTYPE_NUMBER:
        case JSTYPE_BOOLEAN:
          this.ma.addText(String(element));
          break;

        case JSTYPE_STRING:
          this.ma.addText(element);
          break;

        default:
          break;
      }
    }
    /**
     * Compose a tree of react elements to a string that can be translated.
     *
     * @return {string} a string representing the tree of react elements
     */

  }, {
    key: "compose",
    value: function compose() {
      this.index = 0;

      if (!this.isComposed) {
        this.recompose(this.element);
      }

      this.isComposed = true;
      return this.ma.getMinimalString();
    }
    /**
     * @private
     */

  }, {
    key: "nextKey",
    value: function nextKey() {
      var result = "key".concat(this.keyIndex);
      this.keyIndex += 1;
      return result;
    }
    /**
     * @private
     */

  }, {
    key: "mapToReactElements",
    value: function mapToReactElements(node) {
      if (!node) return '';
      var children = [];

      for (var i = 0; i < node.children.length; i += 1) {
        children.push(this.mapToReactElements(node.children[i]));
      }

      var el = node.extra;

      if (children.length === 0 && el && el.props) {
        var temp = el.props.temp;
        children = temp;
      }

      if (children && children.length === 1 && typeof children[0] === 'string') {
        var _children = children;

        var _children2 = _slicedToArray(_children, 1);

        children = _children2[0];
      }

      if (el) {
        return children && children.length ? React.cloneElement(el, {
          key: el.key || this.nextKey()
        }, children) : React.cloneElement(el, {
          key: el.key || this.nextKey()
        });
      }

      if (children.length) {
        return children.length > 1 ? children : children[0];
      }

      return node.value || '';
    }
    /**
     * Convert a composed string back into an array of React elements. The elements are clones of
     * the same ones that this composition was created with, so that they have the same type and
     * props and such as the originals. The elements may be re-ordered from the original, however,
     * if the grammar of the target language requires moving around text, HTML tags, or
     * subcomponents.
     *
     * @param {string} string the string to decompose into a tree of React elements.
     * @return {React.Element} a react element
     */

  }, {
    key: "decompose",
    value: function decompose(string) {
      if (!this.isComposed) {
        // need to create the mapping first from names to react elements
        this.compose();
      }

      var translation = MessageAccumulator.create(string, this.ma);
      var nodeArray = [new Node({
        type: 'root',
        use: 'start'
      })].concat(this.ma.getPrefix()).concat(translation.root.toArray().slice(1, -1)).concat(this.ma.getSuffix()).concat([new Node({
        type: 'root',
        use: 'end'
      })]); // convert to a tree again

      return this.mapToReactElements(Node.fromArray(nodeArray));
    }
  }]);

  return Composition;
}();

export default Composition;
//# sourceMappingURL=Composition.js.map