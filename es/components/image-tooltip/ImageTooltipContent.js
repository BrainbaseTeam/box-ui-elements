import * as React from 'react';
import classNames from 'classnames';
import './ImageTooltipContent.scss';

function cloneTooltipChildWithNewProps(child, onImageLoad) {
  var existingClasses = child.props.className;
  var className = classNames(existingClasses, 'bdl-ImageTooltipContent-imageChild');
  return React.cloneElement(child, {
    className: className,
    onLoad: onImageLoad
  });
}

var ImageTooltipContent = function ImageTooltipContent(_ref) {
  var children = _ref.children,
      content = _ref.content,
      onImageLoad = _ref.onImageLoad,
      title = _ref.title;
  return React.createElement("div", {
    className: "bdl-ImageTooltipContent"
  }, React.createElement("div", {
    className: "bdl-ImageTooltipContent-image"
  }, cloneTooltipChildWithNewProps(children, onImageLoad)), React.createElement("div", {
    className: "bdl-ImageTooltipContent-contentWrapper"
  }, React.createElement("h4", {
    className: "bdl-ImageTooltipContent-title"
  }, title), React.createElement("p", {
    className: "bdl-ImageTooltipContent-content"
  }, content)));
};

export default ImageTooltipContent;
//# sourceMappingURL=ImageTooltipContent.js.map