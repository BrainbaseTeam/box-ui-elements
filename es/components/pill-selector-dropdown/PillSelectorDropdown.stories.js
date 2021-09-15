function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import * as React from 'react';
import { State, Store } from '@sambego/storybook-state';
import ContactDatalistItem from '../contact-datalist-item';
import PillSelectorDropdown from './PillSelectorDropdown';
import notes from './PillSelectorDropdown.notes.md';
import './PillSelectorDropdown.stories.scss';
var users = [{
  id: 0,
  name: 'bob@foo.bar'
}, {
  id: 1,
  name: 'sally@foo.bar',
  isExternalUser: true
}, {
  id: 2,
  name: 'jean@foo.bar'
}, {
  id: 3,
  name: 'longlonglonglonglonglonglonglonglonglonglonglongemail@foo.bar'
}, {
  id: 4,
  name: 'anotherlonglonglonglonglonglonglonglonglonglonglonglongemail@foo.bar'
}, {
  id: 5,
  name: 'aaa@foo.bar'
}, {
  id: 6,
  name: 'bbb@foo.bar'
}, {
  id: 7,
  name: 'ccc@foo.bar'
}];

function generateProps(store) {
  var handleInput = function handleInput(value) {
    var selectorOptions = [];

    if (value !== '') {
      users.forEach(function (user) {
        if (user.name.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
          selectorOptions.push({
            displayText: user.name,
            value: user.id
          });
        }
      });
    } // As user is typing, reset error and update selectorOptions


    store.set({
      selectorOptions: selectorOptions,
      error: ''
    });
  };

  var handleSelect = function handleSelect(pills) {
    store.set({
      selectedOptions: [].concat(_toConsumableArray(store.get('selectedOptions')), _toConsumableArray(pills))
    });
  };

  var handleRemove = function handleRemove(option, index) {
    var selectedOptions = _toConsumableArray(store.get('selectedOptions'));

    selectedOptions.splice(index, 1);
    store.set({
      selectedOptions: selectedOptions
    });
  };

  var validator = function validator(text) {
    // email input validation
    var pattern = /^[^\s<>@,]+@[^\s<>@,/\\]+\.[^\s<>@,]+$/i;
    return pattern.test(text);
  };

  var validateForError = function validateForError(text) {
    var count = store.get('selectedOptions').length;
    var error = '';

    if (!text && count === 0) {
      error = 'Field Required';
    } else if (text && !validator(text)) {
      error = 'Invalid Email Address';
    }

    store.set({
      error: error
    });
  };

  return {
    handleInput: handleInput,
    handleRemove: handleRemove,
    handleSelect: handleSelect,
    validator: validator,
    validateForError: validateForError
  };
}

