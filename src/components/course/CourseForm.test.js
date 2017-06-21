import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';
import {mount, shallow} from 'enzyme';

function setupReactUtilTest(saving) {
  let props = {
    course: {},
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props}/>)
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  }
}

function setupEnzyme(saving) {
  const  props = {
    course: {},
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<CourseForm {...props}/>)
}

describe('CourseFrom via Enzyme ', () => {
  it('render form and h1', () => {
    const wrapper= setupEnzyme();
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Course');
  });

  it('save button is labeled save when not saving', () => {
    const wrapper= setupEnzyme(false);
    expect(wrapper.find('input').props().value).toBe('Save');
  });

  it('save button is labeled saving... when not saving', () => {
    const wrapper= setupEnzyme(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });
});

describe('CourseFrom via React Test Utils', () => {
  it('render form and h1', () => {
    const {output} = setupReactUtilTest();
    expect(output.type).toBe('form');

    let [ h1 ] = output.props.children;
    expect(h1.type).toBe('h1');
  });

  it('save button is labeled save when not saving', () => {
    const {output} = setupReactUtilTest(false);
    const submitButton = output.props.children[5];

    expect(submitButton.props.value).toBe('Save');
  });

  it('save button is labeled saving... when not saving', () => {
    const {output} = setupReactUtilTest(true);
    const submitButton = output.props.children[5];

    expect(submitButton.props.value).toBe('Saving...');
  });
});
