import React from 'react'

const ENTER_KEY = 13

const Header = ({onTodoAdd}) => (

  <header className="header">
    <h1>TODO</h1>
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
  </header>
)

export default Header
