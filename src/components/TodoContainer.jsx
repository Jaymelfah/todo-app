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
    <div className="mt-6 flex flex-col justify-center items-center">
      {
      todoList.map((item) => (
        <div key={item.id} className="flex justify-between w-11/12 border-b p-4 border-gray-300">
          <input
            type="checkbox"
            checked={item.isCompleted}
            onChange={() => updateTodo(item.id)}
          />
          <span className={`${item.isCompleted ? 'completed' : 'not-completed'}`}>{item.task}</span>
          <button
            onClick={() => handleClick(item.id)}
            type="button"
            className="hover:text-red-500"
          >
            <BsTrash />
          </button>
        </div>
      ))
    }
      <button
        onClick={handleDelete}
        type="button"
        className="mt-4 bg-red-500 shadow-lg shadow-cyan-500/50 w-2/6 text-xs rounded-2xl p-2 text-slate-100"
      >
        Delete All Completed
      </button>
    </div>
  );
};
export default TodoContainer;
