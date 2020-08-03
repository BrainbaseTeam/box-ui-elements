function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file File for some simple dom utilities
 * @author Box
 */
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed';
import { KEYS, OVERLAY_WRAPPER_CLASS } from '../constants';
import './domPolyfill';
/**
 * Checks if an html element is some type of input-able
 * element or text area type where characters can be typed.
 *
 * @param {HTMLElement|null} element - the dom element to check
 * @return {boolean} true if its one of the above elements
 */

export function isInputElement(element) {
  if (!element || !(element instanceof HTMLElement)) {
    return false;
  }

  var tag = element.tagName.toLowerCase();
  return tag === 'input' || tag === 'select' || tag === 'textarea' || tag === 'div' && !!element.getAttribute('contenteditable');
}
/**
 * Checks if an html element is some kind of element
 * that the user would want to keep their focus on.
 *
 * @param {HTMLElement|null} element - the dom element to check
 * @return {boolean} true if its one of the above elements
 */

export function isFocusableElement(element) {
  if (!element || !(element instanceof HTMLElement)) {
    return false;
  }

  var tag = element.tagName.toLowerCase(); // Box React UI sensitive checks

  var isCheckbox = element.classList.contains('checkbox-pointer-target') || (element.parentElement instanceof HTMLElement ? element.parentElement.classList.contains('checkbox-label') : false);
  var isButton = element.classList.contains('btn-content') || (element.parentElement instanceof HTMLElement ? element.parentElement.classList.contains('btn') : false);
  return isInputElement(element) || tag === 'button' || tag === 'a' || tag === 'option' || isCheckbox || isButton;
}
/**
 * Checks if a keyboard event is intended to activate an element.
 *
 * @param {SyntheticKeyboardEvent<HTMLElement>} event - The keyboard event
 * @returns {boolean} true if the event is intended to activate the element
 */

export function isActivateKey(event) {
  return event.key === KEYS.enter || event.key === KEYS.space;
}
/**
 * Checks if a mouse event is an unmodified left click.
 *
 * @param {SyntheticMouseEvent<HTMLElement>} event - The mouse event
 * @returns {boolean} true if the event is an unmodified left click
 */

export function isLeftClick(event) {
  return event.button === 0 && !event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey;
}
/**
 * Focuses a DOM element if it exists.
 *
 * @param {HTMLElement} root - the root dom element to search
 * @param {string} selector - the query selector
 * @param {boolean|void} [focusRoot] - if root should be focused
 * @return {void}
 */

export function focus(root, selector) {
  var focusRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!root) {
    return;
  }

  if (!selector) {
    root.focus();
    return;
  }

  var element = root.querySelector(selector);

  if (element && typeof element.focus === 'function') {
    element.focus();
  } else if (focusRoot) {
    root.focus();
  }
}
/**
 * Scrolls the container / modal / wrapper instead of the body
 *
 * @param {HTMLElement} itemEl - the base dom element to search
 * @param {Object} options - scroll into view options to override
 * @return {void}
 */

export function scrollIntoView(itemEl) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // @NOTE: breaks encapsulation but alternative is unknown child ref
  if (itemEl) {
    var parentEl = itemEl.closest(".body, .modal, .".concat(OVERLAY_WRAPPER_CLASS));
    scrollIntoViewIfNeeded(itemEl, _objectSpread({
      scrollMode: 'if-needed',
      boundary: parentEl
    }, options));
  }
}
//# sourceMappingURL=dom.js.map