function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import * as React from 'react';
import Measure from 'react-measure';
import forEach from 'lodash/forEach';
import CategorySelectorComponent from './CategorySelectorComponent';
import './CategorySelector.scss';

var CategorySelector = function CategorySelector(_ref) {
  var categories = _ref.categories,
      _ref$categoryProps = _ref.categoryProps,
      categoryProps = _ref$categoryProps === void 0 ? {} : _ref$categoryProps,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$currentCategory = _ref.currentCategory,
      currentCategory = _ref$currentCategory === void 0 ? '' : _ref$currentCategory,
      onSelect = _ref.onSelect;
  var linksRef = React.useRef(null);
  var moreRef = React.useRef(null);

  var _React$useState = React.useState(categories.length),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      maxLinks = _React$useState2[0],
      setMaxLinks = _React$useState2[1];

  var defaultLinkWidths = {};

  var _React$useState3 = React.useState(defaultLinkWidths),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      linkWidths = _React$useState4[0],
      setLinkWidths = _React$useState4[1];

  var _React$useState5 = React.useState(0),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      moreWidth = _React$useState6[0],
      setMoreWidth = _React$useState6[1];

  var outerWidth = function outerWidth(element) {
    var style = getComputedStyle(element);
    return element.offsetWidth + parseFloat(style.marginLeft) + parseFloat(style.marginRight) + 1;
  };

  var checkLinks = React.useCallback(function (contentRect) {
    var width = contentRect.client.width;
    if (!linksRef.current) return; // Pull in some common widths we'll need

    var containerWidth = width - moreWidth; // Get all the links

    var elements = linksRef.current.querySelectorAll('[data-category]'); // First, calculate the total width of all links in the main section

    var linksWidth = 0;
    forEach(elements, function (element) {
      linksWidth += outerWidth(element);
    });

    if (linksWidth > containerWidth) {
      // The links exceed the container's width. Figure out how many need to be removed
      var linksToRemove = {};
      var counter = 1;

      while (linksWidth > containerWidth && counter < elements.length) {
        var _element$dataset$cate;

        var element = elements[elements.length - counter];
        var elementWidth = outerWidth(element);
        linksWidth -= elementWidth;
        var category = (_element$dataset$cate = element.dataset.category) !== null && _element$dataset$cate !== void 0 ? _element$dataset$cate : ''; // Save the width of the link being removed for use later

        linksToRemove[category] = elementWidth;
        counter += 1;
      } // Ensure the maxLinks does not become negative


      var max = maxLinks - Object.keys(linksToRemove).length < 0 ? 0 : maxLinks - Object.keys(linksToRemove).length; // Update the state

      setMaxLinks(max);
      setLinkWidths(_objectSpread({}, linkWidths, {}, linksToRemove));
    } else {
      // There is more room, see if any links can be brought back in
      var linksToAdd = 0;

      while (maxLinks + linksToAdd < categories.length && linksWidth < containerWidth) {
        var _category = categories[maxLinks + linksToAdd].value;
        var _elementWidth = linkWidths[_category]; // If there is only one link in the More menu, calculate against the total container width,
        // otherwise calculate against the container less the width of the more button

        var targetWidth = maxLinks + linksToAdd + 1 >= categories.length ? width : containerWidth; // If the addition of a link is too large, stop checking

        if (linksWidth + _elementWidth >= targetWidth) {
          break;
        }

        linksToAdd += 1;
        linksWidth += _elementWidth; // always add
      }

      if (linksToAdd > 0) {
        // Update the state
        setMaxLinks(maxLinks + linksToAdd);
      }
    }
  }, [categories, linkWidths, linksRef, maxLinks, moreWidth]);
  React.useLayoutEffect(function () {
    if (!moreRef.current) return;
    setMoreWidth(outerWidth(moreRef.current)); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moreRef.current, currentCategory]); // This effect must be defined after the checkLinks function
  // If the currently selected category changes or the more link width changes, be sure to check for any links to hide or show

  React.useEffect(function () {
    if (!linksRef.current) return;
    var clientWidth = linksRef.current.clientWidth;
    checkLinks({
      client: {
        width: clientWidth
      }
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moreRef.current, moreWidth, currentCategory]);
  return React.createElement(Measure, {
    client: true,
    innerRef: linksRef,
    onResize: checkLinks
  }, function (_ref2) {
    var measureRef = _ref2.measureRef;
    return React.createElement(CategorySelectorComponent, {
      measureRef: measureRef,
      moreRef: moreRef,
      className: className,
      categories: categories,
      maxLinks: maxLinks,
      currentCategory: currentCategory,
      onSelect: onSelect,
      categoryProps: categoryProps
    });
  });
};

export default CategorySelector;
//# sourceMappingURL=CategorySelector.js.map