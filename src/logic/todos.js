export const ADD_ITEM = 'qgo/assessment/ADD_ITEM';
export const DELETE_ITEM='qgo/assessment/DELETE_ITEM';
export const TOGGLE_ITEM='qgo/assessment/TOGGLE_ITEM';
export const TOGGLE_HIDE_COMPLETE='qgo/assessment/TOGGLE_HIDE_COMPLETE';

export const addItem = content => {
  return { type: ADD_ITEM, content };
};
export const deleteItem=id =>{
  return { type: DELETE_ITEM, id };
}
export const toggleItem=id =>{
  return { type: TOGGLE_ITEM, id };
}
export const toggleHideComplete=()=>{
  return {type: TOGGLE_HIDE_COMPLETE}
}

export const initialState = {
  items: [
    { id: 1, content: 'Call mum' , isComplete:false},
    { id: 2, content: 'Buy cat food', isComplete:false },
    { id: 3, content: 'Water the plants', isComplete:false },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const nextId =
        state.items.reduce((id, item) => Math.max(item.id, id), 0) + 1;
      const newItem = {
        id: nextId,
        content: action.content,
      };

      return {
        ...state,
        items: [...state.items, newItem],
      };
    case DELETE_ITEM:
        return {
          ...state,
          items: state.items.filter((i)=> i.id!==action.id),
        };
    case TOGGLE_ITEM:
     return{
       ...state,
       items:state.items.map((i)=>{return i.id===action.id?{...i,isComplete:!i.isComplete}:i})
     }
    case TOGGLE_HIDE_COMPLETE:
     return{
       ...state,
       hideComplete:!state.hideComplete
     }
    default:
      return state;
  }
};

export default reducer;
