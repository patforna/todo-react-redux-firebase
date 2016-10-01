import React, { PropTypes } from 'react';

const Todo = ({ id, text, completed, onToggle, onDelete }) => (
  <li>
    <input
      id={id}
      className="toggle"
      type="checkbox"
      checked={completed}
      onChange={onToggle}
    />
    <label htmlFor={id} className="checkbox" />
    <label htmlFor={id} className="text">
      {text}
    </label>
    <button className="delete" onClick={onDelete} />
  </li>
);

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Todo;
