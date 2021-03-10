import { Action, ActionTypes, Todo } from '../actions';

export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.FetchTodos:
      return action.payload;
    case ActionTypes.DeleteTodo:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}
