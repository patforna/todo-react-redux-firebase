import React from 'react'

const Header = () => (
  <header className="header">
    <h1>TODO</h1>
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus={true}
    />
  </header>
)

export default Header
