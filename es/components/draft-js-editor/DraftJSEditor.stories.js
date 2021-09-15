import * as React from 'react';
import { ContentState, EditorState } from 'draft-js';
import { State, Store } from '@sambego/storybook-state';
import { boolean } from '@storybook/addon-knobs';
import DraftJSEditor from './DraftJSEditor';
import notes from './DraftJSEditor.stories.md';
import { DraftMentionDecorator } from '../form-elements/draft-js-mention-selector';
export var basic = function basic() {
  var initialEditorState = EditorState.createWithContent(ContentState.createFromText('Example'), DraftMentionDecorator);
  var componentStore = new Store({
    exampleExternalEditorState: initialEditorState
  });

  var setEditorState = function setEditorState(newEditorState) {
    componentStore.set({
      exampleExternalEditorState: newEditorState
    });
  };

  return React.createElement(State, {
    store: componentStore
  }, function (state) {
    return React.createElement(DraftJSEditor, {
      editorState: state.exampleExternalEditorState,
      hideLabel: boolean('hideLabel', false),
      inputProps: {},
      isDisabled: boolean('isDisabled', false),
      isRequired: boolean('isRequired', true),
      label: "Draft.js Editor Example",
      description: "Description for screenReader users",
      onBlur: function onBlur() {
        return null;
      },
      onChange: setEditorState,
      onFocus: function onFocus() {
        return null;
      }
    });
  });
};
export default {
  title: 'Components|DraftJSEditor',
  component: DraftJSEditor,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=DraftJSEditor.stories.js.map