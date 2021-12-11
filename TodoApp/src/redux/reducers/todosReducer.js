import {ADD_TODO, REMOVE_TODO} from '../actions/actionTypes';
const initialState = {
  todos: [],
};

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      let newTodos = initialState.todos;
      newTodos.push(action.todoText);
      return {...state, todos: newTodos};
    case REMOVE_TODO:
      let removeTodos = initialState.todos;
      removeTodos.splice(action.index, 1);
      return {...state, todos: removeTodos};
    default:
      return state;
  }
}

export default todosReducer;
