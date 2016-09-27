import {connect} from 'react-redux'
import {addTodo} from '../actions'
import AddTodo from '../components/AddTodo'

const AddTodoContainer = connect(null, {onAdd: addTodo})(AddTodo)

export default AddTodoContainer
