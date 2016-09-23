import React from 'react';
import Header from './Header';
import TodoListContainer from '../containers/TodoListContainer';
import '../App.css';

const App = () => (
  <div>
    <Header />
    <TodoListContainer />
  </div>
)

export default App;
