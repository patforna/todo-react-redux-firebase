import React, {PropTypes} from 'react'
import classNames from 'classnames';

const Todo = ({onClick, completed, text}) => (
  <li className={classNames({completed: completed})}>
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={onClick}/>
      <label>
        {text}
      </label>
      <button className="destroy" onClick={() => true}/>
    </div>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
