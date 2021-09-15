import * as React from 'react';
import AccessibleSVG from '../accessible-svg';
import { bdlBoxBlue } from '../../styles/variables';

var CollaboratorsEmptyState = function CollaboratorsEmptyState(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? bdlBoxBlue : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 64 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 90 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "collaborators-empty-state ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 90 64",
    width: width
  }, React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    className: "fill-color",
    d: "M47.5 4.134v-.642C47.5 3.22 47.268 3 47 3c-.276 0-.5.215-.5.49v.644c-.152.088-.278.214-.366.366h-.644c-.27 0-.49.232-.49.5 0 .276.215.5.49.5h.644c.088.152.214.278.366.366v.644c0 .27.232.49.5.49.276 0 .5-.23.5-.505v-.63c.152-.087.278-.213.366-.365h.644c.27 0 .49-.232.49-.5 0-.276-.215-.5-.49-.5h-.644c-.088-.152-.214-.278-.366-.366zm-42 10v-.642C5.5 13.22 5.268 13 5 13c-.276 0-.5.215-.5.49v.644c-.152.088-.278.214-.366.366H3.49c-.27 0-.49.232-.49.5 0 .276.215.5.49.5h.644c.088.152.214.278.366.366v.644c0 .27.232.49.5.49.276 0 .5-.23.5-.505v-.63c.152-.087.278-.213.366-.365h.644c.27 0 .49-.232.49-.5 0-.276-.215-.5-.49-.5h-.644c-.088-.152-.214-.278-.366-.366zm75 39v-.642c0-.272-.232-.492-.5-.492-.276 0-.5.215-.5.49v.644c-.152.088-.278.214-.366.366h-.644c-.27 0-.49.232-.49.5 0 .276.215.5.49.5h.644c.088.152.214.278.366.366v.644c0 .27.232.49.5.49.276 0 .5-.23.5-.505v-.63c.152-.087.278-.213.366-.365h.644c.27 0 .49-.232.49-.5 0-.276-.215-.5-.49-.5h-.644c-.088-.152-.214-.278-.366-.366zm-67 5v-.642c0-.272-.232-.492-.5-.492-.276 0-.5.215-.5.49v.644c-.152.088-.278.214-.366.366h-.644c-.27 0-.49.232-.49.5 0 .276.215.5.49.5h.644c.088.152.214.278.366.366v.644c0 .27.232.49.5.49.276 0 .5-.23.5-.505v-.63c.152-.087.278-.213.366-.365h.644c.27 0 .49-.232.49-.5 0-.276-.215-.5-.49-.5h-.644c-.088-.152-.214-.278-.366-.366zM58.063 5.71v-.403c0-.17-.145-.307-.313-.307-.173 0-.313.134-.313.307v.402c-.094.054-.173.133-.228.228h-.403c-.17 0-.307.144-.307.312 0 .173.134.313.307.313h.402c.054.094.133.173.227.228v.403c0 .17.145.307.313.307.173 0 .313-.144.313-.303V6.79c.094-.054.173-.133.228-.228h.403c.17 0 .307-.144.307-.312 0-.173-.134-.313-.307-.313h-.402c-.054-.094-.133-.173-.227-.228zm28 52v-.403c0-.17-.145-.307-.313-.307-.173 0-.313.134-.313.307v.402c-.094.054-.173.133-.228.227h-.403c-.17 0-.307.145-.307.313 0 .173.134.313.307.313h.402c.054.094.133.173.228.228v.403c0 .17.144.307.312.307.173 0 .313-.144.313-.303v-.406c.094-.054.173-.133.228-.227h.403c.17 0 .307-.145.307-.313 0-.173-.134-.313-.307-.313h-.402c-.054-.094-.133-.173-.227-.228zm-65 0v-.403c0-.17-.145-.307-.313-.307-.173 0-.313.134-.313.307v.402c-.094.054-.173.133-.228.227h-.403c-.17 0-.307.145-.307.313 0 .173.134.313.307.313h.402c.054.094.133.173.227.228v.403c0 .17.145.307.313.307.173 0 .313-.144.313-.303v-.406c.094-.054.173-.133.228-.227h.403c.17 0 .307-.145.307-.313 0-.173-.134-.313-.307-.313h-.402c-.054-.094-.133-.173-.227-.228z",
    fill: color
  }), React.createElement("g", {
    className: "stroke-color",
    fill: "#FFF",
    stroke: color,
    strokeWidth: "2",
    transform: "rotate(10 -10.18 64.766)"
  }, React.createElement("rect", {
    height: "45.889",
    rx: "1.5",
    width: "68.799",
    x: ".069",
    y: ".393"
  }), React.createElement("path", {
    d: "M.914 45.102c-.558.61-.336 1.105.493 1.105h65.157c.83 0 1.043-.494.483-1.095L34.69 10.372c-.564-.606-1.472-.602-2.03.01L.913 45.1z"
  }), React.createElement("path", {
    d: "M1.648 1.358C.983.86 1.124.456 1.944.456H67.74c.83 0 .962.405.298.902l-31.99 23.966c-.665.498-1.744.497-2.408 0L1.648 1.358z"
  })), React.createElement("path", {
    className: "stroke-color",
    d: "M38.044 21.16c0-.664.533-1.203 1.192-1.203h37.44c.658 0 1.19.545 1.19 1.203v21.535c0 .665-.532 1.204-1.19 1.204h-37.44c-.658 0-1.192-.546-1.192-1.205V21.16z",
    fill: "#FFF",
    stroke: color,
    strokeWidth: "2"
  }), React.createElement("path", {
    className: "stroke-color",
    d: "M42.823 25.95c0-.666.533-1.205 1.192-1.205h37.44c.657 0 1.19.545 1.19 1.204v21.534c0 .665-.532 1.203-1.19 1.203h-37.44c-.658 0-1.192-.545-1.192-1.203V25.95z",
    fill: "#FFF",
    stroke: color,
    strokeWidth: "2"
  }), React.createElement("path", {
    className: "fill-color",
    d: "M44.416 43.34c0-.663.536-1.107 1.19-1.024 0 0 1.263.414 11.022.414 6.067 0 8.757 1.235 12.213 1.235 6.99 0 11.066-1.477 11.066-1.477.634-.192 1.147.183 1.147.85v2.555c0 .662-.546 1.198-1.198 1.198h-34.24c-.663 0-1.2-.528-1.2-1.197V43.34z",
    fill: color,
    fillOpacity: ".1"
  }), React.createElement("path", {
    className: "fill-color",
    d: "M65.823 32.545c0-.442.36-.8.794-.8H78.03c.438 0 .793.355.793.8 0 .442-.36.8-.794.8H66.616c-.44 0-.794-.355-.794-.8zm0 3.2c0-.442.363-.8.796-.8h7.373c.44 0 .796.355.796.8 0 .442-.364.8-.797.8H66.62c-.44 0-.797-.355-.797-.8zm0 3.2c0-.442.36-.8.806-.8h9.594c.445 0 .806.355.806.8 0 .442-.36.8-.806.8H66.63c-.446 0-.807-.355-.807-.8z",
    fill: color
  }), React.createElement("path", {
    className: "stroke-color",
    d: "M54.602 44.534c4.418 0 8-3.582 8-8 0-4.42-3.582-8-8-8-4.42 0-8 3.58-8 8 0 4.418 3.58 8 8 8z",
    fill: "#FFF",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }), React.createElement("path", {
    className: "stroke-color",
    d: "M59.685 42.344c-1.062-1.688-2.942-2.81-5.083-2.81-2.19 0-4.105 1.172-5.152 2.923M54.602 36.534c1.104 0 2-.896 2-2 0-1.105-.896-2-2-2-1.105 0-2 .895-2 2 0 1.104.895 2 2 2z",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }), React.createElement("path", {
    className: "stroke-color",
    d: "M70.576 10.234l15.378 8.88c.578.332.725 1.036.326 1.573l-4.793 6.44c-.4.536-1.133.732-1.643.438L66.31 19.752c-.508-.294-.707-1.028-.44-1.642l3.18-7.37c.264-.614.946-.84 1.526-.506z",
    fill: "#FFF",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }), React.createElement("path", {
    className: "fill-color",
    d: "M69.942 12.182c.092-.207.313-.29.518-.172l14.126 8.156c.194.112.245.348.118.52l-2.165 2.945c-.13.176-.392.228-.58.12l-13.3-7.68c-.19-.11-.273-.363-.18-.574l1.462-3.314z",
    fill: color,
    fillOpacity: ".1"
  }), React.createElement("path", {
    className: "stroke-color",
    d: "M82.264 25.276c.57.33.95.74.847.915l-1.32 2.07c-.118.17-.668.043-1.232-.283l-14.96-8.638c-.564-.325-.95-.74-.862-.924l1.13-2.18c.102-.178.645-.055 1.218.276l15.18 8.764z",
    fill: "#FFF",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }), React.createElement("path", {
    className: "stroke-color",
    d: "M80.986 14.524l-3.08 11.922-9.657-5.575 8.783-8.627c-.254-1.353-.726-4.717.805-5.008 1.92-.365 6.44 2.254 7.082 4.09.51 1.46-2.635 2.74-3.934 3.2z",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  })));
};

export default CollaboratorsEmptyState;
//# sourceMappingURL=CollaboratorsEmptyState.js.map