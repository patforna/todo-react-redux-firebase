const todos = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_TODOS':
      console.log('reducing loaded todos')
      return action.todos

    case 'ADD_TODO':
      return [...state, { id: action.id, text: action.text, completed: false }]

    case 'TOGGLE_TODO':
      return state.map(t => {
        if (t.id === action.id) {
          return Object.assign({}, t, { completed: !t.completed })
        }
        return t
      })

    case 'DELETE_TODO':
      let index = state.findIndex(t => t.id === action.id)
      return [...state.slice(0, index), ...state.slice(index + 1)]

    default:
      return state
  }
}

export default todos
