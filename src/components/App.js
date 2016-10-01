import React from 'react';
import Header from '../components/Header';
import AddTodoContainer from '../containers/AddTodoContainer';
import TodoListContainer from '../containers/TodoListContainer';

const App = () => (
  <div>
    <Header />
    <section className="main">
      <AddTodoContainer />
      <TodoListContainer />
    </section>
  </div>
);

export default App;
