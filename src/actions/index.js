import firebase from 'firebase'

export const loadTodos = (todos) => (dispatch) => {
  let db = firebase.database().ref('todos')

  console.log('loading todos...');

  db.limitToLast(12).on('value', (snap) => {
    console.log("received todos from firebase");
    let data = snap.val()
    let todos = Object.keys(data).map(k => {
      return {id: k, text: data[k].text, completed: data[k].completed};
    });
    dispatch({type: 'LOAD_TODOS', todos: todos})
  });
}

let nextTodoId = 0
export const addTodo = (text) => {
  return {type: 'ADD_TODO', id: nextTodoId++, text}
}

export const toggleTodo = (id) => {
  return {type: 'TOGGLE_TODO', id} // FIXME: shouldn't this be id: id?
}

export const deleteTodo = (id) => {
  return {type: 'DELETE_TODO', id} // FIXME: shouldn't this be id: id?
}
