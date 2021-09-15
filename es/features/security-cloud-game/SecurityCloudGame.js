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

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import throttle from 'lodash/throttle';
import Draggable from 'react-draggable';
import DragCloud from './DragCloud';
import DropCloud from './DropCloud';
import messages from './messages';
import './SecurityCloudGame.scss';

var SecurityCloudGame =
/*#__PURE__*/
function (_Component) {
  _inherits(SecurityCloudGame, _Component);

  function SecurityCloudGame(props) {
    var _this;

    _classCallCheck(this, SecurityCloudGame);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SecurityCloudGame).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onDragStop", function () {
      var onValidDrop = _this.props.onValidDrop;

      if (_this.state.isOverlap) {
        _this.setState({
          isValidDrop: true
        });

        if (onValidDrop) {
          // call onValidDrop if passed in through props
          onValidDrop();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onDrag", function (e, _ref) {
      var x = _ref.x,
          y = _ref.y;
      // x and y from the event handler passes the offset from starting point.
      // Add to initial value to calculate actual position.
      var newPosition = {
        x: _this.state.dragCloudPosition.x + x,
        y: _this.state.dragCloudPosition.y + y
      };

      var isOverlap = _this.checkOverlap(newPosition, _this.state.dropCloudPosition);

      _this.setState({
        isOverlap: isOverlap
      });
    });

    _this.occupiedRegions = [];
    _this.state = {
      isValidDrop: false,
      isOverlap: false
    };
    _this.onDrag = throttle(_this.onDrag, 100, {
      leading: true,
      trailing: true
    });
    _this.setGameBoardHeight = _this.setGameBoardHeight.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * If message height was set, calculate cloud positions and save to state.
   * @param {object} prevProps - previous props.
   * @param {object} prevState - previous state.
   * @returns {void}
   */


  _createClass(SecurityCloudGame, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // This should only happen once when game board height is calculated
      if (this.state.gameBoardHeight !== prevState.gameBoardHeight) {
        var dropCloudPosition = this.getRandomCloudPosition();
        var dragCloudPosition = this.getRandomCloudPosition();

        while (this.checkOverlap(dragCloudPosition, dropCloudPosition)) {
          dragCloudPosition = this.getRandomCloudPosition();
        } // we're relying on rendering of the initial DOM to measure message height and set states accordingly.
        // Calling setState in componentDidUpdate in this case is a fine use case.


        this.setState({
          dropCloudPosition: dropCloudPosition,
          dragCloudPosition: dragCloudPosition
        }); // eslint-disable-line
      }
    }
    /**
     * DragCloud drop event handler. Checks if it's valid drop and handles valid drop if it is.
     * @param {MouseEvent} e - The Drop event
     * @param {object} {x, y} - Object which contains x and y coordiante of the drop event.
     * @returns {void}
     */

  }, {
    key: "getRandom",

    /**
     * A wrapper function for Math.random for testing purposes.
     * @returns {float} number between 0 and 1.
     */
    value: function getRandom() {
      // eslint-disable-line class-methods-use-this
      return Math.random();
    }
    /**
     * Gets a random {x,y} position to place a cloud within the game board dimensions.
     * @returns {Object} - the {x,y} coordinates for the cloud
     */

  }, {
    key: "getRandomCloudPosition",
    value: function getRandomCloudPosition() {
      var _this$props = this.props,
          cloudSize = _this$props.cloudSize,
          width = _this$props.width;
      var height = this.state.gameBoardHeight; // get random x position.  calculate using width of board - cloudSize - some extra padding (1% of width);

      var x = this.getRandom() * (width - cloudSize - width * 0.01); // get random y position.  calculate using height of board - cloudSize - some extra padding (1% of height);

      var y = this.getRandom() * (height - cloudSize - height * 0.01);
      return {
        x: x,
        y: y
      };
    }
    /**
     * When message element is rendered, calculates board game dimenstions.
     * @param {node} messageElement - The message element.
     * @returns {void}
     */

  }, {
    key: "setGameBoardHeight",
    value: function setGameBoardHeight(messageElement) {
      // Only calculate game board height on mount.
      if (messageElement) {
        this.setState({
          gameBoardHeight: this.props.height - messageElement.getBoundingClientRect().height
        });
      }
    }
    /**
     * Checks if a given position has already been occupied.
     * The actual calculations checks if the midpoint of the dropcloud image is contained within the drag cloud image.
     * @param {object} dragCloudPosition - the x,y coordinates of drag cloud
     * @param {object} dropCloudPosition - the x,y coordinates of drop cloud
     * @returns boolean - true if there is an overlap, false otherwise
     */

  }, {
    key: "checkOverlap",
    value: function checkOverlap(dragCloudPosition, dropCloudPosition) {
      var cloudSize = this.props.cloudSize;
      var dragLeft = dragCloudPosition.x,
          dragTop = dragCloudPosition.y;
      var dragRight = dragLeft + cloudSize;
      var dragBottom = dragTop + cloudSize;
      var dropLeft = dropCloudPosition.x,
          dropTop = dropCloudPosition.y;
      var dropMidX = dropLeft + cloudSize / 2;
      var dropMidY = dropTop + cloudSize / 2;
      return !(dragBottom < dropMidY || dragTop > dropMidY || dragLeft > dropMidX || dragRight < dropMidX);
    }
    /**
     * Renders the drop cloud.
     * @returns {JSX}
     */

  }, {
    key: "renderDropCloud",
    value: function renderDropCloud() {
      var _this$state = this.state,
          isValidDrop = _this$state.isValidDrop,
          dropCloudPosition = _this$state.dropCloudPosition;

      if (dropCloudPosition && !isValidDrop) {
        var cloudSize = this.props.cloudSize; // return the drop region with a DragCloud and DropCloud by default

        return React.createElement(DropCloud, {
          className: this.state.isOverlap ? 'is-over' : '',
          cloudSize: cloudSize,
          position: dropCloudPosition
        });
      }

      return null;
    }
    /**
     * Renders the drag cloud.
     * @returns {JSX}
     */

  }, {
    key: "renderDragCloud",
    value: function renderDragCloud() {
      var _this$state2 = this.state,
          isValidDrop = _this$state2.isValidDrop,
          dragCloudPosition = _this$state2.dragCloudPosition;

      if (dragCloudPosition) {
        return React.createElement(Draggable, {
          bounds: "parent",
          disabled: isValidDrop,
          onDrag: this.onDrag,
          onStop: this.onDragStop
        }, React.createElement(DragCloud, {
          cloudSize: this.props.cloudSize,
          position: this.state.dragCloudPosition
        }));
      }

      return null;
    }
    /**
     * Renders the message shown to the user
     * @returns {JSX}
     */

  }, {
    key: "renderMessage",
    value: function renderMessage() {
      if (this.state.isValidDrop) {
        return React.createElement(FormattedMessage, messages.success);
      }

      return React.createElement(FormattedMessage, messages.instructions);
    }
    /**
     * Renders the cloud game
     * @returns {JSX}
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          height = _this$props2.height,
          width = _this$props2.width;
      return React.createElement("div", {
        className: "box-ui-security-cloud-game",
        style: {
          height: "".concat(height, "px"),
          width: "".concat(width, "px")
        }
      }, React.createElement("div", {
        ref: this.setGameBoardHeight,
        className: "box-ui-security-cloud-game-message"
      }, this.renderMessage()), React.createElement("div", {
        className: "box-ui-security-cloud-game-board"
      }, this.renderDropCloud(), this.renderDragCloud()));
    }
  }]);

  return SecurityCloudGame;
}(Component);

_defineProperty(SecurityCloudGame, "propTypes", {
  /** Width/Height to set the drag and drop clouds to.  Defaults to 64 */
  cloudSize: PropTypes.number,

  /** Height to set the game to */
  height: PropTypes.number.isRequired,

  /** Function to call when the `DragCloud` is successfuly dropped onto the `DropCloud` */
  onValidDrop: PropTypes.func,

  /** Width to set the game to */
  width: PropTypes.number.isRequired
});

_defineProperty(SecurityCloudGame, "defaultProps", {
  cloudSize: 64
});

export default SecurityCloudGame;
//# sourceMappingURL=SecurityCloudGame.js.map