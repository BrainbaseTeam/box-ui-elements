import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { State, Store } from '@sambego/storybook-state';
import { TooltipPosition } from '../tooltip';
import DatePicker from './DatePicker';
import notes from './DatePicker.stories.md';
import { bdlGray10 } from '../../styles/variables';
export var basic = function basic() {
  var MIN_TIME = new Date(0);
  var TODAY = new Date('July 18, 2018');
  var yearRange = [MIN_TIME.getFullYear(), TODAY.getFullYear()];
  var componentStore = new Store({
    date: new Date('July 9, 2018'),
    fromDate: null,
    toDate: null
  });
  return React.createElement(State, {
    store: componentStore
  }, function (state) {
    return React.createElement(IntlProvider, {
      locale: "en-US"
    }, React.createElement(DatePicker, {
      className: "date-picker-example",
      displayFormat: {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      },
      label: "Date",
      name: "datepicker",
      onChange: function onChange(date) {
        componentStore.set({
          date: date
        });
      },
      placeholder: "Date",
      value: state.date,
      yearRange: yearRange
    }));
  });
};
export var withDescription = function withDescription() {
  return React.createElement(IntlProvider, {
    locale: "en-US"
  }, React.createElement(DatePicker, {
    placeholder: "Date",
    description: "Date of your birth",
    label: "Date Picker"
  }));
};
export var manuallyEditable = function manuallyEditable() {
  return React.createElement(IntlProvider, {
    locale: "en-US"
  }, React.createElement(DatePicker, {
    isTextInputAllowed: true,
    placeholder: "Date",
    label: "Date Picker",
    value: new Date('September 27, 2019')
  }));
};
export var withLimitedDateRange = function withLimitedDateRange() {
  var maxDate = new Date('February 25, 2021');
  var sixDays = 1000 * 60 * 60 * 24 * 6;
  var minDate = new Date(maxDate.valueOf() - sixDays);
  var componentStore = new Store({
    date: maxDate,
    fromDate: null,
    toDate: null
  });
  return React.createElement(State, {
    store: componentStore
  }, function (state) {
    return React.createElement(IntlProvider, {
      locale: "en-US"
    }, React.createElement(DatePicker, {
      isTextInputAllowed: true,
      placeholder: "Date",
      label: "Date Picker",
      minDate: minDate,
      maxDate: maxDate,
      value: state.date
    }));
  });
};
export var alwaysVisibleWithCustomInputField = function alwaysVisibleWithCustomInputField() {
  var componentStore = new Store({
    date: new Date('February 26, 2021'),
    fromDate: null,
    toDate: null
  });
  return React.createElement(State, {
    store: componentStore
  }, function (state) {
    var customInput = React.createElement("input", {
      style: {
        display: 'none'
      }
    });
    return React.createElement(IntlProvider, {
      locale: "en-US"
    }, React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center'
      }
    }, React.createElement(DatePicker, {
      className: "date-picker-example",
      customInput: customInput,
      displayFormat: {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      },
      hideLabel: true,
      isAlwaysVisible: true,
      isClearable: false,
      label: "Date",
      name: "datepicker",
      onChange: function onChange(date) {
        componentStore.set({
          date: date
        });
      },
      placeholder: "Date",
      value: state.date
    }), React.createElement("div", {
      style: {
        margin: '20px 30px',
        width: '400px'
      }
    }, React.createElement("p", null, "In this example, the DatePicker is bound to a custom hidden input field. The right panel retains the same state as the DatePicker, but is not contained within the DatePicker component."), React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, React.createElement("label", {
      htmlFor: "date-picker-custom-input",
      style: {
        position: 'absolute',
        left: '10px',
        top: '6px',
        zIndex: 100
      }
    }, "Start Date"), React.createElement("input", {
      name: "date-picker-custom-input",
      style: {
        background: bdlGray10,
        border: 0,
        borderRadius: '4px',
        padding: '.5em .8em',
        width: '19em',
        height: '2.5em',
        top: 0,
        outline: 'none',
        textAlign: 'right'
      },
      value: state.date.toDateString()
    })))));
  });
};
export var disabledWithErrorMessage = function disabledWithErrorMessage() {
  return React.createElement(IntlProvider, {
    locale: "en-US"
  }, React.createElement(DatePicker, {
    isDisabled: true,
    error: "Error Message",
    placeholder: "Date",
    name: "datepicker",
    label: "Disabled Date Picker"
  }));
};
export var customErrorTooltipPosition = function customErrorTooltipPosition() {
  return React.createElement(IntlProvider, {
    locale: "en-US"
  }, React.createElement(DatePicker, {
    error: "Error Message",
    errorTooltipPosition: TooltipPosition.MIDDLE_RIGHT,
    placeholder: "Date",
    name: "datepicker",
    label: "Disabled Date Picker"
  }));
};
export var withRange = function withRange() {
  var MAX_TIME = new Date('3000-01-01T00:00:00.000Z');
  var MIN_TIME = new Date(0);
  var TODAY = new Date();
  var componentStore = new Store({
    date: new Date(),
    fromDate: null,
    toDate: null
  });
  return React.createElement(State, {
    store: componentStore
  }, function (state) {
    return React.createElement(IntlProvider, {
      locale: "en-US"
    }, React.createElement("div", null, React.createElement(DatePicker, {
      className: "date-picker-example",
      displayFormat: {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      },
      hideOptionalLabel: true,
      label: "From Date",
      maxDate: state.toDate || MAX_TIME,
      name: "datepicker-from",
      onChange: function onChange(date) {
        componentStore.set({
          fromDate: date
        });
      },
      placeholder: "Choose a Date",
      value: state.fromDate
    }), React.createElement(DatePicker, {
      className: "date-picker-example",
      displayFormat: {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      },
      hideOptionalLabel: true,
      label: "To Date",
      minDate: state.fromDate || MIN_TIME,
      maxDate: TODAY,
      name: "datepicker-to",
      onChange: function onChange(date) {
        componentStore.set({
          toDate: date
        });
      },
      placeholder: "Choose a Date",
      value: state.toDate
    })));
  });
};
export default {
  title: 'Components|DatePicker',
  component: DatePicker,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=DatePicker.stories.js.map