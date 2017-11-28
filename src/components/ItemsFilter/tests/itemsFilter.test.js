import React from 'react';
import { shallow } from 'enzyme';
import { ItemsFilter } from '../index';

const defaultProps = {
  onHideComplete: f => f,
  onToggleHideComplete: f=>f
};

describe('Item Filter',()=>{
  it('should render hide complete toggle checkbox',()=>{
    const renderedComponent=shallow(<ItemsFilter {...defaultProps}/>)
    expect(renderedComponent.find('input[type="checkbox"]')).toHaveLength(1);
  });
  it('should call onHideComplete when checkbox is clicked',()=>{
    const onHideCompleteMock=jest.fn();
    const renderedComponent=shallow(<ItemsFilter {...defaultProps} onToggleHideComplete={onHideCompleteMock}/>);
    renderedComponent.find('input[type="checkbox"]').simulate('change');
    expect(onHideCompleteMock.mock.calls.length).toBe(1);
  });
});