export var empty = function empty() {
  var emptyStore = new Store({
    error: '',
    selectedOptions: [],
    selectorOptions: []
  });

  var _generateProps = generateProps(emptyStore),
      handleInput = _generateProps.handleInput,
      handleRemove = _generateProps.handleRemove,
      handleSelect = _generateProps.handleSelect,
      validator = _generateProps.validator,
      validateForError = _generateProps.validateForError;

  return React.createElement(State, {
    store: emptyStore
  }, function (state) {
    return React.createElement(PillSelectorDropdown, {
      allowCustomPills: true,
      error: state.error,
      placeholder: "Names or email addresses",
      onInput: handleInput,
      onRemove: handleRemove,
      onSelect: handleSelect,
      selectedOptions: state.selectedOptions,
      selectorOptions: state.selectorOptions,
      validateForError: validateForError,
      validator: validator
    }, state.selectorOptions.map(function (option) {
      return React.createElement(ContactDatalistItem, {
        key: option.value,
        name: option.displayText
      }, option.displayText);
    }));
  });
};
export var withPills = function withPills() {
  var storeWithPills = new Store({
    error: '',
    selectedOptions: [{
      displayText: users[2].name,
      value: users[2].name
    }, {
      displayText: users[1].name,
      value: users[1].name
    }, {
      displayText: users[4].name,
      value: users[4].name
    }],
    selectorOptions: []
  });

  var _generateProps2 = generateProps(storeWithPills),
      handleInput = _generateProps2.handleInput,
      handleRemove = _generateProps2.handleRemove,
      handleSelect = _generateProps2.handleSelect,
      validator = _generateProps2.validator,
      validateForError = _generateProps2.validateForError;

  return React.createElement(State, {
    store: storeWithPills
  }, function (state) {
    return React.createElement(PillSelectorDropdown, {
      allowCustomPills: true,
      error: state.error,
      placeholder: "Names or email addresses",
      onInput: handleInput,
      onRemove: handleRemove,
      onSelect: handleSelect,
      selectedOptions: state.selectedOptions,
      selectorOptions: state.selectorOptions,
      validateForError: validateForError,
      validator: validator
    }, state.selectorOptions.map(function (option) {
      return React.createElement(ContactDatalistItem, {
        key: option.value,
        name: option.value
      }, option.displayText);
    }));
  });
};
export var showRoundedPills = function showRoundedPills() {
  var storeWithPills = new Store({
    error: '',
    selectedOptions: [{
      displayText: users[2].name,
      value: users[2].name
    }, {
      displayText: users[1].name,
      value: users[1].name
    }, {
      displayText: users[4].name,
      value: users[4].name
    }],
    selectorOptions: []
  });

  var _generateProps3 = generateProps(storeWithPills),
      handleInput = _generateProps3.handleInput,
      handleRemove = _generateProps3.handleRemove,
      handleSelect = _generateProps3.handleSelect,
      validator = _generateProps3.validator,
      validateForError = _generateProps3.validateForError;

  return React.createElement(State, {
    store: storeWithPills
  }, function (state) {
    return React.createElement(PillSelectorDropdown, {
      allowCustomPills: true,
      error: state.error,
      placeholder: "Names or email addresses",
      onInput: handleInput,
      onRemove: handleRemove,
      onSelect: handleSelect,
      selectedOptions: state.selectedOptions,
      selectorOptions: state.selectorOptions,
      showRoundedPills: true,
      validateForError: validateForError,
      validator: validator
    }, state.selectorOptions.map(function (option) {
      return React.createElement(ContactDatalistItem, {
        key: option.value,
        name: option.value
      }, option.displayText);
    }));
  });
};
export var showAvatars = function showAvatars() {
  var storeWithPills = new Store({
    error: '',
    selectedOptions: [{
      text: users[2].name,
      value: users[2].name,
      id: users[2].id
    }, {
      text: users[1].name,
      value: users[1].name,
      id: users[1].id,
      isExternalUser: users[1].isExternalUser
    }, {
      text: users[3].name,
      value: users[3].name,
      id: users[3].id
    }],
    selectorOptions: []
  });

  var _generateProps4 = generateProps(storeWithPills),
      handleInput = _generateProps4.handleInput,
      handleRemove = _generateProps4.handleRemove,
      handleSelect = _generateProps4.handleSelect,
      validator = _generateProps4.validator,
      validateForError = _generateProps4.validateForError;

  return React.createElement(State, {
    store: storeWithPills
  }, function (state) {
    return React.createElement(PillSelectorDropdown, {
      allowCustomPills: true,
      error: state.error,
      placeholder: "Names or email addresses",
      onInput: handleInput,
      onRemove: handleRemove,
      onSelect: handleSelect,
      selectedOptions: state.selectedOptions,
      selectorOptions: state.selectorOptions,
      showRoundedPills: true,
      showAvatars: true,
      validateForError: validateForError,
      validator: validator
    }, state.selectorOptions.map(function (option) {
      return React.createElement(ContactDatalistItem, {
        key: option.value,
        name: option.value
      }, option.displayText);
    }));
  });
};
export var customPillStyles = function customPillStyles() {
  /**
   * NOTE: For consistent styling, use bdl-RoundPill mixin when creating custom pill classes.
   *
   * Example:
   *
   *    .bdl-RoundPill {
   *       &.is-custom {
   *         @include bdl-RoundPill($border-color: $bdl-watermelon-red-50, $selected-border-color: $bdl-watermelon-red-50);
   *       }
   *     }
   *
   *
   */
  var storeWithPills = new Store({
    error: '',
    selectedOptions: [{
      displayText: 'default@example.com',
      value: '1'
    }, {
      displayText: 'custom@example.com',
      value: '2'
    }],
    selectorOptions: []
  });

  var getPillClassName = function getPillClassName(_ref) {
    var value = _ref.value;

    switch (value) {
      case '2':
        return 'is-custom';

      default:
        return '';
    }
  };

  var _generateProps5 = generateProps(storeWithPills),
      handleInput = _generateProps5.handleInput,
      handleRemove = _generateProps5.handleRemove,
      handleSelect = _generateProps5.handleSelect,
      validator = _generateProps5.validator,
      validateForError = _generateProps5.validateForError;

  return React.createElement(State, {
    store: storeWithPills
  }, function (state) {
    return React.createElement(PillSelectorDropdown, {
      allowCustomPills: true,
      error: state.error,
      getPillClassName: getPillClassName,
      placeholder: "Names or email addresses",
      onInput: handleInput,
      onRemove: handleRemove,
      onSelect: handleSelect,
      selectedOptions: state.selectedOptions,
      selectorOptions: state.selectorOptions,
      showRoundedPills: true,
      validateForError: validateForError,
      validator: validator
    }, state.selectorOptions.map(function (option) {
      return React.createElement(ContactDatalistItem, {
        key: option.value,
        name: option.displayText
      }, option.displayText);
    }));
  });
};
export default {
  title: 'Components|PillSelectorDropdown',
  component: PillSelectorDropdown,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=PillSelectorDropdown.stories.js.map