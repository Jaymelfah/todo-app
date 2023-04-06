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
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          name="item"
          value={item}
          type="text"
          placeholder="Add todo item"
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit">
          <BsPlusLg />
        </button>
      </form>
    </div>
  );
};
export default AddTodo;
