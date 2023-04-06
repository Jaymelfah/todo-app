import React from 'react';
import { BsTrash } from 'react-icons/bs';

const TodoContainer = () => {
  const todoList = [
    {
      id: 1,
      task: 'eat grocery',
      isCompleted: true,
    },
    {
      id: 2,
      task: 'eat grocery',
      isCompleted: false,
    },

    {
      id: 3,
      task: 'eat grocery',
      isCompleted: false,
    },

  ];

  const updateTodo = () => {
    // const updatedTodoList = todoList.map((item) => {
    //   if (item.id === id) {
    //     return {
    //       ...item,
    //       isCompleted: !item.isCompleted,
    //     };
    //   }
    //   return item;
    // });
    // dispatch(updateTodoList(updatedTodoList));
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
          <span>{item.task}</span>
          <BsTrash />
        </div>
      ))
    }
    </div>
  );
};
export default TodoContainer;
