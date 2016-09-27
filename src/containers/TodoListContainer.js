import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions'
import TodoList from '../components/TodoList'

class TodoListContainer extends Component {
  componentDidMount() {
    console.log('did mount');
    this.props.loadTodos();
  }

  render() {
    const { todos, toggleTodo, deleteTodo } = this.props;
    return (<TodoList
              todos={todos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}/>);
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
});

TodoListContainer = connect(mapStateToProps, actions)(TodoListContainer)

export default TodoListContainer
