import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsPlusLg } from 'react-icons/bs';
import { nanoid } from 'nanoid';
import { addTodo } from '../redux/todo';

const AddTodo = () => {
  const [item, setItem] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: nanoid(),
      task: item,
      isCompleted: false,
    };
    dispatch(addTodo(todo));
    setItem('');
  };

  return (
    <div>
      <form className="flex items-center" onSubmit={handleSubmit}>
        <input
          className="p-2 w-full rounded-s-xl border border-solid border-gray-300"
          name="item"
          value={item}
          type="text"
          placeholder="Add todo item"
          onChange={(e) => setItem(e.target.value)}
        />
        <button
          className="p-3 border border-solid border-gray-300 rounded-e-xl bg-lime-400"
          type="submit"
        >
          <BsPlusLg />
        </button>
      </form>
    </div>
  );
};
export default AddTodo;
