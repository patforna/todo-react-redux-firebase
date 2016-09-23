import {connect} from 'react-redux'
import {addTodo} from '../actions'
import Header from '../components/Header'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoAdd: (text) => {
      dispatch(addTodo(text))
    }
  }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer
