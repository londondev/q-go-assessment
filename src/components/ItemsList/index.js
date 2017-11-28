import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem,toggleItem } from '../../logic/todos';
import './styles.css';

export const ItemsList = ({ items,onDelete,onToggle,hideComplete }) => {
  return (
    <div>
      <ul className="itemsList-ul">
        {items.length < 1 && <p id="items-missing">Add some tasks above.</p>}
        {items.map(item => (!hideComplete || !item.isComplete) &&
            <li key={item.id}>{item.content}
                <button class="itemDelete-button" onClick={()=>onDelete(item.id)}>delete</button>
                <input type="checkbox" defaultChecked={item.isComplete} onChange={()=>onToggle(item.id)}/>
             </li>)
         }
      </ul>
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return { items: state.todos.items,
           hideComplete:state.todos.hideComplete
         };
};
const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteItem(id)),
  onToggle: id => dispatch(toggleItem(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(ItemsList);
