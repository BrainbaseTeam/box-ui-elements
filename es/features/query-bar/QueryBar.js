import * as React from 'react';
import TemplateButton from './components/TemplateButton';
import FilterButton from './components/filter/FilterButton';
import ColumnButton from './components/ColumnButton';
import './styles/QueryBarButtons.scss';

var isItemName = function isItemName(column) {
  return column.source === 'item' && column.property === 'name';
};

var QueryBar = function QueryBar(_ref) {
  var activeTemplate = _ref.activeTemplate,
      columns = _ref.columns,
      conditions = _ref.conditions,
      onColumnChange = _ref.onColumnChange,
      onFilterChange = _ref.onFilterChange,
      onTemplateChange = _ref.onTemplateChange,
      templates = _ref.templates;
  var metadataColumns = columns && columns.filter(function (column) {
    return column.source !== 'item';
  });
  var columnsWithoutItemName = columns && columns.filter(function (column) {
    return !isItemName(column);
  });
  return React.createElement("section", {
    className: "metadata-view-query-bar"
  }, React.createElement(TemplateButton, {
    activeTemplate: activeTemplate,
    onTemplateChange: onTemplateChange,
    templates: templates
  }), React.createElement(FilterButton, {
    columns: metadataColumns,
    conditions: conditions,
    onFilterChange: onFilterChange
  }), React.createElement(ColumnButton, {
    columns: columnsWithoutItemName,
    onColumnChange: onColumnChange,
    template: activeTemplate
  }));
};

export default QueryBar;
//# sourceMappingURL=QueryBar.js.map