import React from 'react';
import { mount } from 'enzyme';
import Button from '../../button';
import ButtonGroup from '..';
describe('components/button-group/ButtonGroup', function () {
  test('should render correct ButtonGroup', function () {
    var wrapper = mount(React.createElement(ButtonGroup, null, React.createElement(Button, null, "Add"), React.createElement(Button, null, "Update"), React.createElement(Button, null, "Remove")));
    expect(wrapper.find('.btn-group')).toBeTruthy();
    expect(wrapper.find('.btn').length).toBe(3);
  });
});
//# sourceMappingURL=ButtonGroup.test.js.map