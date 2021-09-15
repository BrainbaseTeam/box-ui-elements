import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { State, Store } from '@sambego/storybook-state';
import TimeInput from './TimeInput';
export var required = function required() {
  var INITIAL_DATE = new Date(2018, 7, 9, 15, 35);
  var componentStore = new Store({
    initialDate: INITIAL_DATE
  });
  return React.createElement(State, {
    store: componentStore
  }, function (state) {
    return React.createElement(IntlProvider, {
      locale: "en-US"
    }, React.createElement(TimeInput, {
      initialDate: state.initialDate
    }));
  });
};
export var optional = function optional() {
  var INITIAL_DATE = new Date(2018, 7, 9, 15, 35);
  var componentStore = new Store({
    initialDate: INITIAL_DATE
  });
  return React.createElement(State, {
    store: componentStore
  }, function (state) {
    return React.createElement(IntlProvider, {
      locale: "en-US"
    }, React.createElement(TimeInput, {
      initialDate: state.initialDate,
      isRequired: false
    }));
  });
};
export default {
  title: 'Components|TimeInput',
  component: TimeInput
};
//# sourceMappingURL=TimeInput.stories.js.map