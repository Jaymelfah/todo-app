import React from 'react';
import AddTodo from '../components/AddTodo';
import TodoContainer from '../components/TodoContainer';

const Home = () => (
  <div className="border-solid border shadow-2xl w-1/4 p-6 rounded-2xl">
    <AddTodo />
    <TodoContainer />
  </div>
);

export default Home;
