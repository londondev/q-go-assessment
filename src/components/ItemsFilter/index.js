import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleHideComplete } from '../../logic/todos';

export const ItemsFilter=({onToggleHideComplete})=>{
  return(
    <div>
    <input type="checkbox" defaultChecked={false} onChange={()=>onToggleHideComplete()}/>
      <label>Hide Completed</label>
    </div>
  )
}

ItemsFilter.propTypes = {
  onToggleHideComplete:PropTypes.func.isRequired
};
const mapDispatchToProps = dispatch => ({
  onToggleHideComplete: () => dispatch(toggleHideComplete()),
});

export default connect(null, mapDispatchToProps)(ItemsFilter);
