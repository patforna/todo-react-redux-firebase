import firebase from 'firebase'

const db = (path = 'todos') => (
  firebase.database().ref(path)
)

export const loadTodos = (todos) => (dispatch) => {
  return db().limitToLast(10).on('value', (snap) => {
    // FIXME use normalizr
    let data = snap.val()
    let todos = Object.keys(data).map(k => {
      return {id: k, text: data[k].text, completed: data[k].completed};
    });
    dispatch({type: 'LOAD_TODOS', todos})
  });
}

export const addTodo = (text) => (dispatch) => {
  return db().push({text: text, completed: false})
    .catch(e => console.error('Error adding Todo: ', e));
}

export const toggleTodo = (id, completed) => (dispatch) => {
  return db(`todos/${id}`).update({ completed: !completed })
    .catch(e => console.error('Error toggling Todo: ', e));
}

export const deleteTodo = (id) => (dispatch) => {
  return db(`todos/${id}`).remove()
    .catch(e => console.error('Error deleting Todo: ', e));
}
