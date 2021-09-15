function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
 * @file HOC for drag drop
 * @author Box
 */
import React, { PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';

/* eslint-disable no-plusplus */
var makeDroppable = function makeDroppable(_ref) {
  var dropValidator = _ref.dropValidator,
      onDrop = _ref.onDrop;
  return function (Wrapped) {
    var _class, _temp;

    return _temp = _class =
    /*#__PURE__*/
    function (_PureComponent) {
      _inherits(DroppableComponent, _PureComponent);

      /**
       * [constructor]
       *
       * @param {*} props
       * @return {DroppableComponent}
       */
      function DroppableComponent(props) {
        var _this;

        _classCallCheck(this, DroppableComponent);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(DroppableComponent).call(this, props));

        _defineProperty(_assertThisInitialized(_this), "removeEventListeners", function (element) {
          element.removeEventListener('dragenter', _this.handleDragEnter);
          element.removeEventListener('dragover', _this.handleDragOver);
          element.removeEventListener('dragleave', _this.handleDragLeave);
          element.removeEventListener('drop', _this.handleDrop);
        });

        _defineProperty(_assertThisInitialized(_this), "bindDragDropHandlers", function () {
          var droppableEl = findDOMNode(_assertThisInitialized(_this)); // eslint-disable-line react/no-find-dom-node

          if (!droppableEl || !(droppableEl instanceof Element)) {
            return;
          } // add event listeners directly on the element


          droppableEl.addEventListener('dragenter', _this.handleDragEnter);
          droppableEl.addEventListener('dragover', _this.handleDragOver);
          droppableEl.addEventListener('dragleave', _this.handleDragLeave);
          droppableEl.addEventListener('drop', _this.handleDrop);
          _this.droppableEl = droppableEl;
        });

        _defineProperty(_assertThisInitialized(_this), "handleDragEnter", function (event) {
          // This allows onDrop to be fired
          event.preventDefault(); // Use this to track the number of drag enters and leaves.
          // This is used to normalize enters/leaves between parent/child elements
          // we only want to do things in dragenter when the counter === 1

          if (++_this.enterLeaveCounter === 1) {
            var dataTransfer = event.dataTransfer; // if we don't have a dropValidator, we just default canDrop to true

            var canDrop = dropValidator ? dropValidator(_this.props, dataTransfer) : true;

            _this.setState({
              isOver: true,
              canDrop: canDrop
            });
          }
        });

        _defineProperty(_assertThisInitialized(_this), "handleDragOver", function (event) {
          // This allows onDrop to be fired
          event.preventDefault();
          var canDrop = _this.state.canDrop;
          var dataTransfer = event.dataTransfer;

          if (!dataTransfer) {
            return;
          }

          if (!canDrop) {
            dataTransfer.dropEffect = 'none';
          } else if (dataTransfer.effectAllowed) {
            // Set the drop effect if it was defined
            dataTransfer.dropEffect = dataTransfer.effectAllowed;
          }
        });

        _defineProperty(_assertThisInitialized(_this), "handleDrop", function (event) {
          event.preventDefault(); // reset enterLeaveCounter

          _this.enterLeaveCounter = 0;
          var canDrop = _this.state.canDrop;

          _this.setState({
            canDrop: false,
            isDragging: false,
            isOver: false
          });

          if (canDrop && onDrop) {
            onDrop(event, _this.props);
          }
        });

        _defineProperty(_assertThisInitialized(_this), "handleDragLeave", function (event) {
          event.preventDefault(); // if enterLeaveCounter is zero, it means that we're actually leaving the item

          if (--_this.enterLeaveCounter > 0) {
            return;
          }

          _this.setState({
            canDrop: false,
            isDragging: false,
            isOver: false
          });
        });

        _this.enterLeaveCounter = 0;
        _this.state = {
          canDrop: false,
          isDragging: false,
          isOver: false
        };
        return _this;
      }
      /**
       * Adds event listeners once the component mounts
       * @inheritdoc
       */


      _createClass(DroppableComponent, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.bindDragDropHandlers();
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          if (!this.droppableEl) {
            this.bindDragDropHandlers();
            return;
          } // eslint-disable-next-line react/no-find-dom-node


          if (findDOMNode(this) !== this.droppableEl) {
            this.removeEventListeners(this.droppableEl);
            this.bindDragDropHandlers();
          }
        }
        /**
         * Function that removes the drag and drop related event listeners on the input element
         *
         * @param {Element} element
         * @return {void}
         */

      }, {
        key: "componentWillUnmount",

        /**
         * Removes event listeners when the component is going to unmount
         * @inheritdoc
         */
        value: function componentWillUnmount() {
          if (!this.droppableEl || !(this.droppableEl instanceof Element)) {
            return;
          }

          this.removeEventListeners(this.droppableEl);
        }
        /**
         * Function that gets called when an item is dragged into the drop zone
         *
         * @param {SyntheticEvent} event - The dragenter event
         * @return {void}
         */

      }, {
        key: "render",

        /**
         * Renders the HOC
         *
         * @private
         * @inheritdoc
         * @return {Element}
         */
        value: function render() {
          var _this$props = this.props,
              className = _this$props.className,
              rest = _objectWithoutProperties(_this$props, ["className"]);

          var _this$state = this.state,
              canDrop = _this$state.canDrop,
              isOver = _this$state.isOver;
          var classes = classNames(className, {
            'is-droppable': canDrop,
            'is-over': isOver
          });

          var mergedProps = _objectSpread({}, rest, {}, this.state, {
            className: classes
          });

          return React.createElement(Wrapped, mergedProps);
        }
      }]);

      return DroppableComponent;
    }(PureComponent), _defineProperty(_class, "defaultProps", {
      className: ''
    }), _temp;
  };
};

export default makeDroppable;
//# sourceMappingURL=makeDroppable.js.map