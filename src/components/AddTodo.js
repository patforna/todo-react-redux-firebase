import React from 'react'

const ENTER_KEY = 13

const AddTodo = ({onTodoAdd}) => (
  <input
    className="new-todo"
    placeholder="What needs to be done?"
    autoFocus={true}
    onKeyDown={e => {
      let input = e.target.value.trim()
  		if (e.keyCode !== ENTER_KEY || !input) {
  			return
  		}
	    e.preventDefault()
      onTodoAdd(input)
      e.target.value = ''
    }}
  />
)

export default AddTodo
