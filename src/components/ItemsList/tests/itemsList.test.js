import React from 'react';
import { shallow } from 'enzyme';
import { ItemsList } from '../index';

const defaultProps = {
  items: [],
};

describe('ItemsList', () => {
  it('renders without crashing', () => {
    shallow(<ItemsList {...defaultProps} />);
  });

  it('should display warning message if no items', () => {
    const renderedItem = shallow(<ItemsList {...defaultProps} items={[]} />);
    expect(renderedItem.find('#items-missing')).toHaveLength(1);
  });

  it('should not display warning message if items are present', () => {
    const items = [{ id: 1, content: 'Test 1' }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />);
    expect(renderedItem.find('#items-missing')).toHaveLength(0);
  });

  it('should render items as list items', () => {
    const items = [{ id: 1, content: 'Test 1' }, { id: 2, content: 'Test 2' }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />);
    expect(renderedItem.find('li')).toHaveLength(2);
  });
  it('should render delete button for each item', () => {
    const items = [{ id: 1, content: 'Test 1' }, { id: 2, content: 'Test 2' }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />);
    expect(renderedItem.find('button')).toHaveLength(2);
  });
  it('should call onDelete when click delete button', () => {
    const onDeleteMock=jest.fn();
    const items = [{ id: 1, content: 'Test 1' }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} onDelete={onDeleteMock} />);
    renderedItem.find("button").simulate('click');
    expect(onDeleteMock.mock.calls.length).toBe(1);
    expect(onDeleteMock.mock.calls[0][0]).toBe(1);
  });
  it('should render checkbox toggle for each item',()=>{
    const items = [{ id: 1, content: 'Test 1',isComplete:true }, { id: 2, content: 'Test 2',isComplete:false }];
    const renderedItem= shallow(<ItemsList {...defaultProps} items={items} />);
    expect(renderedItem.find('input[type="checkbox"]')).toHaveLength(2);
  });
  it('should call toggleItem on click checkbox with the expected argument',()=>{
    const toggleItemMock=jest.fn();
    const items = [{ id: 1, content: 'Test 1',isComplete:true }, { id: 2, content: 'Test 2',isComplete:false }];
    const renderedItem=shallow(<ItemsList {...defaultProps} items={items} onToggle={toggleItemMock(2)}/>)
    expect(toggleItemMock.mock.calls.length).toBe(1);
    expect(toggleItemMock.mock.calls[0][0]).toBe(2);
  });
  it('should not render completed items if hideComplete true',()=>{
    const toggleItemMock=jest.fn();
    const items = [{ id: 1, content: 'Test 1',isComplete:true }, { id: 2, content: 'Test 2',isComplete:false }];
    const renderedItem=shallow(<ItemsList {...defaultProps} items={items} onToggle={toggleItemMock(2)} hideComplete={true}/>)
    expect(renderedItem.find("li").length).toBe(1);
  });
  it('should render completed items if hideComplete false',()=>{
    const toggleItemMock=jest.fn();
    const items = [{ id: 1, content: 'Test 1',isComplete:true }, { id: 2, content: 'Test 2',isComplete:false }];
    const renderedItem=shallow(<ItemsList {...defaultProps} items={items} onToggle={toggleItemMock(2)} hideComplete={false}/>)
    expect(renderedItem.find("li").length).toBe(2);
  });
});
