import classNames from 'classnames';
import * as React from 'react';
import CarouselHeader from './CarouselHeader';
import SlideNavigator from './SlideNavigator';
import SlidePanels from './SlidePanels';

var SlideCarouselPrimitive = function SlideCarouselPrimitive(_ref) {
  var children = _ref.children,
      className = _ref.className,
      contentHeight = _ref.contentHeight,
      _ref$idPrefix = _ref.idPrefix,
      idPrefix = _ref$idPrefix === void 0 ? '' : _ref$idPrefix,
      onSelection = _ref.onSelection,
      selectedIndex = _ref.selectedIndex,
      title = _ref.title;

  var buttonIdGenerator = function buttonIdGenerator(val) {
    return "".concat(idPrefix && "".concat(idPrefix, "-"), "selector-").concat(val);
  };

  var panelIdGenerator = function panelIdGenerator(val) {
    return "".concat(idPrefix && "".concat(idPrefix, "-"), "slide-panel-").concat(val);
  };

  return React.createElement("div", {
    className: classNames('slide-carousel', className)
  }, title && React.createElement(CarouselHeader, {
    title: title
  }), React.createElement(SlidePanels, {
    getButtonIdFromValue: buttonIdGenerator,
    getPanelIdFromValue: panelIdGenerator,
    onSelection: onSelection,
    selectedIndex: selectedIndex,
    style: {
      height: contentHeight
    }
  }, children), React.createElement(SlideNavigator, {
    getButtonIdFromValue: buttonIdGenerator,
    getPanelIdFromValue: panelIdGenerator // $FlowFixMe
    ,
    numOptions: children && children.length || 0,
    onSelection: onSelection,
    selectedIndex: selectedIndex
  }));
};

SlideCarouselPrimitive.displayName = 'SlideCarouselPrimitive';
SlideCarouselPrimitive.defaultProps = {
  className: '',
  idPrefix: '',
  onSelection: function onSelection() {}
};
export default SlideCarouselPrimitive;
//# sourceMappingURL=SlideCarouselPrimitive.js.map