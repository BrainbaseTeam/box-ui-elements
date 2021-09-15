function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import * as React from 'react';
import { Manager, Reference, Popper } from 'react-popper';
import { PLACEMENT_AUTO } from './constants';

var PopperComponent = function PopperComponent(props) {
  var children = props.children,
      isOpen = props.isOpen,
      modifiers = props.modifiers,
      popperPlacement = props.placement;
  var elements = React.Children.toArray(children);

  if (elements.length !== 2) {
    throw new Error('PopperComponent must have exactly two children: A reference component and the Popper content');
  }

  var _elements = _slicedToArray(elements, 2),
      reference = _elements[0],
      popperContent = _elements[1];

  return React.createElement(Manager, null, React.createElement(Reference, null, function (_ref) {
    var ref = _ref.ref;
    return React.cloneElement(reference, {
      ref: ref
    });
  }), isOpen && React.createElement(Popper, {
    placement: popperPlacement,
    modifiers: modifiers
  }, function (_ref2) {
    var ref = _ref2.ref,
        style = _ref2.style,
        placement = _ref2.placement,
        scheduleUpdate = _ref2.scheduleUpdate;
    var contentStyles = popperContent.props.style;
    return React.cloneElement(popperContent, {
      ref: ref,
      style: _objectSpread({}, contentStyles, {}, style),
      placement: placement,
      scheduleUpdate: scheduleUpdate
    });
  }));
};

PopperComponent.defaultProps = {
  placement: PLACEMENT_AUTO
};
export default PopperComponent;
//# sourceMappingURL=PopperComponent.js.map