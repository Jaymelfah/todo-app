import React, { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { nanoid } from 'nanoid';

const AddTodo = () => {
  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: nanoid(),
      task: item,
    };
    console.log(todo);
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
