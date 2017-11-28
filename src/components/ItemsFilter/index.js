import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const ItemsFilter=({})=>{
  return(
    <div>
      <input type="checkbox" defaultChecked={false}/>
      <label>Hide Completed</label>
    </div>
  )
}
