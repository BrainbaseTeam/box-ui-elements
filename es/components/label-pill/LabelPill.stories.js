import * as React from 'react';
import { select } from '@storybook/addon-knobs';
import Shield16 from '../../icon/line/Shield16';
import LabelPill, { LabelPillStatus, LabelPillSize } from './LabelPill';
import notes from './LabelPill.stories.md';
var typeLabel = '"type" Prop';
var sizeLabel = '"size" Prop';
var typeOptions = [LabelPillStatus.DEFAULT, LabelPillStatus.ALERT, LabelPillStatus.ERROR, LabelPillStatus.FTUX, LabelPillStatus.HIGHLIGHT, LabelPillStatus.INFO, LabelPillStatus.SUCCESS, LabelPillStatus.WARNING];
var sizeOptions = [LabelPillSize.REGULAR, LabelPillSize.LARGE];
export var withText = function withText() {
  return React.createElement(LabelPill.Pill, {
    type: select(typeLabel, typeOptions, LabelPillStatus.DEFAULT),
    size: select(sizeLabel, sizeOptions, LabelPillSize.REGULAR)
  }, React.createElement(LabelPill.Text, null, "TEST TEXT"));
};
export var withIcon = function withIcon() {
  return React.createElement(LabelPill.Pill, {
    type: select(typeLabel, typeOptions, LabelPillStatus.DEFAULT),
    size: select(sizeLabel, sizeOptions, LabelPillSize.REGULAR)
  }, React.createElement(LabelPill.Icon, {
    Component: Shield16
  }));
};
export var withBoth = function withBoth() {
  return React.createElement(LabelPill.Pill, {
    type: select(typeLabel, typeOptions, LabelPillStatus.DEFAULT),
    size: select(sizeLabel, sizeOptions, LabelPillSize.REGULAR)
  }, React.createElement(LabelPill.Icon, {
    Component: Shield16
  }), React.createElement(LabelPill.Text, null, "TEST TEXT"));
};
export var severalComponents = function severalComponents() {
  return React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, React.createElement(LabelPill.Pill, {
    type: LabelPillStatus.WARNING,
    size: select(sizeLabel, sizeOptions, LabelPillSize.REGULAR)
  }, React.createElement(LabelPill.Text, null, "BETA")), ' ', React.createElement(LabelPill.Pill, {
    type: LabelPillStatus.INFO,
    size: select(sizeLabel, sizeOptions, LabelPillSize.REGULAR)
  }, React.createElement(LabelPill.Text, null, "IN PROGRESS")), ' ', React.createElement(LabelPill.Pill, {
    type: LabelPillStatus.WARNING,
    size: select(sizeLabel, sizeOptions, LabelPillSize.REGULAR)
  }, React.createElement(LabelPill.Icon, {
    Component: Shield16
  }), React.createElement(LabelPill.Text, null, "CONFIDENTIAL")), ' ', React.createElement(LabelPill.Pill, {
    type: LabelPillStatus.FTUX,
    size: select(sizeLabel, sizeOptions, LabelPillSize.REGULAR)
  }, React.createElement(LabelPill.Text, null, "NEW")), ' ', React.createElement(LabelPill.Pill, {
    type: LabelPillStatus.ALERT,
    size: select(sizeLabel, sizeOptions, LabelPillSize.REGULAR)
  }, React.createElement(LabelPill.Text, null, "DUE JUL 9 AT 11:59 PM")), ' ', React.createElement(LabelPill.Pill, {
    type: LabelPillStatus.SUCCESS,
    size: select(sizeLabel, sizeOptions, LabelPillSize.REGULAR)
  }, React.createElement(LabelPill.Text, null, "SUCCESS")), ' ');
};
export default {
  title: 'Components|LabelPill',
  subcomponents: {
    'LabelPill.Pill': LabelPill.Pill,
    'LabelPill.Text': LabelPill.Text,
    'LabePill.Icon': LabelPill.Icon
  },
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=LabelPill.stories.js.map