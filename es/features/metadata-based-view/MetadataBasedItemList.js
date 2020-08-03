function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import AutoSizer from 'react-virtualized/dist/es/AutoSizer';
import classNames from 'classnames';
import find from 'lodash/find';
import getProp from 'lodash/get';
import MultiGrid from 'react-virtualized/dist/es/MultiGrid/MultiGrid';
import Field from '../metadata-instance-editor/fields/Field';
import FileIcon from '../../icons/file-icon';
import IconWithTooltip from './IconWithTooltip';
import PlainButton from '../../components/plain-button';
import { getFileExtension } from '../../utils/file';
import messages from '../../elements/common/messages';
import './MetadataBasedItemList.scss';
import { CANCEL_ICON_TYPE, EDIT_ICON_TYPE, FILE_ICON_COLUMN_INDEX, FILE_ICON_COLUMN_WIDTH, FILE_ICON_SIZE, FILE_NAME_COLUMN_INDEX, FILE_NAME_COLUMN_WIDTH, FIXED_COLUMNS_NUMBER, FIXED_ROW_NUMBER, HEADER_ROW_INDEX, MIN_METADATA_COLUMN_WIDTH, SAVE_ICON_TYPE } from './constants';

var MetadataBasedItemList = /*#__PURE__*/function (_React$Component) {
  _inherits(MetadataBasedItemList, _React$Component);

  var _super = _createSuper(MetadataBasedItemList);

  function MetadataBasedItemList(props) {
    var _this;

    _classCallCheck(this, MetadataBasedItemList);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleCancelEdit", function () {
      _this.setState({
        editedColumnIndex: -1,
        editedRowIndex: -1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSave", function () {
      /* Implement me */
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

    _defineProperty(_assertThisInitialized(_this), "cellRenderer", function (_ref) {
      var columnIndex = _ref.columnIndex,
          rowIndex = _ref.rowIndex,
          key = _ref.key,
          style = _ref.style;
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
      return /*#__PURE__*/React.createElement("div", {
        key: key,
        className: classes,
        style: style,
        onMouseLeave: _this.handleMouseLeave,
        onMouseEnter: function onMouseEnter() {
          return _this.handleMouseEnter(columnIndex, rowIndex);
        }
      }, data);
    });

    _this.state = {
      // initial MultiGrid load
      editedColumnIndex: -1,
      editedRowIndex: -1,
      hoveredRowIndex: -1,
      hoveredColumnIndex: -1
    };
    return _this;
  }

  _createClass(MetadataBasedItemList, [{
    key: "getMetadataColumnName",
    value: function getMetadataColumnName(column) {
      return typeof column === 'string' ? column : getProp(column, 'name');
    }
  }, {
    key: "getColumnWidth",
    value: function getColumnWidth(width) {
      var metadataColumnsToShow = this.props.metadataColumnsToShow;
      return function (_ref2) {
        var index = _ref2.index;

        if (index === FILE_ICON_COLUMN_INDEX) {
          return FILE_ICON_COLUMN_WIDTH;
        }

        if (index === FILE_NAME_COLUMN_INDEX) {
          return FILE_NAME_COLUMN_WIDTH;
        }

        var availableWidth = width - FILE_NAME_COLUMN_WIDTH - FILE_ICON_COLUMN_WIDTH; // total width minus width of sticky columns
        // Maintain min column width, else occupy the rest of the space equally

        return Math.max(availableWidth / metadataColumnsToShow.length, MIN_METADATA_COLUMN_WIDTH);
      };
    }
  }, {
    key: "handleItemClick",
    value: function handleItemClick(item) {
      var onItemClick = this.props.onItemClick;
      /*
          - @TODO: Remove permissions object once its part of API response.
          - In Content Explorer element, if can_preview permission is false, there is no action taken onClick(item).
          - Until the response has permissions, add "can_preview: true" so that users can click to launch the Preview modal. If users don't have access, they will see the error when Preview loads.
      */

      var permissions = {
        can_preview: true
      };

      var itemWithPreviewPermission = _objectSpread(_objectSpread({}, item), {}, {
        permissions: permissions
      });

      onItemClick(itemWithPreviewPermission);
    }
  }, {
    key: "handleEditIconClick",
    value: function handleEditIconClick(columnIndex, rowIndex) {
      this.setState({
        editedColumnIndex: columnIndex,
        editedRowIndex: rowIndex
      });
    }
  }, {
    key: "getGridCellData",
    value: function getGridCellData(columnIndex, rowIndex) {
      var _this2 = this;

      var _this$props = this.props,
          items = _this$props.currentCollection.items,
          metadataColumnsToShow = _this$props.metadataColumnsToShow;
      var _this$state = this.state,
          hoveredColumnIndex = _this$state.hoveredColumnIndex,
          hoveredRowIndex = _this$state.hoveredRowIndex,
          editedColumnIndex = _this$state.editedColumnIndex,
          editedRowIndex = _this$state.editedRowIndex;
      var isCellBeingEdited = columnIndex === editedColumnIndex && rowIndex === editedRowIndex;
      var isCellHovered = columnIndex === hoveredColumnIndex && rowIndex === hoveredRowIndex;
      var metadataColumn = metadataColumnsToShow[columnIndex - FIXED_COLUMNS_NUMBER];
      var isCellEditable = !isCellBeingEdited && isCellHovered && !!getProp(metadataColumn, 'canEdit', false);
      var item = items[rowIndex - 1];
      var name = item.name;
      var fields = getProp(item, 'metadata.fields', []);
      var cellData;

      switch (columnIndex) {
        case FILE_ICON_COLUMN_INDEX:
          cellData = /*#__PURE__*/React.createElement(FileIcon, {
            dimension: FILE_ICON_SIZE,
            extension: getFileExtension(name)
          });
          break;

        case FILE_NAME_COLUMN_INDEX:
          cellData = /*#__PURE__*/React.createElement(PlainButton, {
            type: "button",
            onClick: function onClick() {
              return _this2.handleItemClick(item);
            }
          }, name);
          break;

        default:
          {
            var mdFieldName = this.getMetadataColumnName(metadataColumn);
            var field = find(fields, ['name', mdFieldName]);

            if (!field) {
              return cellData;
            }

            var type = field.type,
                value = field.value,
                _field$options = field.options,
                options = _field$options === void 0 ? [] : _field$options;
            cellData = /*#__PURE__*/React.createElement(React.Fragment, null, !isCellBeingEdited && value, value && isCellEditable && /*#__PURE__*/React.createElement(IconWithTooltip, {
              type: EDIT_ICON_TYPE,
              tooltipText: /*#__PURE__*/React.createElement(FormattedMessage, messages.editLabel),
              onClick: function onClick() {
                return _this2.handleEditIconClick(columnIndex, rowIndex);
              }
            }), value && isCellBeingEdited && /*#__PURE__*/React.createElement("div", {
              className: "bdl-MetadataBasedItemList-cell--edit"
            }, /*#__PURE__*/React.createElement(Field, {
              canEdit: true,
              dataKey: value,
              dataValue: value,
              displayName: "",
              type: type,
              onChange: function onChange() {
                /* implement me */
              },
              onRemove: function onRemove() {
                /* implement me */
              },
              options: options
            }), /*#__PURE__*/React.createElement(IconWithTooltip, {
              className: "bdl-MetadataBasedItemList-cell--cancelIcon",
              onClick: this.handleCancelEdit,
              tooltipText: /*#__PURE__*/React.createElement(FormattedMessage, messages.cancel),
              type: CANCEL_ICON_TYPE
            }), /*#__PURE__*/React.createElement(IconWithTooltip, {
              className: "bdl-MetadataBasedItemList-cell--saveIcon",
              onClick: this.handleSave,
              tooltipText: /*#__PURE__*/React.createElement(FormattedMessage, messages.save),
              type: SAVE_ICON_TYPE
            })));
          }
      }

      return cellData;
    }
  }, {
    key: "getGridHeaderData",
    value: function getGridHeaderData(columnIndex) {
      var metadataColumnsToShow = this.props.metadataColumnsToShow;

      if (columnIndex === FILE_NAME_COLUMN_INDEX) {
        return /*#__PURE__*/React.createElement(FormattedMessage, messages.name); // "Name" column header
      }

      return this.getMetadataColumnName(metadataColumnsToShow[columnIndex - FIXED_COLUMNS_NUMBER]); // column header
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          currentCollection = _this$props2.currentCollection,
          metadataColumnsToShow = _this$props2.metadataColumnsToShow;
      var rowCount = currentCollection.items ? currentCollection.items.length : 0;
      return /*#__PURE__*/React.createElement(AutoSizer, null, function (_ref3) {
        var width = _ref3.width,
            height = _ref3.height;
        return /*#__PURE__*/React.createElement("div", {
          className: "bdl-MetadataBasedItemList"
        }, /*#__PURE__*/React.createElement(MultiGrid, {
          cellRenderer: _this3.cellRenderer,
          columnCount: metadataColumnsToShow.length + FIXED_COLUMNS_NUMBER,
          columnWidth: _this3.getColumnWidth(width),
          fixedColumnCount: FIXED_COLUMNS_NUMBER,
          fixedRowCount: FIXED_ROW_NUMBER,
          height: height,
          hideBottomLeftGridScrollbar: true,
          hideTopRightGridScrollbar: true,
          rowCount: rowCount + FIXED_ROW_NUMBER,
          rowHeight: 50,
          width: width
        }));
      });
    }
  }]);

  return MetadataBasedItemList;
}(React.Component);

export default MetadataBasedItemList;
//# sourceMappingURL=MetadataBasedItemList.js.map