function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import AutoSizer from 'react-virtualized/dist/es/AutoSizer';
import classNames from 'classnames';
import find from 'lodash/find';
import getProp from 'lodash/get';
import isEqual from 'lodash/isEqual';
import isNil from 'lodash/isNil';
import isString from 'lodash/isString';
import MultiGrid from 'react-virtualized/dist/es/MultiGrid/MultiGrid';
import MetadataField from '../metadata-instance-fields/MetadataField';
import ReadOnlyMetadataField from '../metadata-instance-fields/ReadOnlyMetadataField';
import FileIcon from '../../icons/file-icon';
import IconWithTooltip from './IconWithTooltip';
import PlainButton from '../../components/plain-button';
import { getFileExtension } from '../../utils/file';
import messages from '../../elements/common/messages';
import './MetadataBasedItemList.scss';
import { CANCEL_ICON_TYPE, EDIT_ICON_TYPE, FILE_ICON_COLUMN_INDEX, FILE_ICON_COLUMN_WIDTH, FILE_ICON_SIZE, FILE_NAME_COLUMN_INDEX, FILE_NAME_COLUMN_WIDTH, FIXED_COLUMNS_NUMBER, FIXED_ROW_NUMBER, HEADER_ROW_INDEX, MIN_METADATA_COLUMN_WIDTH, SAVE_ICON_TYPE } from './constants';
import { FIELD_TYPE_FLOAT, FIELD_TYPE_INTEGER, FIELD_TYPE_STRING } from '../metadata-instance-fields/constants';
import { FIELD_METADATA } from '../../constants';

