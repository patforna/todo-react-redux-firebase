import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Todo from './Todo';

const TodoList = ({ todos, onToggle, onDelete }) => (
  <ul className={classNames('todo-list', { hidden: todos.length === 0 })}>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        id={todo.id}
        {...todo}
        onToggle={() => onToggle(todo.id, todo.completed)}
        onDelete={() => onDelete(todo.id)}
      />
    )}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoList;
