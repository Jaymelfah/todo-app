import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsTrash } from 'react-icons/bs';
import { deleteTodo, updateTodoList } from '../redux/todo';

const TodoContainer = () => {
  const todoList = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const updateTodo = (id) => {
    const updatedTodoList = todoList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isCompleted: !item.isCompleted,
        };
      }
      return item;
    });
    dispatch(updateTodoList(updatedTodoList));
  };

  const handleClick = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleDelete = () => {
    const updatedTodoList = todoList.filter((item) => item.isCompleted === false);
    dispatch(updateTodoList(updatedTodoList));
  };

  return (
    <div>
      {
      todoList.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            checked={item.isCompleted}
            onChange={() => updateTodo(item.id)}
          />
          <span className={`${item.isCompleted ? 'completed' : 'not-completed'}`}>{item.task}</span>
          <button
            onClick={() => handleClick(item.id)}
            type="button"
          >
            <BsTrash />
          </button>
        </div>
      ))
    }
      <button
        onClick={handleDelete}
        type="button"
      >
        Delete All Completed
      </button>
    </div>
  );
};
export default TodoContainer;