var MetadataBasedItemList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MetadataBasedItemList, _React$Component);

  function MetadataBasedItemList(props) {
    var _this;

    _classCallCheck(this, MetadataBasedItemList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MetadataBasedItemList).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getInitialState", function () {
      return {
        editedColumnIndex: -1,
        editedRowIndex: -1,
        hoveredRowIndex: -1,
        hoveredColumnIndex: -1,
        isUpdating: false,
        scrollLeftOffset: 0,
        scrollRightOffset: 0
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getItemWithPermissions", function (item) {
      /*
          - @TODO: Remove permissions object once its part of API response.
          - add "can_preview: true" so that users can click to launch the Preview modal. If users don't have access, they will see the error when Preview loads.
          - add "can_upload: true" so that users can update the metadata values.
      */
      var permissions = {
        can_preview: true,
        can_upload: true
      };
      return _objectSpread({}, item, {
        permissions: permissions
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancelEdit", function () {
      _this.setState({
        editedColumnIndex: -1,
        editedRowIndex: -1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSave", function (item, field, type, currentValue, editedValue) {
      var onMetadataUpdate = _this.props.onMetadataUpdate;
      onMetadataUpdate(_this.getItemWithPermissions(item), field, currentValue, _this.getValueForType(type, editedValue));

      _this.setState({
        isUpdating: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseEnter", function (columnIndex, rowIndex) {
      return _this.setState({
        hoveredColumnIndex: columnIndex,
        hoveredRowIndex: rowIndex
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseLeave", function () {
      return _this.setState({
        hoveredRowIndex: -1,
        hoveredColumnIndex: -1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleContentScroll", function (_ref) {
      var clientWidth = _ref.clientWidth,
          scrollLeft = _ref.scrollLeft,
          scrollWidth = _ref.scrollWidth;

      _this.setState({
        scrollLeftOffset: scrollLeft,
        scrollRightOffset: scrollWidth - clientWidth - scrollLeft
      });
    });

    _defineProperty(_assertThisInitialized(_this), "cellRenderer", function (_ref2) {
      var columnIndex = _ref2.columnIndex,
          rowIndex = _ref2.rowIndex,
          key = _ref2.key,
          style = _ref2.style;
      var hoveredRowIndex = _this.state.hoveredRowIndex;
      var isHeaderRow = rowIndex === HEADER_ROW_INDEX;
      var isFileIconCell = !isHeaderRow && columnIndex === FILE_ICON_COLUMN_INDEX;
      var isFileNameCell = !isHeaderRow && columnIndex === FILE_NAME_COLUMN_INDEX;
      var isGridRowHovered = !isHeaderRow && rowIndex === hoveredRowIndex;
      var data = isHeaderRow ? _this.getGridHeaderData(columnIndex) : _this.getGridCellData(columnIndex, rowIndex);
      var classes = classNames('bdl-MetadataBasedItemList-cell', {
        'bdl-MetadataBasedItemList-cell--fileIcon': isFileIconCell,
        'bdl-MetadataBasedItemList-cell--filename': isFileNameCell,
        'bdl-MetadataBasedItemList-cell--hover': isGridRowHovered
      });
      return React.createElement("div", {
        className: classes,
        key: key,
        onMouseEnter: function onMouseEnter() {
          return _this.handleMouseEnter(columnIndex, rowIndex);
        },
        onMouseLeave: _this.handleMouseLeave,
        style: style
      }, data);
    });

    _this.state = _this.getInitialState();
    return _this;
  }

  _createClass(MetadataBasedItemList, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevItems = getProp(prevProps, 'currentCollection.items');
      var currentItems = getProp(this.props, 'currentCollection.items');

      if (!isEqual(currentItems, prevItems)) {
        // Either the view was refreshed or metadata was updated, reset edit part of the state to initial values
        this.setState({
          editedColumnIndex: -1,
          editedRowIndex: -1,
          isUpdating: false,
          valueBeingEdited: undefined
        });
      }
    }
  }, {
    key: "getQueryResponseFields",
    value: function getQueryResponseFields() {
      var fields = getProp(this.props, 'currentCollection.items[0].metadata.enterprise.fields', []);
      return fields.map(function (_ref3) {
        var key = _ref3.key,
            displayName = _ref3.displayName;
        return {
          key: key,
          displayName: displayName
        };
      });
    }
  }, {
    key: "getColumnWidth",
    value: function getColumnWidth(width) {
      var fieldsToShow = this.props.fieldsToShow;
      return function (_ref4) {
        var index = _ref4.index;

        if (index === FILE_ICON_COLUMN_INDEX) {
          return FILE_ICON_COLUMN_WIDTH;
        }

        if (index === FILE_NAME_COLUMN_INDEX) {
          return FILE_NAME_COLUMN_WIDTH;
        }

        var availableWidth = width - FILE_NAME_COLUMN_WIDTH - FILE_ICON_COLUMN_WIDTH; // total width minus width of sticky columns
        // Maintain min column width, else occupy the rest of the space equally

        return Math.max(availableWidth / fieldsToShow.length, MIN_METADATA_COLUMN_WIDTH);
      };
    }
  }, {
    key: "handleItemClick",
    value: function handleItemClick(item) {
      var onItemClick = this.props.onItemClick;
      onItemClick(this.getItemWithPermissions(item));
    }
  }, {
    key: "handleEditIconClick",
    value: function handleEditIconClick(columnIndex, rowIndex, value) {
      this.setState({
        editedColumnIndex: columnIndex,
        editedRowIndex: rowIndex,
        valueBeingEdited: value
      });
    }
  }, {
    key: "getValueForType",
    value: function getValueForType(type, value) {
      if (type === FIELD_TYPE_FLOAT && !isNil(value)) {
        return parseFloat(value);
      }

      if (type === FIELD_TYPE_INTEGER && !isNil(value)) {
        return parseInt(value, 10);
      }

      return value;
    }
  }, {
    key: "isMetadataField",
    value: function isMetadataField(key) {
      return key.startsWith("".concat(FIELD_METADATA, "."));
    }
  }, {
    key: "getFieldNameFromKey",
    value: function getFieldNameFromKey(key) {
      return key.split('.').pop();
    }
  }, {
    key: "getGridCellData",
    value: function getGridCellData(columnIndex, rowIndex) {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$currentCo = _this$props.currentCollection.items,
          items = _this$props$currentCo === void 0 ? [] : _this$props$currentCo,
          fieldsToShow = _this$props.fieldsToShow;
      var _this$state = this.state,
          editedColumnIndex = _this$state.editedColumnIndex,
          editedRowIndex = _this$state.editedRowIndex,
          hoveredColumnIndex = _this$state.hoveredColumnIndex,
          hoveredRowIndex = _this$state.hoveredRowIndex,
          isUpdating = _this$state.isUpdating,
          valueBeingEdited = _this$state.valueBeingEdited;
      var isCellBeingEdited = columnIndex === editedColumnIndex && rowIndex === editedRowIndex;
      var isCellHovered = columnIndex === hoveredColumnIndex && rowIndex === hoveredRowIndex;
      var fieldToShow = fieldsToShow[columnIndex - FIXED_COLUMNS_NUMBER];
      var isCellEditable = !isCellBeingEdited && isCellHovered && getProp(fieldToShow, 'canEdit', false);
      var item = items[rowIndex - 1];
      var id = item.id,
          name = item.name;
      var fields = getProp(item, 'metadata.enterprise.fields', []);
      var cellData;

      switch (columnIndex) {
        case FILE_ICON_COLUMN_INDEX:
          cellData = React.createElement(FileIcon, {
            dimension: FILE_ICON_SIZE,
            extension: getFileExtension(name)
          });
          break;

        case FILE_NAME_COLUMN_INDEX:
          cellData = React.createElement(PlainButton, {
            type: "button",
            onClick: function onClick() {
              return _this2.handleItemClick(item);
            }
          }, name);
          break;

        default:
          {
            var key = isString(fieldToShow) ? fieldToShow : fieldToShow.key;
            var field;
            var type = FIELD_TYPE_STRING;
            var value;
            var options = [];
            var isMetadataField = this.isMetadataField(key);

            if (isMetadataField) {
              // If field is metadata instance field
              field = find(fields, ['key', key]);

              if (!field) {
                return cellData;
              }

              var _field = field;
              type = _field.type;
              value = _field.value;
              var _field$options = _field.options;
              options = _field$options === void 0 ? [] : _field$options;
            } else {
              // If field is item field, e.g. name, size, description etc.
              value = getProp(item, key);
            }

            var fieldName = this.getFieldNameFromKey(key);
            var shouldShowEditIcon = isCellEditable && isString(type);
            cellData = React.createElement(React.Fragment, null, !isCellBeingEdited && React.createElement(ReadOnlyMetadataField, {
              dataValue: value,
              displayName: "",
              type: type
            }), shouldShowEditIcon && React.createElement(IconWithTooltip, {
              type: EDIT_ICON_TYPE,
              tooltipText: React.createElement(FormattedMessage, messages.editLabel),
              onClick: function onClick() {
                return _this2.handleEditIconClick(columnIndex, rowIndex, value);
              }
            }), isCellBeingEdited && React.createElement("div", {
              className: "bdl-MetadataBasedItemList-cell--edit"
            }, React.createElement(MetadataField, {
              canEdit: true,
              dataKey: "".concat(id).concat(key),
              dataValue: valueBeingEdited,
              displayName: "",
              type: type,
              onChange: function onChange(changeKey, changedValue) {
                _this2.setState({
                  valueBeingEdited: changedValue
                });
              },
              onRemove: function onRemove() {
                _this2.setState({
                  valueBeingEdited: undefined
                });
              },
              options: options
            }), React.createElement(IconWithTooltip, {
              className: "bdl-MetadataBasedItemList-cell--cancelIcon",
              onClick: this.handleCancelEdit,
              tooltipText: React.createElement(FormattedMessage, messages.cancel),
              type: CANCEL_ICON_TYPE
            }), value !== valueBeingEdited && React.createElement(IconWithTooltip, {
              className: "bdl-MetadataBasedItemList-cell--saveIcon",
              onClick: function onClick() {
                return _this2.handleSave(item, fieldName, type, value, valueBeingEdited);
              },
              tooltipText: React.createElement(FormattedMessage, messages.save),
              type: SAVE_ICON_TYPE,
              isUpdating: isUpdating
            })));
          }
      }

      return cellData;
    }
  }, {
    key: "getGridHeaderData",
    value: function getGridHeaderData(columnIndex) {
      var fieldsToShow = this.props.fieldsToShow;
      if (columnIndex === 0) return undefined;

      if (columnIndex === FILE_NAME_COLUMN_INDEX) {
        return React.createElement(FormattedMessage, messages.name); // "Name" column header
      }

      var responseFields = this.getQueryResponseFields();
      var field = fieldsToShow[columnIndex - FIXED_COLUMNS_NUMBER];
      var key = isString(field) ? field : field.key; // Derive displayName in following order:
      // 1. fieldsToShow prop ||
      // 2. metadata template instance ||
      // 3. field key

      var displayName = getProp(field, 'displayName') || getProp(find(responseFields, ['key', key]), 'displayName', key);
      return displayName;
    }
  }, {
    key: "getScrollPositionClasses",
    value: function getScrollPositionClasses(width) {
      var _this$state2 = this.state,
          scrollLeftOffset = _this$state2.scrollLeftOffset,
          scrollRightOffset = _this$state2.scrollRightOffset;
      var isViewScrolledLeft = this.calculateContentWidth() > width && scrollRightOffset > 0;
      var isViewScrolledRight = scrollLeftOffset > 0;
      var isViewScrolledInMiddle = isViewScrolledLeft && isViewScrolledRight;
      return {
        'is-scrolledLeft': isViewScrolledLeft && !isViewScrolledInMiddle,
        // content scrolled all the way to the left
        'is-scrolledRight': isViewScrolledRight && !isViewScrolledInMiddle,
        // content scrolled all the way to the right
        'is-scrolledMiddle': isViewScrolledInMiddle // content scrolled somewhere in between

      };
    }
  }, {
    key: "calculateContentWidth",
    value: function calculateContentWidth() {
      var fieldsToShow = this.props.fieldsToShow; // total width = sum of widths of sticky & non-sticky columns

      return FILE_ICON_COLUMN_WIDTH + FILE_NAME_COLUMN_WIDTH + fieldsToShow.length * MIN_METADATA_COLUMN_WIDTH;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          currentCollection = _this$props2.currentCollection,
          fieldsToShow = _this$props2.fieldsToShow;
      var rowCount = currentCollection.items ? currentCollection.items.length : 0;
      return React.createElement(AutoSizer, null, function (_ref5) {
        var width = _ref5.width,
            height = _ref5.height;

        var scrollClasses = _this3.getScrollPositionClasses(width);

        var classesTopRightGrid = classNames('bdl-MetadataBasedItemList-topRightGrid', scrollClasses);
        var classesBottomRightGrid = classNames('bdl-MetadataBasedItemList-bottomRightGrid', scrollClasses);
        return React.createElement("div", {
          className: "bdl-MetadataBasedItemList"
        }, React.createElement(MultiGrid, {
          cellRenderer: _this3.cellRenderer,
          classNameBottomRightGrid: classesBottomRightGrid,
          classNameTopRightGrid: classesTopRightGrid,
          columnCount: fieldsToShow.length + FIXED_COLUMNS_NUMBER,
          columnWidth: _this3.getColumnWidth(width),
          fixedColumnCount: FIXED_COLUMNS_NUMBER,
          fixedRowCount: FIXED_ROW_NUMBER,
          height: height,
          hideBottomLeftGridScrollbar: true,
          hideTopRightGridScrollbar: true,
          rowCount: rowCount + FIXED_ROW_NUMBER,
          rowHeight: 50,
          width: width,
          onScroll: _this3.handleContentScroll
        }));
      });
    }
  }]);

  return MetadataBasedItemList;
}(React.Component);

export default MetadataBasedItemList;
//# sourceMappingURL=MetadataBasedItemList.js.map