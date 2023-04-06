const ADD_TODO = 'todo/ADD_TODO';
const DELETE_TODO = 'todo/DELETE_TODO';
const UPDATE_TODO_LIST = 'todo/UPDATE_TODO_LIST';

const initialState = [];

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const deleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload,
});

export const updateTodoList = (updatedTodoList) => ({
  type: UPDATE_TODO_LIST,
  payload: updatedTodoList,
});

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO:
      return [...state, payload];
    case DELETE_TODO:
      return state.filter((item) => item.id !== payload);
    case UPDATE_TODO_LIST:
      return payload;
    default:
      return state;
  }
};

export default todoReducer;
