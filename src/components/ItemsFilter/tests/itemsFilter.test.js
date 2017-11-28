import React from 'react';
import { shallow } from 'enzyme';
import { ItemsFilter } from '../index';

describe('Item Filter',()=>{
  it('should render hide complete toggle checkbox',()=>{
    const renderedComponent=shallow(<ItemsFilter/>)
    expect(renderedComponent.find('input[type="checkbox"]')).toHaveLength(1);
  });
});
