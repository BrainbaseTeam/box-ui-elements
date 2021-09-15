import * as React from 'react';
import IconCollections from './IconCollections';
import IconCollectionsAdd from './IconCollectionsAdd';
import IconCollectionsBolt from './IconCollectionsBolt';
import IconCollectionsFilled from './IconCollectionsFilled';
import IconCollectionsStar from './IconCollectionsStar';
import IconCollectionsStarFilled from './IconCollectionsStarFilled';
var section = {
  display: 'flex'
};
var icon = {
  display: 'flex',
  'flex-direction': 'column',
  'align-items': 'center',
  'margin-right': '20px'
};

var Icon = function Icon(_ref) {
  var children = _ref.children,
      name = _ref.name;
  return React.createElement("div", {
    style: icon
  }, children, React.createElement("span", null, name));
};

export var allIcons = function allIcons() {
  return React.createElement("div", {
    style: section
  }, React.createElement(Icon, {
    name: "Collections"
  }, React.createElement(IconCollections, null)), React.createElement(Icon, {
    name: "Collections Add"
  }, React.createElement(IconCollectionsAdd, null)), React.createElement(Icon, {
    name: "Collections Bolt"
  }, React.createElement(IconCollectionsBolt, null)), React.createElement(Icon, {
    name: "Collections Filled"
  }, React.createElement(IconCollectionsFilled, null)), React.createElement(Icon, {
    name: "Collections Star"
  }, React.createElement(IconCollectionsStar, null)), React.createElement(Icon, {
    name: "Collections Star Filled"
  }, React.createElement(IconCollectionsStarFilled, null)));
};
export default {
  title: 'Icons|Collections'
};
//# sourceMappingURL=collections.stories.js.map