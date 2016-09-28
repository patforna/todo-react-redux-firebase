const todos = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_TODOS':
      return action.todos;
    default:
      return state;
  }
};

export default todos;
