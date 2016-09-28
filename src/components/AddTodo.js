import React, { PropTypes } from 'react';

const ENTER_KEY = 13;

const AddTodo = ({ onAdd }) => (
  <input
    className="new-todo"
    placeholder="What needs to be done?"
    autoFocus
    onKeyDown={(e) => {
      const input = e.target.value.trim();
      if (e.keyCode !== ENTER_KEY || !input) {
        return;
      }
      e.preventDefault();
      onAdd(input);
      e.target.value = '';
    }}
  />
);

AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequired,
};


export default AddTodo;
