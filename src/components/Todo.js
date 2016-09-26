import React, {PropTypes} from 'react'
import classNames from 'classnames';

const Todo = ({text, completed, onToggle, onDelete}) => (
  <li className={classNames({completed: completed})}>
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={onToggle}/>
      <label>
        {text}
      </label>
      <button className="delete" onClick={onDelete}/>
    </div>
  </li>
)

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Todo
