import * as React from 'react';
import { select, number, text } from '@storybook/addon-knobs';
import ItemIcon from './item-icon';
import ItemIconMonotone from './item-icon-monotone';
import Tooltip, { TooltipPosition } from '../components/tooltip';
var itemTypeOptions = ['default', 'audio', 'bookmark', 'boxnote', 'code', 'document', 'dwg', 'excel-spreadsheet', 'google-docs', 'google-sheets', 'google-slides', 'illustrator', 'image', 'indesign', 'keynote', 'numbers', 'pages', 'pdf', 'photoshop', 'powerpoint-presentation', 'presentation', 'spreadsheet', 'text', 'threed', 'vector', 'video', 'word-document', 'zip', 'folder-collab', 'folder-external', 'folder-plain'];
export var itemIcons = function itemIcons() {
  var componentPath = select('Variant', ['icons/item-icon', 'icons/item-icon-monotone'], 'icons/item-icon');
  var Icon = {
    'icons/item-icon': ItemIcon,
    'icons/item-icon-monotone': ItemIconMonotone
  }[componentPath];
  return React.createElement(React.Fragment, null, itemTypeOptions.map(function (t) {
    return React.createElement("span", {
      style: {
        padding: 8
      },
      key: t
    }, React.createElement(Tooltip, {
      text: t
    }, React.createElement("span", {
      style: {
        display: 'inline-block'
      }
    }, React.createElement(Icon, {
      iconType: t,
      dimension: number('dimension', 32, {
        range: true,
        min: 10,
        max: 64,
        step: 2
      }),
      title: text('title', ''),
      className: text('className', '')
    }))));
  }), React.createElement("br", null), React.createElement("br", null), React.createElement("div", null, React.createElement("b", null, "Hover icons in grid to view the ", React.createElement("code", null, "iconType"), " prop"), React.createElement("p", {
    style: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: 16,
      paddingLeft: 8
    }
  }, React.createElement(Tooltip, {
    text: "default",
    isShown: true,
    position: TooltipPosition.MIDDLE_RIGHT
  }, React.createElement(Icon, {
    iconType: "default",
    dimension: 32
  })))));
};
var description = "\n  ItemIcon, and the solid-color variant ItemIconMonotone, are catch-all components that render the appropriate\n  icon for a given file or folder type\n";
export default {
  title: 'Icons|ItemIcon',
  subcomponents: {
    ItemIcon: ItemIcon,
    ItemIconMonotone: ItemIconMonotone
  },
  parameters: {
    componentSubtitle: description
  }
};
//# sourceMappingURL=icons.stories.js.map