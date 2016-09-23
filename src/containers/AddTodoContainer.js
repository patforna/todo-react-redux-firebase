import {connect} from 'react-redux'
import {addTodo} from '../actions'
import AddTodo from '../components/AddTodo'

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoAdd: (text) => {
      dispatch(addTodo(text))
    }
  }
}

const AddTodoContainer = connect(undefined, mapDispatchToProps)(AddTodo)

export default AddTodoContainer
