import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onToggle, onDelete }) => (
  <section className="main">
    <ul className="todo-list">
    {todos.map(todo =>
        <Todo
        key={todo.id}
        {...todo}
        onToggle={() => onToggle(todo.id, todo.completed)}
        onDelete={() => onDelete(todo.id)}
        />
        )}
    </ul>
  </section>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default TodoList
