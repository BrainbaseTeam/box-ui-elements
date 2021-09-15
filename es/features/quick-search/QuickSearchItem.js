function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import classNames from 'classnames';
import { injectIntl, FormattedMessage } from 'react-intl';
import { RecordOf } from 'immutable';
import { convertToMs, isToday, isYesterday } from '../../utils/datetime';
import DatalistItem from '../../components/datalist-item';
import Folder16 from '../../icon/fill/Folder16';
import ItemIcon from '../../icons/item-icon';
import { Link } from '../../components/link';
import messages from './messages';
import './QuickSearchItem.scss';
var QUERY_SEPARATOR = '<mark>';

var QuickSearchItem = function QuickSearchItem(_ref) {
  var className = _ref.className,
      closeDropdown = _ref.closeDropdown,
      intl = _ref.intl,
      itemData = _ref.itemData,
      parentFolderRenderer = _ref.parentFolderRenderer,
      shouldNavigateOnItemClick = _ref.shouldNavigateOnItemClick,
      rest = _objectWithoutProperties(_ref, ["className", "closeDropdown", "intl", "itemData", "parentFolderRenderer", "shouldNavigateOnItemClick"]);

  var formatMessage = intl.formatMessage;
  var extension = itemData.extension,
      iconType = itemData.iconType,
      id = itemData.id,
      name = itemData.name,
      nameWithMarkedQuery = itemData.nameWithMarkedQuery,
      parentName = itemData.parentName,
      sharedLink = itemData.sharedLink,
      type = itemData.type,
      updatedBy = itemData.updatedBy,
      updatedDate = itemData.updatedDate;
  var updatedDateInMs = convertToMs(updatedDate);
  var markedQueryMatches = [];
  nameWithMarkedQuery.split(QUERY_SEPARATOR).forEach(function (element, index) {
    return index % 2 === 0 ? markedQueryMatches.push(element) : markedQueryMatches.push(React.createElement("mark", {
      key: index,
      className: "search-term"
    }, element));
  });
  var itemIconTitle;

  switch (type) {
    case 'web_link':
      itemIconTitle = React.createElement(FormattedMessage, messages.bookmark);
      break;

    case 'file':
      itemIconTitle = React.createElement(FormattedMessage, messages.file);
      break;

    case 'folder':
      if (iconType === 'folder-collab') {
        itemIconTitle = React.createElement(FormattedMessage, messages.collaboratedFolder);
      } else if (iconType === 'folder-external') {
        itemIconTitle = React.createElement(FormattedMessage, messages.externalFolder);
      } else {
        itemIconTitle = React.createElement(FormattedMessage, messages.personalFolder);
      }

      break;

    default:
  }

  var updatedText;

  if (isToday(updatedDateInMs)) {
    updatedText = formatMessage(messages.updatedTextToday, {
      user: updatedBy
    });
  } else if (isYesterday(updatedDateInMs)) {
    updatedText = formatMessage(messages.updatedTextYesterday, {
      user: updatedBy
    });
  } else {
    updatedText = formatMessage(messages.updatedText, {
      date: updatedDateInMs,
      user: updatedBy
    });
  }

  var href;
  var targetProps = {};
  var isBoxNote = extension === 'boxnote';

  switch (type) {
    case 'folder':
      href = "/folder/".concat(id);
      break;

    case 'web_link':
      href = "/web_link/".concat(id);
      targetProps = {
        target: '_blank'
      };
      break;

    case 'file':
      // shared link should take precedence over other link types
      if (sharedLink) {
        href = sharedLink;
      } else if (isBoxNote) {
        href = "/notes/".concat(id);
      } else {
        href = "/file/".concat(id);
      }

      if (isBoxNote) targetProps = {
        target: '_blank'
      };
      break;

    default:
  }

  var itemName = href && shouldNavigateOnItemClick ? React.createElement(Link, _extends({
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    className: "item-name",
    href: href,
    title: name
  }, targetProps), markedQueryMatches) : React.createElement("span", {
    className: "item-name",
    title: name
  }, markedQueryMatches);
  return React.createElement(DatalistItem, _extends({
    className: classNames('quick-search-item', className)
  }, rest), React.createElement(ItemIcon, {
    iconType: iconType,
    title: itemIconTitle
  }), React.createElement("span", {
    className: "item-info"
  }, itemName, React.createElement("span", {
    className: "item-subtext"
  }, (parentName || parentFolderRenderer) && React.createElement(React.Fragment, null, React.createElement(Folder16, {
    title: React.createElement(FormattedMessage, messages.parentFolder),
    height: 12,
    width: 12
  }), parentFolderRenderer ? parentFolderRenderer(itemData, closeDropdown) : React.createElement("span", {
    className: "parent-folder"
  }, parentName), React.createElement("span", {
    className: "separator"
  }, "\u2022")), React.createElement("span", {
    className: "txt-ellipsis",
    title: updatedText
  }, updatedText))));
};

export default injectIntl(QuickSearchItem);
//# sourceMappingURL=QuickSearchItem.js.map