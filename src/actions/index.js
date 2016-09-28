/* eslint no-unused-vars: "off" */
import firebase from 'firebase';

const db = (path = 'todos') => (
  firebase.database().ref(path)
);

export const loadTodos = () => dispatch => (
  db().limitToLast(10).on('value', (snap) => {
    // FIXME use normalizr
    const data = snap.val();
    const todos = Object.keys(data).map(k => (
      { id: k, text: data[k].text, completed: data[k].completed }
    ));
    dispatch({ type: 'LOAD_TODOS', todos });
  })
);

export const addTodo = text => dispatch => (
  db().push({ text, completed: false })
    .catch(e => console.error('Error adding Todo: ', e))
);

export const toggleTodo = (id, completed) => dispatch => (
  db(`todos/${id}`).update({ completed: !completed })
    .catch(e => console.error('Error toggling Todo: ', e))
);

export const deleteTodo = id => dispatch => (
  db(`todos/${id}`).remove()
    .catch(e => console.error('Error deleting Todo: ', e))
);
